import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { webpageJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { BuyButton } from "@/components/BuyButton";
import { FakeTokenWarning } from "@/components/FakeTokenWarning";

export const metadata = buildMetadata({
  title: "LUNIBOP Tokenomics — Verified Token Information (Solana)",
  description:
    "Official LUNIBOP tokenomics: name, ticker $LUNIBOP, Solana network, Pump.fun launch. No fake supply or market cap — placeholders shown until verified after launch.",
  path: "/tokenomics",
});

export default function TokenomicsPage() {
  const hasAddress = Boolean(siteConfig.contractAddress);
  const hasPumpUrl = Boolean(siteConfig.pumpFunUrl);

  return (
    <main className="min-h-screen bg-[#0F0728] flex flex-col">
      <Navbar />
      <JsonLd
        data={[
          webpageJsonLd({
            title: "LUNIBOP Tokenomics — Verified Token Information",
            description: "Official LUNIBOP tokenomics on Solana: name, ticker, network, Pump.fun launch with honest placeholders.",
            path: "/tokenomics",
            image: siteConfig.images.banner,
          }),
          breadcrumbJsonLd([
            { name: "Home", href: "/" },
            { name: "Tokenomics", href: "/tokenomics" },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="Verified data only"
        title="LUNIBOP Tokenomics"
        description="We show only what’s verified on Solana and Pump.fun. Supply, market cap, holders, and audits are published only once verifiable on-chain — never invented."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Tokenomics", href: "/tokenomics" },
        ]}
      />

      <section className="py-10 sm:py-14 flex-1">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] bg-white p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#170B35]/8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl overflow-hidden bg-[#170B35] p-1 shadow-sm">
                  <picture>
                    <source srcSet={siteConfig.images.mascot} type="image/webp" />
                    <img src={siteConfig.images.mascot} alt="LUNIBOP logo" className="w-full h-full object-cover rounded-xl scale-110" width={48} height={48} loading="lazy" decoding="async" />
                  </picture>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display font-extrabold text-[#170B35] text-lg">LUNIBOP</span>
                    <span className="px-2.5 py-1 rounded-full bg-[#170B35] text-white text-xs font-bold">{siteConfig.ticker}</span>
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFD76A]/15 border border-[#FFD76A]/20 text-[#92400E] text-xs font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFD76A]" aria-hidden="true" /> Solana
                    </span>
                  </div>
                  <div className="text-xs text-[#170B35]/50 mt-0.5">SPL Token • Fair launch via Pump.fun • No presale</div>
                </div>
              </div>
              <span className={`px-3 py-2 rounded-full text-xs font-bold border ${hasAddress ? "bg-green-50 border-green-200 text-green-700" : "bg-amber-50 border-amber-200 text-amber-700"}`}>
                ● Live on Pump.fun
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { label: "Name", value: "LUNIBOP", sub: "Meme character token" },
                { label: "Ticker", value: "$LUNIBOP", sub: "Trade symbol" },
                { label: "Network", value: "Solana", sub: "Fast, low fees — SPL" },
                { label: "Launch Platform", value: "Pump.fun", sub: "Official coin page live", link: siteConfig.pumpFunUrl || undefined },
              ].map((item: any) => (
                <div key={item.label} className="rounded-2xl bg-[#FFF9FF] border border-[#170B35]/8 p-4">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#170B35]/40">{item.label}</span>
                  <span className="mt-1 font-display font-bold text-[#170B35] text-[16px] flex items-center gap-2">
                    {item.value}
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-full bg-[#7139C9] flex items-center justify-center hover:bg-[#8B5CF6] transition-colors" aria-label="Open Pump.fun">
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </a>
                    )}
                  </span>
                  <span className="text-xs text-[#170B35]/50 mt-1">{item.sub}</span>
                </div>
              ))}
            </div>

            {/* Honest placeholders */}
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                { k: "Total Supply", v: "Not published", note: "Only when verifiable on-chain" },
                { k: "Market Cap", v: "Not published", note: "No invented data" },
                { k: "Holders / Liquidity", v: "Not published", note: "Only when verifiable via Solscan" },
              ].map((i) => (
                <div key={i.k} className="rounded-2xl bg-[#FFF9FF] border border-dashed border-[#170B35]/15 p-4 text-center">
                  <div className="text-[11px] font-bold tracking-widest uppercase text-[#170B35]/40">{i.k}</div>
                  <div className="mt-1 text-sm font-bold text-[#170B35]/50">{i.v}</div>
                  <div className="text-xs text-[#170B35]/40 mt-1">{i.note}</div>
                </div>
              ))}
            </div>

            {/* Fake-token warning */}
            <div className="mt-4">
              <FakeTokenWarning />
            </div>

            <p className="text-xs text-white/40 mt-3">Learn <Link href="/how-to-buy" className="underline underline-offset-2 text-white/70">how to verify</Link> and read <Link href="/faq" className="underline underline-offset-2 text-white/70">FAQ</Link>.</p>

            <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-200 p-4 flex gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white shrink-0 mt-0.5" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 9V13M12 17H12.01M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.8"/></svg>
              </span>
              <div>
                <p className="text-xs font-bold text-amber-900">Why placeholders?</p>
                <p className="text-xs leading-relaxed text-amber-800/70 mt-1">Inventing supply or market cap creates fake confidence. We intentionally hide unverified data to help you spot scams. See <Link href="/blog/lunibop-tokenomics-placeholders-explained" className="underline">why we do this</Link>.</p>
              </div>
            </div>
          </div>

          {/* Prominent Buy CTA — activates automatically when pumpFunUrl is set */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3">
            <BuyButton size="large" showWarning />
            <span className="text-xs text-white/40 text-center">Always double-check ticker &amp; contract address on Pump.fun</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Tokenomics", href: "/tokenomics" }]} />
            <Link href="/disclaimer" className="text-xs font-semibold text-white/60 hover:text-white">Read risk disclaimer →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
