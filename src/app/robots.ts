import type { MetadataRoute } from "next";
import { siteConfig, canonical } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.url;
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
    ],
    sitemap: canonical("/sitemap.xml"),
    host: base,
  };
}
