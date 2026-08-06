import { companyDetails } from "@/content/company";
import { anviraProduct, products } from "@/content/products";
import type { LinkItem, SiteRoute } from "@/types/content";

type NavigationHref = SiteRoute | `/#${string}`;

export type NavigationItem = {
  readonly label: string;
  readonly href: NavigationHref;
  readonly includeChildren?: boolean;
};

export type NavigationGroup = {
  readonly title: string;
  readonly links: readonly NavigationItem[];
};

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/#capabilities" },
  {
    label: "ANVIRA",
    href: anviraProduct.route,
    includeChildren: true,
  },
  { label: "Strategic Review", href: "/strategic-review" },
  { label: "Contact", href: "/contact" },
] as const satisfies readonly NavigationItem[];

export const primaryContactAction = {
  label: "Discuss a Project",
  href: "/contact",
} as const satisfies LinkItem;

export const footerNavigation = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Strategic Review", href: "/strategic-review" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "Capability Areas", href: "/#capabilities" },
      { label: "Product", href: "/product" },
      ...products.map((product) => ({
        label: product.name,
        href: product.route,
      })),
    ],
  },
  {
    title: "Legal",
    links: [
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

  if (item.href.includes("#")) {
    return false;
  }

  return item.includeChildren
    ? pathname === item.href || pathname.startsWith(`${item.href}/`)
    : pathname === item.href;
}
