import Image from "next/image";

type VoiceNavButtonProps = {
  ariaLabel: string;
  direction: "previous" | "next";
  onClick: () => void;
  className: string;
  iconClassName: string;
};

const ICON_SRC_BY_DIRECTION = {
  next: "/assets/eva_arrow-farword-fill.svg",
  previous: "/assets/eva_arrow-back-fill.svg",
} as const;

export default function VoiceNavButton({
  ariaLabel,
  direction,
  onClick,
  className,
  iconClassName,
}: VoiceNavButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={className}
    >
      <Image
        src={ICON_SRC_BY_DIRECTION[direction]}
        alt=""
        width={49}
        height={44}
        className={iconClassName}
      />
    </button>
  );
}
