"use client";

import { Suspense, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`shrink-0 text-xl font-bold tracking-tight ${className}`}>
      {siteConfig.name}
      <span className="text-brand">.</span>
    </Link>
  );
}

function greetingFor(hour: number) {
  if (hour < 5) return "Good evening";
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

const noop = () => () => {};

/** Uses the device's local time; renders "Hello" on the server and during hydration. */
function useGreeting() {
  return useSyncExternalStore(
    noop,
    () => greetingFor(new Date().getHours()),
    () => "Hello",
  );
}

function Greeting() {
  const greeting = useGreeting();
  return (
    <div className="min-w-0 md:hidden">
      <p className="text-xs text-muted">{greeting} 👋</p>
      <p className="truncate text-lg font-bold leading-tight tracking-tight">
        Discover pre-loved<span className="text-brand">.</span>
      </p>
    </div>
  );
}

function Brand() {
  const isHome = usePathname() === "/";
  if (!isHome) return <Logo />;
  return (
    <>
      <Greeting />
      <Logo className="hidden md:block" />
    </>
  );
}

/** Mobile home: greeting. Everywhere else (and desktop): logo. */
export function HeaderBrand() {
  return (
    <Suspense fallback={<Logo />}>
      <Brand />
    </Suspense>
  );
}
