import type { NavItem } from "@/lib/types";

export const navItems: NavItem[] = [
  { label: "Templates", href: "/templates" },
  { label: "Bundles", href: "/templates?tier=pro" },
  { label: "Free", href: "/templates?tier=free" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const footerLinks = {
  shop: [
    { label: "All templates", href: "/templates" },
    { label: "Bundles", href: "/templates?tier=pro" },
    { label: "Free templates", href: "/templates?tier=free" },
    { label: "Founder OS", href: "/templates/founder-os" },
  ],
  help: [
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Refunds", href: "/faq" },
    { label: "Notion setup guide", href: "/faq" },
  ],
};
