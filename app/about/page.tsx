import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "../config";
import { Folio, FolioMark } from "../components/folio";
import { Ornament, Section, Standfirst } from "../components/ornament";

export const metadata: Metadata = {
  title: "Subject — Sabir, U.",
  description:
    "About Umair Sabir (MikiVirus): MS Cybersecurity, OSCP, OSED in progress, founder of ByteBoltSec.",
};

export default function About() {
  return (
    <article>
      <Folio file="02" subject="Subject — Sabir, U." />

      {/* Title block */}
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <span className="label-accent">On the subject</span>
        <span className="label">Dossier opened MMXIX</span>
      </div>
      <h1 className="display text-[2.4rem] sm:text-[3.4rem] leading-[1.05] font-semibold tracking-tight balance text-[var(--ink)] fold fold-1">
        Umair Sabir,{" "}
        <span className="italic font-normal text-[var(--accent)]">
          alias MikiVirus
        </span>
      </h1>
      <Standfirst>
        Pakistan-based offensive-security operator. Hire him to break things —
        then to write the report that makes sure no one else can.
      </Standfirst>

      {/* Byline portrait + intro */}
      <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-6 mb-10 items-start fold fold-2">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Image
            src="/profile.png"
            alt="Umair Sabir, photographed"
            width={160}
            height={160}
            unoptimized
            priority
            className="border border-[var(--rule)] p-1.5 bg-[var(--paper-soft)] grayscale hover:grayscale-0 transition-all duration-500"
          />
          <p className="label text-center mt-2 text-[10.5px]">Plate I — operator, recent</p>
        </a>
        <div className="text-[15.5px] leading-[1.75] text-[var(--ink)] pretty dropcap">
          <p>
            The subject of this file is{" "}
            <strong>Umair Sabir</strong> — known online as{" "}
            <span className="text-[var(--accent)]">MikiVirus</span>. He holds a{" "}
            <em>Master's in Cybersecurity</em> from Air University and is, at
            the time of writing, sitting the{" "}
            <strong>Offensive Security Exploit Developer</strong>{" "}
            certification — windows exploit development, custom shellcode,
            SEH/IAT chains, the whole stack. He is already{" "}
            <strong>OSCP</strong>, <strong>CRTO</strong>, and{" "}
            <strong>eCPPT</strong> certified.
          </p>
        </div>
      </div>

      <Ornament />

      {/* Capabilities */}
      <Section label="Capabilities" title="What I actually do">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
          <Capability
            k="VAPT"
            v="External + internal pentests; web, API, Active Directory, AWS / Azure."
          />
          <Capability
            k="Red Team"
            v="Phishing, payload dev, AD abuse, lateral movement, persistence."
          />
          <Capability
            k="Exploit Dev"
            v="x86 / x64 stack overflows, SEH chains, ROP, custom shellcode."
          />
          <Capability
            k="DFIR"
            v="Memory forensics, malware triage (PDF / Office / JS), Cuckoo sandboxing."
          />
          <Capability
            k="Tooling"
            v="If a tool annoys me I write a better one. The catalogue is at /projects."
          />
          <Capability
            k="Speaking"
            v="Trainings, podcast guest, CTF challenge design for AirOverflow."
          />
        </div>
      </Section>

      <Ornament mark="※" />

      {/* Story */}
      <Section label="Particulars" title="The story so far">
        <div className="space-y-4 text-[15.5px] leading-[1.75] text-[var(--ink)] pretty max-w-prose">
          <p>
            I started where most of us start: 2 a.m., Hack The Box on the
            second monitor, refusing to go to bed until the box was rooted.
            The curiosity turned into CTFs; CTFs turned into competitive teams;
            competitive teams turned into a career.
          </p>
          <p>
            I co-founded <strong>ByteBoltSec</strong>, a small but sharp
            Pakistan-based cybersecurity outfit, and I sit in the core of{" "}
            <strong>AirOverflow</strong> — where I design CTF challenges and
            stand up the lab infrastructure for national and international
            competitions. Off-stage, I have trained students under{" "}
            <strong>Ignite</strong> programmes at Bahria University on
            practical penetration testing.
          </p>
          <p>
            I write{" "}
            <Link href="/blog" className="dlink">
              long-form essays
            </Link>{" "}
            when I learn something worth sharing, ship{" "}
            <Link href="/projects" className="dlink">
              open-source tools
            </Link>{" "}
            when the existing ones frustrate me, and try in small ways to make
            the Pakistan infosec community a little less gatekept than I found
            it.
          </p>
        </div>
      </Section>

      <blockquote className="pullquote balance">
        “Hacking isn't about breaking systems; it's about understanding them
        better than the people who built them.”
      </blockquote>

      {/* Trophies as a proper editorial table */}
      <Section label="Trophies" title="Selected distinctions">
        <table className="w-full !block sm:!table border-collapse text-[14.5px]">
          <thead>
            <tr className="border-b-2 border-[var(--ink)]">
              <th className="label text-left py-2 pr-4 w-20">Year</th>
              <th className="label text-left py-2 pr-4">Engagement</th>
              <th className="label text-left py-2">Result</th>
            </tr>
          </thead>
          <tbody>
            <Trophy y="MMXXIV" e="Hackmasters'24 — OIC CTF, Istanbul" r="Winner" gold />
            <Trophy y="MMXXIV" e="BlackHat MEA '24 — Riyadh" r="Finalist" />
            <Trophy y="MMXXIII" e="BlackHat MEA '23 — Riyadh" r="Finalist" />
            <Trophy y="MMXXIII" e="MCS CTF '23 — Military College of Signals" r="Winner" gold />
            <Trophy y="MMXXII" e="Pakistan Cyber Security Challenge (NCCS × AU)" r="Top 10" />
            <Trophy y="MMXXII" e="NASCON '22 CTF — FAST-NUCES" r="4th place" />
          </tbody>
        </table>
      </Section>

      <Ornament />

      {/* Community */}
      <Section label="Community" title="Speaking · workshops · writing">
        <ul className="text-[15px] space-y-3 text-[var(--ink)] pretty">
          <li>
            <span className="label-accent mr-2">Talks ·</span> Featured podcast
            guest as Founder of ByteBoltSec, on the Pakistan offsec scene and
            breaking into the field.
          </li>
          <li>
            <span className="label-accent mr-2">Workshops ·</span> Practical
            penetration-testing trainings under <em>Ignite</em> at Bahria
            University.
          </li>
          <li>
            <span className="label-accent mr-2">CTF ·</span> Designed
            Jeopardy-style CTF challenges and lab infrastructure for AirOverflow
            events.
          </li>
          <li>
            <span className="label-accent mr-2">Writing ·</span> Tutorials on
            Cuckoo sandbox install, Nmap deep-dives, and offensive tooling on
            LinkedIn and on this site.
          </li>
        </ul>
      </Section>

      <Ornament mark="❦" />

      {/* Correspondence */}
      <Section label="Correspondence" title="How to reach the subject">
        <ul className="text-[15px] leading-[1.85] text-[var(--ink)]">
          <Channel name="LinkedIn" handle="linkedin.com/in/mikivirus" href={socialLinks.linkedin} />
          <Channel name="GitHub" handle="github.com/Mikivirus0" href={socialLinks.github} />
          <Channel name="X (formerly Twitter)" handle="@UmairSa76915114" href={socialLinks.twitter} />
          <Channel name="Instagram" handle="@miki._.virus" href={socialLinks.instagram} />
          <Channel name="By post" handle="mumairs3636@gmail.com" href={socialLinks.email} />
        </ul>
        <p className="text-[14px] italic text-[var(--ink-soft)] mt-4 max-w-prose">
          He reads everything. He replies to most things. Cold emails for
          legitimate work are welcome. Recruitment spam is not.
        </p>
      </Section>

      <FolioMark num="6" total="48" />
    </article>
  );
}

function Capability({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-3 items-baseline py-2 border-b border-dotted border-[var(--rule-soft)] last:border-b-0">
      <dt className="label text-[var(--ink)]">{k}</dt>
      <dd className="text-[14.5px] text-[var(--ink-soft)] leading-relaxed">
        {v}
      </dd>
    </div>
  );
}

function Trophy({
  y,
  e,
  r,
  gold,
}: {
  y: string;
  e: string;
  r: string;
  gold?: boolean;
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
            gold
              ? "stamp"
              : "text-[var(--ink-soft)] italic display text-[14px]"
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
    <li className="grid grid-cols-[150px_1fr] sm:grid-cols-[180px_1fr] gap-3 items-baseline py-1.5 border-b border-dotted border-[var(--rule-soft)] last:border-b-0">
      <span className="label">{name}</span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="dlink display italic text-[var(--ink)] text-[15.5px]"
      >
        {handle}
      </a>
    </li>
  );
}
