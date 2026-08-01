import { company } from "@/content/company";

export const siteMetadata = {
  name: company.brandName,
  description: company.siteDescription,
} as const;

export const pageNames = {
  home: "Home",
  about: "About",
  product: "Products",
  anvira: "ANVIRA",
  strategicReview: "Strategic Review",
  contact: "Contact",
  privacyPolicy: "Privacy Policy",
  termsOfUse: "Terms of Use",
} as const;
