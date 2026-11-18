import type { MetadataRoute } from "next";
import { siteConfig, canonical } from "@/config/site";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages: Array<{ path: string; changeFreq: any; priority: number; lastMod?: Date }> = [
    { path: "/", changeFreq: "weekly", priority: 1 },
    { path: "/about", changeFreq: "monthly", priority: 0.9 },
    { path: "/how-to-buy", changeFreq: "monthly", priority: 0.9 },
    { path: "/tokenomics", changeFreq: "weekly", priority: 0.9 },
    { path: "/blog", changeFreq: "weekly", priority: 0.8 },
    { path: "/faq", changeFreq: "monthly", priority: 0.7 },
    { path: "/community", changeFreq: "monthly", priority: 0.6 },
    { path: "/contact", changeFreq: "yearly", priority: 0.5 },
    { path: "/terms", changeFreq: "yearly", priority: 0.3 },
    { path: "/privacy", changeFreq: "yearly", priority: 0.3 },
    { path: "/disclaimer", changeFreq: "yearly", priority: 0.4 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: canonical(p.path),
    lastModified: p.lastMod || now,
    changeFrequency: p.changeFreq,
    priority: p.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: canonical(`/blog/${post.slug}`),
    lastModified: post.modified ? new Date(post.modified) : new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
