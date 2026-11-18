import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, canonical } from "@/config/site";
import { blogPosts, getPostBySlug } from "@/lib/blog";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, breadcrumbJsonLd, webpageJsonLd } from "@/lib/jsonld";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) return buildMetadata({ title: "Article not found", path: `/blog/${params.slug}`, noIndex: true });
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.modified || post.date,
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  return (
    <main className="min-h-screen bg-[#FFF9FF] flex flex-col">
      <Navbar />
      <JsonLd
        data={[
          webpageJsonLd({
            title: post.title,
            description: post.excerpt,
            path: `/blog/${post.slug}`,
            image: post.image,
          }),
          articleJsonLd(post),
          breadcrumbJsonLd([
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: post.title, href: `/blog/${post.slug}` },
          ]),
        ]}
      />

      {/* Hero */}
      <div className="relative overflow-hidden bg-[#0F0728] border-b border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(900px,100vw)] h-[500px] max-w-[900px] bg-[#7139C9]/15 blur-[100px] rounded-full" />
        </div>
        <div className="relative max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }]} />
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#FFD76A] text-[#170B35] text-xs font-extrabold tracking-wide uppercase">{post.category}</span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/70 text-xs font-semibold">{post.readingTime}</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs">
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
          </div>
          <h1 className="mt-4 font-display font-extrabold text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.05] tracking-tight text-white">{post.title}</h1>
          <p className="mt-4 text-[16px] leading-relaxed text-white/60">{post.excerpt}</p>
          <div className="mt-4 flex items-center gap-3 text-xs text-white/40">
            <span className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold">L</span>
              {post.author}
            </span>
            <span>•</span>
            <span>Updated {post.modified ? new Date(post.modified).toLocaleDateString() : new Date(post.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <article className="py-8 sm:py-12 flex-1">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] overflow-hidden bg-white border border-[#170B35]/8 shadow-[0_12px_40px_rgba(23,11,53,0.08)]">
            <div className="h-[280px] sm:h-[380px] overflow-hidden bg-[#0F0728] relative">
              <picture>
                <source srcSet={post.image} type="image/webp" />
                <img src={post.image} alt={post.imageAlt} className="w-full h-full object-cover" width={1200} height={600} loading="eager" decoding="async" />
              </picture>
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Article content — styled prose */}
              <div
                className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-[#170B35] prose-p:text-[#170B35]/70 prose-p:leading-relaxed prose-a:text-[#7139C9] hover:prose-a:text-[#8B5CF6] prose-strong:text-[#170B35] prose-li:text-[#170B35]/70 prose-ul:list-disc prose-h2:text-[22px] prose-h2:mt-8 prose-h2:mb-3"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share / SEO */}
              <div className="mt-8 pt-6 border-t border-[#170B35]/8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map((k) => (
                    <span key={k} className="px-3 py-1.5 rounded-full bg-[#FFF9FF] border border-[#170B35]/10 text-xs font-semibold text-[#170B35]/60">{k}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs text-[#170B35]/40">
                  <span>Share on:</span>
                  <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(canonical(`/blog/${post.slug}`))}`} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-full bg-[#170B35] text-white font-semibold hover:bg-[#1E1040]">X — @LUNIBOP</a>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-[#170B35] p-5 flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FFD76A] flex items-center justify-center text-[#170B35] shrink-0 font-bold">!</div>
                <p className="text-xs leading-relaxed text-white/60">
                  <span className="font-bold text-white">Risk reminder:</span> LUNIBOP is a meme coin — highly speculative, can lose all value. Nothing here is financial advice. See <Link href="/disclaimer" className="underline text-white">Disclaimer</Link>.
                </p>
              </div>
            </div>
          </div>

          {/* Author + related */}
          <div className="mt-8 grid md:grid-cols-[1.2fr_0.8fr] gap-6">
            <div className="rounded-[24px] bg-white border border-[#170B35]/8 p-6">
              <h3 className="font-display font-bold text-[#170B35]">About the author</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#170B35]/60">
                <strong className="text-[#170B35]">{post.author}</strong> — Official LUNIBOP contributors sharing education and safety guides for the Solana community. No paid influencers or ghost authors.
              </p>
              <div className="mt-4 flex gap-2">
                <Link href="/about" className="px-4 py-2 rounded-full bg-[#170B35] text-white text-sm font-semibold">About LUNIBOP</Link>
                <Link href="/blog" className="px-4 py-2 rounded-full bg-white border border-[#170B35]/10 text-[#170B35] text-sm font-semibold">More articles</Link>
              </div>
            </div>

            <div className="rounded-[24px] bg-[#FFF9FF] border border-[#170B35]/8 p-6">
              <h3 className="font-display font-bold text-[#170B35]">Keep learning</h3>
              <ul className="mt-3 space-y-2.5">
                <li><Link href="/how-to-buy" className="text-sm font-semibold text-[#7139C9] hover:text-[#8B5CF6]">How to Buy Safely →</Link></li>
                <li><Link href="/tokenomics" className="text-sm font-semibold text-[#7139C9] hover:text-[#8B5CF6]">Tokenomics →</Link></li>
                <li><Link href="/faq" className="text-sm font-semibold text-[#7139C9] hover:text-[#8B5CF6]">FAQ →</Link></li>
                <li><Link href="/community" className="text-sm font-semibold text-[#7139C9] hover:text-[#8B5CF6]">Community →</Link></li>
              </ul>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-10">
              <h3 className="font-display font-extrabold text-[#170B35] text-xl">Related articles</h3>
              <div className="mt-4 grid md:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="rounded-[24px] bg-white border border-[#170B35]/8 p-5 flex gap-4 hover:shadow-md transition-shadow">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-[#FFF9FF] shrink-0">
                      <img src={r.image} alt={r.imageAlt} className="w-full h-full object-cover" width={80} height={80} loading="lazy" decoding="async" />
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-widest uppercase text-[#7139C9]">{r.category}</div>
                      <div className="text-sm font-bold text-[#170B35] leading-tight mt-1 line-clamp-2">{r.title}</div>
                      <div className="text-xs text-[#170B35]/50 mt-1">{r.readingTime}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }]} />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
