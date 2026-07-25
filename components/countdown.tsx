"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  targetDate: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  finished: boolean;
};

function calculate(target: string): TimeLeft {
  const diff = new Date(target).getTime() - Date.now();

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      finished: true,
    };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    finished: false,
  };
}

export function Countdown({ targetDate }: Props) {
  const [time, setTime] = useState(calculate(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculate(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (time.finished) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass mt-8 rounded-3xl px-8 py-6 text-center"
      >
        <h2 className="text-3xl font-bold text-pink-300">
          🎉 It's Your Special Day!
        </h2>

        <p className="mt-2 text-white/80">
          Happy Birthday ❤️
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass mt-8 rounded-3xl p-6"
    >
      <p className="mb-5 text-center text-sm uppercase tracking-[4px] text-white/60">
        Countdown
      </p>

      <div className="grid grid-cols-4 gap-4">
        <TimeCard value={time.days} label="Days" />
        <TimeCard value={time.hours} label="Hours" />
        <TimeCard value={time.minutes} label="Minutes" />
        <TimeCard value={time.seconds} label="Seconds" />
      </div>
    </motion.div>
  );
}

function TimeCard({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-md"
    >
      <motion.h3
        key={value}
        initial={{
          opacity: 0,
          y: 12,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="text-3xl font-bold text-pink-300"
      >
        {String(value).padStart(2, "0")}
      </motion.h3>

      <p className="mt-1 text-xs uppercase tracking-[3px] text-white/70">
        {label}
      </p>
    </motion.div>
  );
}