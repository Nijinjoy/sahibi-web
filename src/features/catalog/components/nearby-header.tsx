import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";

/** Section title with the viewer's area. Demo location until geolocation/profile exists. */
export function NearbyHeader() {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-lg font-semibold tracking-tight md:text-xl">Nearby finds</h2>
        <button type="button" className="mt-0.5 flex items-center gap-1 text-sm text-muted hover:text-foreground">
          <MapPin className="size-3.5 text-brand" aria-hidden />
          <span>Dubai · within 10 km</span>
          <span className="font-medium text-brand">Change</span>
        </button>
      </div>
      <Link href="/search?sort=distance" className="flex shrink-0 items-center text-sm font-medium text-brand hover:underline">
        See all <ChevronRight className="size-4" aria-hidden />
      </Link>
    </div>
  );
}
