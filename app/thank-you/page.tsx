import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { TemplateCard } from "@/components/ui/template-card";
import { flagship, featured } from "@/mock/products";
import { siteConfig } from "@/lib/site-config";
import { CheckCircle2, Copy, Video, Mail } from "lucide-react";

export const metadata: Metadata = { title: "Order complete" };

export default function ThankYouPage() {
  const t = flagship();
  const more = featured().filter((x) => x.id !== t.id).slice(0, 3);
  return (
    <>
      <section className="border-b border-line bg-canvas">
        <div className="container-x py-16 md:py-24 max-w-3xl">
          <div className="chip chip-mono chip-accent"><CheckCircle2 className="w-4 h-4" /> Order complete</div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter leading-[1] mt-6">Your template is on the way.</h1>
          <p className="prose-lede mt-5 max-w-xl">Duplicate link + Loom walk-through, delivered to your inbox in one email.</p>
        </div>
      </section>
      <Section pad="md">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: Mail, title: "Check your inbox", body: "One email with everything you need. Not there in a minute? Check spam." },
            { icon: Copy, title: "Hit Duplicate", body: "Click the duplicate link. It drops straight into your Notion workspace." },
            { icon: Video, title: "Watch the Loom", body: "10 minutes on how I actually use it. Highly recommended before you customise." },
          ].map((s) => { const Icon = s.icon; return (<div key={s.title} className="card p-6"><div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center text-[color:var(--accent-ink)]"><Icon className="w-4 h-4" /></div><div className="font-display text-lg font-semibold mt-4">{s.title}</div><p className="text-[13.5px] muted leading-relaxed mt-1">{s.body}</p></div>); })}
        </div>
      </Section>
      <Section tone="canvas" pad="md">
        <div className="mb-8"><div className="eyebrow">Also loved by our customers</div><h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mt-3">You might like these.</h2></div>
        <div className="grid md:grid-cols-3 gap-5">{more.map((r) => <TemplateCard key={r.id} t={r} />)}</div>
      </Section>
    </>
  );
}
