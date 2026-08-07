import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink } from "@/components/ButtonLink";
import { CompanyMethodGlow } from "@/components/CompanyMethodGlow";
import { SectionLabel } from "@/components/SectionLabel";
import { company } from "@/content/company";
import { homeContent } from "@/content/home";

export const metadata: Metadata = {
  title: company.legalName,
  description: homeContent.hero.valueProposition,
};


export default function HomePage() {
  const [primaryHeroCta, secondaryHeroCta] = homeContent.hero.ctas;
  const [primaryClosingCta, secondaryClosingCta] =
    homeContent.closingCta.ctas;

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
        className="operational-challenge-section"
      >
        <div className="container operational-challenge-layout">
          <div className="operational-challenge-copy reveal-up">
            <SectionLabel>{homeContent.operationalReality.eyebrow}</SectionLabel>
            <h2 id="operational-reality-title">
              {homeContent.operationalReality.heading}
            </h2>
            <p className="type-body-large">
              {homeContent.operationalReality.introduction}
            </p>

            <div className="operational-challenge-principle" aria-label="AASIOM approach">
              <span aria-hidden="true" className="operational-challenge-principle__mark" />
              <div>
                <p className="operational-challenge-principle__label">AASIOM starts with the requirement</p>
                <p className="type-body-small">
                  Understand the operation first. Then decide where structure, software, automation,
                  or AI can create useful support.
                </p>
              </div>
            </div>
          </div>

          <div className="operational-challenge-grid reveal-stagger">
            {homeContent.operationalReality.items.map((item, index) => (
              <article
                key={item.title}
                className={`operational-challenge-card reveal-up operational-challenge-card--${index + 1}`}
              >
                <div className="operational-challenge-card__topline">
                  <span className="operational-challenge-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="operational-challenge-card__signal" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                {index === 0 ? (
                  <div className="operational-challenge-card__map" aria-hidden="true">
                    <span className="operational-map-node operational-map-node--1" />
                    <span className="operational-map-node operational-map-node--2" />
                    <span className="operational-map-node operational-map-node--3" />
                    <span className="operational-map-node operational-map-node--4" />
                    <span className="operational-map-line operational-map-line--1" />
                    <span className="operational-map-line operational-map-line--2" />
                    <span className="operational-map-line operational-map-line--3" />
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        aria-labelledby="capabilities-title"
        className="homepage-capabilities scroll-mt-24"
      >
        <div className="container homepage-capabilities__inner">
          <div className="homepage-capabilities__heading reveal-up">
            <div>
              <SectionLabel>{homeContent.capabilities.eyebrow}</SectionLabel>
              <h2 id="capabilities-title">
                {homeContent.capabilities.heading}
              </h2>
            </div>
            <div className="homepage-capabilities__intro">
              <p className="type-body-large">
                {homeContent.capabilities.introduction}
              </p>
              <ButtonLink href={homeContent.capabilities.cta.href}>
                {homeContent.capabilities.cta.label}
              </ButtonLink>
            </div>
          </div>

          <div className="homepage-capabilities__grid reveal-stagger">
            {homeContent.capabilities.items.map((item, index) => (
              <article
                key={item.title}
                className={`homepage-capability-card reveal-up homepage-capability-card--${index + 1}`}
              >
                <div className="homepage-capability-card__meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="homepage-capability-card__rail" aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="engineering-method-title"
        className="company-method-section"
      >
        <div className="container company-method-section__heading reveal-up">
          <SectionLabel>{homeContent.engineeringMethod.eyebrow}</SectionLabel>
          <h2 id="engineering-method-title">
            {homeContent.engineeringMethod.heading}
          </h2>
          <p className="type-body-large">
            {homeContent.engineeringMethod.introduction}
          </p>
        </div>

        <div className="container company-method-section__timeline">
          <CompanyMethodGlow steps={homeContent.engineeringMethod.steps} />
        </div>
      </section>

      <section
        aria-labelledby="product-spotlight-title"
        className="home-product-proof"
      >
        <div className="container">
          <article className="home-product-proof__card reveal-up">
            <div className="home-product-proof__copy">
              <SectionLabel>{homeContent.productSpotlight.eyebrow}</SectionLabel>
              <p className="home-product-proof__kicker">{homeContent.productSpotlight.kicker}</p>
              <h2 id="product-spotlight-title">{homeContent.productSpotlight.name}</h2>
              <p className="home-product-proof__descriptor">
                {homeContent.productSpotlight.descriptor}
              </p>
              <p className="home-product-proof__teaser">
                {homeContent.productSpotlight.teaser}
              </p>
              <div className="home-product-proof__actions">
                <span className="home-product-proof__status">
                  <span aria-hidden="true" />
                  {homeContent.productSpotlight.status}
                </span>
                <ButtonLink href={homeContent.productSpotlight.cta.href}>
                  {homeContent.productSpotlight.cta.label}
                </ButtonLink>
              </div>
            </div>

            <div className="home-product-proof__visual">
              <span className="home-product-proof__preview-label">Concept preview</span>
              <Image
                src="/images/product/product-hero-anvira.jpg"
                alt="ANVIRA product concept showing AASIOM's structured product-building approach."
                width={1400}
                height={900}
                className="home-product-proof__image"
              />
            </div>
          </article>
        </div>
      </section>

      <section
        aria-labelledby="trust-standards-title"
        className="responsible-build-section"
      >
        <div className="container">
          <div className="responsible-build-section__heading reveal-up">
            <SectionLabel>{homeContent.trust.eyebrow}</SectionLabel>
            <h2 id="trust-standards-title">{homeContent.trust.heading}</h2>
            <p className="type-body-large">{homeContent.trust.introduction}</p>
          </div>

          <div className="responsible-build-grid reveal-stagger">
            {homeContent.trust.items.map((item, index) => (
              <article key={item.title} className="responsible-build-card reveal-up">
                <span className="responsible-build-card__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="home-faq-section">
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
        className="home-closing-cta"
      >
        <div className="container home-closing-cta__inner reveal-up">
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
