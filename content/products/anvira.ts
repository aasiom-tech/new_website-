import type {
  ContentItem,
  ProductDetail,
  ScopeBoundaryItem,
} from "@/types/content";

const positioning =
  "ANVIRA is AASIOM's flagship product initiative—an intelligent operational platform being developed to bring structure, visibility, and accountability to complex, time-sensitive situations. It is designed around familiar communication behavior, responsible AI assistance, and human-controlled decision-making.";

const anviraCapabilities = [
  { label: "Addresses fragmented operational communication." },
  {
    label: "Converts scattered inputs into a coordinated working picture.",
  },
  { label: "Designed for serious, time-sensitive environments." },
  { label: "Combines AI assistance with human judgment." },
] as const satisfies readonly ScopeBoundaryItem[];

const anviraExclusions = [
  {
    label:
      "Does NOT replace emergency services, police, ambulance, towing, or repair.",
  },
  {
    label:
      "Does NOT guarantee insurance claim approval or legal liability decisions.",
  },
  { label: "Does NOT act as a public free-use emergency app." },
  {
    label:
      "Does NOT position itself as GPS tracking software or generic fleet ERP.",
  },
] as const satisfies readonly ScopeBoundaryItem[];

const anviraPrinciples = [
  {
    title: "Shared Operating Picture",
    description:
      "Converts scattered inputs into a single, structured view for coordinating teams.",
  },
  {
    title: "Human-in-the-Loop AI",
    description:
      "Combines automated organization with human review for critical decisions.",
  },
  {
    title: "Traceable Action",
    description:
      "Ensures updates, evidence, and approvals remain auditable over time.",
  },
  {
    title: "Familiar Interface Flows",
    description:
      "Integrates with existing communication habits rather than forcing unnatural tools.",
  },
] as const satisfies readonly ContentItem[];

export const anviraProduct = {
  id: "anvira",
  slug: "anvira",
  name: "ANVIRA",
  route: "/product/anvira",
  availability: "approved",
  headline: "Operational clarity, when every detail matters.",
  tagline: "WhatsApp-first incident command for Indian trucking fleets.",
  positioning,
  summary: positioning,
  sector: "Indian trucking fleets",
  status: ["Fleet Pilot Stage", "Human Review", "Auditable Record"],
  problemSignal:
    "Critical operations rarely fail because information does not exist. They fail because it arrives scattered, incomplete, and difficult to act on. When critical information arrives from many people, in many formats, and at different moments, clarity becomes the real challenge.",
  principles: anviraPrinciples,
  scopeBoundaries: {
    does: anviraCapabilities,
    doesNot: anviraExclusions,
    statement:
      "ANVIRA supports coordination and documentation. It does not replace emergency services, police, ambulance, towing, repair, or insurance decision-making.",
  },
  ctas: [
    { label: "Discuss a Pilot", href: "/contact" },
    { label: "Contact AASIOM", href: "/contact" },
  ],
} as const satisfies ProductDetail;
