import Image from "next/image";
import { profile } from "@/lib/data";
import Reveal from "../Reveal";

const stats = [
  { value: "1.3+", label: "Years Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "7+", label: "Technologies" },
];

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Nadun Dilshan"
      className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-24 lg:flex-row lg:gap-20"
    >
      <Reveal className="w-full max-w-sm shrink-0 lg:max-w-md">
        <div className="overflow-hidden rounded-3xl">
          <Image
            src={profile.aboutImage}
            alt={`${profile.name}, ${profile.role} at BotCalm, Sri Lanka`}
            width={500}
            height={600}
            sizes="(max-width: 1024px) 90vw, 448px"
            className="h-auto w-full object-cover"
          />
        </div>
      </Reveal>

      <Reveal delay={0.1} className="flex-1">
        <p className="kicker mb-3">About</p>
        <h2 className="section-heading mb-6 text-3xl sm:text-4xl lg:text-[2.75rem]">
          Building reliable products, end to end
        </h2>
        {profile.about.map((para) => (
          <p
            key={para.slice(0, 32)}
            className="mb-5 text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {para}
          </p>
        ))}

        <div className="mt-8 grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card rounded-2xl p-4 text-center sm:p-5">
              <p className="section-heading text-2xl gradient-text sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
