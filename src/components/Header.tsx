import { Languages, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { site } from '../data/site';

const navItems = [
  { to: '/', key: 'home' },
  { to: '/faculty', key: 'faculty' },
  { to: '/students', key: 'students' },
  { to: '/events', key: 'events' },
  { to: '/contact', key: 'contact' },
];

export function Header({ onToggleLanguage }: { onToggleLanguage: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded px-3 py-2 text-sm font-medium transition ${
      isActive
        ? 'bg-ink text-white'
        : 'text-slate-600 hover:bg-slate-100 hover:text-ink'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="relative mx-auto flex w-screen max-w-[100vw] items-center justify-between gap-3 px-4 py-2 sm:px-6 md:w-full md:max-w-7xl md:gap-4 lg:px-8">
        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded border border-ink bg-ink text-white shadow-sm md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <a
          href={site.sdsUrl}
          className="flex min-w-0 flex-1 items-center justify-center md:shrink md:justify-start"
        >
          <img
            src={`${import.meta.env.BASE_URL}${site.logo}`}
            alt="School of Data Science"
            className="h-auto w-[220px] max-w-full object-contain sm:h-16 sm:w-auto sm:max-w-none lg:h-[4.25rem]"
          />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={onToggleLanguage}
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-slate-200 text-slate-700 transition hover:border-tealstone hover:text-tealstone"
            aria-label="Switch language"
            title={i18n.language.startsWith('zh') ? 'English' : 'Chinese'}
          >
            <Languages size={18} />
          </button>
        </div>

      </div>

      {isOpen && (
        <div className="border-t border-slate-200 px-4 pb-4 md:hidden">
          <nav className="grid gap-1 py-3" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {t(`nav.${item.key}`)}
              </NavLink>
            ))}
          </nav>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onToggleLanguage}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded border border-slate-200 px-3 py-2 text-sm font-semibold text-ink"
            >
              <Languages size={16} />
              {i18n.language.startsWith('zh') ? 'English' : 'Chinese'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
