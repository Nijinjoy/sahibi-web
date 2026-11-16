"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Slide = {
  id: string;
  eyebrow: string;
  title: string;
  cta: string;
  href: string;
  emoji: string;
  bg: string;
  button: string;
};

// Demo promos; later these can come from a CMS or the database.
const slides: Slide[] = [
  {
    id: "preloved",
    eyebrow: "Pre-loved. Re-loved.",
    title: "Great finds, second time around",
    cta: "Shop now",
    href: "/search?sort=newest",
    emoji: "👟",
    bg: "from-emerald-700 via-emerald-600 to-teal-500",
    button: "text-emerald-800",
  },
  {
    id: "delivery",
    eyebrow: "This week only",
    title: "Free delivery on orders over AED 200",
    cta: "Start shopping",
    href: "/search",
    emoji: "🚚",
    bg: "from-indigo-600 via-violet-600 to-fuchsia-500",
    button: "text-violet-800",
  },
  {
    id: "sell",
    eyebrow: "Declutter & earn",
    title: "List an item in under 60 seconds",
    cta: "Start selling",
    href: "/seller/listings/new",
    emoji: "📸",
    bg: "from-orange-500 via-amber-500 to-yellow-400",
    button: "text-orange-700",
  },
];

const INTERVAL = 5000;

function scrollToSlide(track: HTMLElement | null, index: number) {
  track?.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
}

export function PromoCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Track which slide is visible
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { root: track, threshold: 0.6 },
    );
    track.querySelectorAll("li").forEach((li) => observer.observe(li));
    return () => observer.disconnect();
  }, []);

  // Auto-advance (off for reduced motion, paused on interaction)
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => scrollToSlide(trackRef.current, (active + 1) % slides.length), INTERVAL);
    return () => window.clearTimeout(id);
  }, [active, paused]);

  const goTo = (index: number) => scrollToSlide(trackRef.current, index);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Promotions"
      onPointerDown={() => setPaused(true)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <ul
        ref={trackRef}
        className="flex snap-x snap-mandatory overflow-x-auto rounded-3xl [scrollbar-width:none]"
      >
        {slides.map((s, i) => (
          <li
            key={s.id}
            data-index={i}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
            className="w-full shrink-0 snap-center"
          >
            <div className={`relative flex h-40 overflow-hidden bg-gradient-to-br px-5 py-5 text-white md:h-56 md:px-10 md:py-8 ${s.bg}`}>
              <div className="relative z-10 flex max-w-[65%] flex-col">
                <p className="text-xs font-medium text-white/85 md:text-sm">{s.eyebrow}</p>
                <h2 className="mt-1 text-xl font-bold leading-tight tracking-tight md:text-4xl">{s.title}</h2>
                <Link
                  href={s.href}
                  className={`mt-auto inline-flex h-9 w-fit items-center gap-1.5 rounded-full bg-white px-4 text-sm font-semibold shadow-sm hover:bg-white/90 md:h-11 md:px-5 ${s.button}`}
                >
                  {s.cta} <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 bottom-0 select-none text-[96px] leading-none drop-shadow-lg md:right-12 md:top-1/2 md:-translate-y-1/2 md:text-[150px]"
              >
                {s.emoji}
              </span>
              <span aria-hidden className="absolute -right-16 -top-16 size-48 rounded-full bg-white/15 blur-2xl" />
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-2.5 flex justify-center gap-1.5">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={active === i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all ${active === i ? "w-5 bg-brand" : "w-1.5 bg-border"}`}
          />
        ))}
      </div>
    </section>
  );
}
