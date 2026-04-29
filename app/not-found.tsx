import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <article>
      <p className="label-accent mb-3">404</p>
      <h1 className="display text-[2.4rem] sm:text-[3.2rem] leading-[1.05] font-semibold tracking-tight balance text-[var(--ink)] mb-5">
        Page not found
      </h1>
      <p className="text-[15.5px] leading-[1.75] text-[var(--ink-soft)] max-w-prose mb-6 pretty">
        The page you're looking for doesn't exist, or it may have been moved.
        If you followed a link to get here, it might be out of date.
      </p>
      <p className="text-[15px] text-[var(--ink)]">
        <Link href="/" className="dlink">
          Return to home
        </Link>{" "}
        ·{" "}
        <Link href="/blog" className="dlink">
          Read the blog
        </Link>{" "}
        ·{" "}
        <Link href="/projects" className="dlink">
          See projects
        </Link>
      </p>
    </article>
  );
}
