import type { ContentItem } from "@/types/content";

const executionWedges = [
  {
    title: "One Wedge",
    description:
      "Begin with post-incident coordination for Indian trucking fleets.",
  },
  {
    title: "One Workflow",
    description:
      "Move from driver alert to structured case file and evidence dossier.",
  },
  {
    title: "One Stage",
    description:
      "Controlled demo and pilot preparation before public launch.",
  },
  {
    title: "One Standard",
    description:
      "Build only where workflow clarity reduces confusion, delay, and loss.",
  },
] as const satisfies readonly ContentItem[];

const customerProofQuestions = [
  "Does the workflow match real incident handling under field pressure?",
  "Does one case file reduce confusion compared to calls and chats?",
  "Does evidence become easier to review for internal review and claims?",
  "Does downtime visibility improve?",
  "Will fleet teams actually use it without forcing unnatural adoption?",
] as const;

export const strategicReviewContent = {
  route: "/strategic-review",
  availability: "approved",
  headline: "AASIOM Strategic Review 2026",
  framingStatement:
    "Our positioning, the problem we are solving, what ANVIRA does and deliberately does not do, and the proof we are seeking before we scale.",
  corePrinciple: "The workflow beneath the dashboard is the product.",
  executionWedges,
  customerProofQuestions,
  dataHandlingControls:
    "Controlled access (authorized users only), purpose-limited use, timestamped audit trails, evidence integrity preservation, and privacy-aware design for Indian data protection expectations.",
} as const;
