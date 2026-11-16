"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, MoreVertical, SendHorizontal, Star, Tag, X } from "lucide-react";
import type { ChatMessage, Conversation } from "../types";
import { formatPrice } from "@/lib/utils";
import { Avatar } from "./avatar";

function now() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
}

function OfferBubble({
  message,
  canRespond,
  onRespond,
}: {
  message: Extract<ChatMessage, { kind: "offer" }>;
  canRespond: boolean;
  onRespond: (status: "accepted" | "declined") => void;
}) {
  const mine = message.from === "me";
  const statusStyle = {
    pending: "bg-amber-500/15 text-amber-600",
    accepted: "bg-emerald-500/15 text-emerald-600",
    declined: "bg-red-500/15 text-red-600",
  }[message.status];

  return (
    <div className="w-60 overflow-hidden rounded-2xl border border-border bg-background">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2 text-xs text-muted">
        <Tag className="size-3.5" aria-hidden />
        {mine ? "Your offer" : "Offer received"}
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-xl font-bold">{formatPrice(message.amount)}</span>
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${statusStyle}`}>{message.status}</span>
      </div>
      {canRespond && message.status === "pending" && (
        <div className="grid grid-cols-2 border-t border-border text-sm font-medium">
          <button type="button" onClick={() => onRespond("declined")} className="flex items-center justify-center gap-1 py-2.5 hover:bg-surface">
            <X className="size-4" aria-hidden /> Decline
          </button>
          <button type="button" onClick={() => onRespond("accepted")} className="flex items-center justify-center gap-1 border-l border-border py-2.5 text-brand hover:bg-surface">
            <Check className="size-4" aria-hidden /> Accept
          </button>
        </div>
      )}
    </div>
  );
}

export function ChatThread({ conversation }: { conversation: Conversation }) {
  const { user, item } = conversation;
  const [messages, setMessages] = useState(conversation.messages);
  const [text, setText] = useState("");
  const [offering, setOffering] = useState(false);
  const [offer, setOffer] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [messages]);

  function send(e: React.FormEvent) {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    setMessages((m) => [...m, { id: crypto.randomUUID(), from: "me", kind: "text", text: value, time: now() }]);
    setText("");
  }

  function sendOffer(e: React.FormEvent) {
    e.preventDefault();
    const amount = Math.round(parseFloat(offer) * 100);
    if (!amount || amount <= 0) return;
    setMessages((m) => [...m, { id: crypto.randomUUID(), from: "me", kind: "offer", amount, status: "pending", time: now() }]);
    setOffer("");
    setOffering(false);
  }

  function respond(id: string, status: "accepted" | "declined") {
    setMessages((m) => m.map((msg) => (msg.id === id && msg.kind === "offer" ? { ...msg, status } : msg)));
  }

  return (
    // Mobile: full-screen over header + tabs. Desktop: right pane.
    <div className="fixed inset-0 z-50 flex flex-col bg-background md:static md:z-auto md:h-full">
      {/* Top bar */}
      <div className="flex h-16 shrink-0 items-center gap-3 border-b border-border px-2 md:px-4">
        <Link href="/chats" aria-label="Back to chats" className="grid size-10 place-items-center rounded-full hover:bg-surface md:hidden">
          <ArrowLeft className="size-5" aria-hidden />
        </Link>
        <Avatar user={user} size="sm" />
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold leading-tight">{user.name}</p>
          <p className="flex items-center gap-1 text-xs text-muted">
            <Star className="size-3 fill-amber-400 text-amber-400" aria-hidden />
            {user.rating.toFixed(1)} · {user.online ? <span className="text-emerald-500">Online</span> : `@${user.handle}`}
          </p>
        </div>
        <button type="button" aria-label="More options" className="grid size-10 place-items-center rounded-full hover:bg-surface">
          <MoreVertical className="size-5" aria-hidden />
        </button>
      </div>

      {/* Item card */}
      <div className="flex shrink-0 items-center gap-3 border-b border-border bg-surface/60 px-4 py-2.5">
        <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-background text-2xl" aria-hidden>
          {item.emoji}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">{item.title}</p>
          <p className="text-sm">
            <span className="font-semibold">{formatPrice(item.price)}</span>
            <span className="text-muted"> · {item.condition}</span>
            {item.sold && <span className="ml-1.5 rounded bg-foreground px-1.5 py-0.5 text-[10px] font-bold uppercase text-background">Sold</span>}
          </p>
        </div>
        {conversation.role === "buying" && !item.sold && (
          <Link href="/checkout" className="shrink-0 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground hover:opacity-90">
            Buy now
          </Link>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <p className="mb-4 text-center text-xs text-muted">
          🔒 Keep payments on Sahbi for buyer protection
        </p>
        <ul className="space-y-2">
          {messages.map((m) => {
            const mine = m.from === "me";
            return (
              <li key={m.id} className={`flex flex-col ${mine ? "items-end" : "items-start"}`}>
                {m.kind === "offer" ? (
                  <OfferBubble message={m} canRespond={!mine} onRespond={(s) => respond(m.id, s)} />
                ) : (
                  <p
                    className={`max-w-[78%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2 text-[15px] leading-snug ${
                      mine ? "rounded-br-md bg-brand text-brand-foreground" : "rounded-bl-md bg-surface"
                    }`}
                  >
                    {m.text}
                  </p>
                )}
                <span className="mt-0.5 px-1 text-[11px] text-muted">{m.time}</span>
              </li>
            );
          })}
        </ul>
        <div ref={endRef} />
      </div>

      {/* Offer input */}
      {offering && (
        <form onSubmit={sendOffer} className="flex shrink-0 items-center gap-2 border-t border-border bg-surface/60 px-4 py-3">
          <span className="text-sm text-muted">Your offer</span>
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-muted">AED</span>
            <input
              autoFocus
              inputMode="decimal"
              value={offer}
              onChange={(e) => setOffer(e.target.value.replace(/[^\d.]/g, ""))}
              placeholder={(item.price / 100 * 0.9).toFixed(0)}
              aria-label="Offer amount"
              className="h-10 w-full rounded-full border border-border bg-background pl-12 pr-3 text-sm outline-none focus:border-brand"
            />
          </div>
          <button type="button" onClick={() => setOffering(false)} className="px-2 text-sm text-muted">Cancel</button>
          <button type="submit" className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground">Send</button>
        </form>
      )}

      {/* Composer */}
      <form
        onSubmit={send}
        className="flex shrink-0 items-center gap-2 border-t border-border px-3 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:pb-3"
      >
        {conversation.role === "buying" && !item.sold && !offering && (
          <button
            type="button"
            onClick={() => setOffering(true)}
            className="flex h-10 shrink-0 items-center gap-1 rounded-full border border-border px-3 text-sm font-medium hover:bg-surface"
          >
            <Tag className="size-4" aria-hidden /> Offer
          </button>
        )}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a message…"
          aria-label="Message"
          className="h-10 min-w-0 flex-1 rounded-full border border-border bg-surface px-4 text-[15px] outline-none focus:border-brand"
        />
        <button
          type="submit"
          aria-label="Send"
          disabled={!text.trim()}
          className="grid size-10 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground transition disabled:opacity-40"
        >
          <SendHorizontal className="size-5" aria-hidden />
        </button>
      </form>
    </div>
  );
}
