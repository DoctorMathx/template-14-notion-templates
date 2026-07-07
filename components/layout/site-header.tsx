"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { navItems } from "@/mock/navigation";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 6);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`sticky top-0 z-40 bg-white/92 backdrop-blur transition-colors ${scrolled ? "border-b border-line" : "border-b border-transparent"}`}>
      <div className="container-x flex items-center justify-between h-[64px]">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-md bg-ink text-white flex items-center justify-center font-bold text-[13px]">SK</span>
          <span className="font-display font-semibold text-[16.5px] tracking-tight">{siteConfig.brand.name}</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href ?? "#"} className="px-3 py-2 text-[13.5px] font-medium muted hover:text-[color:var(--ink)] hover:bg-paper rounded-md transition-colors">{item.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden md:inline-flex items-center gap-2 h-9 px-3 rounded-md border border-line text-[13px] muted hover:border-line-strong"><Search className="w-3.5 h-3.5" />Search <span className="kbd ml-2">⌘K</span></button>
          <Link href="/templates" className="hidden sm:inline-flex btn btn-accent btn-sm">Browse templates</Link>
          <button onClick={() => setMobileOpen(true)} aria-label="Menu" className="lg:hidden p-2 -mr-2"><Menu className="w-5 h-5" /></button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[86%] max-w-[360px] bg-white flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-line"><span className="font-display font-semibold">{siteConfig.brand.name}</span><button onClick={() => setMobileOpen(false)}><X className="w-5 h-5" /></button></div>
            <nav className="flex-1 overflow-y-auto px-2 py-3">{navItems.map((item) => (<Link key={item.label} href={item.href ?? "#"} onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-[15px] font-medium rounded-md hover:bg-paper">{item.label}</Link>))}</nav>
            <div className="p-5 border-t border-line"><Link href="/templates" onClick={() => setMobileOpen(false)} className="btn btn-accent w-full">Browse templates</Link></div>
          </div>
        </div>
      )}
    </header>
  );
}
