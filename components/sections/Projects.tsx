"use client";

import Image from "next/image";
import { useRef } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "@/lib/data";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`;
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = "perspective(1000px) rotateY(0) rotateX(0) scale(1)";
  };

  const isLive = project.linkLabel === "Live Demo";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="glass group relative overflow-hidden rounded-2xl transition-transform duration-200 will-change-transform"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 flex translate-y-full flex-col items-center justify-center p-6 text-center transition-transform duration-500 group-hover:translate-y-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,196,204,0.85))",
          }}
        >
          <h4 className="mb-2 text-xl font-bold text-white">{project.title}</h4>
          <p className="mb-4 text-sm text-white/90">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-[var(--main-color)] transition-transform hover:scale-110"
          >
            {isLive ? <FiExternalLink /> : <FiGithub />}
          </a>
        </div>
      </div>

      <div className="p-5">
        <h4 className="mb-2 text-lg font-bold">{project.title}</h4>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-3 py-1 text-xs font-medium text-[var(--main-color)]"
              style={{
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Featured projects"
      className="px-[6%] py-24"
      style={{ background: "var(--second-bg-color)" }}
    >
      <SectionHeading>
        Featured <span className="gradient-text">Projects</span>
      </SectionHeading>

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} direction="up" delay={(i % 3) * 0.1}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
