import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { AccountPageHeader } from "@/features/account/components/account-page-header";
import { EmptyState } from "@/features/account/components/empty-state";

export const metadata: Metadata = { title: "Addresses" };

export default function Page() {
  return (
    <>
      <AccountPageHeader title="Addresses" description="Manage delivery addresses." />
      <EmptyState icon={MapPin} title="No saved addresses" text="Add an address for faster checkout." />
    </>
  );
}
