import Image from "next/image";
import { HOME_COPY } from "./content";

export default function ExploreVillageSection() {
  return (
    <section className="relative bg-[#F9EED9] px-[clamp(12px,4vw,24px)] pb-[clamp(56px,9vw,96px)] pt-[clamp(32px,6.5vw,56px)] md:px-12 lg:px-[110px]">
      <div className="mx-auto w-full max-w-[1760px]">
        <header className="mx-auto max-w-[860px] text-center">
          <h2 className="font-solway text-[clamp(34px,5.4vw,50px)] font-light leading-[1.08] tracking-[-0.01em] text-[#CE6166]">
            {HOME_COPY.exploreTitle}
          </h2>
          <p className="mt-[clamp(4px,1.2vw,10px)] font-dosis text-[clamp(18px,3vw,30px)] font-normal leading-[1.3] tracking-[0em] text-[#413A29]">
            {HOME_COPY.exploreSubtitle}
          </p>
        </header>

        <div className="mx-auto mt-[clamp(24px,4.5vw,46px)] w-full max-w-[1560px]">
          <Image
            src="/assets/HelloMelon_Village.png"
            alt="Explore the village illustration"
            width={1560}
            height={1007}
            sizes="(max-width: 640px) calc(100vw - 24px), (max-width: 1024px) calc(100vw - 64px), (max-width: 1700px) calc(100vw - 220px), 1560px"
            className="h-auto w-full rounded-t-[clamp(16px,3vw,40px)]"
          />
        </div>
      </div>
    </section>
  );
}
