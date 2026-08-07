import { company } from "@/content/company";
import { anviraProduct } from "@/content/products";
import type {
  ContentItem,
  CTAContent,
  NumberedContentItem,
} from "@/types/content";

const proofPoints = [
  {
    title: "Business Websites",
    description:
      "Responsive, professional websites for companies, professionals, and growing brands.",
  },
  {
    title: "Web Apps & Dashboards",
    description:
      "Custom internal tools, admin panels, business dashboards, and role-based web applications.",
  },
  {
    title: "Custom Software & MVPs",
    description:
      "Turn a validated idea or manual process into a structured working digital product.",
  },
  {
    title: "AI & Workflow Automation",
    description:
      "Reduce repetitive work, organise information, and support decisions with practical automation.",
  },
  {
    title: "UI/UX & Product Design",
    description:
      "User flows, wireframes, interface systems, and responsive experiences designed around real users.",
  },
  {
    title: "API, Backend & Integrations",
    description:
      "Secure backend services, databases, APIs, and integrations that connect products reliably.",
  },
] as const satisfies readonly ContentItem[];

const operationalRealityItems = [
  {
    title: "Startups & founders",
    description:
      "Move from an early idea or validated concept to an MVP, prototype, or working digital product with a clear scope.",
  },
  {
    title: "SMEs digitising operations",
    description:
      "Replace manual coordination, spreadsheets, and fragmented processes with structured dashboards, tools, and automation.",
  },
  {
    title: "Local businesses & professionals",
    description:
      "Build credible websites, booking or enquiry experiences, lightweight systems, and digital workflows that support day-to-day business.",
  },
  {
    title: "Teams improving internal workflows",
    description:
      "Create admin systems, role-based applications, reporting tools, integrations, and AI-assisted workflows around specific operational needs.",
  },
] as const satisfies readonly ContentItem[];

const capabilityItems = [
  {
    title: "Business Websites",
    description:
      "Fast, responsive, conversion-focused websites for companies, professionals, and growing brands.",
  },
  {
    title: "Web Apps & Dashboards",
    description:
      "Custom internal tools, admin panels, business dashboards, and role-based applications designed around real workflows.",
  },
  {
    title: "Custom Software & MVPs",
    description:
      "Turn a validated idea or manual business process into a structured working product with room to evolve.",
  },
  {
    title: "AI & Workflow Automation",
    description:
      "Use AI and automation where they create practical value by reducing repetitive work, organising information, and supporting decisions.",
  },
  {
    title: "UI/UX & Product Design",
    description:
      "User flows, wireframes, interface systems, prototypes, and responsive experiences shaped around the people who will use them.",
  },
  {
    title: "API, Backend & Integration",
    description:
      "Secure backend services, databases, APIs, and third-party integrations that keep the product connected and maintainable.",
  },
] as const satisfies readonly ContentItem[];

const engineeringMethod = [
  {
    number: 1,
    title: "Discover",
    description:
      "Understand the business goal, users, current process, constraints, available information, and the outcome the project needs to create.",
  },
  {
    number: 2,
    title: "Define",
    description:
      "Turn the requirement into a clear scope, priorities, user roles, workflows, deliverables, and success criteria before implementation begins.",
  },
  {
    number: 3,
    title: "Design",
    description:
      "Plan the user experience and technical structure together: flows, interfaces, data, integrations, architecture, and the responsible role of AI where relevant.",
  },
  {
    number: 4,
    title: "Build",
    description:
      "Develop the agreed solution in controlled, reusable modules with regular review instead of uncontrolled feature expansion.",
  },
  {
    number: 5,
    title: "Launch",
    description:
      "Validate key journeys, responsive behaviour, performance, reliability, security assumptions, and deployment readiness before release.",
  },
  {
    number: 6,
    title: "Support",
    description:
      "Maintain, improve, and extend the delivered system using real usage feedback, changing requirements, and clearly prioritised next steps.",
  },
] as const satisfies readonly NumberedContentItem[];

const trustItems = [
  {
    title: "Clear scope before build",
    description:
      "Requirements, users, workflows, priorities, and expected outcomes are clarified before implementation so the project starts with shared understanding.",
  },
  {
    title: "End-to-end delivery",
    description:
      "Research, UX, engineering, integration, deployment, and support are connected as one delivery path instead of isolated hand-offs.",
  },
  {
    title: "Maintainable engineering",
    description:
      "Systems are designed for usability, performance, security, and future change rather than short-term feature volume.",
  },
  {
    title: "Transparent progress & handover",
    description:
      "Project status, decisions, limitations, and next steps are communicated clearly, with practical documentation and support around delivery.",
  },
] as const satisfies readonly ContentItem[];

