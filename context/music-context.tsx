"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  ReactNode,
  useEffect,
} from "react";

type MusicContextType = {
  currentSong: string;
  isPlaying: boolean;
  playSong: (song: string) => Promise<void>;
  togglePlay: () => Promise<void>;
};

const MusicContext = createContext<MusicContextType | null>(null);

export function MusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentSong, setCurrentSong] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = async (song: string) => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      // If same song is already loaded
      if (audio.src && audio.src.includes(song)) {
        if (audio.paused) {
          await audio.play();
          setIsPlaying(true);
        }
        return;
      }

      // New song
      audio.pause();
      audio.src = song;
      audio.currentTime = 0;
      audio.volume = 0.65;

      await audio.play();
      setCurrentSong(song);
      setIsPlaying(true);
    } catch (err) {
      console.error("Audio play failed:", err);
      setIsPlaying(false);
    }
  };

const togglePlay = async () => {
  const audio = audioRef.current;
  if (!audio) return;

  console.log("Before:", audio.paused);

  if (audio.paused) {
    await audio.play();
    console.log("Playing");
  } else {
    audio.pause();
    console.log("Paused");
  }

  console.log("After:", audio.paused);
};

  // Sync state with actual audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <MusicContext.Provider
      value={{
        currentSong,
        isPlaying,
        playSong,
        togglePlay,
      }}
    >
      <audio ref={audioRef} loop preload="auto" />
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusic must be used inside MusicProvider");
  }
  return context;
}