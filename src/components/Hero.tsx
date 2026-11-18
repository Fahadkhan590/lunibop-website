import { siteConfig } from "@/config/site";
import { StarIcon, DiamondIcon, SparkleIcon } from "./Icons";
import { BuyButton } from "./BuyButton";
import { FakeTokenWarning } from "./FakeTokenWarning";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-x-hidden overflow-y-visible pt-[68px] cosmic-bg"
    >
      {/* Decorative starfield - constrained to prevent overflow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* gradient orbs - responsive, never cause scroll */}
        <div className="absolute -top-20 -left-20 w-[min(600px,90vw)] h-[min(600px,90vw)] rounded-full bg-[#7139C9]/20 blur-[120px] max-w-[600px] max-h-[600px]" />
        <div className="absolute top-[20%] -right-40 w-[min(700px,90vw)] h-[min(700px,90vw)] rounded-full bg-[#FFB9DE]/10 blur-[130px] max-w-[700px] max-h-[700px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(900px,100vw)] h-[400px] bg-gradient-to-t from-[#7139C9]/15 to-transparent blur-3xl max-w-[900px]" />
        
        {/* twinkling stars - static CSS */}
        <div className="absolute inset-0">
          {Array.from({ length: 28 }).map((_, i) => (
            <span
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 80}%`,
                animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${(i * 0.4) % 4}s`,
                boxShadow: i % 5 === 0 ? "0 0 6px white, 0 0 12px rgba(255,255,255,0.6)" : "none",
                width: i % 4 === 0 ? "2px" : "1.5px",
                height: i % 4 === 0 ? "2px" : "1.5px",
              }}
            />
          ))}
        </div>

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-center py-8 sm:py-14 lg:py-20">
          {/* Left content */}
          <div className="relative z-10 text-center lg:text-left min-w-0">
            {/* Tagline pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6 shadow-lg max-w-full">
              <span className="w-7 h-7 rounded-full bg-[#FFD76A] flex items-center justify-center text-[#170B35] shrink-0">
                <StarIcon className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 whitespace-nowrap">Small Bun. Big Moon Energy.</span>
              <span className="hidden sm:inline-flex w-6 h-6 rounded-full bg-white/15 items-center justify-center ml-1 shrink-0">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 11L10 8L6 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </div>

            <h1 className="font-display font-extrabold leading-[0.95] tracking-tight">
              <span className="block text-white text-[32px] xs:text-[36px] sm:text-[52px] lg:text-[62px]">A Little Bunny.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C6A6FF] via-[#FFB9DE] to-[#FFD76A] text-[32px] xs:text-[36px] sm:text-[52px] lg:text-[62px] pb-2">
                A Big Cosmic
              </span>
              <span className="block text-white text-[32px] xs:text-[36px] sm:text-[52px] lg:text-[62px] flex items-center justify-center lg:justify-start gap-3 flex-wrap">
                Adventure.
                <span className="hidden sm:inline-block w-3 h-3 rounded-full bg-[#FFD76A] shadow-[0_0_12px_#FFD76A] animate-pulse shrink-0" aria-hidden="true" />
              </span>
            </h1>

            <p className="mt-6 text-[15px] sm:text-[18px] leading-relaxed text-white/70 max-w-[560px] mx-auto lg:mx-0 font-body">
              Meet <span className="text-white font-semibold">LUNIBOP</span>, the little moon bunny bringing a little
              magic to the Solana meme universe. Fluffy, mischievous, and ready for liftoff.
            </p>

            {/* Prominent Buy button — state driven by siteConfig.launchStatus.
                Links to the official Pump.fun coin page in a new tab, with an
                external-link indicator. If buying is ever paused via
                siteConfig.launchStatus.tradingLive = false, it falls back to a
                non-clickable badge instead of a dead link.
                Full-width on mobile, inline on desktop, 44px+ touch target. */}
            <div className="mt-8 flex flex-col gap-3 justify-center lg:justify-start w-full xs:w-auto">
              <BuyButton size="large" showWarning />
              <div className="flex flex-col xs:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white text-[#170B35] font-bold text-[14px] sm:text-[15px] shadow-[0_8px_24px_rgba(255,255,255,0.2)] hover:bg-[#FFF9FF] hover:shadow-[0_12px_32px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all min-h-[44px] w-full xs:w-auto"
                >
                  Explore LUNIBOP
                  <span className="w-7 h-7 rounded-full bg-[#170B35] flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M6 11L10 8L6 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>

                <a
                  href={siteConfig.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow LUNIBOP on X — opens x.com/LUNIBOP in a new tab"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white/10 border border-white/15 text-white font-semibold text-[14px] sm:text-[15px] backdrop-blur-md hover:bg-white/15 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all min-h-[44px] w-full xs:w-auto"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-90 shrink-0" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Follow LUNIBOP on X
                </a>
              </div>
              <div className="max-w-[520px] mx-auto lg:mx-0 w-full">
                <FakeTokenWarning variant="dark" />
              </div>
            </div>

            {/* Trust row - wraps cleanly on mobile */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#7139C9]/20 border border-[#C6A6FF]/20 backdrop-blur">
                <span className="w-2 h-2 rounded-full bg-[#C6A6FF] animate-pulse shrink-0" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-white/80 uppercase whitespace-nowrap">Solana Network</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#FFD76A]/15 border border-[#FFD76A]/20">
                <span className="text-[#FFD76A] flex items-center shrink-0" aria-hidden="true"><DiamondIcon className="w-3 h-3" /></span>
                <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-white/80 uppercase whitespace-nowrap">Pump.fun • Official page</span>
              </div>
              <div className="inline-flex items-center gap-2 text-xs text-white/50 max-w-full">
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.5"/>
                    <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="whitespace-nowrap">Our Moon Bunny Story</span>
              </div>
            </div>
          </div>

          {/* Right visual — mascot orbit - fully responsive */}
          <div className="relative lg:h-[560px] flex items-center justify-center py-6 lg:py-0 min-w-0 w-full">
            {/* Glow behind - responsive, contained */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
              <div className="w-[min(380px,80vw)] h-[min(380px,80vw)] sm:w-[480px] sm:h-[480px] rounded-full bg-gradient-to-br from-[#7139C9]/30 to-[#FFB9DE]/20 blur-[60px]" />
              <div className="absolute w-[min(300px,60vw)] h-[min(300px,60vw)] rounded-full bg-[#C6A6FF]/12 blur-[40px]" />
            </div>

            {/* Orbital rings - scale with viewport, hide on tiny screens if needed */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              {/* outer orbit - responsive */}
              <div className="absolute w-[min(360px,85vw)] h-[min(360px,85vw)] sm:w-[460px] sm:h-[460px] rounded-full border border-white/10"
                   style={{ transform: "rotate(-12deg)" }} />
              <div className="absolute w-[min(360px,85vw)] h-[min(360px,85vw)] sm:w-[460px] sm:h-[460px] rounded-full border border-dashed border-white/10"
                   style={{ transform: "rotate(-12deg)", borderSpacing: "4px" }} />
              {/* inner orbit */}
              <div className="absolute w-[min(300px,70vw)] h-[min(300px,70vw)] sm:w-[380px] sm:h-[380px] rounded-full border border-[#C6A6FF]/20" />
              
              {/* orbiting stars - hidden on very small to avoid clutter */}
              <div className="absolute w-[min(360px,85vw)] h-[min(360px,85vw)] sm:w-[460px] sm:h-[460px] animate-[orbit_14s_linear_infinite] hidden xs:block">
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#FFD76A] shadow-[0_0_10px_#FFD76A]" />
              </div>
              <div className="absolute w-[min(300px,70vw)] h-[min(300px,70vw)] sm:w-[380px] sm:h-[380px] animate-[orbit_10s_linear_infinite_reverse] hidden xs:block">
                <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
              </div>
            </div>

            {/* Mascot card - fluid, never overflows */}
            <div className="relative z-10 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] mx-auto">
              <div className="relative rounded-[24px] sm:rounded-[36px] bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/15 p-2 sm:p-3 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(113,57,201,0.3)] overflow-hidden">
                {/* inner glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#C6A6FF]/20 blur-[40px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#FFB9DE]/15 blur-[40px] rounded-full pointer-events-none" />

                <div className="relative rounded-[20px] sm:rounded-[28px] overflow-hidden bg-gradient-to-b from-[#1E1040] to-[#170B35] aspect-[4/3.2] flex items-center justify-center">
                  <picture>
                    <source
                      srcSet={`${siteConfig.images.bannerSmall} 900w, ${siteConfig.images.banner} 1600w`}
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 380px, 420px"
                      type="image/webp"
                    />
                    <img
                      src={siteConfig.images.bannerSmall}
                      alt="LUNIBOP bunny on the moon with big sparkling galaxy eyes"
                      className="w-full h-full object-cover"
                      width={900}
                      height={300}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#170B35]/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating badge - responsive positioning */}
                <div className="absolute -top-2 -right-2 sm:top-2 sm:right-2 bg-[#FFD76A] text-[#170B35] px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-extrabold tracking-wide shadow-lg flex items-center gap-1 sm:gap-1.5 rotate-3 max-w-[45%] sm:max-w-none">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#170B35] animate-pulse shrink-0" aria-hidden="true" />
                  <span className="truncate">MOON READY</span>
                </div>
              </div>

              {/* Stats cards floating - repositioned for mobile to avoid overflow */}
              <div className="absolute -left-2 xs:-left-4 sm:-left-6 bottom-4 sm:bottom-8 glass-strong rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-card flex items-center gap-2 sm:gap-3 animate-float max-w-[45%] sm:max-w-none">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#7139C9] to-[#C6A6FF] flex items-center justify-center text-white shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="sm:w-4 sm:h-4">
                    <circle cx="12" cy="12" r="7" stroke="white" strokeWidth="1.7" />
                    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.4" />
                    <path d="M12 3V5M12 19V21M3 12H5M19 12H21" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-widest text-white/60 uppercase truncate">Network</div>
                  <div className="text-xs sm:text-sm font-bold text-white -mt-0.5 truncate">Solana • Fast & Fun</div>
                </div>
              </div>

              <div className="absolute -right-2 xs:-right-2 sm:-right-4 top-12 sm:top-20 glass-strong rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-card flex items-center gap-2 sm:gap-3 animate-float-delayed max-w-[45%] sm:max-w-none">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FFD76A] flex items-center justify-center text-[#170B35] shrink-0">
                  <StarFilledIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-widest text-white/60 uppercase truncate">Vibe</div>
                  <div className="text-xs sm:text-sm font-bold text-white -mt-0.5 truncate">100% Meme Magic</div>
                </div>
              </div>
            </div>

            {/* small decorative stars around mascot - hide on mobile for cleanliness */}
            <span className="absolute top-10 right-4 sm:right-12 text-[#FFD76A] animate-twinkle hidden sm:flex items-center justify-center" aria-hidden="true"><SparkleIcon className="w-4 h-4" /></span>
            <span className="absolute bottom-20 left-2 sm:left-8 text-white/60 animate-twinkle hidden sm:flex items-center justify-center" style={{ animationDelay: "1s" }} aria-hidden="true"><StarIcon className="w-3 h-3" /></span>
            <span className="absolute top-1/3 left-2 sm:left-6 text-[#C6A6FF] animate-twinkle hidden lg:flex items-center justify-center" aria-hidden="true"><StarIcon className="w-4 h-4" /></span>
          </div>
        </div>

        {/* Bottom ticker / social proof - stacks on mobile */}
        <div className="pb-6 sm:pb-8">
          <div className="glass rounded-[20px] sm:rounded-[24px] px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
                <span className="text-[#7139C9] font-extrabold text-sm">$</span>
              </div>
              <div className="text-left min-w-0">
                <div className="text-sm font-bold text-white truncate">{siteConfig.ticker} • {siteConfig.name}</div>
                <div className="text-xs text-white/50 truncate">Playful lore • No financial promises • Verify links</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/60 w-full sm:w-auto justify-center sm:justify-end">
              <span className="hidden sm:inline whitespace-nowrap">Crafted for Pump.fun launch</span>
              <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/80 font-semibold whitespace-nowrap">
                {siteConfig.blockchain}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarFilledIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.8L13.8 8.7L20 9.3L15.2 13.3L16.3 19.5L12 17L7.7 19.5L8.8 13.3L4 9.3L10.2 8.7L12 2.8Z" />
    </svg>
  );
}
