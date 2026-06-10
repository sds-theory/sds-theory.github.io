export function SectionHeading({
  eyebrow,
  title,
  summary,
  light = false,
}: {
  eyebrow: string;
  title: string;
  summary?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-normal text-copper">{eyebrow}</p>
      <h2 className={`mt-2 text-3xl font-semibold sm:text-4xl ${light ? 'text-white' : 'text-ink dark:text-white'}`}>
        {title}
      </h2>
      {summary && (
        <p className={`mt-4 text-base leading-7 ${light ? 'text-white/68' : 'text-slate-600 dark:text-slate-300'}`}>
          {summary}
        </p>
      )}
    </div>
  );
}
