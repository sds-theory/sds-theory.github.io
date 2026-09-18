# SDS Theory Group Website

Website source for the SDS Theory Group.

## Local Development

```bash
npm install
npm run dev
```

The development server prints a local URL such as `http://localhost:5173/`.
For this Codex session, the preview is currently running at:

```text
http://127.0.0.1:5174/
```

The site uses Vite, React, TypeScript, Tailwind, `react-router-dom`, `react-i18next`, and `lucide-react`, matching the same general npm workflow as `chenjb1997.github.io`.

## Build

```bash
npm run build
npm run test:seo
npm run preview
```

The build prerenders the seven public pages into static HTML, including their
content, titles, descriptions, and canonical URLs. It also generates
`sitemap.xml`, `robots.txt`, a real `404.html`, and the `/join-us/` redirect.
GitHub Pages serves each page from its own directory, so direct links and
refreshes work without a JavaScript 404 redirect. React hydrates the generated
English content and then restores the visitor's preferred language.

Page metadata and the list of pages to prerender live in `src/data/seo.ts`.
Add new public routes there as well as in `src/App.tsx`. Run `npm run build`
before deploying; publishing only `vite build` output skips prerendering.

After deployment, verify `https://sds-theory.github.io/` in Google Search Console,
submit `https://sds-theory.github.io/sitemap.xml`, and use URL Inspection to
request indexing. Search Console verification requires the site owner's Google
account. Crawling and indexing remain under Google's control.

## Content Updates

Most first-version content lives in:

- `src/data/site.ts`

Update this file for members, research areas, seminar entries, news, events, contact email, and the GitHub link.

Current pages:

- Home
- Faculty
- Students
- Events

Implemented site behavior:

- Language defaults to the user's browser/system language, with a manual English/Chinese toggle.
- Events include Google Calendar links and downloadable `.ics` files.
- The mobile layout uses a compact navigation menu and responsive cards.

## GitHub Pages

This project builds with Vite and deploys the `dist` folder to the `gh-pages` branch through `.github/workflows/deploy.yml`.

For a normal project repository named `sds-theory`, the Vite base path is detected as `/sds-theory/` in GitHub Actions. For a user or organization page repository such as `sds-theory.github.io`, the base path is `/`.

After pushing to GitHub:

1. Open the repository settings.
2. Go to Pages.
3. Set the source to the `gh-pages` branch.
4. Keep the folder as `/`.

## Project Notes

The first version is based on the proposal for establishing an SDS Theory Group. It intentionally keeps the operation lightweight: public pages for people, research directions, seminars, reading groups, visitors or events, selected publications, and contact information.
