import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { blogPosts, categories } from "@/lib/blog";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { webpageJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata = buildMetadata({
  title: "Blog — Solana Meme Coin Education & LUNIBOP Updates",
  description:
    "Official LUNIBOP blog: learn about LUNIBOP on Solana, Pump.fun safety, wallet hygiene, and meme coin literacy. No hype — just helpful guides.",
  path: "/blog",
});

export default function BlogIndexPage() {
  // Static (no searchParams) so the index is prerendered and CDN-cached.
  const filtered = blogPosts;

  return (
    <main className="min-h-screen bg-[#FFF9FF] flex flex-col">
      <Navbar />
      <JsonLd
        data={[
          webpageJsonLd({
            title: "Blog — Solana Meme Coin Education & LUNIBOP Updates",
            description: "Official LUNIBOP blog: education on Solana meme coins, wallet safety, and community updates.",
            path: "/blog",
            image: siteConfig.images.banner,
          }),
          breadcrumbJsonLd([
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="Education • Safety • Community"
        title="LUNIBOP Blog"
        description="Guides on LUNIBOP, Solana wallet safety, and meme coin literacy. We publish only what we can verify — no fake partnerships or exchange listings."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />

      <section className="py-8 sm:py-10 flex-1">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category nav */}
          <div className="flex flex-wrap gap-2">
            <a
              href="#all"
              className="px-4 py-2 rounded-full text-sm font-semibold border transition-colors bg-[#170B35] text-white border-[#170B35]"
            >
              All ({blogPosts.length})
            </a>
            {categories.map((cat) => {
              const count = blogPosts.filter((p) => p.category === cat).length;
              if (count === 0) return null;
              return (
                <a
                  key={cat}
                  href={`#${cat.toLowerCase()}`}
                  className="px-4 py-2 rounded-full text-sm font-semibold border transition-colors bg-white text-[#170B35]/70 border-[#170B35]/10 hover:border-[#170B35]/20"
                >
                  {cat} ({count})
                </a>
              );
            })}
          </div>

          {/* Articles */}
          <div id="all" className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-[28px] bg-white border border-[#170B35]/8 overflow-hidden shadow-[0_8px_24px_rgba(23,11,53,0.06)] hover:shadow-[0_16px_40px_rgba(23,11,53,0.12)] hover:-translate-y-1 transition-all flex flex-col"
              >
                <div className="h-48 overflow-hidden bg-[#FFF9FF] relative">
                  <picture>
                    <source srcSet={post.image} type="image/webp" />
                    <img src={post.image} alt={post.imageAlt} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" width={600} height={400} loading="lazy" decoding="async" />
                  </picture>
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur border border-[#170B35]/10 text-xs font-bold text-[#170B35]">{post.category}</span>
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#170B35] text-white text-xs font-bold">{post.readingTime}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-xs text-[#170B35]/40 font-semibold tracking-widest uppercase">
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} • {post.author}
                  </div>
                  <h2 className="mt-2 font-display font-bold text-[#170B35] text-[17px] leading-tight line-clamp-2 group-hover:text-[#7139C9] transition-colors">{post.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#170B35]/60 line-clamp-3 flex-1">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#7139C9]">Read article <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 11L10 8L6 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg></span>
                    <span className="text-xs text-[#170B35]/30">{post.keywords.slice(0, 2).join(" • ")}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-12 text-center py-16 rounded-[28px] bg-white border border-[#170B35]/8">
              <p className="text-[#170B35]/60">No articles in this category yet. Try another filter.</p>
              <Link href="/blog" className="mt-4 inline-flex px-5 py-2 rounded-full bg-[#170B35] text-white font-semibold">View all</Link>
            </div>
          )}

          {/* SEO internal links */}
          <div className="mt-12 rounded-[24px] bg-white border border-[#170B35]/8 p-6">
            <h3 className="font-display font-bold text-[#170B35]">Explore LUNIBOP</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link href="/about" className="px-4 py-2 rounded-full bg-[#FFF9FF] border border-[#170B35]/10 text-sm font-semibold text-[#170B35] hover:bg-white">About LUNIBOP</Link>
              <Link href="/tokenomics" className="px-4 py-2 rounded-full bg-[#FFF9FF] border border-[#170B35]/10 text-sm font-semibold text-[#170B35] hover:bg-white">Tokenomics</Link>
              <Link href="/how-to-buy" className="px-4 py-2 rounded-full bg-[#FFF9FF] border border-[#170B35]/10 text-sm font-semibold text-[#170B35] hover:bg-white">How to Buy</Link>
              <Link href="/faq" className="px-4 py-2 rounded-full bg-[#FFF9FF] border border-[#170B35]/10 text-sm font-semibold text-[#170B35] hover:bg-white">FAQ</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
