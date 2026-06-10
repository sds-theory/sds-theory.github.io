import { ArrowRight, CalendarDays, GraduationCap, Newspaper } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { EventCard } from '../components/EventCard';
import { events, news, prospective, proposalIntro, researchAreas, textOf } from '../data/site';

export function Home() {
  const { i18n, t } = useTranslation();
  const upcoming = events.slice(0, 2);
  const titleLines = i18n.language.startsWith('zh')
    ? ['SDS CS', '理论研究组']
    : ['SDS CS', 'Theory Group'];
  const subtitleLines = i18n.language.startsWith('zh')
    ? ['致力推动理论基础研究的', '发展与应用。']
    : ['Committed to advancing theoretical', 'foundations and their applications.'];

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 -z-10">
          <img
            src={`${import.meta.env.BASE_URL}images/theory-hero.png`}
            alt=""
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#050607_0%,rgba(5,6,7,0.86)_42%,rgba(5,6,7,0.34)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px]" />
        </div>

        <div className="mx-auto grid min-h-[380px] max-w-7xl items-center px-4 py-12 sm:min-h-[440px] sm:px-6 lg:min-h-[480px] lg:px-8">
          <div className="max-w-3xl animate-rise">
            <h1 className="max-w-full text-5xl font-semibold leading-[1.14] sm:text-6xl sm:leading-[1.16] lg:text-7xl">
              {titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-5 max-w-3xl text-2xl font-medium leading-9 text-white sm:text-3xl">
              {subtitleLines.map((line, index) => (
                <span key={line} className="block sm:inline">
                  {line}
                  {!i18n.language.startsWith('zh') && index === 0 ? ' ' : ''}
                </span>
              ))}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/events"
                className="inline-flex items-center gap-2 rounded bg-copper px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#99582d]"
              >
                <CalendarDays size={18} />
                {t('actions.viewEvents')}
              </Link>
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
        <div className="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 sm:pt-12 lg:px-8">
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{t('home.introEyebrow')}</h2>
          <div className="mt-5 min-w-0 max-w-5xl space-y-4 break-all text-base leading-7 text-slate-600">
            {textOf(proposalIntro.body, i18n.language).split('\n\n').map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f9faf7]">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{t('home.areasTitle')}</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {researchAreas.map((area) => (
              <div
                key={textOf(area, i18n.language)}
                className="rounded border border-slate-200 bg-[#f9faf7] p-4 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-tealstone"
              >
                {textOf(area, i18n.language)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f2]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded border border-tealstone/20 bg-white p-6 shadow-xl shadow-tealstone/5 md:grid-cols-[auto_1fr_auto] md:items-center">
            <div className="grid h-14 w-14 place-items-center rounded bg-tealstone text-white">
              <GraduationCap size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-ink">{textOf(prospective.title, i18n.language)}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{textOf(prospective.body, i18n.language)}</p>
            </div>
            <a
              href={prospective.url}
              className="inline-flex items-center justify-center gap-2 rounded bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-tealstone"
            >
              {t('actions.admissions')}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{t('home.eventsTitle')}</h2>
            <Link
              to="/events"
              className="inline-flex w-fit items-center gap-2 rounded border border-slate-300 px-4 py-2 text-sm font-semibold text-ink transition hover:border-tealstone hover:text-tealstone"
            >
              {t('actions.viewCalendar')}
              <ArrowRight size={16} />
            </Link>
          </div>
          {upcoming.length > 0 ? (
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} compact />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded border border-slate-200 bg-[#f9faf7] p-6 text-sm text-slate-600">
              {t('events.empty')}
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#f9faf7]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{t('home.newsTitle')}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {news.map((item) => (
              <article
                key={`${item.date}-${textOf(item.title, i18n.language)}`}
                className="rounded border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-copper/60 hover:shadow-xl"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-copper">
                  <Newspaper size={16} />
                  {item.date}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-ink">{textOf(item.title, i18n.language)}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{textOf(item.summary, i18n.language)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
