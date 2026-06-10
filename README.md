# SDS CS Theory Group Website

Website source for the SDS CS Theory Group.

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
npm run preview
```

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

The first version is based on the proposal for establishing an SDS CS Theory Group. It intentionally keeps the operation lightweight: public pages for people, research directions, seminars, reading groups, visitors or events, selected publications, and contact information.
