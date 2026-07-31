import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { type EventMediaItem } from './eventMedia';

type EventMediaModalProps = {
  title: string;
  items: EventMediaItem[];
  initialIndex?: number;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
  onClose: () => void;
};

export function EventMediaModal({
  title,
  items,
  initialIndex = 0,
  closeLabel,
  previousLabel,
  nextLabel,
  onClose,
}: EventMediaModalProps) {
  const [activeIndex, setActiveIndex] = useState(() => Math.min(initialIndex, items.length - 1));
  const activeItem = items[activeIndex];
  const hasMultipleItems = items.length > 1;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
      if (hasMultipleItems && event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current - 1 + items.length) % items.length);
      }
      if (hasMultipleItems && event.key === 'ArrowRight') {
        setActiveIndex((current) => (current + 1) % items.length);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hasMultipleItems, items.length, onClose]);

  if (!activeItem) {
    return null;
  }

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  };
  const showNext = () => {
    setActiveIndex((current) => (current + 1) % items.length);
  };

  return createPortal(
    <div
      className="modal-backdrop fixed inset-0 z-50 overflow-y-auto bg-ink/45 px-3 py-4 backdrop-blur-sm sm:px-5 sm:py-8"
      onMouseDown={onClose}
    >
      <div className="flex min-h-full items-center justify-center">
        <section
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="modal-panel relative w-full max-w-6xl overflow-hidden rounded border border-white/80 bg-white shadow-2xl shadow-ink/30"
          onMouseDown={(event) => event.stopPropagation()}
        >
          <header className="flex items-center justify-between gap-4 border-b border-slate-200 px-4 py-3 sm:px-5">
            <div className="min-w-0">
              <h2 className="truncate text-base font-semibold text-ink sm:text-lg">{title}</h2>
              <p className="mt-0.5 text-xs text-slate-500">
                {activeIndex + 1} / {items.length}
              </p>
            </div>
            <button
              type="button"
              aria-label={closeLabel}
              onClick={onClose}
              className="grid h-9 w-9 flex-none place-items-center rounded-full border border-slate-200 bg-white text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-tealstone hover:text-tealstone"
            >
              <X size={18} />
            </button>
          </header>

          <div className="bg-[#edf4f3] p-3 sm:p-5">
            <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded bg-[#101719] sm:min-h-[420px]">
              <img
                key={activeItem.src}
                src={activeItem.src}
                alt={activeItem.alt}
                className="max-h-[66vh] w-auto max-w-full object-contain"
              />

              {hasMultipleItems && (
                <>
                  <button
                    type="button"
                    aria-label={previousLabel}
                    onClick={showPrevious}
                    className="absolute left-2 grid h-10 w-10 place-items-center rounded-full border border-white/60 bg-white/90 text-ink shadow-lg transition hover:scale-105 hover:bg-white sm:left-4 sm:h-11 sm:w-11"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    aria-label={nextLabel}
                    onClick={showNext}
                    className="absolute right-2 grid h-10 w-10 place-items-center rounded-full border border-white/60 bg-white/90 text-ink shadow-lg transition hover:scale-105 hover:bg-white sm:right-4 sm:h-11 sm:w-11"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>

            <p className="mt-3 text-center text-sm font-medium text-slate-700">{activeItem.label}</p>

            {hasMultipleItems && (
              <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
                {items.map((item, index) => (
                  <button
                    key={item.src}
                    type="button"
                    aria-label={item.label}
                    aria-current={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                    className={`relative h-16 w-24 flex-none overflow-hidden rounded border-2 bg-white transition sm:h-20 sm:w-28 ${
                      index === activeIndex
                        ? 'border-copper shadow-md'
                        : 'border-transparent opacity-65 hover:opacity-100'
                    }`}
                  >
                    <img src={item.src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>,
    document.body,
  );
}
