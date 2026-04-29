import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "./config";
import { Ornament } from "./components/ornament";

export default function Page() {
  return (
    <article>
      {/* ─── Hero ─────────────────────────────── */}
      <section className="fold fold-1 mb-10">
        <p className="label-accent mb-3">Cyber Security Engineer</p>
        <h1
          className="display text-[2.4rem] sm:text-[3.6rem] leading-[1.05] font-semibold tracking-tight text-[var(--ink)] balance"
          style={{ fontVariationSettings: '"SOFT" 30, "WONK" 0' }}
        >
          Hi, I'm{" "}
          <span className="text-[var(--accent)]">Umair Sabir</span>.
        </h1>
        <p className="mt-5 text-[16px] sm:text-[17px] leading-[1.7] text-[var(--ink-soft)] max-w-prose pretty">
          I help organizations find and fix security weaknesses before
          attackers do. My focus is on offensive security — penetration
          testing, Active Directory, web, API, and network VAPT — alongside
          DFIR work, security tool development, and AI-driven automation
          for security operations.
        </p>
      </section>

      {/* ─── Quick links + portrait ──────────────────── */}
      <section className="fold fold-2 mb-12 grid grid-cols-1 sm:grid-cols-[1fr_120px] gap-6 items-start">
        <div className="flex flex-wrap gap-x-5 gap-y-2 items-center">
          <Link href="/about" className="dlink text-[15px]">
            About
          </Link>
          <span className="text-[var(--ink-faint)]">·</span>
          <Link href="/projects" className="dlink text-[15px]">
            Projects
          </Link>
          <span className="text-[var(--ink-faint)]">·</span>
          <Link href="/blog" className="dlink text-[15px]">
            Blog
          </Link>
          <span className="text-[var(--ink-faint)]">·</span>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="dlink text-[15px]"
          >
            LinkedIn
          </a>
          <span className="text-[var(--ink-faint)]">·</span>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="dlink text-[15px]"
          >
            GitHub
          </a>
          <span className="text-[var(--ink-faint)]">·</span>
          <a href={socialLinks.email} className="dlink text-[15px]">
            Email
          </a>
        </div>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block justify-self-end"
        >
          <Image
            src="/profile.png"
            alt="Umair Sabir"
            width={120}
            height={120}
            unoptimized
            priority
            className="rounded-full border border-[var(--rule)] grayscale hover:grayscale-0 transition-all duration-500"
          />
        </a>
      </section>

      <Ornament />

      {/* ─── Areas of focus ──────────────────────── */}
      <section className="fold fold-3 mb-12">
        <h2 className="display text-[1.6rem] sm:text-[2rem] font-semibold tracking-tight text-[var(--ink)] mb-6 balance">
          Areas of focus
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 text-[14.5px] leading-relaxed">
          <Focus
            title="Penetration testing"
            body="External and internal engagements, web applications, APIs, and networks. End-to-end VAPT with clear, actionable reporting."
          />
          <Focus
            title="Active Directory security"
            body="Kerberos abuse, ACL chains, delegation attacks, BloodHound-driven path analysis, and AD hardening recommendations."
          />
          <Focus
            title="DFIR"
            body="Memory forensics, malware triage, sandbox analysis, and incident response support across Windows and Linux environments."
          />
          <Focus
            title="Security tool development"
            body="Building and maintaining open-source offensive and defensive tooling in Python, Bash, and C — see the projects page."
          />
          <Focus
            title="AI automation & workflows"
            body="Automating security operations and analysis pipelines using OpenCLAW, n8n, and custom AI workflows for triage and reporting."
          />
          <Focus
            title="Reverse engineering"
            body="Static and dynamic binary analysis. Currently pursuing OSED to deepen Windows exploit-development and reversing skills."
          />
        </div>
      </section>

      <Ornament />

      {/* ─── Background + Achievements ──────────────── */}
      <section className="fold fold-4 mb-12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
        <div>
          <h2 className="display text-[1.4rem] font-semibold tracking-tight text-[var(--ink)] mb-4">
            Background
          </h2>
          <dl className="text-[14.5px] leading-relaxed">
            <Particular k="Education" v="MS, Cyber Security · Air University" />
            <Particular k="Certifications" v="OSCP · CRTO · eCPPT" />
            <Particular k="In progress" v="OSED — Windows exploit development" />
            <Particular k="Languages" v="Python · Bash · C · ASM (x86/x64)" />
            <Particular k="Tooling" v="OpenCLAW · n8n · BloodHound · Burp Suite" />
            <Particular k="Location" v="Islamabad, Pakistan · UTC +05:00" />
          </dl>
        </div>

        <div>
          <h2 className="display text-[1.4rem] font-semibold tracking-tight text-[var(--ink)] mb-4">
            Selected achievements
          </h2>
          <dl className="text-[14.5px] leading-relaxed">
            <Particular k="2024" v="Hackmasters'24 — Winner, OIC CTF (Istanbul)" />
            <Particular k="2024" v="BlackHat MEA '24 — Finalist (Riyadh)" />
            <Particular k="2023" v="BlackHat MEA '23 — Finalist" />
            <Particular k="2023" v="MCS CTF '23 — Winner" />
            <Particular k="2022" v="Pakistan Cyber Security Challenge — Top 10" />
            <Particular k="—" v="20+ national hackathon wins" />
          </dl>
        </div>
      </section>

      <Ornament />

      {/* ─── About this site ─────────────────────────── */}
      <section className="fold fold-5 mt-6">
        <h2 className="display text-[1.4rem] font-semibold tracking-tight text-[var(--ink)] mb-3">
          About this site
        </h2>
        <p className="text-[15.5px] leading-[1.75] text-[var(--ink-soft)] pretty max-w-prose">
          A central place for my work, writing, and projects. New posts go up
          when I have something useful to share. For collaborations,
          consulting, or just to say hello, the easiest way to reach me is by{" "}
          <a href={socialLinks.email} className="dlink">
            email
          </a>{" "}
          or{" "}
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="dlink"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>
    </article>
  );
}

function Focus({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="display text-[1.05rem] font-semibold text-[var(--ink)] mb-1.5 leading-tight">
        {title}
      </h3>
      <p className="text-[14px] text-[var(--ink-soft)] leading-[1.65] pretty">
        {body}
      </p>
    </div>
  );
}

function Particular({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[130px_1fr] gap-3 items-baseline py-1.5 border-b border-dotted border-[var(--rule-soft)] last:border-b-0">
      <dt className="label text-[var(--ink-faint)]">{k}</dt>
      <dd className="text-[var(--ink)]">{v}</dd>
    </div>
  );
}
