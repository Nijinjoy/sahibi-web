import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export function EmptyState({
  icon: Icon, title, text, action,
}: { icon: LucideIcon; title: string; text: string; action?: { href: string; label: string } }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-border px-6 py-16 text-center">
      <span className="grid size-14 place-items-center rounded-2xl bg-surface">
        <Icon className="size-7 text-muted" aria-hidden />
      </span>
      <p className="font-medium">{title}</p>
      <p className="max-w-xs text-sm text-muted">{text}</p>
      {action && (
        <Link href={action.href} className="mt-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground hover:opacity-90">
          {action.label}
        </Link>
      )}
    </div>
  );
}
