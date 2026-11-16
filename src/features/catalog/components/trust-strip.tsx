import { BadgeCheck, ShieldCheck, Truck } from "lucide-react";

const points = [
  { icon: ShieldCheck, title: "Buyer protection", text: "Money back if it's not as described" },
  { icon: BadgeCheck, title: "Verified sellers", text: "ID-checked and rated by buyers" },
  { icon: Truck, title: "Easy delivery", text: "Doorstep pickup and tracked shipping" },
];

export function TrustStrip() {
  return (
    <ul className="grid gap-3 rounded-3xl bg-surface p-4 sm:grid-cols-3 md:p-6">
      {points.map(({ icon: Icon, title, text }) => (
        <li key={title} className="flex items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-background text-brand">
            <Icon className="size-5" aria-hidden />
          </span>
          <div>
            <p className="text-sm font-semibold">{title}</p>
            <p className="text-xs text-muted">{text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
