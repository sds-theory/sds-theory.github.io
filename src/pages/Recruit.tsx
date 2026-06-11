import { ArrowRight, GraduationCap, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { recruit, textOf } from '../data/site';

export function Recruit() {
  const { i18n, t } = useTranslation();

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#050607_0%,#102723_58%,#8f4e29_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl animate-rise">
            <div className="inline-flex items-center gap-2 rounded border border-white/24 bg-white/10 px-3 py-2 text-sm font-semibold text-white">
              <Sparkles size={16} />
              {t('nav.recruit')}
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              {textOf(recruit.title, i18n.language)}
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-8 text-white/86">
              {textOf(recruit.subtitle, i18n.language)}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={recruit.admissionsUrl}
                className="inline-flex items-center gap-2 rounded bg-copper px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#99582d]"
              >
                {t('actions.admissions')}
                <ArrowRight size={18} />
              </a>
              <Link
                to="/faculty"
                className="inline-flex items-center gap-2 rounded border border-white/24 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/14"
              >
                {t('nav.faculty')}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="rounded border border-slate-200 bg-[#f9faf7] p-6">
            <div className="grid h-12 w-12 place-items-center rounded bg-tealstone text-white">
              <GraduationCap size={25} />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-ink">{textOf(recruit.title, i18n.language)}</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{textOf(recruit.body, i18n.language)}</p>
          </div>

          <div className="grid gap-3">
            {recruit.sections.map((section, index) => (
              <article key={textOf(section.title, i18n.language)} className="rounded border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex gap-4">
                  <div className="grid h-9 w-9 flex-none place-items-center rounded bg-ink text-xs font-semibold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{textOf(section.title, i18n.language)}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{textOf(section.body, i18n.language)}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
