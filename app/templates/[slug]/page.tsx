import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { templates, templateBySlug } from "@/mock/products";
import { testimonials } from "@/mock/testimonials";
import { faqs } from "@/mock/faqs";
import { Section, SectionHeader } from "@/components/ui/section";
import { TemplateCard } from "@/components/ui/template-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaSection } from "@/components/ui/cta-section";
import { siteConfig } from "@/lib/site-config";
import { categoryLabel, formatPrice, tierLabel } from "@/lib/utils";
import { ArrowRight, Check, Copy, Database, FileText, Repeat, ShieldCheck, Star, Video } from "lucide-react";

export function generateStaticParams() { return templates.map((t) => ({ slug: t.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const t = templateBySlug(slug); return { title: t?.title ?? "Template", description: t?.shortDescription }; }

export default async function TemplateDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = templateBySlug(slug);
  if (!t) notFound();
  const related = templates.filter((x) => x.id !== t.id && x.category === t.category).slice(0, 3);

  return (
    <>
      <section className="border-b border-line bg-canvas">
        <div className="container-x py-12 md:py-16">
          <div className="text-[13px] muted flex items-center gap-2 font-mono"><Link href="/templates" className="hover:text-[color:var(--ink)]">Templates</Link><span>/</span><span>{categoryLabel(t.category)}</span></div>
          <div className="grid lg:grid-cols-12 gap-10 mt-6 items-start">
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-canvas border border-line-strong shadow-[0_30px_60px_-30px_rgba(11,15,25,.25)]"><Image src={t.cover} alt={t.title} fill sizes="(max-width:1024px) 100vw, 55vw" className="object-cover" priority /></div>
              {t.gallery && (<div className="mt-4 grid grid-cols-3 gap-3">{t.gallery.map((g, i) => (<div key={i} className="relative aspect-[16/10] rounded-lg overflow-hidden border border-line"><Image src={g} alt="" fill sizes="200px" className="object-cover" /></div>))}</div>)}
            </div>
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="chip chip-mono chip-accent">{categoryLabel(t.category)} · {tierLabel(t.tier)}</span>
                {t.badge === "new" && <span className="badge badge-new">New</span>}
                {t.badge === "bestseller" && <span className="badge badge-best">Bestseller</span>}
                {t.badge === "updated" && <span className="badge badge-new">Updated</span>}
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] mt-4">{t.emoji} {t.title}</h1>
              <p className="prose-lede mt-4">{t.fullDescription ?? t.shortDescription}</p>
              <div className="mt-6 grid grid-cols-2 gap-2 text-[13px]">
                <Stat icon={FileText} label="Pages" value={t.pages.toString()} />
                <Stat icon={Database} label="Databases" value={t.databases.toString()} />
                <Stat icon={Repeat} label="Updated" value={t.updatedAt} />
                <Stat icon={Star} label="Rating" value="4.9 · 84" />
              </div>
              <div className="mt-7 flex items-baseline gap-3">
                <span className="font-display text-4xl font-semibold tabular-nums">{formatPrice(t.price)}</span>
                {t.compareAtPrice && <span className="text-lg muted line-through tabular-nums">{formatPrice(t.compareAtPrice)}</span>}
                <span className="text-[13px] muted">one-time</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/checkout" className="btn btn-accent btn-lg">Duplicate — {formatPrice(t.price)} <ArrowRight className="w-4 h-4" /></Link>
                <button className="btn btn-outline btn-lg">Preview in Notion</button>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 text-[12px] muted">
                {siteConfig.commerce.trust.map((x) => (<div key={x} className="flex items-start gap-1.5"><ShieldCheck className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[color:var(--accent)]" /><span>{x}</span></div>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <Section pad="md">
        <SectionHeader eyebrow="What's inside" title="Every page & database." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {t.features.map((f) => (<div key={f} className="card p-5 flex gap-3"><Check className="w-4 h-4 mt-0.5 text-[color:var(--accent)] shrink-0" /><span className="text-[14px] leading-relaxed">{f}</span></div>))}
        </div>
      </Section>

      {/* Perfect for + walkthrough */}
      <Section tone="canvas" pad="md">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <div className="eyebrow mb-3">Perfect for</div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">You&apos;ll get the most from this if…</h2>
            <ul className="mt-6 space-y-3">{t.perfectFor.map((p) => (<li key={p} className="flex items-start gap-3"><span className="w-5 h-5 rounded bg-accent-soft flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3 h-3 text-[color:var(--accent-ink)]" /></span><span className="text-[15px] text-[color:var(--charcoal)] leading-relaxed">{p}</span></li>))}</ul>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-ink text-white p-8 relative overflow-hidden">
              <div className="absolute inset-0 grid-lines opacity-5" />
              <div className="relative">
                <span className="chip chip-mono bg-white/10 text-white border-white/10"><Video className="w-3 h-3" /> Included</span>
                <h3 className="font-display text-2xl font-semibold mt-4">A 10-minute Loom walk-through.</h3>
                <p className="text-white/70 text-[14.5px] mt-3 leading-relaxed">I&apos;ll show you the whole template, why every database is set up the way it is, and where you should customise first.</p>
                <div className="mt-6 flex flex-wrap gap-2 text-[12px] text-white/70">
                  <span className="flex items-center gap-1.5"><Copy className="w-3 h-3" /> One-click duplicate</span>
                  <span className="flex items-center gap-1.5"><Repeat className="w-3 h-3" /> Free lifetime updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Changelog */}
      {t.changelog && (
        <Section pad="md">
          <SectionHeader eyebrow="Changelog" title="Every version." />
          <div className="max-w-3xl">
            {t.changelog.map((c) => (
              <div key={c.version} className="flex gap-6 py-5 border-b border-line last:border-0">
                <div className="w-24 shrink-0"><span className="chip chip-mono">v{c.version}</span><div className="text-[11px] muted font-mono mt-1.5">{c.date}</div></div>
                <p className="text-[15px] text-[color:var(--charcoal)] leading-relaxed">{c.note}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Testimonials */}
      <Section tone="canvas" pad="md"><SectionHeader eyebrow="Reviews" title="What builders say." /><div className="grid md:grid-cols-3 gap-5">{testimonials.slice(0, 3).map((r) => <TestimonialCard key={r.id} t={r} />)}</div></Section>

      {/* FAQ */}
      <Section pad="md">
        <div className="grid lg:grid-cols-12 gap-12"><div className="lg:col-span-5"><SectionHeader eyebrow="FAQ" title="Template questions." /><Link href="/faq" className="btn btn-outline">Full FAQ</Link></div><div className="lg:col-span-7"><FaqAccordion items={faqs.slice(0, 6)} /></div></div>
      </Section>

      {related.length > 0 && (
        <Section tone="paper" pad="md">
          <SectionHeader eyebrow="Related" title="Also in this category." />
          <div className="grid md:grid-cols-3 gap-5">{related.map((r) => <TemplateCard key={r.id} t={r} />)}</div>
        </Section>
      )}

      <Section pad="sm"><CtaSection eyebrow="Ready" title="Duplicate in one click." primary={{ label: `Get it — ${formatPrice(t.price)}`, href: "/checkout" }} secondary={{ label: "Browse more", href: "/templates" }} tone="dark" /></Section>
    </>
  );
}

function Stat({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return <div className="rounded-lg border border-line bg-white p-3 flex items-center gap-3"><div className="w-8 h-8 rounded bg-paper flex items-center justify-center"><Icon className="w-4 h-4" /></div><div><div className="text-[11px] muted font-mono uppercase tracking-[.1em]">{label}</div><div className="text-[13.5px] font-medium mt-0.5">{value}</div></div></div>;
}
