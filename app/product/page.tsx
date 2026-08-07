import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink } from "@/components/ButtonLink";
import { ProductScrollShowcase } from "@/components/ProductScrollShowcase";
import { SectionLabel } from "@/components/SectionLabel";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: `Products | ${company.brandName}`,
  description:
    "Explore AASIOM's product approach and ANVIRA, its flagship AI-assisted operational product initiative for structured incident workflows.",
};

const productPrinciples = [
  {
    title: "AI-assisted",
    description:
      "Use AI where it improves understanding, organisation, speed, and workflow support.",
  },
  {
    title: "Human-confirmed",
    description:
      "Keep people in control of consequential reviews, approvals, and sensitive operational outputs.",
  },
  {
    title: "Evidence-aware",
    description:
      "Keep relevant information, supporting evidence, and missing context connected to the workflow.",
  },
  {
    title: "Workflow-driven",
    description:
      "Design around actions, ownership, status, and operational progression rather than isolated features.",
  },
] as const;

const lifecycle = [
  { number: "01", title: "Receive", description: "Bring operational updates into one structured flow." },
  { number: "02", title: "Verify", description: "Organise evidence and support human confirmation." },
  { number: "03", title: "Act", description: "Make actions, decisions, and ownership clearer." },
  { number: "04", title: "Track", description: "Keep status, blockers, and follow-through visible." },
  { number: "05", title: "Close", description: "Support controlled documentation and a clearer record." },
] as const;

export default function ProductPage() {
  return (
    <>
      <section className="product-page-hero" aria-labelledby="product-page-title">
        <div className="container product-page-hero__grid">
          <div className="product-page-hero__copy">
            <SectionLabel>Products by AASIOM</SectionLabel>
            <h1 id="product-page-title">
              Built for real operations. Designed for intelligent execution.
            </h1>
            <p>
              AASIOM develops focused digital products for organisations operating
              in complex, fast-moving environments. Structured workflows,
              thoughtful engineering, and AI assistance help turn fragmented work
              into clearer execution.
            </p>
            <div className="product-page-hero__actions">
              <ButtonLink href="/product/anvira">Explore ANVIRA</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Discuss a Product Opportunity
              </ButtonLink>
            </div>
          </div>

          <div className="product-page-hero__visual">
            <div className="product-page-hero__glow" aria-hidden="true" />
            <div className="product-page-hero__visual-card">
              <Image
                src="/images/product/product-hero-anvira.jpg"
                alt="ANVIRA concept preview across desktop, tablet, and mobile interfaces"
                width={1600}
                height={689}
                priority
                className="product-page-hero__visual-image"
              />
              <span className="product-concept-badge">Concept preview</span>
            </div>
            <div className="product-page-hero__visual-copy">
              <span>Product thinking</span>
              <strong>Operation → Structure → Intelligence → Action</strong>
            </div>
          </div>
        </div>
      </section>

      <ProductScrollShowcase />

      <section className="product-philosophy product-frame-section" aria-labelledby="product-philosophy-title">
        <div className="container product-frame-section__inner">
          <div className="product-section-heading">
            <SectionLabel>Product philosophy</SectionLabel>
            <h2 id="product-philosophy-title">
              Technology should fit the operation—not the other way around.
            </h2>
            <p>
              AASIOM products are shaped around how information arrives, how
              decisions are made, where accountability matters, and where
              structured digital support creates real operational value.
            </p>
          </div>

          <div className="product-principles-grid">
            {productPrinciples.map((principle, index) => (
              <article className="product-principle-card" key={principle.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-anvira product-frame-section" aria-labelledby="product-anvira-title">
        <div className="container product-anvira__grid">
          <div className="product-anvira__media">
            <div className="product-anvira__media-glow" aria-hidden="true" />
            <div className="product-anvira__image-frame">
              <Image
                src="/images/product/anvira-dashboard-preview.jpg"
                alt="ANVIRA concept preview showing an incident dashboard, evidence, workflow, and mobile interaction"
                width={1600}
                height={851}
                className="product-anvira__image"
              />
              <span className="product-concept-badge">Concept preview</span>
            </div>
          </div>

          <div className="product-anvira__copy">
            <SectionLabel>Flagship product initiative</SectionLabel>
            <div className="product-status-row">
              <span className="product-status-dot" aria-hidden="true" />
              <span>In active development</span>
            </div>
            <h2 id="product-anvira-title">
              ANVIRA turns fragmented incident updates into a structured operating picture.
            </h2>
            <p>
              ANVIRA is a WhatsApp-first, AI-assisted incident command and
              documentation platform being developed for Indian trucking fleets.
              It brings scattered updates, evidence, actions, blockers, and
              downtime context into one structured case.
            </p>
            <p className="product-anvira__ai-note">
              AI can extract, summarise, classify, identify gaps, and propose
              actions. People confirm sensitive operational values and final
              outputs.
            </p>
            <ButtonLink href="/product/anvira">Explore ANVIRA</ButtonLink>
          </div>
        </div>
      </section>

      <section className="product-lifecycle product-frame-section" aria-labelledby="product-lifecycle-title">
        <div className="container product-frame-section__inner">
          <div className="product-section-heading product-section-heading--center">
            <SectionLabel>ANVIRA lifecycle</SectionLabel>
            <h2 id="product-lifecycle-title">Receive. Verify. Act. Track. Close.</h2>
            <p>
              One structured progression from first incident input to controlled
              documentation.
            </p>
          </div>

          <div className="product-lifecycle-grid">
            {lifecycle.map((step) => (
              <article className="product-lifecycle-card" key={step.title}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-closing-cta" aria-labelledby="product-contact-title">
        <div className="container product-closing-cta__grid">
          <div>
            <p className="product-showcase-eyebrow">START A CONVERSATION</p>
            <h2 id="product-contact-title">
              Have an operational problem that deserves a more focused product?
            </h2>
            <p>
              Discuss a product opportunity, ANVIRA, or a structured operational
              challenge with AASIOM.
            </p>
          </div>
          <div className="product-closing-cta__actions">
            <ButtonLink href="/contact">Discuss a Project</ButtonLink>
            <ButtonLink href="/product/anvira" variant="secondary">
              Explore ANVIRA
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
