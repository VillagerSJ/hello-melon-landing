"use client";

import { useEffect, useMemo, type RefObject } from "react";

const DEFAULT_LEFT_OFFSET = "8px";
const DEFAULT_CIRCLE_TRANSFORM = "translateY(-50%)";

const computeTravelRange = (stripWidth: number, circleSize: number) => {
  const sideInset = Math.max(8, stripWidth * 0.01);
  const rightStopGap = 10;

  return {
    sideInset,
    travelRange: Math.max(0, stripWidth - sideInset * 2 - circleSize - rightStopGap),
  };
};

type UseStripCircleAnimationArgs = {
  isActive: boolean;
  speedPxPerSecond: number;
  stripCircleRef: RefObject<HTMLSpanElement | null>;
  stripRef: RefObject<HTMLDivElement | null>;
  top: string;
};

/**
 * Animates a circle moving across a strip element from left to right in a loop.
 */
export function useStripCircleAnimation({
  isActive,
  speedPxPerSecond,
  stripCircleRef,
  stripRef,
  top,
}: UseStripCircleAnimationArgs) {
  useEffect(() => {
    let frameId = 0;
    let previousTime = 0;
    let distanceTravelled = 0;

    const positionCircle = (distance: number) => {
      const stripNode = stripRef.current;
      const circleNode = stripCircleRef.current;

      if (!stripNode || !circleNode) {
        return;
      }

      const stripWidth = stripNode.clientWidth;
      const circleSize = circleNode.offsetWidth;
      const { sideInset, travelRange } = computeTravelRange(stripWidth, circleSize);
      const xPosition = sideInset + Math.min(distance, travelRange);

      circleNode.style.left = `${xPosition}px`;
      circleNode.style.transform = DEFAULT_CIRCLE_TRANSFORM;
    };

    const animate = (currentTime: number) => {
      const stripNode = stripRef.current;
      const circleNode = stripCircleRef.current;

      if (!stripNode || !circleNode) {
        return;
      }

      if (previousTime === 0) {
        previousTime = currentTime;
      }

      const deltaSeconds = (currentTime - previousTime) / 1000;
      previousTime = currentTime;

      const stripWidth = stripNode.clientWidth;
      const circleSize = circleNode.offsetWidth;
      const { travelRange } = computeTravelRange(stripWidth, circleSize);

      distanceTravelled += speedPxPerSecond * deltaSeconds;

      if (distanceTravelled > travelRange) {
        distanceTravelled = 0;
      }

      positionCircle(distanceTravelled);
      frameId = window.requestAnimationFrame(animate);
    };

    const handleResize = () => {
      previousTime = 0;
      distanceTravelled = 0;
      positionCircle(0);
    };

    positionCircle(0);

    if (isActive) {
      frameId = window.requestAnimationFrame(animate);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [isActive, speedPxPerSecond, stripCircleRef, stripRef]);

  const circleStyle = useMemo(
    () => ({
      left: DEFAULT_LEFT_OFFSET,
      top,
      transform: DEFAULT_CIRCLE_TRANSFORM,
    }),
    [top],
  );

  return circleStyle;
}
