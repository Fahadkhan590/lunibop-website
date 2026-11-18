import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { webpageJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";

export const metadata = buildMetadata({
  title: "FAQ — LUNIBOP Questions, Safety & Solana Answers",
  description:
    "Got questions about LUNIBOP? Find answers on what LUNIBOP is, Solana blockchain, official contract, community, and why there are no guaranteed returns.",
  path: "/faq",
});

const faqs = [
  {
    q: "What is LUNIBOP?",
    a: "LUNIBOP is a playful meme coin character — a little moon bunny with big dreams — living on the Solana blockchain. It’s cultural and community-driven, not a utility token or investment product. Think storybook meets internet meme culture. See About for lore.",
  },
  {
    q: "Which blockchain is LUNIBOP on?",
    a: "Solana. That means fast transactions and low fees. You’ll need a Solana-compatible wallet (like Phantom or Solflare) and some SOL for fees if you decide to interact with the token once trading is live. See How to Buy for steps.",
  },
  {
    q: "Where can I find the official token address?",
    a: "We do not publish a token address on this site. The only official place to buy is the Pump.fun coin page linked from every Buy button here — always open it from this site, never from a DM, reply, or ad. If someone sends you an address claiming to be LUNIBOP, treat it as fake.",
  },
  {
    q: "Where can I find the official community?",
    a: "Follow LUNIBOP on X — https://x.com/LUNIBOP. That is our only official social; there is no official Telegram or Discord. We will never DM you first or link to impersonators. Always verify links through this site and the official Pump.fun coin page.",
  },
  {
    q: "Is LUNIBOP an investment with guaranteed returns?",
    a: "Absolutely not. Meme coins are highly speculative and can go to zero. Nothing on this website is financial advice. There are no guaranteed returns, no promised roadmap profits, and no assurances of price appreciation. Only participate with funds you can afford to lose entirely, and read our Disclaimer.",
  },
  {
    q: "How do I avoid LUNIBOP scams?",
    a: "Never share your wallet recovery phrase, seed phrase, or private keys with anyone — we will never ask for them. Never connect your wallet on this site (we never ask). Bookmark only the official links on this site. Verify the token name is LUNIBOP and the ticker is $LUNIBOP on the official Pump.fun coin page — one character different is a scam token. When in doubt, close the tab.",
  },
  {
    q: "Will LUNIBOP be listed on exchanges?",
    a: "We do not announce or invent exchange listings. Any listing would be verifiable on the exchange itself and cross-linked from this site. Beware of screenshots claiming listings.",
  },
  {
    q: "How can I contact the team?",
    a: "See Contact for our safe contact method. We don’t use DMs for support and never ask for private keys. Response times vary as this is a community-driven meme project.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#FFF9FF] flex flex-col">
      <Navbar />
      <JsonLd
        data={[
          webpageJsonLd({
            title: "FAQ — LUNIBOP Questions, Safety & Solana Answers",
            description: "Got questions about LUNIBOP? Find answers on Solana, contract, community, and risks.",
            path: "/faq",
            image: siteConfig.images.banner,
          }),
          breadcrumbJsonLd([
            { name: "Home", href: "/" },
            { name: "FAQ", href: "/faq" },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <PageHeader
        eyebrow="Honest Answers"
        title="Frequently Asked Questions"
        description="No hype, no invented data. If it’s not verifiable on Solana or Pump.fun, we don’t claim it."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />

      <section className="py-10 sm:py-14 flex-1">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-[24px] bg-white border border-[#170B35]/8 open:border-[#7139C9]/15 open:shadow-[0_12px_32px_rgba(23,11,53,0.08)] transition-all"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="list-none flex items-center justify-between gap-4 px-6 sm:px-7 py-5 sm:py-6 cursor-pointer">
                  <span className="font-display font-bold text-[#170B35] text-[15px] sm:text-[16px] leading-tight">{f.q}</span>
                  <span className="w-9 h-9 rounded-full bg-[#FFF9FF] border border-[#170B35]/10 flex items-center justify-center text-[#170B35]/40 group-open:bg-[#7139C9] group-open:text-white group-open:border-[#7139C9] transition-colors shrink-0">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                  </span>
                </summary>
                <div className="px-6 sm:px-7 pb-6">
                  <div className="h-px bg-[#170B35]/5 mb-4" />
                  <p className="text-[14px] leading-relaxed text-[#170B35]/65">{f.a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-8 rounded-[24px] bg-[#170B35] p-6 sm:p-7 flex flex-col sm:flex-row gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-[#FFD76A] flex items-center justify-center text-[#170B35] shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 9V13M12 17H12.01M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#170B35" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-sm">Still unsure?</h3>
              <p className="text-sm leading-relaxed text-white/60 mt-1">
                Read <Link href="/disclaimer" className="underline text-white">Disclaimer</Link>, <Link href="/how-to-buy" className="underline text-white">How to Buy</Link>, and <Link href="/tokenomics" className="underline text-white">Tokenomics</Link> before making any decision. LUNIBOP is highly speculative.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-between items-center">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ", href: "/faq" }]} />
            <Link href="/contact" className="text-sm font-bold text-[#7139C9] hover:text-[#8B5CF6]">Contact us →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
