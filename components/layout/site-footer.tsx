import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { footerLinks } from "@/mock/navigation";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-paper">
      <div className="container-x py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2"><span className="w-7 h-7 rounded-md bg-ink text-white flex items-center justify-center font-bold text-[13px]">SK</span><span className="font-display font-semibold text-[16.5px]">{siteConfig.brand.name}</span></div>
            <p className="mt-4 text-[14.5px] muted max-w-sm leading-relaxed">{siteConfig.brand.tagline}</p>
            <p className="mt-6 text-[12px] muted font-mono">{siteConfig.maker.metric}</p>
          </div>
          <div><h4 className="eyebrow mb-4">Shop</h4><ul className="space-y-2.5">{footerLinks.shop.map((i) => (<li key={i.label}><Link href={i.href} className="text-[14px] muted hover:text-[color:var(--ink)]">{i.label}</Link></li>))}</ul></div>
          <div><h4 className="eyebrow mb-4">Help</h4><ul className="space-y-2.5">{footerLinks.help.map((i) => (<li key={i.label}><Link href={i.href} className="text-[14px] muted hover:text-[color:var(--ink)]">{i.label}</Link></li>))}</ul></div>
        </div>
        <div className="mt-12 pt-6 border-t border-line flex flex-col md:flex-row justify-between gap-2">
          <p className="text-[12px] muted">© {new Date().getFullYear()} {siteConfig.brand.name}. Built on FinStore.</p>
          <p className="text-[12px] muted">{siteConfig.brand.city}</p>
        </div>
      </div>
    </footer>
  );
}
