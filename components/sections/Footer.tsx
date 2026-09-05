import { FiArrowUp } from "react-icons/fi";
import { profile, socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <p
          className="text-center text-sm sm:text-left"
          style={{ color: "var(--text-muted)" }}
        >
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>

        <div className="flex gap-2">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${profile.name} on ${social.label}`}
                className="card card-hover flex h-10 w-10 items-center justify-center rounded-full text-base"
                style={{ color: "var(--text-muted)" }}
              >
                <Icon aria-hidden />
              </a>
            );
          })}
        </div>

        <a href="#top" aria-label="Back to top" className="btn-secondary px-4! py-2.5!">
          <FiArrowUp aria-hidden />
          <span className="text-sm">Top</span>
        </a>
      </div>
    </footer>
  );
}
