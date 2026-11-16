import type { ComponentProps } from "react";
import type { Listing } from "../types";
import { ListingCard } from "./listing-card";

type Meta = ComponentProps<typeof ListingCard>["meta"];

export function ListingGrid({ listings, meta }: { listings: Listing[]; meta?: Meta }) {
  return (
    <ul className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 lg:grid-cols-4">
      {listings.map((l) => (
        <li key={l.id} className="h-full"><ListingCard listing={l} meta={meta} /></li>
      ))}
    </ul>
  );
}

/** Horizontal scroll row on mobile, grid on desktop. */
export function ListingRail({ listings, meta }: { listings: Listing[]; meta?: Meta }) {
  return (
    <ul className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
      {listings.map((l) => (
        <li key={l.id} className="w-[42%] max-w-48 shrink-0 snap-start sm:w-48 lg:w-auto lg:max-w-none"><ListingCard listing={l} meta={meta} /></li>
      ))}
    </ul>
  );
}
