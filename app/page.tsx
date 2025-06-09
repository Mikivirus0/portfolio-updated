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
        Umair — Cybersecurity Analyst & Red Team Operator
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I’m a cybersecurity professional with expertise in Red Teaming, Penetration Testing, and Digital Forensics. With a strong background in adversary simulation and vulnerability assessments, I specialize in identifying real-world threats and helping organizations strengthen their security posture.
        </p>
        <p>
          I’ve led the development of CTF challenges and infrastructure at AirOverflow, organized international cybersecurity competitions, and contributed to open-source tooling and secure development projects.
        </p>
        <p>
          Some of my key achievements include winning the Hackmasters’24 (OIC CTF – Istanbul), becoming a finalist at BlackHat MEA’23 & ’24 (Riyadh), and leading national-level cybersecurity trainings at Bahria University under Ignite.
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
