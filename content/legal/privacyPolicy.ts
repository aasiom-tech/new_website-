import type { LegalPageContent } from "@/types/content";

export const privacyPolicyContent = {
  route: "/privacy-policy",
  availability: "pending-legal-review",
  title: "Privacy Policy",
  sections: [
    {
      heading: "Pending legal review",
      paragraphs: [
        "Privacy Policy content is pending approved legal review.",
      ],
    },
  ],
} as const satisfies LegalPageContent;
