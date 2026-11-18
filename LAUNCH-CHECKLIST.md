# LUNIBOP — Token Launch Integration Checklist

**Current status (this build):**

- ✅ **Buy buttons are LIVE** — every one opens the official Pump.fun coin page in a new tab:
  `https://pump.fun/coin/8iUUF349EMNR6uNdHnCDaxr2c9jdQi71Ukffqkdmpump?share`
- ℹ️ **No contract-address block** — at the team's request the site publishes no mint address
  and shows no "not yet verified" notice. Buying happens through the official Pump.fun coin page only.
- 📧 **Contact inbox:** `believerbk4@gmail.com` with a Gmail compose link (prefilled subject + body).

**Verified in the production build:** 53 Buy-button anchors across all 15 pages, **53/53** with the
exact URL above, `target="_blank"` + `rel="noopener noreferrer"`, an external-link icon, and zero
disabled/`aria-disabled` states.

---

## 1. Current configuration (already applied — nothing to do)

`src/config/site.ts`:

```ts
pumpFunCoinPage: "https://pump.fun/coin/8iUUF349EMNR6uNdHnCDaxr2c9jdQi71Ukffqkdmpump?share",
pumpFunUrl:      "https://pump.fun/coin/8iUUF349EMNR6uNdHnCDaxr2c9jdQi71Ukffqkdmpump?share",
contractAddress: "",   // ← unused by the UI (no address block is rendered)

launchStatus: {
  coinPageExists: true,
  tradingLive: true,       // Buy buttons are active
  onChainConfirmed: false, // kept for reference; no address UI is rendered
  buyLabel: "Live",
},
```

### To pause buying temporarily
Set `tradingLive: false` and redeploy — every Buy button becomes a non-clickable badge
rather than a dead link. Nothing else changes.

### Contract address — intentionally not published
The site shows **no** contract-address section and no "not yet verified" notice. If you ever
do want to publish the verified Solana mint, re-add a component for it — do not paste an
unverified address into a public page.

---

## 2. What auto-activates on deploy

| Element | Before launch (empty) | After launch (filled) |
|---|---|---|
| Buy button (53 instances on 15 pages) | **LIVE now** — opens the official Pump.fun coin page in a new tab, with external-link icon | — |
| Contract address | Not shown anywhere (by design) | Not shown anywhere (by design) |
| Launch badge (Token info) | "● Live on Pump.fun" | same |
| Fake-token warning | Specified wording, links to the official coin page | same |
| Schema.org `sameAs` | X + official Pump.fun URL | same |

**Verified by test build:** with test values inserted, the homepage rendered 16 active
Buy links, the real address twice, the "Copy address" button twice, and **zero**
"Not launched yet" strings. With the values removed, it rendered 0 occurrences of any
pump.fun/coin URL or address, 10 disabled controls, and 15 "Not launched yet" strings.

---

## 3. Where the new pieces live

| File | Purpose |
|---|---|
| `src/config/site.ts` | **Single source of truth** — official `pumpFunCoinPage` / `pumpFunUrl` + launch-status flags |
| `src/components/BuyButton.tsx` | Reusable Buy button (`primary`, `light`, `dark`, `navbar` variants) + `BuyButtonCompact` |
| `src/components/FakeTokenWarning.tsx` | Required warning: *"Beware of fake tokens. Always verify the contract address through our official Pump.fun page."* |

**Pages carrying the Buy button:** Home (Hero + Token Info + buy strip), Tokenomics,
How to Buy, Community, and every page via Navbar + Footer.

**Contact page:** `believerbk4@gmail.com` — "Email us in Gmail" button opens Gmail compose
with recipient, subject and message prefilled; `mailto:` fallback for other mail apps.

---

## 4. Safety guarantees (built in, do not remove)

- ❌ No wallet-connect anywhere — site is 100% static, read-only, **no wallet libraries in `package.json`**
- ❌ No seed-phrase or private-key requests — only prohibition statements
- ❌ No Telegram / Discord — X only (`https://x.com/LUNIBOP`), and one FAQ line explicitly says none exist
- ✅ Links use `target="_blank"` + `rel="noopener noreferrer"`
- ✅ Contract address is stored as plain text (never `dangerouslySetInnerHTML`), so it can't inject markup
- ✅ Address is user-selectable (`select-all`) as a fallback if the clipboard API is blocked

---

## 5. Mobile & desktop

- Buy button: full-width on mobile (`w-full xs:w-auto`), inline on desktop
- All buttons ≥ 44 px tall (48 px for the large Buy CTA) — meets Apple/Google touch guidance
- Contract address uses `break-all` so a 44-character mint never causes horizontal scroll
- Copy button: full-width on mobile, `min-w-[140px]` on desktop; clipboard fallback via hidden textarea for older iOS/Android browsers
- Navbar Buy button appears in the desktop bar and in the mobile menu footer

---

## 6. Post-launch smoke test (2 minutes)

1. Open `/` on a phone — tap **Buy LUNIBOP on Pump.fun** → the Pump.fun coin page opens in a new tab
2. Contact page shows `believerbk4@gmail.com`; clicking "Email us in Gmail" opens a prefilled compose window
3. Open `/tokenomics` → Pump.fun row shows "Official coin page live"
4. Confirm the warning reads *"Beware of fake tokens. Always verify the contract address through our official Pump.fun page."*
5. Check `/community` shows only the X card (no Telegram)

---

## 7. Suggested post-launch extras (not done — you didn't ask)

- Live price/market cap via a Solana RPC or DexScreener embed (only if you want verifiable data)
- `og:image` refresh showing the live ticker
- A "Verify on Solscan" deep link (`https://solscan.io/token/<mint>`)
