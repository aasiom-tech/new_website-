import type { CompanyContent } from "@/types/content";

const legalName = "AASIOM Technologies Private Limited";

export const company = {
  brandName: "AASIOM Technologies",
  legalName,
  operatingFocus: "AI-First Technology and Product Company",
  headquarters: "Dadar East, Mumbai, Maharashtra, India",
  registeredOffice:
    "27, Ground Floor, Sunshine Plaza,\nMumbai Marathi Granth Sangrahalaya Marg,\nDadar East, Mumbai - 400014,\nMaharashtra, India",
  email: "pvsao@aasiom.com",
  phone: {
    display: "+91 9209021711",
    href: "tel:+919209021711",
  },
  legalEntity: `${legalName} (Registered in India)`,
  siteDescription:
    "AASIOM Technologies Private Limited designs intelligent systems and scalable digital products for complex real-world operations.",
  copyright: `© 2026 ${legalName}.`,
  rights: "All rights reserved.",
  origin: "Built in India.",
  pendingServicesStatement:
    "AASIOM presents selected capability areas that reflect its research, product, and engineering direction. Commercial engagements remain subject to scope and internal approval.",
  director: {
    name: "Om Vinayak Muchandikar",
    role: "Director",
  },
} as const satisfies CompanyContent;

export const companyDetails = {
  name: company.legalName,
  operatingFocus: company.operatingFocus,
  legalEntity: company.legalEntity,
  headquarters: company.headquarters,
  registeredOffice: company.registeredOffice,
  email: company.email,
  phoneDisplay: company.phone.display,
  phoneHref: company.phone.href.replace("tel:", ""),
  director: company.director,
  pendingServicesStatement: company.pendingServicesStatement,
  copyright: company.copyright,
  rights: company.rights,
  origin: company.origin,
} as const;
