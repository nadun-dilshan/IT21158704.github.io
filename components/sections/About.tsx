import Image from "next/image";
import { profile } from "@/lib/data";
import Reveal from "../Reveal";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Nadun Dilshan"
      className="flex min-h-screen flex-col items-center justify-center gap-12 px-[6%] py-24 lg:flex-row"
      style={{ background: "var(--second-bg-color)" }}
    >
      <Reveal direction="right" className="flex-1">
        <div className="relative mx-auto max-w-md">
          <span
            className="absolute -left-5 -top-5 h-full w-full rounded-3xl opacity-10"
            style={{ background: "var(--gradient-1)" }}
          />
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src={profile.aboutImage}
              alt={`${profile.name} portrait`}
              width={500}
              height={600}
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </Reveal>

      <Reveal direction="left" className="flex-1">
        <h2 className="section-heading mb-4 text-4xl sm:text-5xl">
          About <span className="gradient-text">Me</span>
        </h2>
        <h3 className="mb-4 text-2xl font-semibold text-[var(--accent-color)]">
          {profile.role}
        </h3>
        {profile.about.map((para, i) => (
          <p
            key={i}
            className="mb-5 text-lg leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {para}
          </p>
        ))}

        <div className="mt-6 flex flex-wrap gap-6">
          <div>
            <p className="font-display text-3xl font-black gradient-text">1.3+</p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Years Experience
            </p>
          </div>
          <div>
            <p className="font-display text-3xl font-black gradient-text">15+</p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Projects Delivered
            </p>
          </div>
          <div>
            <p className="font-display text-3xl font-black gradient-text">7+</p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Technologies
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
