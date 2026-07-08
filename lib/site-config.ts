export const siteConfig = {
  brand: {
    name: "Studio Kola",
    tagline: "Notion templates for people who actually run a business in it.",
    domain: "studiokola.co",
    email: "hi@studiokola.co",
    whatsapp: "+234 700 000 0000",
    city: "Made in Lagos, used everywhere.",
    social: { instagram: "https://instagram.com/studiokola", twitter: "https://twitter.com/studiokola", youtube: "https://youtube.com/@studiokola", linkedin: "https://linkedin.com/company/studiokola" },
  },
  maker: {
    name: "Adaobi Nnamdi",
    role: "Systems designer · Notion Ambassador",
    portrait: "/img/hero-portrait.jpg",
    shortBio: "I build the Notion systems I wish I had when I was scaling my own agency.",
    longBio: [
      "I spent 5 years running a design studio in Lagos. Notion was the operating system that made it possible to grow from 2 to 14 people without adding a single Ops hire.",
      "Studio Kola is where I sell the templates I actually use — the same ones running my studio, my clients' companies, and now more than 6,400 solo operators & small teams across Africa.",
      "Every template ships with a Loom walk-through, a starter dataset, and lifetime updates.",
    ],
    metric: "6,400+ builders using Studio Kola templates",
    credentials: ["Notion Ambassador (2023, 2024, 2025)", "Ex-founder, design studio in Lagos", "Featured on Notion Made By"],
  },
  hero: { tag: "New release · Founder OS 3.0" },
  commerce: { currency: "$", trust: ["Instant duplicate link", "Free lifetime updates", "Loom walk-through included"] },
} as const;
