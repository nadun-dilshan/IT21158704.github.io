import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight, FiExternalLink } from "react-icons/fi";
import type { CaseStudy as CaseStudyData } from "@/lib/case-studies";
import Reveal from "./Reveal";

const sections = [
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "architecture", label: "Architecture" },
  { id: "technologies", label: "Technologies" },
  { id: "screenshots", label: "Screenshots" },
  { id: "features", label: "Key features" },
  { id: "challenges", label: "Challenges" },
  { id: "demo", label: "Live demo" },
];

function Section({
  id,
  kicker,
  title,
  children,
}: Readonly<{
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section id={id} aria-label={title} className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <Reveal className="mb-10">
        <p className="kicker mb-3">{kicker}</p>
        <h2 className="section-heading text-3xl sm:text-4xl">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}

function Prose({ paragraphs }: Readonly<{ paragraphs: string[] }>) {
  return (
    <div className="max-w-3xl">
      {paragraphs.map((p) => (
        <p
          key={p.slice(0, 40)}
          className="mb-5 text-base leading-relaxed sm:text-lg"
          style={{ color: "var(--text-muted)" }}
        >
          {p}
        </p>
      ))}
    </div>
  );
}

function Screenshot({
  shot,
  priority = false,
}: Readonly<{ shot: CaseStudyData["hero"]; priority?: boolean }>) {
  return (
    <figure className="card overflow-hidden">
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        priority={priority}
        sizes="(max-width: 1152px) 100vw, 1152px"
        className="h-auto w-full"
      />
      <figcaption
        className="border-t px-5 py-3 text-sm"
        style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
      >
        {shot.caption}
      </figcaption>
    </figure>
  );
}

export default function CaseStudy({
  study,
  prev,
  next,
}: Readonly<{
  study: CaseStudyData;
  prev?: { slug: string; name: string };
  next?: { slug: string; name: string };
}>) {
  const primary = study.links.find((l) => l.primary) ?? study.links[0];

  return (
    <main className="[overflow-wrap:anywhere]">
      {/* Hero ------------------------------------------------------------ */}
      <section
        id="top"
        aria-label={`${study.name} case study`}
        className="mx-auto max-w-6xl px-6 pt-32 pb-12"
      >
        <Reveal>
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
            >
              <FiArrowLeft aria-hidden />
              All projects
            </Link>
          </div>

          <p className="kicker mb-4">Case study</p>
          <h1 className="section-heading mb-4 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            {study.name}
          </h1>
          <p className="mb-6 text-xl font-semibold sm:text-2xl">{study.tagline}</p>
          <p
            className="mb-10 max-w-3xl text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {study.summary}
          </p>

          <div className="mb-10 flex flex-wrap gap-3">
            {study.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={link.primary ? "btn-primary" : "btn-secondary"}
              >
                {link.label}
                <FiExternalLink aria-hidden />
              </a>
            ))}
          </div>

          <dl className="card grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4 sm:p-7">
            {[
              ["Role", study.meta.role],
              ["Timeline", study.meta.timeline],
              ["Status", study.meta.status],
              ["Type", study.meta.type],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="kicker mb-2 text-[0.7rem]">{label}</dt>
                <dd className="text-sm leading-relaxed sm:text-base">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <Screenshot shot={study.hero} priority />
        </Reveal>

        <Reveal delay={0.15} className="mt-10">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {study.stats.map((stat) => (
              <div key={stat.label} className="card p-5 text-center">
                <p className="section-heading gradient-text text-3xl sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <nav aria-label="On this page" className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="chip transition-colors hover:text-[var(--accent)]">
                {s.label}
              </a>
            ))}
          </nav>
        </Reveal>
      </section>

      {/* Problem --------------------------------------------------------- */}
      <Section id="problem" kicker="01 · Problem" title="What was broken">
        <Reveal>
          <Prose paragraphs={study.problem} />
        </Reveal>
      </Section>

      {/* Solution -------------------------------------------------------- */}
      <Section id="solution" kicker="02 · Solution" title="What I built">
        <Reveal>
          <Prose paragraphs={study.solution} />
        </Reveal>
      </Section>

      {/* Architecture ---------------------------------------------------- */}
      <Section id="architecture" kicker="03 · Architecture" title="How it fits together">
        <Reveal>
          <Prose paragraphs={[study.architecture.intro]} />
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {study.architecture.components.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 0.05} className="min-w-0 h-full">
              <div className="card h-full p-6">
                <h3 className="mb-1 text-base font-bold">{c.name}</h3>
                <p className="mb-3 text-xs font-medium" style={{ color: "var(--accent)" }}>
                  {c.stack}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {c.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <h3 className="mb-6 text-xl font-bold">Request flow</h3>
          <ol className="space-y-6">
            {study.architecture.flow.map((step, i) => (
              <li key={step.slice(0, 40)} className="relative grid grid-cols-[1.75rem_minmax(0,1fr)] gap-4 sm:gap-5">
                {i < study.architecture.flow.length - 1 && (
                  <span aria-hidden className="absolute top-7 bottom-[-1.5rem] left-3.5 w-px bg-[var(--border-strong)]" />
                )}
                <span
                  className="relative flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                  aria-hidden
                >
                  {i + 1}
                </span>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      {/* Technologies ---------------------------------------------------- */}
      <Section id="technologies" kicker="04 · Technologies" title="Stack">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {study.technologies.map((group, i) => (
            <Reveal key={group.group} delay={(i % 3) * 0.05} className="min-w-0 h-full">
              <div className="card h-full p-6">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                  {group.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Screenshots ----------------------------------------------------- */}
      <Section id="screenshots" kicker="05 · Screenshots" title="In the product">
        <div className="space-y-8">
          {study.screenshots.map((shot, i) => (
            <Reveal key={shot.src} delay={i * 0.05}>
              <Screenshot shot={shot} />
            </Reveal>
          ))}
        </div>

        {study.code && (
          <Reveal className="mt-8">
            <div className="card overflow-hidden">
              <div
                className="border-b px-5 py-3 text-xs font-medium"
                style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
              >
                {study.code.filename}
              </div>
              <pre tabIndex={0} aria-label={`${study.code.filename} code example`} className="overflow-x-auto p-5 text-sm leading-relaxed">
                <code>{study.code.snippet}</code>
              </pre>
            </div>
          </Reveal>
        )}
      </Section>

      {/* Key features ---------------------------------------------------- */}
      <Section id="features" kicker="06 · Key features" title="What it does">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {study.features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.05} className="min-w-0 h-full">
              <div className="card card-hover h-full p-6">
                <h3 className="mb-2 text-base font-bold">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {f.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Challenges ------------------------------------------------------ */}
      <Section id="challenges" kicker="07 · Challenges" title="Hard parts and how I solved them">
        <div className="space-y-5">
          {study.challenges.map((c, i) => (
            <Reveal key={c.challenge.slice(0, 40)} delay={Math.min(i, 3) * 0.05}>
              <div className="card grid gap-5 p-6 sm:p-7 md:grid-cols-2">
                <div>
                  <p className="kicker mb-2 text-[0.7rem]">Challenge</p>
                  <p className="text-base leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <p className="kicker mb-2 text-[0.7rem]">Solution</p>
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {c.solution}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Live demo ------------------------------------------------------- */}
      <Section id="demo" kicker="08 · Live demo" title={`See ${study.name} for yourself`}>
        <Reveal>
          <div className="card flex flex-col items-start gap-6 p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <p className="min-w-0 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: "var(--text-muted)" }}>
              {study.summary}
            </p>
            <div className="flex w-full shrink-0 flex-wrap gap-3 lg:w-auto lg:max-w-xs">
              {study.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={link === primary ? "btn-primary" : "btn-secondary"}
                >
                  {link.label}
                  <FiExternalLink aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            {prev ? (
              <Link href={`/projects/${prev.slug}`} className="btn-secondary">
                <FiArrowLeft aria-hidden />
                {prev.name}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={`/projects/${next.slug}`} className="btn-secondary">
                {next.name}
                <FiArrowRight aria-hidden />
              </Link>
            )}
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
