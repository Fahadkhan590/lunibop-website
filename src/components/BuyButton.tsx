"use client";

import { siteConfig } from "@/config/site";

type BuyButtonProps = {
  variant?: "primary" | "light" | "dark" | "navbar";
  size?: "default" | "large";
  className?: string;
  showWarning?: boolean;
};

/**
 * Launch-accurate Buy button.
 *
 * States (driven entirely by src/config/site.ts):
 *  A. tradingLive === false → NON-clickable control (buying paused). No dead link.
 *  B. tradingLive === true AND pumpFunUrl set → live link to the official
 *     Pump.fun coin URL, opening in a new tab with an external-link indicator.
 *
 * Never renders a fake, placeholder, or unconfirmed URL as though it were real.
 */
export function BuyButton({ variant = "primary", size = "default", className = "", showWarning = false }: BuyButtonProps) {
  const tradingLive = siteConfig.launchStatus.tradingLive;
  const hasPumpUrl = Boolean(siteConfig.pumpFunUrl);
  const isLive = tradingLive && hasPumpUrl;
  const label = siteConfig.launchStatus.buyLabel; // "Not live yet"

  const sizeClasses = size === "large"
    ? "px-7 sm:px-8 py-4 sm:py-[18px] text-[15px] sm:text-[16px] min-h-[48px]"
    : "px-6 sm:px-7 py-3.5 sm:py-4 text-[14px] sm:text-[15px] min-h-[44px]";

  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all text-center ${sizeClasses} ${className}`;

  /* ── State A: buying paused ─────────────────────────────────────────── */
  if (!isLive) {
    const disabledStyles =
      variant === "navbar"
        ? "bg-white/10 border border-white/15 text-white/70 cursor-not-allowed"
        : variant === "light"
        ? "bg-[#170B35]/5 border border-[#170B35]/15 text-[#170B35]/60 cursor-not-allowed"
        : variant === "dark"
        ? "bg-white/10 border border-white/15 text-white/70 cursor-not-allowed"
        : "bg-white/15 border border-white/20 text-white/80 cursor-not-allowed backdrop-blur-md";

    return (
      <div className="flex flex-col items-center gap-2 w-full xs:w-auto">
        <span
          className={`${baseClasses} ${disabledStyles} w-full xs:w-auto`}
          role="button"
          aria-disabled="true"
          title="Buying is paused — the official Pump.fun coin page is linked as soon as buying is enabled."
        >
          <span className="w-2 h-2 rounded-full bg-[#FFD76A] animate-pulse shrink-0" aria-hidden="true" />
          <span className="truncate">Buy LUNIBOP on Pump.fun</span>
          <span
            className={`ml-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase shrink-0 ${
              variant === "light" ? "bg-[#170B35] text-white" : "bg-[#FFD76A] text-[#170B35]"
            }`}
          >
            {label}
          </span>
        </span>
        {showWarning && (
          <span className={`text-[11px] text-center max-w-[340px] ${variant === "light" ? "text-[#170B35]/50" : "text-white/50"}`}>
            Buying is paused right now. The official LUNIBOP coin page is on Pump.fun — the contract address
            is published only once the Solana mint is verified.
          </span>
        )}
      </div>
    );
  }

  /* ── State B: trading live — genuine link only ──────────────────────── */
  const activeStyles =
    variant === "navbar"
      ? "bg-gradient-to-r from-[#7139C9] to-[#8B5CF6] text-white shadow-[0_4px_20px_rgba(113,57,201,0.4)] hover:shadow-[0_8px_28px_rgba(113,57,201,0.6)] hover:scale-[1.02] active:scale-[0.98]"
      : variant === "light"
      ? "bg-[#170B35] text-white shadow-[0_8px_24px_rgba(23,11,53,0.15)] hover:bg-[#1E1040] hover:shadow-[0_12px_32px_rgba(23,11,53,0.25)] hover:scale-[1.02] active:scale-[0.98]"
      : variant === "dark"
      ? "bg-white text-[#170B35] shadow-[0_8px_24px_rgba(255,255,255,0.15)] hover:bg-[#FFF9FF] hover:shadow-[0_12px_32px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-[0.98]"
      : "bg-gradient-to-r from-[#7139C9] via-[#8B5CF6] to-[#C6A6FF] text-white shadow-[0_8px_24px_rgba(113,57,201,0.4)] hover:shadow-[0_12px_32px_rgba(113,57,201,0.5)] hover:scale-[1.02] active:scale-[0.98]";

  return (
    <a
      href={siteConfig.pumpFunUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${activeStyles} w-full xs:w-auto`}
      aria-label="Buy LUNIBOP on Pump.fun — opens the official coin page in a new tab"
    >
      <span className="w-2 h-2 rounded-full bg-[#FFD76A] animate-pulse shrink-0" aria-hidden="true" />
      <span className="truncate">Buy LUNIBOP on Pump.fun</span>
      {/* external-link indicator */}
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="shrink-0 opacity-90"
      >
        <path d="M14 4h6v6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 4l-8.5 8.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        <path d="M18.5 14.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7.5a2 2 0 0 1 2-2h3.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="sr-only">(opens Pump.fun in a new tab)</span>
    </a>
  );
}

// Compact version for inline use (e.g., inside cards)
export function BuyButtonCompact({ className = "" }: { className?: string }) {
  const isLive = siteConfig.launchStatus.tradingLive && Boolean(siteConfig.pumpFunUrl);

  if (!isLive) {
    return (
      <span
        className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-semibold cursor-not-allowed min-h-[44px] ${className}`}
        aria-disabled="true"
      >
        Buy on Pump.fun — {siteConfig.launchStatus.buyLabel}
      </span>
    );
  }
  return (
    <a
      href={siteConfig.pumpFunUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#7139C9] text-white font-bold hover:bg-[#8B5CF6] shadow-[0_8px_24px_rgba(113,57,201,0.4)] transition-all hover:scale-[1.02] text-sm min-h-[44px] ${className}`}
    >
      Buy LUNIBOP on Pump.fun
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 4h6v6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 4l-8.5 8.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/><path d="M18.5 14.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7.5a2 2 0 0 1 2-2h3.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <span className="sr-only">(opens Pump.fun in a new tab)</span>
    </a>
  );
}
