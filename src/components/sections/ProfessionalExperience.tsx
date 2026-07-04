import { CheckCircle2 } from "lucide-react";
import { portfolio } from "../../data/portfolio";
import { SectionHeader } from "../ui/SectionHeader";

export function ProfessionalExperience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Professional Experience"
          title="Career progression from application testing and SDLC work into specialized cybersecurity consulting."
        />
        <div className="relative ml-2 space-y-8 border-l border-white/10 pl-7 md:ml-8 md:pl-12">
          {portfolio.experience.map((role, index) => (
            <article key={`${role.title}-${role.period}`} className="relative">
              <span
                className={`absolute -left-[34px] top-2 h-3 w-3 rounded-full md:-left-[54px] ${
                  index === 0 ? "bg-[var(--cyan)] shadow-[0_0_16px_rgba(0,240,255,0.55)]" : "bg-[var(--outline)]"
                }`}
                aria-hidden="true"
              />
              <div className="glass-panel card-hover rounded-lg p-6 md:p-7">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-[var(--text)]">{role.title}</h3>
                    <p className="mono mt-1 text-xs font-bold uppercase text-[var(--cyan-soft)]">{role.company}</p>
                  </div>
                  <p className="mono w-fit rounded border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-[var(--text-muted)]">{role.period}</p>
                </div>
                <ul className="mt-5 space-y-3">
                  {role.summary.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-[var(--text-muted)]">
                      <CheckCircle2 aria-hidden="true" size={18} className="mt-1 shrink-0 text-[var(--cyan)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
