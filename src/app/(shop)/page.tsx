import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { CategoryRail } from "@/features/catalog/components/category-rail";
import { ConditionGrid } from "@/features/catalog/components/condition-grid";
import { NearbyHeader } from "@/features/catalog/components/nearby-header";
import { PromoCarousel } from "@/features/catalog/components/promo-carousel";
import { SellBanner } from "@/features/catalog/components/sell-banner";
import { TrustStrip } from "@/features/catalog/components/trust-strip";
import { ListingGrid, ListingRail } from "@/features/listings/components/listing-grid";
import { justListed, nearbyListings } from "@/features/listings/data/mock";

export default function HomePage() {
  return (
    <div className="-mt-6 space-y-8 md:mt-0 md:space-y-12">
      <PromoCarousel />

      <section>
        <SectionHeader title="Just Listed" subtitle="Fresh from sellers today" href="/search?sort=newest" />
        <ListingRail listings={justListed} />
      </section>

      <section>
        <SectionHeader title="Shop by Condition" />
        <ConditionGrid />
      </section>

      <section>
        <NearbyHeader />
        <ListingGrid listings={nearbyListings} meta="distance" />
        <Link
          href="/search?sort=distance"
          className="mt-5 flex h-11 items-center justify-center gap-1.5 rounded-full border border-border text-sm font-semibold hover:bg-surface"
        >
          See more nearby <ArrowRight className="size-4" aria-hidden />
        </Link>
      </section>

      <section>
        <SectionHeader title="Browse categories" href="/categories" />
        <CategoryRail />
      </section>

      <SellBanner />

      <TrustStrip />
    </div>
  );
}
