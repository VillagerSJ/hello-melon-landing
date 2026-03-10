import Image from "next/image";
import Link from "next/link";
import { HOME_COPY } from "./content";

export default function FooterSection() {
  return (
    <footer className="-mt-px relative bg-melon-rose-footer px-[clamp(12px,4vw,24px)] pb-[30px] pt-[18px] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-[2px] after:bg-melon-rose-footer after:content-[''] md:pb-[clamp(44px,7vw,86px)] md:pt-[clamp(34px,5.6vw,64px)] md:px-12 lg:px-[110px]">
      <div className="mx-auto w-full max-w-[1760px]">
        <div className="mx-auto w-full max-w-[360px] text-center md:max-w-[1560px]">
          <div className="mx-auto w-[clamp(150px,58vw,220px)] md:w-[clamp(280px,42vw,567px)]">
            <Image
              src="/assets/HelloMelon_vertical_Logo.png"
              alt="Hello Melon logo"
              width={841}
              height={286}
              sizes="(max-width: 768px) 280px, 567px"
              className="w-full h-auto mx-auto"
            />
            <p className="mt-[4px] font-solway text-[18px] font-bold leading-[24px] tracking-[-0.01em] text-melon-cream md:mt-[clamp(4px,0.7vw,8px)] md:text-[clamp(34px,4.8vw,50px)] md:leading-[clamp(46px,6.6vw,69px)]">
              {HOME_COPY.footerTagline}
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="mt-[18px] flex flex-col items-center justify-center gap-y-[2px] md:mt-[clamp(28px,4vw,48px)] md:flex-row md:flex-wrap md:gap-x-[clamp(22px,2.6vw,44px)] md:gap-y-[10px]"
          >
            {HOME_COPY.footerLinks.map((linkItem) => (
              <Link
                key={linkItem.label}
                href={linkItem.href}
                className="font-dosis text-[20px] font-normal leading-[36px] tracking-[0em] text-melon-text transition-opacity hover:opacity-80 md:text-[26px] md:leading-[46px]"
              >
                {linkItem.label}
              </Link>
            ))}
          </nav>

          <div className="mx-auto mt-[18px] h-px w-full max-w-[320px] bg-melon-line md:mt-[clamp(26px,3.6vw,44px)] md:max-w-[1460px]" />

          <p className="mt-[16px] font-dosis text-[16px] font-normal leading-[1.3] text-melon-text md:mt-[clamp(22px,3vw,34px)] md:text-[clamp(24px,2.2vw,37px)]">
            {HOME_COPY.footerCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
