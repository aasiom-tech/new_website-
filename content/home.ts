import { company } from "@/content/company";
import { anviraProduct } from "@/content/products";
import type {
  ContentItem,
  CTAContent,
  NumberedContentItem,
} from "@/types/content";

const proofPoints = [
  {
    title: "Specification-led development",
    description:
      "Clear requirements, workflows, roles, constraints, and acceptance criteria guide implementation.",
  },
  {
    title: "Human-confirmed AI",
    description:
      "AI may assist with extraction, classification, summarisation, and recommendations while people confirm sensitive outputs.",
  },
  {
    title: "Phased technical governance",
    description:
      "Architecture, validation, security, integration, and deployment are approached through controlled stages.",
  },
  {
    title: "Founder-led execution",
    description:
      "Company direction, product definition, research, and delivery decisions remain closely connected.",
  },
] as const satisfies readonly ContentItem[];

const operationalRealityItems = [
  {
    title: "Fragmented information",
    description:
      "Important context is often spread across calls, chats, documents, voice notes, images, and individual memory.",
  },
  {
    title: "Delayed decisions",
    description:
      "When information is incomplete or difficult to verify, teams lose time deciding what happened and what should happen next.",
  },
  {
    title: "Unclear ownership",
    description:
      "Actions, approvals, blockers, and follow-ups become difficult to track when work remains inside disconnected channels.",
  },
  {
    title: "Generic software mismatch",
    description:
      "Off-the-shelf tools may digitise isolated tasks without reflecting the operation, users, constraints, or decision flow.",
  },
] as const satisfies readonly ContentItem[];

const capabilityItems = [
  {
    title: "AI-enabled platforms",
    description:
      "Focused systems that use AI to organise information, identify patterns, surface gaps, and support reviewable decisions.",
  },
  {
    title: "Enterprise software and dashboards",
    description:
      "Structured interfaces that bring operational context, evidence, status, actions, and oversight into one working view.",
  },
  {
    title: "Workflow automation",
    description:
      "Purpose-built workflows that reduce repetitive coordination, clarify ownership, and keep critical follow-ups visible.",
  },
  {
    title: "Product strategy and architecture",
    description:
      "Research, requirement definition, user journeys, system boundaries, data flows, and scalable technical planning.",
  },
  {
    title: "Research and digital transformation",
    description:
      "Operational study and technology planning that help organisations move from fragmented practices to structured systems.",
  },
  {
    title: "Web and application engineering",
    description:
      "Responsive digital products designed around usability, maintainability, performance, and future integration needs.",
  },
] as const satisfies readonly ContentItem[];

const engineeringMethod = [
  {
    number: 1,
    title: "Discover",
    description:
      "Study the operation, users, pain points, information flow, constraints, and existing tools.",
  },
  {
    number: 2,
    title: "Define",
    description:
      "Translate the problem into clear requirements, roles, decisions, workflows, and success criteria.",
  },
  {
    number: 3,
    title: "Architect",
    description:
      "Plan the system structure, data movement, interfaces, integrations, controls, and responsible role of AI.",
  },
  {
    number: 4,
    title: "Build",
    description:
      "Develop reusable, modular components through phased implementation rather than uncontrolled feature expansion.",
  },
  {
    number: 5,
    title: "Validate",
    description:
      "Test behaviour, accessibility, reliability, security assumptions, and alignment with the approved specification.",
  },
  {
    number: 6,
    title: "Scale",
    description:
      "Improve the product using verified operational feedback while preserving accountability and human control.",
  },
] as const satisfies readonly NumberedContentItem[];

const trustItems = [
  {
    title: "Problem before technology",
    description:
      "Technology choices follow the operational problem, user environment, and required outcomes—not the other way around.",
  },
  {
    title: "Human control over sensitive AI outputs",
    description:
      "AI supports people with organised context and proposals, while consequential values and final outputs remain reviewable.",
  },
  {
    title: "Transparent progress",
    description:
      "Completed, in-progress, and pending work should be communicated accurately without unsupported performance claims.",
  },
  {
    title: "Modular and scalable architecture",
    description:
      "Systems are structured so capabilities, integrations, and workflows can evolve without unnecessary rebuilding.",
  },
] as const satisfies readonly ContentItem[];

const ecosystemItems = [
  {
    title: "AI and automation",
    description:
      "Assistive intelligence for extraction, classification, summarisation, gap identification, and workflow support.",
  },
  {
    title: "Structured data and dashboards",
    description:
      "Clear records and interfaces that make evidence, ownership, status, and next actions easier to understand.",
  },
  {
    title: "Cloud-ready product engineering",
    description:
      "Modern application architecture prepared for secure deployment, responsive access, and future service integration.",
  },
  {
    title: "Human-centred interfaces",
    description:
      "Experiences designed for real users, real constraints, and understandable decision-making rather than technical novelty.",
  },
] as const satisfies readonly ContentItem[];

