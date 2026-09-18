import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = join(root, 'dist');
const template = await readFile(join(output, 'index.html'), 'utf8');
if (!template.includes('<!--page-head-->') || !template.includes('<!--app-html-->')) {
  throw new Error('Prerender placeholders are missing from the Vite output.');
}

const vite = await createServer({
  root,
  mode: 'production',
  server: { middlewareMode: true, hmr: false, watch: null },
  appType: 'custom',
});

try {
  const { renderPage, seoPages, pageUrl, siteUrl } = await vite.ssrLoadModule('/src/entry-server.tsx');
  for (const path of [...seoPages.map((page) => page.path), '/404']) {
    const { head, html } = await renderPage(path);
    const pageHtml = template
      .replace('<!--page-head-->', () => head)
      .replace('<!--app-html-->', () => html);
    const directory = path === '/' || path === '/404' ? output : join(output, path.slice(1));
    await mkdir(directory, { recursive: true });
    await writeFile(join(directory, path === '/404' ? '404.html' : 'index.html'), pageHtml);
    console.log(`Prerendered ${path}`);
  }

  const recruitUrl = pageUrl('/recruit');
  await mkdir(join(output, 'join-us'), { recursive: true });
  await writeFile(join(output, 'join-us', 'index.html'), `<!doctype html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admissions | SDS Theory Group</title><link rel="canonical" href="${recruitUrl}">
<meta http-equiv="refresh" content="0;url=${recruitUrl}"></head>
<body><p><a href="${recruitUrl}">Admissions and research opportunities</a></p></body></html>\n`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${seoPages.map((page) => `  <url><loc>${pageUrl(page.path)}</loc></url>`).join('\n')}
</urlset>\n`;
  await writeFile(join(output, 'sitemap.xml'), sitemap);
  await writeFile(join(output, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap.xml', siteUrl).href}\n`);
  await writeFile(join(output, '.nojekyll'), '');
} finally {
  await vite.close();
}
