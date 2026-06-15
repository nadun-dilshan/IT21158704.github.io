"use client";

import { FiArrowUp } from "react-icons/fi";
import { profile, socials } from "@/lib/data";

export default function Footer() {
  const year = 2026;

  return (
    <footer
      className="flex flex-col items-center justify-between gap-6 px-[6%] py-10 sm:flex-row"
      style={{
        background: "var(--second-bg-color)",
        borderTop: "1px solid var(--glass-border)",
      }}
    >
      <p className="text-center text-sm sm:text-left" style={{ color: "var(--text-muted)" }}>
        © {year} {profile.name}. All rights reserved.
      </p>

      <div className="flex gap-4">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-xl transition-colors hover:text-[var(--main-color)]"
              style={{ color: "var(--text-muted)" }}
            >
              <Icon />
            </a>
          );
        })}
      </div>

      <a
        href="#home"
        aria-label="Back to top"
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-[image:var(--gradient-1)] text-xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,196,204,0.4)]"
      >
        <FiArrowUp />
      </a>
    </footer>
  );
}
