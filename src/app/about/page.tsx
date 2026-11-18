import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { webpageJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { StarIcon, EyeIcon, HeartIcon, FlowerIcon, MoonIcon, SparkleIcon, MagicWandIcon } from "@/components/Icons";

export const metadata = buildMetadata({
  title: "About LUNIBOP — The Little Moon Bunny from the Moon",
  description:
    "Discover LUNIBOP's story: a tiny fluffy moon bunny with galaxy eyes and a golden star. Learn the lore, values, and vision behind the Solana meme coin.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFF9FF] flex flex-col">
      <Navbar />
      <JsonLd
        data={[
          webpageJsonLd({
            title: "About LUNIBOP — The Little Moon Bunny",
            description: "Discover LUNIBOP's story: a tiny fluffy moon bunny with galaxy eyes and a golden star.",
            path: "/about",
            image: siteConfig.images.mascot,
          }),
          breadcrumbJsonLd([
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="The Lore"
        title="Meet the Little Bunny from the Moon"
        description="Somewhere beyond the stars, a little bunny found a golden star and decided to explore the internet. That's how LUNIBOP began — a tiny moon creature with big dreams and a place in meme culture."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      <section className="py-10 sm:py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro card */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8">
            <div className="rounded-[32px] bg-white border border-[#170B35]/8 p-6 sm:p-8 lg:p-10 shadow-[0_12px_40px_rgba(23,11,53,0.07)]">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFD76A]/15 border border-[#FFD76A]/20">
                <StarIcon className="w-3.5 h-3.5 text-[#92400E]" />
                <span className="text-xs font-bold tracking-wide text-[#92400E]">Fictional mascot lore — not a financial claim</span>
              </div>
              <h2 className="mt-6 font-display font-extrabold text-[24px] sm:text-[28px] leading-tight text-[#170B35]">A storybook character that discovered Solana</h2>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[#170B35]/70">
                <p>
                  <strong className="text-[#170B35]">LUNIBOP</strong> is not a bank, fund, or tech startup. It&apos;s a character: fluffy white and pale lavender fur, large sparkling violet galaxy eyes, pink inner ears, rosy cheeks, a glowing golden star on its forehead, and tiny paws built for holding stars.
                </p>
                <p>
                  The bunny is joyful, a touch mischievous, and endlessly curious. We keep the story lightweight on purpose — no fabricated roadmap, no promise of utility, no guaranteed returns. LUNIBOP exists to bring a little magic to the Solana meme universe, and the community decides what that means.
                </p>
                <p>
                  If you’re looking for <Link href="/tokenomics" className="text-[#7139C9] font-semibold underline underline-offset-4 hover:text-[#8B5CF6]">verified token data</Link>, head to Tokenomics. If you want to learn how to interact safely, see{" "}
                  <Link href="/how-to-buy" className="text-[#7139C9] font-semibold underline underline-offset-4 hover:text-[#8B5CF6]">How to Buy</Link>.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {[
                  { Icon: StarIcon, label: "Golden star forehead", color: "bg-[#FFD76A]/20 border-[#FFD76A]/30 text-[#92400E]" },
                  { Icon: EyeIcon, label: "Galaxy violet eyes", color: "bg-[#C6A6FF]/20 border-[#C6A6FF]/30 text-[#4C1D95]" },
                  { Icon: HeartIcon, label: "Rosy cheeks & pink ears", color: "bg-[#FFB9DE]/25 border-[#FFB9DE]/30 text-[#9D174D]" },
                  { Icon: FlowerIcon, label: "Fluffy lavender fur", color: "bg-[#7139C9]/10 border-[#7139C9]/15 text-[#4C1D95]" },
                ].map((t) => (
                  <span key={t.label} className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-semibold ${t.color}`}>
                    <t.Icon className="w-3.5 h-3.5" />
                    {t.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[32px] overflow-hidden bg-gradient-to-br from-[#170B35] via-[#1E1040] to-[#2D1B69] p-1.5 shadow-[0_12px_40px_rgba(23,11,53,0.2)]">
                <div className="rounded-[24px] overflow-hidden bg-[#0F0728] relative">
                  <picture>
                    <source srcSet={siteConfig.images.mascot} type="image/webp" />
                    <img src={siteConfig.images.mascot} alt="LUNIBOP moon bunny mascot with golden star on forehead and galaxy violet eyes" className="w-full aspect-[4/3] object-cover" width={600} height={450} loading="eager" decoding="async" />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#170B35]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-4 flex items-center justify-between">
                    <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FFD76A] animate-pulse" aria-hidden="true" /> Moon explorer
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-[#FFD76A] text-[#170B35] text-xs font-extrabold">{siteConfig.ticker}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { Icon: MoonIcon, title: "Dreamy", desc: "Starry-eyed explorer" },
                  { Icon: SparkleIcon, title: "Mischief", desc: "Playful & cheeky" },
                  { Icon: MagicWandIcon, title: "Magic", desc: "Moonlit wonder" },
                ].map((c) => (
                  <div key={c.title} className="rounded-2xl bg-white border border-[#170B35]/8 p-4 text-center shadow-[0_8px_24px_rgba(23,11,53,0.06)]">
                    <div className="w-10 h-10 mx-auto rounded-full bg-[#170B35]/5 flex items-center justify-center text-[#7139C9] mb-2">
                      <c.Icon className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-extrabold text-[#170B35]">{c.title}</div>
                    <div className="text-[11px] text-[#170B35]/50 mt-1">{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Playful, not predatory",
                desc: "We never promise profits, yields, or price targets. LUNIBOP is cultural — memes, art, and community inside jokes.",
                href: "/disclaimer",
                link: "Read disclaimer",
              },
              {
                title: "Safety first",
                desc: "No wallet connections on this site, no DMs asking for seed phrases, and no fake airdrops. Verify every address.",
                href: "/how-to-buy",
                link: "Safety guide",
              },
              {
                title: "Transparency",
                desc: "We show placeholders where data isn’t verified yet — supply, market cap, and holders appear only after launch.",
                href: "/tokenomics",
                link: "See tokenomics",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-[24px] bg-white border border-[#170B35]/8 p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-display font-bold text-[#170B35] text-[16px]">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#170B35]/60">{card.desc}</p>
                <Link href={card.href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#7139C9] hover:text-[#8B5CF6]">
                  {card.link}
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 11L10 8L6 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
                </Link>
              </div>
            ))}
          </div>

          {/* Breadcrumb footer */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
            <div className="flex gap-2">
              <Link href="/how-to-buy" className="px-5 py-3 rounded-full bg-[#170B35] text-white font-semibold hover:bg-[#1E1040] transition-colors">How to Buy Safely</Link>
              <Link href="/community" className="px-5 py-3 rounded-full bg-white border border-[#170B35]/10 text-[#170B35] font-semibold hover:bg-[#FFF9FF]">Join Community</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
