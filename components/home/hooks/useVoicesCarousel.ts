"use client";

import { useCallback, useMemo, useState } from "react";

type UseVoicesCarouselArgs<T> = {
  items: readonly T[];
  visibleCount: number;
};

export function useVoicesCarousel<T>({
  items,
  visibleCount
}: UseVoicesCarouselArgs<T>) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = items.length;
  const hasItems = totalItems > 0;

  const goNext = useCallback(() => {
    if (!hasItems) {
      return;
    }

    setActiveIndex((previousIndex) => (previousIndex + 1) % totalItems);
  }, [hasItems, totalItems]);

  const goPrevious = useCallback(() => {
    if (!hasItems) {
      return;
    }

    setActiveIndex((previousIndex) => (previousIndex - 1 + totalItems) % totalItems);
  }, [hasItems, totalItems]);

  const visibleItems = useMemo(
    () => {
      if (!hasItems) {
        return [] as T[];
      }

      return Array.from({ length: visibleCount }, (_, offset) => {
        const itemIndex = (activeIndex + offset) % totalItems;
        return items[itemIndex]!;
      });
    },
    [activeIndex, hasItems, items, totalItems, visibleCount]
  );

  return {
    activeIndex,
    visibleItems,
    goNext,
    goPrevious,
    setActiveIndex
  };
}
