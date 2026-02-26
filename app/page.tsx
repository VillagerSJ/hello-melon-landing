import Image from "next/image";
import PipMascotAnimation from "@/components/PipMascotAnimation";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#efe4cc]">
      <section className="relative mx-auto w-full max-w-[1920px] overflow-hidden bg-[#efe4cc]">
        <header className="relative z-20 bg-[#CE6166] px-4 pb-10 pt-3 text-center text-[#fff3dd] sm:px-6 sm:pb-11 sm:pt-4 md:pb-12">
          <p className="font-solway text-[14px] font-bold leading-[17px] sm:text-[17px] sm:leading-[20px] md:text-[22px] md:leading-[27px]">
            Welcome to Melon Village
          </p>
          <p className="font-solway mt-[2px] text-[14px] font-normal leading-[17px] sm:text-[17px] sm:leading-[20px] md:text-[22px] md:leading-[27px]">
            Where healthcare feels like home
          </p>

          <div className="pointer-events-none absolute left-1/2 top-full z-30 w-full -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6">
            <p className="melon-ribbon mx-auto font-dosis text-[11px] font-semibold leading-[14px] text-[#342f28] sm:text-[14px] sm:leading-[18px] md:text-[22px] md:leading-[24px]">
              A joyful new wellness world designed for warmth, trust, and gentle care.
            </p>
          </div>
        </header>

        <section className="relative min-h-[560px] pt-8 sm:min-h-[620px] sm:pt-10 md:min-h-[700px] md:pt-14 lg:min-h-[840px] lg:pt-[82px]">
          <div className="absolute inset-0">
            <Image
              src="/assets/hero-bg.png"
              alt=""
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#efe4cc]/86 via-[#efe4cc]/57 to-transparent" />
            <div className="absolute inset-0 bg-[#efe4cc]/8" />
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-[1520px] flex-col gap-10 px-6 pb-24 sm:px-8 md:px-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-[110px] lg:pb-[132px]">
            <div className="max-w-[640px]">
              <h1 className="font-solway text-[48px] font-light leading-[0.95] tracking-[-0.01em] text-[#3f382f] sm:text-[56px] md:text-[64px] lg:text-[74px] lg:leading-[73px]">
                <span className="block">This isn&apos;t a clinic.</span>
                <span className="block">It&apos;s a village.</span>
              </h1>

              <p className="mt-4 max-w-[620px] font-dosis text-[20px] leading-[1.35] text-[#3f3a32] sm:mt-5 sm:text-[22px] md:text-[24px] md:leading-[1.38] lg:mt-6 lg:text-[30px] lg:leading-[40px]">
                Welcome to Hello Melon, where every visit feels safe, every
                check-in feels personal, and every record lives in a world
                designed just for you. Healthcare, reimagined with empathy first.
              </p>

              <button
                type="button"
                aria-label="Plant your seed: Join the Founding Circle"
                className="mt-6 inline-flex max-w-full items-center justify-start sm:mt-7 lg:mt-8"
              >
                <Image
                  src="/assets/Plaque_Rectangle_L_Strapwith text.svg"
                  alt=""
                  width={640}
                  height={127}
                  priority
                  className="hero-hanging-cta h-auto w-[clamp(290px,33vw,640px)]"
                />
              </button>
            </div>

            <div className="mx-auto w-full max-w-[660px] lg:flex lg:justify-end">
              <PipMascotAnimation
                alt="Pip mascot"
                className="h-auto w-[clamp(250px,31vw,620px)]"
              />
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[66px] text-[#efe4cc] sm:h-[74px] md:h-[82px] lg:h-[92px]">
            <svg
              viewBox="0 0 1920 140"
              preserveAspectRatio="none"
              className="h-full w-full fill-current"
              aria-hidden="true"
            >
              <path d="M0 30C265 62 522 76 760 76C1008 76 1248 62 1489 39C1667 22 1812 7 1920 20V140H0V30Z" />
            </svg>
          </div>
        </section>
      </section>
    </main>
  );
}
