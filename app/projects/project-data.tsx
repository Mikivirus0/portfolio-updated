export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Sqlhound",
    year: 2025,
    description: "Multithreaded SQLi scanner with Bing dorking and URL list support.",
    url: "https://github.com/Mikivirus0/sqlhound",
  },
  {
    title: "Subroot",
    year: 2025,
    description: "Fast subdomain scanner using DNS, HTTP, and ICMP checks.",
    url: "https://github.com/Mikivirus0/SUBROOT",
  },
  {
    title: "MalwareMaster",
    year: 2024,
    description: "The cutting-edge solution for detecting malicious JavaScript in PDF files",
    url: "https://github.com/Mikivirus0/gradient-obfuscation",
  },
  {
    title: "Gradient Obfuscation",
    year: 2023,
    description: "Image obfuscation using denoising, enhancement, and style transfer.",
    url: "https://github.com/Mikivirus0/gradient-obfuscation",
  },
];
