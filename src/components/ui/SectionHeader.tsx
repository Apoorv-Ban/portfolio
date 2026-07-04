type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  summary?: string;
};

export function SectionHeader({ eyebrow, title, summary }: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="eyebrow mb-5 mono">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-[var(--text)] md:text-4xl">{title}</h2>
      {summary ? <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">{summary}</p> : null}
    </div>
  );
}
