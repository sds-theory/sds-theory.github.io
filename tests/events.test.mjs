import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { access } from 'node:fs/promises';
import { createServer } from 'vite';

const vite = await createServer({ server: { middlewareMode: true, hmr: false, watch: null }, appType: 'custom' });
after(() => vite.close());
const { events, news } = await vite.ssrLoadModule('/src/data/site.ts');
const { calendarDate, eventCalendarDate, seminarOccursOn, visitOccursOn, formatVisitRange, visitCalendarDates, visitIcsDataUrl } = await vite.ssrLoadModule('/src/lib/eventDates.ts');
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

test('Nairen Cao has a three-day visit without a seminar, timed slot or poster', () => {
  const visit = events.find((event) => event.id === '2026-08-03-nairen-cao-visit');
  assert.equal(visit.kind, 'visit');
  assert.equal(visit.start, undefined);
  assert.equal(visit.end, undefined);
  assert.equal(visit.poster, undefined);
  assert.equal(visit.speakerUrl, 'https://nairenc.github.io/');
  assert.deepEqual(visit.speaker, { en: 'Prof. Nairen Cao', zh: '曹乃仁教授' });
  assert.deepEqual(visit.affiliation, { en: 'Shanghai University of Finance and Economics', zh: '上海财经大学' });
  assert.deepEqual(visit.host, { en: 'Prof. Aditi Dudeja', zh: 'Aditi Dudeja 教授' });
  assert.equal(eventCalendarDate(visit).toISOString(), '2026-08-03T00:00:00.000Z');
  for (const date of ['2026-08-03', '2026-08-04', '2026-08-05']) {
    assert.equal(visitOccursOn(visit, day(date)), true);
    assert.equal(seminarOccursOn(visit, day(date)), false);
  }
  for (const date of ['2026-08-02', '2026-08-06']) assert.equal(visitOccursOn(visit, day(date)), false);
  assert.equal(visitCalendarDates(visit.visit), '20260803/20260806');
  const ics = decodeURIComponent(visitIcsDataUrl(visit, 'en'));
  assert.ok(ics.includes('DTSTART;VALUE=DATE:20260803'));
  assert.ok(ics.includes('DTEND;VALUE=DATE:20260806'));
  assert.equal(formatVisitRange(visit, 'en'), 'Aug 3–5, 2026');
  assert.equal(formatVisitRange(visit, 'zh'), '2026年8月3–5日');
  const announcement = news.find((item) => item.eventId === visit.id);
  assert.equal(announcement.date, '2026-08-01');
  assert.ok(announcement.title.en.includes('August 3-5'));
  assert.ok(announcement.title.zh.includes('8 月 3–5 日'));
  assert.ok(announcement.summary.en.includes('Prof. Nairen Cao from Shanghai University of Finance and Economics'));
  assert.ok(announcement.summary.zh.includes('上海财经大学曹乃仁教授'));
  assert.deepEqual(news.map(({ date }) => date), news.map(({ date }) => date).sort().reverse());
});

test('seminar and visitor news retain bilingual host information consistently', () => {
  for (const event of events.filter((item) => item.host)) {
    const announcement = news.find((item) => item.eventId === event.id);
    assert.ok(announcement, `${event.id} has an announcement`);
    for (const language of ['en', 'zh']) {
      assert.ok(announcement.summary[language].includes(event.host[language]), `${event.id}: ${language} host`);
    }
    if (event.kind !== 'visit') {
      assert.ok(announcement.summary.en.includes('Beijing time'));
      assert.ok(announcement.summary.zh.includes('北京时间'));
      assert.ok(announcement.summary.zh.includes('学术报告'));
      assert.ok(!announcement.summary.zh.includes('英语报告'));
    }
  }
});
