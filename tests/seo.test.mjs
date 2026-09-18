import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { preview } from 'vite';

const server = await preview({ preview: { host: '127.0.0.1', port: 0, strictPort: true, open: false } });
const baseUrl = `http://127.0.0.1:${server.httpServer.address().port}`;

after(async () => {
  server.httpServer.closeAllConnections();
  await new Promise((resolve, reject) => server.httpServer.close((error) => error ? reject(error) : resolve()));
});

const pages = [
  ['/', 'Does AI Help or Harm? Endogenous Information Acquisition with AI Advice'],
  ['/faculty/', 'Jingbang Chen'],
  ['/students/', 'M.Hossein Ghasemi'],
  ['/events/', 'Local Search for Clustering in Almost-Linear Time'],
  ['/recruit/', 'PhD'],
  ['/collaborate/', 'collaboration'],
  ['/contact/', 'sds_theory@outlook.com'],
];

test('every public page serves its content and unique metadata without JavaScript', async () => {
  const titles = new Set();
  for (const [path, content] of pages) {
    const response = await fetch(`${baseUrl}${path}`);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.ok(html.includes(content), `${path} must contain its own content`);
    assert.match(html, /<main[\s>]/);
    assert.match(html, /name="robots" content="index, follow"/);
    assert.ok(html.includes(`rel="canonical" href="https://sds-theory.github.io${path}"`), path);
    assert.equal((html.match(/rel="canonical"/g) ?? []).length, 1, path);
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    assert.ok(title, path);
    titles.add(title);
    assert.ok(!html.includes('gh-pages-redirect'), path);
  }
  assert.equal(titles.size, pages.length);
});

test('old slashless links resolve to the correct static page', async () => {
  for (const [path, content] of pages.slice(1)) {
    const response = await fetch(`${baseUrl}${path.slice(0, -1)}`);
    assert.equal(response.status, 200, path);
    assert.ok((await response.text()).includes(content), path);
  }
});

test('missing pages remain 404 and the custom error page is not indexable', async () => {
  const missing = await fetch(`${baseUrl}/missing-page-for-seo-check`);
  assert.equal(missing.status, 404);
  const html = await (await fetch(`${baseUrl}/404.html`)).text();
  assert.match(html, /Page not found/);
  assert.match(html, /name="robots" content="noindex, follow"/);
  assert.ok(!html.includes('rel="canonical"'));
});

test('the sitemap lists public canonical URLs and robots allows crawling', async () => {
  const response = await fetch(`${baseUrl}/sitemap.xml`);
  assert.equal(response.status, 200);
  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(urls, pages.map(([path]) => `https://sds-theory.github.io${path}`));
  const robots = await (await fetch(`${baseUrl}/robots.txt`)).text();
  assert.match(robots, /User-agent: \*/);
  assert.match(robots, /Allow: \//);
  assert.match(robots, /Sitemap: https:\/\/sds-theory.github.io\/sitemap.xml/);
  assert.ok(!robots.includes('Disallow: /'));
});

test('the old join-us URL redirects to admissions without JavaScript', async () => {
  const response = await fetch(`${baseUrl}/join-us/`);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /http-equiv="refresh" content="0;url=https:\/\/sds-theory.github.io\/recruit\/"/);
  assert.match(html, /rel="canonical" href="https:\/\/sds-theory.github.io\/recruit\/"/);
});
