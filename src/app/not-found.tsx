import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SparkleIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0F0728] flex flex-col">
      <header className="h-[68px] flex items-center px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl overflow-hidden bg-gradient-to-br from-[#7139C9] to-[#C6A6FF] p-[1.5px]">
            <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#170B35]">
              <picture>
                <source srcSet={siteConfig.images.mascot} type="image/webp" />
                <img src={siteConfig.images.mascot} alt="" className="w-full h-full object-cover scale-110" width={40} height={40} loading="eager" decoding="async" />
              </picture>
            </div>
          </div>
          <span className="font-display font-extrabold text-white text-xl">LUNIBOP</span>
        </Link>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 py-16 relative overflow-hidden">
        {/* glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(700px,100vw)] h-[min(700px,100vw)] max-w-[700px] max-h-[700px] bg-[#7139C9]/15 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-40"
              style={{
                left: `${(i * 41) % 100}%`,
                top: `${(i * 67) % 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-[560px] w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur">
            <span className="text-[#FFD76A] flex items-center"><SparkleIcon className="w-3.5 h-3.5" /></span>
            <span className="text-xs font-bold tracking-widest uppercase text-white/70">Lost in space</span>
          </div>

          <div className="mt-8 relative mx-auto w-full max-w-[280px] h-[280px] max-h-[280px] rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl p-2 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div className="w-full h-full rounded-[24px] overflow-hidden bg-[#170B35] relative flex items-center justify-center">
              <picture>
                <source srcSet={siteConfig.images.mascot} type="image/webp" />
                <img src={siteConfig.images.mascot} alt="LUNIBOP bunny - page not found" className="w-full h-full object-cover opacity-90" width={280} height={280} loading="lazy" decoding="async" />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-[#170B35]/40 to-transparent" />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-[#FFD76A] text-[#170B35] text-xs font-extrabold whitespace-nowrap">
                404 — BUNNY NOT FOUND
              </div>
            </div>
            <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#7139C9] font-bold shadow-lg" aria-hidden="true">?</span>
          </div>

          <h1 className="mt-8 font-display font-extrabold text-[42px] sm:text-[52px] leading-none tracking-tight text-white">
            Hop! <span className="text-[#C6A6FF]">Wrong crater.</span>
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-white/60 max-w-[420px] mx-auto">
            This page drifted off into deep space. The little moon bunny couldn&apos;t find it — but home is just a hop away.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-[#170B35] font-bold hover:bg-[#FFF9FF] shadow-lg hover:scale-[1.02] transition-all"
            >
              Back to Home
              <span className="w-7 h-7 rounded-full bg-[#170B35] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 11L10 8L6 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </Link>
            <a
              href="/#token"
              className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-white/10 border border-white/15 text-white font-semibold hover:bg-white/15 transition-colors"
            >
              View Token Info
            </a>
          </div>

          <p className="mt-6 text-xs text-white/30">
            If you followed a link, double-check the URL. We never use alternative domains.
          </p>
        </div>
      </div>
    </main>
  );
}
