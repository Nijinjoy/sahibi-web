import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ChatList } from "@/features/chat/components/chat-list";
import { ChatThread } from "@/features/chat/components/chat-thread";
import { getConversation } from "@/features/chat/data/mock";

export default function Page(props: PageProps<"/chats/[id]">) {
  return (
    <div className="md:grid md:h-[calc(100dvh-11rem)] md:grid-cols-[360px_1fr] md:overflow-hidden md:rounded-2xl md:border md:border-border">
      <Suspense>
        <Conversation params={props.params} />
      </Suspense>
    </div>
  );
}

async function Conversation({ params }: { params: PageProps<"/chats/[id]">["params"] }) {
  const { id } = await params;
  const conversation = getConversation(id);
  if (!conversation) notFound();

  return (
    <>
      <div className="hidden border-r border-border md:block">
        <ChatList activeId={id} />
      </div>
      {/* key resets local demo state when switching conversations */}
      <ChatThread key={id} conversation={conversation} />
    </>
  );
}
