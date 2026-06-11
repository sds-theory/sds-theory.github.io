import { CalendarDays } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EventCard } from '../components/EventCard';
import { SectionHeading } from '../components/SectionHeading';
import { eventTracks, events, textOf } from '../data/site';

function monthDays(reference: Date) {
  const year = reference.getFullYear();
  const month = reference.getMonth();
  const first = new Date(year, month, 1);
  const start = new Date(first);
  start.setDate(first.getDate() - first.getDay());

  return Array.from({ length: 42 }, (_, index) => {
    const day = new Date(start);
    day.setDate(start.getDate() + index);
    return day;
  });
}

export function Events() {
  const { i18n, t } = useTranslation();
  const [selectedId, setSelectedId] = useState(events[0]?.id ?? '');
  const selected = events.find((event) => event.id === selectedId) ?? events[0];
  const firstEventDate = useMemo(() => new Date(events[0]?.start ?? '2026-09-01T00:00:00+08:00'), []);
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
          <div className="rounded border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-normal text-copper">{t('events.calendar')}</p>
                <h2 className="mt-1 text-2xl font-semibold text-ink">
                  {new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(firstEventDate)}
                </h2>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded bg-tealstone text-white">
                <CalendarDays size={22} />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs font-semibold text-slate-500">
              {Array.from({ length: 7 }, (_, index) => {
                const day = new Date(2026, 1, index + 1);
                return <div key={index}>{new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(day)}</div>;
              })}
            </div>
            <div className="mt-2 grid grid-cols-7 gap-1">
              {days.map((day) => {
                const dayEvents = events.filter((event) => {
                  const eventDate = new Date(event.start);
                  return (
                    eventDate.getFullYear() === day.getFullYear() &&
                    eventDate.getMonth() === day.getMonth() &&
                    eventDate.getDate() === day.getDate()
                  );
                });
                const isCurrentMonth = day.getMonth() === firstEventDate.getMonth();
                return (
                  <button
                    key={day.toISOString()}
                    type="button"
                    onClick={() => dayEvents[0] && setSelectedId(dayEvents[0].id)}
                    className={`min-h-20 rounded border p-2 text-left transition ${
                      dayEvents.length
                        ? 'border-copper/50 bg-copper/10 text-ink hover:-translate-y-0.5'
                        : 'border-slate-200 bg-[#f9faf7] text-slate-400'
                    } ${isCurrentMonth ? '' : 'opacity-45'}`}
                  >
                    <span className="text-xs font-semibold">{day.getDate()}</span>
                    {dayEvents.map((event) => (
                      <span key={event.id} className="mt-1 block truncate text-xs font-semibold text-copper">
                        {textOf(event.type, i18n.language)}
                      </span>
                    ))}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
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
