import React from "react";

/**
 * <Ornament> — decorative typographic divider between sections.
 * Defaults to ❦ (the "fleuron"). Can also pass §, ※, * * *, etc.
 */
export function Ornament({
  mark = "❦",
  className = "",
}: {
  mark?: string;
  className?: string;
}) {
  return (
    <div className={`ornament ${className}`} aria-hidden="true">
      <span className="ornament-mark">{mark}</span>
    </div>
  );
}

/**
 * <Standfirst> — italic editorial sub-deck shown beneath a headline.
 */
export function Standfirst({ children }: { children: React.ReactNode }) {
  return <p className="standfirst max-w-prose mt-4 mb-8">{children}</p>;
}

/**
 * <Section> — labeled section block with a small caps accent header
 * and a hairline rule above it. The standard interior-page section.
 */
export function Section({
  label,
  title,
  children,
}: {
  label?: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12 mb-10">
      {label && (
        <div className="flex items-center gap-3 mb-3">
          <span className="label-accent">{label}</span>
          <span className="flex-1 h-px bg-[var(--rule)]" />
        </div>
      )}
      {title && (
        <h2 className="display text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--ink)] mb-5 balance">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
