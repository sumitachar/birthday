"use client";

import { motion } from "framer-motion";

const balloons = [
  {
    id: 1,
    left: "6%",
    size: 70,
    delay: 0,
    duration: 10,
    rotate: -8,
    emoji: "🎈",
  },
  {
    id: 2,
    left: "18%",
    size: 55,
    delay: 2,
    duration: 9,
    rotate: 6,
    emoji: "🎈",
  },
  {
    id: 3,
    left: "34%",
    size: 80,
    delay: 1,
    duration: 11,
    rotate: -4,
    emoji: "🎈",
  },
  {
    id: 4,
    left: "52%",
    size: 60,
    delay: 3,
    duration: 8,
    rotate: 5,
    emoji: "🎈",
  },
  {
    id: 5,
    left: "70%",
    size: 75,
    delay: 1.5,
    duration: 12,
    rotate: -7,
    emoji: "🎈",
  },
  {
    id: 6,
    left: "86%",
    size: 58,
    delay: 2.5,
    duration: 9,
    rotate: 8,
    emoji: "🎈",
  },
];

export function BalloonField() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          initial={{
            y: 120,
            opacity: 0,
          }}
          animate={{
            y: [-20, -120, -260, -420, -650],
            x: [0, -10, 8, -12, 6],
            rotate: [
              balloon.rotate,
              balloon.rotate + 5,
              balloon.rotate - 5,
              balloon.rotate,
            ],
            opacity: [0, 0.7, 0.9, 0.8, 0],
          }}
          transition={{
            duration: balloon.duration,
            repeat: Infinity,
            delay: balloon.delay,
            ease: "easeInOut",
          }}
          style={{
            left: balloon.left,
            bottom: -120,
            fontSize: balloon.size,
          }}
          className="absolute select-none"
        >
          {balloon.emoji}
        </motion.div>
      ))}
    </div>
  );
}