"use client";

import { siteConfig } from "@/config/site";
import { BuyButton } from "./BuyButton";
import { FakeTokenWarning } from "./FakeTokenWarning";

export function TokenInfo() {
  const hasAddress = Boolean(siteConfig.contractAddress);
  const hasPumpUrl = Boolean(siteConfig.pumpFunUrl);

  return (
    <section id="token" className="relative py-16 sm:py-20 bg-[#0F0728] overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(900px,100vw)] h-[500px] max-w-[900px] bg-[#7139C9]/15 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[min(600px,80vw)] h-[min(600px,80vw)] max-w-[600px] max-h-[600px] bg-[#FFB9DE]/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[760px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-[#C6A6FF] animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-white/70">Token Information</span>
          </div>
          <h2 className="mt-6 font-display font-extrabold text-[32px] sm:text-[42px] leading-tight tracking-tight text-white">
            Clean details. <span className="text-[#C6A6FF]">No fluff.</span>
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-white/60 max-w-[560px] mx-auto">
            We don&apos;t invent supply, market cap, or holders. Here&apos;s what&apos;s real — and what will appear after launch.
          </p>
        </div>

        {/* Main card */}
        <div className="mt-10 max-w-[960px] mx-auto">
          <div className="relative rounded-[32px] bg-white p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden">
            {/* header bar inside card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#170B35]/8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl overflow-hidden bg-[#170B35] p-1 shadow-sm">
                  <picture>
                    <source srcSet={siteConfig.images.mascot} type="image/webp" />
                    <img src={siteConfig.images.mascot} alt="" className="w-full h-full object-cover rounded-xl scale-110" width={48} height={48} loading="lazy" decoding="async" />
                  </picture>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display font-extrabold text-[#170B35] text-lg">LUNIBOP</span>
                    <span className="px-2.5 py-1 rounded-full bg-[#170B35] text-white text-xs font-bold">{siteConfig.ticker}</span>
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFD76A]/15 border border-[#FFD76A]/20 text-[#92400E] text-xs font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFD76A]" />
                      Solana
                    </span>
                  </div>
                  <div className="text-xs text-[#170B35]/50 mt-0.5">Solana SPL Token • Fair launch via Pump.fun</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-2 rounded-full text-xs font-bold border ${hasAddress ? "bg-green-50 border-green-200 text-green-700" : "bg-amber-50 border-amber-200 text-amber-700"}`}>
                  ● Live on Pump.fun
                </span>
              </div>
            </div>

            {/* Grid details */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {([
                { label: "Name", value: siteConfig.name, sub: "Meme character token" },
                { label: "Ticker", value: siteConfig.ticker, sub: "Trade symbol" },
                { label: "Network", value: "Solana", sub: "Fast, low fees" },
                { label: "Launch Platform", value: "Pump.fun", sub: "Official coin page live", link: siteConfig.pumpFunUrl },
              ] as Array<{ label: string; value: string; sub: string; link?: string }>).map((item) => (
                <div key={item.label} className="rounded-2xl bg-[#FFF9FF] border border-[#170B35]/8 p-4 flex flex-col">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#170B35]/40">{item.label}</span>
                  <span className="mt-1 font-display font-bold text-[#170B35] text-[16px] flex items-center gap-2">
                    {item.value}
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-full bg-[#7139C9] flex items-center justify-center hover:bg-[#8B5CF6] transition-colors" aria-label="Open official Pump.fun page">
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </a>
                    )}
                  </span>
                  <span className="text-xs text-[#170B35]/50 mt-1">{item.sub}</span>
                </div>
              ))}
            </div>

            {/* Fake-token warning */}
            <div className="mt-4">
              <FakeTokenWarning />
            </div>

            {/* Disclaimer inside card */}
            <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-200 p-4 flex gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white shrink-0 mt-0.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 9V13M12 17H12.01M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.8"/></svg>
              </span>
              <div>
                <p className="text-xs font-bold text-amber-900">We never invent market data</p>
                <p className="text-xs leading-relaxed text-amber-800/70 mt-1">
                  Supply, market cap, price, volume, holders, audits, and CEX listings will only be shown when verifiable. Beware of sites showing fake charts.
                </p>
              </div>
            </div>
          </div>

          {/* Prominent Buy CTA — activates automatically when pumpFunUrl is set */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3">
            <BuyButton size="large" showWarning />
            <span className="text-xs text-white/40 text-center">Always double-check ticker &amp; contract address on Pump.fun</span>
          </div>
        </div>
      </div>
    </section>
  );
}
