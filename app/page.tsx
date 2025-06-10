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
      <div className="prose prose-neutral dark:prose-invert"> <ul className="list-disc space-y-3 ml-6"> <li> <strong>Cybersecurity Professional</strong> specializing in: <ul className="list-disc ml-6"> <li>Vulnerability Assessment & Penetration Testing (VAPT)</li> <li>Digital Forensics & Incident Response (DFIR)</li> <li>Security Operations & Threat Hunting</li> </ul> </li> <li> <strong>MS Cyber Security Candidate</strong> at <strong>Air University</strong>, with research focus in: <ul className="list-disc ml-6"> <li>AI-Powered Threat Intelligence</li> <li>Cloud Security & Infrastructure Hardening</li> <li>Adversarial Machine Learning</li> </ul> </li> <li> <strong>CTF Contributor & Community Builder</strong>: <ul className="list-disc ml-6"> <li>Core team member at <strong>AirOverflow</strong></li> <li>Designed CTF challenges and built infrastructure</li> <li>Supported open-source security tooling & DevSecOps practices</li> </ul> </li> <li> <strong>Awards & Recognitions</strong>: <ul className="list-disc ml-6"> <li>🏆 Winner — <strong>Hackmasters'24</strong> (OIC CTF, Istanbul)</li> <li>🏅 Finalist — <strong>BlackHat MEA</strong> ’23 & ’24 (Riyadh)</li> <li>🥇 20+ national hackathon victories</li> <li>🧑‍🏫 Led national-level trainings under <strong>Ignite</strong> at Bahria University</li> </ul> </li> <li> <strong>Certifications:</strong> CRTO, eCPPT </li> <li> <strong>Platforms:</strong> Actively sharpening skills on <strong>Hack The Box</strong> & <strong>TryHackMe</strong> through real-world labs and scenarios. </li> </ul> </div>
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
