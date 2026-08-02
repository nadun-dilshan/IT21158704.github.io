"use client";

import { useState } from "react";
import { profile, contactChannels, WEB3FORMS_ACCESS_KEY } from "@/lib/data";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

type Status = "idle" | "sending" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border p-4 text-base outline-none transition-colors focus:border-[var(--accent)]";

const inputStyle = {
  background: "var(--surface-2)",
  borderColor: "var(--border)",
  color: "var(--text)",
} as const;

function channelDetail(label: string) {
  switch (label) {
    case "Email":
      return profile.email;
    case "WhatsApp":
      return profile.phone;
    default:
      return "nadun-dilshan";
  }
}

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
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
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <SectionHeading kicker="Contact">Let&apos;s work together</SectionHeading>

      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <Reveal>
          <p
            className="mb-8 max-w-md text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Have a project in mind, a role to fill, or just want to say hi? My
            inbox is always open - I usually reply within a day.
          </p>

          <div className="space-y-3">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover flex items-center gap-4 p-4"
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
                    style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                  >
                    <Icon aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{channel.label}</p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {channelDetail(channel.label)}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <label className="sr-only" htmlFor="contact-name">Full name</label>
              <input id="contact-name" name="name" type="text" placeholder="Full Name" required className={inputClasses} style={inputStyle} />
              <label className="sr-only" htmlFor="contact-email">Email address</label>
              <input id="contact-email" name="email" type="email" placeholder="Email Address" required className={inputClasses} style={inputStyle} />
            </div>
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <label className="sr-only" htmlFor="contact-phone">Phone number</label>
              <input id="contact-phone" name="phone" type="tel" placeholder="Phone (optional)" className={inputClasses} style={inputStyle} />
              <label className="sr-only" htmlFor="contact-subject">Subject</label>
              <input id="contact-subject" name="subject" type="text" placeholder="Subject" required className={inputClasses} style={inputStyle} />
            </div>
            <label className="sr-only" htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className={`${inputClasses} mb-4 resize-y`}
              style={inputStyle}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "success" && (
              <output className="mt-4 block rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3 text-center text-sm text-emerald-500">
                Message sent - I&apos;ll get back to you soon.
              </output>
            )}
            {status === "error" && (
              <output className="mt-4 block rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-center text-sm text-red-500">
                Something went wrong. Please try again or email me directly at{" "}
                {profile.email}.
              </output>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
