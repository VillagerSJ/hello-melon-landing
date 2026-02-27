import Image from "next/image";
import PipMascotAnimation from "@/components/PipMascotAnimation";
import HeroCtaButton from "./HeroCtaButton";
import { HOME_COPY } from "./content";

export default function MobileLandingSection() {
  return (
    <section className="mx-auto w-full overflow-hidden bg-[#efe4cc] md:hidden">
      <header className="bg-[#CE6166] px-[clamp(14px,4.6vw,20px)] pb-[clamp(16px,4vw,22px)] pt-[clamp(12px,3.6vw,18px)] text-center text-[#fff3dd]">
        <p className="font-solway text-[clamp(17px,5.2vw,21px)] font-bold leading-[1.2]">
          {HOME_COPY.welcomeTitle}
        </p>
        <p className="font-solway mt-[2px] text-[clamp(16px,4.8vw,20px)] font-normal leading-[1.2]">
          {HOME_COPY.welcomeSubtitle}
        </p>
      </header>

      <section className="relative overflow-hidden px-[clamp(12px,4vw,18px)] pb-[clamp(88px,24vw,118px)] pt-[clamp(22px,6.8vw,38px)]">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero-bg.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#efe4cc]/78 via-[#efe4cc]/45 to-[#efe4cc]/62" />
          <div className="absolute inset-0 bg-[#efe4cc]/6" />
        </div>

        <div className="relative z-10 mx-auto max-w-[min(92vw,360px)] text-center">
          <h1 className="font-solway text-[clamp(39px,11.5vw,54px)] font-light leading-[0.95] tracking-[-0.01em] text-[#413A29]">
            <span className="block">{HOME_COPY.heroLineOne}</span>
            <span className="block">{HOME_COPY.heroLineTwo}</span>
          </h1>

          <p className="mt-[clamp(14px,4vw,22px)] font-dosis text-[clamp(17px,4.8vw,21px)] leading-[1.34] text-[#413A29]">
            {HOME_COPY.heroDescription}
          </p>

          <HeroCtaButton
            buttonClassName="hero-hanging-cta-button mt-[clamp(20px,6.5vw,30px)] block w-full max-w-[min(84vw,320px)] mx-auto"
            plaqueClassName="w-full"
          />

          <div className="mt-[clamp(28px,8vw,42px)] rounded-[clamp(16px,4.6vw,22px)] px-[clamp(10px,3vw,14px)] py-[clamp(18px,5.6vw,26px)]">
            <PipMascotAnimation
              alt="Pip mascot"
              className="mx-auto h-auto w-[clamp(170px,58vw,250px)] max-w-full"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[clamp(72px,20vw,96px)] text-[#F9EED9]">
          <svg
            viewBox="0 0 420 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <path d="M0 24C131 88 287 88 420 24V90H0V24Z" fill="currentColor" />
          </svg>
        </div>
      </section>
    </section>
  );
}
