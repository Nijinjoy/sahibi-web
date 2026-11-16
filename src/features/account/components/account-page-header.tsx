import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/** Sub-page title; shows a back arrow to the account hub on mobile. */
export function AccountPageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-6 flex items-start gap-2">
      <Link
        href="/account"
        aria-label="Back to account"
        className="-ml-2 grid size-10 shrink-0 place-items-center rounded-full hover:bg-surface md:hidden"
      >
        <ArrowLeft className="size-5" aria-hidden />
      </Link>
      <div className="pt-1 md:pt-0">
        <h1 className="text-2xl font-semibold">{title}</h1>
        {description && <p className="mt-1 text-sm text-muted">{description}</p>}
      </div>
    </div>
  );
}
