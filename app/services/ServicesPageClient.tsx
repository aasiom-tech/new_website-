"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import styles from "./services.module.css";

type IconName =
  | "scope"
  | "delivery"
  | "ai"
  | "support"
  | "web"
  | "app"
  | "software"
  | "automation"
  | "design"
  | "backend"
  | "maintenance"
  | "discovery"
  | "arrow"
  | "check";

function Icon({ name }: { name: IconName }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "scope":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="6" {...common} />
          <path d="m15.5 15.5 4.5 4.5M8 11h6M11 8v6" {...common} />
        </svg>
      );
    case "delivery":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 5h16v14H4zM8 9h8M8 13h5" {...common} />
          <path d="m15 16 1.5 1.5L20 14" {...common} />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4" {...common} />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" {...common} />
        </svg>
      );
    case "support":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 14v-2a8 8 0 0 1 16 0v2" {...common} />
          <path d="M4 14h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 1-2ZM20 14h-3v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-1-2ZM17 20c-1 1-2.7 1.5-5 1.5" {...common} />
        </svg>
      );
    case "web":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2" {...common} />
          <path d="M3 9h18M7 6.5h.01M10 6.5h.01" {...common} />
        </svg>
      );
    case "app":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2" {...common} />
          <path d="M7 8h4M7 12h10M7 16h7" {...common} />
        </svg>
      );
    case "software":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" {...common} />
        </svg>
      );
    case "automation":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 7h8M16 7h4M7 4v6M4 17h4M12 17h8M15 14v6" {...common} />
        </svg>
      );
    case "design":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 20 8 8l8-4 4 4-4 8-12 4Z" {...common} />
          <path d="m12 8 4 4M8 16l-4 4" {...common} />
        </svg>
      );
    case "backend":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <ellipse cx="12" cy="5" rx="7" ry="3" {...common} />
          <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" {...common} />
        </svg>
      );
    case "maintenance":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 6a5 5 0 0 0-6.5 6.5L3 17l4 4 4.5-4.5A5 5 0 0 0 18 10l-3 3-4-4 3-3Z" {...common} />
        </svg>
      );
    case "discovery":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10" cy="10" r="6" {...common} />
          <path d="m14.5 14.5 5 5M10 7v6M7 10h6" {...common} />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" {...common} />
          <path d="m8 12 2.5 2.5L16 9" {...common} />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12h14M14 7l5 5-5 5" {...common} />
        </svg>
      );
  }
}

const trustItems = [
  {
    icon: "scope" as IconName,
    title: "Clear Scope",
    text: "Requirements and deliverables defined before build.",
  },
  {
    icon: "delivery" as IconName,
    title: "End-to-End Delivery",
    text: "From discovery and design through launch and handoff.",
  },
  {
    icon: "ai" as IconName,
    title: "Responsible AI",
    text: "AI where useful, with human review where decisions matter.",
  },
  {
    icon: "support" as IconName,
    title: "Support After Launch",
    text: "Fixes, improvements and iteration after release.",
  },
];

const featuredServices = [
  {
    number: "01",
    title: "Website Design & Development",
    description:
      "Responsive, polished websites for companies, services, campaigns and growing brands.",
    image: "/images/services/service-website-development.png",
    tone: "dark",
    icon: "web" as IconName,
    tags: ["Corporate Websites", "Landing Pages", "Responsive UI", "SEO Structure"],
  },
  {
    number: "02",
    title: "Web Applications & Dashboards",
    description:
      "Business dashboards, admin panels, portals and internal tools that turn scattered information into structured workflows.",
    image: "/images/services/service-web-applications-dashboard.png",
    tone: "light",
    icon: "app" as IconName,
    tags: ["Dashboards", "Admin Panels", "Portals", "Internal Tools"],
  },
  {
    number: "03",
    title: "Custom Software & MVP Development",
    description:
      "Focused product builds for founders and teams ready to turn a validated idea or workflow into usable software.",
    image: "/images/services/service-custom-software-mvp.png",
    tone: "light",
    icon: "software" as IconName,
    tags: ["MVP Development", "Custom Platforms", "APIs", "Product Engineering"],
  },
  {
    number: "04",
    title: "AI Integration & Automation",
    description:
      "Practical AI features and workflow automation that reduce repetitive work and make information easier to act on.",
    image: "/images/services/service-ai-automation.png",
    tone: "dark",
    icon: "automation" as IconName,
    tags: ["AI Assistants", "Automation", "Extraction", "Classification"],
  },
];

