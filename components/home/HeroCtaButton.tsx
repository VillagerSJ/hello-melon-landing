import Image from "next/image";
import { HOME_COPY } from "./content";

type HeroCtaButtonProps = {
  buttonClassName: string;
  plaqueClassName: string;
};

export default function HeroCtaButton({
  buttonClassName,
  plaqueClassName
}: HeroCtaButtonProps) {
  return (
    <button
      type="button"
      aria-label={HOME_COPY.ctaLabel}
      className={buttonClassName}
    >
      <span className={`hero-hanging-cta relative block ${plaqueClassName}`}>
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
  );
}
