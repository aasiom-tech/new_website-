export const servicesContent = {
  route: "/services",
  availability: "approved",
  hero: {
    eyebrow: "CLIENT SERVICES",
    headline: "Technology services from idea to working digital product.",
    description:
      "AASIOM provides focused design, engineering and automation services for businesses that need a reliable digital solution without unnecessary technical complexity.",
    primaryCta: { label: "Start a Project", href: "/contact" },
    secondaryCta: { label: "View Service Areas", href: "#service-catalog" },
    capabilityStrip: [
      "Websites",
      "Web Apps",
      "Dashboards",
      "Automation",
      "AI Integration",
      "UI/UX",
    ],
  },
  services: [
    {
      number: "01",
      title: "Website Design & Development",
      summary:
        "Corporate websites, service websites, landing pages, portfolio sites, campaign pages and responsive redesigns.",
      bestFor:
        "Businesses, professionals and growing brands that need a polished, credible web presence.",
      deliverables: [
        "Responsive interface",
        "CMS or static implementation",
        "Forms and analytics setup",
        "Basic SEO structure",
        "Deployment",
      ],
    },
    {
      number: "02",
      title: "Web Applications & Dashboards",
      summary:
        "Business dashboards, admin panels, customer portals, internal tools and management systems.",
      bestFor:
        "Teams replacing spreadsheets, scattered tools or manual status tracking with a structured interface.",
      deliverables: [
        "Authentication and roles",
        "Data views and forms",
        "Status tracking",
        "Reports and exports",
        "Workflow interfaces",
      ],
    },
    {
      number: "03",
      title: "Custom Software & MVP Development",
      summary:
        "Early-stage product builds and digitisation of business processes into usable software.",
      bestFor:
        "Founders and teams with a validated idea, workflow or requirement that is ready to become a working product.",
      deliverables: [
        "Requirements and architecture",
        "Core product features",
        "Database",
        "Frontend and backend",
        "Testing and launch",
      ],
    },
    {
      number: "04",
      title: "AI Integration & Automation",
      summary:
        "Practical AI features and workflow automation where they create useful operational value.",
      bestFor:
        "Teams dealing with repetitive information work, document handling, classification or multi-step manual processes.",
      deliverables: [
        "AI assistants",
        "Extraction and summarisation",
        "Classification workflows",
        "Document automation",
        "Automation connections",
      ],
    },
    {
      number: "05",
      title: "UI/UX & Product Design",
      summary:
        "Clear, responsive interfaces for web and application experiences designed around real users.",
      bestFor:
        "Products that need clearer user journeys, stronger information hierarchy or a more consistent interface system.",
      deliverables: [
        "User journeys",
        "Wireframes",
        "Prototypes",
        "Component systems",
        "Responsive states",
      ],
    },
    {
      number: "06",
      title: "Backend, API & Database Engineering",
      summary:
        "Reliable server-side foundations for digital products, integrations and business logic.",
      bestFor:
        "Applications that need secure data handling, APIs, access control or integrations with other systems.",
      deliverables: [
        "APIs and databases",
        "Business logic",
        "System integrations",
        "Access controls",
        "Deployment architecture",
      ],
    },
    {
      number: "07",
      title: "Maintenance, Optimisation & Support",
      summary:
        "Ongoing technical support and iterative improvement after a product or website goes live.",
      bestFor:
        "Teams that need reliable post-launch fixes, updates and improvement without rebuilding from scratch.",
      deliverables: [
        "Bug fixes",
        "Content updates",
        "Performance improvements",
        "Feature additions",
        "Monitoring coordination",
      ],
    },
    {
      number: "08",
      title: "Product Discovery & Technical Documentation",
      summary:
        "Structured planning before expensive development begins, reducing ambiguity before implementation.",
      bestFor:
        "Teams with an idea or operational problem that needs to be clarified before committing to a full build.",
      deliverables: [
        "Research and requirements",
        "Feature prioritisation",
        "User flows",
        "Technical architecture",
        "Implementation roadmap",
      ],
    },
  ],
  engagementModels: [
    {
      title: "Fixed Scope Project",
      description:
        "For clear requirements: defined deliverables, milestones, timeline and acceptance criteria for one project.",
    },
    {
      title: "Milestone-Based Build",
      description:
        "For larger projects: discovery, design, build and launch separated into controlled phases.",
    },
    {
      title: "Monthly Technology Support",
      description:
        "For ongoing needs: reserved capacity for maintenance, features, analytics, optimisation and support.",
    },
    {
      title: "Discovery / Technical Planning",
      description:
        "For ideas not yet ready to build: research, requirements, architecture, scope and implementation roadmap.",
    },
  ],
  process: [
    {
      number: "01",
      title: "Discover",
      description:
        "Understand the business, users, process and desired outcome.",
    },
    {
      number: "02",
      title: "Define",
      description:
        "Freeze scope, features, roles, timeline and success criteria.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Create information architecture, user flows and interface direction.",
    },
    {
      number: "04",
      title: "Build",
      description:
        "Implement the agreed product in controlled phases.",
    },
    {
      number: "05",
      title: "Validate",
      description:
        "Test responsiveness, functionality, data handling and usability.",
    },
    {
      number: "06",
      title: "Launch & Support",
      description:
        "Deploy, document and improve after real-world use.",
    },
  ],
  audiences: [
    "Startups building an MVP or product prototype",
    "SMEs digitising manual operations",
    "Local businesses needing professional websites or digital systems",
    "Founders who need dashboards, admin systems or automation",
  ],
  closing: {
    eyebrow: "START A PROJECT",
    headline: "Have a website, app, dashboard or workflow to build?",
    description:
      "Tell us the problem. We will help define the scope, technical approach and next step.",
    cta: { label: "Discuss Your Project", href: "/contact" },
  },
} as const;
