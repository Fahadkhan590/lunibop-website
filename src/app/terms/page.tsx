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
  title: "Terms of Use — LUNIBOP",
  description:
    "LUNIBOP Terms of Use: informational draft describing site usage, intellectual property, disclaimers, and limitations. Requires legal review — not legal advice.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FFF9FF] flex flex-col">
      <Navbar />
      <JsonLd
        data={[
          webpageJsonLd({
            title: "Terms of Use — LUNIBOP",
            description: "LUNIBOP Terms of Use informational draft — requires legal review.",
            path: "/terms",
            image: siteConfig.images.banner,
          }),
          breadcrumbJsonLd([
            { name: "Home", href: "/" },
            { name: "Terms of Use", href: "/terms" },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="Legal • Draft • Requires review"
        title="Terms of Use"
        description="Last updated: November 17, 2025. This is an informational draft for a meme coin project. It is not legal advice and requires review by qualified counsel."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Terms of Use", href: "/terms" },
        ]}
      />

      <section className="py-10 sm:py-14 flex-1">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] bg-amber-50 border border-amber-200 p-5 mb-6">
            <p className="text-xs font-bold text-amber-900">Important: draft, not legal approval</p>
            <p className="text-xs leading-relaxed text-amber-800/70 mt-1">
              This page is a good-faith informational template. It does not create attorney-client relationship, regulatory registration, or compliance certification. Have a licensed attorney review before relying on it. See also <Link href="/privacy" className="underline">Privacy</Link> and <Link href="/disclaimer" className="underline">Disclaimer</Link>.
            </p>
          </div>

          <div className="rounded-[32px] bg-white border border-[#170B35]/8 p-6 sm:p-8 lg:p-10 shadow-sm">
            <Prose>
              <h2>1. Acceptance</h2>
              <p>By accessing https://lunibop.vercel.app (the “Site”), you agree to these Terms and our <Link href="/privacy">Privacy Policy</Link> and <Link href="/disclaimer">Disclaimer</Link>. If you don’t agree, don’t use the Site.</p>

              <h2>2. Informational purpose only</h2>
              <p>The Site provides educational information about LUNIBOP, a Solana meme coin character. Nothing is financial, investment, tax, or legal advice. You are responsible for your own decisions and for verifying official links and contract addresses via <Link href="/tokenomics">Tokenomics</Link>.</p>

              <h2>3. No wallet connection &amp; no custody</h2>
              <p>We do not request wallet connections, seed phrases, or private keys on this Site. We do not custody funds or execute transactions. All on-chain actions happen in your own self-custody wallet via Pump.fun.</p>

              <h2>4. Intellectual property</h2>
              <p>LUNIBOP mascot art, banner, logos, and copy are protected. You may share links and memes for non-commercial community purposes with attribution. Don’t impersonate the project or create fake official accounts.</p>

              <h2>5. User conduct</h2>
              <p>Don’t attempt to disrupt, scrape aggressively, or distribute malware via the Site. Don’t use the brand to mislead others about official addresses or partnerships.</p>

              <h2>6. Third-party links</h2>
              <p>Links to Pump.fun, X, or explorers are for convenience. We don’t control their availability or security. Verify URLs before interacting.</p>

              <h2>7. Disclaimers &amp; limitation of liability</h2>
              <p>The Site is provided “as is” without warranties. To the fullest extent permitted by law, LUNIBOP contributors are not liable for losses arising from use of the Site, third-party tools, or price volatility. Meme coins can lose all value. See <Link href="/disclaimer">Disclaimer</Link>.</p>

              <h2>8. Changes</h2>
              <p>We may update these Terms as the project evolves. The “Last updated” date reflects the latest draft. Continued use means you accept the updated version.</p>

              <h2>9. Governing law &amp; contact</h2>
              <p>This draft does not specify governing law — leave blank until counsel advises. For questions, use the safe method on <Link href="/contact">Contact</Link>. We never handle disputes via DMs about funds.</p>

              <hr className="my-8" />
              <p className="text-xs text-[#170B35]/40">Draft prepared for LUNIBOP. Not legal advice. Obtain professional review before publication as final terms.</p>
            </Prose>
          </div>

          <div className="mt-8">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Terms of Use", href: "/terms" }]} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
