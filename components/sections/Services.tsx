import { services } from "@/lib/data";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Services offered"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <SectionHeading kicker="Services">What I do</SectionHeading>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={(i % 3) * 0.05}>
              <div className="card card-hover h-full p-7">
                <span
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  <Icon aria-hidden />
                </span>
                <h3 className="mb-2 text-lg font-bold">{service.title}</h3>
                <p
                  className="text-[0.95rem] leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {service.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
