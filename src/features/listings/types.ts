import type { ItemCondition } from "@/types";

export type Listing = {
  id: string;
  title: string;
  brand?: string;
  price: number; // minor units
  originalPrice?: number;
  condition: ItemCondition;
  category: string;
  emoji: string; // demo stand-in for photos
  tint: string;
  location: string;
  postedAgo: string;
  postedMinutes: number; // for sorting (demo)
  distanceKm: number; // from the viewer (demo)
  seller: { handle: string; rating: number };
  likes: number;
};
