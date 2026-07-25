"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const photos = [
  "/photos/1.jpeg",
  "/photos/2.jpeg",
  "/photos/3.jpeg",
  "/photos/4.jpeg",
  "/photos/5.jpeg",
];

export function PhotoGallery() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % photos.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="relative py-24 px-6">

      <div className="mx-auto max-w-6xl">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-5xl font-bold"
        >
          Our Memories ❤️
        </motion.h2>

        <p className="mb-14 text-center text-white/70">
          Every picture tells a beautiful story.
        </p>

        {/* Slider */}

        <div className="relative overflow-hidden rounded-[35px]">

          <AnimatePresence mode="wait">

            <motion.img
              key={photos[current]}
              src={photos[current]}
              alt=""
              initial={{
                opacity: 0,
                scale: 1.08,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="h-[500px] w-full object-cover cursor-pointer"
              onClick={() => setSelected(photos[current])}
            />

          </AnimatePresence>

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Prev */}

          <button
            onClick={prev}
            className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-3 backdrop-blur"
          >
            <ChevronLeft />
          </button>

          {/* Next */}

          <button
            onClick={next}
            className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-3 backdrop-blur"
          >
            <ChevronRight />
          </button>

        </div>

        {/* Thumbnails */}

        <div className="mt-10 grid grid-cols-5 gap-4">

          {photos.map((photo, index) => (

            <motion.img
              whileHover={{
                scale: 1.05,
              }}
              key={photo}
              src={photo}
              alt=""
              onClick={() => {
                setCurrent(index);
                setSelected(photo);
              }}
              className={`h-28 w-full cursor-pointer rounded-2xl object-cover border-2 transition ${
                current === index
                  ? "border-pink-400"
                  : "border-transparent"
              }`}
            />

          ))}

        </div>

      </div>

      {/* Lightbox */}

      <AnimatePresence>

        {selected && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-8 top-8"
            >
              <X size={34} />
            </button>

            <motion.img
              initial={{
                scale: .8,
              }}
              animate={{
                scale: 1,
              }}
              src={selected}
              alt=""
              className="max-h-[90vh] max-w-[90vw] rounded-3xl"
            />

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}