import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { currentUser as u } from "../data/mock";

export function SellerCard() {
  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 to-teal-800 p-5 text-white">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-white/70">Seller balance</p>
          <p className="mt-1 text-3xl font-bold tracking-tight">{formatPrice(u.seller.balance)}</p>
          <p className="mt-1 text-xs text-white/70">{formatPrice(u.seller.pendingPayout)} pending</p>
        </div>
        <Link
          href="/seller"
          className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium backdrop-blur hover:bg-white/25"
        >
          Dashboard <ArrowUpRight className="size-3.5" aria-hidden />
        </Link>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-2">
        <Link
          href="/seller/listings/new"
          className="flex h-10 items-center justify-center gap-1.5 rounded-full bg-white text-sm font-semibold text-emerald-800 hover:bg-white/90"
        >
          <Plus className="size-4" aria-hidden /> List an item
        </Link>
        <Link
          href="/seller/payouts"
          className="flex h-10 items-center justify-center rounded-full border border-white/30 text-sm font-semibold hover:bg-white/10"
        >
          Withdraw
        </Link>
      </div>
    </section>
  );
}
