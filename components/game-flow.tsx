"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { GAME_STEPS } from "@/lib/content";
import { useMusic } from "@/context/music-context";

import { GameCard } from "@/components/cards/game-card";
import { FinalCard } from "@/components/cards/final-card";

type Answer = {
  question: string;
  answer: string;
};

export function GameFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const { playSong } = useMusic();

  const isFinished = currentStep >= GAME_STEPS.length;

  const currentStepData = GAME_STEPS[currentStep];

  const currentBackground = useMemo(() => {
    if (isFinished) {
      return "/images/final.jpeg";
    }

    return currentStepData?.background || "";
  }, [currentStep, isFinished, currentStepData]);


  // Change music for each game step
  useEffect(() => {

    // No music change on final card
    if (isFinished) return;


    // Keep intro music for first screen
    if (currentStep === 0) return;


    const song = currentStepData?.song;

    if (song) {
      playSong(song);
    }

  }, [
    currentStep,
    isFinished,
    currentStepData,
    playSong
  ]);


const handleNext = (answer: string) => {
  const currentQuestion = GAME_STEPS[currentStep];

  setAnswers((prev) => [
    ...prev,
    {
      question: currentQuestion.question,
      answer,
    },
  ]);

  setCurrentStep((prev) => prev + 1);
};


  return (
    <section
      id="game"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20"
    >

      {/* Background */}
      <AnimatePresence mode="wait">

        <motion.div
          key={currentBackground}
          initial={{
            opacity:0,
            scale:1.05
          }}
          animate={{
            opacity:1,
            scale:1
          }}
          exit={{
            opacity:0
          }}
          transition={{
            duration:0.8
          }}
          className="absolute inset-0"
        >

          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:`url(${currentBackground})`
            }}
          />


          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        </motion.div>

      </AnimatePresence>


      {/* Stars */}
      <div className="starfield absolute inset-0 opacity-60" />


      {/* Progress */}
      {!isFinished && (
        <div className="absolute left-1/2 top-8 z-20 flex -translate-x-1/2 gap-3">

          {GAME_STEPS.map((_,index)=>(

            <motion.div
              key={index}
              animate={{
                scale:currentStep===index ? 1.25 : 1
              }}
              className={`h-3 w-3 rounded-full ${
                index < currentStep
                ? "bg-pink-400"
                : currentStep===index
                ? "bg-yellow-300"
                : "bg-white/30"
              }`}
            />

          ))}

        </div>
      )}



      {/* Card */}
      <div className="relative z-20 w-full max-w-2xl">

        <AnimatePresence mode="wait">

          {!isFinished ? (

            <motion.div
              key={currentStepData.id}
              initial={{
                opacity:0,
                x:80
              }}
              animate={{
                opacity:1,
                x:0
              }}
              exit={{
                opacity:0,
                x:-80
              }}
              transition={{
                duration:0.5
              }}
            >

              <GameCard
                step={currentStepData}
                index={currentStep}
                onNext={handleNext}
              />

            </motion.div>


          ) : (


            <motion.div
              key="final-card"
              initial={{
                opacity:0,
                scale:0.9
              }}
              animate={{
                opacity:1,
                scale:1
              }}
              transition={{
                duration:0.7
              }}
            >

              <FinalCard
                answers={answers}
              />

            </motion.div>

          )}

        </AnimatePresence>

      </div>


    </section>
  );
}