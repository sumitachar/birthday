"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

import {
  Heart,
  Send,
  Gift,
  Sparkles,
} from "lucide-react";

import { CardStep } from "@/lib/content";
import { Button } from "@/components/ui/button";

type Props = {
  step: CardStep;
  index: number;
  onNext: (answer: string) => void;
};

export function GameCard({
  step,
  index,
  onNext,
}: Props) {
  const [opened, setOpened] = useState(false);
  const [answer, setAnswer] = useState("");

  const submit = () => {
    if (!answer.trim()) return;

    confetti({
      particleCount: 120,
      spread: 80,
      origin: {
        y: 0.65,
      },
      colors: [
        "#ff69b4",
        "#ffd700",
        "#ffffff",
        "#c084fc",
      ],
    });

    setTimeout(() => {
      onNext(answer);
    }, 700);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.85,
        y: 50,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.8,
      }}
      transition={{
        duration: 0.7,
      }}
      className="relative w-full max-w-xl"
    >
      {/* Glow */}
      <div
        className="
          absolute
          -inset-5
          rounded-[45px]
          bg-gradient-to-r
          from-pink-500/30
          via-purple-500/30
          to-yellow-400/20
          blur-3xl
        "
      />

      {/* Card */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-white/20
          bg-white/10
          backdrop-blur-2xl
          shadow-[0_30px_100px_rgba(255,105,180,.25)]
          p-8
        "
      >
        {/* Top Gradient */}
        <div
          className="
            absolute
            left-0
            right-0
            top-0
            h-1
            bg-gradient-to-r
            from-pink-400
            via-purple-400
            to-yellow-300
          "
        />

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <span
            className="
              rounded-full
              bg-pink-500/20
              px-4
              py-1
              text-sm
              font-medium
              text-pink-200
            "
          >
            Surprise {index + 1}
          </span>

          <Sparkles
            className="
              h-5
              w-5
              text-yellow-300
              animate-pulse
            "
          />
        </div>

        <AnimatePresence mode="wait">

          {/* CLOSED CARD */}

          {!opened ? (
            <motion.div
              key="closed"
              initial={{
                opacity: 0,
                rotateY: 90,
              }}
              animate={{
                opacity: 1,
                rotateY: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
              transition={{
                duration: 0.6,
              }}
              className="text-center"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="
                  mx-auto
                  mb-6
                  flex
                  h-28
                  w-28
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-pink-500
                  to-purple-600
                  text-6xl
                  shadow-2xl
                "
              >
                {step.label.split(" ")[0]}
              </motion.div>

              <h2 className="text-3xl font-bold text-white">
                Step {index + 1}
              </h2>

              <p className="mt-3 text-white/60">
                {step.label}
              </p>

              <Button
                onClick={() => setOpened(true)}
                className="
                  mt-8
                  rounded-full
                  bg-gradient-to-r
                  from-pink-500
                  to-purple-600
                  px-10
                  py-6
                  shadow-xl
                  transition
                  hover:scale-105
                "
              >
                <Gift className="mr-2 h-5 w-5" />
                Open Surprise
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="question"
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="text-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                }}
              >
                <Heart
                  fill="currentColor"
                  className="
                    mx-auto
                    h-14
                    w-14
                    text-pink-400
                  "
                />
              </motion.div>

              <h2
                className="
                  mt-6
                  text-2xl
                  font-bold
                  leading-relaxed
                  text-white
                "
              >
                {step.question}
              </h2>

              <textarea
                rows={5}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder={step.placeholder}
                className="
                  mt-8
                  w-full
                  rounded-3xl
                  border
                  border-white/20
                  bg-black/20
                  p-5
                  text-white
                  placeholder:text-white/40
                  outline-none
                  transition
                  focus:border-pink-400
                  focus:ring-4
                  focus:ring-pink-400/20
                "
              />

              <Button
                disabled={!answer.trim()}
                onClick={submit}
                className="
                  mt-8
                  rounded-full
                  bg-gradient-to-r
                  from-pink-500
                  to-purple-600
                  px-10
                  py-6
                  shadow-xl
                  transition
                  hover:scale-105
                "
              >
                <Send className="mr-2 h-5 w-5" />
                Send Answer
              </Button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </motion.div>
  );
}