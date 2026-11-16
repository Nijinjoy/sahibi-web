"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

export function LikeButton({ initialLikes, className = "" }: { initialLikes: number; className?: string }) {
  const [liked, setLiked] = useState(false);
  return (
    <button
      type="button"
      aria-label={liked ? "Remove from wishlist" : "Save to wishlist"}
      aria-pressed={liked}
      onClick={(e) => {
        // Card is a link: don't navigate when tapping the heart
        e.preventDefault();
        e.stopPropagation();
        setLiked((v) => !v);
      }}
      className={`flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs font-medium shadow-sm backdrop-blur transition active:scale-90 ${className}`}
    >
      <Heart className={`size-4 transition ${liked ? "fill-rose-500 text-rose-500" : "text-foreground"}`} aria-hidden />
      {initialLikes + (liked ? 1 : 0)}
    </button>
  );
}
