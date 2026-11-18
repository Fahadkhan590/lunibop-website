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
  title: "Privacy Policy — LUNIBOP",
  description:
    "LUNIBOP Privacy Policy draft: what minimal data we process, cookies/analytics choices, your rights, and contact. Privacy-conscious, no tracking by default.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FFF9FF] flex flex-col">
      <Navbar />
      <JsonLd
        data={[
          webpageJsonLd({
            title: "Privacy Policy — LUNIBOP",
            description: "LUNIBOP Privacy Policy draft — minimal data, privacy-conscious approach.",
            path: "/privacy",
            image: siteConfig.images.banner,
          }),
          breadcrumbJsonLd([
            { name: "Home", href: "/" },
            { name: "Privacy Policy", href: "/privacy" },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="Privacy • Minimal Data"
        title="Privacy Policy"
        description="Last updated: November 17, 2025. Draft template — requires legal review. We aim to collect as little as possible and be transparent about it."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy" },
        ]}
      />

      <section className="py-10 sm:py-14 flex-1">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] bg-white border border-[#170B35]/8 p-6 sm:p-8 lg:p-10 shadow-sm">
            <Prose>
              <h2>Overview</h2>
              <p>
                LUNIBOP operates this Site as an informational resource. We do not run an exchange, custody funds, or require account creation. This draft explains what limited information may be processed when you visit, and your choices. It is not legal advice.
              </p>

              <h2>What we collect</h2>
              <ul>
                <li><strong>Voluntary contact:</strong> If you email us via <Link href="/contact">Contact</Link>, we receive your email address and message content solely to respond.</li>
                <li><strong>Server logs (Vercel):</strong> Standard web logs (IP address, user-agent, timestamp, requested path) for security and debugging, retained per Vercel’s default retention.</li>
                <li><strong>No accounts:</strong> We do not require logins, track portfolio balances, or store wallet seed phrases. We never ask for them.</li>
              </ul>

              <h2>Cookies &amp; analytics</h2>
              <p>
                By default this Site does not set non-essential cookies. If analytics are added later, we will update this policy, seek consent where required, and provide an opt-out. Embedded third-party content (e.g., Pump.fun) may set their own cookies — review their policies before interacting.
              </p>

              <h2>How we use information</h2>
              <ul>
                <li>To operate and secure the Site</li>
                <li>To respond to your inquiries</li>
                <li>To comply with law if required</li>
              </ul>
              <p>We do not sell personal data. We do not use your information for financial profiling or guaranteed-return marketing — we don’t promise returns. See <Link href="/disclaimer">Disclaimer</Link>.</p>

              <h2>Retention</h2>
              <p>Voluntary emails are kept only as long as needed to handle the inquiry, unless law requires longer retention. Logs follow Vercel’s retention schedule.</p>

              <h2>Your rights</h2>
              <p>Depending on your jurisdiction, you may request access, correction, or deletion of information you voluntarily provided. Contact us via <Link href="/contact">Contact</Link> with subject “Privacy Request”. We will verify your identity proportionately without asking for private keys.</p>

              <h2>Children</h2>
              <p>The Site is not directed to children under 13 (or higher age where applicable). Do not provide personal information if you are underage.</p>

              <h2>Changes</h2>
              <p>We will update this draft as features change and before any tracking is added. The “Last updated” date will change accordingly.</p>

              <h2>Contact</h2>
              <p>
                Questions about this draft? Use the safe method on <Link href="/contact">Contact</Link>. This document requires review by qualified privacy counsel before being treated as final.
              </p>
              <hr className="my-8" />
              <p className="text-xs text-[#170B35]/40">Draft for https://lunibop.vercel.app. Not legal advice.</p>
            </Prose>
          </div>
          <div className="mt-8">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy Policy", href: "/privacy" }]} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
