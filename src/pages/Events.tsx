import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EventCard } from '../components/EventCard';
import { SectionHeading } from '../components/SectionHeading';
import { eventTracks, events, textOf, type TheoryEvent } from '../data/site';
import { calendarDate, formatVisitRange, seminarOccursOn, visitOccursOn } from '../lib/eventDates';

function monthDays(reference: Date) {
  const year = reference.getUTCFullYear();
  const month = reference.getUTCMonth();
  const first = new Date(Date.UTC(year, month, 1));
  const start = new Date(first);
  start.setUTCDate(first.getUTCDate() - first.getUTCDay());

  return Array.from({ length: 42 }, (_, index) => {
    const day = new Date(start);
    day.setUTCDate(start.getUTCDate() + index);
    return day;
  });
}

function compactSpeaker(event: TheoryEvent, language: string) {
  return textOf(event.speaker, language)
    .replace(/^Prof\.\s*/, '')
    .replace(/\s*(教授|研究员)$/, '');
}

export function Events() {
  const { i18n, t } = useTranslation();
  const [selectedId, setSelectedId] = useState(events[0]?.id ?? '');
  const selected = events.find((event) => event.id === selectedId) ?? events[0];
  const [visibleMonth, setVisibleMonth] = useState(() => calendarDate(events[0]?.start ?? '2026-09-01T00:00:00+08:00'));
  const days = useMemo(() => monthDays(visibleMonth), [visibleMonth]);
  const locale = i18n.language.startsWith('zh') ? 'zh-CN' : 'en-US';
  const changeMonth = (offset: number) => {
    setVisibleMonth((current) => new Date(Date.UTC(current.getUTCFullYear(), current.getUTCMonth() + offset, 1)));
  };
  const selectEvent = (event: TheoryEvent) => {
    setSelectedId(event.id);
    setVisibleMonth(calendarDate(event.start));
  };

  return (
    <main className="min-h-screen bg-[#f9faf7]">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading title={t('events.title')} summary={t('events.intro')} />
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="min-w-0 rounded border border-slate-200 bg-white p-4 shadow-sm" aria-label={t('events.calendar')}>
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-normal text-copper">{t('events.calendar')}</p>
                <h2 className="mt-1 text-2xl font-semibold text-ink" aria-live="polite">
                  {new Intl.DateTimeFormat(locale, { timeZone: 'UTC', month: 'long', year: 'numeric' }).format(visibleMonth)}
                </h2>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => changeMonth(-1)} aria-label={t('events.previousMonth')} title={t('events.previousMonth')} className="grid h-9 w-9 place-items-center rounded border border-slate-200 text-ink transition hover:border-tealstone hover:text-tealstone">
                  <ChevronLeft size={19} />
                </button>
                <button type="button" onClick={() => changeMonth(1)} aria-label={t('events.nextMonth')} title={t('events.nextMonth')} className="grid h-9 w-9 place-items-center rounded border border-slate-200 text-ink transition hover:border-tealstone hover:text-tealstone">
                  <ChevronRight size={19} />
                </button>
              </div>
            </div>

            <div className="-mx-1 mt-4 overflow-x-auto pb-2">
              <div className="min-w-[28rem] px-1">
                <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-slate-500">
                  {Array.from({ length: 7 }, (_, index) => {
                    const day = new Date(Date.UTC(2026, 1, index + 1));
                    return <div key={index}>{new Intl.DateTimeFormat(locale, { timeZone: 'UTC', weekday: 'short' }).format(day)}</div>;
                  })}
                </div>
                <div className="mt-2 grid grid-cols-7 gap-1">
                  {days.map((day) => {
                    const dayEvents = events.filter((event) => seminarOccursOn(event, day) || visitOccursOn(event, day));
                    const isCurrentMonth = day.getUTCMonth() === visibleMonth.getUTCMonth();
                    const isSelectedDay = dayEvents.some((event) => event.id === selectedId);
                    return (
                      <div
                        key={day.toISOString()}
                        data-calendar-date={day.toISOString().slice(0, 10)}
                        className={`min-h-24 min-w-0 rounded border p-1 text-left transition ${
                          dayEvents.length
                            ? 'border-tealstone/30 bg-tealstone/5 text-ink'
                            : 'border-slate-200 bg-[#f9faf7] text-slate-400'
                        } ${isSelectedDay ? 'ring-2 ring-tealstone/55' : ''} ${isCurrentMonth ? '' : 'opacity-45'}`}
                      >
                        <span className="px-1 text-xs font-semibold">{day.getUTCDate()}</span>
                        {dayEvents.map((event) => {
                          const hasSeminar = seminarOccursOn(event, day);
                          const hasVisit = visitOccursOn(event, day);
                          const time = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Shanghai', hour: '2-digit', minute: '2-digit' }).format(new Date(event.start));
                          const label = `${day.toISOString().slice(0, 10)}: ${compactSpeaker(event, i18n.language)}; ${hasVisit ? `${t('events.visit')}: ${formatVisitRange(event, i18n.language)}; ` : ''}${hasSeminar ? `${time} ${textOf(event.title, i18n.language)}` : ''}`;
                          return (
                            <button
                              key={event.id}
                              type="button"
                              aria-label={label}
                              title={label}
                              aria-pressed={event.id === selectedId}
                              onClick={() => setSelectedId(event.id)}
                              className="mt-1 block w-full rounded px-1 py-1 text-left transition hover:bg-tealstone/10 focus-visible:outline-tealstone"
                            >
                              <span className="block whitespace-nowrap text-[10px] font-semibold leading-4 text-ink">
                                {compactSpeaker(event, i18n.language)}
                              </span>
                              {hasVisit && <span className="block text-[10px] font-medium leading-4 text-tealstone">{t('events.visitShort')}</span>}
                              {hasSeminar && (
                                <span className="mt-0.5 block border-l-2 border-copper pl-1 text-[10px] leading-4 text-copper">
                                  <span className="block">{time}</span>{t('events.seminarShort')}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <SectionHeading
              title={selected ? textOf(selected.title, i18n.language) : t('events.launchTitle')}
              summary={!selected ? t('events.intro') : undefined}
            />
            {selected && (
              <div className="mt-6">
                <EventCard key={selected.id} event={selected} />
              </div>
            )}
            {!selected && (
              <div className="mt-6 grid gap-3">
                {eventTracks.map((track) => (
                  <article key={textOf(track.title, i18n.language)} className="rounded border border-slate-200 bg-white p-4 shadow-sm">
                    <h3 className="text-base font-semibold text-ink">{textOf(track.title, i18n.language)}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{textOf(track.body, i18n.language)}</p>
                  </article>
                ))}
              </div>
            )}
            {events.length > 0 && <div className="mt-8 grid gap-3">
              {events.map((event) => (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => selectEvent(event)}
                  aria-pressed={event.id === selectedId}
                  className={`rounded border p-4 text-left transition hover:-translate-y-0.5 ${
                    event.id === selectedId
                      ? 'border-tealstone bg-tealstone/10'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <p className="text-sm font-semibold text-ink">{textOf(event.title, i18n.language)}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {compactSpeaker(event, i18n.language)} · {' '}
                    {new Intl.DateTimeFormat(locale, {
                      timeZone: 'Asia/Shanghai',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    }).format(new Date(event.start))}
                  </p>
                  {event.visit && <p className="mt-1 text-xs font-medium text-tealstone">{t('events.visit')}: {formatVisitRange(event, i18n.language)}</p>}
                </button>
              ))}
            </div>}
          </div>
        </div>
      </section>
    </main>
  );
}
