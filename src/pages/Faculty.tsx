import { useTranslation } from 'react-i18next';
import { PersonCard } from '../components/PersonCard';
import { SectionHeading } from '../components/SectionHeading';
import { faculty } from '../data/site';

export function Faculty() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-[#f9faf7]">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading title={t('people.facultyTitle')} summary={t('people.facultyIntro')} />
        </div>
      </section>
      <section>
        <div className="mx-auto grid max-w-4xl gap-5 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {faculty.map((person) => (
            <PersonCard key={person.initials} person={person} />
          ))}
        </div>
      </section>
    </main>
  );
}
