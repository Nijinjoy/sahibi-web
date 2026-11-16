import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { ConditionGrid } from "@/features/catalog/components/condition-grid";
import { PromoCarousel } from "@/features/catalog/components/promo-carousel";
import { ListingGrid, ListingRail } from "@/features/listings/components/listing-grid";
import { justListed, nearbyListings } from "@/features/listings/data/mock";

export default function HomePage() {
  return (
    <div className="-mt-6 space-y-8 md:mt-0 md:space-y-12">
      {/* Tighter than the default section gap; the dots already separate it */}
      <div className="mb-5 md:mb-8">
        <PromoCarousel />
      </div>

      <section className="mb-5 md:mb-8">
        <SectionHeader title="Just Listed" href="/search?sort=newest" />
        <ListingRail listings={justListed} />
      </section>

      <section>
        <SectionHeader title="Nearby finds" href="/search?sort=distance" />
        <ListingGrid listings={nearbyListings} meta="distance" />
        <Link
          href="/search?sort=distance"
          className="mt-5 flex h-11 items-center justify-center gap-1.5 rounded-full border border-border text-sm font-semibold hover:bg-surface"
        >
          See more nearby <ArrowRight className="size-4" aria-hidden />
        </Link>
      </section>

      <section>
        <SectionHeader title="Shop by Condition" />
        <ConditionGrid />
      </section>
    </div>
  );
}
