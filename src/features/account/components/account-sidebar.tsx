"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard } from "lucide-react";
import { accountMenu } from "../menu";
import { LogoutButton } from "./account-menu";

function Nav({ pathname }: { pathname: string | null }) {
  const isActive = (href: string) =>
    href === "/account" ? pathname === "/account" : pathname?.startsWith(href) ?? false;

  const link = (href: string, label: string, Icon: typeof LayoutDashboard) => {
    const active = isActive(href);
    return (
      <Link
        key={href}
        href={href}
        aria-current={active ? "page" : undefined}
        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
          active ? "bg-brand/10 font-semibold text-brand" : "text-foreground/80 hover:bg-surface"
        }`}
      >
        <Icon className="size-[18px]" aria-hidden />
        {label}
      </Link>
    );
  };

  return (
    <nav aria-label="Account" className="space-y-5">
      {link("/account", "Overview", LayoutDashboard)}
      {accountMenu.map((section) => (
        <div key={section.title}>
          <p className="mb-1 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted">{section.title}</p>
          {section.items.map((i) => link(i.href, i.label, i.icon))}
        </div>
      ))}
      <div className="border-t border-border pt-3">
        <LogoutButton compact />
      </div>
    </nav>
  );
}

function ActiveNav() {
  return <Nav pathname={usePathname()} />;
}

/** Desktop-only account navigation. */
export function AccountSidebar() {
  return (
    <Suspense fallback={<Nav pathname={null} />}>
      <ActiveNav />
    </Suspense>
  );
}
