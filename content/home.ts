import { company } from "@/content/company";
import { anviraProduct } from "@/content/products";
import type {
  ContentItem,
  CTAContent,
  NumberedContentItem,
} from "@/types/content";

const operationalRealityItems = [
  {
    title: "Fragmented Communication",
    description:
      "Critical information arrives from multiple people, in varied formats, across scattered tools.",
  },
  {
    title: "Unclear Accountability",
    description:
      "Actions, decisions, and approvals live in disconnected channels rather than structured records.",
  },
  {
    title: "Generic Software Mismatch",
    description:
      "Off-the-shelf software forces teams into rigid workflows that ignore actual field realities.",
  },
] as const satisfies readonly ContentItem[];

const engineeringMethod = [
  {
    number: 1,
    title: "Understand",
    description:
      "Study the operation, users, pain points, information flow, and constraints deeply.",
  },
  {
    number: 2,
    title: "Structure",
    description:
      "Define the workflow, roles, decisions, data requirements, and success criteria.",
  },
  {
    number: 3,
    title: "Design",
    description:
      "Create system architecture, user journeys, intuitive interfaces, and controlled AI roles.",
  },
  {
    number: 4,
    title: "Build and Validate",
    description:
      "Develop in phases, test system behavior, and verify against requirements.",
  },
  {
    number: 5,
    title: "Improve Responsibly",
    description:
      "Learn from real operational use, measure outcomes, and evolve while preserving control.",
  },
] as const satisfies readonly NumberedContentItem[];

const trustItems = [
  {
    title: "Human-Controlled AI",
    description:
      "AI assists analysis and organization while consequential decisions remain reviewable by people.",
  },
  {
    title: "Traceability & Accountability",
    description:
      "Actions, suggestions, approvals, and changes are recorded to ensure clear operational audit trails.",
  },
  {
    title: "Data Security & Privacy",
    description:
      "Data minimization and controlled access are treated as core design priorities.",
  },
] as const satisfies readonly ContentItem[];

export const homeContent = {
  route: "/",
  availability: "approved",
  hero: {
    headline: "Building focused technology for complex real-world operations.",
    valueProposition:
      `${company.legalName} combines product strategy, software engineering, and responsible AI to transform fragmented work into structured, visible, and accountable systems.`,
    ctas: [
      { label: "Explore Product", href: "/product" },
      { label: "Start Pilot Conversation", href: "/contact" },
    ] as const satisfies readonly CTAContent[],
  },
  operationalReality: {
    heading: "Operational Reality",
    introduction:
      "Important operations often depend on scattered conversations, individual memory, and disconnected tools. Technology often exists, but it does not always fit the exact working environment. AASIOM exists to close that gap by understanding the operation first and building a focused system around it.",
    items: operationalRealityItems,
  },
  engineeringMethod: {
    heading: "AASIOM Engineering Method",
    introduction:
      "AASIOM turns operational complexity into structured, accountable systems through a disciplined five-step approach:",
    steps: engineeringMethod,
  },
  productSpotlight: {
    name: anviraProduct.name,
    descriptor:
      "Intelligent incident command layer for highway fleet operations.",
    teaser:
      "Developed for complex, time-sensitive operations where information arrives from multiple people and channels. Helps teams move from fragmented inputs to a clearer, coordinated, and accountable operating picture—while keeping people in control.",
    status: "Flagship — Fleet Pilot Stage",
    productId: anviraProduct.id,
    cta: { label: "Discover ANVIRA", href: anviraProduct.route },
  },
  trust: {
    heading: "Trust, Responsible AI & Execution Standards",
    items: trustItems,
  },
  closingCta: {
    availability: "pending-approved-content",
    heading: null,
    description: null,
    ctas: [
      { label: "Explore Product", href: "/product" },
      { label: "Start Pilot Conversation", href: "/contact" },
    ] as const satisfies readonly CTAContent[],
  },
} as const;
