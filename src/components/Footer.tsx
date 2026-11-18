import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BuyButton } from "./BuyButton";

export function Footer() {
  const hasX = Boolean(siteConfig.socials.x);

  return (
    <footer className="relative bg-[#0A0420] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[min(800px,100vw)] h-[400px] max-w-[800px] bg-[#7139C9]/10 blur-[80px] rounded-full" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1.4fr_0.9fr_0.9fr_0.8fr] gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl overflow-hidden bg-gradient-to-br from-[#7139C9] to-[#C6A6FF] p-[1.5px]">
                <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#170B35]">
                  <picture>
                    <source srcSet={siteConfig.images.mascot} type="image/webp" />
                    <img src={siteConfig.images.mascot} alt="LUNIBOP" className="w-full h-full object-cover scale-110" width={40} height={40} loading="lazy" decoding="async" />
                  </picture>
                </div>
              </div>
              <span className="font-display font-extrabold text-white text-xl tracking-tight">LUNIBOP</span>
              <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-white/70 text-[11px] font-bold tracking-widest uppercase">Solana • Pump.fun</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/50 max-w-[420px]">
              {siteConfig.tagline} — A tiny moon bunny with big cosmic dreams. Official resource for token info, safety guides, and community updates. Hosted free on Vercel at {siteConfig.url.replace("https://", "")}.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/60">Fictional mascot lore</span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/60">No financial advice</span>
              <span className="px-3 py-1.5 rounded-full bg-[#FFD76A]/15 border border-[#FFD76A]/20 text-xs font-bold text-[#FFD76A]">Verify every link</span>
            </div>
            <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#7139C9] flex items-center justify-center text-white shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7.5L12 13L20 7.5" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 7.5V16.5C4 17.6 4.9 18.5 6 18.5H18C19.1 18.5 20 17.6 20 16.5V7.5" stroke="white" strokeWidth="1.7"/></svg>
              </div>
              <p className="text-xs leading-relaxed text-white/60">Get updates only via <Link href="/community" className="text-white underline underline-offset-2">official X</Link>. No email required.</p>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/40">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li><Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/40">Learn</h4>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/blog" className="text-sm text-white/60 hover:text-white transition-colors">Blog — Solana guides</Link></li>
              <li><Link href="/tokenomics" className="text-sm text-white/60 hover:text-white transition-colors">Tokenomics</Link></li>
              <li><Link href="/how-to-buy" className="text-sm text-white/60 hover:text-white transition-colors">How to Buy Safely</Link></li>
              <li><Link href="/faq" className="text-sm text-white/60 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
            <h4 className="mt-6 text-xs font-bold tracking-widest uppercase text-white/40">Legal</h4>
            <ul className="mt-3 space-y-2">
              {siteConfig.legal.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-xs text-white/40 hover:text-white/70 transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Official links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/40">Official Links</h4>
            <div className="mt-4 space-y-2.5">
              <BuyButton variant="navbar" className="w-full" />

              {hasX ? (
                <a href={siteConfig.socials.x} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white text-[#170B35] font-semibold text-sm hover:bg-[#FFF9FF] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#170B35" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  Follow on X — @LUNIBOP
                </a>
              ) : (
                <span className="px-4 py-3 rounded-2xl bg-white/5 border border-dashed border-white/10 text-white/30 text-sm text-center">X soon</span>
              )}

              <p className="text-xs text-white/30 leading-relaxed">Official X: <a href="https://x.com/LUNIBOP" target="_blank" rel="noopener noreferrer" className="underline text-white/50 hover:text-white">x.com/LUNIBOP</a> — verify handle exactly. No other official socials.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5">
          <div className="rounded-2xl bg-[#170B35]/50 border border-white/5 p-4 sm:p-5">
            <p className="text-xs leading-relaxed text-white/40 text-center sm:text-left">
              <span className="font-bold text-white/60">Disclaimer:</span> LUNIBOP is a meme coin project on Solana. Cryptocurrency assets are highly speculative and can lose some or all of their value. Nothing on this website is financial advice. Always verify official links and contract addresses. We will never ask for your seed phrase or private keys. <Link href="/disclaimer" className="underline underline-offset-2 text-white/60 hover:text-white">Read full disclaimer</Link>.
            </p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
            <p>© {new Date().getFullYear()} LUNIBOP. Hosted free on Vercel • {siteConfig.url}</p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C6A6FF] animate-pulse" aria-hidden="true" />
              {siteConfig.blockchain} • {siteConfig.name} • {siteConfig.ticker}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
