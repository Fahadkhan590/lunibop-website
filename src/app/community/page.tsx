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
  title: "Community — Official LUNIBOP X Account",
  description:
    "Follow the official LUNIBOP community on X at x.com/LUNIBOP — verified, no fake handles. Bookmark the Pump.fun page.",
  path: "/community",
});

export default function CommunityPage() {
  const hasX = Boolean(siteConfig.socials.x);
  const hasPumpUrl = Boolean(siteConfig.pumpFunUrl);

  return (
    <main className="min-h-screen bg-[#0F0728] flex flex-col">
      <Navbar />
      <JsonLd
        data={[
          webpageJsonLd({
            title: "Community — Official LUNIBOP X Account",
            description: "Official LUNIBOP community on X at x.com/LUNIBOP — verified, no fake handles.",
            path: "/community",
            image: siteConfig.images.banner,
          }),
          breadcrumbJsonLd([
            { name: "Home", href: "/" },
            { name: "Community", href: "/community" },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="One Official Handle"
        title="LUNIBOP on X"
        description="Single official social: x.com/LUNIBOP. No other official socials. Beware of impersonators."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Community", href: "/community" },
        ]}
      />

      <section className="py-10 sm:py-14 flex-1">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] bg-white p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.2)]">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-2xl bg-[#170B35] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </div>
              <span className="px-3 py-1.5 rounded-full text-xs font-bold border bg-green-50 border-green-200 text-green-700">● Official & Verified</span>
            </div>
            <h2 className="mt-5 font-display font-extrabold text-[#170B35] text-xl">X (Twitter) — @LUNIBOP</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#170B35]/60">Follow for art drops, lore updates, and verified announcements. We post only from <span className="font-bold text-[#170B35]">https://x.com/LUNIBOP</span>.</p>
            <div className="mt-6">
              <a href={siteConfig.socials.x} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#170B35] text-white font-bold hover:bg-[#1E1040] transition-colors">
                Follow on X — @LUNIBOP
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
            <p className="mt-3 text-xs text-[#170B35]/40 text-center">Bookmark https://x.com/LUNIBOP — handle verified via this site. Any other X handle is fake.</p>
            <div className="mt-6 rounded-2xl bg-[#FFF9FF] border border-[#170B35]/8 p-4">
              <p className="text-xs leading-relaxed text-[#170B35]/60"><span className="font-bold text-[#170B35]">Safety:</span> We never DM you first, never ask for seed phrases, and never sell “exclusive” access. See <Link href="/how-to-buy" className="underline text-[#7139C9]">How to Buy</Link> & <Link href="/disclaimer" className="underline text-[#7139C9]">Disclaimer</Link>.</p>
            </div>
          </div>

          <div className="mt-6 rounded-[28px] bg-white p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.2)] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFD76A] flex items-center justify-center text-[#170B35] font-extrabold">P</div>
              <div>
                <div className="font-display font-extrabold text-[#170B35] text-lg flex items-center gap-2">Pump.fun <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${hasPumpUrl ? "bg-green-50 border-green-200 text-green-700" : "bg-amber-50 border-amber-200 text-amber-700"}`}>{hasPumpUrl ? "● Buy buttons live" : "○ Link at launch"}</span></div>
                <div className="text-sm text-[#170B35]/60">Only official coin page. Every Buy button on this site links to it.</div>
              </div>
            </div>
            <BuyButton variant="light" />
          </div>

          <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-4">
            <p className="text-xs leading-relaxed text-white/50 text-center">If you see another “official” LUNIBOP account, it is fake — verify only here.</p>
          </div>

          <div className="mt-4">
            <FakeTokenWarning variant="dark" />
          </div>

          <div className="mt-8">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Community", href: "/community" }]} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
