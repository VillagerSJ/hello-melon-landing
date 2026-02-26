"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const FRAME_SOURCES = [
  "/assets/mascot-pip-frame1.png",
  "/assets/mascot-pip-frame2.png",
  "/assets/mascot-pip-frame3.png",
  "/assets/mascot-pip-frame5.png",
  "/assets/mascot-pip-frame6.png",
  "/assets/mascot-pip-frame7.png",
  "/assets/mascot-pip-frame8.png",
  "/assets/mascot-pip-frame9.png",
  "/assets/mascot-pip-frame8.png",
  "/assets/mascot-pip-frame7.png",
  "/assets/mascot-pip-frame6.png",
  "/assets/mascot-pip-frame5.png",
  "/assets/mascot-pip-frame3.png",
  "/assets/mascot-pip-frame2.png"
];

type PipMascotAnimationProps = {
  alt?: string;
  className?: string;
  frameDurationMs?: number;
};

export default function PipMascotAnimation({
  alt = "Pip mascot",
  className = "",
  frameDurationMs = 100
}: PipMascotAnimationProps) {
  const [frameIndex, setFrameIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % FRAME_SOURCES.length);
    }, frameDurationMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [frameDurationMs, reducedMotion]);

  const src = reducedMotion
    ? "/assets/mascot-pip.png"
    : FRAME_SOURCES[frameIndex];

  return (
    <Image
      src={src}
      alt={alt}
      width={650}
      height={667}
      priority
      className={className}
    />
  );
}
