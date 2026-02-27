import Image from "next/image";
import PipMascotAnimation from "@/components/PipMascotAnimation";
import HeroCtaButton from "./HeroCtaButton";
import { HOME_COPY } from "./content";

export default function DesktopLandingSection() {
  return (
    <section className="hidden md:block">
      <header className="relative z-20 bg-[#CE6166] px-4 pb-10 pt-3 text-center text-[#fff3dd] sm:px-6 sm:pb-11 sm:pt-4 md:pb-12">
        <p className="font-solway text-[22px] font-bold leading-[27px]">
          {HOME_COPY.welcomeTitle}
        </p>
        <p className="font-solway mt-[2px] text-[22px] font-normal leading-[27px]">
          {HOME_COPY.welcomeSubtitle}
        </p>

        <div className="pointer-events-none absolute left-1/2 top-full z-30 w-full -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6">
          <p className="melon-ribbon mx-auto font-dosis text-[22px] font-semibold leading-[24px] text-[#413A29]">
            {HOME_COPY.ribbonText}
          </p>
        </div>
      </header>

      <section className="relative min-h-[560px] pt-8 sm:min-h-[620px] sm:pt-10 md:min-h-[700px] md:pt-14 lg:min-h-[840px] lg:pt-[122px]">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero-bg.png"
            alt=""
            fill
            priority
            className="object-fill object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#efe4cc]/86 via-[#efe4cc]/57 to-transparent" />
          <div className="absolute inset-0 bg-[#efe4cc]/8" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1760px] flex-col gap-10 px-6 pb-24 sm:px-8 md:px-12 lg:flex-row lg:items-center lg:justify-start lg:gap-[22px] lg:px-[110px] lg:pb-[132px]">
          <div className="max-w-[640px]">
            <h1 className="font-solway text-[48px] font-light leading-[0.95] tracking-[-0.01em] text-[#413A29] sm:text-[56px] md:text-[64px] lg:text-[74px] lg:leading-[73px]">
              <span className="block">{HOME_COPY.heroLineOne}</span>
              <span className="block">{HOME_COPY.heroLineTwo}</span>
            </h1>

            <p className="mt-4 max-w-[620px] font-dosis text-[20px] leading-[1.35] text-[#413A29] sm:mt-5 sm:text-[22px] md:text-[24px] md:leading-[1.38] lg:mt-6 lg:text-[30px] lg:leading-[40px]">
              {HOME_COPY.heroDescription}
            </p>

            <HeroCtaButton
              buttonClassName="hero-hanging-cta-button mt-6 inline-flex max-w-full items-center justify-start sm:mt-7 lg:mt-8"
              plaqueClassName="w-[clamp(330px,34vw,640px)]"
            />
          </div>

          <div className="mx-auto w-full max-w-[740px] lg:flex lg:justify-start">
            <PipMascotAnimation
              alt="Pip mascot"
              className="h-auto w-[clamp(360px,40.5vw,700px)]"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[72px] text-[#efe4cc] sm:h-[82px] md:h-[94px] lg:h-[108px]">
          <svg
            
            viewBox="0 0 1920 1343"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
