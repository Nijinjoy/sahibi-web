import Link from "next/link";
import { categories } from "@/config/navigation";

export function CategoryRail() {
  return (
    <ul className="-mx-4 flex gap-2 overflow-x-auto px-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-8 md:px-0">
      {categories.map((c) => (
        <li key={c.slug} className="shrink-0">
          <Link href={`/categories/${c.slug}`} className="group flex w-[72px] flex-col items-center gap-1.5 md:w-auto">
            <span className={`grid size-[60px] place-items-center rounded-2xl text-[28px] transition group-hover:scale-105 md:size-20 md:text-4xl ${c.tint}`} aria-hidden>
              {c.emoji}
            </span>
            <span className="w-full truncate text-center text-xs font-medium">{c.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
