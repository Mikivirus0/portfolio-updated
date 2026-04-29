export interface Project {
  title: string;
  slug: string;
  year: number;
  description: string;
  url: string;
  tags: string[];
  language?: string;
  status?: "active" | "stable" | "experimental" | "archived";
  highlight?: boolean;
}

export const projects: Project[] = [
  {
    title: "Sqlhound",
    slug: "sqlhound",
    year: 2025,
    description:
      "Multi-threaded SQL injection scanner with built-in Bing dorking and bulk URL ingestion. Throws hundreds of payloads per second and writes a clean, dedup'd report.",
    url: "https://github.com/Mikivirus0/sqlhound",
    tags: ["sqli", "scanner", "recon", "python"],
    language: "Python",
    status: "active",
    highlight: true,
  },
  {
    title: "SUBROOT",
    slug: "subroot",
    year: 2025,
    description:
      "Fast subdomain enumeration tool. DNS, HTTP, and ICMP probes in parallel — designed to be louder than passive scanners but faster than amass.",
    url: "https://github.com/Mikivirus0/SUBROOT",
    tags: ["recon", "dns", "subdomain", "go"],
    language: "Python",
    status: "active",
    highlight: true,
  },
  {
    title: "Red Team Toolbox",
    slug: "red-team-toolbox",
    year: 2024,
    description:
      "Curated, scripted toolkit for vulnerability analysis & red-team ops — wraps common pentest workflows behind a single CLI so you stop fighting your own tooling.",
    url: "https://github.com/Mikivirus0",
    tags: ["red-team", "toolkit", "automation"],
    language: "Python",
    status: "active",
  },
  {
    title: "MalwareMaster",
    slug: "malwaremaster",
    year: 2024,
    description:
      "Detects malicious JavaScript embedded in PDFs using a transformer-based classifier. Ships as a Windows app + a Vercel-hosted demo.",
    url: "https://malware-master.vercel.app/",
    tags: ["malware", "ml", "pdf", "detection"],
    language: "Python / TS",
    status: "stable",
    highlight: true,
  },
  {
    title: "NINJASCANNER",
    slug: "ninjascanner",
    year: 2024,
    description:
      "Robust internal-network scanner aimed at corporate environments — discovery, banner grab, vuln signaling, and a clean JSON output for SOAR pipelines.",
    url: "https://github.com/Mikivirus0",
    tags: ["network", "scanner", "internal"],
    language: "Python",
    status: "active",
  },
  {
    title: "Advanced Nmap Scanning",
    slug: "advanced-nmap",
    year: 2024,
    description:
      "Operator's guide: 20 advanced Nmap recipes I actually use on engagements — NSE chains, evasion, timing tricks, IPv6 quirks. PRs welcome.",
    url: "https://github.com/Mikivirus0/Advanced-Nmap-Scanning",
    tags: ["nmap", "cheatsheet", "recon"],
    status: "stable",
  },
  {
    title: "Cuckoo Installation Guide",
    slug: "cuckoo-guide",
    year: 2023,
    description:
      "Battle-tested install path for Cuckoo Sandbox on modern Ubuntu — fixes the 47 things the official docs quietly leave broken.",
    url: "https://www.linkedin.com/posts/mikivirus_cuckoo-installation-guide-mikivirus-activity-7097650042936672256-H2Yu",
    tags: ["dfir", "sandbox", "guide"],
    status: "stable",
  },
  {
    title: "AUPCTF '23 Writeups",
    slug: "aupctf23",
    year: 2023,
    description:
      "Full writeups for challenges I solved at AUPCTF — pwn, web, crypto, forensics. The point isn't the flag; it's the path.",
    url: "https://github.com/Mikivirus0",
    tags: ["ctf", "writeups", "pwn"],
    status: "stable",
  },
  {
    title: "Gradient Obfuscation",
    slug: "gradient-obfuscation",
    year: 2023,
    description:
      "Image obfuscation pipeline using denoising + enhancement + neural style transfer. Built originally to defeat lazy CV-based filters.",
    url: "https://github.com/Mikivirus0/gradient-obfuscation",
    tags: ["ml", "image", "adversarial"],
    language: "Python",
    status: "experimental",
  },
];
