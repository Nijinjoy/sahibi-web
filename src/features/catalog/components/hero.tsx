import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 px-5 py-7 text-white md:px-10 md:py-12">
      <div className="relative z-10 max-w-md">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
          <Leaf className="size-3.5" aria-hidden /> Pre-loved. Re-loved.
        </span>
        <h1 className="mt-3 text-[28px] font-bold leading-tight tracking-tight md:text-5xl">
          Great finds,<br />second time around.
        </h1>
        <p className="mt-2 text-sm text-white/80 md:text-base">
          Buy and sell quality pre-owned items from people near you.
        </p>
        <div className="mt-5 flex gap-2">
          <Link href="/search" className="inline-flex h-11 items-center gap-1.5 rounded-full bg-white px-5 text-sm font-semibold text-emerald-800 hover:bg-white/90">
            Shop now <ArrowRight className="size-4" aria-hidden />
          </Link>
          <Link href="/seller/listings/new" className="inline-flex h-11 items-center rounded-full border border-white/40 px-5 text-sm font-semibold hover:bg-white/10">
            Start selling
          </Link>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute -bottom-6 -right-4 select-none text-[120px] leading-none opacity-90 md:right-10 md:top-1/2 md:-translate-y-1/2 md:text-[200px]">
        <span className="inline-block -rotate-12">👟</span>
        <span className="-ml-6 hidden rotate-6 sm:inline-block">🎧</span>
      </div>
      <div aria-hidden className="absolute -right-20 -top-20 size-64 rounded-full bg-white/10 blur-2xl" />
    </section>
  );
}
