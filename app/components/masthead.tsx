import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";

const navItems: { href: string; name: string }[] = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/projects", name: "Projects" },
  { href: "/blog", name: "Blog" },
  { href: "/photos", name: "Photos" },
];

export function Masthead() {
  return (
    <header className="border-b-2 border-[var(--ink)] mb-10 sm:mb-14">
      {/* Brand row */}
      <div className="flex items-end justify-between gap-6 pt-5 pb-3">
        <Link
          href="/"
          aria-label="home"
          className="display text-[1.7rem] sm:text-[2.2rem] leading-none text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
        >
          Umair Sabir
        </Link>
        <span className="hidden sm:inline label text-[var(--ink-soft)]">
          Cyber Security Engineer · Islamabad
        </span>
        <ThemeSwitch />
      </div>

      {/* Nav row */}
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
        <span className="sm:hidden label text-[var(--ink-soft)] text-right">
          Cyber Sec. Engineer
        </span>
      </nav>
    </header>
  );
}
