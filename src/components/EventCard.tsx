import { CalendarPlus, Clock, Download, MapPin, UserRound } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { textOf, TheoryEvent } from '../data/site';

function formatDateRange(event: TheoryEvent, language: string) {
  const locale = language.startsWith('zh') ? 'zh-CN' : 'en-US';
  const start = new Date(event.start);
  const end = new Date(event.end);
  const date = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'short',
  }).format(start);
  const time = `${new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
  }).format(start)}-${new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
  }).format(end)}`;

  return `${date}, ${time}`;
}

function googleCalendarUrl(event: TheoryEvent, language: string) {
  const format = (date: string) => new Date(date).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: textOf(event.title, language),
    dates: `${format(event.start)}/${format(event.end)}`,
    details: textOf(event.abstract, language),
    location: textOf(event.location, language),
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function icsDataUrl(event: TheoryEvent, language: string) {
  const format = (date: string) => new Date(date).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//SDS Theory Group//Events//EN',
    'BEGIN:VEVENT',
    `UID:${event.id}@sds-theory`,
    `DTSTAMP:${format(new Date().toISOString())}`,
    `DTSTART:${format(event.start)}`,
    `DTEND:${format(event.end)}`,
    `SUMMARY:${textOf(event.title, language)}`,
    `LOCATION:${textOf(event.location, language)}`,
    `DESCRIPTION:${textOf(event.abstract, language)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ];

  return `data:text/calendar;charset=utf8,${encodeURIComponent(lines.join('\r\n'))}`;
}

export function EventCard({ event, compact = false }: { event: TheoryEvent; compact?: boolean }) {
  const { i18n, t } = useTranslation();

  return (
    <article className="rounded border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-copper/60 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded bg-copper/10 px-2.5 py-1 text-xs font-semibold text-copper dark:bg-copper/20">
          {textOf(event.type, i18n.language)}
        </span>
        <span className="rounded bg-tealstone/10 px-2.5 py-1 text-xs font-semibold text-tealstone dark:bg-tealstone/20 dark:text-[#8bd5d2]">
          {textOf(event.status, i18n.language)}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-semibold text-ink dark:text-white">{textOf(event.title, i18n.language)}</h3>
      <div className="mt-4 grid gap-2 text-sm text-slate-600 dark:text-slate-300">
        <span className="flex items-start gap-2">
          <Clock size={16} className="mt-0.5 shrink-0 text-tealstone dark:text-[#8bd5d2]" />
          {formatDateRange(event, i18n.language)}
        </span>
        <span className="flex items-start gap-2">
          <UserRound size={16} className="mt-0.5 shrink-0 text-tealstone dark:text-[#8bd5d2]" />
          {textOf(event.speaker, i18n.language)}
          {event.affiliation ? `, ${textOf(event.affiliation, i18n.language)}` : ''}
        </span>
        <span className="flex items-start gap-2">
          <MapPin size={16} className="mt-0.5 shrink-0 text-tealstone dark:text-[#8bd5d2]" />
          {textOf(event.location, i18n.language)}
        </span>
      </div>

      {!compact && (
        <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{textOf(event.abstract, i18n.language)}</p>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        <a
          href={googleCalendarUrl(event, i18n.language)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded bg-ink px-3 py-2 text-xs font-semibold text-white transition hover:bg-tealstone dark:bg-white dark:text-ink"
        >
          <CalendarPlus size={14} />
          {t('actions.addGoogle')}
        </a>
        <a
          href={icsDataUrl(event, i18n.language)}
          download={`${event.id}.ics`}
          className="inline-flex items-center gap-1.5 rounded border border-slate-200 px-3 py-2 text-xs font-semibold text-ink transition hover:border-tealstone hover:text-tealstone dark:border-white/10 dark:text-white"
        >
          <Download size={14} />
          {t('actions.addIcs')}
        </a>
      </div>
    </article>
  );
}
