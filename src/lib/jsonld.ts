import { siteConfig, canonical } from "@/config/site";
import type { BlogPost } from "./blog";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.images.mascot}`,
    description: siteConfig.description,
    sameAs: [siteConfig.socials.x, siteConfig.pumpFunUrl].filter(Boolean),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} — ${siteConfig.tagline}`,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}${siteConfig.images.mascot}` },
    },
  };
}

export function webpageJsonLd(opts: { title: string; description: string; path: string; image?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: opts.title,
    description: opts.description,
    url: canonical(opts.path),
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
    primaryImageOfPage: opts.image ? { "@type": "ImageObject", contentUrl: `${siteConfig.url}${opts.image}` } : undefined,
    inLanguage: "en-US",
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: canonical(it.href),
    })),
  };
}

export function articleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}${post.image}`,
    author: { "@type": "Organization", name: post.author || siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}${siteConfig.images.mascot}` },
    },
    datePublished: post.date,
    dateModified: post.modified || post.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical(`/blog/${post.slug}`) },
    url: canonical(`/blog/${post.slug}`),
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    inLanguage: "en-US",
  };
}

export function faqJsonLd(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
