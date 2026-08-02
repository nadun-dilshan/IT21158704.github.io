import { experiences, education, certifications } from "@/lib/data";
import { FiAward, FiBookOpen } from "react-icons/fi";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Work experience, education and certifications"
      className="mx-auto max-w-4xl px-6 py-24"
    >
      <SectionHeading kicker="Experience">Where I&apos;ve worked</SectionHeading>

      <div
        className="relative space-y-6 border-l pl-8"
        style={{ borderColor: "var(--border)" }}
      >
        {experiences.map((exp, i) => (
          <Reveal key={`${exp.company}-${exp.role}`} delay={i * 0.05}>
            <div className="relative">
              <span
                className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full"
                style={{ background: "var(--accent)" }}
                aria-hidden
              />
              <div className="card card-hover p-6 sm:p-7">
                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold sm:text-xl">{exp.role}</h3>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {exp.period}
                  </span>
                </div>
                <p className="mb-4 font-medium" style={{ color: "var(--accent)" }}>
                  {exp.company}
                </p>
                <ul className="space-y-2">
                  {exp.points.map((point) => (
                    <li
                      key={point.slice(0, 40)}
                      className="flex gap-2.5 text-[0.95rem] leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full"
                        style={{ background: "var(--accent)" }}
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="card card-hover h-full p-6 sm:p-7">
            <div className="mb-4 flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
              >
                <FiBookOpen aria-hidden />
              </span>
              <h3 className="text-lg font-bold">Education</h3>
            </div>
            {education.map((edu) => (
              <div key={edu.degree}>
                <p className="font-semibold leading-snug">{edu.degree}</p>
                <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
                  {edu.institution}
                </p>
                <p className="mt-0.5 text-sm font-medium" style={{ color: "var(--accent)" }}>
                  {edu.period}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="card card-hover h-full p-6 sm:p-7">
            <div className="mb-4 flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
              >
                <FiAward aria-hidden />
              </span>
              <h3 className="text-lg font-bold">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="flex gap-2.5 text-[0.95rem] leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full"
                    style={{ background: "var(--accent)" }}
                    aria-hidden
                  />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
