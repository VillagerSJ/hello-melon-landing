"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FRAME_SOURCES = [
  "/assets/mascot-pip-frame1.png",
  "/assets/mascot-pip-frame2.png",
  "/assets/mascot-pip-frame3.png",
  "/assets/mascot-pip-frame4.png",
  "/assets/mascot-pip-frame5.png",
  "/assets/mascot-pip-frame6.png",
  "/assets/mascot-pip-frame7.png",
  "/assets/mascot-pip-frame8.png",
  "/assets/mascot-pip-frame7.png",
  "/assets/mascot-pip-frame6.png",
  "/assets/mascot-pip-frame5.png",
  "/assets/mascot-pip-frame4.png",
  "/assets/mascot-pip-frame3.png",
  "/assets/mascot-pip-frame2.png"
];
const UNIQUE_FRAME_SOURCES = [...new Set(FRAME_SOURCES)];
const TOTAL_FRAME_COUNT = UNIQUE_FRAME_SOURCES.length;
const PRELOAD_TIMEOUT_MS = 1200;

type PipMascotAnimationProps = {
  alt?: string;
  className?: string;
  frameDurationMs?: number;
  respectReducedMotion?: boolean;
};

export default function PipMascotAnimation({
  alt = "Pip mascot",
  className = "",
  frameDurationMs = 100,
  respectReducedMotion = false
}: PipMascotAnimationProps) {
  const [frameIndex, setFrameIndex] = useState(0);
  const [reducedMotionEnabled, setReducedMotionEnabled] = useState(false);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const hasStartedPreloadRef = useRef(false);

  useEffect(() => {
    if (!respectReducedMotion) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setReducedMotionEnabled(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, [respectReducedMotion]);

  useEffect(() => {
    if (hasStartedPreloadRef.current) {
      return;
    }

    hasStartedPreloadRef.current = true;

    let cancelled = false;
    const loadedInThisRun = new Set<string>();

    const markFrameReady = (frameSrc: string) => {
      if (cancelled || loadedInThisRun.has(frameSrc)) {
        return;
      }
      loadedInThisRun.add(frameSrc);
      if (loadedInThisRun.size >= TOTAL_FRAME_COUNT) {
        setIsPreloaded(true);
      }
    };

    const preloadTimeoutId = window.setTimeout(() => {
      if (!cancelled) {
        setIsPreloaded(true);
      }
    }, PRELOAD_TIMEOUT_MS);

    UNIQUE_FRAME_SOURCES.forEach((frameSrc) => {
      const image = new window.Image();
      image.onload = () => markFrameReady(frameSrc);
      image.onerror = () => markFrameReady(frameSrc);
      image.src = frameSrc;
    });

    return () => {
      cancelled = true;
      window.clearTimeout(preloadTimeoutId);
    };
  }, []);

  const shouldAnimate = isPreloaded && !(respectReducedMotion && reducedMotionEnabled);

  useEffect(() => {
    if (!shouldAnimate) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % FRAME_SOURCES.length);
    }, frameDurationMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [frameDurationMs, shouldAnimate]);

  const src = shouldAnimate ? FRAME_SOURCES[frameIndex] : "/assets/mascot-pip.png";

  return (
    <Image
      src={src}
      alt={alt}
      width={650}
      height={667}
      priority
      unoptimized
      className={className}
    />
  );
}
