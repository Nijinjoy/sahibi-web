import Link from "next/link";

const nav = [
  { href: "/account", label: "Overview" },
  { href: "/account/orders", label: "Orders" },
  { href: "/account/offers", label: "My offers" },
  { href: "/account/wishlist", label: "Wishlist" },
  { href: "/account/addresses", label: "Addresses" },
  { href: "/account/settings", label: "Settings" },
];

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  // TODO: server-side auth check
  return (
    <div className="grid gap-8 md:grid-cols-[220px_1fr]">
      <aside>
        <nav className="flex flex-col gap-2 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
      </aside>
      <section>{children}</section>
    </div>
  );
}
