import Image from "next/image";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { profile, socials } from "@/lib/data";

/**
 * Server-rendered hero - no client JS. The name, role, and description are
 * real text in the initial HTML, which is what search engines index.
 */
export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center justify-center gap-12 px-6 pt-28 pb-16 lg:flex-row lg:gap-16"
    >
      <div className="flex-1 text-center lg:text-left">
        <span
          className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
          style={{
            borderColor: "var(--border)",
            background: "var(--surface)",
            color: "var(--text-muted)",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span>Open to new opportunities</span>
        </span>

        <h1 className="section-heading mb-4 text-5xl leading-[1.05] sm:text-6xl xl:text-7xl">
          {profile.name.split(" ")[0]}{" "}
          <span style={{ color: "var(--accent)" }}>
            {profile.name.split(" ")[1]}
          </span>
        </h1>

        <p className="mb-3 text-xl font-semibold sm:text-2xl">
          {profile.role} · Full-Stack Developer
        </p>

        <p
          className="mx-auto mb-8 max-w-xl text-base leading-relaxed sm:text-lg lg:mx-0"
          style={{ color: "var(--text-muted)" }}
        >
          {profile.heroDescription}
        </p>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <a href={profile.cv} download className="btn-primary">
            <FiDownload aria-hidden />
            Download CV
          </a>
          <a href="#projects" className="btn-secondary">
            View Projects
            <FiArrowDown aria-hidden />
          </a>
        </div>

        <div className="flex items-center justify-center gap-3 lg:justify-start">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${profile.name} on ${social.label}`}
                className="card card-hover flex h-11 w-11 items-center justify-center rounded-full text-lg"
                style={{ color: "var(--text-muted)" }}
              >
                <Icon aria-hidden />
              </a>
            );
          })}
        </div>
      </div>

      <div className="flex flex-1 justify-center lg:justify-end">
        <div className="relative">
          <span
            className="absolute -inset-6 rounded-full opacity-25 blur-3xl"
            style={{ background: "var(--gradient)" }}
            aria-hidden
          />
          <div
            className="relative h-64 w-64 overflow-hidden rounded-full border sm:h-80 sm:w-80"
            style={{ borderColor: "var(--border-strong)" }}
          >
            <Image
              src={profile.avatar}
              alt={`${profile.name} - ${profile.role} based in ${profile.location}`}
              fill
              priority
              sizes="(max-width: 640px) 256px, 320px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
