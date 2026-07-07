import type { Faq } from "@/lib/types";

export const faqs: Faq[] = [
  { id: "f1", topic: "access", question: "How do I get the template after paying?", answer: "You'll get an email within a minute with a Notion duplicate link. Click it, hit Duplicate, and it drops straight into your workspace." },
  { id: "f2", topic: "access", question: "Can I use it in my team's workspace?", answer: "Yes — Pro templates come with a Personal + Small Team license. Agency OS ships with a full team license. See the license file included." },
  { id: "f3", topic: "notion", question: "Do I need a paid Notion plan?", answer: "No. Everything works on Notion's free plan except a couple of advanced database features in Agency OS. We flag those in the template." },
  { id: "f4", topic: "notion", question: "Do you support the older Notion databases?", answer: "Our templates target current Notion (2026). Templates from before 2024 have been fully rebuilt on the new database engine." },
  { id: "f5", topic: "updates", question: "Do I get free updates?", answer: "Yes — every paid template ships with lifetime free updates. You'll get an email each time a new version drops." },
  { id: "f6", topic: "updates", question: "How do I install an update?", answer: "For minor updates you'll get instructions to copy the new blocks in. For major updates you can duplicate the new version and follow a short migration Loom." },
  { id: "f7", topic: "refunds", question: "What's the refund policy?", answer: "7-day money back on any Pro template. Once you've duplicated a template it's fully yours to keep either way." },
  { id: "f8", topic: "refunds", question: "Can I share it with a friend?", answer: "The license is for one person or one team. If a friend loves it, please send them the link — we deeply appreciate it." },
  { id: "f9", topic: "custom", question: "Can you build me a custom template?", answer: "Sometimes, on a small waitlist. Email hi@studiokola.co with what you have in mind." },
];
