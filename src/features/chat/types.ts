export type ChatRole = "buying" | "selling";

export type ChatMessage =
  | { id: string; from: "me" | "them"; kind: "text"; text: string; time: string }
  | { id: string; from: "me" | "them"; kind: "offer"; amount: number; status: "pending" | "accepted" | "declined"; time: string };

export type Conversation = {
  id: string;
  role: ChatRole;
  user: { name: string; handle: string; initials: string; color: string; online: boolean; rating: number };
  item: { id: string; title: string; price: number; emoji: string; condition: string; sold?: boolean };
  unread: number;
  lastTime: string;
  messages: ChatMessage[];
};
