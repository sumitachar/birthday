"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useMusic } from "@/context/music-context";
import { SITE } from "@/lib/content";

import {
  Flame,
  Sparkles,
  Heart,
} from "lucide-react";

type Props = {
  onStart: () => void;
};

export function BirthdayIntro({
  onStart,
}: Props) {
  const [lighting, setLighting] = useState(false);
    const { playSong } = useMusic();

  const handleStart = () => {
  if (lighting) return;

  setLighting(true);

  // Start intro music immediately
  playSong(SITE.song);

  confetti({
    particleCount: 180,
    spread: 90,
    origin: {
      y: 0.6,
    },
    colors: [
      "#FFD700",
      "#FF69B4",
      "#ffffff",
      "#F9A8D4",
    ],
  });

  setTimeout(() => {
    onStart();
  }, 1400);
};

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#09090f]
      "
    >
      {/* Background Glow */}

      <div className="absolute inset-0">

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [.25, .5, .25],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-pink-500/20
            blur-[140px]
          "
        />

      </div>

      {/* Floating Hearts */}

      <Heart
        className="
          absolute
          left-20
          top-20
          h-6
          w-6
          animate-bounce
          text-pink-300/60
        "
        fill="currentColor"
      />

      <Heart
        className="
          absolute
          right-24
          bottom-24
          h-8
          w-8
          animate-pulse
          text-pink-300/50
        "
        fill="currentColor"
      />

      {/* Card */}

      <motion.div
        initial={{
          scale: .9,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: .8,
        }}
        className="
          relative
          flex
          max-w-xl
          flex-col
          items-center
          rounded-[40px]
          border
          border-white/10
          bg-white/5
          px-10
          py-14
          text-center
          backdrop-blur-xl
        "
      >
        {/* Sparkles */}

        <Sparkles
          className="
            absolute
            left-8
            top-8
            h-5
            w-5
            text-yellow-300
          "
        />

        <Sparkles
          className="
            absolute
            right-8
            bottom-8
            h-5
            w-5
            text-pink-300
          "
        />

        {/* Candle */}

        <motion.button
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: .95,
          }}
          onClick={handleStart}
          className="relative"
        >
          {/* Glow */}

          <motion.div
            animate={{
              scale: lighting
                ? [1, 2.2, 2]
                : [1, 1.15, 1],
              opacity: lighting
                ? [0.5, 1, .6]
                : [.4, .8, .4],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-40
              w-40
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-yellow-300/30
              blur-[60px]
            "
          />

          {/* Flame */}

          <motion.div
            animate={{
              y: [0, -6, 0],
              rotate: [-3, 3, -3],
              scale: [1, 1.08, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: .8,
            }}
          >
            <Flame
              size={90}
              className="text-yellow-300 drop-shadow-[0_0_30px_gold]"
              fill="currentColor"
            />
          </motion.div>

          {/* Candle */}

          <div
            className="
              mx-auto
              h-36
              w-10
              rounded-full
              bg-gradient-to-b
              from-pink-300
              via-pink-400
              to-pink-600
            "
          />

        </motion.button>

        {/* Title */}

        <motion.h1
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: .3,
          }}
          className="
            mt-10
            text-5xl
            font-bold
            text-white
          "
        >
          Happy Birthday
        </motion.h1>

        <p
          className="
            mt-3
            text-2xl
            text-pink-300
          "
        >
          A Little Surprise Awaits...
        </p>

        <p
          className="
            mt-8
            max-w-md
            text-white/70
            leading-8
          "
        >
          Light the candle to begin a magical birthday
          journey made especially for you.
        </p>

        {/* Button */}

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: .95,
          }}
          onClick={handleStart}
          className="
            mt-10
            rounded-full
            bg-pink-400
            px-10
            py-4
            text-lg
            font-semibold
            text-black
            shadow-[0_0_40px_rgba(255,105,180,.45)]
          "
        >
          {lighting
            ? "Lighting..."
            : "🕯️ Tap to Light the Candle"}
        </motion.button>

      </motion.div>
    </motion.section>
  );
}