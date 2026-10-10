import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { access } from 'node:fs/promises';
import { createServer } from 'vite';

const vite = await createServer({ server: { middlewareMode: true, hmr: false, watch: null }, appType: 'custom' });
after(() => vite.close());
const { events, news } = await vite.ssrLoadModule('/src/data/site.ts');
const { calendarDate, seminarOccursOn, visitOccursOn, formatVisitRange, visitIcsDataUrl } = await vite.ssrLoadModule('/src/lib/eventDates.ts');
const seminar = events.find((event) => event.id === '2026-10-15-he-sun-dynamic-graph-clustering');
const day = (date) => new Date(`${date}T00:00:00Z`);

test('He Sun visits on both October 15 and 16, with a seminar only on October 15', () => {
  assert.ok(seminar);
  assert.equal(seminar.start, '2026-10-15T11:00:00+08:00');
  assert.equal(seminar.end, '2026-10-15T12:00:00+08:00');
  assert.equal(seminar.speaker.zh, '孙贺教授');
  for (const date of ['2026-10-15', '2026-10-16']) assert.equal(visitOccursOn(seminar, day(date)), true);
  for (const date of ['2026-10-14', '2026-10-17']) assert.equal(visitOccursOn(seminar, day(date)), false);
  assert.equal(seminarOccursOn(seminar, day('2026-10-15')), true);
  assert.equal(seminarOccursOn(seminar, day('2026-10-16')), false);
  assert.equal(formatVisitRange(seminar, 'zh'), '2026年10月15–16日');
  assert.equal(formatVisitRange(seminar, 'en'), 'Oct 15–16, 2026');
});

test('calendar days stay in Beijing time and existing seminars remain unchanged', () => {
  assert.equal(calendarDate('2026-10-14T17:00:00Z').toISOString(), '2026-10-15T00:00:00.000Z');
  const previous = events.find((event) => event.id.startsWith('2026-07-31'));
  assert.equal(seminarOccursOn(previous, day('2026-07-31')), true);
  assert.equal(visitOccursOn(previous, day('2026-07-31')), false);
  assert.equal(visitIcsDataUrl(previous, 'en'), '');
  assert.equal(formatVisitRange(previous, 'en'), '');
});

test('visit calendar export uses inclusive display dates and an exclusive all-day end', () => {
  const ics = decodeURIComponent(visitIcsDataUrl(seminar, 'en').split(',').slice(1).join(','));
  assert.ok(ics.includes('DTSTART;VALUE=DATE:20261015\r\n'));
  assert.ok(ics.includes('DTEND;VALUE=DATE:20261017\r\n'));
  assert.ok(ics.includes('LOCATION:SDS\\, CUHK-Shenzhen'));
  assert.ok(ics.includes('URL:https://homepages.inf.ed.ac.uk/hsun4/'));
  const acrossYear = { ...seminar, visit: { start: '2026-12-31', end: '2027-01-01' } };
  assert.equal(visitOccursOn(acrossYear, day('2027-01-01')), true);
  assert.equal(visitOccursOn(acrossYear, day('2027-01-02')), false);
  assert.ok(decodeURIComponent(visitIcsDataUrl(acrossYear, 'en')).includes('DTEND;VALUE=DATE:20270102'));
});

test('bilingual announcement links to the seminar and the checked-in poster', async () => {
  const item = news.find((item) => item.eventId === seminar.id);
  assert.ok(item.title.en.includes('October 15-16'));
  assert.ok(item.title.zh.includes('15–16'));
  assert.equal(item.date, '2026-10-10');
  await access(new URL(`../public/${seminar.poster}`, import.meta.url));
  assert.ok(news.some((item) => item.title.en.includes('WINE 2026')));
  assert.ok(news.some((item) => item.eventId?.startsWith('2026-07-31')));
});
