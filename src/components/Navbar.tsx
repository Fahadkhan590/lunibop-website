"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { BuyButton } from "./BuyButton";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-[#0F0728]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between" aria-label="Primary">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="LUNIBOP home">
          <div className="relative w-10 h-10 rounded-2xl overflow-hidden bg-gradient-to-br from-[#7139C9] to-[#C6A6FF] p-[1.5px] shadow-glow">
            <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#170B35] flex items-center justify-center">
              <picture>
                <source srcSet={siteConfig.images.mascot} type="image/webp" />
                <img src={siteConfig.images.mascot} alt="LUNIBOP logo" className="w-full h-full object-cover scale-110" width={40} height={40} loading="eager" decoding="async" />
              </picture>
            </div>
          </div>
          <span className="font-display font-extrabold text-[22px] tracking-tight text-white group-hover:text-[#C6A6FF] transition-colors">
            LUNIBOP
          </span>
          <span className="hidden sm:inline-flex items-center ml-1 px-2 py-0.5 rounded-full bg-[#FFD76A] text-[#170B35] text-[10px] font-bold tracking-widest uppercase">
            $LUNIBOP
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isActive(item.href) ? "bg-white text-[#170B35] font-bold shadow" : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA — Buy LUNIBOP on Pump.fun (activates when pumpFunUrl set in siteConfig) */}
        <div className="hidden lg:flex items-center gap-3">
          <BuyButton variant="navbar" />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden relative w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/15 transition-colors"
        >
          <span className="sr-only">Menu</span>
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`block h-0.5 bg-white rounded-full transition-all ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute inset-x-0 top-[68px] bg-[#0F0728]/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
          open ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-2 max-h-[70vh] overflow-y-auto">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-3.5 rounded-2xl text-[15px] font-medium border flex items-center justify-between group transition-all ${
                isActive(item.href) ? "bg-white text-[#170B35] border-white font-bold" : "text-white/80 hover:text-white hover:bg-white/10 border-transparent hover:border-white/10"
              }`}
            >
              {item.label}
              <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isActive(item.href) ? "bg-[#170B35] text-white" : "bg-white/5 group-hover:bg-white/10"}`}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 11L10 8L6 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-2 pt-3">
            {siteConfig.legal.map((l) => (
              <Link key={l.href} href={l.href} className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/60 text-center hover:text-white hover:bg-white/10 transition-colors">
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/60 text-center hover:text-white hover:bg-white/10 transition-colors">Contact</Link>
          </div>
          <div className="pt-4 mt-2 border-t border-white/10">
            <BuyButton variant="navbar" size="large" className="w-full" />
            <p className="text-center text-xs text-white/40 mt-3">Beware of fake tokens. Always verify the contract address through our official Pump.fun page.</p>
          </div>
        </div>
      </div>
    </header>
  );
}
