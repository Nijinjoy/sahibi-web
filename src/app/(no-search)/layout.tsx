import { BottomTabs } from "@/components/layout/bottom-tabs";
import { SiteHeader } from "@/components/layout/site-header";

// Same shell as (shop), minus the header's mobile search row.
// Used by pages that don't need site search on mobile (chats, account).
export default function NoSearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
      <SiteHeader showMobileSearch={false} />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8">{children}</main>
      <BottomTabs />
    </div>
  );
}
