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
      <p className="label-accent mb-3">Error</p>
      <h1 className="display text-[2.4rem] sm:text-[3rem] leading-[1.05] font-semibold tracking-tight balance text-[var(--ink)] mb-5">
        Something went wrong
      </h1>
      <p className="text-[15.5px] leading-[1.75] text-[var(--ink-soft)] max-w-prose mb-6 pretty">
        An unexpected error occurred while rendering this page. Please try
        again, or return to the home page.
      </p>

      <pre className="my-6 px-4 py-3 bg-[var(--paper-soft)] border-l-2 border-[var(--accent)] text-[12.5px] overflow-x-auto text-[var(--ink-soft)] font-mono">
        {error?.message ?? "Unknown failure"}
      </pre>

      <button
        onClick={reset}
        className="display text-[var(--accent)] border border-[var(--accent)] px-4 py-1.5 text-[15px] hover:bg-[var(--accent)] hover:text-[var(--paper)] transition-colors"
      >
        Try again
      </button>
    </article>
  );
}
