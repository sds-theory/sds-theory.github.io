import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ExternalLink,
  Newspaper,
  X,
} from 'lucide-react';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  colleagueRecruitment,
  eventTracks,
  events,
  homepagePillars,
  heroIntro,
  news,
  researchAreas,
  sdsPlatformDetails,
  sdsPlatformFacts,
  site,
  textOf,
} from '../data/site';

const pillarWatermarks = {
  platform: 'images/sds-campus-watermark.jpg',
  faculty: 'images/sds-pillar-faculty.jpg',
  training: 'images/sds-pillar-training.jpg',
  atmosphere: 'images/sds-pillar-algorithms.png',
};

function useRevealOnView<T extends HTMLElement>(resetKey: string) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
  }, [resetKey]);

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -16% 0px', threshold: 0.18 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible, resetKey]);

  return { ref, isVisible };
}

function ActionLink({
  href,
  children,
  variant = 'dark',
}: {
  href: string;
  children: ReactNode;
  variant?: 'dark' | 'light' | 'outline';
}) {
  const className = `inline-flex items-center justify-center gap-2 rounded px-4 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${
    variant === 'dark'
      ? 'bg-ink text-white shadow-lg shadow-ink/10 hover:bg-tealstone'
      : variant === 'light'
        ? 'bg-white text-ink shadow-lg shadow-tealstone/10 hover:text-tealstone'
        : 'border border-slate-300 bg-white/70 text-ink hover:border-tealstone hover:text-tealstone'
  }`;

  if (href.startsWith('http')) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
        <ArrowRight size={16} />
      </a>
    );
  }

  if (href.startsWith('#')) {
    return (
      <a href={href} className={className}>
        {children}
        <ArrowRight size={16} />
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}

export function Home() {
  const { i18n, t } = useTranslation();
  const [isSdsModalOpen, setIsSdsModalOpen] = useState(false);
  const isChinese = i18n.language.startsWith('zh');
  const languageKey = isChinese ? 'zh' : 'en';
  const whyReveal = useRevealOnView<HTMLElement>(languageKey);
  const titleLines = isChinese
    ? ['SDS CS', '理论研究组']
    : ['SDS CS', 'Theory Group'];
  const subtitleLines = textOf(site.tagline, i18n.language).split(' for ');
  const recentNews = news.slice(0, 5);

  useEffect(() => {
    if (!isSdsModalOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSdsModalOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isSdsModalOpen]);

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#060a0b] text-white">
        <div className="absolute inset-0 -z-10">
          <img
            src={`${import.meta.env.BASE_URL}images/theory-hero.png`}
            alt=""
            className="h-full w-full object-cover opacity-[0.34] mix-blend-screen"
          />
          <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(3,7,8,0.98)_0%,rgba(7,15,17,0.95)_48%,rgba(28,74,75,0.72)_100%)]" />
          <div className="soft-grid hero-grid absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-tealstone/70 to-transparent" />
        </div>

        <div className="mx-auto min-h-[350px] max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="grid min-h-[260px] items-center">
            <div key={`hero-copy-${languageKey}`} className="max-w-5xl translate-y-5">
              <h1 className="hero-title-in max-w-5xl text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
                {titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="hero-subtitle-in mt-4 max-w-4xl text-xl font-semibold leading-8 text-white sm:text-2xl">
                {isChinese ? (
                  <>
                    以严谨的算法与数学方法，探索数据、学习、优化
                    <span className="block">与决策系统的理论基础。</span>
                  </>
                ) : (
                  <>
                    {subtitleLines[0]} for
                    <span className="block text-white">{subtitleLines.slice(1).join(' for ')}</span>
                  </>
                )}
              </p>
              <p className="hero-about-in mt-4 max-w-4xl border-l border-tealstone/70 pl-5 text-sm leading-6 text-slate-300">
                {textOf(heroIntro, i18n.language)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={whyReveal.ref} className="bg-[#f2f8f7]" id="why">
        <div className="mx-auto max-w-7xl px-4 pb-11 pt-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className={`reveal-left text-3xl font-semibold text-ink sm:text-4xl ${whyReveal.isVisible ? 'is-visible' : ''}`}>
              {t('home.whyTitle')}
            </h2>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-4">
            {homepagePillars.map((pillar, index) => {
              const watermark = pillarWatermarks[pillar.id as keyof typeof pillarWatermarks];
              const watermarkTone =
                pillar.id === 'training'
                  ? 'opacity-[0.13] saturate-[0.75] group-hover:opacity-[0.18]'
                  : pillar.id === 'atmosphere'
                    ? 'opacity-[0.14] saturate-[0.8] group-hover:opacity-[0.19]'
                    : 'opacity-[0.24] saturate-[0.9] group-hover:opacity-[0.32]';
              return (
                <article
                  key={`${pillar.id}-${languageKey}`}
                  className={`pop-card lift-card group relative flex min-h-[430px] flex-col overflow-hidden rounded border border-slate-200 bg-[#fbfefd] p-5 shadow-sm ${
                    whyReveal.isVisible ? 'is-visible' : ''
                  }`}
                  style={{ transitionDelay: `${index * 95}ms`, animationDelay: `${index * 95}ms` }}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-14 -top-5 z-0 h-60 w-80 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_62%,transparent_100%)]"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}${watermark}`}
                      alt=""
                      className={`h-full w-full object-cover mix-blend-multiply grayscale-[8%] transition duration-700 [mask-image:linear-gradient(90deg,transparent_0%,black_34%,black_100%)] group-hover:scale-[1.03] ${watermarkTone}`}
                    />
                  </div>
                  <div className={`relative z-10 ${isChinese ? 'lg:min-h-[210px]' : 'lg:min-h-[290px]'}`}>
                    <p className="text-xs font-semibold uppercase tracking-normal text-copper">
                      {textOf(pillar.subtitle, i18n.language)}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold leading-8 text-ink">
                      {textOf(pillar.title, i18n.language)
                        .split('\n')
                        .map((line, lineIndex) => (
                          <span key={`${pillar.id}-${lineIndex}`} className="block">
                            {line}
                          </span>
                        ))}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      {textOf(pillar.description, i18n.language)}
                    </p>
                  </div>

                  <div className={`relative z-10 ${isChinese ? 'mt-5' : 'mt-3'} space-y-3`}>
                    {pillar.points.map((point) => (
                      <div key={textOf(point.title, i18n.language)} className="rounded border border-slate-200 bg-white/85 p-3">
                        <div className="flex items-center gap-2.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-copper/70" />
                          <p className="text-sm font-semibold text-ink">{textOf(point.title, i18n.language)}</p>
                        </div>
                        <p className="mt-2 text-xs leading-5 text-slate-600">{textOf(point.body, i18n.language)}</p>
                      </div>
                    ))}
                  </div>

                  <div className="relative z-10 mt-auto flex flex-wrap justify-center gap-4 pt-6">
                    {pillar.id === 'platform' ? (
                      <>
                        <button
                          type="button"
                          aria-haspopup="dialog"
                          onClick={() => setIsSdsModalOpen(true)}
                          className="inline-flex items-center justify-center gap-2 rounded bg-ink px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-ink/10 transition duration-300 hover:-translate-y-0.5 hover:bg-tealstone"
                        >
                          {isChinese ? '深入了解' : 'Explore'}
                          <ArrowRight size={16} />
                        </button>
                        <ActionLink href={pillar.cta.href} variant="outline">
                          {textOf(pillar.cta.label, i18n.language)}
                        </ActionLink>
                      </>
                    ) : (
                      <ActionLink href={pillar.cta.href}>{textOf(pillar.cta.label, i18n.language)}</ActionLink>
                    )}
                    {pillar.id === 'faculty' && (
                      <ActionLink href={colleagueRecruitment.cta.href} variant="outline">
                        {isChinese ? '加入我们' : 'Join Us'}
                      </ActionLink>
                    )}
                    {pillar.id === 'training' && (
                      <ActionLink href="/students" variant="outline">
                        {isChinese ? '现有学生' : 'Current Students'}
                      </ActionLink>
                    )}
                    {pillar.id === 'atmosphere' && (
                      <ActionLink href="/collaborate" variant="outline">
                        {isChinese ? '学术合作' : 'Academic Collaboration'}
                      </ActionLink>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f6fbfa]" id="research">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{t('home.areasTitle')}</h2>
            </div>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {researchAreas.map((area, index) => (
              <article
                key={textOf(area.title, i18n.language)}
                className="motion-card lift-card rounded border border-slate-200 bg-white p-5 shadow-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-copper">{String(index + 1).padStart(2, '0')}</span>
                  <BookOpen className="text-tealstone" size={21} />
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-7 text-ink">{textOf(area.title, i18n.language)}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{textOf(area.summary, i18n.language)}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {area.topics.map((topic) => (
                    <span key={textOf(topic, i18n.language)} className="rounded border border-slate-200 bg-[#f9faf7] px-2.5 py-1 text-xs font-medium text-slate-600">
                      {textOf(topic, i18n.language)}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{t('home.newsTitle')}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {recentNews.map((item, index) => (
              <article
                key={`${item.date}-${textOf(item.title, i18n.language)}`}
                className="motion-card lift-card rounded border border-slate-200 bg-[#fbfefd] p-4 shadow-sm"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-copper">
                  <Newspaper size={16} />
                  {item.date}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-ink">{textOf(item.title, i18n.language)}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{textOf(item.summary, i18n.language)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6fbfa]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{t('home.activitiesTitle')}</h2>

          {events.length === 0 && (
            <div className="mt-5 rounded border border-tealstone/20 bg-[#eef8f6] p-4 text-sm leading-6 text-slate-600">
              {t('events.intro')}
            </div>
          )}

          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {eventTracks.map((track, index) => (
              <article key={textOf(track.title, i18n.language)} className="motion-card lift-card rounded border border-slate-200 bg-white p-4 shadow-sm" style={{ animationDelay: `${index * 70}ms` }}>
                <div className="flex items-start gap-3">
                  <CalendarDays className="mt-1 flex-none text-tealstone" size={20} />
                  <div>
                    <h3 className="text-base font-semibold text-ink">{textOf(track.title, i18n.language)}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{textOf(track.body, i18n.language)}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {isSdsModalOpen && (
        <div
          className="modal-backdrop fixed inset-0 z-50 overflow-y-auto bg-white/72 px-4 py-6 backdrop-blur-sm sm:py-10"
          onMouseDown={() => setIsSdsModalOpen(false)}
        >
          <div className="flex min-h-full items-center justify-center">
            <section
              role="dialog"
              aria-modal="true"
              aria-labelledby="sds-platform-title"
              className="modal-panel relative w-full max-w-6xl overflow-hidden rounded border border-white/80 bg-white shadow-2xl shadow-ink/25"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/sds-campus-watermark.jpg`}
                alt=""
                className="pointer-events-none absolute right-0 top-0 h-72 w-full object-cover opacity-[0.08]"
              />
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-tealstone via-copper to-tealstone" />
              <button
                type="button"
                aria-label={isChinese ? '关闭' : 'Close'}
                onClick={() => setIsSdsModalOpen(false)}
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/90 text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-tealstone hover:text-tealstone"
              >
                <X size={18} />
              </button>

              <div className="relative px-5 py-7 sm:px-8 sm:py-9 lg:px-10">
                <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-normal text-copper">
                      {textOf(sdsPlatformFacts.label, i18n.language)}
                    </p>
                    <h2 id="sds-platform-title" className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-ink sm:text-5xl">
                      {isChinese ? '支撑理论研究的学院平台' : 'The SDS Platform for Theory Research'}
                    </h2>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                      {isChinese
                        ? 'SDS CS 理论研究组扎根于数据科学学院的交叉学科生态。计算机科学、统计学、运筹优化、机器学习、人工智能和决策分析等方向在这里自然交汇，为面向现代数据与决策系统的理论研究提供土壤。'
                        : 'The SDS CS Theory Group is embedded in the School of Data Science, where computer science, statistics, operations research, machine learning, artificial intelligence, and decision analytics meet around modern data and decision systems.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 rounded border border-tealstone/20 bg-[#f6fbfa]/90 p-3">
                    {sdsPlatformFacts.facts.map((fact) => (
                      <div key={`${fact.value}-${textOf(fact.label, i18n.language)}`} className="rounded bg-white p-3 shadow-sm">
                        <p className="text-3xl font-semibold leading-none text-ink">{fact.value}</p>
                        <p className="mt-2 text-xs leading-5 text-slate-500">{textOf(fact.label, i18n.language)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 grid gap-4 md:grid-cols-2">
                  {sdsPlatformDetails.map((item) => (
                    <article key={textOf(item.title, i18n.language)} className="rounded border border-slate-200 bg-white/88 p-5 shadow-sm">
                      <h3 className="text-lg font-semibold text-ink">{textOf(item.title, i18n.language)}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{textOf(item.body, i18n.language)}</p>
                    </article>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap justify-center gap-5 border-t border-slate-200 pt-5 sm:gap-6">
                  {[
                    {
                      label: isChinese ? '学院官网' : 'SDS Website',
                      href: site.sdsUrl,
                    },
                    {
                      label: isChinese ? '学术科研' : 'Research at SDS',
                      href: 'https://sds.cuhk.edu.cn/research',
                    },
                    {
                      label: textOf(colleagueRecruitment.cta.label, i18n.language),
                      href: colleagueRecruitment.cta.href,
                    },
                  ].map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-tealstone hover:text-tealstone hover:shadow-md"
                    >
                      {link.label}
                      <ExternalLink size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </main>
  );
}
