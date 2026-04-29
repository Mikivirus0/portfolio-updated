import React from "react";

/**
 * <Diagram> — editorial figure with hand-numbered caption.
 * Use inside MDX for any inline SVG / illustration.
 *
 * Wraps children in a tinted panel + caption block (Fig. N).
 * Children should be inline SVG or an <img>. Use `currentColor`
 * inside SVGs so they re-tint correctly across themes.
 */
export function Diagram({
  num,
  caption,
  children,
}: {
  num?: string | number;
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="fig my-10 not-prose" style={{ color: "var(--ink)" }}>
      <div className="bg-[var(--paper-soft)] border border-[var(--rule)] p-3 sm:p-4">
        <div className="flex justify-center items-center overflow-x-auto">
          {children}
        </div>
      </div>
      {caption && (
        <figcaption>
          {num !== undefined && <span className="fig-num">Fig. {num}.</span>}
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * <Terminal> — code listing styled like an editorial sidebar block.
 * Cream paper, ink type, oxblood left rule.
 */
export function Terminal({
  title = "listing",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-7 not-prose">
      <div className="border-l-2 border-[var(--accent)] bg-[var(--paper-soft)] border-y border-r border-[var(--rule-soft)]">
        <div className="flex items-center justify-between px-3 py-1.5 border-b border-[var(--rule-soft)]">
          <span className="label text-[10.5px]">Listing — {title}</span>
        </div>
        <pre className="px-4 py-3 text-[12.5px] leading-[1.65] text-[var(--ink)] overflow-x-auto font-mono">
          {children}
        </pre>
      </div>
    </figure>
  );
}

/**
 * <KillChain> — ordered sequence rendered as small numbered ticks.
 * Editorial twist: looks like a footnote-numbered process diagram.
 */
export function KillChain({
  steps,
}: {
  steps?: { label: string; tool?: string }[];
}) {
  const safeSteps = Array.isArray(steps) ? steps : [];
  if (safeSteps.length === 0) return null;
  return (
    <figure className="my-9 not-prose">
      <ol
        className="grid gap-3 sm:gap-4"
        style={{
          gridTemplateColumns: `repeat(${safeSteps.length}, minmax(0, 1fr))`,
        }}
      >
        {safeSteps.map((s, i) => (
          <li
            key={i}
            className="border border-[var(--rule)] bg-[var(--paper-soft)] p-3 text-center relative"
          >
            <div className="display italic text-[var(--accent)] text-[1.1rem] mb-1.5 numerals-tab">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="display text-[13px] sm:text-[14px] font-semibold text-[var(--ink)] leading-tight">
              {s.label}
            </div>
            {s?.tool && (
              <div className="label text-[9.5px] mt-1.5 text-[var(--ink-faint)]">
                {s.tool}
              </div>
            )}
            {i < safeSteps.length - 1 && (
              <span
                aria-hidden="true"
                className="hidden md:inline absolute -right-3 top-1/2 -translate-y-1/2 text-[var(--accent)] display italic text-base"
              >
                ›
              </span>
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}

/**
 * <PullQuote> — italic display-serif quotation.
 */
export function PullQuote({
  attribution,
  children,
}: {
  attribution?: string;
  children: React.ReactNode;
}) {
  return (
    <blockquote className="pullquote not-prose balance my-10">
      “{children}”
      {attribution && (
        <footer className="label mt-3 text-[var(--ink-soft)] not-italic font-sans">
          — {attribution}
        </footer>
      )}
    </blockquote>
  );
}

/**
 * <Marginalia> — inline aside, set in sans, with a footnote-style number.
 * Renders below the paragraph on mobile; the typographic feel of a margin note.
 */
export function Marginalia({
  num,
  children,
}: {
  num: string | number;
  children: React.ReactNode;
}) {
  return (
    <aside className="marginalia not-prose my-6 max-w-prose">
      <span className="marginalia-num">{num}.</span>
      {children}
    </aside>
  );
}
