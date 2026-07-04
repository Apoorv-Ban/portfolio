import { portfolio } from "../../data/portfolio";
import { SectionHeader } from "../ui/SectionHeader";

export function SectorExperience() {
  return (
    <section className="section-pad border-y border-white/5 bg-[rgba(1,15,31,0.34)]">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Cross-Sector Experience"
          title="Security work across enterprise, industrial, and high-assurance environments."
          summary="Client names remain confidential; sector exposure is presented at an appropriate professional level."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.sectors.map((sector) => (
            <div key={sector} className="rounded border border-white/10 bg-white/[0.025] px-4 py-4">
              <span className="mono text-xs uppercase text-[var(--text-muted)]">{sector}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
