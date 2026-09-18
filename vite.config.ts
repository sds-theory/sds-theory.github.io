import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { existsSync } from 'node:fs';
import { relative, resolve } from 'node:path';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserOrOrgPage = repository.endsWith('.github.io');
const pagesBase = process.env.PAGES_BASE ?? (repository && !isUserOrOrgPage ? `/${repository}/` : '/');

export default defineConfig(({ isPreview }) => ({
  plugins: [
    react(),
    {
      name: 'static-pages-preview',
      configurePreviewServer(server) {
        const output = resolve(server.config.root, server.config.build.outDir);
        // Mirror GitHub Pages directory redirects instead of hiding missing pages with an SPA fallback.
        server.middlewares.use((request, response, next) => {
          const url = new URL(request.url ?? '/', 'http://localhost');
          if (!url.pathname.endsWith('/') && url.pathname.startsWith(server.config.base)) {
            const path = url.pathname.slice(server.config.base.length);
            const index = resolve(output, path, 'index.html');
            if (!relative(output, index).startsWith('..') && existsSync(index)) {
              response.writeHead(301, { Location: `${url.pathname}/${url.search}` });
              response.end();
              return;
            }
          }
          next();
        });
      },
    },
  ],
  base: pagesBase,
  appType: isPreview ? 'mpa' : 'spa',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
