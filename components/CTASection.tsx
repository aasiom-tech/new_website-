import { ButtonLink } from "./ButtonLink";
import { SectionLabel } from "./SectionLabel";

type CTAContent = {
  label: string;
  href: string;
};

type CTASectionProps = {
  eyebrow?: string;
  heading: string;
  supportingText: string;
  primaryCta: CTAContent;
  secondaryCta?: CTAContent;
  headingLevel?: "h2" | "h3" | "h4";
};

export function CTASection({
  eyebrow,
  heading,
  supportingText,
  primaryCta,
  secondaryCta,
  headingLevel: Heading = "h2",
}: CTASectionProps) {
  return (
    <section className="border-y border-border-muted bg-surface-secondary">
      <div className="container py-12 lg:py-16">
        <div className="text-measure">
          {eyebrow ? <SectionLabel>{eyebrow}</SectionLabel> : null}
          <Heading className={eyebrow ? "mt-4" : undefined}>{heading}</Heading>
          <p className="type-body-large mt-4">{supportingText}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
            {secondaryCta ? (
              <ButtonLink href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
