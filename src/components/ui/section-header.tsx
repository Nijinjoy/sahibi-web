import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function SectionHeader({ title, subtitle, href }: { title: string; subtitle?: string; href?: string }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-lg font-semibold tracking-tight md:text-xl">{title}</h2>
        {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
      </div>
      {href && (
        <Link href={href} className="flex shrink-0 items-center text-sm font-medium text-brand hover:underline">
          See all <ChevronRight className="size-4" aria-hidden />
        </Link>
      )}
    </div>
  );
}
