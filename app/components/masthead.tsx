import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";

/**
 * The Masthead — the front-of-publication strip.
 * Replaces a "navbar" with a real publication banner.
 */
const navItems: { href: string; name: string }[] = [
  { href: "/", name: "Front" },
  { href: "/about", name: "Subject" },
  { href: "/projects", name: "Catalogue" },
  { href: "/blog", name: "Essays" },
  { href: "/photos", name: "Plates" },
];

export function Masthead() {
  return (
    <header className="border-b-2 border-[var(--ink)] mb-10 sm:mb-14">
      {/* row 1 — meta strip */}
      <div className="flex items-center justify-between text-[10.5px] sm:text-[11px] label tracking-[0.18em] py-2 border-b border-[var(--rule)]">
        <span>The MikiVirus Dossier</span>
        <span className="hidden sm:inline">Vol. III · No. IV</span>
        <span>An Operator's File</span>
      </div>

      {/* row 2 — title */}
      <div className="flex items-end justify-between gap-6 pt-5 pb-3">
        <Link
          href="/"
          aria-label="home"
          className="display text-[2rem] sm:text-[3rem] leading-none text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
        >
          M<span className="text-[var(--accent)]">·</span>V
          <span className="hidden sm:inline ml-3 standfirst text-[var(--ink-soft)]">
            files of u. sabir
          </span>
        </Link>

        <div className="hidden sm:flex items-baseline gap-2 label">
          <ThemeSwitch />
        </div>
      </div>

      {/* row 3 — nav */}
      <nav className="flex items-baseline justify-between gap-6 py-2 border-t border-[var(--rule)]">
        <ul className="flex flex-wrap gap-x-5 sm:gap-x-7 gap-y-1 label">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="dlink hover:text-[var(--accent)]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <span className="hidden sm:inline label-accent">Est. MMXIX</span>
        <span className="sm:hidden"><ThemeSwitch /></span>
      </nav>
    </header>
  );
}
