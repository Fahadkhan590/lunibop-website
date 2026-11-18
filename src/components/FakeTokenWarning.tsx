import { siteConfig } from "@/config/site";

type FakeTokenWarningProps = {
  variant?: "amber" | "dark";
  className?: string;
};

/**
 * Clear fake-token warning required for launch integration.
 * Exact copy: "Beware of fake tokens. Always verify the contract address
 * through our official Pump.fun page."
 * Links to the official Pump.fun coin page only when the genuine URL is set in
 * siteConfig; otherwise it renders as plain text (no fake/placeholder link).
 * States that the official coin page is live and links to it once configured.
 */
export function FakeTokenWarning({ variant = "amber", className = "" }: FakeTokenWarningProps) {
  const hasPumpUrl = Boolean(siteConfig.pumpFunUrl);
  const isAmber = variant === "amber";

  return (
    <div
      role="alert"
      className={`rounded-2xl p-4 flex gap-3 ${
        isAmber
          ? "bg-amber-50 border border-amber-200"
          : "bg-red-500/10 border border-red-400/20"
      } ${className}`}
    >
      <span
        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
          isAmber ? "bg-amber-500 text-white" : "bg-red-500 text-white"
        }`}
        aria-hidden="true"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 9V13M12 17H12.01M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.8"/></svg>
      </span>
      <div className="min-w-0">
        <p className={`text-xs font-bold ${isAmber ? "text-amber-900" : "text-red-200"}`}>
          Beware of fake tokens. Always verify the contract address through our official{" "}
          {hasPumpUrl ? (
            <a
              href={siteConfig.pumpFunUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`underline underline-offset-2 font-bold ${isAmber ? "text-amber-900 hover:text-amber-700" : "text-red-100 hover:text-white"}`}
            >
              Pump.fun page
            </a>
          ) : (
            <span className="font-bold">Pump.fun coin page</span>
          )}
          .
        </p>
        <p className={`text-xs leading-relaxed mt-1 ${isAmber ? "text-amber-800/70" : "text-red-200/70"}`}>
          The official LUNIBOP coin page is live on Pump.fun — always open it from the button on this site. Only trust a
          contract address published here. Never share your wallet recovery phrase, seed phrase, or private keys with
          anyone — no team member or support account will ever ask for them, and we never ask you to connect a wallet on
          this site.
        </p>
      </div>
    </div>
  );
}
