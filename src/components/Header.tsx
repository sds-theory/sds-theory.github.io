import { Languages, Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { site, textOf } from '../data/site';

const navItems = [
  { to: '/', key: 'home' },
  { to: '/faculty', key: 'faculty' },
  { to: '/students', key: 'students' },
  { to: '/events', key: 'events' },
  { to: '/contact', key: 'contact' },
];

export function Header({
  mode,
  onToggleMode,
  onToggleLanguage,
}: {
  mode: 'light' | 'dark';
  onToggleMode: () => void;
  onToggleLanguage: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded px-3 py-2 text-sm font-medium transition ${
      isActive
        ? 'bg-ink text-white dark:bg-white dark:text-ink'
        : 'text-slate-600 hover:bg-slate-100 hover:text-ink dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/86 backdrop-blur-xl dark:border-white/10 dark:bg-[#050607]/86">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-20 shrink-0 place-items-center rounded border border-slate-200 bg-white px-2 dark:border-white/10">
            <img
              src={`${import.meta.env.BASE_URL}${site.logo}`}
              alt="SDS"
              className="max-h-7 w-full object-contain"
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-ink dark:text-white">
              {textOf(site.name, i18n.language)}
            </span>
            <span className="block truncate text-xs text-slate-500 dark:text-slate-400">
              {textOf(site.longName, i18n.language)}
            </span>
          </span>
        </NavLink>

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
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-slate-200 text-slate-700 transition hover:border-tealstone hover:text-tealstone dark:border-white/10 dark:text-slate-200"
            aria-label="Switch language"
            title={i18n.language.startsWith('zh') ? 'English' : 'Chinese'}
          >
            <Languages size={18} />
          </button>
          <button
            type="button"
            onClick={onToggleMode}
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-slate-200 text-slate-700 transition hover:border-copper hover:text-copper dark:border-white/10 dark:text-slate-200"
            aria-label={mode === 'dark' ? t('theme.switchLight') : t('theme.switchDark')}
            title={mode === 'dark' ? t('theme.switchLight') : t('theme.switchDark')}
          >
            {mode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-slate-200 text-ink md:hidden dark:border-white/10 dark:text-white"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 px-4 pb-4 dark:border-white/10 md:hidden">
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
              className="inline-flex flex-1 items-center justify-center gap-2 rounded border border-slate-200 px-3 py-2 text-sm font-semibold text-ink dark:border-white/10 dark:text-white"
            >
              <Languages size={16} />
              {i18n.language.startsWith('zh') ? 'English' : 'Chinese'}
            </button>
            <button
              type="button"
              onClick={onToggleMode}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded border border-slate-200 px-3 py-2 text-sm font-semibold text-ink dark:border-white/10 dark:text-white"
            >
              {mode === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              {mode === 'dark' ? t('theme.light') : t('theme.dark')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
