import Form from "next/form";
import { Search } from "lucide-react";

export function SearchBar({ className = "" }: { className?: string }) {
  return (
    <Form action="/search" role="search" className={`relative w-full ${className}`}>
      <Search
        aria-hidden
        className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted"
      />
      <input
        type="search"
        name="q"
        placeholder="Search for items, brands or sellers"
        aria-label="Search"
        className="h-11 w-full rounded-full border border-border bg-surface pl-11 pr-4 text-sm outline-none transition placeholder:text-muted focus:border-brand focus:bg-background focus:ring-4 focus:ring-brand/15"
      />
    </Form>
  );
}
