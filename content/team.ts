import type { TeamMember } from "@/types/content";

const teamMembers = [] as const satisfies readonly TeamMember[];

export const teamContent = {
  availability: "pending-approved-content",
  members: teamMembers,
} as const;
