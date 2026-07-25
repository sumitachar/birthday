"use client";

import { motion } from "framer-motion";

const hearts = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.floor(Math.random() * 18) + 18,
  delay: Math.random() * 6,
  duration: Math.random() * 5 + 5,
}));

export function FloatingHearts() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{
            opacity: 0,
            scale: 0.5,
            y: 30,
          }}
          animate={{
            opacity: [0, 0.9, 0.6, 0],
            scale: [0.5, 1, 1.15, 0.8],
            y: [30, -20, -60, -120],
            x: [0, -10, 10, -5],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: heart.left,
            top: heart.top,
            fontSize: heart.size,
          }}
          className="absolute select-none drop-shadow-[0_0_12px_rgba(255,105,180,0.8)]"
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}