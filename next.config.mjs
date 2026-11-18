/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Modern image optimization — serves WebP/AVIF automatically
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Clean headers for performance & security (without breaking SEO)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [{ key: "Content-Type", value: "application/xml" }],
      },
      // Long-lived caching for static images (fast repeat visits, no re-download)
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/favicon.ico",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800" }],
      },
    ];
  },
  // Redirects for legacy hash-only navigation (keeps SEO juice)
  async redirects() {
    return [
      // If someone bookmarked old single-page anchors, send them to proper pages
      { source: "/token", destination: "/tokenomics", permanent: true },
      { source: "/#about", destination: "/about", permanent: false },
      { source: "/#how-to-buy", destination: "/how-to-buy", permanent: false },
      { source: "/#token", destination: "/tokenomics", permanent: false },
      { source: "/#community", destination: "/community", permanent: false },
    ];
  },
};

export default nextConfig;
