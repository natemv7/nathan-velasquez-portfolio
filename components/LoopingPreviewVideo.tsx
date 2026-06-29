"use client";

import { useEffect, useRef } from "react";

type LoopingPreviewVideoProps = {
  src: string;
  className?: string;
};

export function LoopingPreviewVideo({ src, className }: LoopingPreviewVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playPreview = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");

      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch(() => {
          // Some mobile browsers block autoplay in low-power or data-saver modes.
        });
      }
    };

    playPreview();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          playPreview();
        } else {
          video.pause();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(video);

    document.addEventListener("visibilitychange", playPreview);
    document.addEventListener("touchstart", playPreview, { passive: true });
    document.addEventListener("pointerdown", playPreview, { passive: true });

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", playPreview);
      document.removeEventListener("touchstart", playPreview);
      document.removeEventListener("pointerdown", playPreview);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      controls={false}
      disablePictureInPicture
      className={className}
      aria-hidden="true"
    />
  );
}
