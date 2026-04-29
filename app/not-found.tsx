import type { Metadata } from "next";
import Link from "next/link";
import { Folio, FolioMark } from "./components/folio";
import { Ornament } from "./components/ornament";

export const metadata: Metadata = {
  title: "Errata — Page Not Found",
  description: "The page is not in this volume.",
};

export default function NotFound() {
  return (
    <article>
      <Folio file="—" subject="Errata" classification="In erratum" />

      <span className="label-accent">Errata</span>
      <h1 className="display text-[2.6rem] sm:text-[3.6rem] leading-[1.05] font-semibold tracking-tight balance mt-2 mb-4 text-[var(--ink)]">
        The page you sought is{" "}
        <span className="italic font-normal text-[var(--accent)]">
          not in this volume.
        </span>
      </h1>

      <p className="standfirst max-w-prose">
        It may have been moved to a later edition, suppressed by the editor,
        or you may have followed a misprinted reference. Our apologies — these
        things happen, even in the best-bound publications.
      </p>

      <Ornament />

      <p className="text-[15.5px] leading-[1.7] text-[var(--ink)]">
        You may{" "}
        <Link href="/" className="dlink">
          return to the front page
        </Link>
        , consult{" "}
        <Link href="/blog" className="dlink">
          the contents of essays
        </Link>
        , or browse{" "}
        <Link href="/projects" className="dlink">
          the catalogue of works
        </Link>
        . If you believe a link is broken, write to the operator and the
        erratum will be amended in the next printing.
      </p>

      <FolioMark num="—" />
    </article>
  );
}
