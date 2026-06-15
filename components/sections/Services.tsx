import { services } from "@/lib/data";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Services offered"
      className="px-[6%] py-24"
    >
      <SectionHeading>
        What I <span className="gradient-text">Do</span>
      </SectionHeading>

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} direction="up" delay={(i % 3) * 0.1}>
              <div className="group glass relative h-full overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[var(--main-color)] hover:shadow-[0_20px_40px_rgba(0,196,204,0.2)]">
                <span className="absolute left-0 top-0 h-1 w-full -translate-x-full bg-[image:var(--gradient-1)] transition-transform duration-300 group-hover:translate-x-0" />
                <Icon className="mx-auto mb-5 text-6xl text-[var(--main-color)] transition-all duration-300 group-hover:scale-110 group-hover:text-[var(--accent-color)]" />
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
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