const frequentlyAskedQuestions = [
  {
    question: "What can AASIOM build for a client?",
    answer:
      "AASIOM delivers business websites, web applications, dashboards, custom software and MVPs, workflow automation, AI-enabled tools, UI/UX design, backend systems, APIs, databases, and integrations.",
  },
  {
    question: "Who does AASIOM work with?",
    answer:
      "AASIOM works with startups, founders, SMEs, local businesses, professionals, and growing teams that need a practical digital system, stronger web presence, internal tool, automation, or custom software solution.",
  },
  {
    question: "Can AASIOM handle a project from idea to launch?",
    answer:
      "Yes. Depending on the engagement, AASIOM can support discovery, requirement definition, UX, technical planning, development, integration, validation, deployment, and post-launch improvement as one connected process.",
  },
  {
    question: "Can AASIOM improve or extend an existing system?",
    answer:
      "Yes. Existing websites, applications, dashboards, workflows, or internal tools can be reviewed to identify where redesign, engineering, integration, automation, or structured improvements may be useful.",
  },
  {
    question: "Does every AASIOM project use artificial intelligence?",
    answer:
      "No. AASIOM uses AI only where it creates clear value. Many projects may be better served by strong UX, reliable software, workflow design, automation, integrations, or conventional engineering without unnecessary AI.",
  },
  {
    question: "What is ANVIRA?",
    answer:
      "ANVIRA is AASIOM’s proprietary product initiative in active development for Indian trucking fleets. It demonstrates AASIOM’s product research, architecture, workflow, and engineering discipline alongside the company’s client-services work.",
  },
] as const;

export const homeContent = {
  route: "/",
  availability: "approved",
  hero: {
    eyebrow: "Technology services + product engineering",
    headline:
      "We build websites, software and AI systems for real business needs.",
    valueProposition:
      "AASIOM helps startups, SMEs and growing teams turn ideas and manual workflows into clear digital products—from research and UX through development, automation, deployment and support.",
    trustLine: "Client-focused. End-to-end. Built for practical use.",
    ctas: [
      { label: "Start a Project", href: "/contact" },
      { label: "Explore Services", href: "/#capabilities" },
    ] as const satisfies readonly CTAContent[],
  },
  proofStrip: {
    heading: "What clients can hire AASIOM to build",
    items: proofPoints,
  },
  companyIntroduction: {
    eyebrow: "Technology services",
    heading: "Practical digital systems built around real business needs.",
    paragraphs: [
      "AASIOM works with startups, SMEs, local businesses, professionals, and growing teams that need practical technology—not generic packages or unnecessary complexity.",
      "From websites and dashboards to custom software and automation, each engagement connects discovery, design, engineering, deployment, and support around the actual requirement.",
    ],
    cta: { label: "Learn About AASIOM", href: "/about" },
  },
  operationalReality: {
    eyebrow: "Who we work with",
    heading: "Different clients. Different workflows. One need for technology that fits.",
    introduction:
      "AASIOM works across industries and project stages. The common starting point is a clear business need that can be improved through thoughtful design, software, automation, or integration.",
    items: operationalRealityItems,
  },
  capabilities: {
    eyebrow: "Technology services",
    heading: "What AASIOM can build for you.",
    introduction:
      "Choose a focused service or bring a broader requirement. AASIOM can connect product thinking, design, software engineering, automation, backend systems, and integrations into one delivery path.",
    items: capabilityItems,
    cta: { label: "Discuss Your Project", href: "/contact" },
  },
  engineeringMethod: {
    eyebrow: "How we work",
    heading: "A clear path from requirement to launch and support.",
    introduction:
      "AASIOM uses a structured six-stage delivery approach to reduce ambiguity, keep scope connected to business needs, and make progress easier to review.",
    steps: engineeringMethod,
  },
  productSpotlight: {
    eyebrow: "AASIOM product lab",
    kicker: "Client services today. Proprietary product R&D alongside.",
    name: anviraProduct.name,
    descriptor:
      "A focused example of AASIOM’s product research and engineering discipline.",
    teaser:
      "ANVIRA is an AI-assisted incident command and documentation platform in active development for Indian trucking fleets. It gives AASIOM a focused environment for deep product research, workflow design, architecture, and responsible AI experimentation alongside client delivery.",
    status: "In active development",
    productId: anviraProduct.id,
    cta: { label: "Explore ANVIRA", href: "/product" },
  },
  trust: {
    eyebrow: "Why work with AASIOM",
    heading: "Good delivery is more than writing code.",
    introduction:
      "AASIOM combines clear scope, end-to-end ownership, maintainable engineering, and transparent handover so the delivered system remains useful beyond launch.",
    items: trustItems,
  },
  faq: {
    eyebrow: "Frequently asked questions",
    heading: "Working with AASIOM",
    items: frequentlyAskedQuestions,
  },
  closingCta: {
    availability: "approved",
    eyebrow: "Start a project",
    heading: "Have a website, app, dashboard, automation, or software idea to build?",
    description:
      "Tell AASIOM what you are trying to improve, build, or replace. We can help turn the requirement into a clear digital solution and practical delivery plan.",
    ctas: [
      { label: "Start a Project", href: "/contact" },
      { label: "Explore Services", href: "/#capabilities" },
    ] as const satisfies readonly CTAContent[],
  },
} as const;
