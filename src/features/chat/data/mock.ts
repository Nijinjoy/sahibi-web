import type { Conversation } from "../types";

// Demo data until the chat backend exists. Prices are in minor units (cents).
export const conversations: Conversation[] = [
  {
    id: "c1",
    role: "buying",
    user: { name: "Aisha Rahman", handle: "aisha.closet", initials: "AR", color: "bg-rose-500", online: true, rating: 4.9 },
    item: { id: "l101", title: "Levi's Vintage Denim Jacket", price: 4500, emoji: "🧥", condition: "Like new" },
    unread: 2,
    lastTime: "10:42",
    messages: [
      { id: "m1", from: "me", kind: "text", text: "Hi! Is the denim jacket still available?", time: "10:20" },
      { id: "m2", from: "them", kind: "text", text: "Yes it is 😊 Worn only twice.", time: "10:24" },
      { id: "m3", from: "me", kind: "offer", amount: 3800, status: "pending", time: "10:31" },
      { id: "m4", from: "them", kind: "text", text: "I can do $40 and ship today.", time: "10:40" },
      { id: "m5", from: "them", kind: "text", text: "Let me know!", time: "10:42" },
    ],
  },
  {
    id: "c2",
    role: "selling",
    user: { name: "Omar Haddad", handle: "omarh", initials: "OH", color: "bg-sky-500", online: false, rating: 4.7 },
    item: { id: "l202", title: "iPhone 13 · 128GB · Midnight", price: 39000, emoji: "📱", condition: "Good" },
    unread: 1,
    lastTime: "09:15",
    messages: [
      { id: "m1", from: "them", kind: "text", text: "Hello, what's the battery health?", time: "08:50" },
      { id: "m2", from: "me", kind: "text", text: "It's at 89%. No scratches on the screen.", time: "09:02" },
      { id: "m3", from: "them", kind: "offer", amount: 35000, status: "pending", time: "09:15" },
    ],
  },
  {
    id: "c3",
    role: "buying",
    user: { name: "Lina Farouk", handle: "lina.reads", initials: "LF", color: "bg-amber-500", online: true, rating: 5.0 },
    item: { id: "l303", title: "Harry Potter Box Set (7 books)", price: 2800, emoji: "📚", condition: "Good" },
    unread: 0,
    lastTime: "Yesterday",
    messages: [
      { id: "m1", from: "me", kind: "offer", amount: 2500, status: "accepted", time: "Yesterday" },
      { id: "m2", from: "them", kind: "text", text: "Accepted! I'll ship it tomorrow morning 📦", time: "Yesterday" },
      { id: "m3", from: "me", kind: "text", text: "Perfect, thank you!", time: "Yesterday" },
    ],
  },
  {
    id: "c4",
    role: "selling",
    user: { name: "Yusuf Karim", handle: "yk_sports", initials: "YK", color: "bg-violet-500", online: false, rating: 4.5 },
    item: { id: "l404", title: "Nike Air Zoom Pegasus 39 · UK 9", price: 5500, emoji: "👟", condition: "Like new", sold: true },
    unread: 0,
    lastTime: "Mon",
    messages: [
      { id: "m1", from: "them", kind: "text", text: "Are these true to size?", time: "Mon" },
      { id: "m2", from: "me", kind: "text", text: "Yes, true to size. Sorry, they just sold!", time: "Mon" },
    ],
  },
  {
    id: "c5",
    role: "buying",
    user: { name: "Sara Nasser", handle: "sara.home", initials: "SN", color: "bg-teal-500", online: false, rating: 4.8 },
    item: { id: "l505", title: "Mid-century Oak Side Table", price: 7000, emoji: "🪑", condition: "Fair" },
    unread: 0,
    lastTime: "Sun",
    messages: [
      { id: "m1", from: "me", kind: "text", text: "Could you share the dimensions?", time: "Sun" },
      { id: "m2", from: "them", kind: "text", text: "50cm wide, 45cm deep, 55cm tall.", time: "Sun" },
    ],
  },
];

export function getConversation(id: string) {
  return conversations.find((c) => c.id === id);
}
