export type TemplateCategory = "founder" | "creator" | "team" | "personal" | "finance" | "content";
export type TemplateTier = "free" | "pro" | "team";

export type Template = {
  id: string;
  title: string;
  slug: string;
  category: TemplateCategory;
  tier: TemplateTier;
  shortDescription: string;
  fullDescription?: string;
  price: number;
  compareAtPrice?: number;
  cover: string;
  gallery?: string[];
  emoji: string;
  pages: number;
  databases: number;
  updatedAt: string;   // "v3.0 · Jul 2026"
  features: string[];
  perfectFor: string[];
  changelog?: { version: string; date: string; note: string }[];
  badge?: "new" | "bestseller" | "updated";
  featured?: boolean;
  flagship?: boolean;
};

export type Bundle = { id: string; title: string; slug: string; price: number; compareAtPrice: number; includes: string[]; cover: string; };
export type Testimonial = { id: string; quote: string; name: string; role?: string; rating?: number };
export type Faq = { id: string; question: string; answer: string; topic?: string };
export type NavItem = { label: string; href?: string; children?: { label: string; href: string; description?: string }[] };
