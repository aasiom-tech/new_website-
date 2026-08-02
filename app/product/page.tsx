import type { Metadata } from "next";

import { ButtonLink } from "@/components/ButtonLink";
import { PillarCard } from "@/components/PillarCard";
import { ProductCard } from "@/components/ProductCard";
import { SectionLabel } from "@/components/SectionLabel";
import { company } from "@/content/company";
import { primaryContactAction } from "@/content/navigation";
import { productContent } from "@/content/product";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: `${productContent.heading} | ${company.brandName}`,
  description: productContent.statement,
};

export default function ProductPage() {
  return (
    <>
      <section aria-labelledby="product-page-title">
        <div className="container py-12 md:py-16 lg:py-20">
          <div className="text-measure">
            <SectionLabel>{productContent.title}</SectionLabel>
            <h1 id="product-page-title" className="mt-5">
              {productContent.heading}
            </h1>
            <p className="type-body-large mt-6">
              {productContent.statement}
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="product-directory-title"
        className="section-spacing border-y border-border-muted bg-surface-secondary"
      >
        <div className="container">
          <SectionLabel>{company.brandName}</SectionLabel>
          <h2 id="product-directory-title" className="mt-4">
            Product Directory
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                headingLevel="h3"
              />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="engineering-capabilities-title"
        className="section-spacing"
      >
        <div className="container">
          <SectionLabel>{company.operatingFocus}</SectionLabel>
          <h2 id="engineering-capabilities-title" className="mt-4">
            Core Engineering Capabilities
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productContent.capabilities.map((capability) => (
              <PillarCard
                key={capability.title}
                title={capability.title}
                description={capability.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="product-contact-title"
        className="border-t border-border-on-dark bg-surface-dark"
      >
        <div className="container py-12 lg:py-16">
          <h2
            id="product-contact-title"
            className="type-h3 max-w-2xl !text-text-on-dark"
          >
            {primaryContactAction.label}
          </h2>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={primaryContactAction.href}>
              {primaryContactAction.label}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
