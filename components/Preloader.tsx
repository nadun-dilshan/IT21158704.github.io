"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center"
          style={{ background: "var(--bg-color)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="relative h-16 w-16 animate-spin rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, var(--main-color), var(--accent-color), var(--main-color))",
              animationDuration: "1s",
            }}
          >
            <span
              className="absolute inset-[5px] rounded-full"
              style={{ background: "var(--bg-color)" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
