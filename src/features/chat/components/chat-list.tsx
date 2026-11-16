"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { conversations } from "../data/mock";
import type { ChatMessage } from "../types";
import { formatPrice } from "@/lib/utils";
import { Avatar } from "./avatar";

const filters = [
  { id: "all", label: "All" },
  { id: "buying", label: "Buying" },
  { id: "selling", label: "Selling" },
  { id: "unread", label: "Unread" },
] as const;

type Filter = (typeof filters)[number]["id"];

function preview(m: ChatMessage) {
  const prefix = m.from === "me" ? "You: " : "";
  if (m.kind === "offer") return `${prefix}Offered ${formatPrice(m.amount)}`;
  return prefix + m.text;
}

export function ChatList({ activeId }: { activeId?: string }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const items = conversations.filter((c) => {
    if (filter === "unread" && c.unread === 0) return false;
    if ((filter === "buying" || filter === "selling") && c.role !== filter) return false;
    if (q && !`${c.user.name} ${c.item.title}`.toLowerCase().includes(q)) return false;
    return true;
  });

  return (
    <div className="flex h-full flex-col">
      <div className="space-y-3 border-b border-border p-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search chats"
            aria-label="Search chats"
            className="h-10 w-full rounded-full border border-border bg-surface pl-9 pr-4 text-sm outline-none focus:border-brand"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto [scrollbar-width:none]" role="tablist">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
                filter === f.id ? "bg-foreground text-background" : "bg-surface text-muted hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <ul className="flex-1 overflow-y-auto">
        {items.length === 0 && <li className="p-8 text-center text-sm text-muted">No chats found</li>}
        {items.map((c) => {
          const last = c.messages[c.messages.length - 1];
          const active = c.id === activeId;
          return (
            <li key={c.id}>
              <Link
                href={`/chats/${c.id}`}
                aria-current={active ? "page" : undefined}
                className={`flex gap-3 px-4 py-3 transition ${active ? "bg-surface" : "hover:bg-surface/60"}`}
              >
                <Avatar user={c.user} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className={`truncate ${c.unread ? "font-semibold" : "font-medium"}`}>{c.user.name}</p>
                    <span className={`shrink-0 text-xs ${c.unread ? "font-semibold text-brand" : "text-muted"}`}>
                      {c.lastTime}
                    </span>
                  </div>
                  <p className="truncate text-xs text-muted">
                    <span aria-hidden>{c.item.emoji}</span> {c.item.title}
                  </p>
                  <div className="mt-0.5 flex items-center justify-between gap-2">
                    <p className={`truncate text-sm ${c.unread ? "text-foreground" : "text-muted"}`}>{preview(last)}</p>
                    {c.unread > 0 && (
                      <span className="grid min-w-5 shrink-0 place-items-center rounded-full bg-brand px-1.5 text-[11px] font-semibold leading-5 text-brand-foreground">
                        {c.unread}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
