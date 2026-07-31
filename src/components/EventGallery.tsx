import { Images, Maximize2 } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { type EventPhoto, textOf } from '../data/site';
import { EventMediaModal } from './EventMediaModal';
import { type EventMediaItem } from './eventMedia';

type EventGalleryProps = {
  eventTitle: string;
  photos: EventPhoto[];
  mediaItems?: EventMediaItem[];
};

export function EventGallery({ eventTitle, photos, mediaItems }: EventGalleryProps) {
  const { i18n, t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const photoMediaItems = photos.map((photo) => ({
    src: `${import.meta.env.BASE_URL}${photo.src}`,
    alt: textOf(photo.alt, i18n.language),
    label: photo.caption ? textOf(photo.caption, i18n.language) : textOf(photo.alt, i18n.language),
  }));
  const availableMedia = mediaItems?.length ? mediaItems : photoMediaItems;
  const galleryColumns = photos.length === 1
    ? ''
    : photos.length === 2
      ? 'sm:grid-cols-[minmax(0,1.35fr)_minmax(0,0.75fr)]'
      : 'sm:grid-cols-2';

  return (
    <section className="mt-6 border-t border-slate-200 pt-5">
      <div className="flex items-center justify-between gap-4">
        <h4 className="flex items-center gap-2 text-base font-semibold text-ink">
          <Images size={18} className="text-tealstone" />
          {t('events.gallery')}
        </h4>
        <span className="text-xs font-medium text-slate-500">
          {t('events.photoCount', { count: photos.length })}
        </span>
      </div>

      <div className={`mt-3 grid items-start gap-3 ${galleryColumns}`}>
        {photos.map((photo, index) => {
          const alt = textOf(photo.alt, i18n.language);
          const caption = photo.caption ? textOf(photo.caption, i18n.language) : alt;
          const photoSrc = `${import.meta.env.BASE_URL}${photo.src}`;
          const mediaIndex = availableMedia.findIndex((item) => item.src === photoSrc);

          return (
            <button
              key={photo.src}
              type="button"
              aria-label={alt}
              onClick={() => setSelectedIndex(mediaIndex >= 0 ? mediaIndex : index)}
              className="group block w-full overflow-hidden rounded border border-slate-200 bg-[#f9faf7] text-left transition hover:-translate-y-0.5 hover:border-tealstone/60 hover:shadow-lg"
            >
              <img
                src={`${import.meta.env.BASE_URL}${photo.src}`}
                alt={alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                decoding="async"
                className="h-auto w-full transition duration-500 group-hover:scale-[1.015]"
              />
              <span className="flex items-center justify-between gap-3 px-3 py-2 text-xs leading-5 text-slate-600">
                <span>{caption}</span>
                <Maximize2 size={14} className="shrink-0 text-tealstone" />
              </span>
            </button>
          );
        })}
      </div>

      {selectedIndex !== null && availableMedia.length > 0 && (
        <EventMediaModal
          title={eventTitle}
          items={availableMedia}
          initialIndex={selectedIndex}
          closeLabel={i18n.language.startsWith('zh') ? '关闭' : 'Close'}
          previousLabel={t('events.previousMedia')}
          nextLabel={t('events.nextMedia')}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </section>
  );
}
