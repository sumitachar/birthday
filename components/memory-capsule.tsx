"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

type Props = {
  message: string;
};

export function MemoryCapsule({ message }: Props) {

  const [opened, setOpened] = useState(false);

  return (
    <section className="flex justify-center py-20">

      <div
        className="
          relative
          h-[320px]
          w-full
          max-w-[420px]
          cursor-pointer
        "
        style={{
          perspective: 1200,
        }}
        onClick={() => setOpened((prev) => !prev)}
      >

        <motion.div

          animate={{
            rotateY: opened ? 180 : 0,
          }}

          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}

          className="
            relative
            h-full
            w-full
          "

          style={{
            transformStyle: "preserve-3d",
          }}

        >


          {/* ================= FRONT ================= */}

          <div

            className="
              absolute
              inset-0
              flex
              flex-col
              items-center
              justify-center
              rounded-[40px]
              bg-gradient-to-br
              from-pink-400
              via-rose-400
              to-purple-500
              p-8
              text-white
              shadow-2xl
            "

            style={{
              backfaceVisibility: "hidden",
            }}

          >

            <Sparkles
              className="
                mb-5
                h-10
                w-10
                text-yellow-200
              "
            />


            <Heart

              fill="currentColor"

              className="
                h-20
                w-20
                drop-shadow-xl
              "

            />


            <h2

              className="
                mt-6
                text-center
                text-3xl
                font-bold
              "

            >
              A massage For You ❤️
            </h2>


            <p

              className="
                mt-4
                text-sm
                text-white/80
              "

            >
              Tap to unlock ✨
            </p>


          </div>





          {/* ================= BACK ================= */}


          <div

            className="
              absolute
              inset-0
              overflow-hidden
              rounded-[40px]
              bg-white
              p-8
              shadow-2xl
            "

            style={{

              transform: "rotateY(180deg)",

              backfaceVisibility: "hidden",

            }}

          >


            <Heart

              fill="currentColor"

              className="
                mx-auto
                h-10
                w-10
                text-pink-500
              "

            />


            <h2

              className="
                mt-4
                text-center
                text-2xl
                font-bold
                text-pink-500
              "

            >
              A Letter For You ❤️
            </h2>



            {/* MESSAGE AREA */}

            <div

              className="
                mt-5
                max-h-[145px]
                overflow-y-auto
                px-2
                text-center
                text-sm
                leading-7
                text-gray-700
                sm:text-base
                scrollbar-thin
              "

            >

              {message}

            </div>




            <p

              className="
                absolute
                bottom-5
                left-0
                w-full
                text-center
                text-xs
                text-gray-400
              "

            >
              Tap again to close 💕
            </p>


          </div>



        </motion.div>


      </div>


    </section>
  );
}