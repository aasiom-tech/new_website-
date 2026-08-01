import type { LegalPageContent } from "@/types/content";

export const termsOfUseContent = {
  route: "/terms-of-use",
  availability: "pending-legal-review",
  title: "Terms of Use",
  sections: [
    {
      heading: "Pending legal review",
      paragraphs: ["Terms of Use content is pending approved legal review."],
    },
  ],
} as const satisfies LegalPageContent;
