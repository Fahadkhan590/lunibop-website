import type { Metadata } from "next";
import { siteConfig, canonical } from "@/config/site";

type SEOProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
}: SEOProps): Metadata {
  const url = canonical(path);
  const metaTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.tagline}`;
  const metaDesc = description || siteConfig.description;
  const rawOgImage = image || siteConfig.images.og;
  // Make OG image absolute — prevents localhost leakage in dev/preview
  const ogImage = rawOgImage.startsWith("/") ? `${siteConfig.url}${rawOgImage}` : rawOgImage;

  return {
    title: title ? title : { default: metaTitle, template: `%s | ${siteConfig.name}` },
    description: metaDesc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      url,
      title: title ? `${title} | ${siteConfig.name}` : metaTitle,
      description: metaDesc,
      siteName: siteConfig.name,
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1600,
          height: 534,
          alt: `${siteConfig.name} — ${siteConfig.tagline}`,
        },
      ],
      ...(type === "article" && publishedTime ? { publishedTime, modifiedTime } as any : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : metaTitle,
      description: metaDesc,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    metadataBase: new URL(siteConfig.url),
  };
}
