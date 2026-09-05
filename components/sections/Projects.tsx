import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "@/lib/data";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

function ProjectCard({ project }: Readonly<{ project: (typeof projects)[number] }>) {
  const isLive = project.linkLabel === "Live Demo";
  const hasCaseStudy = Boolean(project.caseStudy);

  const className = "card card-hover group block h-full overflow-hidden";
  const body = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden">
        {hasCaseStudy && (
          <span
            className="absolute top-3 left-3 z-10 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "var(--accent)", color: "#08211d" }}
          >
            Case study
          </span>
        )}
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
            {hasCaseStudy ? <FiArrowRight /> : isLive ? <FiExternalLink /> : <FiGithub />}
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
    </>
  );

  if (hasCaseStudy) {
    return (
      <Link
        href={`/projects/${project.caseStudy}`}
        aria-label={`${project.title} - read the case study`}
        className={className}
      >
        {body}
      </Link>
    );
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} - ${isLive ? "open live demo" : "view source on GitHub"}`}
      className={className}
    >
      {body}
    </a>
  );
}

function ProjectGrid({ items }: Readonly<{ items: typeof projects }>) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((project, i) => (
        <Reveal key={project.title} delay={(i % 3) * 0.05} className="h-full">
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      aria-label="Featured projects"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <SectionHeading kicker="Projects">Products I&apos;ve built</SectionHeading>

      <ProjectGrid items={featured} />

      {more.length > 0 && (
        <>
          <Reveal className="mt-16 mb-8">
            <h3 className="section-heading text-2xl sm:text-3xl">More projects</h3>
            <p className="mt-2 text-base" style={{ color: "var(--text-muted)" }}>
              Earlier client, university, and open-source work.
            </p>
          </Reveal>

          <ProjectGrid items={more} />
        </>
      )}
    </section>
  );
}
