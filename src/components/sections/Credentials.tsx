import { ExternalLink, ShieldCheck } from "lucide-react";
import { portfolio } from "../../data/portfolio";
import { SectionHeader } from "../ui/SectionHeader";

export function Credentials() {
  return (
    <section id="credentials" className="section-pad">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Professional Credentials"
          title="Certifications supporting red teaming, penetration testing, ethical hacking, and threat hunting."
        />
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="glass-panel rounded-lg p-4">
            <div className="grid grid-cols-2 gap-4">
              {portfolio.credentials.map((credential) => (
                <div key={credential.shortName} className="rounded bg-[var(--surface-lowest)] p-3">
                  {credential.badgeSrc ? (
                    <img
                      src={credential.badgeSrc}
                      alt={`${credential.shortName} credential badge`}
                      loading="lazy"
                      width="240"
                      height="240"
                      className="aspect-square w-full rounded object-contain"
                    />
                  ) : (
                    <div className="flex aspect-square items-center justify-center rounded border border-white/10">
                      <ShieldCheck aria-hidden="true" className="text-[var(--cyan)]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {portfolio.credentials.map((credential) => (
              <article key={credential.shortName} className="glass-panel card-hover rounded-lg p-5">
                <ShieldCheck aria-hidden="true" size={30} className="mb-5 text-[var(--cyan)]" />
                <h3 className="font-semibold text-[var(--text)]">{credential.shortName}</h3>
                <p className="mono mt-2 text-xs leading-5 text-[var(--text-muted)]">{credential.name}</p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{credential.issuer}</p>
                {credential.verifyUrl ? (
                  <a href={credential.verifyUrl} target="_blank" rel="noopener noreferrer" className="button-ghost mt-5 text-sm">
                    Verify Credential
                    <ExternalLink aria-hidden="true" size={16} />
                  </a>
                ) : (
                  <p className="mono mt-5 text-xs text-[var(--text-muted)]">Verification link pending</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
