"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { flagship } from "@/mock/products";
import { siteConfig } from "@/lib/site-config";
import { formatPrice } from "@/lib/utils";
import { ArrowLeft, Copy, ShieldCheck, Tag, Video } from "lucide-react";

export function CheckoutClient() {
  const router = useRouter();
  const t = flagship();
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const subtotal = t.price;
  const discount = applied === "STUDIO10" ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal - discount;

  const submit = (e: React.FormEvent) => { e.preventDefault(); setSubmitting(true); setTimeout(() => router.push("/thank-you"), 700); };

  return (
    <div className="bg-canvas min-h-screen">
      <div className="container-x py-10 md:py-14">
        <Link href="/templates" className="inline-flex items-center gap-2 text-[13.5px] muted hover:text-[color:var(--ink)] font-mono"><ArrowLeft className="w-4 h-4" /> Back</Link>
        <div className="mt-8 grid lg:grid-cols-12 gap-8">
          <form onSubmit={submit} className="lg:col-span-7 space-y-4">
            <div className="p-6 md:p-8 rounded-2xl border border-line bg-white">
              <h1 className="font-display text-3xl font-semibold tracking-tight">Checkout</h1>
              <p className="text-[13.5px] muted mt-1">Duplicate link + Loom walk-through in your inbox instantly.</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field id="name" label="Full name" required />
                <Field id="email" label="Email" type="email" required />
              </div>
            </div>
            <div className="p-6 md:p-8 rounded-2xl border border-line bg-white">
              <h2 className="font-display text-xl font-semibold">Payment</h2>
              <div className="mt-5 grid sm:grid-cols-3 gap-2">{["Card", "PayPal", "Bank transfer"].map((m, i) => (<label key={m} className={`flex items-center gap-2 px-4 py-3 rounded-lg border cursor-pointer ${i === 0 ? "border-ink bg-paper" : "border-line hover:border-line-strong"}`}><input type="radio" name="method" defaultChecked={i === 0} className="accent-black" /><span className="text-[14px] font-medium">{m}</span></label>))}</div>
              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                <Field id="card" label="Card number" placeholder="4242 4242 4242 4242" />
                <div className="grid grid-cols-2 gap-4"><Field id="exp" label="Expiry" placeholder="MM / YY" /><Field id="cvc" label="CVC" placeholder="123" /></div>
              </div>
            </div>
            <div className="p-6 md:p-8 rounded-2xl border border-line bg-white">
              <label htmlFor="agree" className="text-[13.5px] muted"><input id="agree" type="checkbox" required defaultChecked className="accent-black mr-2" />I agree to the <Link href="/faq" className="underline underline-offset-4 text-[color:var(--ink)]">license</Link> and <Link href="/faq" className="underline underline-offset-4 text-[color:var(--ink)]">refund policy</Link>.</label>
              <button disabled={submitting} className="btn btn-accent btn-lg w-full mt-6">{submitting ? "Processing…" : `Complete — ${formatPrice(total)}`}</button>
            </div>
          </form>
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 space-y-4">
              <div className="p-6 md:p-8 rounded-2xl border border-line bg-white">
                <h2 className="font-display text-lg font-semibold">Order</h2>
                <div className="mt-5 flex items-start gap-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-canvas border border-line shrink-0"><Image src={t.cover} alt="" fill sizes="80px" className="object-cover" /></div>
                  <div className="min-w-0 flex-1"><div className="text-[11px] font-mono uppercase tracking-[.12em] muted">{t.updatedAt}</div><div className="text-[14.5px] font-medium leading-snug mt-1">{t.emoji} {t.title}</div></div>
                  <div className="text-[14px] font-semibold tabular-nums shrink-0">{formatPrice(t.price)}</div>
                </div>
                <div className="mt-5 pt-5 border-t border-line space-y-2 text-[14px]">
                  <Row label="Subtotal" value={formatPrice(subtotal)} />
                  {discount > 0 && <Row label="Coupon (STUDIO10)" value={`− ${formatPrice(discount)}`} accent />}
                  <Row label="Total" value={formatPrice(total)} bold />
                </div>
                <div className="mt-5 flex gap-2"><div className="relative flex-1"><Tag className="w-3.5 h-3.5 muted absolute left-3 top-1/2 -translate-y-1/2" /><input value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Coupon" className="input py-2 pl-8 text-[13px]" /></div><button type="button" onClick={() => setApplied(coupon.trim().toUpperCase() || null)} className="btn btn-outline btn-sm">Apply</button></div>
                {applied && applied !== "STUDIO10" && <p className="mt-2 text-[12.5px] muted">Try <span className="font-medium text-[color:var(--ink)]">STUDIO10</span> for 10% off.</p>}
              </div>
              <div className="p-5 rounded-2xl bg-white border border-line flex items-start gap-3"><Copy className="w-4 h-4 mt-1 text-[color:var(--accent)]" /><div><div className="text-[14px] font-medium">One-click duplicate</div><div className="text-[12.5px] muted mt-0.5">Delivered to your inbox instantly.</div></div></div>
              <div className="p-5 rounded-2xl bg-white border border-line flex items-start gap-3"><Video className="w-4 h-4 mt-1 text-[color:var(--accent)]" /><div><div className="text-[14px] font-medium">10-min Loom walk-through</div><div className="text-[12.5px] muted mt-0.5">Learn every corner of the template.</div></div></div>
              <div className="p-5 rounded-2xl bg-white border border-line flex items-start gap-3"><ShieldCheck className="w-4 h-4 mt-1 text-[color:var(--accent)]" /><div><div className="text-[14px] font-medium">7-day refund</div><div className="text-[12.5px] muted mt-0.5">Not for you? Full refund, no form.</div></div></div>
              <p className="text-[12px] muted px-2 text-center font-mono">Need help? {siteConfig.brand.email}</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Field({ id, label, type = "text", placeholder, required }: { id: string; label: string; type?: string; placeholder?: string; required?: boolean }) {
  return <div><label className="label" htmlFor={id}>{label}</label><input id={id} type={type} required={required} placeholder={placeholder} className="input mt-1.5" /></div>;
}
function Row({ label, value, bold, accent }: { label: string; value: string; bold?: boolean; accent?: boolean }) { return <div className="flex items-center justify-between"><span className={bold ? "font-medium" : "muted"}>{label}</span><span className={`${bold ? "font-display text-lg font-semibold" : ""} tabular-nums ${accent ? "text-[color:var(--accent)]" : ""}`}>{value}</span></div>; }
