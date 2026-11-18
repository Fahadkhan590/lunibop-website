"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is LUNIBOP?",
    a: "LUNIBOP is a playful meme coin character — a little moon bunny with big dreams — living on the Solana blockchain. It’s cultural and community-driven, not a utility token or investment product. Think storybook meets internet meme culture.",
  },
  {
    q: "Which blockchain is LUNIBOP on?",
    a: "Solana. That means fast transactions and low fees. You’ll need a Solana-compatible wallet (like Phantom or Solflare) and some SOL for fees if you decide to interact with the token after launch.",
  },
  {
    q: "Where can I find the official token address?",
    a: "The official Pump.fun coin page is linked from every Buy button on this site — that is the only buying link we endorse. Open it from this page, never from a DM, reply, or ad. Beware of fake tokens: always verify you are on our official Pump.fun coin page before buying. If someone sends you a token address claiming to be LUNIBOP, treat it as fake.",
  },
  {
    q: "Where can I find the official community?",
    a: "The only official social channel is X — https://x.com/LUNIBOP. There is no official Telegram or Discord. We never DM you first, never ask for seed phrases or private keys, and never ask you to connect a wallet on this site. Always verify links through this site and the official Pump.fun page.",
  },
  {
    q: "Is LUNIBOP an investment with guaranteed returns?",
    a: "Absolutely not. Meme coins are highly speculative and can go to zero. Nothing on this website is financial advice. There are no guaranteed returns, no promised roadmap profits, and no assurances of price appreciation. Only participate with funds you can afford to lose entirely, and do your own research.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-16 sm:py-24 bg-[#FFF9FF] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(800px,100vw)] h-[400px] max-w-[800px] bg-[#C6A6FF]/8 blur-[60px] rounded-full" />
      </div>

      <div className="relative max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-[720px] mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#170B35]/5 border border-[#170B35]/10">
            <span className="w-2 h-2 rounded-full bg-[#7139C9]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#170B35]/70">FAQ</span>
          </div>
          <h2 className="mt-6 font-display font-extrabold text-[32px] sm:text-[44px] leading-tight tracking-tight text-[#170B35]">
            Questions? <span className="text-[#7139C9]">We&apos;ve got answers.</span>
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#170B35]/60">
            Honest, no-hype answers. If it&apos;s not verifiable, we don&apos;t claim it.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-[24px] border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#7139C9]/15 shadow-[0_12px_32px_rgba(23,11,53,0.08)]"
                    : "bg-white border-[#170B35]/8 hover:border-[#170B35]/12 hover:shadow-[0_8px_24px_rgba(23,11,53,0.06)]"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 sm:px-7 py-5 sm:py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`font-display font-bold text-[15px] sm:text-[16px] leading-tight ${isOpen ? "text-[#170B35]" : "text-[#170B35]/90"}`}>
                    {item.q}
                  </span>
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 border ${
                      isOpen
                        ? "bg-[#7139C9] border-[#7139C9] text-white rotate-45"
                        : "bg-[#FFF9FF] border-[#170B35]/10 text-[#170B35]/40 group-hover:text-[#170B35]"
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-7 pb-6">
                      <div className="h-px bg-[#170B35]/5 mb-4" />
                      <p className="text-[14px] leading-relaxed text-[#170B35]/65">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Risk notice */}
        <div className="mt-8 rounded-[24px] bg-[#170B35] p-6 sm:p-7 flex flex-col sm:flex-row gap-4 items-start">
          <div className="w-10 h-10 rounded-full bg-[#FFD76A] flex items-center justify-center text-[#170B35] shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 9V13M12 17H12.01M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#170B35" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-sm">A friendly but serious reminder</h4>
            <p className="text-sm leading-relaxed text-white/60 mt-1">
              LUNIBOP is a meme coin project. Cryptocurrency assets are highly speculative and can lose some or all of their value. Nothing on this website is financial advice. Always verify official links and contract addresses, and never invest more than you can afford to lose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
