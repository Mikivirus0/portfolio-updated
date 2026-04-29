import type { Metadata } from "next";
import { projects, type Project } from "./project-data";
import { Folio, FolioMark } from "../components/folio";
import { Standfirst, Ornament } from "../components/ornament";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Catalogue",
  description:
    "A catalogue of open-source security tools, CTF infrastructure, and side-projects.",
};

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

const STATUS_LABEL: Record<NonNullable<Project["status"]>, string> = {
  active: "in active service",
  stable: "in stable rotation",
  experimental: "experimental",
  archived: "archived",
};

export default function Projects() {
  const sorted = [...projects].sort((a, b) => b.year - a.year);

  return (
    <article>
      <Folio file="07" subject="Catalogue raisonné" />

      <div className="mb-2 flex items-baseline justify-between gap-4">
        <span className="label-accent">Catalogue</span>
        <span className="label numerals-tab">{sorted.length} entries</span>
      </div>

      <h1 className="display text-[2.4rem] sm:text-[3.4rem] leading-[1.05] font-semibold tracking-tight balance text-[var(--ink)] fold fold-1">
        A catalogue{" "}
        <span className="italic font-normal text-[var(--accent)]">
          of works
        </span>
      </h1>

      <Standfirst>
        Tools and small monsters built by the operator. Each is on{" "}
        <a
          href="https://github.com/Mikivirus0"
          target="_blank"
          rel="noopener noreferrer"
          className="dlink"
        >
          GitHub
        </a>{" "}
        and most accept pull requests, bug reports, and your indignant
        complaints.
      </Standfirst>

      <Ornament />

      {/* Catalogue entries */}
      <div className="fold fold-2">
        {sorted.map((p, i) => (
          <Entry key={p.slug} project={p} index={i} />
        ))}
      </div>

      <Ornament mark="❦" />

      <p className="text-[14px] italic text-[var(--ink-soft)] max-w-prose">
        The full index, including dormant repositories and forks, is at{" "}
        <a
          href="https://github.com/Mikivirus0?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="dlink"
        >
          github.com/Mikivirus0
        </a>
        .
      </p>

      <FolioMark num="13" total="48" />
    </article>
  );
}

function Entry({ project, index }: { project: Project; index: number }) {
  const num = ROMAN[index] ?? String(index + 1);
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block py-7 border-b border-dotted border-[var(--rule)] first:border-t first:pt-7 last:border-b-0"
    >
      <div className="grid grid-cols-[44px_1fr_auto] sm:grid-cols-[60px_1fr_auto] gap-x-4 sm:gap-x-6 items-baseline">
        {/* Roman numeral */}
        <span className="display italic text-[var(--accent)] text-[1.25rem] sm:text-[1.45rem] leading-none">
          {num}.
        </span>

        {/* Title block */}
        <div>
          <div className="flex items-baseline gap-3 flex-wrap">
            <h2 className="display text-[1.4rem] sm:text-[1.7rem] font-semibold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors leading-tight">
              {project.title}
            </h2>
            <FaArrowUpRightFromSquare className="text-[12px] text-[var(--ink-faint)] group-hover:text-[var(--accent)]" />
          </div>

          <p className="text-[15px] text-[var(--ink-soft)] leading-[1.7] mt-2 pretty max-w-prose">
            {project.description}
          </p>

          {/* Subscript metadata */}
          <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[12px] text-[var(--ink-faint)] label">
            {project.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>

        {/* Right column — year + status */}
        <div className="text-right">
          <div className="display italic text-[var(--ink-soft)] numerals-tab text-[1.05rem]">
            {project.year}
          </div>
          {project.language && (
            <div className="label text-[10.5px] mt-0.5 text-[var(--ink-faint)]">
              {project.language}
            </div>
          )}
          {project.status && (
            <div className="text-[11px] italic text-[var(--accent)] display mt-1.5 max-w-[120px]">
              {STATUS_LABEL[project.status]}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
