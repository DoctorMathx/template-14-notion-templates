import Link from "next/link";
import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaSection } from "@/components/ui/cta-section";
import { faqs } from "@/mock/faqs";

export const metadata: Metadata = { title: "FAQ" };

const TOPICS = [{ id: "access", label: "Access" }, { id: "notion", label: "Notion" }, { id: "updates", label: "Updates" }, { id: "refunds", label: "Refunds & licensing" }, { id: "custom", label: "Custom builds" }];

export default function FaqPage() {
  return (
    <>
      <section className="border-b border-line bg-canvas">
        <div className="container-x py-16 md:py-20 max-w-4xl">
          <div className="eyebrow">FAQ</div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter leading-[1] mt-4">Common questions.</h1>
          <p className="prose-lede mt-5 max-w-2xl">Access, Notion, updates, refunds, licensing, and custom work. Can&apos;t find your answer? <Link href="/contact" className="underline underline-offset-4">Send a note</Link>.</p>
        </div>
      </section>
      <Section pad="md">
        <div className="grid lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3"><div className="lg:sticky lg:top-24"><div className="eyebrow mb-4">Topics</div><nav className="flex flex-col gap-1">{TOPICS.map((t) => <a key={t.id} href={`#${t.id}`} className="px-3 py-2 rounded-md text-[14px] muted hover:text-[color:var(--ink)] hover:bg-paper">{t.label}</a>)}</nav></div></aside>
          <div className="lg:col-span-9 space-y-14">{TOPICS.map((t) => { const items = faqs.filter((f) => f.topic === t.id); if (!items.length) return null; return (<div key={t.id} id={t.id}><SectionHeader eyebrow={t.label} title={t.label} /><FaqAccordion items={items} /></div>); })}</div>
        </div>
      </Section>
      <Section pad="sm"><CtaSection eyebrow="Still stuck?" title="Message us." primary={{ label: "Contact", href: "/contact" }} secondary={{ label: "All templates", href: "/templates" }} tone="dark" /></Section>
    </>
  );
}
