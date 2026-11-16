import Link from "next/link";
import { BadgeCheck, Star } from "lucide-react";

// Demo data
const sellers = [
  { handle: "aisha.closet", name: "Aisha's Closet", initials: "AC", color: "bg-rose-500", rating: 4.9, sold: 210 },
  { handle: "techtrade", name: "TechTrade", initials: "TT", color: "bg-violet-500", rating: 4.6, sold: 540 },
  { handle: "sara.home", name: "Sara Home", initials: "SH", color: "bg-teal-500", rating: 4.8, sold: 96 },
  { handle: "lina.reads", name: "Lina Reads", initials: "LR", color: "bg-amber-500", rating: 5.0, sold: 132 },
  { handle: "yk_sports", name: "YK Sports", initials: "YK", color: "bg-sky-500", rating: 4.5, sold: 74 },
];

export function TopSellers() {
  return (
    <ul className="-mx-4 flex gap-3 overflow-x-auto px-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-5 md:px-0">
      {sellers.map((s) => (
        <li key={s.handle} className="shrink-0">
          <Link href={`/sellers/${s.handle}`} className="flex w-36 flex-col items-center rounded-2xl border border-border p-4 text-center transition hover:border-brand md:w-auto">
            <span className={`grid size-14 place-items-center rounded-full text-base font-semibold text-white ${s.color}`}>{s.initials}</span>
            <p className="mt-2 flex w-full items-center justify-center gap-1 text-sm font-semibold">
              <span className="truncate">{s.name}</span>
              <BadgeCheck className="size-4 shrink-0 fill-brand text-white" aria-label="Verified" />
            </p>
            <p className="mt-0.5 flex items-center gap-1 text-xs text-muted">
              <Star className="size-3 fill-amber-400 text-amber-400" aria-hidden />
              {s.rating.toFixed(1)} · {s.sold} sold
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
