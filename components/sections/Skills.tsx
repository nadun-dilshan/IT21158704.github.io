import { skillGroups } from "@/lib/data";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills and technologies"
      className="mx-auto max-w-5xl px-6 py-24"
    >
      <SectionHeading kicker="Skills">Technologies I work with</SectionHeading>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 2) * 0.05}>
            <div className="card card-hover h-full p-6 sm:p-7">
              <h3 className="mb-4 text-lg font-bold" style={{ color: "var(--accent)" }}>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
