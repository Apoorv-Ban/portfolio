import { ExternalLink, FolderGit2 } from "lucide-react";
import { portfolio } from "../../data/portfolio";
import { SectionHeader } from "../ui/SectionHeader";

export function Projects() {
  return (
    <section id="projects" className="section-pad border-y border-white/5 bg-[rgba(1,15,31,0.34)]">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Open Source & Tools"
          title="Security tooling and research shared on GitHub."
          summary="Personal projects built to support offensive-security workflows, automation, and certification preparation."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {portfolio.projects.map((project) => (
            <article key={project.name} className="glass-panel card-hover flex h-full flex-col rounded-lg p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold leading-tight text-[var(--text)]">{project.name}</h3>
                <FolderGit2 aria-hidden="true" size={22} className="mt-1 shrink-0 text-[var(--cyan-soft)]" />
              </div>
              <p className="mt-4 flex-1 leading-7 text-[var(--text-muted)]">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.language ? (
                  <span className="mono rounded-full border border-[rgba(0,240,255,0.35)] bg-white/[0.025] px-3 py-1 text-xs text-[var(--cyan-soft)]">
                    {project.language}
                  </span>
                ) : null}
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono rounded-full border border-[rgba(190,198,224,0.28)] bg-white/[0.025] px-3 py-1 text-xs text-[#dae2fd]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="button-ghost mono mt-8 w-fit text-xs"
                aria-label={`View ${project.name} on GitHub`}
              >
                [ View Repository ]
                <ExternalLink aria-hidden="true" size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
