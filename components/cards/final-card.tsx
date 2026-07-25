"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

import {
  Heart,
  RotateCcw,
  Download,
  Sparkles,
} from "lucide-react";

import {
  SITE,
  FINAL_MESSAGE,
  ENVELOPE_MESSAGE,
} from "@/lib/content";

import { Fireworks } from "@/components/fireworks";
import { Button } from "@/components/ui/button";
import { MemoryCapsule } from "@/components/memory-capsule";
import { useMusic } from "@/context/music-context";
import { MusicPlayer } from "@/components/music-player";   // ← Added for pause/play

type Answer = {
  question: string;
  answer: string;
};

type Props = {
  answers: Answer[];
};

export function FinalCard({ answers }: Props) {
  const [loading, setLoading] = useState(true);
  const [typingText, setTypingText] = useState("");
  const [sent, setSent] = useState(false);

  const { playSong } = useMusic();
  const songPlayed = useRef(false);

  // Loading timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Play final song only once
  useEffect(() => {
    if (!loading && SITE.finalSong && !songPlayed.current) {
      console.log("Playing final song:", SITE.finalSong);
      songPlayed.current = true;
      playSong(SITE.finalSong);
    }
  }, [loading, playSong]);

  // Send Answers to Email
  useEffect(() => {
    if (loading || sent) return;
    sendAnswers();
  }, [loading]);

  async function sendAnswers() {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: SITE.herName,
          answers,
        }),
      });

      if (response.ok) {
        setSent(true);
        console.log("✅ Email sent successfully");
      } else {
        console.log("❌ Failed to send email");
      }
    } catch (error) {
      console.error("Send error:", error);
    }
  }

  // Confetti
  useEffect(() => {
    if (loading) return;

    const duration = 3000;
    const end = Date.now() + duration;

    function frame() {
      confetti({
        particleCount: 6,
        spread: 70,
        origin: { x: 0 },
      });

      confetti({
        particleCount: 6,
        spread: 70,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }

    frame();
  }, [loading]);

  // Typing animation
  useEffect(() => {
    if (loading) return;

    let index = 0;
    const interval = setInterval(() => {
      setTypingText(FINAL_MESSAGE.body.slice(0, index + 1));
      index++;

      if (index >= FINAL_MESSAGE.body.length) {
        clearInterval(interval);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [loading]);

  function restartGame() {
    location.reload();
  }

  function downloadAnswers() {
    const blob = new Blob(
      [JSON.stringify(answers, null, 2)],
      { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "birthday-memory.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="h-16 w-16 rounded-full border-4 border-pink-400 border-t-transparent"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-4xl">
      <Fireworks />

      {/* Music Player */}
      {/* <MusicPlayer /> */}

      {/* Floating Hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100%", opacity: 0 }}
            animate={{
              y: "-20%",
              opacity: [0, 1, 0],
              x: i % 2 ? 40 : -40,
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{ left: `${Math.random() * 100}%` }}
            className="absolute text-2xl"
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden rounded-[50px] border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-6 shadow-[0_30px_100px_rgba(255,105,180,.25)] backdrop-blur-2xl md:p-14"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Sparkles className="mx-auto h-10 w-10 text-yellow-300" />

          <Heart
            fill="currentColor"
            className="mx-auto mt-4 h-20 w-20 text-pink-400"
          />

          <h1 className="mt-6 font-display text-4xl italic text-white md:text-6xl">
            {FINAL_MESSAGE.title}
          </h1>

          <p className="mt-5 text-sm uppercase tracking-[0.3em] text-white/60">
            A Special Birthday Surprise For {SITE.herName}
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative mt-12 overflow-hidden rounded-[45px] shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent z-10" />

          <img
            src={SITE.finalBackground}
            alt="Birthday Memory"
            className="relative h-[420px] w-full object-cover transition duration-700 hover:scale-110"
          />
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-[35px] border border-white/20 bg-black/20 p-8 text-center backdrop-blur-xl"
        >
          <Heart fill="currentColor" className="mx-auto h-7 w-7 text-pink-300" />

          <h2 className="mt-6 text-2xl font-bold text-white">
            A Little Message For You ❤️
          </h2>

          <p className="mt-6 leading-8 text-white/85 md:text-lg">
            {typingText}
            <span className="ml-1 animate-pulse">|</span>
          </p>
        </motion.div>

        {/* Memory Capsule */}
        <MemoryCapsule message={ENVELOPE_MESSAGE.body} />

        {/* Download */}
        <div className="mt-16 flex justify-center">
          <Button
            onClick={downloadAnswers}
            variant="outline"
            className="rounded-full px-8 py-6"
          >
            <Download className="mr-2 h-5 w-5" />
            Save Memory Capsule
          </Button>
        </div>

        {/* Restart */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={restartGame}
            className="flex items-center gap-2 text-sm text-white/50 hover:text-white"
          >
            <RotateCcw className="h-4 w-4" />
            Play Again
          </button>
        </div>

        {/* Signature */}
        <div className="mt-20 text-center">
          <p className="font-script text-4xl text-pink-300">
            {FINAL_MESSAGE.signOff}
          </p>

          <p className="mt-5 text-sm text-white/40">
            Made with ❤️ by {SITE.yourName}
          </p>
        </div>
      </motion.div>
    </div>
  );
}