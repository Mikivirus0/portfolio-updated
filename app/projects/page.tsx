import type { Metadata } from "next";
import { projects, type Project } from "./project-data";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Open-source security tools, CTF infrastructure, and side projects by Umair Sabir.",
};

const STATUS_LABEL: Record<NonNullable<Project["status"]>, string> = {
  active: "Active",
  stable: "Stable",
  experimental: "Experimental",
  archived: "Archived",
};

export default function Projects() {
  const sorted = [...projects].sort((a, b) => b.year - a.year);

  return (
    <article>
      <section className="mb-10 fold fold-1">
        <p className="label-accent mb-3">Projects</p>
        <h1 className="display text-[2.4rem] sm:text-[3.2rem] leading-[1.05] font-semibold tracking-tight balance text-[var(--ink)]">
          Open-source work
        </h1>
        <p className="mt-4 text-[15.5px] sm:text-[16px] leading-[1.7] text-[var(--ink-soft)] max-w-prose pretty">
          A selection of security tools, scanners, and utilities I've built
          and maintained. Most are open source — pull requests, issues, and
          feedback are welcome on{" "}
          <a
            href="https://github.com/Mikivirus0"
            target="_blank"
            rel="noopener noreferrer"
            className="dlink"
          >
            GitHub
          </a>
          .
        </p>
      </section>

      <div className="fold fold-2">
        {sorted.map((p) => (
          <Entry key={p.slug} project={p} />
        ))}
      </div>

      <p className="mt-12 text-[14px] text-[var(--ink-soft)] border-t border-dotted border-[var(--rule)] pt-6 max-w-prose">
        The full list of repositories, including dormant projects and forks,
        is at{" "}
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
    </article>
  );
}

function Entry({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block py-6 border-b border-dotted border-[var(--rule)] first:border-t first:pt-6 last:border-b-0"
    >
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-x-6 gap-y-2 items-baseline">
        <div>
          <div className="flex items-baseline gap-3 flex-wrap">
            <h2 className="display text-[1.3rem] sm:text-[1.55rem] font-semibold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors leading-tight">
              {project.title}
            </h2>
            <FaArrowUpRightFromSquare className="text-[12px] text-[var(--ink-faint)] group-hover:text-[var(--accent)]" />
          </div>

          <p className="text-[15px] text-[var(--ink-soft)] leading-[1.65] mt-2 pretty max-w-prose">
            {project.description}
          </p>

          <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[12px] text-[var(--ink-faint)] label">
            {project.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="text-right shrink-0">
          <div className="display italic text-[var(--ink-soft)] numerals-tab text-[1rem]">
            {project.year}
          </div>
          {project.language && (
            <div className="label text-[10.5px] mt-0.5 text-[var(--ink-faint)]">
              {project.language}
            </div>
          )}
          {project.status && (
            <div className="text-[12px] italic text-[var(--accent)] display mt-1.5">
              {STATUS_LABEL[project.status]}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
