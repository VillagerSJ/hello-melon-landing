"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { HOME_COPY } from "./content";

export default function VoicesEarlyVillagersSection() {
  const totalCards = HOME_COPY.voicesCards.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const stripRef = useRef<HTMLDivElement | null>(null);
  const stripCircleRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1180px)");

    const syncVisibleCards = () => {
      setVisibleCards(mediaQuery.matches ? 2 : 1);
    };

    syncVisibleCards();
    mediaQuery.addEventListener("change", syncVisibleCards);

    return () => {
      mediaQuery.removeEventListener("change", syncVisibleCards);
    };
  }, []);

  useEffect(() => {
    let frameId = 0;
    let previousTime = 0;
    let distanceTravelled = 0;
    const speedPxPerSecond = 200;

    const animateStripCircle = (currentTime: number) => {
      const stripNode = stripRef.current;
      const circleNode = stripCircleRef.current;

      if (!stripNode || !circleNode) {
        frameId = window.requestAnimationFrame(animateStripCircle);
        return;
      }

      if (!previousTime) {
        previousTime = currentTime;
      }

      const deltaSeconds = (currentTime - previousTime) / 1000;
      previousTime = currentTime;

      const stripWidth = stripNode.clientWidth;
      const circleSize = circleNode.offsetWidth;
      const sideInset = Math.max(8, stripWidth * 0.01);
      const rightStopGap = 10;
      const travelRange = Math.max(0, stripWidth - sideInset * 2 - circleSize - rightStopGap);

      distanceTravelled += speedPxPerSecond * deltaSeconds;

      if (distanceTravelled > travelRange) {
        distanceTravelled = 0;
      }

      circleNode.style.left = `${sideInset + distanceTravelled}px`;
      circleNode.style.transform = "translateY(-50%)";

      frameId = window.requestAnimationFrame(animateStripCircle);
    };

    frameId = window.requestAnimationFrame(animateStripCircle);

    const handleResize = () => {
      previousTime = 0;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const shownCards = useMemo(
    () =>
      Array.from({ length: visibleCards }, (_, offset) => {
        const cardIndex = (activeIndex + offset) % totalCards;
        return HOME_COPY.voicesCards[cardIndex];
      }),
    [activeIndex, totalCards, visibleCards],
  );
  const activeCard = HOME_COPY.voicesCards[activeIndex];

  const goNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const goPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  return (
    <section className="relative bg-[#F9EED9] px-[clamp(12px,4vw,24px)] pb-[88px] pt-[48px] md:px-12 md:pb-[clamp(54px,8vw,88px)] md:pt-[clamp(60px,9vw,96px)] lg:px-[110px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -translate-y-[96%] text-[#F9EED9]">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="h-[clamp(28px,5vw,56px)] w-full"
        >
          <path
            d="M0 88C80 40 160 40 240 88C320 136 400 136 480 88C560 40 640 40 720 88C800 136 880 136 960 88C1040 40 1120 40 1200 88C1280 136 1360 136 1440 88V120H0V88Z"
            fill="currentColor"
          />
          <path
            d="M0 88C80 40 160 40 240 88C320 136 400 136 480 88C560 40 640 40 720 88C800 136 880 136 960 88C1040 40 1120 40 1200 88C1280 136 1360 136 1440 88"
            fill="none"
            stroke="#F9EED9"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-[1760px]">
        <header className="text-center">
          <h2 className="font-solway text-[40.92px] font-light leading-[100%] tracking-[-0.01em] text-[#413A29] md:text-[clamp(34px,5vw,50px)] md:leading-[clamp(44px,7vw,69px)]">
            {HOME_COPY.voicesTitle}
          </h2>
        </header>

        <div className="relative mx-auto mt-[clamp(24px,4.2vw,44px)] w-full max-w-[1188px] px-0 md:px-[66px]">
          <div className="mx-auto w-full max-w-[360px] md:hidden">
            <article className="mx-auto w-full rounded-[28px] bg-[#FAD4CB] px-[18px] pb-[24px] pt-[16px] text-center">
              <div className="mx-auto w-full max-w-[320px] rounded-[22px] bg-[#FAD4CB] px-[10px] py-[14px]">
                <Image
                  src={activeCard.avatarSrc}
                  alt={activeCard.avatarAlt}
                  width={250}
                  height={260}
                  className="mx-auto h-auto w-[min(100%,162px)]"
                />
              </div>

              <p className="mx-auto mt-[16px] max-w-[300px] font-solway text-[18px] font-medium leading-[24px] tracking-[-0.01em] text-[#413A29]">
                {activeCard.quote}
              </p>
              <p className="mt-[10px] font-solway text-[18px] font-bold leading-[24px] tracking-[-0.01em] text-[#413A29]">
                {activeCard.ageLabel}
              </p>
            </article>

            <div className="mt-[14px] flex items-center justify-between px-[6px]">
              <button
                type="button"
                aria-label="Previous voices"
                onClick={goPrevious}
                className="inline-flex h-[40px] w-[48px] items-center justify-center rounded-[10px] bg-[#B3A758] shadow-[0_6px_10px_rgba(0,0,0,0.12)] transition-colors hover:bg-[#A79C4F]"
              >
                <Image
                  src="/assets/eva_arrow-back-fill.svg"
                  alt=""
                  width={49}
                  height={44}
                  className="h-auto w-[20px]"
                />
              </button>

              <div className="flex items-center justify-center gap-2">
                {HOME_COPY.voicesCards.map((voiceCard, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={`mobile-dot-${voiceCard.id}`}
                      type="button"
                      aria-label={`Go to voice ${index + 1}`}
                      onClick={() => setActiveIndex(index)}
                      className={`rounded-full transition-colors ${
                        isActive
                          ? "h-[10px] w-[44px] bg-[#413A29]"
                          : "h-[10px] w-[10px] bg-[#B9B9B9] hover:bg-[#9F9F9F]"
                      }`}
                    />
                  );
                })}
              </div>

              <button
                type="button"
                aria-label="Next voices"
                onClick={goNext}
                className="inline-flex h-[40px] w-[48px] items-center justify-center rounded-[10px] bg-[#B3A758] shadow-[0_6px_10px_rgba(0,0,0,0.12)] transition-colors hover:bg-[#A79C4F]"
              >
                <Image
                  src="/assets/eva_arrow-farword-fill.svg"
                  alt=""
                  width={49}
                  height={44}
                  className="h-auto w-[20px]"
                />
              </button>
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous voices"
            onClick={goPrevious}
            className="absolute left-[10px] top-[44%] z-20 hidden h-[72.93px] w-[90.5px] -translate-y-1/2 items-center justify-center rounded-[12px] bg-[#B3A758] shadow-[0_10px_18px_rgba(0,0,0,0.16)] transition-colors hover:bg-[#A79C4F] md:flex"
          >
            <Image
              src="/assets/eva_arrow-back-fill.svg"
              alt=""
              width={49}
              height={44}
              className="h-auto w-[34px]"
            />
          </button>

          <button
            type="button"
            aria-label="Next voices"
            onClick={goNext}
            className="absolute right-[10px] top-[44%] z-20 hidden h-[72.93px] w-[90.5px] -translate-y-1/2 items-center justify-center rounded-[12px] bg-[#B3A758] shadow-[0_10px_18px_rgba(0,0,0,0.16)] transition-colors hover:bg-[#A79C4F] md:flex"
          >
            <Image
              src="/assets/eva_arrow-farword-fill.svg"
              alt=""
              width={49}
              height={44}
              className="h-auto w-[34px]"
            />
          </button>

          <div className="hidden grid-cols-1 gap-[clamp(14px,1.8vw,24px)] md:grid md:grid-cols-2">
            {shownCards.map((card) => (
              <article
                key={`${card.id}-${activeIndex}`}
                className="mx-auto h-[475px] w-full max-w-[521.746px] rounded-[45.24px] border-[4px] border-[#F7F3EC] bg-[#FAD4CB] px-[clamp(18px,2.4vw,30px)] pb-[clamp(20px,2.8vw,34px)] pt-[clamp(14px,2vw,24px)] text-center lg:w-[521.746px]"
              >
                <Image
                  src={card.avatarSrc}
                  alt={card.avatarAlt}
                  width={250}
                  height={260}
                  className="mx-auto h-auto w-[clamp(175px,21vw,250px)]"
                />

                <p className="mx-auto mt-[clamp(4px,0.9vw,8px)] max-w-[380px] font-solway text-[clamp(22px,2.3vw,26px)] font-medium leading-[clamp(26px,2.9vw,31px)] tracking-[-0.01em] text-[#413A29]">
                  {card.quote}
                </p>
                <p className="mt-[clamp(4px,0.9vw,8px)] font-solway text-[clamp(23px,2.4vw,27.14px)] font-bold leading-[clamp(29px,3.5vw,39.21px)] tracking-[-0.01em] text-[#CE6166]">
                  {card.ageLabel}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-[clamp(18px,2.6vw,30px)] hidden items-center justify-center gap-2 md:flex">
          {HOME_COPY.voicesCards.map((voiceCard, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={voiceCard.id}
                type="button"
                aria-label={`Go to voice ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`rounded-full transition-colors ${
                  isActive
                    ? "h-[10px] w-[34px] bg-[#B5A64D]"
                    : "h-[10px] w-[10px] bg-[#CFCFCF] hover:bg-[#BDBDBD]"
                }`}
              />
            );
          })}
        </div>

        <button
          type="button"
          aria-label={HOME_COPY.joinWaitlistLabel}
          className="mx-auto mt-[20px] block w-[210px] appearance-none border-0 bg-transparent p-0 md:mt-[clamp(24px,3.4vw,40px)] md:w-[clamp(156px,19vw,248px)]"
        >
          <span className="relative block w-full">
            <Image
              src="/assets/waiting-button.svg"
              alt=""
              width={1244}
              height={302}
              className="w-full h-auto"
            />
            <span className="absolute inset-0 flex items-center justify-center font-solway text-[20px] font-medium leading-[24px] tracking-[0em] text-[#fff7ef] md:text-[clamp(16px,2.2vw,25px)] md:leading-[clamp(19px,2.7vw,29.68px)]">
              {HOME_COPY.joinWaitlistLabel}
            </span>
          </span>
        </button>

        <div
          ref={stripRef}
          className="relative mx-auto mt-[18px] w-full max-w-[min(94vw,920px)] md:mt-[clamp(20px,3vw,34px)]"
        >
          <Image
            src="/assets/Rectangle-strip.svg"
            alt=""
            width={1267}
            height={82}
            className="w-full h-auto"
          />
          <span
            ref={stripCircleRef}
            className="pointer-events-none absolute top-1/2 h-[24px] w-[24px] -translate-y-1/2 rounded-full bg-[#EA7C80] transition-transform duration-100 md:h-[clamp(34px,4.5vw,44px)] md:w-[clamp(34px,4.5vw,44px)]"
            style={{
              left: "8px",
              top: "100%",
              transform: "translateY(-50%) rotate(0deg)",
            }}
          />
          <p className="absolute inset-0 flex items-center justify-center px-[20px] text-center font-dosis text-[14px] font-semibold leading-[18px] tracking-[0em] text-[#fff7ef] md:px-[clamp(30px,5vw,84px)] md:text-[clamp(12px,2.2vw,22px)] md:font-medium md:leading-[clamp(20px,4.2vw,40px)]">
            {HOME_COPY.voicesStripText}
          </p>
          <Image
            src="/assets/flower.png"
            alt=""
            width={36}
            height={37}
            className="absolute right-[10px] top-[26%] h-[20px] w-auto -translate-y-1/2 md:right-[clamp(8px,1.3vw,16px)] md:top-[20%] md:h-[clamp(20px,2.1vw,30px)]"
          />
        </div>
      </div>
    </section>
  );
}
