import type { Metadata } from "next";
import { Package } from "lucide-react";
import { AccountPageHeader } from "@/features/account/components/account-page-header";
import { EmptyState } from "@/features/account/components/empty-state";

export const metadata: Metadata = { title: "My orders" };

export default function Page() {
  return (
    <>
      <AccountPageHeader title="My orders" description="Track purchases and deliveries." />
      <EmptyState icon={Package} title="No orders yet" text="Items you buy will appear here with live delivery updates." action={{ href: "/", label: "Start shopping" }} />
    </>
  );
}
