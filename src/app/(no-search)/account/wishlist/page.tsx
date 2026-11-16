import type { Metadata } from "next";
import { Heart } from "lucide-react";
import { AccountPageHeader } from "@/features/account/components/account-page-header";
import { EmptyState } from "@/features/account/components/empty-state";

export const metadata: Metadata = { title: "Wishlist" };

export default function Page() {
  return (
    <>
      <AccountPageHeader title="Wishlist" description="Items you've saved for later." />
      <EmptyState icon={Heart} title="Your wishlist is empty" text="Tap the heart on any item to save it here." action={{ href: "/categories", label: "Explore categories" }} />
    </>
  );
}
