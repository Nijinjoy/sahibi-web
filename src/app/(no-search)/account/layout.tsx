import { AccountSidebar } from "@/features/account/components/account-sidebar";
import { UserAvatar } from "@/features/account/components/user-avatar";
import { currentUser as u } from "@/features/account/data/mock";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  // TODO: server-side auth check
  return (
    <div className="md:grid md:grid-cols-[260px_1fr] md:gap-10">
      <aside className="hidden md:block">
        <div className="sticky top-32 space-y-6">
          <div className="flex items-center gap-3 px-3">
            <UserAvatar initials={u.initials} verified={u.verified} size="md" />
            <div className="min-w-0">
              <p className="truncate font-semibold">{u.name}</p>
              <p className="truncate text-xs text-muted">@{u.handle}</p>
            </div>
          </div>
          <AccountSidebar />
        </div>
      </aside>
      <section className="min-w-0">{children}</section>
    </div>
  );
}
