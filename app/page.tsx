import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "./config";
import { Ornament, Section, Standfirst } from "./components/ornament";
import { FolioMark } from "./components/folio";

export default function Page() {
  return (
    <article>
      {/* ─── Issue meta ─────────────────────────────── */}
      <div className="flex items-center justify-between mb-6 fold fold-1">
        <span className="label-accent">In this issue</span>
        <span className="label numerals-tab">№ IV · April MMXXVI</span>
      </div>

      {/* ─── Cover headline ─────────────────────────── */}
      <h1
        className="display text-[2.6rem] sm:text-[4.4rem] leading-[1.02] font-semibold tracking-tight text-[var(--ink)] balance fold fold-1"
        style={{ fontVariationSettings: '"SOFT" 30, "WONK" 0' }}
      >
        On the long walk{" "}
        <span className="italic font-normal text-[var(--accent)]">
          from user
        </span>{" "}
        to <span className="italic font-normal">domain admin.</span>
      </h1>

      <Standfirst>
        Notes from a working operator. Field reports, exploit sketches, tools
        I had to build because the existing ones bored me, and a longer
        argument about why penetration testing is a craft that lives mostly in
        the report — not in the shell.
      </Standfirst>

      {/* ─── Byline + portrait ──────────────────────── */}
      <div className="flex items-start gap-5 mb-8 fold fold-2">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0"
        >
          <Image
            src="/profile.png"
            alt="Umair Sabir"
            width={64}
            height={64}
            unoptimized
            priority
            className="rounded-full border border-[var(--rule)] grayscale hover:grayscale-0 transition-all duration-500"
          />
        </a>
        <div className="text-[14px] leading-relaxed pretty">
          <p className="label mb-1">By the operator</p>
          <p className="display text-[1.05rem] text-[var(--ink)]">
            Umair Sabir
            <span className="italic text-[var(--ink-soft)]">
              {" "}
              · &nbsp;alias <span className="text-[var(--accent)]">MikiVirus</span>
            </span>
          </p>
          <p className="text-[var(--ink-soft)] mt-0.5">
            MS in Cybersecurity. <span className="text-[var(--ink)]">OSCP</span>
            ; presently sitting <span className="text-[var(--ink)]">OSED</span>.
            Founder of <span className="text-[var(--ink)]">ByteBoltSec</span>.
            Core, <span className="text-[var(--ink)]">AirOverflow</span>.
          </p>
        </div>
      </div>

      <Ornament />

      {/* ─── Table of Contents ──────────────────────── */}
      <section className="fold fold-3">
        <div className="flex items-center justify-between mb-4">
          <span className="label-accent">Contents</span>
          <span className="label">For the reader in a hurry</span>
        </div>

        <ul className="text-[15.5px]">
          <Toc
            num="I."
            title="On the subject"
            blurb="Who I am, what I've done, what I'm doing now."
            href="/about"
            page="02"
          />
          <Toc
            num="II."
            title="Catalogue of works"
            blurb="Open-source tools — Sqlhound, SUBROOT, MalwareMaster, &c."
            href="/projects"
            page="07"
          />
          <Toc
            num="III."
            title="Essays & field reports"
            blurb="Active Directory, OSED notes, methodology, &c."
            href="/blog"
            page="14"
          />
          <Toc
            num="IV."
            title="Plates"
            blurb="Photographs from competitions, conferences, travel."
            href="/photos"
            page="42"
          />
        </ul>
      </section>

      <Ornament mark="※" />

      {/* ─── Particulars (two cols) ─────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 fold fold-4 mt-2">
        <Section label="Particulars" title="The Operator">
          <dl className="text-[14.5px] leading-relaxed">
            <Particular k="Education" v="MS, Cybersecurity · Air University" />
            <Particular k="Certifications" v="OSCP · CRTO · eCPPT" />
            <Particular k="In Progress" v="OSED — Windows exploit dev" />
            <Particular k="Practices" v="VAPT · Red Team · Exploit Dev · DFIR" />
            <Particular k="Languages" v="Python · Bash · C · ASM (x86/x64) · Rust" />
            <Particular k="Based" v="Islamabad, Pakistan · UTC +05:00" />
          </dl>
        </Section>

        <Section label="Distinctions" title="Selected wins">
          <dl className="text-[14.5px] leading-relaxed">
            <Particular k="MMXXIV" v="Hackmasters'24 — Winner, OIC CTF (Istanbul)" />
            <Particular k="MMXXIV" v="BlackHat MEA '24 — Finalist (Riyadh)" />
            <Particular k="MMXXIII" v="BlackHat MEA '23 — Finalist" />
            <Particular k="MMXXIII" v="MCS CTF '23 — Winner" />
            <Particular k="MMXXII" v="Pak Cyber Security Challenge — Top 10" />
            <Particular k="—" v="20+ national hackathon victories" />
          </dl>
        </Section>
      </div>

      <Ornament />

      {/* ─── Editor's note ──────────────────────────── */}
      <section className="fold fold-5 mt-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="label-accent">Editor's note</span>
          <span className="flex-1 h-px bg-[var(--rule)]" />
        </div>
        <p className="text-[15.5px] leading-[1.75] text-[var(--ink-soft)] pretty max-w-prose dropcap">
          This site is a working publication. It exists in lieu of a CV I have
          to keep updating and a Notion page nobody reads. New entries appear
          when I learn something worth writing down — irregularly, but with
          care. If you'd like to correspond, the addresses at the foot of every
          page are real and read by a real person. If you'd like to{" "}
          <Link href="/projects" className="dlink">browse the catalogue</Link>{" "}
          or read{" "}
          <Link href="/blog" className="dlink">a longer essay</Link>, the
          contents above will direct you.
        </p>
      </section>

      <FolioMark num="1" total="48" />
    </article>
  );
}

function Toc({
  num,
  title,
  blurb,
  href,
  page,
}: {
  num: string;
  title: string;
  blurb: string;
  href: string;
  page: string;
}) {
  return (
    <li className="grid grid-cols-[36px_1fr_56px] sm:grid-cols-[44px_1fr_72px] gap-x-3 sm:gap-x-5 items-baseline py-3 border-b border-dotted border-[var(--rule)]">
      <span className="display italic text-[var(--accent)] text-[1.05rem]">
        {num}
      </span>
      <span>
        <Link
          href={href}
          className="display text-[var(--ink)] hover:text-[var(--accent)] text-[1.1rem] sm:text-[1.2rem] transition-colors"
        >
          {title}
        </Link>
        <span className="block text-[13.5px] text-[var(--ink-soft)] italic mt-0.5 leading-snug">
          {blurb}
        </span>
      </span>
      <span className="display italic text-right text-[var(--ink-soft)] numerals-tab text-[1rem]">
        p. {page}
      </span>
    </li>
  );
}

function Particular({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[120px_1fr] gap-3 items-baseline py-1.5 border-b border-dotted border-[var(--rule-soft)] last:border-b-0">
      <dt className="label text-[var(--ink-faint)]">{k}</dt>
      <dd className="text-[var(--ink)]">{v}</dd>
    </div>
  );
}
