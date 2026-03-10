"use client";

import { useEffect, useState, type RefObject } from "react";

type UseElementInViewportOptions = {
  initialValue?: boolean;
  threshold?: number;
};

/**
 * Tracks whether a DOM element is in the viewport.
 */
export function useElementInViewport<T extends Element>(
  ref: RefObject<T | null>,
  options: UseElementInViewportOptions = {},
) {
  const { initialValue = false, threshold = 0 } = options;
  const [isInViewport, setIsInViewport] = useState(initialValue);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        setIsInViewport(entry.isIntersecting);
      },
      { threshold },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);

  return isInViewport;
}
