"use client";

import { siteConfig } from "@/config/site";
import { BuyButton } from "./BuyButton";

export function Community() {
  const hasX = Boolean(siteConfig.socials.x);
  const hasPumpUrl = Boolean(siteConfig.pumpFunUrl);

  return (
    <section id="community" className="relative py-16 sm:py-20 bg-[#0F0728] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(900px,100vw)] h-[min(600px,100vw)] max-w-[900px] max-h-[600px] bg-[#7139C9]/15 blur-[100px] rounded-full" />
        <div className="absolute -top-40 -left-40 w-[min(600px,80vw)] h-[min(600px,80vw)] max-w-[600px] max-h-[600px] bg-[#FFB9DE]/5 blur-[80px] rounded-full" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[760px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-[#FFD76A] animate-pulse" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest uppercase text-white/70">Community</span>
          </div>
          <h2 className="mt-6 font-display font-extrabold text-[32px] sm:text-[44px] leading-[0.95] tracking-tight text-white">
            Follow <span className="text-[#C6A6FF]">LUNIBOP</span> on X
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/60 max-w-[560px] mx-auto">
            One official handle. Verified links only here and on Pump.fun.
          </p>
        </div>

        {/* Centered X card only */}
        <div className="mt-10 max-w-[560px] mx-auto">
          <div className="relative group rounded-[28px] bg-white p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.2)] overflow-hidden hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#1DA1F2]/5 blur-[30px] rounded-full pointer-events-none" />
            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#170B35] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <span className="px-3 py-1.5 rounded-full text-xs font-bold border bg-green-50 border-green-200 text-green-700">
                  ● Official
                </span>
              </div>
              <h3 className="mt-5 font-display font-extrabold text-[#170B35] text-xl">X (Twitter) — @LUNIBOP</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#170B35]/60">
                Follow for art drops, story updates, and official announcements. We post only from <span className="font-bold text-[#170B35]">x.com/LUNIBOP</span>. There is no official Telegram or Discord.
              </p>
              <div className="mt-6">
                <a
                  href={siteConfig.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#170B35] text-white font-bold hover:bg-[#1E1040] transition-colors"
                >
                  Follow on X — @LUNIBOP
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
              <p className="mt-3 text-xs text-[#170B35]/40 text-center">
                Official handle: https://x.com/LUNIBOP — bookmark it. Beware of impersonators and never share your wallet recovery phrase.
              </p>
            </div>
          </div>
        </div>

        {/* Pump.fun wide banner — Buy button activates automatically at launch */}
        <div className="mt-6 max-w-[560px] mx-auto rounded-[28px] bg-white p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.2)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 rounded-2xl bg-[#FFD76A] flex items-center justify-center text-[#170B35] font-extrabold shrink-0">
                P
              </div>
              <div className="min-w-0">
                <div className="font-display font-extrabold text-[#170B35] text-lg flex flex-wrap items-center gap-2">
                  Pump.fun
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${hasPumpUrl ? "bg-green-50 border-green-200 text-green-700" : "bg-amber-50 border-amber-200 text-amber-700"}`}>
                    {hasPumpUrl ? "● Buy buttons live" : "○ Link at launch"}
                  </span>
                </div>
                <div className="text-sm text-[#170B35]/60">The only official coin page — every Buy button on this site links to it.</div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-col xs:flex-row gap-3">
            <BuyButton variant="light" className="flex-1" />
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-white/30 max-w-[560px] mx-auto">
          Single official channel: X. If you see another official account, it is fake.
        </p>
      </div>
    </section>
  );
}
