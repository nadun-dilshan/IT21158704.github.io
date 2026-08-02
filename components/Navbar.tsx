"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { navLinks, profile } from "@/lib/data";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    let ticking = false;

    const update = () => {
      setScrolled(window.scrollY > 24);
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 220) current = id;
      }
      setActive(current);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ThemeIcon = theme === "dark" ? FiSun : FiMoon;

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_var(--border)]" : ""
      }`}
      style={{
        background: scrolled ? "var(--header-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="section-heading text-xl font-bold tracking-tight"
          aria-label={`${profile.name} - home`}
        >
          nadun<span style={{ color: "var(--accent)" }}>.me</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium transition-colors"
                style={{
                  color: isActive ? "var(--text)" : "var(--text-muted)",
                  background: isActive ? "var(--accent-soft)" : "transparent",
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="card flex h-10 w-10 items-center justify-center rounded-full text-lg cursor-pointer"
            style={{ color: "var(--text-muted)" }}
          >
            <ThemeIcon aria-hidden />
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="card flex h-10 w-10 items-center justify-center rounded-full text-xl md:hidden"
            style={{ color: "var(--text)" }}
          >
            {open ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        aria-label="Mobile"
        className={`overflow-hidden transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
        style={{
          background: "var(--header-bg)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: open ? "1px solid var(--border)" : "none",
        }}
      >
        <div className="flex flex-col px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium transition-colors"
              style={{
                color:
                  active === link.href.slice(1)
                    ? "var(--accent)"
                    : "var(--text)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
