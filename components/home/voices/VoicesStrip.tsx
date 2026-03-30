import Image from "next/image";
import type { CSSProperties, RefObject } from "react";

type VoicesStripProps = {
  stripText: string;
  stripRef: RefObject<HTMLDivElement | null>;
  stripCircleRef: RefObject<HTMLSpanElement | null>;
  circleStyle: CSSProperties;
};

export default function VoicesStrip({
  stripText,
  stripRef,
  stripCircleRef,
  circleStyle,
}: VoicesStripProps) {
  return (
    <div
      ref={stripRef}
      className="relative mx-auto mt-[18px] w-full max-w-[min(94vw,1306px)] md:mt-[clamp(20px,3vw,34px)]"
    >
      <Image
        src="/assets/Rectangle-strip.svg"
        alt=""
        width={1267}
        height={82}
        className="h-auto w-full"
      />
      <span
        ref={stripCircleRef}
        className="pointer-events-none absolute h-[24px] w-[24px] rounded-full bg-melon-accent transition-transform duration-100 md:h-[clamp(30px,4.5vw,70px)] md:w-[clamp(30px,4.5vw,70px)]"
        style={circleStyle}
      />
      <p className="absolute inset-0 flex items-center justify-center px-[20px] text-center font-dosis text-[14px] font-semibold leading-[18px] tracking-[0em] text-melon-cream md:px-[clamp(30px,5vw,84px)] md:text-[clamp(12px,2.2vw,22px)] md:font-medium md:leading-[clamp(20px,4.2vw,40px)]">
        {stripText}
      </p>
      <Image
        src="/assets/flower.png"
        alt=""
        width={36}
        height={37}
        className="absolute right-[10px] top-[26%] h-[20px] w-auto -translate-y-1/2 md:right-[clamp(8px,1.3vw,16px)] md:top-[20%] md:h-[clamp(20px,2.1vw,30px)]"
      />
    </div>
  );
}
