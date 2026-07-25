"use client";

import { motion } from "framer-motion";
import { Pause, Play, Music2 } from "lucide-react";

import { useMusic } from "@/context/music-context";

export function MusicPlayer() {
  const { isPlaying, togglePlay, currentSong } = useMusic();

  const songName = currentSong
    .replace("/audio/", "")
    .replace(".mp3", "")
    .replace(/-/g, " ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-6 right-6 z-[999]"
    >
      <div className="glass flex items-center gap-4 rounded-full px-4 py-3 shadow-2xl backdrop-blur-xl border border-white/10">
        {/* Rotating Icon */}
        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={{
            repeat: isPlaying ? Infinity : 0,
            ease: "linear",
            duration: 6,
          }}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-white"
        >
          <Music2 className="h-5 w-5" />
        </motion.div>

        {/* Song Info */}
        <div className="hidden max-w-[140px] sm:block">
          <p className="text-xs uppercase tracking-[3px] text-white/60">
            Now Playing
          </p>
          <p className="truncate text-sm font-medium text-white">
            {songName || "No song selected"}
          </p>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all active:scale-95"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 text-white" />
          ) : (
            <Play className="ml-0.5 h-5 w-5 text-white" />
          )}
        </button>
      </div>
    </motion.div>
  );
}
