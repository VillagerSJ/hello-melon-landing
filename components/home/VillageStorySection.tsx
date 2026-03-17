import Image from "next/image";
import { HOME_COPY } from "./content";

export default function VillageStorySection() {
  return (
    <section className="relative bg-melon-rose-soft px-[clamp(12px,4vw,24px)] pb-[clamp(92px,13vw,150px)] pt-[clamp(58px,8.5vw,112px)] md:px-12 lg:px-[110px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 -translate-y-[96%] text-melon-rose-soft">
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
            stroke="#FAD4CB"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-[1760px]">
        <div className="mx-auto grid w-full max-w-[1560px] grid-cols-1 items-center gap-[clamp(28px,5.5vw,72px)] lg:grid-cols-[minmax(0,1.24fr)_minmax(340px,465px)]">
          <article className="mx-auto w-full max-w-[840px] lg:mx-0">
            <h2 className="text-center font-solway text-[clamp(34px,4.8vw,50px)] font-normal leading-[clamp(46px,6.6vw,69px)] tracking-[-0.01em] text-melon-text lg:text-left">
              {HOME_COPY.villageStoryTitle}
            </h2>

            <div className="mt-[clamp(10px,1.9vw,18px)] space-y-[clamp(16px,2.5vw,24px)] text-melon-text">
              {HOME_COPY.villageStoryParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-dosis text-[clamp(20px,2.3vw,30px)] font-normal leading-[clamp(30px,3.2vw,43px)] tracking-[0em]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="mt-[clamp(8px,1.8vw,14px)] font-solway text-[clamp(35px,4vw,50px)] font-bold leading-[clamp(42px,5.1vw,62px)] tracking-[-0.01em] text-melon-rose">
              {HOME_COPY.villageStoryEmphasis}
            </p>
          </article>

          <aside className="relative mx-auto w-full max-w-[465px]">
            <div className="relative mx-auto rounded-[36px] border-[5px] border-melon-card-border bg-melon-warm-sand px-[clamp(18px,2.6vw,32px)] py-[clamp(18px,2.8vw,32px)]">
              <Image
                src="/assets/HelloMelon_Illustration_avatar.png"
                alt="Sanjé avatar illustration"
                width={381}
                height={547}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                sizes="(max-width: 1024px) min(72vw, 320px), 315px"
                className="mx-auto h-auto w-[min(100%,315px)]"
              />
            </div>

            <Image
              src="/assets/smallstar.svg"
              alt=""
              aria-hidden
              width={16}
              height={28}
              className="pointer-events-none absolute left-[-2%] top-[1%] h-auto w-[clamp(12px,1.4vw,16px)]"
            />
            <Image
              src="/assets/bigstar.svg"
              alt=""
              aria-hidden
              width={39}
              height={70}
              className="pointer-events-none absolute left-[4%] top-[-5%] h-auto w-[clamp(24px,2.6vw,39px)]"
            />
            <Image
              src="/assets/bigstar.svg"
              alt=""
              aria-hidden
              width={39}
              height={70}
              className="pointer-events-none absolute bottom-[-7%] right-[-1%] h-auto w-[clamp(24px,2.6vw,39px)] rotate-180"
            />
            <Image
              src="/assets/smallstar.svg"
              alt=""
              aria-hidden
              width={16}
              height={28}
              className="pointer-events-none absolute bottom-[1%] right-[8%] h-auto w-[clamp(12px,1.4vw,16px)] rotate-180"
            />
          </aside>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[clamp(72px,10vw,124px)] text-melon-neutral-soft">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-full w-full">
          <path d="M0 14C320 86 1120 86 1440 14V120H0V14Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
