import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../components/SectionHeading';
import { contact, site, textOf } from '../data/site';

export function Contact() {
  const { i18n, t } = useTranslation();

  return (
    <main className="min-h-screen bg-[#f9faf7] dark:bg-black">
      <section className="border-b border-slate-200 bg-white dark:border-white/10 dark:bg-[#090b0d]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t('nav.contact')}
            title={textOf(contact.title, i18n.language)}
            summary={textOf(contact.body, i18n.language)}
          />
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-2xl rounded border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
            <p className="text-sm font-semibold uppercase tracking-normal text-copper">{t('contact.emailLabel')}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex items-center gap-3 text-2xl font-semibold text-ink transition hover:text-tealstone dark:text-white"
            >
              <Mail size={24} />
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
