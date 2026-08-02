import type { Metadata } from "next";

import { ButtonLink } from "@/components/ButtonLink";
import { PillarCard } from "@/components/PillarCard";
import { SectionLabel } from "@/components/SectionLabel";
import { company } from "@/content/company";
import { primaryContactAction } from "@/content/navigation";
import { strategicReviewContent } from "@/content/strategicReview";

export const metadata: Metadata = {
  title: `${strategicReviewContent.headline} | ${company.brandName}`,
  description: strategicReviewContent.framingStatement,
};

export default function StrategicReviewPage() {
  return (
    <>
      <section aria-labelledby="strategic-review-title">
        <div className="container py-12 md:py-16 lg:py-20">
          <div className="text-measure">
            <SectionLabel>{company.brandName}</SectionLabel>
            <h1 id="strategic-review-title" className="mt-5">
              {strategicReviewContent.headline}
            </h1>
            <p className="type-body-large mt-6">
              {strategicReviewContent.framingStatement}
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="core-principle-title"
        className="section-spacing border-y border-border-muted bg-surface-secondary"
      >
        <div className="container">
          <SectionLabel>Core Principle</SectionLabel>
          <h2 id="core-principle-title" className="sr-only">
            Core Principle
          </h2>
          <blockquote className="mt-5 max-w-4xl border-l-4 border-primary pl-5 md:pl-8">
            <p className="type-h2 text-text-primary">
              {strategicReviewContent.corePrinciple}
            </p>
          </blockquote>
        </div>
      </section>

      <section
        aria-labelledby="execution-wedges-title"
        className="section-spacing"
      >
        <div className="container">
          <SectionLabel>Strategic Execution</SectionLabel>
          <h2 id="execution-wedges-title" className="mt-4">
            Strategic Execution Wedges
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {strategicReviewContent.executionWedges.map((wedge, index) => (
              <PillarCard
                key={wedge.title}
                index={String(index + 1).padStart(2, "0")}
                title={wedge.title}
                description={wedge.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="customer-proof-title"
        className="section-spacing border-y border-border-muted bg-surface-secondary"
      >
        <div className="container">
          <div className="text-measure">
            <SectionLabel>Before Scaling</SectionLabel>
            <h2 id="customer-proof-title" className="mt-4">
              Customer Proof Required Before Scaling
            </h2>
          </div>

          <ol className="mt-8 grid list-none gap-4 !p-0 md:grid-cols-2">
            {strategicReviewContent.customerProofQuestions.map(
              (question, index) => (
                <li
                  key={question}
                  className="!mt-0 flex min-w-0 gap-4 rounded-lg border border-border bg-surface p-5 shadow-subtle md:p-6"
                >
                  <span
                    aria-hidden="true"
                    className="type-label shrink-0 text-link"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="type-body font-medium text-text-primary">
                    {question}
                  </p>
                </li>
              ),
            )}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="data-controls-title"
        className="section-spacing"
      >
        <div className="container">
          <div className="max-w-4xl rounded-lg border border-border bg-surface p-5 shadow-subtle md:p-8">
            <SectionLabel>Operational Controls</SectionLabel>
            <h2 id="data-controls-title" className="mt-4">
              Data Handling Controls
            </h2>
            <p className="type-body-large mt-5">
              {strategicReviewContent.dataHandlingControls}
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="strategic-review-contact-title"
        className="border-t border-border-on-dark bg-surface-dark"
      >
        <div className="container py-12 lg:py-16">
          <h2
            id="strategic-review-contact-title"
            className="type-h3 max-w-2xl !text-text-on-dark"
          >
            {primaryContactAction.label}
          </h2>
          <div className="mt-6">
            <ButtonLink href={primaryContactAction.href}>
              {primaryContactAction.label}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
