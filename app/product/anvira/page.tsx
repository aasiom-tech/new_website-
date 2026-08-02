import type { Metadata } from "next";

import { ButtonLink } from "@/components/ButtonLink";
import { PillarCard } from "@/components/PillarCard";
import { ScopeBoundaryCallout } from "@/components/ScopeBoundaryCallout";
import { SectionLabel } from "@/components/SectionLabel";
import { TrustBadge } from "@/components/TrustBadge";
import { company } from "@/content/company";
import { anviraProduct } from "@/content/products/anvira";

export const metadata: Metadata = {
  title: `${anviraProduct.name} | ${company.brandName}`,
  description: anviraProduct.positioning,
};

export default function AnviraPage() {
  const [primaryCta, secondaryCta] = anviraProduct.ctas;

  return (
    <>
      <section
        aria-labelledby="anvira-page-title"
        className="border-b border-border-on-dark bg-surface-dark"
      >
        <div className="container py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl">
            <p className="type-label !text-primary">{anviraProduct.sector}</p>
            <h1
              id="anvira-page-title"
              className="mt-5 !text-text-on-dark"
            >
              {anviraProduct.name}
            </h1>
            <p className="type-h2 mt-5 !text-text-on-dark">
              {anviraProduct.headline}
            </p>
            <p className="type-body-large mt-5 !text-text-on-dark-muted">
              {anviraProduct.tagline}
            </p>
            <p className="type-body mt-6 max-w-3xl !text-text-on-dark-muted">
              {anviraProduct.positioning}
            </p>

            <ul
              aria-label={`${anviraProduct.name} status`}
              className="mt-8 flex list-none flex-wrap gap-2 !p-0"
            >
              {anviraProduct.status.map((status) => (
                <li key={status} className="!mt-0 max-w-full">
                  <TrustBadge label={status} tone="trust" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="problem-signal-title"
        className="section-spacing border-b border-border-muted bg-surface-secondary"
      >
        <div className="container">
          <div className="max-w-4xl">
            <SectionLabel>{anviraProduct.name}</SectionLabel>
            <h2 id="problem-signal-title" className="mt-4">
              Problem Signal
            </h2>
            <blockquote className="mt-8 border-l-4 border-primary pl-5 md:pl-8">
              <p className="type-h3 text-text-primary">
                {anviraProduct.problemSignal}
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="public-principles-title"
        className="section-spacing"
      >
        <div className="container">
          <SectionLabel>{anviraProduct.name}</SectionLabel>
          <h2 id="public-principles-title" className="mt-4">
            Public Core Principles
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {anviraProduct.principles.map((principle) => (
              <PillarCard
                key={principle.title}
                title={principle.title}
                description={principle.description}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="section-spacing border-y border-border-muted bg-surface-secondary">
        <div className="container">
          <ScopeBoundaryCallout
            heading="Scope Boundary"
            notice={anviraProduct.scopeBoundaries.statement}
            does={anviraProduct.scopeBoundaries.does}
            doesNot={anviraProduct.scopeBoundaries.doesNot}
            doesLabel="What ANVIRA does"
            doesNotLabel="What ANVIRA does not do"
          />

          <aside
            aria-label={`${anviraProduct.name} trust and status`}
            className="mt-8 border-t border-border pt-6"
          >
            <SectionLabel>{anviraProduct.name}</SectionLabel>
            <ul className="mt-4 flex list-none flex-wrap gap-2 !p-0">
              {anviraProduct.status.map((status) => (
                <li key={status} className="!mt-0 max-w-full">
                  <TrustBadge label={status} tone="trust" />
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      <section
        aria-labelledby="anvira-contact-title"
        className="border-t border-border-on-dark bg-surface-dark"
      >
        <div className="container py-12 lg:py-16">
          <h2
            id="anvira-contact-title"
            className="type-h3 max-w-2xl !text-text-on-dark"
          >
            {primaryCta.label}
          </h2>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
            <ButtonLink href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
