import { ArrowRight, Download, ShieldCheck } from "lucide-react";
import { portfolio } from "../../data/portfolio";

export function Hero() {
  const { hero, person } = portfolio;

  return (
    <section id="top" className="container-shell grid min-h-[calc(100vh-80px)] items-center gap-12 pb-16 pt-32 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <p className="eyebrow mono">{hero.eyebrow}</p>
        <h1 className="mt-7 max-w-4xl text-4xl font-bold leading-[1.08] text-[var(--text)] sm:text-5xl lg:text-6xl">
          {hero.headline.replace("Critical Environments.", "")}
          <span className="gradient-text">Critical Environments.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">{hero.summary}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#engagements" className="button-primary">
            View My Work
            <ArrowRight aria-hidden="true" size={18} />
          </a>
          <a href={person.resumeUrl} className="button-secondary" download>
            Download Resume
            <Download aria-hidden="true" size={18} />
          </a>
          {person.fiverr ? (
            <a href={person.fiverr} target="_blank" rel="noopener noreferrer" className="button-secondary">
              Hire Me on Fiverr
            </a>
          ) : null}
        </div>
        <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-7">
          {hero.credentials.map((credential) => (
            <span key={credential} className="mono inline-flex items-center gap-2 rounded border border-white/10 bg-white/[0.025] px-3 py-2 text-xs text-[var(--text-muted)]">
              <ShieldCheck aria-hidden="true" size={16} className="text-[var(--cyan)]" />
              {credential}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[440px] lg:mr-0">
        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-lg bg-[rgba(0,240,255,0.08)] blur-2xl" aria-hidden="true" />
        <div className="glass-panel relative overflow-hidden rounded-lg p-3">
          <img
            src={person.portrait}
            width="630"
            height="1400"
            alt="Apoorv Bandyopadhyay professional portrait"
            className="aspect-[4/5] w-full rounded object-cover object-[50%_16%] saturate-90"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
