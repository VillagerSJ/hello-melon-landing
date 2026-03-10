"use client";

import { useCallback, useSyncExternalStore } from "react";

type UseMediaQueryOptions = {
  initialValue?: boolean;
};

/**
 * Returns whether the provided media query currently matches.
 */
export function useMediaQuery(
  query: string,
  options: UseMediaQueryOptions = {},
) {
  const { initialValue = false } = options;

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      if (typeof window === "undefined") {
        return () => undefined;
      }

      const mediaQueryList = window.matchMedia(query);
      mediaQueryList.addEventListener("change", onStoreChange);

      return () => {
        mediaQueryList.removeEventListener("change", onStoreChange);
      };
    },
    [query],
  );

  const getSnapshot = useCallback(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    return window.matchMedia(query).matches;
  }, [initialValue, query]);

  const getServerSnapshot = useCallback(() => initialValue, [initialValue]);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
