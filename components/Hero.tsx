"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import { heroMedia } from "@/lib/projects";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playHero = () => {
      video.muted = true;
      void video.play().catch(() => {});
    };

    playHero();
    video.addEventListener("canplay", playHero);
    document.addEventListener("visibilitychange", playHero);

    return () => {
      video.removeEventListener("canplay", playHero);
      document.removeEventListener("visibilitychange", playHero);
    };
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-ink text-bone">
      <div className="absolute inset-0 bg-ink">
        <video
          ref={videoRef}
          className="hero-video h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroMedia.posterSrc}
          aria-hidden="true"
        >
          <source media="(max-width: 720px)" src={heroMedia.mobileSrc} type="video/mp4" />
          <source src={heroMedia.desktopSrc} type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/55" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col justify-end px-4 pb-8 pt-28 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-6xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase text-signal">Director / Editor</p>
          <h1
            aria-label="Nathan Velasquez"
            className="font-display font-black uppercase leading-[0.82] text-bone"
          >
            <span className="block text-[16vw] sm:text-[15vw] lg:text-[12vw]">Nathan</span>
            <span className="block text-[12vw] sm:text-[15vw] lg:text-[12vw]">Velasquez</span>
          </h1>
        </motion.div>

        <div className="grid gap-8 border-t border-bone/15 pt-6 md:grid-cols-[1fr_auto] md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.65 }}
            className="max-w-2xl text-balance text-2xl font-semibold leading-tight text-bone sm:text-3xl"
          >
            Director and editor creating sharp cinematic work from real locations, small crews, and strong ideas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.65 }}
            className="flex flex-wrap gap-3 md:justify-end"
          >
            <a href="#reel" className="inline-flex items-center gap-2 bg-bone px-4 py-3 text-sm font-black text-ink transition-colors hover:bg-signal">
              <Play size={17} fill="currentColor" strokeWidth={0} />
              Watch Reel
            </a>
            <a
              href="/book"
              className="inline-flex items-center gap-2 border border-bone/25 px-4 py-3 text-sm font-black text-bone transition-colors hover:border-bone"
            >
              Start a Project
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </a>
          </motion.div>
        </div>

        <a href="#selected-work" className="mt-10 inline-flex w-fit items-center gap-2 text-sm text-bone/60 transition-colors hover:text-bone">
          Selected work
          <ArrowDown size={16} strokeWidth={1.8} />
        </a>
      </div>
    </section>
  );
}
