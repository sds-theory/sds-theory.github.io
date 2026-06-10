import { useTranslation } from 'react-i18next';
import { PersonCard } from '../components/PersonCard';
import { SectionHeading } from '../components/SectionHeading';
import { students } from '../data/site';

export function Students() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-[#f9faf7] dark:bg-black">
      <section className="border-b border-slate-200 bg-white dark:border-white/10 dark:bg-[#090b0d]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t('nav.students')} title={t('people.studentsTitle')} summary={t('people.studentsIntro')} />
        </div>
      </section>
      <section>
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
          {students.map((person) => (
            <PersonCard key={person.initials} person={person} />
          ))}
        </div>
      </section>
    </main>
  );
}
