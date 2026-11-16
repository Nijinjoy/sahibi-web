import Link from "next/link";
import { Heart, Package } from "lucide-react";
import { currentUser as u } from "../data/mock";

export function ActivityCards() {
  const cards = [
    { href: "/account/orders", label: "Active orders", value: u.activity.activeOrders, icon: Package, tint: "bg-sky-50 text-sky-600" },
    { href: "/account/wishlist", label: "Saved items", value: u.activity.wishlist, icon: Heart, tint: "bg-rose-50 text-rose-600" },
  ];
  return (
    <div className="grid grid-cols-2 gap-3">
      {cards.map(({ href, label, value, icon: Icon, tint }) => (
        <Link key={href} href={href} className="rounded-2xl border border-border p-3 transition hover:border-brand md:p-4">
          <span className={`grid size-9 place-items-center rounded-xl ${tint}`}>
            <Icon className="size-[18px]" aria-hidden />
          </span>
          <p className="mt-3 text-xl font-semibold">{value}</p>
          <p className="text-xs text-muted">{label}</p>
        </Link>
      ))}
    </div>
  );
}
