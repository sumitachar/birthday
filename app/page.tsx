"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { BirthdayIntro } from "@/components/birthday-intro";
import { HeroSection } from "@/components/hero-section";
import { GameFlow } from "@/components/game-flow";
import { MusicPlayer } from "@/components/music-player";

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!started ? (
          <BirthdayIntro
            key="birthday-intro"
            onStart={() => setStarted(true)}
          />
        ) : (
          <motion.main
            key="main-site"
            initial={{
              opacity: 0,
              scale: 1.02,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="relative min-h-screen overflow-x-hidden bg-[#09090f]"
          >
            {/* Music Player */}
            {/* <MusicPlayer /> */}

            {/* Hero Section */}
            <HeroSection />

            {/* Birthday Game */}
            <GameFlow />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}