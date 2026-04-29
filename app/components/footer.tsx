"use client";

import React from "react";
import Link from "next/link";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/config";

const YEAR = new Date().getFullYear();

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="dlink inline-flex items-center gap-1.5 text-[var(--ink-soft)] hover:text-[var(--accent)]"
    >
      <Icon className="text-[15px]" />
      <span className="hidden md:inline label">{label}</span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="mt-24 border-t-2 border-[var(--ink)] pt-5">
      {/* Colophon */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <div>
          <p className="label mb-2">Colophon</p>
          <p className="text-[14px] leading-relaxed text-[var(--ink-soft)] pretty">
            Set in <em>Newsreader</em> &amp; <em>Fraunces</em>. Composed in
            Next.js. Bound in cream &amp; oxblood.
          </p>
        </div>
        <div>
          <p className="label mb-2">Imprint</p>
          <p className="text-[14px] leading-relaxed text-[var(--ink-soft)]">
            <span className="text-[var(--ink)]">{metaData.name}</span> · Vol.
            III · No. IV
            <br />
            Islamabad &amp; the Open Internet
            <br />© {YEAR}. Some rights reserved.
          </p>
        </div>
        <div>
          <p className="label mb-2">Correspondence</p>
          <div className="flex items-center gap-4">
            <SocialLink
              href={socialLinks.github}
              icon={FaGithub}
              label="github"
            />
            <SocialLink
              href={socialLinks.linkedin}
              icon={FaLinkedinIn}
              label="linkedin"
            />
            <SocialLink
              href={socialLinks.twitter}
              icon={FaXTwitter}
              label="x"
            />
            <SocialLink
              href={socialLinks.instagram}
              icon={FaInstagram}
              label="ig"
            />
            <SocialLink
              href={socialLinks.email}
              icon={TbMailFilled}
              label="post"
            />
            <Link
              href="/rss.xml"
              aria-label="rss"
              className="dlink text-[var(--ink-soft)] hover:text-[var(--accent)]"
            >
              <FaRss className="text-[15px]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="rule-double" />
      <p className="text-[11px] label flex items-center justify-between">
        <span>fin.</span>
        <span className="display italic text-[var(--accent)] text-base">❦</span>
        <span className="numerals-tab">{YEAR} · {metaData.name}</span>
      </p>
    </footer>
  );
}
