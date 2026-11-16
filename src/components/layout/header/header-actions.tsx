import Link from "next/link";
import { Heart, MessageCircle, Plus, ShoppingBag, User } from "lucide-react";

function IconLink({
  href,
  label,
  children,
  badge,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  badge?: number;
}) {
  return (
    <Link
      href={href}
      aria-label={badge ? `${label} (${badge})` : label}
      className="relative grid size-10 place-items-center rounded-full transition hover:bg-surface"
    >
      {children}
      {badge ? (
        <span className="absolute -right-0.5 -top-0.5 grid min-w-5 place-items-center rounded-full bg-brand px-1 text-[11px] font-semibold leading-5 text-brand-foreground">
          {badge > 99 ? "99+" : badge}
        </span>
      ) : null}
    </Link>
  );
}

export function HeaderActions({ cartCount = 0 }: { cartCount?: number }) {
  return (
    <div className="flex items-center gap-1">
      <Link
        href="/seller/listings/new"
        className="mr-2 hidden h-10 items-center gap-1.5 rounded-full bg-brand px-4 text-sm font-semibold text-brand-foreground transition hover:opacity-90 md:inline-flex"
      >
        <Plus className="size-4" aria-hidden />
        Sell
      </Link>
      <IconLink href="/account/wishlist" label="Wishlist">
        <Heart className="size-5" aria-hidden />
      </IconLink>
      <span className="hidden md:block">
        <IconLink href="/chats" label="Chats">
          <MessageCircle className="size-5" aria-hidden />
        </IconLink>
      </span>
      <IconLink href="/cart" label="Cart" badge={cartCount}>
        <ShoppingBag className="size-5" aria-hidden />
      </IconLink>
      <span className="hidden md:block">
        <IconLink href="/account" label="Account">
          <User className="size-5" aria-hidden />
        </IconLink>
      </span>
    </div>
  );
}
