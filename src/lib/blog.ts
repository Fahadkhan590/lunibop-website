export type BlogCategory = "Education" | "Safety" | "Community" | "Solana Basics";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML string for simplicity (rendered as prose)
  category: BlogCategory;
  date: string; // ISO
  modified?: string;
  author: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  keywords: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-lunibop-solana-meme-coin-guide",
    title: "What Is LUNIBOP? A Friendly Guide to the Moon Bunny Meme Coin",
    excerpt:
      "Learn what LUNIBOP is, why it lives on Solana, and how its cute moon bunny lore fits into meme coin culture — without hype or promises.",
    category: "Education",
    date: "2025-11-01",
    modified: "2025-11-10",
    author: "LUNIBOP Team",
    readingTime: "5 min",
    image: "/images/banner.webp",
    imageAlt: "LUNIBOP moon bunny sitting on the moon holding a golden star",
    keywords: ["LUNIBOP", "LUNIBOP coin", "Solana meme coin", "Pump.fun"],
    content: `
      <p>LUNIBOP is a playful meme coin character — a little moon bunny with lavender fur, galaxy violet eyes, and a glowing golden star. It lives on the <strong>Solana</strong> blockchain and launches via <strong>Pump.fun</strong>.</p>
      <h2>The lore, not the ledger</h2>
      <p>Every great meme starts with a story. LUNIBOP’s story is simple: a curious bunny found a golden star beyond the moon and decided to explore the internet. That story powers community art, memes, and inside jokes — not a promise of returns.</p>
      <p>LUNIBOP is <em>cultural first</em>. There is no utility roadmap, no staking promise, and no guaranteed value. Like all meme coins, its community gives it meaning.</p>
      <h2>Why Solana?</h2>
      <ul>
        <li><strong>Fast & low-fee:</strong> Solana confirms transactions quickly with minimal fees.</li>
        <li><strong>Pump.fun native:</strong> Fair launch, no presale, transparent bonding curve.</li>
        <li><strong>Wallet friendly:</strong> Works with Phantom, Solflare, Backpack, and other SPL-compatible wallets.</li>
      </ul>
      <h2>What LUNIBOP is not</h2>
      <p>LUNIBOP is not an investment product, security, or deposit. It does not promise profit, dividends, or buybacks. Always verify the official contract address on this site and on Pump.fun before any interaction.</p>
      <p><em>Read more: <a href="/tokenomics">Tokenomics</a> and our <a href="/disclaimer">Risk Disclaimer</a>.</em></p>
    `,
  },
  {
    slug: "how-to-buy-solana-token-safely-pump-fun",
    title: "How to Buy a Solana Token Safely on Pump.fun (Beginner Checklist)",
    excerpt:
      "A step-by-step safety checklist for finding a Solana token on Pump.fun, verifying its contract address, and avoiding scams — with wallet safety tips.",
    category: "Safety",
    date: "2025-11-05",
    modified: "2025-11-12",
    author: "LUNIBOP Team",
    readingTime: "6 min",
    image: "/images/mascot.webp",
    imageAlt: "LUNIBOP mascot explaining wallet safety with a checklist",
    keywords: ["how to buy Solana token", "Pump.fun guide", "Solana wallet safety"],
    content: `
      <p>Buying any Solana token — including LUNIBOP — starts with safety. Scammers clone tickers and logos. Use this checklist.</p>
      <h2>1. Set up a self-custody Solana wallet</h2>
      <p>Install Phantom or Solflare from their <strong>official</strong> websites or app stores. Write your seed phrase on paper, store it offline, and never share it. No legitimate project will ask for it.</p>
      <h2>2. Fund with SOL (and keep fee buffer)</h2>
      <p>Buy SOL on a reputable exchange, withdraw to your wallet address, and keep 0.02–0.05 SOL for fees. Double-check the destination address — Solana addresses cannot be reversed.</p>
      <h2>3. Visit only the official Pump.fun page</h2>
      <p>The official LUNIBOP coin page is live on Pump.fun and linked from every Buy button on this site (and on <a href="/tokenomics">Tokenomics</a>). Avoid links from random DMs, search ads, or unofficial social groups.</p>
      <h2>4. Verify name, ticker, and contract</h2>
      <p>Confirm <strong>LUNIBOP / $LUNIBOP</strong> and the contract address exactly matches this site. One character difference = different token.</p>
      <h2>5. Understand the risks before you trade</h2>
      <p>Meme coins are volatile and can go to zero. Never trade more than you can afford to lose. There are no guaranteed returns. See our <a href="/disclaimer">Disclaimer</a> and <a href="/faq">FAQ</a>.</p>
    `,
  },
  {
    slug: "solana-wallet-safety-guide-phantom-solflare",
    title: "Solana Wallet Safety: How to Protect Phantom & Solflare From Scams",
    excerpt:
      "Essential wallet hygiene for Solana users: seed phrase rules, permission checks, and how to spot phishing sites impersonating LUNIBOP.",
    category: "Safety",
    date: "2025-11-08",
    author: "LUNIBOP Team",
    readingTime: "4 min",
    image: "/images/banner.webp",
    imageAlt: "Illustration of secure Solana wallet with shield and moon bunny",
    keywords: ["Solana wallet safety", "Phantom wallet", "Solflare security"],
    content: `
      <p>If you own SOL or any SPL token, your wallet <em>is</em> your bank. Here’s how to keep it safe.</p>
      <h2>Never share your seed phrase</h2>
      <p>Support teams, airdrops, and “validators” will never need it. Store it offline. If you paste it into a website, assume the wallet is compromised.</p>
      <h2>Check transaction previews</h2>
      <p>Before you approve, read what you’re signing. If a site asks to “Approve access to all tokens” and you only expected a view, reject it.</p>
      <h2>Bookmark official links</h2>
      <p>Phishers buy ads that look like Phantom or Pump.fun. Always type the URL or use a bookmark from <a href="/community">our official Community page</a>.</p>
      <h2>Revoke suspicious approvals</h2>
      <p>Use your wallet’s “Connected Apps” or “Permissions” screen to disconnect sites you no longer trust.</p>
      <p><em>Questions? See <a href="/faq">FAQ: Is LUNIBOP an investment?</a></em></p>
    `,
  },
  {
    slug: "solana-meme-coins-explained-for-beginners",
    title: "Solana Meme Coins Explained: Culture, Community & Risks",
    excerpt:
      "What makes Solana meme coins unique, why communities matter more than whitepapers, and the risks every beginner should know before exploring.",
    category: "Community",
    date: "2025-11-10",
    author: "LUNIBOP Team",
    readingTime: "5 min",
    image: "/images/mascot.webp",
    imageAlt: "LUNIBOP moon bunny with Solana meme coins illustration",
    keywords: ["Solana meme coin", "meme coin education", "Solana community"],
    content: `
      <p>Meme coins are internet culture turned into on-chain tokens. On Solana, they benefit from fast settlement and low fees, which makes community experiments cheap and fun.</p>
      <h2>Culture over roadmap</h2>
      <p>Most meme coins — including LUNIBOP — don’t promise utility. Their “roadmap” is memes, art, and community events. Value comes from attention and shared jokes, not revenue.</p>
      <h2>Red flags to watch</h2>
      <ul>
        <li>Guaranteed returns or “price will 100x” claims</li>
        <li>Locked socials or anonymous DMs asking for funds</li>
        <li>Contract address only on random socials, not on this site or Pump.fun</li>
      </ul>
      <h2>Do your own research</h2>
      <p>Verify supply, holders, and liquidity on Solscan and Pump.fun — not screenshots. Read <a href="/disclaimer">our disclaimer</a> and never risk funds you need for living expenses.</p>
    `,
  },
  {
    slug: "lunibop-tokenomics-placeholders-explained",
    title: "LUNIBOP Tokenomics: Why We Show Placeholders Instead of Fake Data",
    excerpt:
      "We intentionally show placeholders for supply and market cap until LUNIBOP launches. Here’s why honesty beats hype.",
    category: "Education",
    date: "2025-11-12",
    author: "LUNIBOP Team",
    readingTime: "4 min",
    image: "/images/banner.webp",
    imageAlt: "Tokenomics chart placeholder with honest data approach",
    keywords: ["LUNIBOP tokenomics", "LUNIBOP official", "meme coin supply"],
    content: `
      <p>Many meme coin sites invent supply, market cap, and holder counts before launch. LUNIBOP doesn’t.</p>
      <h2>What you’ll see before launch</h2>
      <p>Our <a href="/tokenomics">Tokenomics page</a> lists only verified facts: name (LUNIBOP), ticker ($LUNIBOP), network (Solana), launch platform (Pump.fun). Everything else is marked “Not published” until verifiable on-chain.</p>
      <h2>Why placeholders matter</h2>
      <p>Fake data creates fake confidence. By hiding supply/market cap until they’re on-chain, we reduce impersonation and help you spot scams.</p>
      <h2>After launch</h2>
      <p>The official Pump.fun coin page is live. The verified contract address and Solscan link are added here only once the Solana mint has been verified — until then, any circulating address is unofficial.</p>
    `,
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory) {
  return blogPosts.filter((p) => p.category === category);
}

export const categories: BlogCategory[] = ["Education", "Safety", "Community", "Solana Basics"];

export function getAllSlugs() {
  return blogPosts.map((p) => p.slug);
}
