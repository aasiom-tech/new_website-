import { company } from "@/content/company";
import { teamContent } from "@/content/team";
import type {
  ContentItem,
  CorporateFact,
  DirectorMessage,
} from "@/types/content";

const operatingPrinciples = [
  {
    title: "Problem-First Innovation",
    description:
      "The company begins with operational reality, not fashionable technology.",
  },
  {
    title: "Human-Controlled AI",
    description:
      "AI assists analysis and organization while important decisions remain reviewable by people.",
  },
  {
    title: "Structured Product Development",
    description:
      "Requirements, workflows, architecture, testing, and approvals are treated as core work.",
  },
  {
    title: "Domain Depth",
    description:
      "The company aims to deeply understand the environment in which a product will be used.",
  },
  {
    title: "Accountable Systems",
    description:
      "Actions, evidence, approvals, and changes should be traceable.",
  },
  {
    title: "Selective Ambition",
    description:
      "AASIOM pursues focused, meaningful opportunities rather than presenting itself as doing everything.",
  },
] as const satisfies readonly ContentItem[];

const directorMessage = {
  quote:
    "AASIOM's work is focused on understanding where operational coordination breaks down inside complex transport and real-world workflows. We are not starting with a large platform promise. We are starting with one workflow, one industry, and one measurable problem. The goal is simple: help organizations convert scattered information into one clear, usable operating picture.",
  attribution: company.director,
} as const satisfies DirectorMessage;

const corporateFacts = [
  {
    label: "Incorporation Status",
    value: "Registered Private Limited Company",
  },
  { label: "Headquarters", value: company.headquarters },
  { label: "Focus Sector", value: "Transport & Logistics Operations" },
  {
    label: "Long-Term Ambition",
    value:
      "To become a respected product-building company known for solving difficult operational problems through thoughtful software, proprietary product initiatives, strategic technology partnerships, and a disciplined engineering organization.",
  },
] as const satisfies readonly CorporateFact[];

export const aboutContent = {
  route: "/about",
  availability: "partial",
  title: "About",
  primaryLine:
    `${company.legalName} builds focused, human-controlled technology products for complex operational environments.`,
  vision:
    "To build trusted digital systems that help organizations operate with greater clarity, speed, coordination, and human control.",
  mission:
    "To identify important operational problems, understand them deeply, and build focused software products that organize information, guide action, and create accountable outcomes.",
  expandedDescription:
    "We are an emerging technology and product company focused on transforming fragmented, high-pressure, and information-heavy operations into clear digital workflows. We combine domain research, software engineering, responsible AI, and human judgment to build systems that improve visibility, coordination, and accountability.",
  operatingPrinciples,
  directorMessage,
  corporateFacts,
  team: teamContent,
} as const;
