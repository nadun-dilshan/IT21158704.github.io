import { experiences, education, certifications } from "@/lib/data";
import { FiBriefcase, FiAward, FiBookOpen } from "react-icons/fi";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Work experience, education and certifications"
      className="px-[6%] py-24"
    >
      <SectionHeading>
        My <span className="gradient-text">Journey</span>
      </SectionHeading>

      <div className="mx-auto max-w-4xl">
        {/* Timeline */}
        <div className="relative border-l-2 border-[var(--glass-border)] pl-8">
          {experiences.map((exp, i) => (
            <Reveal key={`${exp.company}-${i}`} direction="left" delay={i * 0.1}>
              <div className="relative mb-12">
                <span className="absolute -left-[42px] flex h-7 w-7 items-center justify-center rounded-full bg-[image:var(--gradient-1)] text-sm text-white">
                  <FiBriefcase />
                </span>
                <div className="glass rounded-2xl p-6">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        background: "var(--glass-bg)",
                        color: "var(--main-color)",
                        border: "1px solid var(--glass-border)",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p className="mb-4 font-medium text-[var(--accent-color)]">
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-[0.95rem] leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--main-color)]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Education + certifications */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Reveal direction="up">
            <div className="glass h-full rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[image:var(--gradient-1)] text-white">
                  <FiBookOpen />
                </span>
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              {education.map((edu) => (
                <div key={edu.degree} className="mb-4 last:mb-0">
                  <p className="font-semibold">{edu.degree}</p>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                    {edu.institution}
                  </p>
                  <p className="text-sm text-[var(--main-color)]">{edu.period}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <div className="glass h-full rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[image:var(--gradient-1)] text-white">
                  <FiAward />
                </span>
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex gap-2 text-[0.95rem] leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent-color)]" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
