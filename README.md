# Studio Kola — Template 14

A premium FinStore template for **Notion template shops and digital-template creators**. Product-y, tight, mono-accented, filterable grid.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**.
Design: **Inter** display + **JetBrains Mono** accents. Cool white + crisp blue accent.

## Pages
`/` Home (hero + flagship showcase + trust strip + grid + bundle + reviews) · `/templates` Filterable catalogue (search + category + tier + sort) · `/templates/[slug]` Product with gallery, features, perfect-for, changelog · `/about` (with credentials) · `/contact` · `/faq` · `/checkout` · `/thank-you`

## Customise
- **Brand & maker** → `lib/site-config.ts`
- **Templates & bundles** → `mock/products.ts`
- **Reviews** → `mock/testimonials.ts`
- **FAQs** → `mock/faqs.ts`
- **Design tokens** → `app/globals.css`

Note: template covers use Unsplash by default. Replace with your own screenshots for real production.

## Run
```bash
npm install && npm run dev
```
