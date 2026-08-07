import { company } from "@/content/company";
import { leadershipMembers, researchTeamMembers } from "@/content/team";
import type { CorporateFact } from "@/types/content";

export const aboutStoryPanels = [
  {
    id: "company",
    number: "01",
    label: "Who We Are",
    eyebrow: "WHO WE ARE",
    title: "A technology partner for practical digital work.",
    description:
      "AASIOM Technologies Private Limited is a Mumbai-based technology and product engineering company. We work with businesses, founders and teams to design and build websites, web applications, dashboards, automation, AI-enabled tools and custom software.",
    image: "/images/about/about-client-services.jpg",
    imageAlt: "Technology services collaboration for software, web and automation projects",
    highlights: ["Client focused", "End to end", "Quality first", "Measurable value"],
  },
  {
    id: "mission",
    number: "02",
    label: "Our Mission",
    eyebrow: "OUR MISSION",
    title: "Turn business requirements into clear, usable digital systems.",
    description:
      "Our mission is to help clients move from an idea, manual process or existing system to a focused digital solution through structured discovery, design, engineering, automation, deployment and support.",
    image: "/images/about/about-ai-automation.jpg",
    imageAlt: "AI, automation and digital solution capabilities",
    highlights: ["Understand", "Design", "Build", "Support"],
  },
  {
    id: "vision",
    number: "03",
    label: "Our Vision",
    eyebrow: "OUR VISION",
    title: "Build a trusted services practice with deeper product capability.",
    description:
      "AASIOM aims to become a dependable technology partner for cross-industry digital work while continuing to strengthen the research, architecture and engineering discipline required to create selected proprietary products.",
    image: "/images/about/about-product-engineering.jpg",
    imageAlt: "Product engineering and software delivery workflow",
    highlights: ["Services", "Engineering", "Research", "Products"],
  },
  {
    id: "principles",
    number: "04",
    label: "Our Principles",
    eyebrow: "OUR PRINCIPLES",
    title: "Clear scope. Practical engineering. Responsible delivery.",
    description:
      "We begin with the problem and intended outcome, keep decisions visible, choose technology for a reason, and treat usability, security, testing and maintainability as part of the build from the start.",
    image: "/images/about/about-principles.jpg",
    imageAlt: "Security and accountable system design concept",
    highlights: ["Problem first", "Human aware", "Maintainable", "Accountable"],
  },
  {
    id: "direction",
    number: "05",
    label: "Our Direction",
    eyebrow: "OUR DIRECTION",
    title: "Useful to clients today. Building deeper product ambition for tomorrow.",
    description:
      "Client technology services are the immediate commercial focus. Alongside delivery work, AASIOM selectively develops proprietary initiatives such as ANVIRA to deepen its product, research and engineering capability.",
    image: "/images/about/about-client-services.jpg",
    imageAlt: "AASIOM client services and product engineering direction",
    highlights: ["Client services", "Product R&D", "Long-term capability", "Mumbai"],
  },
] as const;

const corporateFacts = [
  { label: "Company", value: "Registered Private Limited Company" },
  { label: "Headquarters", value: company.headquarters },
  { label: "Service Focus", value: "Cross-industry digital solutions" },
  { label: "Product / Domain Experience", value: "Transport & Logistics" },
  { label: "Business Model", value: "Client Services + Selected Proprietary Products" },
] as const satisfies readonly CorporateFact[];

export const aboutContent = {
  route: "/about",
  availability: "approved",
  title: "About AASIOM",
  primaryLine:
    "AASIOM is a technology and product engineering company delivering client solutions while building selected proprietary products.",
  expandedDescription:
    "We work with businesses, founders and teams to design and build websites, web applications, dashboards, workflow automation, AI-enabled tools and custom software. Alongside client delivery, AASIOM also develops selected proprietary product initiatives such as ANVIRA.",
  corporateFacts,
  leadership: leadershipMembers,
  researchTeam: researchTeamMembers,
} as const;
