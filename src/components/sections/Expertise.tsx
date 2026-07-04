import { CheckCircle2 } from "lucide-react";
import { portfolio } from "../../data/portfolio";
import { SectionHeader } from "../ui/SectionHeader";

export function Expertise() {
  return (
    <section id="expertise" className="section-pad">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Areas of Expertise"
          title="Specialized coverage across offensive, defensive, industrial, and consulting work."
          summary="A concise capability matrix drawn from the resume and adapted from the exported expertise design."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.expertise.map((category, index) => (
            <article key={category.title} className="glass-panel card-hover rounded-lg p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="mono text-sm text-[var(--cyan-soft)] opacity-70">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mono text-sm font-bold uppercase text-[var(--cyan-soft)]">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--text-muted)]">
                    <CheckCircle2 aria-hidden="true" size={17} className="mt-1 shrink-0 text-[var(--cyan)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
