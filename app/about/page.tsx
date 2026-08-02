import type { Metadata } from "next";

import { ButtonLink } from "@/components/ButtonLink";
import { MetricStat } from "@/components/MetricStat";
import { PillarCard } from "@/components/PillarCard";
import { SectionLabel } from "@/components/SectionLabel";
import { aboutContent } from "@/content/about";
import { company } from "@/content/company";
import { primaryContactAction } from "@/content/navigation";
import { productContent } from "@/content/product";

export const metadata: Metadata = {
  title: `${aboutContent.title} | ${company.brandName}`,
  description: aboutContent.primaryLine,
};

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-page-title">
        <div className="container py-12 md:py-16 lg:py-20">
          <div className="text-measure">
            <SectionLabel>{company.legalName}</SectionLabel>
            <h1 id="about-page-title" className="mt-5">
              {aboutContent.primaryLine}
            </h1>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="company-direction-title"
        className="section-spacing border-y border-border-muted bg-surface-secondary"
      >
        <div className="container">
          <div className="text-measure">
            <SectionLabel>{aboutContent.title}</SectionLabel>
            <h2 id="company-direction-title" className="mt-4">
              Mission, vision, and direction
            </h2>
            <p className="type-body-large mt-5">
              {aboutContent.expandedDescription}
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <PillarCard title="Vision" description={aboutContent.vision} />
            <PillarCard title="Mission" description={aboutContent.mission} />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="operating-principles-title"
        className="section-spacing"
      >
        <div className="container">
          <SectionLabel>{company.operatingFocus}</SectionLabel>
          <h2 id="operating-principles-title" className="mt-4">
            Distinctive Operating Principles
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {aboutContent.operatingPrinciples.map((principle) => (
              <PillarCard
                key={principle.title}
                title={principle.title}
                description={principle.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="director-message-title"
        className="border-y border-border-on-dark bg-surface-dark"
      >
        <div className="container py-12 md:py-16 lg:py-20">
          <p className="type-label !text-primary">
            Director&apos;s Message
          </p>
          <h2 id="director-message-title" className="sr-only">
            Director&apos;s Message
          </h2>
          <blockquote className="mt-5 max-w-4xl border-l-4 border-primary pl-5 md:pl-8">
            <p className="type-h3 !text-text-on-dark">
              {aboutContent.directorMessage.quote}
            </p>
            <footer className="mt-6">
              <p className="type-body-small !text-text-on-dark-muted">
                <cite className="not-italic font-semibold !text-text-on-dark">
                  {aboutContent.directorMessage.attribution.name}
                </cite>
                <span className="block">
                  {aboutContent.directorMessage.attribution.role}
                </span>
              </p>
            </footer>
          </blockquote>
        </div>
      </section>

      <section
        aria-labelledby="corporate-facts-title"
        className="section-spacing bg-surface-secondary"
      >
        <div className="container">
          <SectionLabel>{company.legalName}</SectionLabel>
          <h2 id="corporate-facts-title" className="mt-4">
            Corporate Facts
          </h2>

          <div className="mt-8 grid gap-x-8 gap-y-10 md:grid-cols-2">
            {aboutContent.corporateFacts.map((fact) => (
              <MetricStat
                key={fact.label}
                label={fact.label}
                value={fact.value}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-closing-action-title"
        className="border-t border-border-on-dark bg-surface-dark"
      >
        <div className="container py-12 lg:py-16">
          <h2
            id="about-closing-action-title"
            className="type-h3 max-w-2xl !text-text-on-dark"
          >
            {primaryContactAction.label}
          </h2>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={productContent.route} variant="secondary">
              {productContent.title}
            </ButtonLink>
            <ButtonLink href={primaryContactAction.href}>
              {primaryContactAction.label}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
