"use client";

import { motion, type Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 60 },
  down: { x: 0, y: -60 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
  none: { x: 0, y: 0 },
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const variants: Variants = {
    hidden: { opacity: 0, ...offset[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
