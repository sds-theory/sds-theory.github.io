import { X } from 'lucide-react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

type ImageModalProps = {
  src: string;
  alt: string;
  title: string;
  closeLabel: string;
  onClose: () => void;
};

export function ImageModal({ src, alt, title, closeLabel, onClose }: ImageModalProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="modal-backdrop fixed inset-0 z-50 overflow-y-auto bg-ink/45 px-4 py-6 backdrop-blur-sm sm:py-10"
      onMouseDown={onClose}
    >
      <div className="flex min-h-full items-center justify-center">
        <section
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="modal-panel relative w-full max-w-4xl overflow-hidden rounded border border-white/80 bg-white shadow-2xl shadow-ink/30"
          onMouseDown={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-4 py-3 sm:px-5">
            <h2 className="text-base font-semibold text-ink sm:text-lg">{title}</h2>
            <button
              type="button"
              aria-label={closeLabel}
              onClick={onClose}
              className="grid h-9 w-9 flex-none place-items-center rounded-full border border-slate-200 bg-white text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-tealstone hover:text-tealstone"
            >
              <X size={18} />
            </button>
          </div>
          <div className="max-h-[82vh] overflow-auto bg-[#f6fbfa] p-3 sm:p-5">
            <img
              src={src}
              alt={alt}
              className="mx-auto h-auto max-h-[78vh] w-auto max-w-full rounded shadow-lg"
            />
          </div>
        </section>
      </div>
    </div>,
    document.body,
  );
}
