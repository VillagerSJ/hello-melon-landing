import Image from "next/image";
import PipMascotAnimation from "@/components/PipMascotAnimation";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#efe4cc]">
      <section className="relative mx-auto w-full max-w-[1920px] overflow-hidden bg-[#efe4cc]">
        <section className="mx-auto min-h-screen w-full max-w-[420px] overflow-hidden bg-[#efe4cc] md:hidden">
          <header className="bg-[#CE6166] px-5 pb-5 pt-4 text-center text-[#fff3dd]">
            <p className="font-solway text-[20px] font-bold leading-[1.25]">
              Welcome to Melon Village
            </p>
            <p className="font-solway mt-[2px] text-[20px] font-normal leading-[1.25]">
              Where healthcare feels like home
            </p>
          </header>

          <section className="relative overflow-hidden px-4 pb-24 pt-9">
            <div className="absolute inset-0">
              <Image
                src="/assets/hero-bg.png"
                alt=""
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            <div className="relative z-10 mx-auto max-w-[340px] text-center">
              <h1 className="font-solway text-[50px] font-light leading-[0.95] tracking-[-0.01em] text-[#413A29]">
                <span className="block">This isn&apos;t a clinic.</span>
                <span className="block">It&apos;s a village.</span>
              </h1>

              <p className="mt-5 font-dosis text-[21px] leading-[1.34] text-[#413A29]">
                Welcome to Hello Melon, where every visit feels safe, every
                check-in feels personal, and every record lives in a world
                designed just for you. Healthcare, reimagined with empathy first.
              </p>

              <button
                type="button"
                aria-label="Plant your seed: Join the Founding Circle"
                className="hero-hanging-cta-button mt-7 w-full max-w-[320px]"
              >
                <span className="hero-hanging-cta relative block w-full">
                  <Image
                    src="/assets/Plaque_Rectangle_L_Strapwithtext.svg"
                    alt=""
                    width={3062}
                    height={607}
                    priority
                    className="h-auto w-full"
                  />
                </span>
              </button>

              <div className="mt-10 rounded-[20px] px-3 py-6">
                <PipMascotAnimation
                  alt="Pip mascot"
                  className="mx-auto h-auto w-[78%] max-w-[240px]"
                />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[90px] text-[#F9EED9]">
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

        <section className="hidden md:block">
          <header className="relative z-20 bg-[#CE6166] px-4 pb-10 pt-3 text-center text-[#fff3dd] sm:px-6 sm:pb-11 sm:pt-4 md:pb-12">
            <p className="font-solway text-[22px] font-bold leading-[27px]">
              Welcome to Melon Village
            </p>
            <p className="font-solway mt-[2px] text-[22px] font-normal leading-[27px]">
              Where healthcare feels like home
            </p>

            <div className="pointer-events-none absolute left-1/2 top-full z-30 w-full -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6">
              <p className="melon-ribbon mx-auto font-dosis text-[22px] font-semibold leading-[24px] text-[#413A29]">
                A joyful new wellness world designed for warmth, trust, and gentle care.
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
                  <span className="block">This isn&apos;t a clinic.</span>
                  <span className="block">It&apos;s a village.</span>
                </h1>

                <p className="mt-4 max-w-[620px] font-dosis text-[20px] leading-[1.35] text-[#413A29] sm:mt-5 sm:text-[22px] md:text-[24px] md:leading-[1.38] lg:mt-6 lg:text-[30px] lg:leading-[40px]">
                  Welcome to Hello Melon, where every visit feels safe, every
                  check-in feels personal, and every record lives in a world
                  designed just for you. Healthcare, reimagined with empathy first.
                </p>

                <button
                  type="button"
                  aria-label="Plant your seed: Join the Founding Circle"
                  className="hero-hanging-cta-button mt-6 inline-flex max-w-full items-center justify-start sm:mt-7 lg:mt-8"
                >
                  <span className="hero-hanging-cta relative block w-[clamp(330px,34vw,640px)]">
                    <Image
                      src="/assets/Plaque_Rectangle_L_Strapwithtext.svg"
                      alt=""
                      width={3062}
                      height={607}
                      priority
                      className="h-auto w-full"
                    />
                  </span>
                </button>
              </div>

              <div className="mx-auto w-full max-w-[740px] lg:flex lg:justify-start">
                <PipMascotAnimation
                  alt="Pip mascot"
                  className="h-auto w-[clamp(360px,40.5vw,700px)]"
                />
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[72px] text-[#efe4cc] sm:h-[82px] md:h-[94px] lg:h-[108px]">
             <svg width="1920" height="1343" viewBox="0 0 1920 1343" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1709.53 9.3703C1067.35 124.335 191.94 57.272 -174.995 9.37024L-194 1343L1970.12 1343C2222.19 866.16 2351.7 -105.594 1709.53 9.3703Z" fill="#F9EED9"/>
  </svg>

            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
