"use client";
import { useMemo, useState } from "react";
import { TemplateCard } from "@/components/ui/template-card";
import { templates } from "@/mock/products";
import type { TemplateCategory, TemplateTier } from "@/lib/types";
import { Search } from "lucide-react";

const CATS: { id: TemplateCategory | "all"; label: string }[] = [
  { id: "all", label: "All" }, { id: "founder", label: "Founder" }, { id: "creator", label: "Creator" }, { id: "team", label: "Team" }, { id: "personal", label: "Personal" }, { id: "finance", label: "Finance" }, { id: "content", label: "Content" },
];
const TIERS: { id: TemplateTier | "all"; label: string }[] = [
  { id: "all", label: "Any tier" }, { id: "free", label: "Free" }, { id: "pro", label: "Pro" }, { id: "team", label: "Team" },
];
const SORTS = [{ id: "featured", label: "Featured" }, { id: "new", label: "Newest" }, { id: "price-low", label: "Price · low → high" }, { id: "price-high", label: "Price · high → low" }] as const;

export function TemplatesIndex() {
  const [cat, setCat] = useState<TemplateCategory | "all">("all");
  const [tier, setTier] = useState<TemplateTier | "all">("all");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<typeof SORTS[number]["id"]>("featured");

  const list = useMemo(() => {
    let l = [...templates];
    if (cat !== "all") l = l.filter((t) => t.category === cat);
    if (tier !== "all") l = l.filter((t) => t.tier === tier);
    if (q.trim()) { const s = q.toLowerCase(); l = l.filter((t) => (t.title + t.shortDescription + t.features.join(" ")).toLowerCase().includes(s)); }
    if (sort === "price-low") l.sort((a, b) => a.price - b.price);
    else if (sort === "price-high") l.sort((a, b) => b.price - a.price);
    else if (sort === "new") l.sort((a, b) => (a.badge === "new" ? -1 : b.badge === "new" ? 1 : 0));
    else l.sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));
    return l;
  }, [cat, tier, q, sort]);

  return (
    <>
      <section className="border-b border-line bg-canvas">
        <div className="container-x py-14 md:py-20 max-w-4xl">
          <div className="eyebrow">The catalogue</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-[76px] font-semibold tracking-tighter leading-[1] mt-4">All <span className="text-[color:var(--accent)]">42</span> templates.</h1>
          <p className="prose-lede mt-6 max-w-2xl">Every Studio Kola template. Filter by category, tier, or search by keyword.</p>
        </div>
      </section>

      <section className="sticky top-[64px] z-30 bg-white/95 backdrop-blur border-b border-line">
        <div className="container-x py-3.5 flex flex-col md:flex-row md:items-center gap-3 justify-between">
          <div className="flex items-center gap-2 -mx-2 px-2 overflow-x-auto no-scrollbar">
            {CATS.map((c) => (<button key={c.id} onClick={() => setCat(c.id)} className={`chip chip-mono whitespace-nowrap ${cat === c.id ? "chip-dark" : "hover:border-line-strong"}`}>{c.label}</button>))}
          </div>
          <div className="flex items-center gap-2">
            <div className="relative"><Search className="w-3.5 h-3.5 muted absolute left-3 top-1/2 -translate-y-1/2" /><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…" className="input py-2 pl-8 text-[13px] w-48" /></div>
            <select value={tier} onChange={(e) => setTier(e.target.value as TemplateTier | "all")} className="input py-2 text-[13px] w-32">{TIERS.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}</select>
            <select value={sort} onChange={(e) => setSort(e.target.value as typeof SORTS[number]["id"])} className="input py-2 text-[13px] w-44">{SORTS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}</select>
          </div>
        </div>
      </section>

      <div className="container-x pt-6 pb-16">
        <div className="text-[13px] muted mb-6">{list.length} template{list.length === 1 ? "" : "s"}</div>
        {list.length === 0 ? (
          <div className="text-center py-24 border border-dashed border-line rounded-2xl"><p className="font-display text-2xl font-semibold">No templates match those filters.</p><p className="muted mt-2 text-[14px]">Try clearing search or picking a different category.</p></div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">{list.map((t) => <TemplateCard key={t.id} t={t} />)}</div>
        )}
      </div>
    </>
  );
}
