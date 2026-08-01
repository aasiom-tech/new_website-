export type NavigationItem = {
  label: string;
  href: string;
  includeChildren?: boolean;
};

export type NavigationGroup = {
  title: string;
  links: readonly NavigationItem[];
};

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Product", href: "/product", includeChildren: true },
  { label: "Strategic Review", href: "/strategic-review" },
  { label: "Contact", href: "/contact" },
] as const satisfies readonly NavigationItem[];

export const primaryContactAction = {
  label: "Start a Pilot Conversation",
  href: "/contact",
} as const;

export const footerNavigation = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Product", href: "/product" },
      { label: "ANVIRA", href: "/product/anvira" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Strategic Review", href: "/strategic-review" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms-of-use" },
    ],
  },
] as const satisfies readonly NavigationGroup[];

export const companyDetails = {
  name: "AASIOM Technologies Private Limited",
  headquarters: "Dadar East, Mumbai, Maharashtra, India",
  email: "pvsao@aasiom.com",
  phoneDisplay: "+91 9209021711",
  phoneHref: "+919209021711",
  copyright: "\u00a9 2026 AASIOM Technologies Private Limited.",
  rights: "All rights reserved.",
  origin: "Built in India.",
} as const;

export function isNavigationItemActive(
  pathname: string,
  item: NavigationItem,
) {
  if (item.href === "/") {
    return pathname === "/";
  }

  return item.includeChildren
    ? pathname === item.href || pathname.startsWith(`${item.href}/`)
    : pathname === item.href;
}