const frequentlyAskedQuestions = [
  {
    question: "What does AASIOM build?",
    answer:
      "AASIOM designs intelligent systems and scalable digital products for operational problems where information is fragmented, decisions are delayed, and accountability is difficult to maintain.",
  },
  {
    question: "How does AASIOM use artificial intelligence?",
    answer:
      "AI is used as an assistive layer for tasks such as extracting information, organising context, identifying gaps, classifying inputs, and proposing next actions. Sensitive operational values and final outputs remain subject to human confirmation.",
  },
  {
    question: "What is ANVIRA?",
    answer:
      "ANVIRA is AASIOM’s flagship product initiative: a WhatsApp-first, AI-assisted incident command and documentation platform being developed for Indian trucking fleets.",
  },
  {
    question: "Is ANVIRA already a production product?",
    answer:
      "ANVIRA is in active development. Public previews should be understood as approved product concepts or development-stage interfaces unless a specific production milestone is formally confirmed.",
  },
  {
    question: "Who should contact AASIOM?",
    answer:
      "Enterprise teams, fleet operators, domain advisors, strategic partners, technology collaborators, and investors may contact AASIOM to discuss projects, pilots, partnerships, or the company’s next stage of development.",
  },
] as const;

export const homeContent = {
  route: "/",
  availability: "approved",
  hero: {
    eyebrow: "AI-first technology and product company",
    headline: "Engineering intelligent systems for real-world operations.",
    valueProposition:
      `${company.legalName} transforms complex business and operational problems into structured, scalable, and human-centred digital systems.`,
    trustLine: "Research-led. Product-driven. Human-controlled AI.",
    ctas: [
      { label: "Discuss a Project", href: "/contact" },
      { label: "Explore ANVIRA", href: anviraProduct.route },
    ] as const satisfies readonly CTAContent[],
  },
  proofStrip: {
    heading: "A disciplined foundation for intelligent product development",
    items: proofPoints,
  },
  companyIntroduction: {
    eyebrow: "Why AASIOM",
    heading: "From operational complexity to clear digital systems.",
    paragraphs: [
      "Many organisations do not suffer from a lack of information. They suffer because information arrives through disconnected channels, remains difficult to verify, and does not move through a clear operating workflow.",
      "AASIOM combines research, product strategy, software engineering, AI assistance, and human governance to turn that complexity into systems that are visible, actionable, and designed for responsible growth.",
    ],
    cta: { label: "Learn About AASIOM", href: "/about" },
  },
  operationalReality: {
    eyebrow: "The operational challenge",
    heading: "Technology creates value only when it fits the way work actually happens.",
    introduction:
      "AASIOM begins by understanding the real operating environment: who provides information, how decisions are made, where accountability breaks down, and which constraints cannot be ignored.",
    items: operationalRealityItems,
  },
  capabilities: {
    eyebrow: "Capabilities",
    heading: "Research, architecture, engineering, and AI—connected as one product discipline.",
    introduction:
      "AASIOM’s capability areas are designed to move an idea from problem definition to a structured, usable, and scalable digital product. Every engagement is scoped around the operating need rather than a generic service catalogue.",
    items: capabilityItems,
    cta: { label: "Discuss Your Requirement", href: "/contact" },
  },
  engineeringMethod: {
    eyebrow: "How we work",
    heading: "A structured path from discovery to scale.",
    introduction:
      "AASIOM uses a disciplined six-stage method to reduce ambiguity, control technical complexity, and keep product decisions connected to real operational needs.",
    steps: engineeringMethod,
  },
  productSpotlight: {
    eyebrow: "Flagship product initiative",
    name: anviraProduct.name,
    descriptor:
      "WhatsApp-first, AI-assisted incident command and documentation for Indian trucking fleets.",
    teaser:
      "ANVIRA is being developed to convert scattered incident updates—calls, chats, photos, voice notes, documents, and location context—into one structured case with clearer evidence, ownership, actions, blockers, downtime visibility, and a controlled incident dossier.",
    lifecycle: ["Receive", "Verify", "Act", "Track", "Close"] as const,
    aiRole:
      "AI can extract, summarise, classify, identify gaps, and propose actions. People confirm sensitive operational values and final outputs.",
    status: "In active development",
    productId: anviraProduct.id,
    cta: { label: "Explore ANVIRA", href: anviraProduct.route },
  },
  trust: {
    eyebrow: "Responsible product building",
    heading: "Trust is designed into the workflow—not added after launch.",
    introduction:
      "AASIOM treats traceability, human control, transparent progress, and modular architecture as product requirements.",
    items: trustItems,
  },
  ecosystem: {
    eyebrow: "Technology direction",
    heading: "Designed to connect intelligence, information, and action.",
    introduction:
      "The goal is not to add AI everywhere. The goal is to apply the right technical capability at the right stage of the workflow, with clear boundaries and review points.",
    items: ecosystemItems,
  },
  strategicReview: {
    eyebrow: "For partners and investors",
    heading: "Build, partner, or invest in the next stage of AASIOM.",
    description:
      "AASIOM is open to conversations with pilot fleets, domain advisors, strategic introducers, technology partners, enterprise leaders, and investors who understand the value of disciplined product development for complex operational environments.",
    ctas: [
      {
        label: "Request a Strategic Review",
        href: "/strategic-review",
      },
      {
        label: "Speak with the Founder",
        href: "/contact",
      },
    ] as const satisfies readonly CTAContent[],
  },
  faq: {
    eyebrow: "Frequently asked questions",
    heading: "Understanding AASIOM and ANVIRA",
    items: frequentlyAskedQuestions,
  },
  closingCta: {
    availability: "approved",
    eyebrow: "Start a strategic conversation",
    heading: "Have a complex operational problem that needs a clearer system?",
    description:
      "Discuss the challenge with AASIOM and explore how research, product architecture, engineering, and responsible AI can be brought together around it.",
    ctas: [
      { label: "Discuss a Project", href: "/contact" },
      { label: "Explore ANVIRA", href: anviraProduct.route },
    ] as const satisfies readonly CTAContent[],
  },
} as const;
