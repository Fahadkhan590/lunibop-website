import Link from "next/link";
import { WalletIcon, CoinIcon, SparkleIcon, CheckIcon, ShieldIcon, WarningIcon } from "./Icons";
import { BuyButton } from "./BuyButton";

const steps = [
  {
    n: "01",
    title: "Set up a Solana wallet",
    desc: "Install a self-custody wallet that supports Solana, like Phantom or Solflare. Write down your seed phrase offline and never share it with anyone.",
    accent: "from-[#7139C9] to-[#8B5CF6]",
    Icon: WalletIcon,
  },
  {
    n: "02",
    title: "Fund with SOL",
    desc: "Buy SOL on a reputable exchange and send it to your wallet address. Keep a little extra for network fees.",
    accent: "from-[#C6A6FF] to-[#FFB9DE]",
    Icon: CoinIcon,
  },
  {
    n: "03",
    title: "Visit the official Pump.fun page",
    desc: "Open the official LUNIBOP coin page from the Buy button on this site — it opens in a new tab. Bookmark it to avoid phishing copies, and never use links from DMs or ads.",
    accent: "from-[#FFD76A] to-[#FFB366]",
    Icon: SparkleIcon,
  },
  {
    n: "04",
    title: "Verify name & address",
    desc: "Check that the token name is LUNIBOP and the ticker is $LUNIBOP on the official Pump.fun coin page, opened from the Buy button on this site.",
    accent: "from-[#FFB9DE] to-[#C6A6FF]",
    Icon: CheckIcon,
  },
  {
    n: "05",
    title: "Review risks before trading",
    desc: "Meme coins are highly volatile. Only trade what you can afford to lose. There are no guaranteed returns.",
    accent: "from-[#170B35] to-[#7139C9]",
    Icon: ShieldIcon,
  },
];

export function HowToBuy() {
  return (
    <section id="how-to-buy" className="relative py-16 sm:py-24 bg-[#FFF9FF] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[min(1000px,100vw)] h-[500px] max-w-[1000px] bg-[#7139C9]/5 blur-[80px] rounded-full" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[760px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#170B35]/5 border border-[#170B35]/10">
            <span className="w-2 h-2 rounded-full bg-[#FFD76A]" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#170B35]/70">How to Buy</span>
          </div>
          <h2 className="mt-6 font-display font-extrabold text-[32px] sm:text-[44px] leading-[0.95] tracking-tight text-[#170B35]">
            Beginner-friendly. <span className="text-[#7139C9]">Safety first.</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#170B35]/60 max-w-[560px] mx-auto">
            We don&apos;t push hype. Follow these careful steps and always verify official links before you do anything.
          </p>
        </div>

        {/* Steps grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className="group relative rounded-[28px] bg-white border border-[#170B35]/8 p-6 shadow-[0_8px_24px_rgba(23,11,53,0.06)] hover:shadow-[0_16px_40px_rgba(23,11,53,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* number pill */}
              <div className="flex items-center justify-between">
                <span className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.accent} flex items-center justify-center text-white font-extrabold text-xs shadow-md`}>
                  {step.n}
                </span>
                <span className="w-8 h-8 rounded-full bg-[#FFF9FF] border border-[#170B35]/5 flex items-center justify-center text-[#170B35]/60">
                  <step.Icon className="w-4 h-4" />
                </span>
              </div>

              <h3 className="mt-6 font-display font-bold text-[#170B35] text-[15px] leading-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#170B35]/60 flex-1">
                {step.desc}
              </p>

              {/* arrow connector (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#170B35] items-center justify-center shadow-md z-10" aria-hidden="true">
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                    <path d="M6 11L10 8L6 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
              )}

              {/* subtle gradient accent at bottom */}
              <div className={`mt-6 h-1 rounded-full bg-gradient-to-r ${step.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />
            </div>
          ))}
        </div>

        {/* Safety banner */}
        <div className="mt-10 rounded-[24px] bg-[#170B35] p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#7139C9]/30 blur-[50px] rounded-full pointer-events-none" />
          <div className="relative flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFD76A] flex items-center justify-center text-[#170B35] shrink-0">
              <WarningIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-[16px]">Stay safe from scams</h4>
              <p className="text-sm leading-relaxed text-white/60 mt-1 max-w-[520px]">
                We will never DM you, never ask for wallet recovery phrases, seed phrases or private keys, and never ask you to connect your wallet on this site. No fake airdrops. When in doubt, close the tab and verify.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <BuyButton variant="dark" className="whitespace-nowrap" />
            <Link
              href="/how-to-buy"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 border border-white/15 text-white font-semibold text-sm hover:bg-white/15 transition-colors whitespace-nowrap"
            >
              Read the full guide
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-[#170B35]/40 max-w-[720px] mx-auto">
          This guide is informational only and not financial advice. Trading crypto is risky and you can lose your entire investment. Make your own decisions and consider seeking independent advice.
        </p>
      </div>
    </section>
  );
}
