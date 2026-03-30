"use client";

import Image from "next/image";
import { useRef } from "react";
import { HOME_COPY, VOICES_CARDS } from "./content";
import { useDocumentVisibility } from "./hooks/useDocumentVisibility";
import { useElementInViewport } from "./hooks/useElementInViewport";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { useStripCircleAnimation } from "./hooks/useStripCircleAnimation";
import { useVoicesCarousel } from "./hooks/useVoicesCarousel";
import JoinWaitlistButton from "./voices/JoinWaitlistButton";
import { DesktopVoiceCard, MobileVoiceCard } from "./voices/VoiceCards";
import VoiceDots from "./voices/VoiceDots";
import VoiceNavButton from "./voices/VoiceNavButton";
import VoicesStrip from "./voices/VoicesStrip";

const DESKTOP_CARDS_MEDIA_QUERY = "(min-width: 1180px)";
const REDUCED_MOTION_MEDIA_QUERY = "(prefers-reduced-motion: reduce)";
const STRIP_SPEED_PX_PER_SECOND = 200;
const STRIP_CIRCLE_TOP = "55%";

const MOBILE_DOT_ACTIVE_CLASS = "h-[10px] w-[44px] bg-melon-text";
const MOBILE_DOT_INACTIVE_CLASS = "h-[10px] w-[10px] bg-melon-dot hover:bg-melon-dot-hover";
const DESKTOP_DOT_ACTIVE_CLASS = "h-[10px] w-[34px] bg-melon-dot-active";
const DESKTOP_DOT_INACTIVE_CLASS =
  "h-[10px] w-[10px] bg-melon-dot-muted hover:bg-melon-dot-muted-hover";

export default function VoicesEarlyVillagersSection() {
  const stripRef = useRef<HTMLDivElement | null>(null);
  const stripCircleRef = useRef<HTMLSpanElement | null>(null);

  const isDesktopCardsLayout = useMediaQuery(DESKTOP_CARDS_MEDIA_QUERY);
  const prefersReducedMotion = useMediaQuery(REDUCED_MOTION_MEDIA_QUERY);
  const isPageVisible = useDocumentVisibility();

  const isStripInViewport = useElementInViewport(stripRef, {
    threshold: 0.15,
  });

  const shouldAnimateStrip = !prefersReducedMotion && isStripInViewport && isPageVisible;

  const circleStyle = useStripCircleAnimation({
    isActive: shouldAnimateStrip,
    speedPxPerSecond: STRIP_SPEED_PX_PER_SECOND,
    stripCircleRef,
    stripRef,
    top: STRIP_CIRCLE_TOP,
  });

  const visibleCards = isDesktopCardsLayout ? 2 : 1;
  const { activeIndex, visibleItems, goNext, goPrevious, setActiveIndex } = useVoicesCarousel({
    items: VOICES_CARDS,
    visibleCount: visibleCards
  });
  const activeCard = VOICES_CARDS[activeIndex] ?? VOICES_CARDS[0];

  if (!activeCard) {
    return null;
  }

  return (
    <section className="relative bg-melon-ribbon px-[clamp(12px,4vw,24px)] pb-[88px] pt-[48px] md:px-12 md:pb-[clamp(54px,8vw,88px)] md:pt-[clamp(60px,9vw,96px)] lg:px-[110px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -translate-y-[96%]">
        <div className="relative h-[clamp(40px,6vw,72px)] w-full">
          <Image
            src="/assets/voices-of-early-villagers-upper-wave.svg"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="object-fill"
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1760px]">
        <header className="text-center">
          <h2 className="font-solway text-[40.92px] font-light leading-[100%] tracking-[-0.01em] text-melon-text md:text-[clamp(34px,5vw,50px)] md:leading-[clamp(44px,7vw,69px)]">
            {HOME_COPY.voicesTitle}
          </h2>
        </header>

        <div className="relative mx-auto mt-[clamp(24px,4.2vw,44px)] w-full max-w-[1188px] px-0 md:px-[66px]">
          <div className="mx-auto w-full max-w-[360px] md:hidden">
            <MobileVoiceCard card={activeCard} />

            <div className="mt-[14px] flex items-center justify-between px-[6px]">
              <VoiceNavButton
                ariaLabel="Previous voices"
                direction="previous"
                onClick={goPrevious}
                className="inline-flex h-[40px] w-[48px] items-center justify-center rounded-[10px] bg-melon-olive shadow-[0_6px_10px_rgba(0,0,0,0.12)] transition-colors hover:bg-melon-olive-hover"
                iconClassName="h-auto w-[20px]"
              />

              <div className="flex items-center justify-center gap-2">
                <VoiceDots
                  cards={VOICES_CARDS}
                  activeIndex={activeIndex}
                  onSelect={setActiveIndex}
                  activeClassName={MOBILE_DOT_ACTIVE_CLASS}
                  inactiveClassName={MOBILE_DOT_INACTIVE_CLASS}
                />
              </div>

              <VoiceNavButton
                ariaLabel="Next voices"
                direction="next"
                onClick={goNext}
                className="inline-flex h-[40px] w-[48px] items-center justify-center rounded-[10px] bg-melon-olive shadow-[0_6px_10px_rgba(0,0,0,0.12)] transition-colors hover:bg-melon-olive-hover"
                iconClassName="h-auto w-[20px]"
              />
            </div>
          </div>

          <VoiceNavButton
            ariaLabel="Previous voices"
            direction="previous"
            onClick={goPrevious}
            className="absolute left-[10px] top-[44%] z-20 hidden h-[72.93px] w-[90.5px] -translate-y-1/2 items-center justify-center rounded-[12px] bg-melon-olive shadow-[0_10px_18px_rgba(0,0,0,0.16)] transition-colors hover:bg-melon-olive-hover md:flex"
            iconClassName="h-auto w-[34px]"
          />

          <VoiceNavButton
            ariaLabel="Next voices"
            direction="next"
            onClick={goNext}
            className="absolute right-[10px] top-[44%] z-20 hidden h-[72.93px] w-[90.5px] -translate-y-1/2 items-center justify-center rounded-[12px] bg-melon-olive shadow-[0_10px_18px_rgba(0,0,0,0.16)] transition-colors hover:bg-melon-olive-hover md:flex"
            iconClassName="h-auto w-[34px]"
          />

          <div className="hidden grid-cols-1 gap-[clamp(14px,1.8vw,24px)] md:grid md:grid-cols-2">
            {visibleItems.map((card, index) => (
              <DesktopVoiceCard key={`${card.id}-${activeIndex}-${index}`} card={card} />
            ))}
          </div>
        </div>

        <div className="mt-[clamp(18px,2.6vw,30px)] hidden items-center justify-center gap-2 md:flex">
          <VoiceDots
            cards={VOICES_CARDS}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            activeClassName={DESKTOP_DOT_ACTIVE_CLASS}
            inactiveClassName={DESKTOP_DOT_INACTIVE_CLASS}
          />
        </div>

        <JoinWaitlistButton label={HOME_COPY.joinWaitlistLabel} />

        <VoicesStrip
          stripText={HOME_COPY.voicesStripText}
          stripRef={stripRef}
          stripCircleRef={stripCircleRef}
          circleStyle={circleStyle}
        />
      </div>
    </section>
  );
}
