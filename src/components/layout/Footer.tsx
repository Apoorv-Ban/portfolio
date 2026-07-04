import { Mail } from "lucide-react";
import { portfolio } from "../../data/portfolio";

export function Footer() {
  const { person } = portfolio;

  return (
    <footer className="border-t border-white/10 bg-[var(--surface-lowest)] py-10">
      <div className="container-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#top" className="text-2xl font-bold text-[var(--text)]">
            {person.name}
          </a>
          <p className="mt-1 text-[var(--text-muted)]">{person.role}</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm font-semibold text-[var(--text-muted)]">
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--cyan-soft)]">
            LinkedIn
          </a>
          {person.fiverr ? (
            <a href={person.fiverr} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--cyan-soft)]">
              Fiverr
            </a>
          ) : (
            <span title="Fiverr URL pending">Fiverr</span>
          )}
          <a href={`mailto:${person.email}`} className="inline-flex items-center gap-2 hover:text-[var(--cyan-soft)]">
            <Mail aria-hidden="true" size={16} />
            Email
          </a>
        </div>
        <p className="mono text-xs text-[var(--text-muted)]">Copyright 2026 {person.name}</p>
      </div>
    </footer>
  );
}
