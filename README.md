# LUNIBOP — Small Bun. Big Moon Energy. 🌙

**Official website** for **LUNIBOP ($LUNIBOP)** — the little moon bunny meme coin on **Solana**, launching via **Pump.fun**.

> Premium, fast, and SEO-first. Built for Google Search, Vercel deployment, and long-term organic growth.

**Live URL: `https://lunibop.vercel.app` — Vercel free hosting, configured in one place via `src/config/site.ts` (or `NEXT_PUBLIC_SITE_URL` env)

---

## ✨ Features

### Brand & Design
- **Premium cosmic identity:** deep cosmic purple `#170B35`, violet `#7139C9`, lavender `#C6A6FF`, soft pink `#FFB9DE`, moonlight white `#FFF9FF`, gold `#FFD76A`
- **Mascot-first:** fluffy lavender bunny, galaxy violet eyes, golden star — used consistently via optimized WebP (`mascot.webp` 101 KB, `banner.webp` 118 KB — 95% smaller than PNG)
- **Typography:** Bricolage Grotesque (display) + Instrument Sans (body) — loaded via `next/font` with `display:swap`
- **No emojis** — all icons are professional SVG vectors (`src/components/Icons.tsx`)
- **Responsive:** mobile hamburger, tablet, desktop — tested, no layout shift

### Pages (12 + blog, each crawlable)
```
/              Homepage (Hero + lore preview + token preview + blog preview)
/about         Mascot lore, values, transparency
/how-to-buy    5-step safety checklist + wallet hygiene
/tokenomics    Verified token data only — placeholders for unverified supply/market cap
/blog          Index with category filter (Education/Safety/Community) → /blog?category=
//blog/[slug]   5 high-quality educational articles (SSG)
  - what-is-lunibop-solana-meme-coin-guide
  - how-to-buy-solana-token-safely-pump-fun
  - solana-wallet-safety-guide-phantom-solflare
  - solana-meme-coins-explained-for-beginners
  - lunibop-tokenomics-placeholders-explained
/faq           8 Q&A with FAQPage structured data
/community     Official X @LUNIBOP (https://x.com/LUNIBOP) — single official social, no Telegram + Pump.fun banner
/contact       Safe contact method (no wallet connect, no seed phrase)
- /terms         Terms of Use (draft, requires legal review)
- /privacy       Privacy Policy (draft, minimal data)
- /disclaimer    Cryptocurrency risk warning
- /404           Custom “Wrong crater” page with mascot
```

### Advanced Technical SEO
- **Unique metadata** per page: `title`, `description`, `canonical`, Open Graph, Twitter Cards, `metadataBase`
- **Clean URLs:** `/about`, `/blog/[slug]` — no `.html` extensions, proper Next.js App Router
- **Sitemap:** `/sitemap.xml` — auto-includes all indexable pages + blog posts (see `src/app/sitemap.ts`)
- **Robots:** `/robots.txt` with `Allow:/` + `Sitemap: https://lunibop.vercel.app/sitemap.xml`
- **Canonicals:** `https://lunibop.vercel.app/path` via `canonical()` helper — never localhost
- **Headings:** One `H1` per page, semantic `header`, `nav`, `main`, `footer`, `article`
- **Alt text:** Every image has descriptive alt (`LUNIBOP moon bunny...`)
- **Internal linking:** Homepage ↔ Blog ↔ Tokenomics ↔ How to Buy ↔ FAQ ↔ Community — crawlable `Link` components
- **Breadcrumbs:** UI + `BreadcrumbList` JSON-LD on all inner pages
- **Pagination:** Category filter uses query param `?category=` with canonical to `/blog`
- **No `noindex` on intended pages** — only 404 & non-existent slugs are 404
- **Redirects:** Legacy `/#about`, `/token` → `/tokenomics` in `next.config.mjs`

### Structured Data (JSON-LD)
Validated, no invented claims:
- `Organization` (global, in layout)
- `WebSite` (global)
- `WebPage` (per page)
- `BreadcrumbList` (per inner page)
- `BlogPosting` (per article — title, excerpt, image, author, dates, keywords)
- `FAQPage` (on /faq only, Google-eligible format)

Check: `view-source:https://lunibop.vercel.app/about` → search `application/ld+json`

### Performance & Core Web Vitals
- **WebP/AVIF:** `next.config.mjs` `formats: ["image/webp","image/avif"]`
- **Image optimization:** `mascot.webp`/`banner.webp` with `width`/`height`, `loading="lazy"` below fold, `loading="eager"` hero
- **Fonts:** `next/font` with `display:swap` — no CLS
- **JS minimal:** No third-party scripts, no wallet connect, no analytics by default
- **Animations:** Lightweight, `prefers-reduced-motion` respected
- **Caching:** Vercel defaults + static generation where possible (blog posts are SSG)

