'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Slider from 'react-slick'; // Default import for Slider
import styles from './page.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Constants
const BIRTHDAY_DETAILS = {
  dob: '17 July 2000',
  countdownStart: 5,
  name: 'Special Someone'
};

const BANNER_QUOTES = [
  '"Wishing you a day filled with love, laughter, and unforgettable memories."',
  '"Another year of wonderful you! Happy Birthday!"',
  '"Celebrating the amazing person you are today!"',
  '"May your day be as special as you are to us!"'
];

const GALLERY_ITEMS = [
  { src: '/assets/images/memory-4.jpeg', audio: '/assets/audio/audio-10.mp3' },
  { src: '/assets/images/memory-5.jpeg', audio: '/assets/audio/audio-3.mp3' },
  { src: '/assets/images/memory-6.jpeg', audio: '/assets/audio/audio-13.mp3' },
  { src: '/assets/images/memory-7.jpeg', audio: '/assets/audio/audio-4.mp3' },
  { src: '/assets/images/memory-8.jpeg', audio: '/assets/audio/audio-14.mp3' },
  { src: '/assets/images/memory-1.jpeg', audio: '/assets/audio/audio-2.mp3' },
  { src: '/assets/images/memory-2.jpeg', audio: '/assets/audio/audio-20.mp3' },
  { src: '/assets/images/memory-3.jpeg', audio: '/assets/audio/audio-1.mp3' },
  { src: '/assets/images/memory-9.jpeg', audio: '/assets/audio/audio-5.mp3' },
  { src: '/assets/images/memory-10.jpeg', audio: '/assets/audio/audio-15.mp3' },
  { src: '/assets/images/memory-11.jpeg', audio: '/assets/audio/audio-6.mp3' },
  { src: '/assets/images/memory-12.jpeg', audio: '/assets/audio/audio-16.mp3' },
  { src: '/assets/images/memory-13.jpeg', audio: '/assets/audio/audio-7.mp3' },
  { src: '/assets/images/memory-14.jpeg', audio: '/assets/audio/audio-17.mp3' },
  { src: '/assets/images/memory-15.jpeg', audio: '/assets/audio/audio-8.mp3' },
  { src: '/assets/images/memory-16.jpeg', audio: '/assets/audio/audio-18.mp3' },
  { src: '/assets/images/memory-17.jpeg', audio: '/assets/audio/audio-9.mp3' },
  { src: '/assets/images/memory-18.jpeg', audio: '/assets/audio/audio-19.mp3' },
  { src: '/assets/images/memory-19.jpeg', audio: '/assets/audio/audio-6.mp3' },
  { src: '/assets/images/memory-20.jpeg', audio: '/assets/audio/audio-20.mp3' },
  { src: '/assets/images/memory-21.jpeg', audio: '/assets/audio/audio-16.mp3' },
  { src: '/assets/images/memory-22.jpeg', audio: '/assets/audio/audio-1.mp3' },
  { src: '/assets/images/memory-23.jpeg', audio: '/assets/audio/audio-5.mp3' },
  { src: '/assets/images/memory-24.jpeg', audio: '/assets/audio/audio-15.mp3' },
  { src: '/assets/images/memory-25.jpeg', audio: '/assets/audio/audio-4.mp3' },
  { src: '/assets/images/memory-26.jpeg', audio: '/assets/audio/audio-3.mp3' },
  { src: '/assets/images/memory-27.jpeg', audio: '/assets/audio/audio-2.mp3' },
  { src: '/assets/images/memory-28.jpeg', audio: '/assets/audio/audio-10.mp3' },
];

const BANNER_IMAGES = [
  { src: '/assets/images/banner-1.jpeg', caption: "" },
  { src: '/assets/images/banner-2.jpeg', caption: "" },
  { src: '/assets/images/banner-3.jpeg', caption: "" },
  { src: '/assets/images/banner-4.jpeg', caption: "" },
];

const VIDEO_ITEMS = [
  { src: '/assets/videos/video-12.mp4', title: "Birthday Surprise 2022" },
  { src: '/assets/videos/video-13.mp4', title: "Friends Gathering" },
  { src: '/assets/videos/video-11.mp4', title: "Friends Gathering" },
];

const LOVE_QUOTES = [
  "In every memory, in every smile, in every moment, you are loved beyond words.",
  "Your smile brightens our world more than you know.",
  "The best things in life are the people we love, the places we've been, and the memories we've made.",
  "Life with you is a beautiful adventure I never want to end."
];