const moreServices = [
  {
    number: "05",
    title: "UI/UX & Product Design",
    text: "User journeys, wireframes, prototypes and responsive interface systems.",
    icon: "design" as IconName,
  },
  {
    number: "06",
    title: "Backend, API & Database Engineering",
    text: "Secure server-side foundations, integrations, access control and data handling.",
    icon: "backend" as IconName,
  },
  {
    number: "07",
    title: "Maintenance, Optimisation & Support",
    text: "Post-launch fixes, updates, performance improvements and feature additions.",
    icon: "maintenance" as IconName,
  },
  {
    number: "08",
    title: "Product Discovery & Technical Documentation",
    text: "Research, requirements, feature priorities, architecture and implementation planning.",
    icon: "discovery" as IconName,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    text: "Understand the business, users, workflow and desired outcome.",
  },
  {
    number: "02",
    title: "Define & Design",
    text: "Clarify scope, priorities, user flows and interface direction.",
  },
  {
    number: "03",
    title: "Build & Validate",
    text: "Implement the agreed solution, test it and iterate against the scope.",
  },
  {
    number: "04",
    title: "Launch & Support",
    text: "Deploy, document, hand over and improve after real-world use.",
  },
];

const audiences = [
  {
    title: "Startups",
    text: "MVPs, product prototypes and focused technical execution for early-stage ideas.",
    image: "/images/services/audience-startups.png",
  },
  {
    title: "SMEs",
    text: "Websites, software and automation that streamline everyday operations.",
    image: "/images/services/audience-smbs.png",
  },
  {
    title: "Enterprises",
    text: "Structured platforms, dashboards and integrations for more complex workflows.",
    image: "/images/services/audience-enterprises.png",
  },
  {
    title: "Agencies & Partners",
    text: "Reliable engineering support for client projects and specialised technology work.",
    image: "/images/services/audience-agencies-partners.png",
  },
];

const expectations = [
  "Clear project scope",
  "Milestone visibility",
  "Quality & security focus",
  "Documented handoff",
];

