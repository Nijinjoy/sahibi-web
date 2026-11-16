import type { Conversation } from "../types";

export function Avatar({ user, size = "md" }: { user: Conversation["user"]; size?: "sm" | "md" }) {
  const dims = size === "sm" ? "size-9 text-xs" : "size-12 text-sm";
  return (
    <span className="relative shrink-0">
      <span className={`grid ${dims} place-items-center rounded-full font-semibold text-white ${user.color}`}>
        {user.initials}
      </span>
      {user.online && (
        <span className="absolute bottom-0 right-0 size-3 rounded-full bg-emerald-500 ring-2 ring-background" />
      )}
    </span>
  );
}
