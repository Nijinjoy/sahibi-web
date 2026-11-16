import Link from "next/link";
import { ChevronRight, LogOut } from "lucide-react";
import { accountMenu } from "../menu";

/** Full menu list for the mobile account hub. */
export function AccountMenu() {
  return (
    <div className="space-y-6">
      {accountMenu.map((section) => (
        <section key={section.title}>
          <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-muted">{section.title}</h2>
          <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border">
            {section.items.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link href={href} className="flex items-center gap-3 px-4 py-3.5 transition active:bg-surface">
                  <span className="grid size-9 place-items-center rounded-xl bg-surface">
                    <Icon className="size-[18px]" aria-hidden />
                  </span>
                  <span className="flex-1 text-[15px]">{label}</span>
                  <ChevronRight className="size-4 text-muted" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
      <LogoutButton />
    </div>
  );
}

export function LogoutButton({ compact = false }: { compact?: boolean }) {
  // TODO: wire to auth sign-out server action
  return (
    <button
      type="button"
      className={
        compact
          ? "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-600 hover:bg-red-50"
          : "flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-border text-[15px] font-medium text-red-600 active:bg-red-50"
      }
    >
      <LogOut className="size-[18px]" aria-hidden />
      Log out
    </button>
  );
}
