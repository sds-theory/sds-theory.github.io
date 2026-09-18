import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function NotFound() {
  const { i18n } = useTranslation();
  const isChinese = i18n.language.startsWith('zh');

  return (
    <main className="mx-auto min-h-[60vh] max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-copper">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
        {isChinese ? '页面未找到' : 'Page not found'}
      </h1>
      <p className="mt-4 text-slate-600">
        {isChinese ? '此页面不存在或已被移除。' : 'This page does not exist or has been removed.'}
      </p>
      <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-tealstone">
        <ArrowLeft size={16} />
        {isChinese ? '返回首页' : 'Back to home'}
      </Link>
    </main>
  );
}
