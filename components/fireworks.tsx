"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export function Fireworks() {
  useEffect(() => {
    const duration = 12000;
    const animationEnd = Date.now() + duration;

    const colors = [
      "#ff69b4",
      "#ffd700",
      "#ffffff",
      "#87cefa",
      "#ff4d6d",
      "#c084fc",
    ];

    const interval = setInterval(() => {
      if (Date.now() > animationEnd) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 70,
        spread: 80,
        startVelocity: 55,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.5,
        },
        colors,
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return null;
}