"use client";

import { useState } from "react";
import { contactChannels, WEB3FORMS_ACCESS_KEY } from "@/lib/data";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Nadun Dilshan"
      className="px-[6%] py-24"
    >
      <SectionHeading>
        Get In <span className="gradient-text">Touch</span>
      </SectionHeading>

      <Reveal>
        <div className="mb-12 flex flex-wrap justify-center gap-5">
          {contactChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={channel.label}
                className="glass group relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full text-3xl transition-all duration-300 hover:-translate-y-2 hover:scale-110"
                style={{ color: "var(--main-color)" }}
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-[image:var(--gradient-1)] transition-transform duration-300 group-hover:scale-x-100" />
                <Icon className="relative z-10 transition-colors group-hover:text-white" />
              </a>
            );
          })}
        </div>
      </Reveal>

      <Reveal direction="up">
        <form
          onSubmit={handleSubmit}
          className="glass mx-auto max-w-2xl rounded-3xl p-8 sm:p-10"
        >
          <div className="mb-5 grid gap-5 sm:grid-cols-2">
            <Input name="name" type="text" placeholder="Full Name" required />
            <Input name="email" type="email" placeholder="Email Address" required />
          </div>
          <div className="mb-5 grid gap-5 sm:grid-cols-2">
            <Input name="phone" type="tel" placeholder="Phone Number" />
            <Input name="subject" type="text" placeholder="Subject" required />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={6}
            className="mb-5 w-full rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-4 text-base outline-none transition-all focus:border-[var(--main-color)] focus:shadow-[0_0_20px_rgba(0,196,204,0.2)]"
            style={{ color: "var(--text-color)" }}
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-xl bg-[image:var(--gradient-1)] py-4 text-lg font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,196,204,0.4)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          {status === "success" && (
            <p className="mt-4 rounded-xl border border-green-500 bg-green-500/15 p-3 text-center text-sm text-green-400">
              ✅ Message sent successfully! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 rounded-xl border border-red-500 bg-red-500/15 p-3 text-center text-sm text-red-400">
              ❌ Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </Reveal>
    </section>
  );
}

function Input({
  name,
  type,
  placeholder,
  required,
}: {
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-4 text-base outline-none transition-all focus:border-[var(--main-color)] focus:shadow-[0_0_20px_rgba(0,196,204,0.2)]"
      style={{ color: "var(--text-color)" }}
    />
  );
}
