import { textOf, type TheoryEvent, type VisitRange } from '../data/site';

// Calendar cells use venue-local dates represented as UTC midnight.
export function calendarDate(value: string) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Shanghai', year: 'numeric', month: 'numeric', day: 'numeric',
  }).formatToParts(new Date(value));
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return new Date(Date.UTC(Number(values.year), Number(values.month) - 1, Number(values.day)));
}

export function seminarOccursOn(event: TheoryEvent, day: Date) {
  return event.kind !== 'visit' && calendarDate(event.start).getTime() === day.getTime();
}

export function eventCalendarDate(event: TheoryEvent) {
  return event.kind === 'visit' ? new Date(`${event.visit.start}T00:00:00Z`) : calendarDate(event.start);
}

export function visitCalendarDates(visit: VisitRange) {
  // All-day calendar exports have an exclusive end date.
  const end = new Date(`${visit.end}T00:00:00Z`);
  end.setUTCDate(end.getUTCDate() + 1);
  return `${visit.start.replace(/-/g, '')}/${end.toISOString().slice(0, 10).replace(/-/g, '')}`;
}

export function visitOccursOn(event: TheoryEvent, day: Date) {
  const key = day.toISOString().slice(0, 10);
  return Boolean(event.visit && event.visit.start <= key && key <= event.visit.end);
}

export function formatVisitRange(event: TheoryEvent, language: string) {
  if (!event.visit) return '';
  const isChinese = language.startsWith('zh');
  const format = new Intl.DateTimeFormat(isChinese ? 'zh-CN' : 'en-US', {
    timeZone: 'UTC', year: 'numeric', month: 'short', day: 'numeric',
  });
  const start = new Date(`${event.visit.start}T00:00:00Z`);
  const end = new Date(`${event.visit.end}T00:00:00Z`);
  if (event.visit.start === event.visit.end) return format.format(start);
  // Explicit range punctuation keeps server/browser ICU versions from disagreeing during hydration.
  if (start.getUTCFullYear() === end.getUTCFullYear() && start.getUTCMonth() === end.getUTCMonth()) {
    const days = `${start.getUTCDate()}–${end.getUTCDate()}`;
    if (isChinese) return `${start.getUTCFullYear()}年${start.getUTCMonth() + 1}月${days}日`;
    const month = new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', month: 'short' }).format(start);
    return `${month} ${days}, ${start.getUTCFullYear()}`;
  }
  return `${format.format(start)} - ${format.format(end)}`;
}

export function visitIcsDataUrl(event: TheoryEvent, language: string) {
  if (!event.visit) return '';
  const escape = (value: string) => value.replace(/\\/g, '\\\\').replace(/\r?\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
  const [start, end] = visitCalendarDates(event.visit).split('/');
  const title = `${language.startsWith('zh') ? '学术访问' : 'Research visit'}: ${textOf(event.speaker, language)}`;
  const lines = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//SDS Theory Group//Events//EN',
    'BEGIN:VEVENT', `UID:${event.id}-visit@sds-theory`, `DTSTAMP:${start}T000000Z`,
    `DTSTART;VALUE=DATE:${start}`, `DTEND;VALUE=DATE:${end}`,
    `SUMMARY:${escape(title)}`, `LOCATION:${escape('SDS, CUHK-Shenzhen')}`,
    ...(event.speakerUrl ? [`URL:${event.speakerUrl}`] : []),
    'END:VEVENT', 'END:VCALENDAR',
  ];
  return `data:text/calendar;charset=utf8,${encodeURIComponent(lines.join('\r\n'))}`;
}
