import Link from "next/link";
import { BottomTabs } from "@/components/layout/bottom-tabs";
import { SiteHeader } from "@/components/layout/site-header";

const nav = [
  { href: "/seller", label: "Overview" },
  { href: "/seller/listings", label: "Listings" },
  { href: "/seller/orders", label: "Sales" },
  { href: "/seller/offers", label: "Offers" },
  { href: "/seller/payouts", label: "Payouts" },
  { href: "/seller/settings", label: "Shop settings" },
];

export default function SellerLayout({ children }: { children: React.ReactNode }) {
  // TODO: server-side check that the user has a seller profile
  return (
    <div className="flex flex-1 flex-col pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
      <SiteHeader />
      <div className="mx-auto grid w-full max-w-7xl flex-1 gap-8 px-4 py-8 md:grid-cols-[220px_1fr]">
        <aside>
          <nav className="flex flex-col gap-2 text-sm">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>
        </aside>
        <section>{children}</section>
      </div>
      <BottomTabs />
    </div>
  );
}
