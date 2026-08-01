import { aboutContent } from "@/content/about";
import { contactContent } from "@/content/contact";
import { homeContent } from "@/content/home";
import { privacyPolicyContent } from "@/content/legal/privacyPolicy";
import { termsOfUseContent } from "@/content/legal/termsOfUse";
import { productContent } from "@/content/product";
import { anviraProduct } from "@/content/products";
import { strategicReviewContent } from "@/content/strategicReview";
import type { RoutableContent, SiteRoute } from "@/types/content";

export const contentByRoute = {
  "/": homeContent,
  "/about": aboutContent,
  "/product": productContent,
  "/product/anvira": anviraProduct,
  "/strategic-review": strategicReviewContent,
  "/contact": contactContent,
  "/privacy-policy": privacyPolicyContent,
  "/terms-of-use": termsOfUseContent,
} as const satisfies {
  readonly [Route in SiteRoute]: RoutableContent;
};
