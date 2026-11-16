import type { Listing } from "../types";

// Demo listings until the database exists. Prices in cents.
export const listings: Listing[] = [
  { id: "l101", title: "Vintage Denim Jacket", brand: "Levi's", price: 4500, originalPrice: 12000, condition: "like_new", category: "women", emoji: "🧥", tint: "from-sky-100 to-indigo-100", location: "Dubai Marina", postedAgo: "2h", postedMinutes: 120, distanceKm: 1.2, seller: { handle: "aisha.closet", rating: 4.9 }, likes: 24 },
  { id: "l202", title: "iPhone 13 · 128GB · Midnight", brand: "Apple", price: 39000, originalPrice: 79900, condition: "good", category: "electronics", emoji: "📱", tint: "from-zinc-100 to-slate-200", location: "Deira", postedAgo: "3h", postedMinutes: 180, distanceKm: 6.8, seller: { handle: "nijin", rating: 4.8 }, likes: 61 },
  { id: "l303", title: "Harry Potter Box Set (7 books)", price: 2800, originalPrice: 6500, condition: "good", category: "books", emoji: "📚", tint: "from-amber-100 to-orange-100", location: "Al Barsha", postedAgo: "5h", postedMinutes: 300, distanceKm: 3.4, seller: { handle: "lina.reads", rating: 5.0 }, likes: 18 },
  { id: "l505", title: "Mid-century Oak Side Table", price: 7000, originalPrice: 18000, condition: "fair", category: "home", emoji: "🪑", tint: "from-orange-100 to-amber-200", location: "JLT", postedAgo: "8h", postedMinutes: 480, distanceKm: 2.1, seller: { handle: "sara.home", rating: 4.8 }, likes: 33 },
  { id: "l606", title: "Sony WH-1000XM4 Headphones", brand: "Sony", price: 14500, originalPrice: 34900, condition: "like_new", category: "electronics", emoji: "🎧", tint: "from-slate-100 to-zinc-200", location: "Business Bay", postedAgo: "1h", postedMinutes: 60, distanceKm: 4.5, seller: { handle: "techtrade", rating: 4.6 }, likes: 47 },
  { id: "l707", title: "Floral Summer Maxi Dress", brand: "Zara", price: 1800, originalPrice: 5900, condition: "like_new", category: "women", emoji: "👗", tint: "from-rose-100 to-pink-100", location: "Jumeirah", postedAgo: "30m", postedMinutes: 30, distanceKm: 0.8, seller: { handle: "aisha.closet", rating: 4.9 }, likes: 12 },
  { id: "l808", title: "LEGO Star Wars Millennium Falcon", brand: "LEGO", price: 9500, originalPrice: 16999, condition: "good", category: "kids", emoji: "🧱", tint: "from-yellow-100 to-amber-100", location: "Mirdif", postedAgo: "1d", postedMinutes: 1440, distanceKm: 9.6, seller: { handle: "toybox", rating: 4.7 }, likes: 29 },
  { id: "l909", title: "Road Bike · 54cm Frame", brand: "Giant", price: 42000, originalPrice: 95000, condition: "good", category: "sports", emoji: "🚲", tint: "from-lime-100 to-emerald-100", location: "Al Quoz", postedAgo: "4h", postedMinutes: 240, distanceKm: 5.3, seller: { handle: "yk_sports", rating: 4.5 }, likes: 38 },
  { id: "l010", title: "Nintendo Switch OLED + 2 Games", brand: "Nintendo", price: 21000, originalPrice: 34900, condition: "like_new", category: "electronics", emoji: "🎮", tint: "from-red-100 to-rose-100", location: "Silicon Oasis", postedAgo: "6h", postedMinutes: 360, distanceKm: 12.4, seller: { handle: "techtrade", rating: 4.6 }, likes: 72 },
  { id: "l111", title: "Leather Chelsea Boots · UK 9", brand: "Clarks", price: 6500, originalPrice: 15000, condition: "good", category: "men", emoji: "🥾", tint: "from-stone-100 to-amber-100", location: "Karama", postedAgo: "2d", postedMinutes: 2880, distanceKm: 3.9, seller: { handle: "omarh", rating: 4.7 }, likes: 15 },
  { id: "l212", title: "Monstera Plant with Ceramic Pot", price: 3500, condition: "new", category: "home", emoji: "🪴", tint: "from-emerald-100 to-teal-100", location: "Arabian Ranches", postedAgo: "3h", postedMinutes: 180, distanceKm: 7.7, seller: { handle: "sara.home", rating: 4.8 }, likes: 21 },
  { id: "l313", title: "Canon EOS M50 + 15-45mm Lens", brand: "Canon", price: 32000, originalPrice: 64900, condition: "like_new", category: "electronics", emoji: "📷", tint: "from-neutral-100 to-stone-200", location: "Downtown", postedAgo: "9h", postedMinutes: 540, distanceKm: 2.6, seller: { handle: "techtrade", rating: 4.6 }, likes: 54 },
];

export const justListed = [...listings].sort((a, b) => a.postedMinutes - b.postedMinutes).slice(0, 8);
export const nearbyListings = [...listings].sort((a, b) => a.distanceKm - b.distanceKm).slice(0, 6);
export const trendingElectronics = listings.filter((l) => l.category === "electronics");
export const underForty = listings.filter((l) => l.price <= 4000);

export function countByCondition(condition: Listing["condition"]) {
  return listings.filter((l) => l.condition === condition).length;
}