export default function ServicesPageClient() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-services-reveal]")
    );

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add(styles.revealed));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(styles.revealed);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -5% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>OUR SERVICES</p>
          <h1>Digital products built for what&apos;s next.</h1>
          <p className={styles.heroLead}>
            AASIOM designs and builds websites, web applications, dashboards,
            custom software and AI-enabled workflows for businesses that need
            practical technology execution.
          </p>

          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryButton}>
              Discuss a Project <span aria-hidden="true">→</span>
            </Link>
            <a href="#services" className={styles.secondaryButton}>
              Explore Services
            </a>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroImageFrame}>
            <Image
              src="/images/services/hero-main-product-visual.png"
              alt="AASIOM digital product engineering visual showing dashboards, mobile interfaces and software development"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 58vw"
            />
            <div className={styles.heroImageLabel}>
              <span>AASIOM DELIVERY</span>
              <strong>Design · Engineering · Automation</strong>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.trustStrip} aria-label="How AASIOM delivers">
        {trustItems.map((item) => (
          <article key={item.title}>
            <div className={styles.trustIcon}><Icon name={item.icon} /></div>
            <div>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
          </article>
        ))}
      </section>

      <nav className={styles.serviceTabs} aria-label="Service categories">
        <a href="#services" className={styles.tabActive}>All Services</a>
        <a href="#service-01">Web Development</a>
        <a href="#service-02">Web Applications</a>
        <a href="#service-03">Custom Software</a>
        <a href="#service-04">AI & Automation</a>
        <a href="#more-services">Support & Growth</a>
      </nav>

      <section className={styles.servicesSection} id="services">
        <header
          className={styles.sectionHeader}
          data-services-reveal
        >
          <p className={styles.eyebrow}>OUR SERVICES</p>
          <h2>Expertise that moves business forward.</h2>
          <p>
            Focused service engagements with clear scope, practical engineering
            and deliverables shaped around the problem you need to solve.
          </p>
        </header>

        <div className={styles.serviceGrid}>
          {featuredServices.map((service) => (
            <article
              className={`${styles.serviceCard} ${
                service.tone === "dark" ? styles.serviceCardDark : styles.serviceCardLight
              }`}
              id={`service-${service.number}`}
              key={service.number}
              data-services-reveal
            >
              <div className={styles.serviceCardCopy}>
                <div className={styles.serviceIcon}>
                  <Icon name={service.icon} />
                </div>
                <span className={styles.serviceNumber}>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className={styles.serviceTags}>
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 760px) 100vw, 40vw"
                />
              </div>
            </article>
          ))}
        </div>

        <div className={styles.moreServices} id="more-services">
          {moreServices.map((service) => (
            <article key={service.number} data-services-reveal>
              <div className={styles.moreServiceTop}>
                <span>{service.number}</span>
                <div><Icon name={service.icon} /></div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link href="/contact">
                Discuss this service <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.featuredWork} data-services-reveal>
        <div className={styles.featuredCopy}>
          <p className={styles.darkEyebrow}>PRODUCT ENGINEERING EXAMPLE</p>
          <h2>ANVIRA is being developed for structured incident response on Mumbai&apos;s Western Express Highway.</h2>
          <p>
            ANVIRA is AASIOM&apos;s flagship product in active development. Its current
            development scope is focused on the Western Express Highway (WEH) use case,
            where incident information such as voice notes, location and evidence can be
            organised into a structured case for human review and follow-up.
          </p>

          <div className={styles.featuredPillRow}>
            <span>In Active Development</span>
            <span>WEH-Focused Scope</span>
            <span>Human-Confirmed Workflow</span>
          </div>

          <Link href="/product" className={styles.featuredLink}>
            View Product <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={styles.featuredImage}>
          <Image
            src="/images/services/anvira-structured-preview.jpg"
            alt="ANVIRA structured workflow concept showing how voice notes, messages, files and evidence move into a reviewed operational case"
            fill
            sizes="(max-width: 900px) 100vw, 58vw"
          />
          <span className={styles.conceptBadge}>Structured workflow concept</span>
        </div>
      </section>

      <section className={styles.processSection} data-services-reveal>
        <header>
          <p className={styles.eyebrow}>OUR PROCESS</p>
          <h2>A clear process. Defined at every step.</h2>
        </header>

        <div className={styles.processGrid}>
          {processSteps.map((step) => (
            <article key={step.number}>
              <div className={styles.processNumber}>{step.number}</div>
              <div className={styles.processLine} aria-hidden="true"><span /></div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.audienceSection} data-services-reveal>
        <header>
          <p className={styles.eyebrow}>BUILT FOR</p>
          <h2>Technology execution for different stages of growth.</h2>
        </header>

        <div className={styles.audienceGrid}>
          {audiences.map((audience) => (
            <article key={audience.title}>
              <div className={styles.audienceImage}>
                <Image
                  src={audience.image}
                  alt=""
                  fill
                  sizes="(max-width: 760px) 100vw, 25vw"
                />
              </div>
              <div className={styles.audienceCopy}>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
                <Link href="/contact">
                  Start a conversation <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.expectations} data-services-reveal>
        <div className={styles.expectationsIntro}>
          <p className={styles.darkEyebrow}>WORKING WITH AASIOM</p>
          <h2>Professional delivery without inflated promises.</h2>
          <p>
            The focus is straightforward: define the problem clearly, build the
            agreed solution well, keep decisions visible and hand over work responsibly.
          </p>
        </div>

        <div className={styles.expectationGrid}>
          {expectations.map((item) => (
            <article key={item}>
              <div><Icon name="check" /></div>
              <strong>{item}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.finalCta} data-services-reveal>
        <div className={styles.ctaOrb} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div>
          <p className={styles.darkEyebrow}>START A PROJECT</p>
          <h2>Let&apos;s turn your next idea into something useful.</h2>
        </div>

        <div className={styles.finalCtaActions}>
          <Link href="/contact" className={styles.primaryButton}>
            Discuss a Project <span aria-hidden="true">→</span>
          </Link>
          <a href="#services" className={styles.ctaSecondaryButton}>
            Explore Services
          </a>
        </div>
      </section>
    </main>
  );
}
