import type { TeamMember } from "@/types/content";

export const leadershipMembers = [
  { id: "om-vinayak-muchandikar", name: "Om Vinayak Muchandikar", role: "Director" },
  { id: "siddhi-prashant-sapkale", name: "Siddhi Prashant Sapkale", role: "Director" },
  { id: "aditya-prashant-sapkale", name: "Aditya Prashant Sapkale", role: "Director" },
  { id: "pradnya-gaikwad", name: "Pradnya Gaikwad", role: "CMO" },
  { id: "tejas-pawar", name: "Tejas Pawar", role: "CTO" },
] as const satisfies readonly TeamMember[];

export const researchTeamMembers = [
  {
    id: "nooruzma-maizuddin-khan",
    name: "Nooruzma Maizuddin Khan",
    role: "Research & Strategy",
    description:
      "Conducts market research, competitor analysis, and strategic insights to support product and business decisions.",
  },
  {
    id: "priya-avinash-patil",
    name: "Priya Avinash Patil",
    role: "UI/UX Design",
    description:
      "Designs intuitive and user-centric interfaces to deliver a seamless and engaging user experience.",
  },
  {
    id: "pranali-tukaram-mundole",
    name: "Pranali Tukaram Mundole",
    role: "Frontend Development",
    description:
      "Builds responsive and interactive user interfaces, ensuring a smooth and reliable web experience.",
  },
  {
    id: "saurav-kamlesh-nirban",
    name: "Saurav Kamlesh Nirban",
    role: "Product Research",
    description:
      "Researches user needs, validates product ideas, and helps translate insights into practical product features.",
  },
  {
    id: "qusai-murtaza-hariyanawala",
    name: "Qusai Murtaza Hariyanawala",
    role: "Backend Development",
    description:
      "Develops secure and scalable backend systems that support application functionality and data management.",
  },
] as const satisfies readonly TeamMember[];

export const teamContent = {
  availability: "approved",
  members: [...leadershipMembers, ...researchTeamMembers],
} as const;
