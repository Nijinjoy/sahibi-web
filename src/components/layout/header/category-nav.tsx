import Link from "next/link";
import { categories } from "@/config/navigation";

export function CategoryNav() {
  return (
    <nav aria-label="Categories" className="hidden border-t border-border md:block">
      <ul className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-1.5 text-sm [scrollbar-width:none]">
        {categories.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/categories/${c.slug}`}
              className="block whitespace-nowrap rounded-full px-3 py-1.5 text-muted transition hover:bg-surface hover:text-foreground"
            >
              {c.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
