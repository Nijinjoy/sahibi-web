import {
  Bell, CircleHelp, Heart, MapPin, Package, Receipt, Settings, ShieldCheck, Store, Wallet, type LucideIcon,
} from "lucide-react";

export type MenuItem = { href: string; label: string; icon: LucideIcon; hint?: string };
export type MenuSection = { title: string; items: MenuItem[] };

export const accountMenu: MenuSection[] = [
  {
    title: "Buying",
    items: [
      { href: "/account/orders", label: "My orders", icon: Package },
      { href: "/account/wishlist", label: "Wishlist", icon: Heart },
      { href: "/account/addresses", label: "Addresses", icon: MapPin },
    ],
  },
  {
    title: "Selling",
    items: [
      { href: "/seller/listings", label: "My listings", icon: Store },
      { href: "/seller/orders", label: "Sales", icon: Receipt },
      { href: "/seller/payouts", label: "Payouts", icon: Wallet },
    ],
  },
  {
    title: "Preferences",
    items: [
      { href: "/account/notifications", label: "Notifications", icon: Bell },
      { href: "/account/settings", label: "Account settings", icon: Settings },
      { href: "/account/security", label: "Privacy & security", icon: ShieldCheck },
      { href: "/help", label: "Help centre", icon: CircleHelp },
    ],
  },
];
