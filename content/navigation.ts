import { companyDetails } from "@/content/company";
import { products } from "@/content/products";
import type { LinkItem } from "@/types/content";

export type NavigationItem = LinkItem & {
  readonly includeChildren?: boolean;
};

export type NavigationGroup = {
  readonly title: string;
  readonly links: readonly NavigationItem[];
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
} as const satisfies LinkItem;

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
      ...products.map((product) => ({
        label: product.name,
        href: product.route,
      })),
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

export { companyDetails };

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
