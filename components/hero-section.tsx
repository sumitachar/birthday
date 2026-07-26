"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  Gift,
  Cake,
  Stars,
} from "lucide-react";

import { SITE } from "@/lib/content";
import { useMusic } from "@/context/music-context";

import { BalloonField } from "@/components/balloon-field";
import { FallingPetals } from "@/components/falling-petals";
import { FloatingHearts } from "@/components/floating-hearts";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { playSong } = useMusic();

  const startGame = () => {
    // Start first game music
    playSong("/audio/song1.mp3");

    // Scroll smoothly to game section
    document.getElementById("game")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative flex h-screen w-full items-end justify-center overflow-hidden">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3 }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center animate-zoom"
          style={{
            backgroundImage: `url(${SITE.heroImage})`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#12071d] via-[#12071d]/55 to-black/20" />

        <div className="absolute bottom-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-pink-400/20 blur-[130px]" />
      </motion.div>

      {/* Decorations */}
      <div className="absolute inset-0 starfield opacity-60" />

      <BalloonField />
      <FloatingHearts />
      <FallingPetals />

      {/* Content */}
      <div className="relative z-20 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass mb-5 inline-flex items-center gap-2 rounded-full px-5 py-2"
        >
          <Cake className="h-4 w-4 text-pink-500" fill="currentColor" />
          <span className="text-xs uppercase tracking-[4px] text-blue-700">
            Birthday Surprise
          </span>
          <Sparkles className="h-4 w-4 text-yellow-500" />
        </motion.div>

        {/* Crafted */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-script text-3xl text-blue-800 sm:text-4xl"
        >
          Crafted with ❤️ by {SITE.yourName}
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 font-display text-6xl italic leading-tight text-white drop-shadow-2xl md:text-8xl"
        >
          {SITE.headline}
        </motion.h1>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-4 font-script text-6xl text-pink-200 md:text-8xl"
        >
          {SITE.herName}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80"
        >
          {SITE.subheadline}
        </motion.p>

        {/* CTA Button - Direct Start */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-10"
        >
          <Button
            onClick={startGame}
            size="lg"
            className="group relative overflow-hidden rounded-full bg-pink-400 px-10 py-7 text-lg font-semibold text-black shadow-[0_0_40px_rgba(255,105,180,0.45)] transition-all duration-300 hover:scale-105 hover:bg-pink-300"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <Gift className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />

            Open Your Birthday Surprise
          </Button>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="glass mt-12 max-w-xl rounded-3xl px-6 py-5"
        >
          <div className="flex items-center justify-center gap-3">
            <Heart className="h-5 w-5 text-pink-300" fill="currentColor" />
            <p className="text-sm leading-7 text-white/80">
              Every birthday deserves beautiful memories.
              <br />
              So I made something special just for you.
            </p>
            <Stars className="h-5 w-5 text-yellow-300" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-52 w-full bg-gradient-to-t from-[#14081f] via-[#14081f]/70 to-transparent" />
    </section>
  );
}