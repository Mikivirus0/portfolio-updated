"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <article>
      <span className="label-accent">Erratum</span>
      <h1 className="display text-[2.4rem] sm:text-[3.2rem] leading-[1.05] font-semibold tracking-tight balance mt-2 mb-4 text-[var(--ink)]">
        An error has occurred{" "}
        <span className="italic font-normal text-[var(--accent)]">
          mid-printing.
        </span>
      </h1>

      <p className="standfirst max-w-prose">
        The press has stopped. The page below shows the trace; pulling the
        lever marked <em>retry</em> resumes printing.
      </p>

      <pre className="my-6 px-4 py-3 bg-[var(--paper-soft)] border-l-2 border-[var(--accent)] text-[12.5px] overflow-x-auto text-[var(--ink-soft)] font-mono">
        {error?.message ?? "unknown failure"}
      </pre>

      <button
        onClick={reset}
        className="display italic text-[var(--accent)] border border-[var(--accent)] px-4 py-1.5 text-[15px] hover:bg-[var(--accent)] hover:text-[var(--paper)] transition-colors"
      >
        retry
      </button>
    </article>
  );
}
