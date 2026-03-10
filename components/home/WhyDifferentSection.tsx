"use client";

import { useState } from "react";
import Image from "next/image";
import { HOME_COPY } from "./content";

export default function WhyDifferentSection() {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  return (
    <section className="bg-melon-neutral px-[clamp(12px,4vw,24px)] pb-[clamp(56px,8.8vw,96px)] pt-[clamp(54px,8vw,90px)] md:px-12 lg:px-[110px]">
      <div className="mx-auto w-full max-w-[1760px]">
        <header className="mx-auto max-w-[1240px] text-center">
          <h2 className="font-solway text-[36px] font-light leading-[1.08] tracking-[-0.01em] text-melon-text md:text-[50px] md:leading-[69px]">
            {HOME_COPY.whyDifferentTitle}
          </h2>
          <p className="mx-auto  max-w-[1120px] font-dosis text-[22px] font-normal leading-[1.25] text-melon-text md:text-[30px] md:leading-[40px]">
            {HOME_COPY.whyDifferentSubtitle}
          </p>
        </header>

        <div className="mx-auto mt-[clamp(24px,4.3vw,56px)] w-full max-w-[1560px]">
          <div className="grid grid-cols-1 justify-items-center gap-[clamp(16px,2vw,28px)] md:grid-cols-2 xl:grid-cols-4 xl:justify-items-stretch">
            {HOME_COPY.whyDifferentCards.map((card, index) => {
              const isSelected = selectedCardIndex === index;

              return (
                <button
                  key={card.title}
                  type="button"
                  className="group relative h-[377px] w-full max-w-[369px] cursor-pointer text-left"
                  onClick={() =>
                    setSelectedCardIndex((previousIndex) =>
                      previousIndex === index ? null : index
                    )
                  }
                >
                  <svg
                    aria-hidden
                    viewBox="0 0 369 377"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full"
                  >
                    <path
                      d="M19 3H337Q353 3 353 19Q366 188.5 353 358Q353 374 337 374H19Q3 374 3 358V19Q3 3 19 3Z"
                      fill="#FAD4CB"
                    />
                    <path
                      d="M19 3H337Q353 3 353 19Q366 188.5 353 358Q353 374 337 374H19Q3 374 3 358V19Q3 3 19 3Z"
                      fill="none"
                      stroke="#6E6330"
                      strokeWidth="6"
                      vectorEffect="non-scaling-stroke"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-opacity duration-200 group-focus-visible:opacity-100 group-hover:opacity-100 ${
                        isSelected ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </svg>

                  <div className="absolute left-[15px] top-[25px] z-10 flex h-[150px] w-[150px] items-center justify-center">
                    <div className="h-[120px] w-[120px] rounded-full border-[2px] border-melon-rose bg-white" />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <Image
                        src={card.iconSrc}
                        alt={card.iconAlt}
                        width={150}
                        height={150}
                        className="h-[150px] w-[150px] object-contain object-center"
                      />
                    </div>
                  </div>

                  <p className="relative z-10 px-[15px] pt-[188px] font-solway text-[32px] font-normal leading-[100%] tracking-[-0.01em] text-black">
                    {card.title}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
