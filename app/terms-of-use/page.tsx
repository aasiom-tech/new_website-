import type { Metadata } from "next";

import { ButtonLink } from "@/components/ButtonLink";
import { SectionLabel } from "@/components/SectionLabel";
import { TrustBadge } from "@/components/TrustBadge";
import { company } from "@/content/company";
import { termsOfUseContent } from "@/content/legal/termsOfUse";

const statusSection = termsOfUseContent.sections[0];

export const metadata: Metadata = {
  title: `${termsOfUseContent.title} — Pending Legal Review | ${company.brandName}`,
  description: statusSection.paragraphs[0],
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsOfUsePage() {
  return (
    <section aria-labelledby="terms-of-use-title" className="section-spacing">
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-lg border border-border bg-surface p-5 shadow-subtle md:p-8 lg:p-10">
          <SectionLabel>{company.legalName}</SectionLabel>
          <h1 id="terms-of-use-title" className="mt-5">
            {termsOfUseContent.title}
          </h1>
          <div className="mt-5">
            <TrustBadge label={statusSection.heading} tone="pending" />
          </div>

          <div className="mt-8 border-t border-border-muted pt-8">
            <h2 className="type-h3">{statusSection.heading}</h2>
            {statusSection.paragraphs.map((paragraph) => (
              <p key={paragraph} className="type-body-large mt-4">
                {paragraph}
              </p>
            ))}
            <p className="type-body mt-5">
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-border-muted pt-6 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/" variant="secondary">
              Home
            </ButtonLink>
            <ButtonLink href="/contact">Contact</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
