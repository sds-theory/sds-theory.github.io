import { StrictMode } from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppShell } from './App';
import { pageMetadata } from './data/seo';
import i18n from './language/i18n';

export { pageUrl, seoPages, siteUrl } from './data/seo';

export async function renderPage(path: string) {
  await i18n.changeLanguage('en');
  const { title, tags } = pageMetadata(path, 'en');
  const head = renderToStaticMarkup(
    <>
      <title>{title}</title>
      {tags.map((attributes, index) => 'rel' in attributes
        ? <link key={index} data-page-meta="" {...attributes} />
        : <meta key={index} data-page-meta="" {...attributes} />)}
    </>,
  );
  const base = import.meta.env.BASE_URL;
  const html = renderToString(
    <StrictMode>
      <StaticRouter basename={base} location={`${base.replace(/\/$/, '')}${path}`}>
        <AppShell />
      </StaticRouter>
    </StrictMode>,
  );
  return { head, html };
}
