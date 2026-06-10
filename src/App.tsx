import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { site, textOf } from './data/site';
import { Events } from './pages/Events';
import { Faculty } from './pages/Faculty';
import { Home } from './pages/Home';
import { Students } from './pages/Students';
import { Contact } from './pages/Contact';

function AppShell() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language.startsWith('zh') ? 'zh-CN' : 'en';
    localStorage.setItem('language', i18n.language.startsWith('zh') ? 'zh' : 'en');
  }, [i18n.language]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language.startsWith('zh') ? 'en' : 'zh');
  };

  return (
    <div className="min-h-screen bg-[#f9faf7] text-slate-800 transition-colors duration-300">
      <Header onToggleLanguage={toggleLanguage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
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
