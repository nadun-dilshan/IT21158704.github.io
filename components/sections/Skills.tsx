import { skillGroups } from "@/lib/data";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills and technologies"
      className="px-[6%] py-24"
      style={{ background: "var(--second-bg-color)" }}
    >
      <SectionHeading>
        Skills &amp; <span className="gradient-text">Technologies</span>
      </SectionHeading>

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} direction="up" delay={i * 0.08}>
            <div className="glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--main-color)]">
              <h3 className="mb-4 text-xl font-bold text-[var(--main-color)]">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{
                      background: "var(--glass-bg)",
                      border: "1px solid var(--glass-border)",
                    }}
                    data-hover
                  >
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
