import type { Metadata } from "next";
import productHeroSize from "./product-hero-size.module.css";
import Image from "next/image";

import { ButtonLink } from "@/components/ButtonLink";
import { ProductScrollShowcase } from "@/components/ProductScrollShowcase";
import { SectionLabel } from "@/components/SectionLabel";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: `Products | ${company.brandName}`,
  description:
    "Explore AASIOM's product portfolio, product-building philosophy, and ANVIRA, its current flagship AI-assisted operational product initiative.",
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

const anviraTraits = [
  "WhatsApp-first",
  "AI-assisted",
  "Human-confirmed",
  "Evidence-aware",
] as const;

export default function ProductPage() {
  return (
    <>
      <section className="product-page-hero" aria-labelledby="product-page-title">
        <div className="container product-page-hero__grid">
          <div className="product-page-hero__copy">
            <SectionLabel>AASIOM Products</SectionLabel>
            <h1 id="product-page-title" className={productHeroSize.heroTitle}>
              Focused products for complex operational problems.
            </h1>
            <p>
              AASIOM creates proprietary digital products for environments where
              information is fragmented, decisions are delayed, and accountability
              is difficult to maintain. Each product is shaped around a defined
              operational problem, structured workflows, responsible AI assistance,
              and long-term product thinking.
            </p>
            <div className="product-page-hero__actions">
              <ButtonLink href="#current-product">View Current Product</ButtonLink>
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
                alt="AASIOM flagship product concept shown across desktop, tablet, and mobile interfaces"
                width={1600}
                height={900}
                priority
                className="product-page-hero__visual-image"
              />
              <span className="product-concept-badge">Flagship product preview</span>
            </div>
            <div className="product-page-hero__visual-copy">
              <span>AASIOM product discipline</span>
              <strong>Problem → Structure → Intelligence → Execution</strong>
            </div>
          </div>
        </div>
      </section>

      <ProductScrollShowcase />

      <section
        className="product-philosophy product-frame-section"
        aria-labelledby="product-philosophy-title"
      >
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

      <section
        id="current-product"
        className="product-anvira product-frame-section scroll-mt-24"
        aria-labelledby="current-product-title"
      >
        <div className="container product-anvira__grid">
          <div className="product-anvira__media">
            <div className="product-anvira__media-glow" aria-hidden="true" />
            <div className="product-anvira__image-frame">
              <Image
                src="/images/product/anvira-dashboard-preview.jpg"
                alt="ANVIRA concept preview showing structured incident information, evidence, workflow, and mobile interaction"
                width={1600}
                height={851}
                className="product-anvira__image"
              />
              <span className="product-concept-badge">Concept preview</span>
            </div>
          </div>

          <div className="product-anvira__copy">
            <SectionLabel>Current product portfolio</SectionLabel>
            <div className="product-status-row">
              <span className="product-status-dot" aria-hidden="true" />
              <span>Flagship product · In active development</span>
            </div>
            <h2 id="current-product-title">ANVIRA</h2>
            <p>
              ANVIRA is AASIOM&apos;s flagship product initiative: a WhatsApp-first,
              AI-assisted incident command and documentation platform being
              developed for Indian trucking fleets.
            </p>
            <p>
              It is designed to turn scattered incident updates—calls, chats,
              photos, voice notes, documents, and location context—into a more
              structured case with clearer evidence, ownership, actions, blockers,
              and operational visibility.
            </p>

            <div className="mt-5 flex flex-wrap gap-2" aria-label="ANVIRA product traits">
              {anviraTraits.map((trait) => (
                <span
                  key={trait}
                  className="rounded-full border border-[rgb(24_183_165_/_24%)] bg-[rgb(24_183_165_/_8%)] px-3 py-1.5 text-sm font-semibold text-[#0b6f67]"
                >
                  {trait}
                </span>
              ))}
            </div>

            <p className="product-anvira__ai-note">
              AI can assist with extraction, summarisation, classification, gap
              identification, and proposed actions. People remain responsible for
              confirming sensitive operational values and final outputs.
            </p>
            <ButtonLink href="/contact">Discuss ANVIRA</ButtonLink>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="portfolio-direction-title"
        className="border-t border-border-muted bg-white"
      >
        <div className="container grid gap-8 py-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16 lg:py-16">
          <div>
            <SectionLabel>Portfolio direction</SectionLabel>
            <h2 id="portfolio-direction-title" className="mt-4 max-w-xl">
              One flagship today. A portfolio designed to grow deliberately.
            </h2>
          </div>
          <div className="max-w-3xl">
            <p className="type-body-large">
              ANVIRA is the current flagship product presented publicly by AASIOM.
              Additional product initiatives will be added to this portfolio only
              after they are formally approved and have enough verified product
              definition to present responsibly.
            </p>
            <p className="type-body-small mt-4">
              This keeps the product portfolio focused on real, defined initiatives
              rather than placeholder concepts or empty future-product cards.
            </p>
          </div>
        </div>
      </section>

      <section className="product-closing-cta" aria-labelledby="product-contact-title">
        <div className="container product-closing-cta__grid">
          <div>
            <p className="product-showcase-eyebrow">BUILD WITH AASIOM</p>
            <h2 id="product-contact-title">
              Have an operational problem that deserves a focused product?
            </h2>
            <p>
              Discuss a product opportunity, technology partnership, or structured
              operational challenge with AASIOM.
            </p>
          </div>
          <div className="product-closing-cta__actions">
            <ButtonLink href="/contact">Discuss a Product Opportunity</ButtonLink>
            <ButtonLink href="/strategic-review" variant="secondary">
              Strategic Review
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