### Trust & Safety
- No invented contract address, supply, market cap, holders, audits, partnerships, listings, community size
- “Awaiting launch” placeholders clearly marked, copy button disabled until address set
- Risk warnings on How to Buy, Tokenomics, Blog, Disclaimer, FAQ, Footer
- Social buttons **hidden** when `siteConfig.socials.x/telegram` is empty — never fake links

---

## 🛠 Stack
- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Static + SSG (blog) + dynamic sitemap/robots
- No database, no paid APIs, no secrets

## 🚀 Quick Start

```bash
npm install
npm run dev
# http://localhost:3000
```

### Production URL (Critical for SEO)
Set **once** in Vercel env to avoid localhost canonicals:

```
NEXT_PUBLIC_SITE_URL=https://lunibop.vercel.app  # optional — default is already lunibop.vercel.app, one-line change in src/config/site.ts
```

Optional Google verification:

```
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_code_from_search_console
```

Add both in **Vercel → Project → Settings → Environment Variables** → Redeploy.

**All config in one file:** `src/config/site.ts`
```ts
pumpFunUrl: "",        // https://pump.fun/coin/... when live
contractAddress: "",   // Solana address when live
socials: { x: "", telegram: "" }
```

Leave empty until official — site auto-hides buttons.

### Images
`public/images/mascot.webp` (primary) + `mascot.png` fallback — same for banner. Use `picture` + WebP for modern browsers.

---

## 📁 Structure

```
src/
  app/
    layout.tsx          # Global metadata, Organization+WebSite JSON-LD, fonts
    page.tsx            # Homepage (SSG)
    sitemap.ts          # Dynamic sitemap (includes blogPosts)
    robots.ts           # robots.txt
    about/page.tsx      # SSG
    how-to-buy/page.tsx
    tokenomics/page.tsx
    blog/
      page.tsx          # Index (dynamic category filter)
      [slug]/page.tsx   # SSG per post (generateStaticParams)
    faq/page.tsx        # FAQPage JSON-LD
    community/page.tsx
    contact/page.tsx
    terms/page.tsx      # Legal draft
    privacy/page.tsx    # Legal draft
    disclaimer/page.tsx # Risk disclaimer
    not-found.tsx       # 404
    globals.css
  components/
    Navbar.tsx          # Active state via usePathname
    Footer.tsx
    Hero.tsx / About.tsx / TokenInfo.tsx / HowToBuy.tsx / Community.tsx / FAQ.tsx (homepage sections)
    PageHeader.tsx / Breadcrumbs.tsx / Prose.tsx / JsonLd.tsx / Icons.tsx
  config/site.ts        # Single source + canonical()
  lib/
    seo.ts              # buildMetadata()
    blog.ts             # Posts data (5 articles)
    jsonld.ts           # Structured data helpers
public/
  images/mascot.webp, banner.webp (+ png fallbacks), favicon.ico/webp
  manifest.webmanifest
  sitemap.xml (generated) / robots.txt (generated)
next.config.mjs         # Image formats, redirects, security headers
```

---

## 🔍 Google Search Console Setup

**Do not hardcode fake verification.** Use env var above.

