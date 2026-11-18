import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { webpageJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { WalletIcon, CoinIcon, SparkleIcon, CheckIcon, ShieldIcon } from "@/components/Icons";
import { BuyButton } from "@/components/BuyButton";
import { FakeTokenWarning } from "@/components/FakeTokenWarning";

export const metadata = buildMetadata({
  title: "How to Buy LUNIBOP Safely on Solana & Pump.fun",
  description:
    "Learn how to buy LUNIBOP on Solana safely: set up a wallet, fund with SOL, verify the official Pump.fun page and contract, and understand meme coin risks.",
  path: "/how-to-buy",
});

const steps = [
  {
    n: "01",
    title: "Set up a Solana wallet",
    desc: "Install Phantom or Solflare from official sources only. Write down your seed phrase offline, store it securely, and never share it. No team member will ever ask for it.",
    Icon: WalletIcon,
  },
  {
    n: "02",
    title: "Fund with SOL + fee buffer",
    desc: "Buy SOL on a reputable exchange, send it to your wallet address, and keep 0.02–0.05 SOL for fees. Double-check addresses — Solana transactions are irreversible.",
    Icon: CoinIcon,
  },
  {
    n: "03",
    title: "Visit only the official Pump.fun page",
    desc: "Open the official LUNIBOP coin page from the Buy button on this site — it opens in a new tab. Avoid ads, DMs, and clone social groups.",
    Icon: SparkleIcon,
  },
  {
    n: "04",
    title: "Verify name, ticker, and contract",
    desc: "Confirm LUNIBOP / $LUNIBOP on the official Pump.fun coin page, opened from the Buy button on this site. One character difference = scam token.",
    Icon: CheckIcon,
  },
  {
    n: "05",
    title: "Understand risks before trading",
    desc: "Meme coins are volatile and can go to zero. Only risk what you can afford to lose. No guaranteed returns. See Disclaimer & FAQ.",
    Icon: ShieldIcon,
  },
];

export default function HowToBuyPage() {
  return (
    <main className="min-h-screen bg-[#FFF9FF] flex flex-col">
      <Navbar />
      <JsonLd
        data={[
          webpageJsonLd({
            title: "How to Buy LUNIBOP Safely on Solana & Pump.fun",
            description: "Learn how to buy LUNIBOP on Solana safely: wallet setup, SOL funding, Pump.fun verification, and risks.",
            path: "/how-to-buy",
            image: siteConfig.images.banner,
          }),
          breadcrumbJsonLd([
            { name: "Home", href: "/" },
            { name: "How to Buy", href: "/how-to-buy" },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="Education • Safety First"
        title="How to Buy LUNIBOP Safely"
        description="A beginner-friendly checklist for Solana & Pump.fun. No wallet connection needed on this site. Learn the safe steps, wallet hygiene, and red flags before you trade. The official coin page is live on Pump.fun."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "How to Buy", href: "/how-to-buy" },
        ]}
      />

      <section className="py-10 sm:py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {steps.map((s, idx) => (
              <div key={s.n} className="relative rounded-[28px] bg-white border border-[#170B35]/8 p-6 shadow-[0_8px_24px_rgba(23,11,53,0.06)] flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-full bg-[#170B35] flex items-center justify-center text-white font-extrabold text-xs">{s.n}</span>
                  <span className="w-8 h-8 rounded-full bg-[#FFF9FF] border border-[#170B35]/5 flex items-center justify-center text-[#170B35]/60">
                    <s.Icon className="w-4 h-4" />
                  </span>
                </div>
                <h3 className="mt-6 font-display font-bold text-[#170B35] text-[15px] leading-tight">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#170B35]/60 flex-1">{s.desc}</p>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#170B35] items-center justify-center" aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 11L10 8L6 5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/></svg>
                  </div>
                )}
                <div className="mt-6 h-1 rounded-full bg-gradient-to-r from-[#7139C9] to-[#C6A6FF] opacity-60" />
              </div>
            ))}
          </div>

          {/* Buy CTA + contract address + fake-token warning (auto-activates at launch) */}
          <div className="mt-8 rounded-[28px] bg-white border border-[#170B35]/8 p-5 sm:p-6 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
              <div className="min-w-0">
                <h2 className="font-display font-extrabold text-[20px] sm:text-[24px] text-[#170B35]">
                  Ready to buy? Use the official page only.
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#170B35]/60 max-w-[520px]">
                  The button below activates automatically once LUNIBOP launches on Pump.fun and the official
                  contract address is published on this site — never before.
                </p>
              </div>
              <div className="shrink-0 flex justify-center lg:justify-end">
                <BuyButton variant="light" size="large" showWarning />
              </div>
            </div>
            <div className="mt-4">
              <FakeTokenWarning />
            </div>
          </div>

          {/* Detailed sections */}
          <div className="mt-12 grid lg:grid-cols-[1.5fr_0.9fr] gap-6">
            <div className="rounded-[28px] bg-white border border-[#170B35]/8 p-6 sm:p-8 shadow-sm">
              <h2 className="font-display font-extrabold text-[20px] sm:text-[24px] text-[#170B35]">Wallet safety rules</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#170B35]/70 list-disc pl-5">
                <li><strong className="text-[#170B35]">Recovery phrase = private bank vault.</strong> Never type your seed phrase, recovery phrase, or private keys into a website, DM, or “support” form. Nobody legitimate will ever ask for them.</li>
                <li><strong className="text-[#170B35]">Check permissions.</strong> If a site asks for “approve all tokens” when you expected a view, reject.</li>
                <li><strong className="text-[#170B35]">Bookmark official links.</strong> Use only the Buy button on this site, plus <Link href="/tokenomics" className="text-[#7139C9] underline">Tokenomics</Link> and <Link href="/community" className="text-[#7139C9] underline">Community</Link>.</li>
                <li><strong className="text-[#170B35]">Disconnect after use.</strong> Revoke app connections you no longer trust in Phantom/Solflare settings.</li>
              </ul>

              <h3 className="mt-8 font-display font-bold text-[#170B35]">Red flags</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#170B35]/70 list-disc pl-5">
                <li>Guaranteed returns, “100×” promises, or pressure to “buy now”.</li>
                <li>Token addresses sent by DM, posted in replies, or pushed by ads — we never ask you to use one.</li>
                <li>Accounts that DM you first or ask for funds/seed phrases.</li>
              </ul>

              <div className="mt-8 rounded-2xl bg-amber-50 border border-amber-200 p-4">
                <p className="text-xs font-bold text-amber-900">Not financial advice</p>
                <p className="text-xs leading-relaxed text-amber-800/70 mt-1">
                  This guide is educational. Trading crypto is risky and you can lose your entire investment. Do your own research and consider independent advice. See <Link href="/disclaimer" className="underline">Disclaimer</Link> and <Link href="/faq" className="underline">FAQ</Link>.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] bg-[#170B35] p-6 sm:p-8 text-white">
              <h3 className="font-display font-bold text-lg">Need the official link?</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">The official LUNIBOP coin page is live on Pump.fun — the Buy buttons on this site open it in a new tab. The contract address is published on Tokenomics only once the Solana mint is verified. Anything else is unofficial.</p>
              <div className="mt-6 space-y-3">
                <Link href="/tokenomics" className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white text-[#170B35] font-bold hover:bg-[#FFF9FF] transition-colors">
                  Go to Tokenomics
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 11L10 8L6 5" stroke="#170B35" strokeWidth="1.6" strokeLinecap="round"/></svg>
                </Link>
                <Link href="/faq" className="flex items-center justify-center w-full py-3 rounded-full bg-white/10 border border-white/15 text-white font-semibold hover:bg-white/15">View FAQ</Link>
              </div>
              <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-4">
                <p className="text-xs leading-relaxed text-white/50">We never ask to connect your wallet on this site. If a site does, close it and verify the URL.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "How to Buy", href: "/how-to-buy" }]} />
            <Link href="/tokenomics" className="text-sm font-bold text-[#7139C9] hover:text-[#8B5CF6] inline-flex items-center gap-1.5">Buy on Pump.fun <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 11L10 8L6 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg></Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
