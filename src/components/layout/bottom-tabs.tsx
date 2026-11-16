"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, MessageCircle, Plus, User, type LucideIcon } from "lucide-react";

type Tab = { href: string; label: string; icon: LucideIcon; match: (path: string) => boolean };

const tabs: Tab[] = [
  { href: "/", label: "Home", icon: Home, match: (p) => p === "/" },
  { href: "/categories", label: "Categories", icon: LayoutGrid, match: (p) => p.startsWith("/categories") || p.startsWith("/search") },
  { href: "/seller/listings/new", label: "Sell", icon: Plus, match: (p) => p.startsWith("/seller") },
  { href: "/chats", label: "Chats", icon: MessageCircle, match: (p) => p.startsWith("/chats") },
  { href: "/account", label: "Account", icon: User, match: (p) => p.startsWith("/account") },
];

function TabBar({ pathname }: { pathname: string | null }) {
  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
    >
      <ul className="grid h-16 grid-cols-5">
        {tabs.map(({ href, label, icon: Icon, match }) => {
          const active = pathname ? match(pathname) : false;
          const isSell = label === "Sell";
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex h-full flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors ${
                  active ? "text-brand" : "text-muted hover:text-foreground"
                }`}
              >
                {isSell ? (
                  <span className="-mt-5 grid size-12 place-items-center rounded-full bg-brand text-brand-foreground shadow-lg shadow-brand/30 ring-4 ring-background">
                    <Icon className="size-6" aria-hidden />
                  </span>
                ) : (
                  <Icon className="size-[22px]" strokeWidth={active ? 2.4 : 2} aria-hidden />
                )}
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function ActiveTabBar() {
  return <TabBar pathname={usePathname()} />;
}

/** Mobile-only bottom navigation. Hidden from md breakpoint up. */
export function BottomTabs() {
  // usePathname needs a Suspense boundary under Cache Components;
  // the fallback renders the same bar without an active tab.
  return (
    <Suspense fallback={<TabBar pathname={null} />}>
      <ActiveTabBar />
    </Suspense>
  );
}
