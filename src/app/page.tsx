import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/lib/blog";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, webpageJsonLd } from "@/lib/jsonld";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TokenInfo } from "@/components/TokenInfo";
import { HowToBuy } from "@/components/HowToBuy";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";
import { FakeTokenWarning } from "@/components/FakeTokenWarning";
import { BuyButton } from "@/components/BuyButton";

export const metadata = buildMetadata({
  title: "Official Website — Solana Meme Coin on Pump.fun",
  description:
    "LUNIBOP ($LUNIBOP) official website. Learn about the moon bunny lore, verify the Solana contract, explore tokenomics, and learn how to buy safely on Pump.fun.",
  path: "/",
});

export default function HomePage() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0F0728]">
      <JsonLd
        data={[
          webpageJsonLd({
            title: "LUNIBOP Official Website — Solana Meme Coin on Pump.fun",
            description: siteConfig.description,
            path: "/",
            image: siteConfig.images.banner,
          }),
          breadcrumbJsonLd([{ name: "Home", href: "/" }]),
        ]}
      />
      <Navbar />
      <Hero />

      {/* SEO: Quick explain with internal links */}
      <section className="relative bg-[#FFF9FF] py-8 border-y border-[#170B35]/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-sm leading-relaxed text-[#170B35]/60 max-w-[640px] text-center lg:text-left">
            <strong className="text-[#170B35]">LUNIBOP</strong> is a Solana meme coin — not an investment. Start with{" "}
            <Link href="/about" className="text-[#7139C9] underline underline-offset-4 font-semibold hover:text-[#8B5CF6]">About</Link>, check{" "}
            <Link href="/tokenomics" className="text-[#7139C9] underline underline-offset-4 font-semibold hover:text-[#8B5CF6]">Tokenomics</Link> for verified data, and learn{" "}
            <Link href="/how-to-buy" className="text-[#7139C9] underline underline-offset-4 font-semibold hover:text-[#8B5CF6]">How to Buy safely</Link>.
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <Link href="/blog" className="px-4 py-2 rounded-full bg-[#170B35] text-white text-sm font-semibold hover:bg-[#1E1040] transition-colors">Explore Blog</Link>
            <Link href="/faq" className="px-4 py-2 rounded-full bg-white border border-[#170B35]/10 text-[#170B35] text-sm font-semibold hover:bg-[#FFF9FF] transition-colors">Read FAQ</Link>
          </div>
        </div>
      </section>

      <About />
      {/* CTA after About */}
      <div className="bg-[#FFF9FF] pb-2">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#170B35]/10 text-[#170B35] font-semibold shadow-sm hover:shadow hover:border-[#170B35]/15 transition-all">
              Read the full story
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 11L10 8L6 5" stroke="#170B35" strokeWidth="1.6" strokeLinecap="round"/></svg>
            </Link>
          </div>
        </div>
      </div>

      <TokenInfo />
      <div className="bg-[#0F0728] py-6 flex justify-center">
        <Link href="/tokenomics" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#170B35] font-bold shadow hover:shadow-lg transition-all">
          View Tokenomics Page
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 11L10 8L6 5" stroke="#170B35" strokeWidth="1.6" strokeLinecap="round"/></svg>
        </Link>
      </div>

      <HowToBuy />
      <div className="bg-[#FFF9FF] py-6 flex justify-center">
        <Link href="/how-to-buy" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#170B35] text-white font-bold hover:bg-[#1E1040] transition-colors">
          Full How to Buy Guide
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 11L10 8L6 5" stroke="white" strokeWidth="1.6" strokeLinecap="round"/></svg>
        </Link>
      </div>

      {/* Blog preview — SEO internal linking */}
      <section className="relative py-16 sm:py-20 bg-[#FFF9FF] border-t border-[#170B35]/5 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(900px,100vw)] h-[400px] max-w-[900px] bg-[#C6A6FF]/8 blur-[60px] rounded-full" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#170B35]/5 border border-[#170B35]/10">
                <span className="w-2 h-2 rounded-full bg-[#7139C9]" aria-hidden="true" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#170B35]/70">Learn & Stay Safe</span>
              </div>
              <h2 className="mt-4 font-display font-extrabold text-[32px] sm:text-[40px] leading-tight tracking-tight text-[#170B35]">
                Latest from the <span className="text-[#7139C9]">LUNIBOP Blog</span>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#170B35]/60 max-w-[600px]">Educational guides on LUNIBOP, Solana wallet safety, and meme coin literacy — no hype, no fake news.</p>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#170B35] text-white font-semibold hover:bg-[#1E1040] transition-colors shrink-0">
              View All Articles
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 11L10 8L6 5" stroke="white" strokeWidth="1.6" strokeLinecap="round"/></svg>
            </Link>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-[28px] bg-white border border-[#170B35]/8 overflow-hidden shadow-[0_8px_24px_rgba(23,11,53,0.06)] hover:shadow-[0_16px_40px_rgba(23,11,53,0.12)] hover:-translate-y-1 transition-all">
                <div className="h-44 overflow-hidden bg-[#FFF9FF] relative">
                  <picture>
                    <source srcSet={post.image} type="image/webp" />
                    <img src={post.image} alt={post.imageAlt} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" width={600} height={400} loading="lazy" decoding="async" />
                  </picture>
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur border border-[#170B35]/10 text-xs font-bold text-[#170B35]">{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="text-xs text-[#170B35]/40 font-semibold tracking-widest uppercase">{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} • {post.readingTime}</div>
                  <h3 className="mt-2 font-display font-bold text-[#170B35] text-[16px] leading-tight line-clamp-2 group-hover:text-[#7139C9] transition-colors">{post.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#170B35]/60 line-clamp-2">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#7139C9]">Read article <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 11L10 8L6 5" stroke="#7139C9" strokeWidth="1.7" strokeLinecap="round"/></svg></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Buy CTA + fake-token warning. The contract-address block was removed at the
          team's request — no unverified address or "not yet verified" notice is shown. */}
      <section id="buy" className="relative py-14 sm:py-16 bg-[#0F0728] border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(900px,100vw)] h-[360px] max-w-[900px] bg-[#7139C9]/15 blur-[100px] rounded-full" />
        </div>
        <div className="relative max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[640px] mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-[#FFD76A] animate-pulse" aria-hidden="true" />
              <span className="text-xs font-bold tracking-widest uppercase text-white/70">Official Pump.fun Page</span>
            </div>
            <h2 className="mt-5 font-display font-extrabold text-[28px] sm:text-[38px] leading-tight tracking-tight text-white">
              Get LUNIBOP on <span className="text-[#C6A6FF]">Pump.fun</span>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/60">
              Always buy through the official link on this page — never from DMs, replies, or ads.
            </p>
          </div>

          <div className="mt-8">
            <FakeTokenWarning variant="dark" />
          </div>

          <div className="mt-6 flex flex-col items-center gap-3">
            <BuyButton size="large" showWarning />
            <p className="text-xs text-white/40 text-center">
              We never ask for seed phrases or private keys, and never request a wallet connection on this site.
            </p>
          </div>
        </div>
      </section>

      <Community />
      <Footer />
    </main>
  );
}
