import { textOf, type TheoryEvent } from '../data/site';

export type EventMediaItem = {
  src: string;
  alt: string;
  label: string;
};

export function getEventMediaItems(
  event: TheoryEvent,
  language: string,
  posterLabel: string,
): EventMediaItem[] {
  const poster = event.poster
    ? [{
        src: `${import.meta.env.BASE_URL}${event.poster}`,
        alt: event.posterAlt ? textOf(event.posterAlt, language) : textOf(event.title, language),
        label: posterLabel,
      }]
    : [];
  const photos = (event.photos ?? []).map((photo) => ({
    src: `${import.meta.env.BASE_URL}${photo.src}`,
    alt: textOf(photo.alt, language),
    label: photo.caption ? textOf(photo.caption, language) : textOf(photo.alt, language),
  }));

  return [...poster, ...photos];
}
