import { ArrowRight, Handshake, Mail, Network, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { collaborations, site, textOf } from '../data/site';

export function Collaborate() {
  const { i18n, t } = useTranslation();

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#050607_0%,#122825_52%,#8f4e29_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl animate-rise">
            <div className="inline-flex items-center gap-2 rounded border border-white/24 bg-white/10 px-3 py-2 text-sm font-semibold text-white">
              <Handshake size={16} />
              {t('nav.collaborate')}
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              {textOf(collaborations.title, i18n.language)}
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-8 text-white/86">
              {textOf(collaborations.subtitle, i18n.language)}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded bg-copper px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#99582d]"
              >
                {t('actions.contactUs')}
                <ArrowRight size={18} />
              </a>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 rounded border border-white/24 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/14"
              >
                {t('nav.events')}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-4xl border-l-4 border-copper pl-6">
            <p className="text-lg leading-8 text-slate-700">{textOf(collaborations.body, i18n.language)}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {collaborations.principles.map((item, index) => (
              <article key={textOf(item.title, i18n.language)} className="rounded border border-slate-200 bg-[#f9faf7] p-5">
                <div className="grid h-10 w-10 place-items-center rounded bg-ink text-sm font-semibold text-white">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h2 className="mt-4 text-lg font-semibold text-ink">{textOf(item.title, i18n.language)}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{textOf(item.body, i18n.language)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f9faf7]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Network className="text-tealstone" size={24} />
            <h2 className="text-3xl font-semibold text-ink">{textOf(collaborations.title, i18n.language)}</h2>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {collaborations.channels.map((item) => (
              <article key={textOf(item.title, i18n.language)} className="rounded border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-1 flex-none text-copper" size={18} />
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{textOf(item.title, i18n.language)}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{textOf(item.body, i18n.language)}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-5 rounded border border-tealstone/20 bg-[#eef5f2] p-6 md:grid-cols-[auto_1fr_auto] md:items-center">
            <div className="grid h-12 w-12 place-items-center rounded bg-ink text-white">
              <Mail size={23} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-ink">{t('contact.title')}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{site.email}</p>
            </div>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 rounded bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-tealstone"
            >
              {t('actions.contactUs')}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
