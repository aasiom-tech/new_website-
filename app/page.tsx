import type { Metadata } from "next";

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
  const [primaryClosingCta, secondaryClosingCta] =
    homeContent.closingCta.ctas;
  const supportingProductStatuses = anviraProduct.status.slice(1);

  return (
    <>
      <section aria-labelledby="home-hero-title" className="overflow-hidden">
        <div className="container grid gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)] lg:items-center lg:gap-14 lg:py-20">
          <div className="min-w-0">
            <SectionLabel>{company.legalName}</SectionLabel>
            <h1 id="home-hero-title" className="mt-5 max-w-4xl">
              {homeContent.hero.headline}
            </h1>
            <p className="type-body-large mt-6 max-w-2xl">
              {homeContent.hero.valueProposition}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink href={primaryHeroCta.href}>
                {primaryHeroCta.label}
              </ButtonLink>
              <ButtonLink href={secondaryHeroCta.href} variant="secondary">
                {secondaryHeroCta.label}
              </ButtonLink>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="min-w-0 overflow-hidden rounded-lg border border-border bg-surface p-4 shadow-raised sm:p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-muted pb-4">
              <p className="type-label text-text-primary">Structured record</p>
              <span className="type-caption rounded-full border border-success-border bg-success-surface px-3 py-1 text-success">
                Human review
              </span>
            </div>

            <div className="grid gap-4 py-5">
              <div className="grid grid-cols-[4.5rem_minmax(0,1fr)] items-center gap-3">
                <span className="type-caption">Input</span>
                <span className="h-2 rounded-full bg-border-muted" />
              </div>
              <div className="grid grid-cols-[4.5rem_minmax(0,1fr)] items-center gap-3">
                <span className="type-caption">Context</span>
                <span className="grid grid-cols-3 gap-2">
                  <span className="h-8 rounded-sm border border-border bg-surface-secondary" />
                  <span className="h-8 rounded-sm border border-border bg-surface-primary-subtle" />
                  <span className="h-8 rounded-sm border border-border bg-surface-secondary" />
                </span>
              </div>
              <div className="grid grid-cols-[4.5rem_minmax(0,1fr)] items-center gap-3">
                <span className="type-caption">Review</span>
                <span className="h-2 w-3/4 rounded-full bg-primary" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 border-t border-border-muted pt-4">
              <div className="rounded-md bg-surface-secondary p-3">
                <p className="type-caption">Status</p>
                <p className="type-body-small mt-1 font-medium text-text-primary">
                  Coordinated
                </p>
              </div>
              <div className="rounded-md bg-surface-secondary p-3">
                <p className="type-caption">Record</p>
                <p className="type-body-small mt-1 font-medium text-text-primary">
                  Auditable
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="operational-reality-title"
        className="section-spacing border-y border-border-muted bg-surface-secondary"
      >
        <div className="container">
          <div className="text-measure">
            <SectionLabel>{company.operatingFocus}</SectionLabel>
            <h2 id="operational-reality-title" className="mt-4">
              {homeContent.operationalReality.heading}
            </h2>
            <p className="type-body-large mt-5">
              {homeContent.operationalReality.introduction}
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
        aria-labelledby="engineering-method-title"
        className="section-spacing"
      >
        <div className="container">
          <div className="text-measure">
            <SectionLabel>{company.brandName}</SectionLabel>
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
        className="section-spacing border-y border-border-muted bg-surface-secondary"
      >
        <div className="container">
          <SectionLabel>{homeContent.productSpotlight.status}</SectionLabel>
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
        </div>
      </section>

      <section
        aria-labelledby="trust-standards-title"
        className="section-spacing"
      >
        <div className="container">
          <div className="text-measure">
            <SectionLabel>{company.brandName}</SectionLabel>
            <h2 id="trust-standards-title" className="mt-4">
              {homeContent.trust.heading}
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
        aria-labelledby="closing-action-title"
        className="border-t border-border-on-dark bg-surface-dark"
      >
        <div className="container py-12 lg:py-16">
          <h2
            id="closing-action-title"
            className="type-h3 max-w-2xl !text-text-on-dark"
          >
            {secondaryClosingCta.label}
          </h2>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
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
