import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { webpageJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const CONTACT_EMAIL = "believerbk4@gmail.com";
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent("LUNIBOP — Enquiry")}&body=${encodeURIComponent(
  "Hi LUNIBOP team,\n\nI am writing about:\n\n\n\nMy official X handle (optional): @\n\nThanks!"
)}`;

export const metadata = buildMetadata({
  title: "Contact LUNIBOP — Safe Contact Method",
  description:
    "Contact LUNIBOP safely. Learn the official contact method, response expectations, and how we never ask for seed phrases or private keys.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FFF9FF] flex flex-col">
      <Navbar />
      <JsonLd
        data={[
          webpageJsonLd({
            title: "Contact LUNIBOP — Safe Contact Method",
            description: "Contact LUNIBOP safely. Official method and expectations.",
            path: "/contact",
            image: siteConfig.images.banner,
          }),
          breadcrumbJsonLd([
            { name: "Home", href: "/" },
            { name: "Contact", href: "/contact" },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="We never DM first"
        title="Contact LUNIBOP"
        description="We keep contact minimal and safe. No wallet connections, no seed phrase requests, no paid support."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />

      <section className="py-10 sm:py-14 flex-1">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <div className="rounded-[28px] bg-white border border-[#170B35]/8 p-6 sm:p-8 shadow-sm">
              <h2 className="font-display font-extrabold text-[#170B35] text-xl">Email us</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#170B35]/60">
                The official LUNIBOP contact inbox. Open it in Gmail with the subject and message already filled in,
                or copy the address and write from any email app. You can also reach us on{" "}
                <a href={siteConfig.socials.x} target="_blank" rel="noopener noreferrer" className="text-[#7139C9] font-semibold underline">X @LUNIBOP</a>.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-[#FFF9FF] border border-[#170B35]/10 p-5">
                  <div className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-full bg-[#170B35] flex items-center justify-center text-white shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7.5L12 13L20 7.5" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 7.5V16.5C4 17.6 4.9 18.5 6 18.5H18C19.1 18.5 20 17.6 20 16.5V7.5" stroke="white" strokeWidth="1.7"/></svg>
                    </span>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold tracking-widest uppercase text-[#170B35]/40">Official email</div>
                      <a
                        href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("LUNIBOP — Enquiry")}`}
                        className="mt-1 block font-display font-bold text-[#170B35] text-[15px] sm:text-[17px] break-all hover:text-[#7139C9] transition-colors"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col xs:flex-row gap-2">
                    <a
                      href={GMAIL_COMPOSE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#170B35] text-white font-semibold text-sm min-h-[44px] hover:bg-[#1E1040] hover:scale-[1.02] active:scale-[0.98] transition-all w-full xs:w-auto"
                      aria-label={`Write to ${CONTACT_EMAIL} in Gmail — opens with message prefilled`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 4h6v6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 4l-8.5 8.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/><path d="M18.5 14.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7.5a2 2 0 0 1 2-2h3.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      Email us in Gmail
                    </a>
                    <a
                      href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("LUNIBOP — Enquiry")}`}
                      className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white border border-[#170B35]/15 text-[#170B35] font-semibold text-sm min-h-[44px] hover:border-[#170B35]/25 transition-colors w-full xs:w-auto"
                    >
                      Use my email app
                    </a>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-[#170B35]/45">
                    This is our only official email address. Anyone writing from a different address is not LUNIBOP.
                    We will never ask for your wallet recovery phrase, seed phrase, or private keys by email.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#170B35] p-5">
                  <h3 className="font-bold text-white text-sm">What we will never do</h3>
                  <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-white/60 list-disc pl-4">
                    <li>Ask for seed phrases, private keys, or wallet passwords</li>
                    <li>DM you first to offer investments or airdrops</li>
                    <li>Ask you to connect your wallet on this site</li>
                    <li>Guarantee returns or promise listings</li>
                  </ul>
                </div>
              </div>

              <h3 className="mt-8 font-display font-bold text-[#170B35]">What to include if you write us</h3>
              <ul className="mt-3 text-sm leading-relaxed text-[#170B35]/60 list-disc pl-5 space-y-1.5">
                <li>Clear subject: e.g., “LUNIBOP — Press / Partnership / Safety Report”</li>
                <li>Your official X handle (@LUNIBOP pattern) so we can verify you</li>
                <li>Screenshots and URLs if reporting a scam/impersonator</li>
                <li>No private keys or personal financial details</li>
              </ul>

              <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-200 p-4">
                <p className="text-xs font-bold text-amber-900">Response expectations</p>
                <p className="text-xs leading-relaxed text-amber-800/70 mt-1">This is a small community meme project, not a 24/7 support desk. Replies may take a few days. Critical safety reports about impersonators or fake addresses are prioritized.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[28px] bg-white border border-[#170B35]/8 p-6 shadow-sm">
                <h3 className="font-display font-bold text-[#170B35]">Quick links</h3>
                <div className="mt-4 space-y-2">
                  <Link href="/faq" className="flex items-center justify-between px-4 py-3 rounded-2xl bg-[#FFF9FF] border border-[#170B35]/8 hover:border-[#170B35]/15 transition-colors">
                    <span className="text-sm font-semibold text-[#170B35]">FAQ — common questions</span>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 11L10 8L6 5" stroke="#170B35" strokeWidth="1.6" strokeLinecap="round"/></svg>
                  </Link>
                  <Link href="/disclaimer" className="flex items-center justify-between px-4 py-3 rounded-2xl bg-[#FFF9FF] border border-[#170B35]/8 hover:border-[#170B35]/15">
                    <span className="text-sm font-semibold text-[#170B35]">Risk Disclaimer</span>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 11L10 8L6 5" stroke="#170B35" strokeWidth="1.6" strokeLinecap="round"/></svg>
                  </Link>
                  <Link href="/how-to-buy" className="flex items-center justify-between px-4 py-3 rounded-2xl bg-[#FFF9FF] border border-[#170B35]/8 hover:border-[#170B35]/15">
                    <span className="text-sm font-semibold text-[#170B35]">How to Buy Safely</span>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 11L10 8L6 5" stroke="#170B35" strokeWidth="1.6" strokeLinecap="round"/></svg>
                  </Link>
                </div>
              </div>

              <div className="rounded-[24px] bg-[#170B35] p-6">
                <h4 className="font-bold text-white text-sm">Report a scam</h4>
                <p className="text-xs leading-relaxed text-white/60 mt-2">Found a fake LUNIBOP address or impersonator account? Save URLs/screenshots and email them to us, and warn others via <Link href="/community" className="underline text-white">Community</Link>.</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
