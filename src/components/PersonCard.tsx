import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Person, textOf } from '../data/site';

export function PersonCard({ person }: { person: Person }) {
  const { i18n, t } = useTranslation();

  return (
    <article className="group overflow-hidden rounded border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tealstone/55 hover:shadow-xl">
      <div className="h-48 overflow-hidden bg-slate-100 sm:h-44">
        {person.avatar ? (
          <img
            src={`${import.meta.env.BASE_URL}${person.avatar}`}
            alt={textOf(person.name, i18n.language)}
            className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
            style={{ objectPosition: person.avatarPosition ?? '50% 18%' }}
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-ink text-3xl font-semibold text-white">
            {person.initials}
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="text-xs font-semibold uppercase tracking-normal text-copper">{textOf(person.role, i18n.language)}</p>
        <h3 className="mt-2 text-xl font-semibold text-ink">{textOf(person.name, i18n.language)}</h3>
        <p className="mt-1 text-sm text-slate-500">{textOf(person.title, i18n.language)}</p>
        {person.affiliation && (
          <p className="mt-1 text-sm text-slate-500">{textOf(person.affiliation, i18n.language)}</p>
        )}
        {person.education && (
          <p className="mt-1 text-sm text-slate-500">{textOf(person.education, i18n.language)}</p>
        )}
        {person.period && (
          <p className="mt-1 text-sm text-slate-500">{textOf(person.period, i18n.language)}</p>
        )}
        {person.advisor && (
          <p className="mt-1 text-sm text-slate-500">{textOf(person.advisor, i18n.language)}</p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {person.research.map((area) => (
            <span
              key={textOf(area, i18n.language)}
              className="rounded border border-slate-200 px-2.5 py-1 text-xs text-slate-600"
            >
              {textOf(area, i18n.language)}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {person.website && (
            <a
              href={person.website}
              className="inline-flex items-center gap-1.5 rounded bg-ink px-3 py-2 text-xs font-semibold text-white transition hover:bg-tealstone"
            >
              {t('actions.website')}
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
