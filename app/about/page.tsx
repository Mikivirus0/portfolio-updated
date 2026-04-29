import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "../config";
import { Ornament } from "../components/ornament";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Umair Sabir — Cyber Security Engineer specializing in penetration testing, Active Directory, VAPT, DFIR, and security automation.",
};

export default function About() {
  return (
    <article>
      {/* ─── Header ─────────────────────────── */}
      <section className="mb-10 fold fold-1">
        <p className="label-accent mb-3">About</p>
        <h1 className="display text-[2.4rem] sm:text-[3.2rem] leading-[1.05] font-semibold tracking-tight balance text-[var(--ink)]">
          Umair Sabir
        </h1>
        <p className="display italic text-[1.15rem] sm:text-[1.25rem] text-[var(--ink-soft)] mt-2">
          Cyber Security Engineer at AirOverflow · Islamabad, Pakistan
        </p>
      </section>

      {/* ─── Intro + photo ─────────────────────── */}
      <section className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-6 mb-10 items-start fold fold-2">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Image
            src="/profile.png"
            alt="Umair Sabir"
            width={160}
            height={160}
            unoptimized
            priority
            className="border border-[var(--rule)] p-1.5 bg-[var(--paper-soft)] grayscale hover:grayscale-0 transition-all duration-500"
          />
        </a>
        <div className="text-[15.5px] leading-[1.75] text-[var(--ink)] pretty">
          <p>
            I'm a Cyber Security Engineer at{" "}
            <strong>AirOverflow</strong>, based in Islamabad, Pakistan. My
            day-to-day work combines offensive security engagements,
            cybersecurity tool development, and building the CTF challenges
            and platforms that AirOverflow runs for the community.
          </p>
          <p className="mt-3">
            I hold a Master's in Cyber Security from{" "}
            <strong>Air University</strong>. I'm{" "}
            <strong>OSCP</strong> certified, along with{" "}
            <strong>CRTO</strong> and <strong>eCPPT</strong>. I'm currently
            pursuing <strong>OSED</strong> — Windows exploit development —
            because the topic genuinely interests me.
          </p>
        </div>
      </section>

      <Ornament />

      {/* ─── What I do ─────────────────────── */}
      <section className="mb-10">
        <h2 className="display text-[1.6rem] sm:text-[1.85rem] font-semibold tracking-tight text-[var(--ink)] mb-5">
          What I do
        </h2>
        <p className="text-[15.5px] leading-[1.75] text-[var(--ink-soft)] mb-6 pretty max-w-prose">
          My work spans the full offensive-security lifecycle and increasingly
          touches the development and automation side of security operations.
          The areas I focus on most:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
          <Capability
            title="Penetration Testing"
            body="External and internal engagements, Active Directory, web applications, APIs, and networks. Full-cycle VAPT with detailed reporting."
          />
          <Capability
            title="Active Directory Security"
            body="Kerberoasting, ACL abuse, delegation attacks, BloodHound path analysis, and hardening reviews."
          />
          <Capability
            title="Web · API · Network VAPT"
            body="Manual testing supported by Burp Suite, Nuclei, custom scripts, and proper threat modeling."
          />
          <Capability
            title="DFIR"
            body="Memory forensics, malware triage (PDF, Office, JS), sandbox analysis, and incident response support."
          />
          <Capability
            title="Security Tool Development"
            body="Open-source offensive and defensive tooling — Sqlhound, SUBROOT, MalwareMaster — primarily in Python and C."
          />
          <Capability
            title="AI Automation & Workflows"
            body="Designing and deploying AI-driven workflows for security operations using OpenCLAW, n8n, and custom integrations."
          />
          <Capability
            title="Reverse Engineering"
            body="Static and dynamic binary analysis. Used in malware research and exploit development work."
          />
          <Capability
            title="Exploit Development"
            body="Currently focused on Windows exploit development as part of OSED preparation — shellcoding, SEH chains, ROP."
          />
        </div>
      </section>

      <Ornament />

      {/* ─── Skills & tools ─────────────────────── */}
      <section className="mb-10">
        <h2 className="display text-[1.6rem] sm:text-[1.85rem] font-semibold tracking-tight text-[var(--ink)] mb-5">
          Skills & tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 text-[14.5px] leading-relaxed">
          <Skill
            k="Languages"
            v="Python · Bash · C · JavaScript · x86/x64 Assembly"
          />
          <Skill
            k="Offensive"
            v="Burp Suite · Nuclei · Impacket · BloodHound · CrackMapExec · Mimikatz"
          />
          <Skill
            k="Reversing"
            v="IDA · Ghidra · WinDbg · x64dbg · Radare2"
          />
          <Skill
            k="DFIR"
            v="Volatility · Cuckoo Sandbox · YARA · The Sleuth Kit"
          />
          <Skill
            k="Automation"
            v="OpenCLAW · n8n · GitHub Actions · custom AI workflows"
          />
          <Skill
            k="Cloud & infra"
            v="AWS · Azure · Docker · Kubernetes (security context)"
          />
        </div>
      </section>

      <Ornament />

      {/* ─── Education & certifications ─────────────── */}
      <section className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
        <div>
          <h2 className="display text-[1.4rem] font-semibold tracking-tight text-[var(--ink)] mb-4">
            Education
          </h2>
          <ul className="text-[14.5px] leading-relaxed space-y-2.5 text-[var(--ink)]">
            <li>
              <span className="display italic text-[var(--accent)]">
                MS, Cyber Security
              </span>
              <br />
              <span className="text-[var(--ink-soft)]">Air University, Islamabad</span>
            </li>
            <li>
              <span className="display italic text-[var(--accent)]">
                BS, Cyber Security
              </span>
              <br />
              <span className="text-[var(--ink-soft)]">Air University, Islamabad</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="display text-[1.4rem] font-semibold tracking-tight text-[var(--ink)] mb-4">
            Certifications
          </h2>
          <ul className="text-[14.5px] leading-relaxed space-y-2 text-[var(--ink)]">
            <li>
              <strong>OSCP</strong> — Offensive Security Certified Professional
            </li>
            <li>
              <strong>CRTO</strong> — Certified Red Team Operator
            </li>
            <li>
              <strong>eCPPT</strong> — Certified Professional Penetration Tester
            </li>
            <li className="text-[var(--ink-soft)]">
              <strong className="text-[var(--ink)]">OSED</strong> — in progress
              (Windows exploit development)
            </li>
          </ul>
        </div>
      </section>

      <Ornament />

      {/* ─── Experience ─────────────────────── */}
      <section className="mb-10">
        <h2 className="display text-[1.6rem] sm:text-[1.85rem] font-semibold tracking-tight text-[var(--ink)] mb-5">
          Experience
        </h2>
        <div className="space-y-7 max-w-prose">
          <ExperienceItem
            role="Cyber Security Engineer"
            org="AirOverflow"
            period="2023 — Present"
            bullets={[
              "Lead penetration testing engagements across web, API, network, and Active Directory environments.",
              "Develop and maintain cybersecurity tools used internally and shared with the community.",
              "Design CTF challenges and build the CTF platforms used for national and international cybersecurity events.",
            ]}
          />
          <ExperienceItem
            role="Founder"
            org="ByteBoltSec"
            period="—"
            bullets={[
              "Founded a Pakistan-based cybersecurity practice focused on penetration testing and security training.",
              "Delivered consulting engagements and training programs for clients and students.",
            ]}
          />
          <ExperienceItem
            role="Trainer"
            org="Ignite — Bahria University"
            period="—"
            bullets={[
              "Conducted practical penetration testing workshops for students under the Ignite program at Bahria University.",
            ]}
          />
        </div>
      </section>

      <Ornament />

      {/* ─── Achievements ─────────────────────── */}
      <section className="mb-10">
        <h2 className="display text-[1.6rem] sm:text-[1.85rem] font-semibold tracking-tight text-[var(--ink)] mb-5">
          Selected achievements
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-[14.5px] border-collapse">
            <thead>
              <tr className="border-b-2 border-[var(--ink)]">
                <th className="label text-left py-2 pr-4 w-20">Year</th>
                <th className="label text-left py-2 pr-4">Event</th>
                <th className="label text-left py-2">Result</th>
              </tr>
            </thead>
            <tbody>
              <Row
                y="2024"
                e="National Cyber Security Champion — Ignite (Ministry of IT)"
                r="Winner"
                highlight
              />
              <Row
                y="2024"
                e="Hackmasters'24 — OIC CTF, Istanbul"
                r="Winner"
                highlight
              />
              <Row y="2024" e="BlackHat MEA '24 — Riyadh" r="Finalist" />
              <Row
                y="2023"
                e="National Cyber Security Champion — Ignite (Ministry of IT)"
                r="Winner"
                highlight
              />
              <Row y="2023" e="BlackHat MEA '23 — Riyadh" r="Finalist" />
              <Row
                y="2023"
                e="MCS CTF '23 — Military College of Signals"
                r="Winner"
                highlight
              />
              <Row
                y="2022"
                e="National Cyber Security Champion — Ignite (Ministry of IT)"
                r="Winner"
                highlight
              />
              <Row
                y="2022"
                e="Pakistan Cyber Security Challenge (NCCS × AU)"
                r="Top 10"
              />
              <Row y="2022" e="NASCON '22 CTF — FAST-NUCES" r="4th place" />
              <Row y="—" e="National hackathons & CTFs" r="20+ wins" />
            </tbody>
          </table>
        </div>
      </section>

      <Ornament />

      {/* ─── Currently ─────────────────────── */}
      <section className="mb-10">
        <h2 className="display text-[1.6rem] sm:text-[1.85rem] font-semibold tracking-tight text-[var(--ink)] mb-5">
          Currently
        </h2>
        <ul className="text-[15px] leading-[1.7] space-y-2 text-[var(--ink-soft)] max-w-prose">
          <li>
            Running penetration testing engagements at{" "}
            <strong className="text-[var(--ink)]">AirOverflow</strong>.
          </li>
          <li>
            Designing and maintaining CTF challenges and platforms for
            AirOverflow's events.
          </li>
          <li>
            Studying for <strong className="text-[var(--ink)]">OSED</strong> —
            Windows exploit development, custom shellcode, SEH chains.
          </li>
          <li>
            Building AI-driven workflows for security operations using{" "}
            <strong className="text-[var(--ink)]">OpenCLAW</strong> and{" "}
            <strong className="text-[var(--ink)]">n8n</strong>.
          </li>
          <li>
            Maintaining open-source security tools — see the{" "}
            <Link href="/projects" className="dlink">
              projects
            </Link>{" "}
            page.
          </li>
          <li>
            Writing technical posts on offensive security, exploit development,
            and tooling on the{" "}
            <Link href="/blog" className="dlink">
              blog
            </Link>
            .
          </li>
        </ul>
      </section>

      <Ornament />

      {/* ─── Contact ─────────────────────── */}
      <section className="mb-6">
        <h2 className="display text-[1.6rem] sm:text-[1.85rem] font-semibold tracking-tight text-[var(--ink)] mb-5">
          Get in touch
        </h2>
        <p className="text-[15.5px] leading-[1.75] text-[var(--ink-soft)] max-w-prose mb-4">
          For consulting, collaborations, training, or just to say hello — the
          best ways to reach me:
        </p>
        <ul className="text-[15px] leading-[1.85]">
          <Channel
            name="Email"
            handle="mumairs3636@gmail.com"
            href={socialLinks.email}
          />
          <Channel
            name="LinkedIn"
            handle="linkedin.com/in/mikivirus"
            href={socialLinks.linkedin}
          />
          <Channel
            name="GitHub"
            handle="github.com/Mikivirus0"
            href={socialLinks.github}
          />
          <Channel
            name="X"
            handle="@UmairSa76915114"
            href={socialLinks.twitter}
          />
        </ul>
      </section>
    </article>
  );
}

