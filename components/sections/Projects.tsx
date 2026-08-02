import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "@/lib/data";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

function ProjectCard({ project }: Readonly<{ project: (typeof projects)[number] }>) {
  const isLive = project.linkLabel === "Live Demo";

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} - ${isLive ? "open live demo" : "view source on GitHub"}`}
      className="card card-hover group block h-full overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="p-5 sm:p-6">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold leading-snug">{project.title}</h3>
          <span
            className="mt-1 shrink-0 text-lg transition-colors group-hover:text-[var(--accent)]"
            style={{ color: "var(--text-muted)" }}
            aria-hidden
          >
            {isLive ? <FiExternalLink /> : <FiGithub />}
          </span>
        </div>
        <p
          className="mb-4 text-sm leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Featured projects"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <SectionHeading kicker="Projects">Selected work</SectionHeading>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 0.05} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
