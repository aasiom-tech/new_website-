import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink } from "@/components/ButtonLink";
import { PillarCard } from "@/components/PillarCard";
import { ProductSpotlight } from "@/components/ProductSpotlight";
import { SectionLabel } from "@/components/SectionLabel";
import { WorkflowStepper } from "@/components/WorkflowStepper";
import { company } from "@/content/company";
import { homeContent } from "@/content/home";
import { anviraProduct } from "@/content/products";

export const metadata: Metadata = {
  title: company.legalName,
  description: homeContent.hero.valueProposition,
};


export default function HomePage() {
  const [primaryHeroCta, secondaryHeroCta] = homeContent.hero.ctas;
  const [primaryStrategicCta, secondaryStrategicCta] =
    homeContent.strategicReview.ctas;
  const [primaryClosingCta, secondaryClosingCta] =
    homeContent.closingCta.ctas;
  const supportingProductStatuses = anviraProduct.status.slice(1);

  return (
    <>

<section
  aria-labelledby="home-hero-title"
  className="hero-section overflow-hidden"
>
  <div className="container grid gap-7 py-8 md:py-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-8 lg:py-10">
    <div className="relative z-10 min-w-0 reveal-up">
      <SectionLabel>{homeContent.hero.eyebrow}</SectionLabel>
      <h1
        id="home-hero-title"
        className="hero-heading mt-4 max-w-[42rem]"
      >
        {homeContent.hero.headline}
      </h1>
      <p className="type-body-large mt-5 max-w-[38rem]">
        {homeContent.hero.valueProposition}
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <ButtonLink href={primaryHeroCta.href}>
          {primaryHeroCta.label}
        </ButtonLink>
        <ButtonLink href={secondaryHeroCta.href} variant="secondary">
          {secondaryHeroCta.label}
        </ButtonLink>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="h-2.5 w-2.5 shrink-0 rounded-full bg-primary shadow-[0_0_0_5px_rgb(24_183_165_/_12%)]"
        />
        <p className="type-body-small font-medium text-text-primary">
          {homeContent.hero.trustLine}
        </p>
      </div>
    </div>

    <div className="hero-visual reveal-zoom relative min-h-[19rem] sm:min-h-[25rem] lg:min-h-[30rem]">
      <div className="hero-orbit" aria-hidden="true" />
      <Image
        src="/images/aasiom-hero-collage.jpg"
        alt="AASIOM collaboration scene with ANVIRA product visuals, AI automation, cloud deployment, and code architecture."
        width={1600}
        height={900}
        priority
        className="hero-visual-image absolute inset-0 h-full w-full object-contain mix-blend-multiply"
      />
    </div>
  </div>
</section>


<section
  aria-labelledby="proof-strip-title"
  className="proof-marquee border-y border-border-on-dark bg-surface-dark"
>
  <h2 id="proof-strip-title" className="sr-only">
    {homeContent.proofStrip.heading}
  </h2>

  <div className="proof-marquee-viewport proof-marquee-compact">
    <div className="proof-marquee-track">
      {[0, 1].map((copyIndex) => (
        <div
          key={copyIndex}
          className="proof-marquee-group"
          aria-hidden={copyIndex === 1}
        >
          {homeContent.proofStrip.items.map((item) => (
            <article
              key={`${copyIndex}-${item.title}`}
              className="proof-marquee-item"
            >
              <p className="type-body-small font-semibold !text-text-on-dark">
                {item.title}
              </p>
              <p className="type-caption mt-2 !text-text-on-dark-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      ))}
    </div>
  </div>
</section>

      <section
        aria-labelledby="company-introduction-title"
        className="section-spacing"
      >
        <div className="container grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="reveal-up">
            <SectionLabel>{homeContent.companyIntroduction.eyebrow}</SectionLabel>
            <h2 id="company-introduction-title" className="mt-4">
              {homeContent.companyIntroduction.heading}
            </h2>
          </div>
          <div className="reveal-up">
            <div className="grid gap-5">
              {homeContent.companyIntroduction.paragraphs.map((paragraph) => (
                <p key={paragraph} className="type-body-large">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-7">
              <ButtonLink
                href={homeContent.companyIntroduction.cta.href}
                variant="secondary"
              >
                {homeContent.companyIntroduction.cta.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="operational-reality-title"
        className="section-spacing border-y border-border-muted bg-surface-secondary"
      >
        <div className="container">
          <div className="text-measure reveal-up">
            <SectionLabel>{homeContent.operationalReality.eyebrow}</SectionLabel>
            <h2 id="operational-reality-title" className="mt-4">
              {homeContent.operationalReality.heading}
            </h2>
            <p className="type-body-large mt-5">
              {homeContent.operationalReality.introduction}
            </p>
          </div>

          <div className="reveal-stagger mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {homeContent.operationalReality.items.map((item) => (
              <PillarCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        aria-labelledby="capabilities-title"
        className="section-spacing scroll-mt-24"
      >
        <div className="container">
          <div className="text-measure reveal-up">
            <SectionLabel>{homeContent.capabilities.eyebrow}</SectionLabel>
            <h2 id="capabilities-title" className="mt-4">
              {homeContent.capabilities.heading}
            </h2>
            <p className="type-body-large mt-5">
              {homeContent.capabilities.introduction}
            </p>
          </div>

          <div className="reveal-stagger mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {homeContent.capabilities.items.map((item) => (
              <PillarCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <div className="mt-8 reveal-up">
            <ButtonLink href={homeContent.capabilities.cta.href}>
              {homeContent.capabilities.cta.label}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="engineering-method-title"
        className="section-spacing border-y border-border-muted bg-surface-secondary"
      >
        <div className="container">
          <div className="text-measure reveal-up">
            <SectionLabel>{homeContent.engineeringMethod.eyebrow}</SectionLabel>
            <h2 id="engineering-method-title" className="mt-4">
              {homeContent.engineeringMethod.heading}
            </h2>
            <p className="type-body-large mt-5">
              {homeContent.engineeringMethod.introduction}
            </p>
          </div>

          <div className="mt-8">
            <WorkflowStepper steps={homeContent.engineeringMethod.steps} />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="product-spotlight-title"
        className="section-spacing"
      >
        <div className="container">
          <div className="reveal-up">
            <SectionLabel>{homeContent.productSpotlight.eyebrow}</SectionLabel>
          </div>
          <div className="mt-4">
            <ProductSpotlight
              name={homeContent.productSpotlight.name}
              descriptor={homeContent.productSpotlight.descriptor}
              teaser={homeContent.productSpotlight.teaser}
              status={homeContent.productSpotlight.status}
              supportingStatuses={supportingProductStatuses}
              cta={homeContent.productSpotlight.cta}
              headingLevel="h2"
              headingId="product-spotlight-title"
            />
          </div>

          <div className="reveal-stagger mt-8 grid gap-5 md:grid-cols-2">
            <div className="lift-card reveal-up rounded-lg border border-border bg-surface-secondary p-5 sm:p-6">
              <p className="type-label text-text-primary">Lifecycle</p>
              <p className="type-body-large mt-3 font-medium text-text-primary">
                {homeContent.productSpotlight.lifecycle.join(" → ")}
              </p>
            </div>
            <div className="lift-card reveal-up rounded-lg border border-border bg-surface-secondary p-5 sm:p-6">
              <p className="type-label text-text-primary">Role of AI</p>
              <p className="type-body-small mt-3">
                {homeContent.productSpotlight.aiRole}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="trust-standards-title"
        className="section-spacing border-y border-border-muted bg-surface-secondary"
      >
        <div className="container">
          <div className="text-measure reveal-up">
            <SectionLabel>{homeContent.trust.eyebrow}</SectionLabel>
            <h2 id="trust-standards-title" className="mt-4">
              {homeContent.trust.heading}
            </h2>
            <p className="type-body-large mt-5">
              {homeContent.trust.introduction}
            </p>
          </div>

          <div className="reveal-stagger mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {homeContent.trust.items.map((item) => (
              <PillarCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="ecosystem-title"
        className="section-spacing"
      >
        <div className="container">
          <div className="text-measure reveal-up">
            <SectionLabel>{homeContent.ecosystem.eyebrow}</SectionLabel>
            <h2 id="ecosystem-title" className="mt-4">
              {homeContent.ecosystem.heading}
            </h2>
            <p className="type-body-large mt-5">
              {homeContent.ecosystem.introduction}
            </p>
          </div>

          <div className="reveal-stagger mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {homeContent.ecosystem.items.map((item) => (
              <PillarCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="strategic-review-title"
        className="section-spacing border-y border-border-on-dark bg-surface-dark"
      >
        <div className="container">
          <div className="reveal-up">
            <SectionLabel>{homeContent.strategicReview.eyebrow}</SectionLabel>
            <h2
              id="strategic-review-title"
              className="mt-4 max-w-3xl !text-text-on-dark"
            >
              {homeContent.strategicReview.heading}
            </h2>
            <p className="type-body-large mt-5 max-w-3xl !text-text-on-dark">
              {homeContent.strategicReview.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={primaryStrategicCta.href}>
                {primaryStrategicCta.label}
              </ButtonLink>
              <ButtonLink href={secondaryStrategicCta.href} variant="secondary">
                {secondaryStrategicCta.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="section-spacing">
        <div className="container">
          <div className="text-measure reveal-up">
            <SectionLabel>{homeContent.faq.eyebrow}</SectionLabel>
            <h2 id="faq-title" className="mt-4">
              {homeContent.faq.heading}
            </h2>
          </div>

          <div className="mt-8 divide-y divide-border-muted border-y border-border-muted">
            {homeContent.faq.items.map((item) => (
              <details key={item.question} className="group py-5 reveal-up">
                <summary className="cursor-pointer list-none pr-8 font-semibold text-text-primary transition-colors duration-200 group-hover:text-link">
                  {item.question}
                </summary>
                <p className="type-body-small mt-3 max-w-3xl">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="closing-action-title"
        className="border-t border-border-on-dark bg-surface-dark"
      >
        <div className="container py-12 lg:py-16 reveal-up">
          <SectionLabel>{homeContent.closingCta.eyebrow}</SectionLabel>
          <h2
            id="closing-action-title"
            className="mt-4 max-w-3xl !text-text-on-dark"
          >
            {homeContent.closingCta.heading}
          </h2>
          <p className="type-body-large mt-5 max-w-3xl !text-text-on-dark">
            {homeContent.closingCta.description}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <ButtonLink href={primaryClosingCta.href}>
              {primaryClosingCta.label}
            </ButtonLink>
            <ButtonLink href={secondaryClosingCta.href} variant="secondary">
              {secondaryClosingCta.label}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
