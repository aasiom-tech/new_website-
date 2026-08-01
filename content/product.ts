import { products } from "@/content/products";
import type { ContentItem } from "@/types/content";

const capabilities = [
  {
    title: "Product Discovery & Strategy",
    description:
      "Problem definition, user understanding, scope, priorities, and product direction.",
  },
  {
    title: "Workflow & Systems Design",
    description:
      "Mapping information, decisions, roles, actions, exceptions, and approvals.",
  },
  {
    title: "Software Product Development",
    description:
      "Designing and developing focused web, application, and backend systems.",
  },
  {
    title: "Responsible AI Integration",
    description:
      "Using AI for assistance, extraction, organization, and intelligence with appropriate oversight.",
  },
  {
    title: "Research & Domain Analysis",
    description:
      "Studying industries, users, constraints, and operational realities.",
  },
  {
    title: "UX & Interface Design",
    description:
      "Creating clear interfaces for people working in practical environments.",
  },
  {
    title: "Architecture & Engineering Discipline",
    description:
      "Specifications, modular services, validation, tests, security thinking, and release control.",
  },
  {
    title: "Documentation & Knowledge Systems",
    description:
      "Creating traceable product, technical, and operational documentation.",
  },
] as const satisfies readonly ContentItem[];

export const productContent = {
  route: "/product",
  availability: "approved",
  title: "Products",
  heading: "What AASIOM Builds",
  statement:
    "Focused software products designed around operational reality, human oversight, and accountable decision-making.",
  capabilities,
  products,
} as const;
