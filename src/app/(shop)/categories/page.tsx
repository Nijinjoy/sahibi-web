import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { categories } from "@/config/navigation";

export const metadata: Metadata = { title: "Categories" };

export default function CategoriesPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Categories</h1>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/categories/${c.slug}`}
              className="flex h-24 items-end justify-between rounded-2xl border border-border bg-surface p-4 font-medium transition hover:border-brand"
            >
              {c.label}
              <ChevronRight className="size-4 text-muted" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
