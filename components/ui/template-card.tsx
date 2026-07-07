import Image from "next/image";
import Link from "next/link";
import { Database, FileText, Star } from "lucide-react";
import type { Template } from "@/lib/types";
import { categoryLabel, formatPrice } from "@/lib/utils";

export function TemplateCard({ t }: { t: Template }) {
  return (
    <Link href={`/templates/${t.slug}`} className="card group flex flex-col overflow-hidden">
      <div className="relative aspect-[16/10] bg-canvas overflow-hidden border-b border-line">
        <Image src={t.cover} alt={t.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
          {t.tier === "free" ? <span className="badge badge-free">Free</span> : t.tier === "team" ? <span className="badge badge-pro">Team</span> : <span className="badge badge-pro">Pro</span>}
          {t.badge === "new" && <span className="badge badge-new">New</span>}
          {t.badge === "bestseller" && <span className="badge badge-best">Bestseller</span>}
          {t.badge === "updated" && <span className="badge badge-new">Updated</span>}
        </div>
        <div className="absolute bottom-2.5 left-2.5 text-3xl leading-none">{t.emoji}</div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-3 text-[11.5px] font-mono uppercase tracking-[.08em] muted">
          <span>{categoryLabel(t.category)}</span>
          <span className="w-1 h-1 rounded-full bg-[color:var(--line-strong)]" />
          <span>{t.updatedAt}</span>
        </div>
        <h3 className="font-display text-[17px] font-semibold leading-snug mt-2 line-clamp-1">{t.title}</h3>
        <p className="text-[13.5px] muted mt-1.5 line-clamp-2 leading-relaxed">{t.shortDescription}</p>
        <div className="mt-4 flex items-center gap-4 text-[12px] muted">
          <span className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5" />{t.pages} pages</span>
          <span className="flex items-center gap-1.5"><Database className="w-3.5 h-3.5" />{t.databases} DBs</span>
        </div>
        <div className="mt-auto pt-4 flex items-end justify-between border-t border-line">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-[16px] font-semibold tabular-nums">{formatPrice(t.price)}</span>
              {t.compareAtPrice && <span className="text-[12px] muted line-through tabular-nums">{formatPrice(t.compareAtPrice)}</span>}
            </div>
          </div>
          <div className="flex items-center gap-0.5 text-[12px] muted"><Star className="w-3 h-3 fill-current text-[color:var(--warn)]" /><span>4.9</span></div>
        </div>
      </div>
    </Link>
  );
}
