"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { profile, socials, heroRoles } from "@/lib/data";
import TypedText from "../TypedText";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center justify-center gap-12 px-[6%] pt-32 pb-12 lg:flex-row flex-col-reverse"
    >
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="mb-2 text-2xl font-bold text-[var(--main-color)]">
          Hello, I&apos;m
        </h3>
        <h1 className="font-display mb-4 text-5xl font-black leading-tight gradient-text sm:text-6xl xl:text-7xl">
          {profile.name}
        </h1>
        <div className="mb-6 text-2xl font-semibold sm:text-3xl">
          <TypedText strings={heroRoles} />
        </div>
        <p
          className="mb-8 max-w-xl text-lg leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {profile.heroDescription}
        </p>

        <div className="mb-8 flex gap-4">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="glass group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full text-xl transition-all duration-300 hover:-translate-y-1"
                style={{ color: "var(--main-color)" }}
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-[image:var(--gradient-1)] transition-transform duration-300 group-hover:scale-x-100" />
                <Icon className="relative z-10 transition-colors group-hover:text-white" />
              </a>
            );
          })}
        </div>

        <a
          href={profile.cv}
          download
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[image:var(--gradient-1)] px-8 py-4 text-base font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,196,204,0.4)]"
        >
          <FiDownload className="relative z-10" />
          <span className="relative z-10">Download CV</span>
        </a>
      </motion.div>

      <motion.div
        className="flex flex-1 justify-center"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative flex items-center justify-center">
          <span
            className="absolute h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-1)" }}
          />
          <div className="float-image relative z-10 h-[280px] w-[280px] overflow-hidden rounded-full border-[3px] border-[var(--main-color)] shadow-[0_0_50px_rgba(0,196,204,0.3)] sm:h-[340px] sm:w-[340px]">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              priority
              sizes="340px"
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
