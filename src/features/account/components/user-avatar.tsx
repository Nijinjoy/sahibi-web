import { BadgeCheck } from "lucide-react";

export function UserAvatar({ initials, verified, size = "lg" }: { initials: string; verified?: boolean; size?: "md" | "lg" }) {
  const dims = size === "lg" ? "size-16 text-xl" : "size-11 text-sm";
  return (
    <span className="relative shrink-0">
      <span className={`grid ${dims} place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 font-semibold text-white`}>
        {initials}
      </span>
      {verified && (
        <BadgeCheck
          aria-label="Verified"
          className="absolute -bottom-0.5 -right-0.5 size-5 fill-brand text-white"
        />
      )}
    </span>
  );
}
