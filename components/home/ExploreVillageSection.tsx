"use client";

import { useState } from "react";
import Image from "next/image";
import { HOME_COPY } from "./content";

export default function ExploreVillageSection() {
  const [activeSign, setActiveSign] = useState<"visit" | "mood" | "record" | null>(null);
  const [hoverSign, setHoverSign] = useState<"visit" | "mood" | "record" | null>(null);

  const activeInteraction = hoverSign ?? activeSign;

  return (
    <section className="relative bg-melon-ribbon px-[clamp(12px,4vw,24px)] pb-[clamp(56px,9vw,96px)] pt-[clamp(32px,6.5vw,56px)] md:px-12 lg:px-[110px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[clamp(110px,18vw,200px)] -translate-y-full text-[#F9EED9]"
      >
        <svg
          viewBox="0 0 1440 200"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M0,60 C300,120 700,180 1000,140 C1200,120 1350,80 1440,90 L1440,200 L0,200 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1760px]">
        <header className="mx-auto max-w-[860px] text-center">
          <h2 className="font-solway text-[clamp(34px,5.4vw,50px)] font-light leading-[1.08] tracking-[-0.01em] text-melon-rose">
            {HOME_COPY.exploreTitle}
          </h2>
          <p className="mt-[clamp(4px,1.2vw,10px)] font-dosis text-[clamp(18px,3vw,30px)] font-normal leading-[1.3] tracking-[0em] text-melon-text">
            {HOME_COPY.exploreSubtitle}
          </p>
        </header>

        <div className="relative mx-auto mt-[clamp(24px,4.5vw,46px)] w-full max-w-[1560px] overflow-hidden rounded-[clamp(24px,3.6vw,44px)]">
          <div className="flex min-h-[420px] flex-col items-center justify-center gap-10 bg-melon-neutral-soft px-6 py-10 text-center md:hidden">
            <p className="font-solway text-[28px] font-semibold text-melon-text">Visit Tree</p>
            <div className="h-[70px] w-[70px] rounded-full border-[6px] border-melon-rose/40 bg-melon-base" />
            <p className="font-solway text-[28px] font-semibold text-melon-text">Record House</p>
            <div className="h-[70px] w-[70px] rounded-full border-[6px] border-melon-rose/40 bg-melon-base" />
            <p className="font-solway text-[28px] font-semibold text-melon-text">Mood Meadows</p>
          </div>

          <div className="hidden md:block">
          <Image
            src="/assets/explore_village/background-bg.svg"
            alt="Explore the village illustration"
            width={2430}
            height={1575}
            sizes="(max-width: 640px) calc(100vw - 24px), (max-width: 1024px) calc(100vw - 64px), (max-width: 1700px) calc(100vw - 220px), 1560px"
            className="h-auto w-full"
          />

          <div className="absolute left-[31%] top-[44%] -translate-x-1/2 -translate-y-1/2">
            <button
              type="button"
              aria-pressed={activeSign === "visit"}
              className="group relative w-[clamp(66px,6.5vw,116px)] cursor-pointer overflow-visible border-0 bg-transparent p-0 text-left focus-visible:outline-none"
              onClick={() =>
                setActiveSign((previous) => (previous === "visit" ? null : "visit"))
              }
              onMouseEnter={() => setHoverSign("visit")}
              onMouseLeave={() => {
                setHoverSign(null);
                setActiveSign((previous) => (previous === "visit" ? null : previous));
              }}
              onFocus={() => setHoverSign("visit")}
              onBlur={() => {
                setHoverSign(null);
                setActiveSign((previous) => (previous === "visit" ? null : previous));
              }}
            >
              <span aria-hidden className="absolute left-0 top-0 h-[160%] w-full" />
              <div className="relative aspect-[117/84]">
                <Image
                  src="/assets/explore_village/visit-treewood plaques.svg"
                  alt="Visit tree sign"
                  width={117}
                  height={84}
                  className={`h-full w-full origin-center transition-transform duration-200 ease-out group-hover:scale-120 group-focus-visible:scale-120 ${
                    activeInteraction === "visit" ? "scale-120" : ""
                  }`}
                />
                <Image
                  src="/assets/explore_village/nail.svg"
                  alt=""
                  aria-hidden
                  width={14}
                  height={11}
                  className={`pointer-events-none absolute left-[43%] bottom-[-10%] z-10 w-[10%] -translate-x-1/2 transition-opacity duration-200 ease-out ${
                    activeInteraction === "visit" ? "opacity-0" : "opacity-100"
                  }`}
                />
              </div>
              <Image
                src="/assets/explore_village/visit-treewood plaques with  description.svg"
                alt=""
                aria-hidden
                width={132}
                height={103}
                className={`pointer-events-none absolute left-[41%] top-[154%] z-20 h-[123%] w-[113%] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ease-out ${
                  activeInteraction === "visit" ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          </div>

          <div className="absolute left-[51%] top-[25%] -translate-x-1/2 -translate-y-1/2">
            <button
              type="button"
              aria-pressed={activeSign === "mood"}
              className="group relative w-[clamp(74px,7.2vw,124px)] cursor-pointer overflow-visible border-0 bg-transparent p-0 text-left focus-visible:outline-none"
              onClick={() =>
                setActiveSign((previous) => (previous === "mood" ? null : "mood"))
              }
              onMouseEnter={() => setHoverSign("mood")}
              onMouseLeave={() => {
                setHoverSign(null);
                setActiveSign((previous) => (previous === "mood" ? null : previous));
              }}
              onFocus={() => setHoverSign("mood")}
              onBlur={() => {
                setHoverSign(null);
                setActiveSign((previous) => (previous === "mood" ? null : previous));
              }}
            >
              <span aria-hidden className="absolute left-0 top-0 h-[160%] w-full" />
              <div className="relative aspect-[119/66]">
                <Image
                  src="/assets/explore_village/mood-meadow-wood plaques.svg"
                  alt="Mood meadow sign"
                  width={119}
                  height={66}
                  className={`h-full w-full origin-center transition-transform duration-200 ease-out group-hover:scale-120 group-focus-visible:scale-120 ${
                    activeInteraction === "mood" ? "scale-120" : ""
                  }`}
                />
                <Image
                  src="/assets/explore_village/nail.svg"
                  alt=""
                  aria-hidden
                  width={14}
                  height={11}
                  className={`pointer-events-none absolute left-[43%] bottom-[-20%] z-10 w-[10%] -translate-x-1/2 transition-opacity duration-200 ease-out ${
                    activeInteraction === "mood" ? "opacity-0" : "opacity-100"
                  }`}
                />
                 <Image
                  src="/assets/explore_village/flower.svg"
                  alt=""
                  aria-hidden
                  width={14}
                  height={11}
                  className={`pointer-events-none absolute left-[85%] top-[82%] z-10 w-8.5 -translate-x-1/2 transition-opacity duration-200 ease-out`}
                />
              </div>
              <Image
                src="/assets/explore_village/mood-meadow-wood plaques with description.svg"
                alt=""
                aria-hidden
                width={125}
                height={98}
                className={`pointer-events-none absolute left-[41%] top-[179%]  z-20 h-[148%] w-[105%] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ease-out ${
                  activeInteraction === "mood" ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          </div>

          <div className="absolute left-[62%] top-[44%] -translate-x-1/2 -translate-y-1/2">
            <button
              type="button"
              aria-pressed={activeSign === "record"}
              className="group relative w-[clamp(66px,6.5vw,116px)] cursor-pointer overflow-visible border-0 bg-transparent p-0 text-left focus-visible:outline-none"
              onClick={() =>
                setActiveSign((previous) => (previous === "record" ? null : "record"))
              }
              onMouseEnter={() => setHoverSign("record")}
              onMouseLeave={() => {
                setHoverSign(null);
                setActiveSign((previous) => (previous === "record" ? null : previous));
              }}
              onFocus={() => setHoverSign("record")}
              onBlur={() => {
                setHoverSign(null);
                setActiveSign((previous) => (previous === "record" ? null : previous));
              }}
            >
              <span aria-hidden className="absolute left-0 top-0 h-[160%] w-full" />
              <div className="relative aspect-[115/86]">
                <Image
                  src="/assets/explore_village/record-house-wood plaques.svg"
                  alt="Record house sign"
                  width={115}
                  height={86}
                  className={`h-full w-full origin-center transition-transform duration-200 ease-out group-hover:scale-120 group-focus-visible:scale-120 ${
                    activeInteraction === "record" ? "scale-120" : ""
                  }`}
                />
                <Image
                  src="/assets/explore_village/nail.svg"
                  alt=""
                  aria-hidden
                  width={14}
                  height={11}
                  className={`pointer-events-none absolute left-[43%] bottom-[-20%] z-10 w-[10%] -translate-x-1/2 transition-opacity duration-200 ease-out ${
                    activeInteraction === "record" ? "opacity-0" : "opacity-100"
                  }`}
                />
              </div>
              <Image
                src="/assets/explore_village/record-house-wood plaques with description.svg"
                alt=""
                aria-hidden
                width={147}
                height={107}
                className={`pointer-events-none absolute left-[45%] top-[158%] z-20 h-[124%] w-[128%] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ease-out ${
                  activeInteraction === "record" ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
