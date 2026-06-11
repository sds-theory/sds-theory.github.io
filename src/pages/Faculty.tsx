import { useTranslation } from 'react-i18next';
import { PersonCard } from '../components/PersonCard';
import { communityGroups, faculty, textOf } from '../data/site';

export function Faculty() {
  const { i18n, t } = useTranslation();
  const memberCategories = communityGroups.filter((group) => group.title.en !== 'Student Members');
  const emptyCategories = memberCategories.slice(1);

  return (
    <main className="min-h-screen bg-[#f9faf7]">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold text-ink sm:text-4xl">{t('people.communityTitle')}</h1>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {memberCategories.map((group) => (
              <article key={textOf(group.title, i18n.language)} className="rounded border border-slate-200 bg-[#f9faf7] p-4">
                <h3 className="text-base font-semibold text-ink">{textOf(group.title, i18n.language)}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{textOf(group.body, i18n.language)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold text-ink">{textOf(memberCategories[0].title, i18n.language)}</h2>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((person) => (
            <PersonCard key={person.initials} person={person} />
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {emptyCategories.map((group) => (
            <section key={textOf(group.title, i18n.language)} className="rounded border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">{textOf(group.title, i18n.language)}</h2>
              <div className="mt-4 rounded border border-dashed border-slate-300 bg-[#f9faf7] px-4 py-6 text-sm text-slate-500">
                {t('people.emptyCategory')}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
