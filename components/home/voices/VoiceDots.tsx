import type { VoiceCard } from "@/components/home/content";

type VoiceDotsProps = {
  cards: readonly VoiceCard[];
  activeIndex: number;
  onSelect: (index: number) => void;
  activeClassName: string;
  inactiveClassName: string;
};

export default function VoiceDots({
  cards,
  activeIndex,
  onSelect,
  activeClassName,
  inactiveClassName,
}: VoiceDotsProps) {
  return (
    <>
      {cards.map((voiceCard, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={voiceCard.id}
            type="button"
            aria-label={`Go to voice ${index + 1}`}
            onClick={() => onSelect(index)}
            className={`rounded-full transition-colors ${
              isActive ? activeClassName : inactiveClassName
            }`}
          />
        );
      })}
    </>
  );
}
