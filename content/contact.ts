import { company } from "@/content/company";
import type {
  ContactOption,
  FormFieldDefinition,
  FormFieldOption,
  PendingContentSection,
  StakeholderCategory,
} from "@/types/content";

const inquiryCategories = [
  {
    value: "business-or-technology-problem",
    label: "Business or technology problem inquiry",
  },
  {
    value: "anvira-pilot-or-industry",
    label: "ANVIRA pilot or industry discussion",
  },
  { value: "investment", label: "Investment conversation" },
  {
    value: "strategic-or-technology-partnership",
    label: "Strategic or technology partnership",
  },
  {
    value: "advisory-or-mentorship",
    label: "Advisory or mentorship support",
  },
  {
    value: "careers-internships-or-collaboration",
    label: "Careers, internships, or collaboration",
  },
  { value: "media-or-general", label: "Media or general inquiry" },
] as const satisfies readonly FormFieldOption[];

const contactFormFields = [
  {
    id: "full-name",
    name: "fullName",
    label: "Full Name",
    type: "text",
    required: true,
  },
  {
    id: "work-email",
    name: "workEmail",
    label: "Work Email",
    type: "email",
    required: true,
  },
  {
    id: "phone-number",
    name: "phoneNumber",
    label: "Phone Number",
    type: "tel",
    required: true,
  },
  {
    id: "organization",
    name: "organization",
    label: "Organization / Company",
    type: "text",
    required: true,
  },
  {
    id: "job-title",
    name: "jobTitle",
    label: "Job Title / Role",
    type: "text",
    required: true,
  },
  {
    id: "inquiry-category",
    name: "inquiryCategory",
    label: "Inquiry Category",
    type: "select",
    required: true,
    options: inquiryCategories,
  },
  {
    id: "fleet-size",
    name: "fleetSize",
    label: "Fleet Size / Number of Trucks",
    type: "text",
    required: false,
  },
  {
    id: "message-description",
    name: "messageDescription",
    label: "Message Description",
    type: "textarea",
    required: true,
  },
] as const satisfies readonly FormFieldDefinition[];

const stakeholderCategories = [
  {
    id: "prospective-clients",
    title: "Prospective Clients",
    description: "Bring us a meaningful operational or workflow problem.",
  },
  {
    id: "investors",
    title: "Investors",
    description:
      "Discussions regarding company direction, product vision, and long-term capability.",
  },
  {
    id: "industry-partners",
    title: "Industry Partners",
    description:
      "Collaborations on pilot opportunities, domain validation, and strategic integration.",
  },
  {
    id: "advisors-and-mentors",
    title: "Advisors & Mentors",
    description:
      "Guidance in enterprise technology, logistics domain depth, legal, and product strategy.",
  },
  {
    id: "talent-and-contributors",
    title: "Talent & Contributors",
    description:
      "Opportunity for engineers, researchers, and designers to build disciplined products.",
  },
] as const satisfies readonly StakeholderCategory[];

const contactOptions = [
  {
    id: "email",
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    id: "phone",
    label: "Phone",
    value: company.phone.display,
    href: company.phone.href,
  },
] as const satisfies readonly ContactOption[];

const whatHappensNext = {
  availability: "pending-approved-content",
  items: [],
} as const satisfies PendingContentSection;

export const contactContent = {
  route: "/contact",
  availability: "partial",
  title: "Contact",
  headline: "Start a Pilot Conversation — Discuss an ANVIRA Demo or Pilot",
  targetAudience:
    "Fleet owners and transport operators first. Everyone else second.",
  guidance:
    "Share your fleet size, operating routes, incident-handling process, and where coordination breaks down after driver alerts, vehicle damage, cargo disruption, or claim documentation gaps.",
  stakeholderCategories,
  form: {
    fields: contactFormFields,
    inquiryCategories,
    submitLabel: null,
    confirmationLabel: null,
  },
  directContact: contactOptions,
  headquarters: company.headquarters,
  registeredOffice: company.registeredOffice,
  whatHappensNext,
} as const;
