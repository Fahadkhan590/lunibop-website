import { siteConfig } from "@/config/site";
import { StarIcon, EyeIcon, HeartIcon, FlowerIcon, SparkleIcon, MoonIcon, MagicWandIcon } from "./Icons";

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 bg-[#FFF9FF] overflow-hidden">
      {/* soft background decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(900px,100vw)] h-[400px] max-w-[900px] bg-gradient-to-b from-[#C6A6FF]/15 to-transparent blur-3xl" />
        <div className="absolute -right-40 top-20 w-[min(500px,80vw)] h-[min(500px,80vw)] max-w-[500px] max-h-[500px] bg-[#FFB9DE]/10 blur-[80px] rounded-full" />
        <div className="absolute -left-40 bottom-20 w-[min(500px,80vw)] h-[min(500px,80vw)] max-w-[500px] max-h-[500px] bg-[#7139C9]/5 blur-[80px] rounded-full" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-[720px] mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#170B35]/5 border border-[#170B35]/10">
            <span className="w-2 h-2 rounded-full bg-[#7139C9]" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#170B35]/70">The Lore</span>
            <span className="w-2 h-2 rounded-full bg-[#FFB9DE]" aria-hidden="true" />
          </div>
          <h2 className="mt-6 font-display font-extrabold text-[32px] sm:text-[44px] leading-[0.95] tracking-tight text-[#170B35]">
            Meet the Little <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7139C9] to-[#C6A6FF]">Bunny from the Moon</span>
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-[#170B35]/60 font-body">
            Somewhere beyond the stars, a little bunny found a golden star and decided to explore the internet.
          </p>
        </div>

        {/* Main lore card */}
        <div className="mt-12 grid lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-8 items-stretch">
          {/* Left: story */}
          <div className="relative rounded-[32px] bg-white border border-[#170B35]/8 p-6 sm:p-8 lg:p-10 shadow-[0_12px_40px_rgba(23,11,53,0.08)] overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#C6A6FF]/12 to-[#FFB9DE]/12 blur-[30px] rounded-full pointer-events-none" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFD76A]/15 border border-[#FFD76A]/20 mb-6">
                <span className="text-[#B45309] flex items-center"><StarIcon className="w-3.5 h-3.5" /></span>
                <span className="text-xs font-bold tracking-wide text-[#92400E]">Fictional mascot lore — not a financial claim</span>
              </div>

              <p className="text-[18px] sm:text-[20px] leading-relaxed font-medium text-[#170B35]">
                That&apos;s how <span className="text-[#7139C9] font-extrabold">LUNIBOP</span> began: a tiny moon creature
                with big dreams, a playful spirit and a place in the world of internet memes.
              </p>

              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#170B35]/70">
                <p>
                  LUNIBOP lives for sparkles, star-hops, and silly adventures. With fluffy white and lavender fur,
                  galaxy-filled violet eyes, and a glowing golden star on its forehead, it&apos;s not trying to be a
                  serious finance project — it&apos;s here to bring a little magic to the Solana meme universe.
                </p>
                <p>
                  The bunny is joyful, a touch mischievous, and endlessly curious. Think less whitepaper, more storybook
                  that accidentally discovered Pump.fun.
                </p>
              </div>

              {/* Trait pills */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                {[
                  { Icon: StarIcon, label: "Golden star forehead", color: "bg-[#FFD76A]/20 border-[#FFD76A]/30 text-[#92400E]" },
                  { Icon: EyeIcon, label: "Galaxy violet eyes", color: "bg-[#C6A6FF]/20 border-[#C6A6FF]/30 text-[#4C1D95]" },
                  { Icon: HeartIcon, label: "Rosy cheeks & pink ears", color: "bg-[#FFB9DE]/25 border-[#FFB9DE]/30 text-[#9D174D]" },
                  { Icon: FlowerIcon, label: "Fluffy lavender fur", color: "bg-[#7139C9]/10 border-[#7139C9]/15 text-[#4C1D95]" },
                ].map((trait) => (
                  <span
                    key={trait.label}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-semibold ${trait.color}`}
                  >
                    <trait.Icon className="w-3.5 h-3.5" />
                    {trait.label}
                  </span>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-[#FFF9FF] border border-[#170B35]/5 flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#170B35] flex items-center justify-center text-white shrink-0 mt-0.5">
                  <SparkleIcon className="w-4 h-4 text-white" />
                </span>
                <p className="text-xs leading-relaxed text-[#170B35]/60">
                  <span className="font-bold text-[#170B35]">Remember:</span> LUNIBOP is a playful internet character and meme. It does not promise profits, utility, or roadmaps. Any value is purely communal and cultural — never guaranteed.
                </p>
              </div>
            </div>
          </div>

          {/* Right: visual + personality */}
          <div className="flex flex-col gap-6">
            {/* Mascot spotlight */}
            <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#170B35] via-[#1E1040] to-[#2D1B69] p-1.5 shadow-[0_12px_40px_rgba(23,11,53,0.2)]">
              <div className="rounded-[24px] overflow-hidden bg-[#0F0728] relative">
                <picture>
                  <source srcSet={siteConfig.images.mascot} type="image/webp" />
                  <img
                    src={siteConfig.images.mascot}
                    alt="Close-up of LUNIBOP moon bunny holding golden star"
                    className="w-full aspect-[4/3] object-cover"
                    width={600}
                    height={450}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#170B35]/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-4 flex items-center justify-between">
                  <div className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FFD76A] animate-pulse" aria-hidden="true" />
                    Moon explorer
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-[#FFD76A] text-[#170B35] text-xs font-extrabold">
                    {siteConfig.ticker}
                  </div>
                </div>
              </div>
            </div>

            {/* Personality cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { Icon: MoonIcon, title: "Dreamy", desc: "Starry-eyed explorer" },
                { Icon: SparkleIcon, title: "Mischief", desc: "Playful & cheeky" },
                { Icon: MagicWandIcon, title: "Magic", desc: "Moonlit wonder" },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl bg-white border border-[#170B35]/8 p-4 text-center shadow-[0_8px_24px_rgba(23,11,53,0.06)] hover:shadow-[0_12px_32px_rgba(23,11,53,0.1)] hover:-translate-y-1 transition-all"
                >
                  <div className="w-10 h-10 mx-auto rounded-full bg-[#170B35]/5 border border-[#170B35]/10 flex items-center justify-center text-[#7139C9] mb-2">
                    <card.Icon className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-extrabold text-[#170B35]">{card.title}</div>
                  <div className="text-[11px] text-[#170B35]/50 leading-tight mt-1">{card.desc}</div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="rounded-[24px] bg-gradient-to-br from-[#7139C9] to-[#8B5CF6] p-[1.5px]">
              <div className="rounded-[22px] bg-white px-5 py-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FFF9FF] border border-[#C6A6FF]/30 flex items-center justify-center text-[#7139C9] shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 10C8 7.5 9.5 5.5 12 5.5V8.5C10.5 8.5 9.5 9.2 9.5 11H12V16.5H6.5V10H8ZM18 10C18 7.5 19.5 5.5 22 5.5V8.5C20.5 8.5 19.5 9.2 19.5 11H22V16.5H16V10H18Z" fill="currentColor"/></svg>
                </div>
                <p className="text-sm font-medium leading-relaxed text-[#170B35]/80 italic">
                  Small bun, big moon energy. LUNIBOP doesn&apos;t promise the moon — it just naps on it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
