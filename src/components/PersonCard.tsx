import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Person, textOf } from '../data/site';

export function PersonCard({ person }: { person: Person }) {
  const { i18n, t } = useTranslation();
  const href = person.profile ?? person.website;

  return (
    <article className="group overflow-hidden rounded border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tealstone/55 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none">
      <div className="aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-white/5">
        {person.avatar ? (
          <img
            src={`${import.meta.env.BASE_URL}${person.avatar}`}
            alt={textOf(person.name, i18n.language)}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-ink text-3xl font-semibold text-white dark:bg-white dark:text-ink">
            {person.initials}
          </div>
        )}
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-normal text-copper">{textOf(person.role, i18n.language)}</p>
        <h3 className="mt-2 text-2xl font-semibold text-ink dark:text-white">{textOf(person.name, i18n.language)}</h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{textOf(person.title, i18n.language)}</p>
        {person.affiliation && (
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{textOf(person.affiliation, i18n.language)}</p>
        )}
        {person.period && (
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{textOf(person.period, i18n.language)}</p>
        )}
        {person.advisor && (
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{textOf(person.advisor, i18n.language)}</p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {person.research.slice(0, 4).map((area) => (
            <span
              key={textOf(area, i18n.language)}
              className="rounded border border-slate-200 px-2.5 py-1 text-xs text-slate-600 dark:border-white/10 dark:text-slate-300"
            >
              {textOf(area, i18n.language)}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{textOf(person.bio, i18n.language)}</p>

        {href && (
          <a
            href={href}
            className="mt-5 inline-flex items-center gap-1.5 rounded bg-ink px-3 py-2 text-xs font-semibold text-white transition hover:bg-tealstone dark:bg-white dark:text-ink"
          >
            {person.profile ? t('actions.profile') : t('actions.website')}
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </article>
  );
}
