import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { pageMetadata } from '../data/seo';

export function PageMetadata() {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const { title, tags } = pageMetadata(pathname, i18n.language);
    document.title = title;
    document.head.querySelectorAll('[data-page-meta]').forEach((node) => node.remove());
    for (const attributes of tags) {
      const element = document.createElement('rel' in attributes ? 'link' : 'meta');
      element.setAttribute('data-page-meta', '');
      for (const [name, value] of Object.entries(attributes)) {
        element.setAttribute(name, value);
      }
      document.head.appendChild(element);
    }
  }, [pathname, i18n.language]);

  return null;
}
