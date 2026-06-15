"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { navLinks, profile } from "@/lib/data";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));

    const onScroll = () => {
      setSticky(window.scrollY > 80);

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ThemeIcon = theme === "dark" ? FiSun : FiMoon;

  return (
    <header
      className={`fixed top-0 left-0 z-100 flex w-full items-center justify-between px-[6%] transition-all duration-300 ${
        sticky ? "py-4 shadow-lg" : "py-6"
      }`}
      style={{
        background: "var(--header-bg)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--glass-border)",
      }}
    >
      <a
        href="#home"
        className="font-display text-3xl font-black gradient-text"
        aria-label={profile.name}
      >
        Nadun
      </a>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => {
          const isActive = active === link.href.slice(1);
          return (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[1.05rem] font-medium transition-colors"
              style={{ color: isActive ? "var(--main-color)" : "var(--text-color)" }}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[image:var(--gradient-1)] transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          );
        })}
      </nav>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="glass flex h-11 w-11 items-center justify-center rounded-full text-xl transition-transform hover:scale-110"
          style={{ color: "var(--main-color)" }}
        >
          <ThemeIcon />
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="glass flex h-11 w-11 items-center justify-center rounded-full text-2xl md:hidden"
          style={{ color: "var(--text-color)" }}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        className={`absolute top-full left-0 w-full origin-top flex-col overflow-hidden px-[6%] transition-all duration-300 md:hidden ${
          open ? "flex max-h-96 py-6" : "flex max-h-0 py-0"
        }`}
        style={{
          background: "var(--header-bg)",
          backdropFilter: "blur(20px)",
          borderBottom: open ? "1px solid var(--glass-border)" : "none",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="py-3 text-center text-xl font-medium transition-colors hover:text-[var(--main-color)]"
            style={{
              color:
                active === link.href.slice(1)
                  ? "var(--main-color)"
                  : "var(--text-color)",
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
