import Image from "next/image";
import type { VoiceCard } from "@/components/home/content";

type VoiceCardProps = {
  card: VoiceCard;
};

export function MobileVoiceCard({ card }: VoiceCardProps) {
  return (
    <article className="mx-auto w-full rounded-[28px] bg-melon-rose-soft px-[18px] pb-[24px] pt-[16px] text-center">
      <div className="mx-auto w-full max-w-[320px] rounded-[22px] bg-melon-rose-soft px-[10px] py-[14px]">
        <Image
          src={card.avatarSrc}
          alt={card.avatarAlt}
          width={250}
          height={260}
          className="mx-auto h-auto w-[min(100%,162px)]"
        />
      </div>

      <p className="mx-auto mt-[16px] max-w-[300px] font-solway text-[18px] font-medium leading-[24px] tracking-[-0.01em] text-melon-text">
        {card.quote}
      </p>
      <p className="mt-[10px] font-solway text-[18px] font-bold leading-[24px] tracking-[-0.01em] text-melon-text">
        {card.ageLabel}
      </p>
    </article>
  );
}

export function DesktopVoiceCard({ card }: VoiceCardProps) {
  return (
    <article className="mx-auto h-[475px] w-full max-w-[521.746px] rounded-[45.24px] border-[4px] border-melon-card-border bg-melon-rose-soft px-[clamp(18px,2.4vw,30px)] pb-[clamp(20px,2.8vw,34px)] pt-[clamp(14px,2vw,24px)] text-center lg:w-[521.746px]">
      <Image
        src={card.avatarSrc}
        alt={card.avatarAlt}
        width={250}
        height={260}
        className="mx-auto h-auto w-[clamp(175px,21vw,250px)]"
      />

      <p className="mx-auto mt-[clamp(4px,0.9vw,8px)] max-w-[380px] font-solway text-[clamp(22px,2.3vw,26px)] font-medium leading-[clamp(26px,2.9vw,31px)] tracking-[-0.01em] text-melon-text">
        {card.quote}
      </p>
      <p className="mt-[clamp(4px,0.9vw,8px)] font-solway text-[clamp(23px,2.4vw,27.14px)] font-bold leading-[clamp(29px,3.5vw,39.21px)] tracking-[-0.01em] text-melon-rose">
        {card.ageLabel}
      </p>
    </article>
  );
}
