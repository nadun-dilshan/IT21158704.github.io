"use client";

import { useEffect, useState } from "react";

/**
 * Lightweight typing effect — cycles through `strings`, typing and deleting
 * each one. Replaces the typed.js dependency.
 */
export default function TypedText({
  strings,
  typeSpeed = 80,
  backSpeed = 45,
  backDelay = 1500,
}: {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
}) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[index % strings.length];

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), backDelay);
      return () => clearTimeout(t);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % strings.length);
      return;
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      },
      deleting ? backSpeed : typeSpeed
    );

    return () => clearTimeout(t);
  }, [text, deleting, index, strings, typeSpeed, backSpeed, backDelay]);

  return (
    <span>
      {text}
      <span className="animate-pulse text-[var(--main-color)]">|</span>
    </span>
  );
}
