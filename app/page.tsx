import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Copy, Download, FileText, Layers, Repeat, ShieldCheck, Sparkles, Star, Video } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { TemplateCard } from "@/components/ui/template-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaSection } from "@/components/ui/cta-section";
import { siteConfig } from "@/lib/site-config";
import { templates, flagship, featured, bundles } from "@/mock/products";
import { testimonials, proofStats } from "@/mock/testimonials";
import { faqs } from "@/mock/faqs";
import { formatPrice } from "@/lib/utils";

export default function HomePage() {
  const fl = flagship();
  const list = featured();
  const bundle = bundles[0];
  const totalIndiv = 384;

  return (
    <>
      {/* Product-y hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 dot-grid opacity-70 pointer-events-none" />
        <div className="container-x pt-16 md:pt-24 pb-16 md:pb-20 relative">
          <div className="max-w-3xl">
            <span className="chip chip-accent chip-mono"><Sparkles className="w-3 h-3" /> {siteConfig.hero.tag}</span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-[80px] lg:text-[92px] font-semibold tracking-tighter leading-[.98] mt-6">
              Notion templates<br />that <span className="text-[color:var(--accent)]">actually ship.</span>
            </h1>
            <p className="prose-lede mt-7 max-w-2xl">
              42 templates. Built by an operator, not a designer. Everything ships with a Loom walk-through, a starter dataset, and lifetime updates.
              <span className="text-[color:var(--ink)] font-medium"> {siteConfig.maker.metric.split(" using")[0]} people already run their business in them.</span>
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/templates" className="btn btn-accent btn-lg">Browse all templates <ArrowRight className="w-4 h-4" /></Link>
              <Link href={`/templates/${fl.slug}`} className="btn btn-outline btn-lg">See Founder OS 3.0</Link>
            </div>
            <div className="mt-8 flex items-center gap-6 flex-wrap text-[13px] muted">
              {siteConfig.commerce.trust.map((t) => (<span key={t} className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[color:var(--accent)]" />{t}</span>))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured product screenshot */}
      <section className="border-b border-line bg-canvas">
        <div className="container-x pt-14 pb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="chip chip-accent chip-mono">Flagship · v3.0</span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.02] mt-4">{fl.title}</h2>
              <p className="prose-lede mt-4">{fl.shortDescription}</p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-[13.5px]">
                <Stat icon={FileText} label="Pages" value={fl.pages.toString()} />
                <Stat icon={Layers} label="Databases" value={fl.databases.toString()} />
                <Stat icon={Repeat} label="Updated" value={fl.updatedAt} />
                <Stat icon={Star} label="Rating" value="4.9 · 84 reviews" />
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={`/templates/${fl.slug}`} className="btn btn-primary">See full details <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/checkout" className="btn btn-accent">Duplicate — {formatPrice(fl.price)}</Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-canvas border border-line-strong shadow-[0_30px_60px_-30px_rgba(11,15,25,.25)]">
                <Image src={fl.cover} alt={fl.title} fill sizes="(max-width:1024px) 100vw, 55vw" className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why buy strip */}
      <Section pad="lg">
        <SectionHeader eyebrow="Why buy" title="What makes a Studio Kola template different." align="center" />
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: Copy, title: "One-click duplicate", body: "Get a duplicate link the instant you pay. No Notion account gymnastics." },
            { icon: Video, title: "Loom walk-through", body: "Every template ships with a 5–10 min video where I set it up live." },
            { icon: Repeat, title: "Free lifetime updates", body: "When I rebuild for a new Notion feature, you get it. Automatically." },
            { icon: ShieldCheck, title: "7-day refund", body: "Not for you? Send an email, get a full refund. No form to fill." },
          ].map((f) => { const Icon = f.icon; return (<div key={f.title} className="card p-6"><div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center text-[color:var(--accent-ink)]"><Icon className="w-4.5 h-4.5" /></div><h3 className="font-display font-semibold mt-4">{f.title}</h3><p className="text-[13.5px] muted mt-2 leading-relaxed">{f.body}</p></div>); })}
        </div>
      </Section>

      {/* Template grid */}
      <Section tone="canvas" pad="lg">
        <SectionHeader eyebrow="The catalogue" title="Every template we sell." lede="42 templates across founder, creator, team, personal, finance, and content. Filter on the templates page." action={<Link href="/templates" className="btn btn-outline btn-sm">All templates <ArrowRight className="w-3.5 h-3.5" /></Link>} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{list.slice(0, 6).map((t) => <TemplateCard key={t.id} t={t} />)}</div>
      </Section>

      {/* Bundle callout */}
      <Section pad="lg">
        <div className="rounded-3xl bg-ink text-white p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 grid-lines opacity-5" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="chip chip-mono bg-white/10 text-white border-white/10">Best value</span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.02] mt-5">{bundle.title}</h2>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-display text-4xl font-semibold tabular-nums text-[color:var(--accent)]">{formatPrice(bundle.price)}</span>
                <span className="text-white/50 line-through tabular-nums">{formatPrice(totalIndiv)}</span>
                <span className="chip chip-mono bg-white/10 text-white border-white/10">save {Math.round((1 - bundle.price / totalIndiv) * 100)}%</span>
              </div>
              <p className="text-white/70 mt-5 max-w-lg text-[15px] leading-relaxed">Every Pro template we make, at a discount that only makes sense in a bundle.</p>
              <div className="mt-7"><Link href="/checkout" className="btn btn-accent btn-lg">Get the bundle <ArrowRight className="w-4 h-4" /></Link></div>
            </div>
            <ul className="space-y-3 text-white/80 text-[15px]">{bundle.includes.map((f) => (<li key={f} className="flex items-start gap-3"><Check className="w-4 h-4 mt-1 text-[color:var(--accent)] shrink-0" />{f}</li>))}</ul>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <section className="border-y border-line bg-paper">
        <div className="container-x py-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {proofStats.map((s) => (<div key={s.label} className="border-r last:border-r-0 md:border-r border-line px-3"><div className="font-display text-3xl md:text-4xl font-semibold tabular-nums">{s.value}</div><div className="text-[11.5px] font-mono uppercase tracking-[.14em] muted mt-1">{s.label}</div></div>))}
        </div>
      </section>

      {/* Maker */}
      <Section pad="lg">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5"><div className="relative aspect-[4/5] max-w-md rounded-2xl overflow-hidden bg-canvas border border-line"><Image src={siteConfig.maker.portrait} alt={siteConfig.maker.name} fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" /></div></div>
          <div className="lg:col-span-7">
            <div className="eyebrow">Meet the maker</div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] mt-3">{siteConfig.maker.name}</h2>
            <p className="text-[15px] muted mt-2">{siteConfig.maker.role}</p>
            <p className="prose-lede mt-5 max-w-xl">{siteConfig.maker.shortBio}</p>
            <div className="mt-6"><Link href="/about" className="btn btn-outline">More about the studio</Link></div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section tone="canvas" pad="lg">
        <SectionHeader eyebrow="Reviews" title="What builders say." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{testimonials.slice(0, 6).map((t) => <TestimonialCard key={t.id} t={t} />)}</div>
      </Section>

      {/* FAQ */}
      <Section pad="lg">
        <div className="grid lg:grid-cols-12 gap-12"><div className="lg:col-span-5"><SectionHeader eyebrow="FAQ" title="Common questions." /><Link href="/faq" className="btn btn-outline">Full FAQ</Link></div><div className="lg:col-span-7"><FaqAccordion items={faqs.slice(0, 6)} /></div></div>
      </Section>

      <Section pad="sm"><CtaSection eyebrow="Start now" title="Duplicate your first template." description="Instant access, lifetime updates, 7-day refund. Nothing to install." primary={{ label: "Browse templates", href: "/templates" }} secondary={{ label: "See free templates", href: "/templates?tier=free" }} tone="dark" /></Section>
    </>
  );
}

function Stat({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return <div className="rounded-lg border border-line bg-white p-3 flex items-center gap-3"><div className="w-8 h-8 rounded bg-paper flex items-center justify-center"><Icon className="w-4 h-4" /></div><div><div className="text-[11px] muted font-mono uppercase tracking-[.1em]">{label}</div><div className="text-[13.5px] font-medium mt-0.5">{value}</div></div></div>;
}
