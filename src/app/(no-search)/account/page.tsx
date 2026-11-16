import type { Metadata } from "next";
import { AccountMenu } from "@/features/account/components/account-menu";
import { ActivityCards } from "@/features/account/components/activity-cards";
import { ProfileCard } from "@/features/account/components/profile-card";
import { SellerCard } from "@/features/account/components/seller-card";

export const metadata: Metadata = { title: "Account" };

export default function AccountPage() {
  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-2">
        <ProfileCard />
        <div className="flex flex-col gap-5">
          <SellerCard />
          <ActivityCards />
        </div>
      </div>
      {/* Desktop uses the sidebar instead */}
      <div className="pt-2 md:hidden">
        <AccountMenu />
      </div>
    </div>
  );
}
