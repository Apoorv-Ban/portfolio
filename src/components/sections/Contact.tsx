import { Download, ExternalLink, Link2, Mail, Shield } from "lucide-react";
import { portfolio } from "../../data/portfolio";

export function Contact() {
  const { person } = portfolio;

  return (
    <section id="contact" className="section-pad">
      <div className="container-shell">
        <div className="glass-panel rounded-lg p-6 md:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mono">Status: Available for Engagements</p>
            <h2 className="mt-6 text-3xl font-semibold leading-tight text-[var(--text)] md:text-5xl">Let&apos;s secure your infrastructure.</h2>
            <p className="mt-5 text-lg leading-8 text-[var(--text-muted)]">
              Available for consulting, penetration testing, security assessments, threat hunting, incident investigation, OT/ICS security, automation, and training.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {person.fiverr ? (
              <a href={person.fiverr} target="_blank" rel="noopener noreferrer" className="glass-panel card-hover rounded-lg p-5">
                <Shield aria-hidden="true" className="mb-5 text-[var(--cyan)]" />
                <h3 className="font-semibold text-[var(--text)]">Hire Me on Fiverr</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">Direct booking for focused consulting and assessment work.</p>
              </a>
            ) : (
              <div className="glass-panel rounded-lg p-5">
                <Shield aria-hidden="true" className="mb-5 text-[var(--cyan)]" />
                <h3 className="font-semibold text-[var(--text)]">Hire Me on Fiverr</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">Profile link pending. Add it in the central data file when available.</p>
              </div>
            )}
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="glass-panel card-hover rounded-lg p-5">
              <Link2 aria-hidden="true" className="mb-5 text-[var(--cyan)]" />
              <h3 className="font-semibold text-[var(--text)]">Connect on LinkedIn</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">Professional networking and longer-term consulting inquiries.</p>
              <ExternalLink aria-hidden="true" size={16} className="mt-5 text-[var(--cyan)]" />
            </a>
            <a href={`mailto:${person.email}`} className="glass-panel card-hover rounded-lg p-5">
              <Mail aria-hidden="true" className="mb-5 text-[var(--cyan)]" />
              <h3 className="font-semibold text-[var(--text)]">Send an Email</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">Direct channel for confidential assessments and proposals.</p>
            </a>
            <a href={person.resumeUrl} download className="glass-panel card-hover rounded-lg p-5">
              <Download aria-hidden="true" className="mb-5 text-[var(--cyan)]" />
              <h3 className="font-semibold text-[var(--text)]">Download Resume</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">Detailed professional background, experience, education, and skills.</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
