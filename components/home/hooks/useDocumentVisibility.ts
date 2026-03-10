"use client";

import { useEffect, useState } from "react";

type UseDocumentVisibilityOptions = {
  initialVisible?: boolean;
};

/**
 * Tracks the tab visibility state (`true` when the page is visible).
 */
export function useDocumentVisibility(
  options: UseDocumentVisibilityOptions = {},
) {
  const { initialVisible = true } = options;
  const [isVisible, setIsVisible] = useState(initialVisible);

  useEffect(() => {
    const syncVisibility = () => {
      setIsVisible(!document.hidden);
    };

    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);

    return () => {
      document.removeEventListener("visibilitychange", syncVisibility);
    };
  }, []);

  return isVisible;
}
