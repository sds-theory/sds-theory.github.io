import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { site, textOf } from './data/site';
import { Events } from './pages/Events';
import { Faculty } from './pages/Faculty';
import { Home } from './pages/Home';
import { Students } from './pages/Students';

function getInitialMode(): 'light' | 'dark' {
  const stored = localStorage.getItem('color-mode');
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function AppShell() {
  const { i18n, t } = useTranslation();
  const [mode, setMode] = useState<'light' | 'dark'>(getInitialMode);
  const [hasStoredMode, setHasStoredMode] = useState(() => localStorage.getItem('color-mode') !== null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
    if (hasStoredMode) {
      localStorage.setItem('color-mode', mode);
    }
  }, [hasStoredMode, mode]);

  useEffect(() => {
    document.documentElement.lang = i18n.language.startsWith('zh') ? 'zh-CN' : 'en';
    localStorage.setItem('language', i18n.language.startsWith('zh') ? 'zh' : 'en');
  }, [i18n.language]);

  useEffect(() => {
    if (hasStoredMode) {
      return;
    }
    const media = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!media) {
      return;
    }
    const listener = (event: MediaQueryListEvent) => setMode(event.matches ? 'dark' : 'light');
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [hasStoredMode]);

  const toggleMode = () => {
    setHasStoredMode(true);
    setMode((value) => (value === 'dark' ? 'light' : 'dark'));
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language.startsWith('zh') ? 'en' : 'zh');
  };

  return (
    <div className="min-h-screen bg-[#f9faf7] text-slate-800 transition-colors duration-300 dark:bg-[#050607] dark:text-slate-100">
      <Header mode={mode} onToggleMode={toggleMode} onToggleLanguage={toggleLanguage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <footer className="border-t border-slate-200 bg-white py-8 dark:border-white/10 dark:bg-[#050607]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-slate-500 dark:text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>{t('footer.line')}</p>
          <div className="flex flex-wrap gap-4">
            <a className="transition hover:text-tealstone" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="transition hover:text-tealstone" href={site.github}>
              {textOf(site.name, i18n.language)}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  );
}

export default App;
