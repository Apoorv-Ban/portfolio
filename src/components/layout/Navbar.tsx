import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { portfolio } from "../../data/portfolio";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[rgba(13,28,45,0.82)] backdrop-blur-md">
      <nav className="container-shell flex min-h-20 items-center justify-between gap-6" aria-label="Primary navigation">
        <a href="#top" className="text-xl font-extrabold leading-none text-[var(--text)] md:text-2xl" onClick={closeMenu}>
          {portfolio.person.shortName}
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {portfolio.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-[var(--text-muted)] transition hover:text-[var(--cyan-soft)]">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={portfolio.person.resumeUrl} className="button-primary" download>
            Download Resume
            <Download aria-hidden="true" size={18} />
          </a>
        </div>

        <button
          className="button-secondary px-3 lg:!hidden"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </nav>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-white/10 bg-[var(--surface-lowest)] lg:hidden">
          <div className="container-shell flex min-h-[calc(100vh-80px)] flex-col gap-3 py-6">
            {portfolio.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded border border-white/10 bg-white/[0.025] px-4 py-4 text-lg font-semibold text-[var(--text)]"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a href={portfolio.person.resumeUrl} className="button-primary mt-2 w-full" download onClick={closeMenu}>
              Download Resume
              <Download aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