function ExperienceItem({
  role,
  org,
  period,
  bullets,
}: {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
        <div>
          <h3 className="display text-[1.15rem] font-semibold text-[var(--ink)] leading-tight">
            {role}{" "}
            <span className="text-[var(--accent)]">·</span>{" "}
            <span className="font-normal italic text-[var(--ink-soft)]">
              {org}
            </span>
          </h3>
        </div>
        <span className="label numerals-tab text-[var(--ink-faint)]">
          {period}
        </span>
      </div>
      <ul className="text-[14.5px] leading-[1.65] text-[var(--ink-soft)] space-y-1.5 pl-4">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="relative before:content-['—'] before:absolute before:-left-4 before:text-[var(--accent)]"
          >
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Capability({ title, body }: { title: string; body: string }) {
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

function Skill({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[120px_1fr] gap-3 items-baseline py-1.5 border-b border-dotted border-[var(--rule-soft)] last:border-b-0">
      <dt className="label text-[var(--ink-faint)]">{k}</dt>
      <dd className="text-[var(--ink)]">{v}</dd>
    </div>
  );
}

function Row({
  y,
  e,
  r,
  highlight,
}: {
  y: string;
  e: string;
  r: string;
  highlight?: boolean;
}) {
  return (
    <tr className="border-b border-dotted border-[var(--rule)]">
      <td className="py-2.5 pr-4 numerals-tab text-[var(--ink-soft)] display italic">
        {y}
      </td>
      <td className="py-2.5 pr-4 text-[var(--ink)]">{e}</td>
      <td className="py-2.5">
        <span
          className={
            highlight
              ? "text-[var(--accent)] font-semibold"
              : "text-[var(--ink-soft)]"
          }
        >
          {r}
        </span>
      </td>
    </tr>
  );
}

function Channel({
  name,
  handle,
  href,
}: {
  name: string;
  handle: string;
  href: string;
}) {
  return (
    <li className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] gap-3 items-baseline py-1.5 border-b border-dotted border-[var(--rule-soft)] last:border-b-0">
      <span className="label">{name}</span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="dlink text-[var(--ink)] text-[15px]"
      >
        {handle}
      </a>
    </li>
  );
}
