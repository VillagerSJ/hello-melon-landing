"use client";

export default function Error({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="grid min-h-screen place-items-center bg-melon-base px-4 py-10">
      <div className="max-w-[520px] rounded-[20px] bg-melon-ribbon p-6 text-center">
        <h1 className="font-solway text-[34px] leading-[1.1] text-melon-text">
          Something went wrong
        </h1>
        <p className="mt-3 font-dosis text-[22px] leading-[1.3] text-melon-text">
          Please try again. If this keeps happening, refresh the page.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-5 rounded-[10px] bg-melon-olive px-5 py-2 font-dosis text-[18px] font-semibold text-melon-cream transition-colors hover:bg-melon-olive-hover"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
