import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  // Only the weights actually used in the design (smaller font payload)
  weight: ["600", "700", "800"],
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "LUNIBOP",
    "LUNIBOP coin",
    "LUNIBOP Solana",
    "LUNIBOP official website",
    "LUNIBOP token",
    "Solana meme coin",
    "Pump.fun",
    "Solana meme coin education",
    "how to buy Solana token",
  ],
  authors: [{ name: "LUNIBOP", url: siteConfig.url }],
  creator: "LUNIBOP",
  publisher: "LUNIBOP",
  formatDetection: { telephone: false, address: false, email: false },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.images.banner}`,
        width: 1600,
        height: 534,
        alt: `${siteConfig.name} banner — cute moon bunny on Solana`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}${siteConfig.images.banner}`],
    creator: siteConfig.socials.x ? "@lunibop" : undefined,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/mascot.webp", type: "image/webp" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/mascot.webp",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: siteConfig.verification.google
    ? { google: siteConfig.verification.google }
    : undefined,
  category: "Technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      {/* Fonts are self-hosted by next/font — no external font request needed */}
      <body className="font-body antialiased min-h-screen flex flex-col">
        {/* Global structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()).replace(/</g, "\\u003c") }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
