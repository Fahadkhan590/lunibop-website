export const siteConfig = {
  name: "LUNIBOP",
  ticker: "$LUNIBOP",
  description:
    "Meet LUNIBOP, the little moon bunny bringing a little magic to the Solana meme universe. Official LUNIBOP website — token info, how to buy safely on Pump.fun, and community updates.",
  tagline: "Small Bun. Big Moon Energy.",
  // Production URL — change in ONE place (or via Vercel env NEXT_PUBLIC_SITE_URL)
  url: (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://lunibop.vercel.app"),
  blockchain: "Solana",
  launchPlatform: "Pump.fun" as const,
  // ── TOKEN LAUNCH INTEGRATION ──────────────────────────────────────────
  // Current status (accurate as of this build):
  //   • The official LUNIBOP coin page is LIVE on Pump.fun and the Buy buttons
  //     link to it: https://pump.fun/coin/8iUUF349EMNR6uNdHnCDaxr2c9jdQi71Ukffqkdmpump?share
  //   • The Solana mint address is NOT yet verified, so the contract section
  //     shows "Not yet verified" and publishes no address.
  //
  // ── ACTIVATION (do this the moment the first purchase activates trading) ──
  // 1. pumpFunCoinPage  → paste the genuine official coin page URL, e.g.
  //                       "https://pump.fun/coin/AbCdEfGh..."
  //    While this is empty the site shows "Not live yet" and explains that the
  //    coin page exists but trading has not started. No dead/placeholder link.
  // 2. pumpFunUrl       → paste THE SAME genuine URL to make the Buy button live.
  //    (Kept separate on purpose: the coin page can exist before trading opens.)
  // Then save & redeploy. BuyButton activates automatically everywhere
  // (Hero, Navbar, TokenInfo, Tokenomics, How to Buy, Community, Footer).
  // NOTE: the site intentionally shows NO contract-address block — buying goes
  // through the official Pump.fun coin page only.
  // ⚠️  NEVER put a placeholder/fake address or URL here.
  // ⚠️  Do NOT add wallet-connect, seed-phrase or private-key prompts.
  // OFFICIAL Pump.fun coin page (added from the team — this is the genuine URL)
  pumpFunCoinPage: "https://pump.fun/coin/8iUUF349EMNR6uNdHnCDaxr2c9jdQi71Ukffqkdmpump?share",
  // Buy buttons link here (same genuine URL, opens in a new tab)
  pumpFunUrl: "https://pump.fun/coin/8iUUF349EMNR6uNdHnCDaxr2c9jdQi71Ukffqkdmpump?share",
  // Contract address stays EMPTY on purpose: the Solana mint has not been
  // verified yet, so the site shows "Not yet verified". Never publish an
  // unconfirmed mint address here.
  contractAddress: "",

  // Human-readable launch status shown across the site
  launchStatus: {
    coinPageExists: true, // coin page exists on Pump.fun
    tradingLive: true, // Buy buttons are active and link to the official coin page
    onChainConfirmed: false, // mint address NOT verified yet → contract stays hidden
    buyLabel: "Live", // badge shown if trading is ever switched back off
  },
  socials: {
    x: "https://x.com/LUNIBOP",
  },
  images: {
    logo: "/images/mascot.webp",
    mascot: "/images/mascot.webp",
    mascotSmall: "/images/mascot-600.webp",
    banner: "/images/banner.webp",
    // Right-sized hero asset (phones download 53 KB instead of 118 KB)
    bannerSmall: "/images/banner-900.webp",
    favicon: "/images/mascot.webp",
    og: "/images/banner.webp",
    mascotFallback: "/images/mascot.jpg",
    bannerFallback: "/images/banner.jpg",
  },
  verification: {
    // Set in Vercel env: NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "How to Buy", href: "/how-to-buy" },
    { label: "Tokenomics", href: "/tokenomics" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Community", href: "/community" },
  ],
  footerNavigation: [
    { label: "About", href: "/about" },
    { label: "How to Buy", href: "/how-to-buy" },
    { label: "Tokenomics", href: "/tokenomics" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Terms of Use", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

// ── Launch helpers (single source of truth) ─────────────────────────────
// Components import these instead of checking strings themselves.
export const isLaunched = Boolean(siteConfig.pumpFunUrl && siteConfig.contractAddress);
export const hasPumpUrl = Boolean(siteConfig.pumpFunUrl); // buy link is live
export const hasCoinPage = Boolean(siteConfig.pumpFunCoinPage);
export const hasContractAddress = Boolean(siteConfig.contractAddress);
// Single source for the Buy button label/state
export const buyIsLive = Boolean(siteConfig.pumpFunUrl && siteConfig.launchStatus.tradingLive);

// Helper to get canonical URL
export function canonical(path: string = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (cleanPath === "/") return base;
  return `${base}${cleanPath.replace(/\/$/, "")}`;
}
