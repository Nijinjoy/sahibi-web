import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { ChatList } from "@/features/chat/components/chat-list";

export const metadata: Metadata = { title: "Chats" };

export default function ChatsPage() {
  return (
    <div className="-mx-4 -my-8 md:mx-0 md:my-0">
      <h1 className="px-4 pt-4 text-2xl font-semibold md:hidden">Chats</h1>
      <div className="md:grid md:h-[calc(100dvh-11rem)] md:grid-cols-[360px_1fr] md:overflow-hidden md:rounded-2xl md:border md:border-border">
        <div className="md:border-r md:border-border">
          <ChatList />
        </div>
        <div className="hidden flex-col items-center justify-center gap-3 text-center md:flex">
          <MessageCircle className="size-12 text-muted" aria-hidden />
          <p className="font-medium">Select a conversation</p>
          <p className="max-w-xs text-sm text-muted">Chat with buyers and sellers about items, offers and delivery.</p>
        </div>
      </div>
    </div>
  );
}
