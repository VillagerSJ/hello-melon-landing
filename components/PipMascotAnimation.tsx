"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDocumentVisibility } from "@/components/home/hooks/useDocumentVisibility";
import { useElementInViewport } from "@/components/home/hooks/useElementInViewport";
import { useMediaQuery } from "@/components/home/hooks/useMediaQuery";

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
] as const;
const UNIQUE_FRAME_SOURCES = [...new Set(FRAME_SOURCES)];
const PRELOAD_TIMEOUT_MS = 1200;
const VIEWPORT_THRESHOLD = 0.15;

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
  respectReducedMotion = true
}: PipMascotAnimationProps) {
  const mascotRef = useRef<HTMLSpanElement | null>(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [isPreloaded, setIsPreloaded] = useState(false);

  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isPageVisible = useDocumentVisibility();
  const isInViewport = useElementInViewport(mascotRef, {
    initialValue: false,
    threshold: VIEWPORT_THRESHOLD
  });

  useEffect(() => {
    let cancelled = false;
    const loadedSources = new Set<string>();

    const markLoaded = (source: string) => {
      if (cancelled || loadedSources.has(source)) {
        return;
      }

      loadedSources.add(source);
      if (loadedSources.size >= UNIQUE_FRAME_SOURCES.length) {
        setIsPreloaded(true);
      }
    };

    const timeoutId = window.setTimeout(() => {
      if (!cancelled) {
        setIsPreloaded(true);
      }
    }, PRELOAD_TIMEOUT_MS);

    for (const source of UNIQUE_FRAME_SOURCES) {
      const image = new window.Image();
      image.onload = () => markLoaded(source);
      image.onerror = () => markLoaded(source);
      image.src = source;
    }

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, []);

  const shouldAnimate =
    isPreloaded &&
    isInViewport &&
    isPageVisible &&
    !(respectReducedMotion && prefersReducedMotion);

  useEffect(() => {
    if (!shouldAnimate) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setFrameIndex((previousFrame) => (previousFrame + 1) % FRAME_SOURCES.length);
    }, frameDurationMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [frameDurationMs, shouldAnimate]);

  const source = shouldAnimate
    ? (FRAME_SOURCES[frameIndex] ?? FRAME_SOURCES[0])
    : "/assets/mascot-pip.png";

  return (
    <span ref={mascotRef} className={`block ${className}`.trim()}>
      <Image
        src={source}
        alt={alt}
        width={650}
        height={667}
        unoptimized
        loading="lazy"
        className="h-auto w-full"
      />
    </span>
  );
}
