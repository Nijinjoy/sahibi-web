import Link from "next/link";
import { MapPin, Navigation } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { conditionLabel } from "../conditions";
import type { Listing } from "../types";
import { LikeButton } from "./like-button";

type Props = {
  listing: Listing;
  /** "distance" shows km from the viewer instead of the area name */
  meta?: "location" | "distance";
};

export function ListingCard({ listing: l, meta = "location" }: Props) {
  const isNew = l.postedMinutes <= 120;
  // Avoid "Sony · Sony WH-1000XM4" when the title already starts with the brand
  const showBrand = l.brand && !l.title.toLowerCase().startsWith(l.brand.toLowerCase());
  const discount = l.originalPrice ? Math.round((1 - l.price / l.originalPrice) * 100) : 0;
  return (
    <Link
      href={`/listings/${l.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-[0_1px_3px_rgb(0_0_0/0.06)] transition hover:shadow-md active:scale-[0.98]"
    >
      <div className={`relative aspect-square overflow-hidden bg-gradient-to-br ${l.tint}`}>
        <span
          aria-hidden
          className="absolute inset-0 grid place-items-center text-6xl transition duration-300 group-hover:scale-110 md:text-7xl"
        >
          {l.emoji}
        </span>
        <span className="absolute left-2 top-2 flex gap-1">
          {isNew && (
            <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-foreground">New</span>
          )}
          <span className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium backdrop-blur">
            {conditionLabel[l.condition]}
          </span>
        </span>
        {discount >= 20 && (
          <span className="absolute bottom-2 left-2 rounded-full bg-foreground/85 px-2 py-0.5 text-[11px] font-semibold text-background">
            {discount}% off
          </span>
        )}
        <LikeButton initialLikes={l.likes} className="absolute bottom-2 right-2" />
      </div>
      <div className="flex flex-1 flex-col p-3">
        <p className="flex min-w-0 items-baseline gap-1.5">
          <span className="shrink-0 text-[17px] font-bold tracking-tight">{formatPrice(l.price)}</span>
          {l.originalPrice && (
            <span className="truncate text-xs text-muted line-through">{formatPrice(l.originalPrice)}</span>
          )}
        </p>
        <p className="truncate text-[13px] text-foreground/80">{showBrand ? <span className="font-medium">{l.brand} · </span> : null}{l.title}</p>
        <p className="mt-auto flex min-w-0 items-center gap-1 pt-1 text-xs text-muted">
          {meta === "distance" ? (
            <>
              <Navigation className="size-3 shrink-0 text-brand" aria-hidden />
              <span className="truncate">
                <span className="font-medium text-foreground">{l.distanceKm.toFixed(1)} km</span> · {l.location}
              </span>
            </>
          ) : (
            <>
              <MapPin className="size-3 shrink-0" aria-hidden />
              <span className="truncate">{l.location} · {l.postedAgo} ago</span>
            </>
          )}
        </p>
      </div>
    </Link>
  );
}
