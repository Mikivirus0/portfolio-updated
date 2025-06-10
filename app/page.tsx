import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Umair's Profile Photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">
        Umair — Cybersecurity Analyst
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I’m a cybersecurity professional with expertise in Vulnerability Analysis & Penetration Testing, Security Analysis, and Digital Forensics and Incident Response (DFIR). I specialize in identifying real-world threats and helping organizations strengthen their security posture.
        </p>
        <p>
          I’m currently pursuing my MS in Cyber Security from <strong>Air University</strong>, where I’m further enhancing my technical depth and research capability in advanced topics integrations of AI in threat intelligence, security analysis, and cloud security.
        </p>
        <p>
          I’ve actively participated in and helped organize CTF competitions with AirOverflow, led the development of challenges and supporting infrastructure, and contributed to open-source security tools and secure development initiatives.
        </p>
        <p>
          Some of my key achievements include winning the Hackmasters’24 (OIC CTF – Istanbul), becoming a finalist at BlackHat MEA’23 & ’24 (Riyadh), winning 20+ national level hackathons and leading national-level cybersecurity trainings at Bahria University under Ignite.
        </p>
        <p>
          Certified in CRTO, and eCPPT. Active on platforms like Hack The Box and TryHackMe, where I regularly sharpen my skills through real-world simulation labs.
        </p>
        <p>
          Connect with me on{" "}
          <a href={socialLinks.github} target="_blank">
            GitHub
          </a>{" "}
          or follow me on{" "}
          <a href={socialLinks.twitter} target="_blank">
            Twitter
          </a>{" "}
          for updates and projects.
        </p>
      </div>
    </section>
  );
}
