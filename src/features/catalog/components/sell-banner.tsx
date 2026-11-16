import Link from "next/link";
import { Camera, Plus } from "lucide-react";

export function SellBanner() {
  return (
    <section className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-4 rounded-3xl border border-border bg-gradient-to-r from-amber-50 to-orange-50 p-4 sm:flex sm:gap-4 md:p-8">
      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-orange-500 shadow-sm">
        <Camera className="size-6" aria-hidden />
      </span>
      <div className="flex-1">
        <h2 className="font-semibold sm:text-lg">Turn your clutter into cash</h2>
        <p className="text-xs text-muted sm:text-sm">List in under a minute. No listing fees.</p>
      </div>
      <Link href="/seller/listings/new" className="col-span-2 inline-flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-full bg-foreground px-5 text-sm font-semibold text-background hover:opacity-90">
        <Plus className="size-4" aria-hidden /> List an item
      </Link>
    </section>
  );
}
