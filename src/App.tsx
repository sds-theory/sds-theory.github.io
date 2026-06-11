import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Events } from './pages/Events';
import { Faculty } from './pages/Faculty';
import { Home } from './pages/Home';
import { Students } from './pages/Students';
import { Contact } from './pages/Contact';
import { Recruit } from './pages/Recruit';
import { Collaborate } from './pages/Collaborate';

function AppShell() {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const languageKey = i18n.language.startsWith('zh') ? 'zh' : 'en';

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
      <div key={`${location.pathname}-${languageKey}`} className="page-language-enter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/students" element={<Students />} />
          <Route path="/events" element={<Events />} />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/join-us" element={<Navigate to="/recruit" replace />} />
          <Route path="/collaborate" element={<Collaborate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
          <p>{t('footer.line')}</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
