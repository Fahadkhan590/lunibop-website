import React from "react";

// Professional SVG icon set — clean, minimal, premium

export function StarIcon({ className = "w-4 h-4", strokeWidth = 1.8 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2.8L13.8 8.7L20 9.3L15.2 13.3L16.3 19.5L12 17L7.7 19.5L8.8 13.3L4 9.3L10.2 8.7L12 2.8Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StarFilledIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.8L13.8 8.7L20 9.3L15.2 13.3L16.3 19.5L12 17L7.7 19.5L8.8 13.3L4 9.3L10.2 8.7L12 2.8Z" />
    </svg>
  );
}

export function SparkleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor" />
      <path d="M19 13L19.6 14.4L21 15L19.6 15.6L19 17L18.4 15.6L17 15L18.4 14.4L19 13Z" fill="currentColor" />
      <path d="M6 13L6.5 14.2L8 14.7L6.5 15.2L6 16.5L5.5 15.2L4 14.7L5.5 14.2L6 13Z" fill="currentColor" />
    </svg>
  );
}

export function MoonIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M21 12.8A9 9 0 1 1 11.2 3A7 7 0 0 0 21 12.8Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EyeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M2 12C2 12 6 6.5 12 6.5C18 6.5 22 12 22 12C22 12 18 17.5 12 17.5C6 17.5 2 12 2 12Z" stroke="currentColor" strokeWidth={1.8} />
      <circle cx={12} cy={12} r={3.2} stroke="currentColor" strokeWidth={1.8} />
    </svg>
  );
}

export function HeartIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 19.4L10.3 17.9C6.4 14.4 3.5 11.9 3.5 8.8C3.5 6.1 5.6 4 8.3 4C9.8 4 11.2 4.9 12 6.2C12.8 4.9 14.2 4 15.7 4C18.4 4 20.5 6.1 20.5 8.8C20.5 11.9 17.6 14.4 13.7 17.9L12 19.4Z"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FlowerIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx={12} cy={12} r={2.5} stroke="currentColor" strokeWidth={1.6} />
      <path d="M12 4.5C12 4.5 13.8 6.8 13.8 9.5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      <path d="M12 19.5C12 19.5 10.2 17.2 10.2 14.5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      <path d="M4.5 12C4.5 12 6.8 10.2 9.5 10.2" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      <path d="M19.5 12C19.5 12 17.2 13.8 14.5 13.8" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      <path d="M6.2 6.2C6.2 6.2 8.1 7.1 9.6 8.7" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      <path d="M17.8 17.8C17.8 17.8 15.9 16.9 14.4 15.3" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      <path d="M17.8 6.2C17.8 6.2 16.9 8.1 15.3 9.6" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      <path d="M6.2 17.8C6.2 17.8 7.1 15.9 8.7 14.4" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  );
}

export function DiamondIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3L5 12L12 21L19 12L12 3Z" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round" />
      <path d="M5 12H19" stroke="currentColor" strokeWidth={1.2} />
    </svg>
  );
}

export function WalletIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H18A2.5 2.5 0 0 1 20.5 7.5V16.5A2.5 2.5 0 0 1 18 19H5.5A2.5 2.5 0 0 1 3 16.5V7.5Z" stroke="currentColor" strokeWidth={1.7} />
      <path d="M15.5 12H18.5" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" />
      <circle cx={16.5} cy={12} r={1.2} fill="currentColor" />
    </svg>
  );
}

export function CoinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx={12} cy={12} r={8} stroke="currentColor" strokeWidth={1.7} />
      <path d="M12 7.5V16.5" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" />
      <path d="M9 10C9 10 10.2 8.5 12 8.5C13.8 8.5 15 9.5 15 10C15 10.5 13.8 11.5 12 11.5M9 14C9 14 10.2 15.5 12 15.5C13.8 15.5 15 14.5 15 14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LinkIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9 12H15" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" />
      <path d="M15 12L12 9" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 12L12 15" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={12} cy={12} r={8.5} stroke="currentColor" strokeWidth={1.3} opacity={0.3} />
    </svg>
  );
}

export function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 12L10 16L18 8" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={12} cy={12} r={8.5} stroke="currentColor" strokeWidth={1.2} opacity={0.25} />
    </svg>
  );
}

export function ShieldIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3L5 7.5V12C5 15.9 7.7 19.2 12 21C16.3 19.2 19 15.9 19 12V7.5L12 3Z" stroke="currentColor" strokeWidth={1.7} strokeLinejoin="round" />
      <path d="M9 12L11.2 14.2L15 9.5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WarningIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 4L3.5 19H20.5L12 4Z" stroke="currentColor" strokeWidth={1.7} strokeLinejoin="round" />
      <path d="M12 10V13.5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
      <circle cx={12} cy={16.5} r={1} fill="currentColor" />
    </svg>
  );
}

export function UsersIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M8 10.5C9.66 10.5 11 9.16 11 7.5C11 5.84 9.66 4.5 8 4.5C6.34 4.5 5 5.84 5 7.5C5 9.16 6.34 10.5 8 10.5Z" stroke="currentColor" strokeWidth={1.6} />
      <path d="M16 11C17.38 11 18.5 9.88 18.5 8.5C18.5 7.12 17.38 6 16 6" stroke="currentColor" strokeWidth={1.4} />
      <path d="M3 18.5C3 15.5 5.2 13.5 8 13.5C10.8 13.5 13 15.5 13 18.5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      <path d="M14.5 18.5C16.1 18.5 18.5 17.1 18.5 14.8" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
    </svg>
  );
}

export function MagicWandIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M14.5 4.5L15.8 8.2L19.5 9.5L15.8 10.8L14.5 14.5L13.2 10.8L9.5 9.5L13.2 8.2L14.5 4.5Z" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round" />
      <path d="M7 12.5L7.7 14.2L9.5 15L7.7 15.8L7 17.5L6.3 15.8L4.5 15L6.3 14.2L7 12.5Z" stroke="currentColor" strokeWidth={1.3} strokeLinejoin="round" />
      <path d="M5 5L6 7L8 8L6 9L5 11L4 9L2 8L4 7L5 5Z" stroke="currentColor" strokeWidth={1.2} strokeLinejoin="round" />
    </svg>
  );
}
