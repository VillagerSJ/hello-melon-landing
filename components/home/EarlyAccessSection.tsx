import Image from "next/image";
import { HOME_COPY } from "./content";

export default function EarlyAccessSection() {
  return (
    <section className="relative bg-melon-neutral-soft px-[clamp(12px,4vw,24px)] pb-[clamp(120px,15vw,186px)] pt-[clamp(22px,4vw,44px)] md:px-12 lg:px-[110px]">
      <div className="mx-auto w-full max-w-[1760px]">
        <div className="relative mx-auto w-full max-w-[1560px]">
          <Image
            src="/assets/early_access/butterfly%20illustration.png"
            alt=""
            aria-hidden
            width={110}
            height={142}
            className="pointer-events-none absolute left-[clamp(-28px,-2vw,-12px)] top-[clamp(-24px,-1.7vw,-10px)] z-20 h-auto w-[clamp(46px,5.2vw,88px)]"
          />
          <Image
            src="/assets/early_access/plant%20your%20seed%20button.png"
            alt=""
            aria-hidden
            width={328}
            height={260}
            className="pointer-events-none absolute bottom-[clamp(-15px,-0.8vw,-2px)] right-[clamp(-28px,-1.9vw,-10px)] z-20 h-auto w-[clamp(112px,13.5vw,238px)]"
          />

          <div className="relative overflow-hidden rounded-[clamp(20px,3.5vw,34px)] bg-[linear-gradient(94.22deg,_#DFD27F_17.07%,_#F6DFA0_60.83%,_#EFCD6F_92.42%)]">
            <div className="relative z-10 grid min-h-[clamp(400px,45vw,440px)] grid-cols-1 items-center gap-[clamp(12px,2vw,24px)] px-[clamp(14px,2.8vw,34px)] lg:grid-cols-[minmax(300px,560px)_minmax(0,1fr)] lg:gap-[clamp(18px,2.5vw,34px)] lg:pr-[clamp(80px,8.4vw,132px)]">
              <div className="order-1 flex items-end justify-center lg:justify-start">
                <Image
                  src="/assets/early_access/illustration.png"
                  alt="Hello Melon mascot illustration"
                  width={545}
                  height={437}
                  sizes="(max-width: 1024px) min(84vw, 440px), 545px"
                  className="h-auto w-[min(100%,545px)] pt-[20px]"
                />
              </div>

              <div className="order-2 mx-auto max-w-[760px] text-center lg:mx-0 lg:text-left">
                <h2 className="font-solway text-[clamp(34px,4.6vw,50px)] font-normal leading-[clamp(46px,6.2vw,69px)] tracking-[-0.01em] text-melon-text">
                  {HOME_COPY.earlyAccessTitle}
                </h2>
                <p className="mt-[clamp(6px,1vw,10px)] max-w-[720px] font-dosis text-[clamp(22px,2.4vw,30px)] font-normal leading-[clamp(33px,3.2vw,46px)] tracking-[0em] text-melon-text">
                  {HOME_COPY.earlyAccessBody}
                </p>

                <button
                  type="button"
                  aria-label={HOME_COPY.earlyAccessCtaLabel}
                  className="mt-[clamp(12px,1.8vw,20px)] inline-flex appearance-none border-0 bg-transparent p-0"
                >
                  <span className="relative block w-[clamp(154px,14.5vw,232px)]">
                    <Image
                      src="/assets/early_access/planttheseed.svg"
                      alt=""
                      width={281}
                      height={68}
                      className="w-full h-auto"
                    />
                    <span className="absolute inset-0 flex items-center justify-center font-solway text-[18px] font-bold leading-none tracking-[0.01em] text-melon-cream">
                      {HOME_COPY.earlyAccessCtaLabel}
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[clamp(86px,10vw,136px)] text-melon-rose-footer">
        <svg
          width="1920"
          height="731"
          viewBox="0 0 1920 731"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1685.84 36.2911C1043.56 174.371 168.004 93.8242 -198.992 36.291L-218 732H1921.93C2174.04 159.283 2328.13 -101.789 1685.84 36.2911Z"
            fill="#F08482"
          />
        </svg>
      </div>
    </section>
  );
}
