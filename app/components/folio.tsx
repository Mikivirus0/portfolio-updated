import React from "react";

/**
 * <Folio> — page-identifier strip used at the top of each interior page.
 * Mimics the "FILE 02 · SUBJECT" tab on a real archived document.
 */
export function Folio({
  file,
  subject,
  classification = "Operator's Eyes Only",
}: {
  file: string; // e.g. "02"
  subject: string; // e.g. "About — Sabir, U."
  classification?: string;
}) {
  return (
    <div className="flex items-center justify-between mb-8 border-b border-[var(--rule)] pb-2 text-[10.5px] sm:text-[11px] label">
      <span>
        File <span className="text-[var(--accent)]">{file}</span>
      </span>
      <span className="display italic text-[0.8rem] sm:text-[0.9rem] tracking-normal text-[var(--ink-soft)] normal-case">
        {subject}
      </span>
      <span className="hidden sm:inline">{classification}</span>
    </div>
  );
}

/**
 * <FolioMark> — bottom-of-page page number.
 */
export function FolioMark({
  num,
  total,
}: {
  num: string;
  total?: string;
}) {
  return (
    <div className="flex items-center justify-end gap-2 mt-16 mb-2 label numerals-tab">
      <span className="display italic text-[var(--accent)] text-base">—</span>
      <span>
        {num}
        {total && (
          <span className="text-[var(--ink-faint)]"> / {total}</span>
        )}
      </span>
      <span className="display italic text-[var(--accent)] text-base">—</span>
    </div>
  );
}
