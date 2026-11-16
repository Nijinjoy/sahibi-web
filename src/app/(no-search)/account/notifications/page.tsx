import type { Metadata } from "next";
import { Bell } from "lucide-react";
import { AccountPageHeader } from "@/features/account/components/account-page-header";
import { EmptyState } from "@/features/account/components/empty-state";

export const metadata: Metadata = { title: "Notifications" };

export default function Page() {
  return (
    <>
      <AccountPageHeader title="Notifications" description="Choose what we notify you about." />
      <EmptyState icon={Bell} title="Notification settings" text="Offers, messages, order updates and price drops." />
    </>
  );
}
