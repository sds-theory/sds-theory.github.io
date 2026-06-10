import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Person, textOf } from '../data/site';

export function PersonCard({ person }: { person: Person }) {
  const { i18n, t } = useTranslation();

  return (
    <article className="group relative overflow-hidden rounded border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tealstone/55 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-tealstone via-copper to-[#6c8a3f]" />
      <div className="flex items-start gap-4">
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded bg-ink text-lg font-semibold text-white dark:bg-white dark:text-ink">
          {person.initials}
        </div>
        <div className="min-w-0">
          <h3 className="text-xl font-semibold text-ink dark:text-white">{textOf(person.name, i18n.language)}</h3>
          <p className="mt-1 text-sm font-medium text-copper">{textOf(person.title, i18n.language)}</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{textOf(person.role, i18n.language)}</p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-300">{textOf(person.bio, i18n.language)}</p>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-normal text-slate-500 dark:text-slate-400">
          {t('people.research')}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {person.research.map((area) => (
            <span
              key={textOf(area, i18n.language)}
              className="rounded border border-slate-200 px-2.5 py-1 text-xs text-slate-600 dark:border-white/10 dark:text-slate-300"
            >
              {textOf(area, i18n.language)}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {person.website && (
          <a
            href={person.website}
            className="inline-flex items-center gap-1.5 rounded border border-slate-200 px-3 py-2 text-xs font-semibold text-ink transition hover:border-tealstone hover:text-tealstone dark:border-white/10 dark:text-white"
          >
            {t('actions.website')}
            <ArrowUpRight size={14} />
          </a>
        )}
        {person.profile && (
          <a
            href={person.profile}
            className="inline-flex items-center gap-1.5 rounded border border-slate-200 px-3 py-2 text-xs font-semibold text-ink transition hover:border-tealstone hover:text-tealstone dark:border-white/10 dark:text-white"
          >
            {t('actions.profile')}
            <ArrowUpRight size={14} />
          </a>
        )}
        {person.email && (
          <a
            href={`mailto:${person.email}`}
            className="inline-flex items-center gap-1.5 rounded border border-slate-200 px-3 py-2 text-xs font-semibold text-ink transition hover:border-tealstone hover:text-tealstone dark:border-white/10 dark:text-white"
          >
            <Mail size={14} />
            {t('actions.email')}
          </a>
        )}
        {person.office && (
          <span className="inline-flex items-center gap-1.5 rounded border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 dark:border-white/10 dark:text-slate-300">
            <MapPin size={14} />
            {textOf(person.office, i18n.language)}
          </span>
        )}
      </div>
    </article>
  );
}
