import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { AccountPageHeader } from "@/features/account/components/account-page-header";
import { EmptyState } from "@/features/account/components/empty-state";

export const metadata: Metadata = { title: "Privacy & security" };

export default function Page() {
  return (
    <>
      <AccountPageHeader title="Privacy & security" description="Two-factor, sessions and data." />
      <EmptyState icon={ShieldCheck} title="Security settings" text="Manage two-factor authentication and active sessions." />
    </>
  );
}
