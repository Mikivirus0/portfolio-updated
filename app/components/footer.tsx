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
      className="text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors"
    >
      <Icon className="text-[16px]" />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--rule)] pt-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="text-[13px] text-[var(--ink-soft)]">
          © {YEAR} {metaData.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-5 text-lg">
          <SocialLink href={socialLinks.github} icon={FaGithub} label="GitHub" />
          <SocialLink
            href={socialLinks.linkedin}
            icon={FaLinkedinIn}
            label="LinkedIn"
          />
          <SocialLink href={socialLinks.twitter} icon={FaXTwitter} label="X" />
          <SocialLink
            href={socialLinks.instagram}
            icon={FaInstagram}
            label="Instagram"
          />
          <SocialLink
            href={socialLinks.email}
            icon={TbMailFilled}
            label="Email"
          />
          <Link
            href="/rss.xml"
            aria-label="RSS"
            className="text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors"
          >
            <FaRss className="text-[16px]" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
