import type { Metadata } from "next";
import { Settings } from "lucide-react";
import { AccountPageHeader } from "@/features/account/components/account-page-header";
import { EmptyState } from "@/features/account/components/empty-state";

export const metadata: Metadata = { title: "Account settings" };

export default function Page() {
  return (
    <>
      <AccountPageHeader title="Account settings" description="Profile, email and password." />
      <EmptyState icon={Settings} title="Settings coming soon" text="Edit your name, photo, email and password." />
    </>
  );
}
