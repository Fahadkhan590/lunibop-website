import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { webpageJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { Prose } from "@/components/Prose";

export const metadata = buildMetadata({
  title: "Disclaimer — Cryptocurrency Risk Warning for LUNIBOP",
  description:
    "Important disclaimer: LUNIBOP is a highly speculative Solana meme coin. No guaranteed returns, no financial advice. Read risks before deciding to trade.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#FFF9FF] flex flex-col">
      <Navbar />
      <JsonLd
        data={[
          webpageJsonLd({
            title: "Disclaimer — Cryptocurrency Risk Warning for LUNIBOP",
            description: "Risk disclaimer for LUNIBOP meme coin: no guaranteed returns, not financial advice.",
            path: "/disclaimer",
            image: siteConfig.images.banner,
          }),
          breadcrumbJsonLd([
            { name: "Home", href: "/" },
            { name: "Disclaimer", href: "/disclaimer" },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="Read Carefully"
        title="Cryptocurrency & Risk Disclaimer"
        description="Last updated: November 17, 2025. This disclaimer explains the high risks of meme coins. Nothing here is financial advice."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Disclaimer", href: "/disclaimer" },
        ]}
      />

      <section className="py-10 sm:py-14 flex-1">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] bg-[#170B35] p-6 sm:p-7 mb-6 flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FFD76A] flex items-center justify-center text-[#170B35] shrink-0 font-bold" aria-hidden="true">!</div>
            <p className="text-sm leading-relaxed text-white/80">
              <span className="font-bold text-white">LUNIBOP is a meme coin.</span> It is highly speculative, volatile, and can lose some or all of its value. There are no guaranteed returns. Read this entire page before interacting with any Solana token, including LUNIBOP.
            </p>
          </div>

          <div className="rounded-[32px] bg-white border border-[#170B35]/8 p-6 sm:p-8 lg:p-10 shadow-sm">
            <Prose>
              <h2>1. Not financial, investment, or legal advice</h2>
              <p>
                All content on https://lunibop.vercel.app, including <Link href="/blog">Blog</Link>, <Link href="/how-to-buy">How to Buy</Link>, <Link href="/tokenomics">Tokenomics</Link>, and <Link href="/faq">FAQ</Link>, is for general informational and educational purposes only. We do not provide financial, investment, trading, tax, or legal advice. Make your own decisions and consider consulting a licensed professional.
              </p>

              <h2>2. High-risk, speculative asset</h2>
              <p>Meme coins have no intrinsic value, no revenue, and no obligation to maintain a price. The market is driven by sentiment and can collapse quickly. You should only use funds you can afford to lose entirely. If you need the money for living expenses, do not trade.</p>

              <h2>3. No promises of profit, listings, or audits</h2>
              <ul>
                <li>We do not promise price appreciation, staking rewards, dividends, or buybacks.</li>
                <li>We do not guarantee exchange listings, audits, or partnerships. Any future claim will be verifiable on-chain and cross-linked from <Link href="/community">Community</Link>.</li>
                <li>We do not invent market data. Supply, market cap, holders, and liquidity appear only when verifiable after launch (see <Link href="/tokenomics">Tokenomics</Link> placeholders).</li>
              </ul>

              <h2>4. Verify official sources</h2>
              <p>
                The only official sources are this website and the official Pump.fun page once live. Any address shared elsewhere first is suspect. Bookmark the canonical URLs from <Link href="/tokenomics">Tokenomics</Link> and verify contract, name <strong>LUNIBOP</strong>, and ticker <strong>$LUNIBOP</strong> exactly. One character difference can be a scam.
              </p>

              <h2>5. Wallet &amp; security risks</h2>
              <p>
                Self-custody means you are responsible for your seed phrase, private keys, and transaction approvals (see <Link href="/how-to-buy">How to Buy</Link> safety checklist). We will never ask for seed phrases or ask you to connect your wallet on this Site. Phishing, impersonation, and smart contract bugs are real risks on Solana and elsewhere.
              </p>

              <h2>6. Regulatory &amp; tax uncertainty</h2>
              <p>
                Cryptocurrencies may be restricted or taxable in your jurisdiction. Rules change. Ensure your activity complies with local laws and seek independent tax advice. This Site is not registered as an investment adviser, broker-dealer, or regulated financial institution.
              </p>

              <h2>7. Forward-looking statements</h2>
              <p>
                Any mention of community plans is aspirational, not a guarantee. Meme coin communities evolve unpredictably. We make no commitment to maintain a price floor or provide ongoing utility.
              </p>

              <h2>8. Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, LUNIBOP contributors, artists, and community moderators are not liable for any losses, including loss of funds, profits, or data, arising from use of the Site, third-party wallets, or Pump.fun. You assume all risk.
              </p>

              <h2>9. Updates</h2>
              <p>This disclaimer may be updated as laws or the project change. The “Last updated” date indicates the current version. Continued use after an update means you accept it.</p>

              <div className="rounded-2xl bg-[#FFF9FF] border border-[#170B35]/8 p-4 mt-6">
                <p className="text-sm font-bold text-[#170B35]">Bottom line</p>
                <p className="text-sm leading-relaxed text-[#170B35]/60 mt-1">
                  LUNIBOP is for fun, culture, and community — not a savings account. Don’t risk more than you can lose, verify everything, and read <Link href="/faq">FAQ</Link> before deciding.
                </p>
              </div>

              <hr className="my-8" />
              <p className="text-xs text-[#170B35]/40">This disclaimer is a draft informational notice, not legal advice. Obtain qualified review before relying on it.</p>
            </Prose>
          </div>

          <div className="mt-8">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Disclaimer", href: "/disclaimer" }]} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
