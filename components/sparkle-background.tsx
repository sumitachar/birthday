"use client";

import { motion } from "framer-motion";

const sparkles = Array.from({ length: 70 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 5 + 2,
  duration: Math.random() * 3 + 2,
  delay: Math.random() * 5,
}));

export function SparkleBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {sparkles.map((sparkle) => (
        <motion.span
          key={sparkle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            width: sparkle.size,
            height: sparkle.size,
            boxShadow: `
              0 0 6px rgba(255,255,255,.9),
              0 0 14px rgba(255,192,203,.6),
              0 0 22px rgba(255,255,255,.5)
            `,
          }}
          animate={{
            opacity: [0.15, 1, 0.25],
            scale: [0.8, 1.8, 0.8],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}