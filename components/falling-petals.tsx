"use client";

import { motion } from "framer-motion";

const petals = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: `${Math.random() * 100}%`,
  size: Math.floor(Math.random() * 18) + 16,
  delay: Math.random() * 8,
  duration: Math.random() * 8 + 10,
  rotate: Math.random() * 360,
}));

export function FallingPetals() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{
            y: -120,
            opacity: 0,
            rotate: petal.rotate,
          }}
          animate={{
            y: "110vh",
            x: [-25, 20, -18, 15, -10],
            rotate: [
              petal.rotate,
              petal.rotate + 90,
              petal.rotate + 180,
              petal.rotate + 270,
              petal.rotate + 360,
            ],
            opacity: [0, 0.9, 0.9, 0.8, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: petal.left,
            fontSize: petal.size,
          }}
          className="absolute select-none will-change-transform"
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
}