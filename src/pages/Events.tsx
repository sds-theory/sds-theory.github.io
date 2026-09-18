import { CalendarDays } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EventCard } from '../components/EventCard';
import { SectionHeading } from '../components/SectionHeading';
import { eventTracks, events, textOf, type TheoryEvent } from '../data/site';

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

// Calendar cells represent dates at the venue, independently of the viewer's time zone.
function calendarDate(start: string) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Shanghai', year: 'numeric', month: 'numeric', day: 'numeric',
  }).formatToParts(new Date(start));
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return new Date(Date.UTC(Number(values.year), Number(values.month) - 1, Number(values.day)));
}

function compactSpeaker(event: TheoryEvent, language: string) {
  return textOf(event.speaker, language)
    .replace(/^Prof\.\s*/, '')
    .replace(/\s*教授$/, '');
}

function compactEventType(event: TheoryEvent, language: string) {
  return textOf(event.type, language).replace(/^SDS\s*/, '');
}

export function Events() {
  const { i18n, t } = useTranslation();
  const [selectedId, setSelectedId] = useState(events[0]?.id ?? '');
  const selected = events.find((event) => event.id === selectedId) ?? events[0];
  const firstEventDate = useMemo(() => calendarDate(events[0]?.start ?? '2026-09-01T00:00:00+08:00'), []);
  const days = useMemo(() => monthDays(firstEventDate), [firstEventDate]);
  const locale = i18n.language.startsWith('zh') ? 'zh-CN' : 'en-US';

  return (
    <main className="min-h-screen bg-[#f9faf7]">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading title={t('events.title')} summary={t('events.intro')} />
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="min-w-0 rounded border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-normal text-copper">{t('events.calendar')}</p>
                <h2 className="mt-1 text-2xl font-semibold text-ink">
                  {new Intl.DateTimeFormat(locale, { timeZone: 'UTC', month: 'long', year: 'numeric' }).format(firstEventDate)}
                </h2>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded bg-tealstone text-white">
                <CalendarDays size={22} />
              </div>
            </div>

            <div className="-mx-1 mt-4 overflow-x-auto pb-2">
              <div className="min-w-[35rem] px-1">
                <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-slate-500">
                  {Array.from({ length: 7 }, (_, index) => {
                    const day = new Date(Date.UTC(2026, 1, index + 1));
                    return <div key={index}>{new Intl.DateTimeFormat(locale, { timeZone: 'UTC', weekday: 'short' }).format(day)}</div>;
                  })}
                </div>
                <div className="mt-2 grid grid-cols-7 gap-1">
                  {days.map((day) => {
                    const dayEvents = events.filter((event) => {
                      const eventDate = calendarDate(event.start);
                      return (
                        eventDate.getTime() === day.getTime()
                      );
                    });
                    const isCurrentMonth = day.getUTCMonth() === firstEventDate.getUTCMonth();
                    const isSelectedDay = dayEvents.some((event) => event.id === selectedId);
                    const eventLabel = dayEvents
                      .map((event) => `${textOf(event.speaker, i18n.language)}: ${textOf(event.title, i18n.language)}`)
                      .join('; ');
                    return (
                      <button
                        key={day.toISOString()}
                        type="button"
                        aria-label={eventLabel || String(day.getUTCDate())}
                        title={eventLabel || undefined}
                        onClick={() => dayEvents[0] && setSelectedId(dayEvents[0].id)}
                        className={`min-h-24 rounded border p-2 text-left transition ${
                          dayEvents.length
                            ? 'border-copper/50 bg-copper/10 text-ink hover:-translate-y-0.5'
                            : 'border-slate-200 bg-[#f9faf7] text-slate-400'
                        } ${isSelectedDay ? 'ring-2 ring-tealstone/55' : ''} ${isCurrentMonth ? '' : 'opacity-45'}`}
                      >
                        <span className="text-xs font-semibold">{day.getUTCDate()}</span>
                        {dayEvents.map((event) => (
                          <span key={event.id} className="mt-1.5 block">
                            <span className="block whitespace-nowrap text-[10px] font-semibold leading-4 text-ink">
                              {compactSpeaker(event, i18n.language)}
                            </span>
                            <span className="block text-[10px] leading-4 text-copper">
                              {compactEventType(event, i18n.language)}
                            </span>
                          </span>
                        ))}
                      </button>
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
                <EventCard event={selected} />
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
                  onClick={() => setSelectedId(event.id)}
                  className={`rounded border p-4 text-left transition hover:-translate-y-0.5 ${
                    event.id === selectedId
                      ? 'border-tealstone bg-tealstone/10'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <p className="text-sm font-semibold text-ink">{textOf(event.title, i18n.language)}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {new Intl.DateTimeFormat(locale, {
                      timeZone: 'Asia/Shanghai',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    }).format(new Date(event.start))}
                  </p>
                </button>
              ))}
            </div>}
          </div>
        </div>
      </section>
    </main>
  );
}
