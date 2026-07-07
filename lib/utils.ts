import { siteConfig } from "./site-config";
export function formatPrice(v: number, currency = siteConfig.commerce.currency) { return v === 0 ? "Free" : `${currency}${v.toLocaleString("en-US")}`; }
export function cn(...c: (string | false | null | undefined)[]) { return c.filter(Boolean).join(" "); }
export function categoryLabel(c: string) { return ({ founder: "Founder", creator: "Creator", team: "Team", personal: "Personal", finance: "Finance", content: "Content" } as Record<string, string>)[c] ?? c; }
export function tierLabel(t: string) { return ({ free: "Free", pro: "Pro", team: "Team" } as Record<string, string>)[t] ?? t; }