const CursorSeaSmokeEffect = () => {
  const mousePos = useRef({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Particle {
      x: number;
      y: number;
      size: number;
      baseSize: number;
      speedX: number;
      speedY: number;
      opacity: number;
      life: number;
      waveOffset: number;
      angle: number;
    }

    const particles: Particle[] = [];

    const createParticle = (x: number, y: number): Particle => {
      return {
        x: x,
        y: y,
        size: Math.random() * 30 + 15,
        baseSize: Math.random() * 25 + 15,
        speedX: (Math.random() * 2 - 1) * 1.5,
        speedY: (Math.random() * 1 - 0.5) * 1.2,
        opacity: Math.random() * 0.5 + 0.4,
        life: Math.random() * 200 + 150,
        waveOffset: Math.random() * Math.PI * 2,
        angle: Math.random() * Math.PI * 2,
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (particles.length < 50) {
        for (let i = 0; i < 3; i++) {
          particles.push(createParticle(
            mousePos.current.x + (Math.random() - 0.5) * 50,
            mousePos.current.y + (Math.random() - 0.5) * 50
          ));
        }
      }

      particles.forEach((p, i) => {
        p.x += p.speedX + Math.sin(p.waveOffset) * 0.8;
        p.y += p.speedY - 0.3;
        p.opacity *= 0.99;
        p.life--;
        p.waveOffset += 0.05;
        p.size = p.baseSize * (0.8 + Math.sin(p.waveOffset) * 0.3);
        p.angle += 0.03;

        ctx.beginPath();
        ctx.fillStyle = `rgba(200, 220, 240, ${p.opacity})`;
        ctx.ellipse(
          p.x,
          p.y,
          p.size * 1.2,
          p.size * 0.3,
          p.angle,
          0,
          Math.PI * 2
        );
        ctx.fill();

        if (p.life <= 0 || p.opacity < 0.01) {
          particles.splice(i, 1);
        }
      });

      requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
};

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [countdown, setCountdown] = useState(BIRTHDAY_DETAILS.countdownStart);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const [muted, setMuted] = useState(true); // Start muted to comply with autoplay policy

  const bannerAudioRef = useRef<HTMLAudioElement | null>(null);
  const galleryAudioRef = useRef<HTMLAudioElement | null>(null);
  const hasPlayed = useRef(false); // Track if birthday audio has played
  const sliderRef = useRef<Slider>(null); // Use Slider component type directly

  // Countdown timer
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      const hide = setTimeout(() => setShowOverlay(false), 1000);
      return () => clearTimeout(hide);
    }
  }, [countdown]);

  const handleMouseEnter = (index: number) => {
    if (galleryAudioRef.current) {
      galleryAudioRef.current.pause();
      galleryAudioRef.current.currentTime = 0;
    }

    if (!muted && GALLERY_ITEMS[index].audio) {
      const newAudio = new Audio(GALLERY_ITEMS[index].audio);
      galleryAudioRef.current = newAudio;
      newAudio.play().catch((error) => console.error('Audio playback failed:', error));
    }
  };

  const handleMouseLeave = () => {
    if (galleryAudioRef.current) {
      galleryAudioRef.current.pause();
      galleryAudioRef.current.currentTime = 0;
    }
  };

  const openImageModal = (index: number) => {
    setSelectedImage(index);
    setIsAutoSliding(false);
  };

const closeImageModal = (
  e?: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>
) => {
  e?.stopPropagation?.();
  setSelectedImage(null);
  setIsAutoSliding(true);
};


  const toggleMute = () => {
    if (muted && !hasPlayed.current) {
      // First interaction: play birthday audio
      const audio = new Audio('/assets/audio/birthday.mp3');
      bannerAudioRef.current = audio;
      audio.play().catch((error) => console.error('Initial audio playback failed:', error));
      hasPlayed.current = true; // Mark as played
      setMuted(false); // Unmute to allow gallery audio
    } else {
      // Subsequent clicks: mute all audio
      setMuted(true);
      if (galleryAudioRef.current) {
        galleryAudioRef.current.pause();
        galleryAudioRef.current.currentTime = 0;
      }
      if (bannerAudioRef.current) {
        bannerAudioRef.current.pause();
        bannerAudioRef.current.currentTime = 0;
      }
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isAutoSliding,
    autoplaySpeed: 8000,
    arrows: true,
    fade: true,
    pauseOnHover: true,
    beforeChange: (_: number, next: number) => setCurrentBanner(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <main className={styles.main}>
      {/* Cursor Sea Smoke Effect */}
      <CursorSeaSmokeEffect />

      {/* Background elements */}
      <div className={styles.backgroundGradient}></div>
      <div className={styles.floatingParticles}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.particle}></div>
        ))}
      </div>

      {/* Audio control button */}
      <button className={styles.muteButton} onClick={toggleMute} aria-label={muted ? 'Play audio' : 'Mute audio'}>
        {muted ? (
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
      </button>

      {/* Overlay with countdown */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.overlay}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.overlayContent}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  damping: 10
                }}
                className={styles.overlayCard}
              >
                <div className={styles.overlayHeader}>
                  <h1 className={styles.dobText}>
                    <span className={styles.highlight}>🎂</span> {BIRTHDAY_DETAILS.dob} <span className={styles.highlight}>🎉</span>
                  </h1>
                  <p className={styles.birthdayName}>{BIRTHDAY_DETAILS.name}</p>
                </div>

                <motion.div
                  className={styles.countdown}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    repeat: countdown > 0 ? Infinity : 0,
                    repeatType: "reverse",
                    repeatDelay: 0.8
                  }}
                >
                  {countdown}
                </motion.div>

                <p className={styles.overlaySubtext}>
                  Preparing something special...
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      {!showOverlay && (
        <div className={styles.content}>
          {/* Header Section */}
          <header className={styles.header}>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className={styles.headerContent}
            >
              <h1 className={styles.title}>Happy Birthday, {BIRTHDAY_DETAILS.name}!</h1>
              <div className={styles.underline}></div>
              <p className={styles.subtitle}>Celebrating your special day</p>
            </motion.div>
          </header>

          {/* Banner Slider Section */}
          <section className={styles.bannerSection}>
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className={styles.titleDecor}>🎉</span> Birthday Moments <span className={styles.titleDecor}>🎉</span>
            </motion.h2>

            <div className={styles.sliderContainer}>
              <Slider ref={sliderRef} {...sliderSettings}>
                {BANNER_IMAGES.map((item, index) => (
                  <div key={index} className={styles.bannerSlide}>
                    <div className={styles.bannerImageWrapper}>
                      <Image
                        src={item.src}
                        alt={`Banner ${index + 1}`}
                        fill
                        className={styles.bannerImage}
                        sizes="(max-width: 768px) 100vw, 800px"
                        priority={index === 0}
                        style={{ zIndex: 999 }}
                        objectFit="cover"
                      />
                    </div>
                    <div className={styles.bannerCaption}>
                      <p>{item.caption}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            <motion.div
              className={styles.sliderQuote}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p>{BANNER_QUOTES[currentBanner % BANNER_QUOTES.length]}</p>
            </motion.div>
          </section>

          {/* Custom Banner Image Section */}
          <section className={styles.customBannerSection}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={styles.customBannerWrapper}
            >
              <div className="relative w-[40rem] h-[70vw]">
                <Image
                  src="/assets/images/shrutibirthday.png"
                  alt="Shruti"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </section>

          {/* Gallery Section */}
          <section className={styles.gallerySection}>
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className={styles.titleDecor}>✦</span> Memory Gallery <span className={styles.titleDecor}>✦</span>
            </motion.h2>

            <div className={styles.galleryGrid}>
              {GALLERY_ITEMS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className={styles.galleryCard}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={() => handleMouseEnter(index)}
                  onTouchEnd={handleMouseLeave}
                  onClick={() => openImageModal(index)}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={item.src}
                      alt={`Memory ${index + 1}`}
                      fill
                      className={styles.galleryImage}
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      style={{ zIndex: 999 }}
                    />
                  </div>
                  <div className={styles.cardCaption}></div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Video Section */}
          <section className={styles.videoSection}>
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className={styles.titleDecor}>🎥</span> Video Memories
            </motion.h2>

            <div className={styles.videoContainer}>
              {VIDEO_ITEMS.map((v, idx) => (
                <motion.div
                  key={idx}
                  className={styles.videoCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                >
                  <div className={styles.videoWrapper}>
                    <video
                      src={v.src}
                      controls
                      className={styles.video}
                      poster={`/assets/video-thumbs/${idx + 1}.jpg`}
                      preload="metadata"
                      style={{ zIndex: 999 }}
                    />
                  </div>
                  <h3 className={styles.videoTitle}>{v.title}</h3>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Love Quote Section */}
          <section className={styles.loveSection}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={styles.loveContainer}
            >
              <motion.div
                className={styles.loveQuoteCard}
                whileHover={{ scale: 1.02 }}
              >
                <div className={styles.quoteMark}>“</div>
                <p className={styles.loveQuote}>
                  {LOVE_QUOTES[currentBanner % LOVE_QUOTES.length]}
                </p>
                <div className={styles.quoteMark}>”</div>
              </motion.div>
            </motion.div>
          </section>

          {/* Footer */}
          <footer className={styles.footer}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className={styles.footerContent}
            >
              <p>Created with love for your special day</p>
              <div className={styles.heartBeat}>❤️</div>
              <p className={styles.footerDate}>{new Date().getFullYear()}</p>
            </motion.div>
          </footer>
        </div>
      )}

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className={styles.imageModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => closeImageModal}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={closeImageModal}
                onTouchStart={closeImageModal}
                aria-label="Close image modal"
                tabIndex={0}
                onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    closeImageModal();
                  }
                }}
              >
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>

              <div className={styles.modalImageContainer}>
                <Image
                  src={GALLERY_ITEMS[selectedImage].src}
                  alt={`Memory ${selectedImage + 1}`}
                  fill
                  className={styles.modalImage}
                  style={{ zIndex: 999 }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}