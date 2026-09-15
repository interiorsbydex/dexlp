# dexlp

Landing page project for Interiors by DeX, a residential interior design company operating in Chennai. The repo contains a homepage and three campaign-specific landing page variants, each built to test different messaging and conversion approaches for paid traffic.

## Tech Stack

- **Framework:** Next.js 16.2.6 (App Router), React 19
- **Styling:** Tailwind CSS v4
- **Icons:** lucide-react
- **Carousel:** embla-carousel / embla-carousel-react
- **UI components:** shadcn, @base-ui/react
- **Database:** Neon Postgres, accessed via the `pg` driver (no ORM)
- **Language:** TypeScript

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Original homepage. Nav, Hero, Testimonials, Gallery Carousel, How It Works, Why Us, Differentiators, FAQ, Bottom CTA, Footer, Mobile Sticky Bar. |
| `/campaign-2` | `app/campaign-2/page.tsx` | Campaign variant emphasizing accountability. Nav, Hero, Trust Bar, Comparison Block, Gallery Carousel, Testimonials, How It Works, Guarantee, FAQ, Bottom CTA, Footer, Mobile Sticky Bar. |
| `/campaign-3` | `app/campaign-3/page.tsx` | Campaign variant built around "everything in writing" positioning. Nav, Hero, Trust Bar, Video Testimonials, Differentiators, Comparison Table, Gallery Carousel, inline CTA, Testimonials, How It Works, FAQ, Bottom CTA, Footer, Mobile Sticky Bar. |
| `/campaign-4` | `app/campaign-4/page.tsx` | Duplicate of `/campaign-3` with a reduced section set (Video Testimonials, Differentiators, Comparison Table, Testimonials, and FAQ removed) to match a leaner reference design, and rewritten for message-match SEO. Nav (shared with campaign-3), Hero, Trust Bar, Services, Gallery Carousel, inline CTA, How It Works, Bottom CTA, Footer, Mobile Sticky Bar. |
| `/thank-you` | `app/thank-you/page.tsx` | Post-submission confirmation page. Pushes a `thank_you_page_view` event to `window.dataLayer` on load. |

Each campaign has its own component directory (`components/campaign-2/`, `components/campaign-3/`, `components/campaign-4/`) with independently editable copies of Nav, Hero, Trust Bar, Gallery Carousel, How It Works, Bottom CTA, and Lead Form (plus campaign-specific sections). `campaign-4` reuses `NavC3` from campaign-3 rather than forking it. The root-level components (`components/hero.tsx`, `components/nav.tsx`, etc.) belong only to the `/` homepage.

## `/campaign-4` SEO / Message Match

`components/campaign-4/hero-c4.tsx` reads a `?kw=` URL query parameter and swaps the H1/subheading to match ad-group intent instead of listing every keyword on one static headline:

- No parameter (or unrecognized value): default "everything in writing" headline
- `?kw=kitchen`: modular kitchen focused headline
- `?kw=2bhk`: 2BHK focused headline
- `?kw=3bhk`: 3BHK focused headline

This is intended to be paired with matching Google Ads final URLs per ad group.

## Lead Capture

All lead forms across all pages submit to a single API route:

- **Route:** `app/api/submit/route.ts` (`POST`)
- **Behavior:** On submission it does two things in sequence:
  1. Inserts the lead (`name`, `email`, `phone`, `budget`, `location`, `source`) into a `leads` table in the connected Neon Postgres database via a parameterized `pg` query. If this insert fails, the error is logged but the request continues (a DB failure does not block the Google Sheets write).
  2. Forwards the same fields as query parameters to a Google Apps Script webhook URL (`WEBHOOK_URL` env var), which appends a row to a Google Sheet. The phone number is sent with a leading space so Google Sheets stores it as plain text instead of misinterpreting a leading `+` as a formula (this previously caused `#ERROR!` in the sheet).

Leads therefore land in two places: the Neon `leads` table and a Google Sheet.

## Environment Variables

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | Neon Postgres connection string used by `app/api/submit/route.ts` to insert leads. |
| `WEBHOOK_URL` | Google Apps Script URL that appends form submissions to a Google Sheet. |

The following Neon-related variables are also provisioned in this project's environment but are not currently referenced in application code: `DATABASE_URL_UNPOOLED`, `NEON_AUTH_BASE_URL`, `NEON_PROJECT_ID`, `PGDATABASE`, `PGHOST`, `PGHOST_UNPOOLED`, `PGPASSWORD`, `PGUSER`, `POSTGRES_DATABASE`, `POSTGRES_HOST`, `POSTGRES_PASSWORD`, `POSTGRES_PRISMA_URL`, `POSTGRES_URL`, `POSTGRES_URL_NON_POOLING`, `POSTGRES_URL_NO_SSL`, `POSTGRES_USER`.

## Database Schema

The `leads` table (Neon Postgres) has the following columns, written to by `app/api/submit/route.ts`:

```sql
CREATE TABLE leads (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  budget TEXT,
  location TEXT,
  source TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
)
```

## Local Development

```bash
pnpm install
pnpm dev
```

```bash
pnpm build   # production build
pnpm start   # run production build
pnpm lint    # eslint
```

## Additional Documentation

`README-LP-DOCS.md` indexes internal build notes from the LP-1 landing page build (lessons learned, component patterns, and a QA checklist) that were used as reference while building the campaign-2 and campaign-3 variants.
