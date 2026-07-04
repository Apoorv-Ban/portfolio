import { ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Engagement, portfolio } from "../../data/portfolio";
import { SectionHeader } from "../ui/SectionHeader";

const toneClasses: Record<Engagement["tone"], string> = {
  primary: "border-[rgba(0,240,255,0.35)] text-[var(--cyan-soft)]",
  secondary: "border-[rgba(190,198,224,0.28)] text-[#dae2fd]",
  critical: "border-[rgba(255,180,171,0.35)] text-[var(--error)]",
  gold: "border-[rgba(233,196,0,0.35)] text-[var(--gold)]"
};

export function SelectedEngagements() {
  const [selectedEngagement, setSelectedEngagement] = useState<Engagement | null>(null);

  useEffect(() => {
    if (!selectedEngagement) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedEngagement(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedEngagement]);

  return (
    <section id="engagements" className="section-pad border-y border-white/5 bg-[rgba(1,15,31,0.34)]">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Selected Engagements"
          title="Anonymized examples of consulting work without exposing client environments."
          summary="These summaries communicate capability and engagement type only. Client names, sensitive details, counts, and business impact figures are intentionally omitted."
        />
        <div className="grid auto-rows-fr gap-5 md:grid-cols-12">
          {portfolio.engagements.map((engagement, index) => (
            <article
              key={engagement.title}
              className={`glass-panel card-hover rounded-lg p-6 md:p-8 ${
                index === 0 ? "md:col-span-8" : index === 1 ? "md:col-span-4" : "md:col-span-6"
              }`}
            >
              <div className="flex h-full flex-col">
                <div className="mb-6 flex flex-wrap gap-2">
                  {engagement.capabilities.map((capability) => (
                    <span key={capability} className={`mono rounded-full border bg-white/[0.025] px-3 py-1 text-xs ${toneClasses[engagement.tone]}`}>
                      {capability}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-semibold leading-tight text-[var(--text)]">{engagement.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-[var(--text-muted)]">{engagement.description}</p>
                <button
                  type="button"
                  className="button-ghost mono mt-8 w-fit text-xs"
                  aria-label={`Open anonymized case study for ${engagement.title}`}
                  onClick={() => setSelectedEngagement(engagement)}
                >
                  [ View Case Study ]
                  <ArrowRight aria-hidden="true" size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedEngagement ? (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-[rgba(1,15,31,0.82)] px-4 py-4 backdrop-blur-sm sm:items-center"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedEngagement(null);
            }
          }}
        >
          <article
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            className="glass-panel max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-lg p-5 shadow-2xl md:p-8"
          >
            <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-5">
              <div>
                <p className="eyebrow mono mb-4">Anonymized Case Study</p>
                <h3 id="case-study-title" className="text-2xl font-semibold leading-tight text-[var(--text)] md:text-4xl">
                  {selectedEngagement.title}
                </h3>
              </div>
              <button
                type="button"
                className="button-secondary shrink-0 px-3"
                aria-label="Close case study"
                autoFocus
                onClick={() => setSelectedEngagement(null)}
              >
                <X aria-hidden="true" size={20} />
              </button>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h4 className="mono text-sm font-bold uppercase text-[var(--cyan-soft)]">Overview</h4>
                <p className="mt-3 leading-7 text-[var(--text-muted)]">{selectedEngagement.overview}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedEngagement.capabilities.map((capability) => (
                    <span key={capability} className={`mono rounded-full border bg-white/[0.025] px-3 py-1 text-xs ${toneClasses[selectedEngagement.tone]}`}>
                      {capability}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-5">
                <CaseStudyList title="Objectives" items={selectedEngagement.objectives} />
                <CaseStudyList title="Approach" items={selectedEngagement.approach} />
                <CaseStudyList title="Outcome" items={selectedEngagement.outcomes} />
              </div>
            </div>
          </article>
        </div>
      ) : null}
    </section>
  );
}

function CaseStudyList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded border border-white/10 bg-white/[0.025] p-4">
      <h4 className="mono text-xs font-bold uppercase text-[var(--cyan-soft)]">{title}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="leading-6 text-[var(--text-muted)]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
