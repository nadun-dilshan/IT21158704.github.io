"use client";

import { useEffect, useState } from "react";

type Particle = {
  left: string;
  delay: string;
  duration: string;
};

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const count = window.innerWidth < 768 ? 20 : 45;
    const generated = Array.from({ length: count }, () => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${Math.random() * 5 + 6}s`,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden>
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: p.left,
            bottom: "-10px",
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
