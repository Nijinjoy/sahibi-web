import Link from "next/link";
import { MapPin, Pencil, Star } from "lucide-react";
import { currentUser as u } from "../data/mock";
import { UserAvatar } from "./user-avatar";

export function ProfileCard() {
  const stats = [
    { label: "Listings", value: u.stats.listings },
    { label: "Sold", value: u.stats.sold },
    { label: "Bought", value: u.stats.bought },
    { label: "Followers", value: u.stats.followers },
  ];

  return (
    <section className="rounded-3xl border border-border bg-background p-5">
      <div className="flex items-center gap-4">
        <UserAvatar initials={u.initials} verified={u.verified} />
        <div className="min-w-0 flex-1">
          <h1 className="truncate text-lg font-semibold">{u.name}</h1>
          <p className="truncate text-sm text-muted">@{u.handle}</p>
          <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-muted">
            <span className="flex items-center gap-1 font-medium text-foreground">
              <Star className="size-3.5 fill-amber-400 text-amber-400" aria-hidden />
              {u.rating.toFixed(1)}
              <span className="font-normal text-muted">({u.reviewCount})</span>
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="size-3.5" aria-hidden />
              {u.location}
            </span>
          </p>
        </div>
        <Link
          href="/account/settings"
          aria-label="Edit profile"
          className="grid size-10 shrink-0 place-items-center rounded-full border border-border hover:bg-surface"
        >
          <Pencil className="size-4" aria-hidden />
        </Link>
      </div>

      <dl className="mt-5 grid grid-cols-4 divide-x divide-border rounded-2xl bg-surface py-3 text-center">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col">
            <dt className="text-[11px] text-muted">{s.label}</dt>
            <dd className="order-first text-lg font-semibold">{s.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 flex gap-2">
        <Link
          href={`/sellers/${u.handle}`}
          className="flex h-10 flex-1 items-center justify-center rounded-full border border-border text-sm font-medium hover:bg-surface"
        >
          View public profile
        </Link>
      </div>
      <p className="mt-3 text-center text-xs text-muted">Member since {u.memberSince}</p>
    </section>
  );
}
