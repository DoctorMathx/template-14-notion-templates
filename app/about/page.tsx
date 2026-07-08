import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaSection } from "@/components/ui/cta-section";
import { siteConfig } from "@/lib/site-config";
import { proofStats } from "@/mock/testimonials";
import { Award, Check } from "lucide-react";

export const metadata: Metadata = { title: "About" };

const PRINCIPLES = [
  { title: "Built by an operator", body: "Every template runs the studio I built or the studios of people I've worked with. No theoretical Notion here." },
  { title: "Opinions, not options", body: "You get one clean, decided way to work — not fourteen toggles to configure." },
  { title: "Documented like software", body: "Every template ships with a Loom, a starter dataset, and a changelog. Like a proper product." },
  { title: "Free lifetime updates", body: "Notion changes fast. When it changes, we rebuild. You pay once, we keep it running." },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line bg-canvas">
        <div className="container-x py-16 md:py-24 max-w-4xl">
          <div className="eyebrow">About</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-[80px] font-semibold tracking-tighter leading-[1] mt-4">A small studio, big <span className="text-[color:var(--accent)]">systems</span> obsession.</h1>
          <p className="prose-lede mt-6 max-w-2xl">{siteConfig.maker.shortBio}</p>
        </div>
      </section>

      <Section pad="lg">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5"><div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-canvas border border-line"><Image src={siteConfig.maker.portrait} alt={siteConfig.maker.name} fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" /></div></div>
          <div className="lg:col-span-7">
            <div className="eyebrow">The maker</div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] mt-3">{siteConfig.maker.name}</h2>
            <p className="text-[15px] muted mt-2">{siteConfig.maker.role}</p>
            <div className="mt-6 space-y-4 max-w-xl text-[16px] leading-relaxed text-[color:var(--charcoal)]">{siteConfig.maker.longBio.map((p) => <p key={p}>{p}</p>)}</div>
            <div className="mt-8"><div className="eyebrow mb-3">Credentials</div><ul className="space-y-2 text-[14.5px]">{siteConfig.maker.credentials.map((c) => (<li key={c} className="flex items-center gap-3"><Award className="w-4 h-4 text-[color:var(--accent)]" />{c}</li>))}</ul></div>
          </div>
        </div>
      </Section>

      <div className="container-x"><div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-canvas border border-line"><Image src="/img/hero-scene.jpg" alt="Studio Kola HQ" fill sizes="1200px" className="object-cover" /></div></div>

      <Section tone="canvas" pad="lg">
        <SectionHeader eyebrow="What we believe" title="Four things we do differently." />
        <div className="grid md:grid-cols-2 gap-4">
          {PRINCIPLES.map((v, i) => (<div key={v.title} className="card p-6"><div className="font-mono text-xs muted">0{i + 1}</div><h3 className="font-display text-xl font-semibold mt-3">{v.title}</h3><p className="text-[14.5px] muted leading-relaxed mt-2">{v.body}</p></div>))}
        </div>
      </Section>

      <Section pad="lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
          {proofStats.map((s) => (<div key={s.label} className="border-t border-line pt-4"><div className="font-display text-3xl font-semibold tabular-nums">{s.value}</div><div className="text-[11px] font-mono uppercase tracking-[.14em] muted mt-1">{s.label}</div></div>))}
        </div>
      </Section>

      <Section pad="sm"><CtaSection eyebrow="Start" title="Grab your first template." primary={{ label: "Browse templates", href: "/templates" }} secondary={{ label: "See free ones", href: "/templates?tier=free" }} tone="dark" /></Section>
    </>
  );
}
