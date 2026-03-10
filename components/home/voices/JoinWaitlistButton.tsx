import Image from "next/image";

type JoinWaitlistButtonProps = {
  label: string;
};

export default function JoinWaitlistButton({ label }: JoinWaitlistButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className="mx-auto mt-[20px] block w-[210px] appearance-none border-0 bg-transparent p-0 md:mt-[clamp(24px,3.4vw,40px)] md:w-[clamp(156px,19vw,248px)]"
    >
      <span className="relative block w-full">
        <Image
          src="/assets/waiting-button.svg"
          alt=""
          width={1244}
          height={302}
          className="h-auto w-full"
        />
        <span className="absolute inset-0 flex items-center justify-center font-solway text-[20px] font-medium leading-[24px] tracking-[0em] text-melon-cream md:text-[clamp(16px,2.2vw,25px)] md:leading-[clamp(19px,2.7vw,29.68px)]">
          {label}
        </span>
      </span>
    </button>
  );
}