1. **Verify domain:**
   - Go to https://search.google.com/search-console
   - Add property → URL prefix (https://lunibop.vercel.app) → copy TXT record → add to DNS or use URL prefix + HTML tag (paste code into `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` env → redeploy → Verify)

2. **Submit sitemap:**
   - In GSC → Sitemaps (left) → Add new → `sitemap.xml` → Submit
   - Expect `https://lunibop.vercel.app/sitemap.xml` → 16 URLs (static + 5 blog)

3. **Inspect URLs:**
   - GSC → URL Inspection → paste `https://lunibop.vercel.app/about` → Request Indexing
   - Do for `/`, `/tokenomics`, `/blog/lunibop-...` etc.
   - Check Coverage → no “Blocked by robots.txt”, no soft 404s

4. **Indexing is not guaranteed:** Google decides crawl frequency. Keep content fresh, build natural backlinks from X/Telegram bio, and maintain consistent canonicals.

---

## ✅ SEO Audit (Pre-Deploy Checklist)

See `SEO_AUDIT.md` for full report — summary:

| Check | Status |
|-------|--------|
| All routes 200 (13 pages + 5 blog) | ✅ |
| Unique title/description per page | ✅ |
| Canonical correct (never localhost) | ✅ env-based |
| Sitemap valid (16 URLs) | ✅ |
| Robots.txt valid | ✅ |
| JSON-LD valid (Organization/WebSite/WebPage/Breadcrumb/Article/FAQ) | ✅ |
| Alt text on all images | ✅ |
| Internal links crawlable, no broken | ✅ |
| No duplicate metadata | ✅ |
| No accidental noindex | ✅ |
| Mobile responsive | ✅ |
| Accessibility (semantic HTML, aria, focus) | ✅ |
| Build succeeds on Vercel | ✅ `npm run build` 21 pages |
| Lighthouse targets (manual check) | ▶ Run in Chrome DevTools |

**Remaining tasks (post-launch):**
- Add `NEXT_PUBLIC_SITE_URL` only if you use a custom domain — default is already https://lunibop.vercel.app (one config in src/config/site.ts)
- Add Google verification env when you have it
- Paste real Pump.fun URL + contract → site auto-updates
- Set up 301 redirects if you change slugs later (in next.config)

---

## ⚠️ Legal Notice

LUNIBOP is a meme coin. Highly speculative, can lose all value. Nothing here is financial advice. Legal pages (`/terms`, `/privacy`, `/disclaimer`) are **informational drafts requiring attorneys/review** — not regulatory approval.

We never ask for wallet connections, seed phrases, or private keys.

---

Built with precision for crawlability, speed, and maintainability. Questions? See `/contact`.

---

## 🚀 Quick Start (download → GitHub → Vercel)

```bash
npm install        # install dependencies
npm run dev        # local dev at http://localhost:3000
npm run build      # production build (must pass with 0 errors)
```

### Deploy in 4 steps
1. **GitHub:** create a new repository, then upload this folder's contents (or `git init && git add -A && git commit -m "LUNIBOP launch" && git remote add origin <url> && git push -u origin main`).
2. **Vercel:** [vercel.com/new](https://vercel.com/new) → import the repo → framework auto-detects **Next.js** → **Deploy** (no env vars required).
3. **Launch day:** open `src/config/site.ts`, fill `pumpFunUrl` + `contractAddress`, commit → Vercel auto-redeploys.
4. **Custom domain (optional):** Vercel → Settings → Domains, then set `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` so canonical/sitemap/OG URLs update automatically.

### 🟢 Live now
See **`LAUNCH-CHECKLIST.md`** for details. Current state:
- **Every Buy button** opens the official Pump.fun coin page in a new tab, with an external-link indicator
- **Official coin page:** `https://pump.fun/coin/8iUUF349EMNR6uNdHnCDaxr2c9jdQi71Ukffqkdmpump?share`
- **No contract-address block** on the site (by design) — buying goes through Pump.fun only
- **Contact:** `believerbk4@gmail.com`, with a Gmail compose button that prefills subject and message
- "Beware of fake tokens…" warning on every relevant page
- No wallet connection, no seed-phrase requests, X only (`https://x.com/LUNIBOP`), no Telegram

> `node_modules/`, `.next/` and `uploads/` are excluded from the repo via `.gitignore` — Vercel installs dependencies itself.

---

## ⚡ Performance profile (verified in a production build)

| Metric | Result |
|---|---|
| Pages prerendered | **17 of 17** — all static (○) or SSG (●); zero dynamic server routes |
| Homepage TTFB (local prod) | **~30 ms** |
| Other pages TTFB | **11–15 ms** |
| Homepage HTML | **29.5 KB gzipped** |
| Inner page HTML | **11–15 KB gzipped** |
| JS (modern browser, gzip) | **~101 KB** total; build reports 87.2 kB shared first-load |
| CSS (gzip) | **9.9 KB** |
| Fonts | **2 self-hosted families** (5 woff2, 124 KB total), `display: swap`, **no Google Fonts request** |
| Third-party requests | **0** — no font CDN, no analytics, no trackers |
| Hero image | responsive `srcset`: **53 KB** on phones, 118 KB on desktop |
| Image caching | `Cache-Control: public, max-age=31536000, immutable` |

### What makes it fast
- **Fully static export** — every page prerendered at build time, so Vercel serves HTML straight from the CDN edge (`s-maxage=31536000, stale-while-revalidate`).
- **No external CSS/JS/fonts** — nothing to block first paint; the whole site is self-contained.
- **Zero trackers** — no GA, no pixels, no chat widgets. Nothing loads after the page paint unless a visitor clicks.
- **Right-sized images** — WebP with `srcset`; the hero (LCP element) is `fetchpriority="high"` and eager, everything else is `loading="lazy"`.
- **Trimmed font weights** — display font ships 3 weights instead of 5; the third Google family (Space Grotesk) was removed in favour of the system monospace stack.
- **`/blog` is static** — the old `?category=` server filter made the page dynamic (73 ms, uncacheable). Category links are now in-page anchors, so the index is CDN-cached.

### Why it doesn't look spammy
- No popups, no countdown timers, no fake "N people bought" tickers, no autoplay video.
- No invented numbers anywhere: supply, market cap, holders, volume, audits, partnerships and exchange listings are all explicitly "Not published".
- Warnings are calm and factual (fake tokens / recovery phrases), not flashing red alarms.
- Animations are CSS-only, subtle, and disable themselves under `prefers-reduced-motion`.
