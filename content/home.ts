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
      "Critical context is often scattered across calls, chats, documents, voice notes, images, and individual memory—making a complete operating picture harder to form.",
  },
  {
    title: "Delayed decisions",
    description:
      "When information is incomplete or difficult to verify, teams spend time reconstructing events before they can decide what should happen next.",
  },
  {
    title: "Unclear ownership",
    description:
      "Actions, approvals, blockers, and follow-ups become harder to track when responsibility lives across disconnected channels.",
  },
  {
    title: "Generic software mismatch",
    description:
      "Off-the-shelf tools can digitise isolated tasks without reflecting the operation, users, constraints, or decision flow they are meant to support.",
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

const frequentlyAskedQuestions = [
  {
    question: "What kind of problems does AASIOM work on?",
    answer:
      "AASIOM focuses on operational problems where information is fragmented, decisions are difficult to coordinate, workflows are unclear, or existing software does not fit the way work actually happens.",
  },
  {
    question: "What does AASIOM build?",
    answer:
      "AASIOM designs intelligent systems and scalable digital products, including AI-enabled platforms, enterprise software and dashboards, workflow automation, and web or application products shaped around specific operating needs.",
  },
  {
    question: "How does AASIOM use artificial intelligence?",
    answer:
      "AI is used as an assistive layer for tasks such as extracting information, organising context, identifying gaps, classifying inputs, and proposing next actions. Sensitive operational values and final outputs remain subject to human confirmation.",
  },
  {
    question: "How does AASIOM move from an idea to a working product?",
    answer:
      "Work follows a structured path: discover the operating problem, define requirements and roles, architect the system, build in controlled phases, validate behaviour and assumptions, then improve using verified operational feedback.",
  },
  {
    question: "What is ANVIRA?",
    answer:
      "ANVIRA is AASIOM’s flagship product initiative: an AI-assisted incident command and documentation platform in active development for Indian trucking fleets.",
  },
  {
    question: "Who should contact AASIOM?",
    answer:
      "Enterprise teams, strategic partners, domain advisors, technology collaborators, and investors can contact AASIOM to discuss product and technology projects, partnerships, or the company’s next stage of development.",
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
      { label: "Explore ANVIRA", href: "/product" },
    ] as const satisfies readonly CTAContent[],
  },
  proofStrip: {
    heading: "A disciplined foundation for intelligent product development",
    items: proofPoints,
  },
  companyIntroduction: {
    eyebrow: "Why AASIOM",
    heading: "Built to turn complex operations into clear, usable systems.",
    paragraphs: [
      "AASIOM is an AI-first technology and product company focused on operating environments where information, decisions, and accountability are difficult to manage across disconnected workflows.",
      "Our work combines operational research, product strategy, software engineering, and human-controlled AI so technology supports the way organisations actually work—not the other way around.",
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
    heading: "From problem definition to working digital product.",
    introduction:
      "AASIOM connects research, product architecture, engineering, automation, and AI as one delivery discipline. Each engagement is shaped around the operating need rather than a generic service catalogue.",
    items: capabilityItems,
    cta: { label: "Discuss Your Requirement", href: "/contact" },
  },
  engineeringMethod: {
    eyebrow: "How we work",
    heading: "A disciplined path from discovery to scale.",
    introduction:
      "AASIOM uses a six-stage method to reduce ambiguity, control technical complexity, and keep every product decision connected to real operational needs.",
    steps: engineeringMethod,
  },
  productSpotlight: {
    eyebrow: "Flagship product",
    kicker: "One product. One focused operating problem.",
    name: anviraProduct.name,
    descriptor:
      "A concise example of AASIOM’s product-building discipline.",
    teaser:
      "ANVIRA is an AI-assisted incident command and documentation platform in active development for Indian trucking fleets. It applies AASIOM’s approach to a specific challenge: fragmented incident coordination.",
    status: "In active development",
    productId: anviraProduct.id,
    cta: { label: "Explore ANVIRA", href: "/product" },
  },
  trust: {
    eyebrow: "Responsible product building",
    heading: "Trust is part of the architecture, not an afterthought.",
    introduction:
      "AASIOM treats problem fit, human control, transparent progress, and modular architecture as core product requirements.",
    items: trustItems,
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
    heading: "Understanding AASIOM",
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
      { label: "Request a Strategic Review", href: "/strategic-review" },
    ] as const satisfies readonly CTAContent[],
  },
} as const;
