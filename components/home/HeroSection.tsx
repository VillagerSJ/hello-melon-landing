import Image from "next/image";
import PipMascotAnimation from "@/components/PipMascotAnimation";
import HeroCtaButton from "./HeroCtaButton";
import { HOME_COPY } from "./content";

export default function HeroSection() {
  return (
    <section className="relative mx-auto w-full overflow-hidden bg-melon-base">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="relative bg-melon-rose px-4 pb-4 pt-3 text-center text-melon-text-soft sm:px-6 sm:pb-5 sm:pt-4 md:pb-12">
          <p className="font-solway text-[clamp(17px,5.2vw,22px)] font-bold leading-[1.2]">
            {HOME_COPY.welcomeTitle}
          </p>
          <p className="mt-[2px] font-solway text-[clamp(16px,4.8vw,22px)] leading-[1.2]">
            {HOME_COPY.welcomeSubtitle}
          </p>

          <div className="pointer-events-none absolute left-1/2 top-full z-30 hidden w-full -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6 md:block">
            <p className="melon-ribbon mx-auto font-dosis text-[22px] font-semibold leading-[24px] text-melon-text">
              {HOME_COPY.ribbonText}
            </p>
          </div>
        </div>
      </header>

      <div aria-hidden className="h-[78px] sm:h-[86px] md:h-[108px] lg:h-[122px]" />

      <section className="hero-illusion relative min-h-[560px] px-[clamp(12px,4vw,24px)] pb-[clamp(88px,24vw,118px)] pt-[clamp(22px,6.8vw,42px)] md:px-12 md:pb-[120px] md:pt-[64px] lg:px-[110px] lg:pb-[132px] lg:pt-[122px]">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero-bg.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-illusion-bg object-cover object-center"
          />
          <div className="hero-illusion-glow absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-melon-base/86 via-melon-base/57 to-transparent" />
          <div className="absolute inset-0 bg-melon-base/8" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1760px] flex-col items-center gap-[clamp(20px,5vw,40px)] text-center lg:flex-row lg:items-center lg:justify-start lg:gap-[22px] lg:text-left">
          <div className="w-full max-w-[640px]">
            <h1 className="font-solway text-[clamp(39px,11.5vw,74px)] font-light leading-[0.95] tracking-[-0.01em] text-melon-text">
              <span className="block">{HOME_COPY.heroLineOne}</span>
              <span className="block">{HOME_COPY.heroLineTwo}</span>
            </h1>

            <p className="mt-[clamp(14px,4vw,22px)] max-w-[620px] font-dosis text-[clamp(17px,4.8vw,30px)] leading-[1.34] text-melon-text lg:leading-[40px]">
              {HOME_COPY.heroDescription}
            </p>

            <HeroCtaButton
              buttonClassName="hero-hanging-cta-button mt-[clamp(20px,6.5vw,30px)] inline-flex w-full max-w-[min(84vw,640px)] items-center justify-center lg:justify-start"
              plaqueClassName="w-full lg:w-[clamp(330px,34vw,640px)]"
            />
          </div>

          <div className="mx-auto w-full max-w-[740px] lg:flex lg:justify-start">
            <PipMascotAnimation
              alt="Pip mascot"
              className="mx-auto h-auto w-[clamp(170px,58vw,700px)] max-w-full"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[clamp(72px,20vw,108px)] text-melon-ribbon">
          <svg
            viewBox="0 0 420 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full md:hidden"
            preserveAspectRatio="none"
          >
            <path d="M0 24C131 88 287 88 420 24V90H0V24Z" fill="currentColor" />
          </svg>
          <svg
            viewBox="0 0 1920 1343"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden h-full w-full md:block"
            preserveAspectRatio="none"
          >
            <path
              d="M1709.53 9.3703C1067.35 124.335 191.94 57.272 -174.995 9.37024L-194 1343L1970.12 1343C2222.19 866.16 2351.7 -105.594 1709.53 9.3703Z"
              fill="#F9EED9"
            />
          </svg>
        </div>
      </section>
    </section>
  );
}
