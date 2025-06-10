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
    description: "A lightweight multithreaded SQL Injection (SQLi) vulnerability scanner using Bing dorking, subdomain enumeration, and custom URL lists.",
    url: "https://github.com/Mikivirus0/sqlhound",
  },
  {
    title: "Subroot",
    year: 2025,
    description: "Subroot is a high-performance subdomain scanner designed for security researchers and penetration testers. It leverages DNS resolution, HTTP requests, and ICMP pings to identify active subdomains efficiently.",
    url: "https://github.com/Mikivirus0/SUBROOT",
  },
  {
    title: "Gradient Obfuscation",
    year: 2023,
    description: "A Python program that combines three image processing techniques: denoising, enhancement, and style transfer, to obfuscate an input image.",
    url: "https://github.com/Mikivirus0/gradient-obfuscation",
  },
];
