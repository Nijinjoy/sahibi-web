import Link from "next/link";
import { Sparkles, Star, ThumbsUp, Wrench } from "lucide-react";
import { conditionLabel } from "@/features/listings/conditions";
import { countByCondition } from "@/features/listings/data/mock";
import { plural } from "@/lib/utils";
import type { ItemCondition } from "@/types";

const options: { condition: ItemCondition; text: string; icon: typeof Star; tint: string }[] = [
  { condition: "new", text: "Tags still on", icon: Sparkles, tint: "bg-emerald-50 text-emerald-600" },
  { condition: "like_new", text: "Barely used", icon: Star, tint: "bg-sky-50 text-sky-600" },
  { condition: "good", text: "Light wear", icon: ThumbsUp, tint: "bg-amber-50 text-amber-600" },
  { condition: "fair", text: "Visible wear", icon: Wrench, tint: "bg-orange-50 text-orange-600" },
];

export function ConditionGrid() {
  return (
    <ul className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
      {options.map(({ condition, text, icon: Icon, tint }) => (
        <li key={condition}>
          <Link
            href={`/search?condition=${condition}`}
            className="flex items-center gap-3 rounded-2xl border border-border p-3 transition hover:border-brand active:scale-[0.98]"
          >
            <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${tint}`}>
              <Icon className="size-5" aria-hidden />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold">{conditionLabel[condition]}</span>
              <span className="block truncate text-xs text-muted">{text}</span>
              <span className="mt-0.5 block text-[11px] font-medium text-brand">
                {plural(countByCondition(condition), "item")}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
