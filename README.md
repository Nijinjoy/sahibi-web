# Sahbi

Next.js app.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
src/
├── app/                    # Routing only: pages, layouts, route handlers
│   ├── (shop)/             # Public storefront (header + footer layout)
│   │   ├── page.tsx        # /
│   │   ├── search/         # /search
│   │   ├── categories/[slug]/
│   │   ├── listings/[id]/  # Item detail
│   │   ├── sellers/[handle]/
│   │   ├── categories/     # Index of all categories (+ [slug])
│   │   ├── chats/          # Buyer ↔ seller messaging (+ [id] thread)
│   │   ├── cart/  checkout/
│   │   └── account/        # Customer area: orders, offers, wishlist, addresses, settings
│   ├── (seller)/seller/    # Seller dashboard: listings (+ /new), sales, offers, payouts, shop settings
│   ├── (auth)/             # /login, /register (minimal layout)
│   ├── api/webhooks/       # Third-party callbacks (e.g. Stripe)
│   ├── layout.tsx  error.tsx  not-found.tsx  robots.ts  sitemap.ts
├── features/<domain>/      # Business logic, one folder per domain
│   ├── components/         #   UI specific to this domain
│   ├── actions.ts          #   Server Actions (mutations)
│   ├── queries.ts          #   Data reads
│   ├── schemas.ts          #   Validation
│   └── types.ts
├── components/
│   ├── ui/                 # Generic primitives (Button, Input, Dialog…)
│   └── layout/             # Site header, footer
├── config/                 # App-wide constants (site.ts)
├── lib/                    # Infrastructure: db client, auth, utils
├── hooks/                  # Shared client hooks
└── types/                  # Shared domain types (condition, statuses)
```

Domains: `auth`, `chat`, `listings`, `catalog`, `search`, `cart`, `checkout`, `orders`, `offers`, `sellers`, `reviews`, `payments`.

### Rules

- `app/` stays thin: a page fetches through `features/*` and renders feature components.
- A feature never imports from another feature's internals. Shared code moves to `components/`, `lib/` or `types/`.
- Import with the `@/` alias (maps to `src/`).
- `cacheComponents` is on: wrap runtime data (`params`, `cookies()`, uncached DB reads) in `<Suspense>` or use `"use cache"`.
- Request interception (auth redirects) goes in `src/proxy.ts`. In Next 16 it replaces middleware.
- Store money as integer minor units (cents). Format it with `formatPrice` from `@/lib/utils`.
