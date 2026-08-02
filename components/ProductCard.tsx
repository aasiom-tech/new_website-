import Link from "next/link";

import type { ProductSummary } from "@/types/content";

import { TrustBadge, type TrustBadgeTone } from "./TrustBadge";

export type ProductCardProps = {
  readonly product: ProductSummary;
  readonly designation?: string;
  readonly statusTone?: TrustBadgeTone;
  readonly headingLevel?: "h2" | "h3" | "h4";
};

export function ProductCard({
  product,
  designation,
  statusTone = "neutral",
  headingLevel: Heading = "h3",
}: ProductCardProps) {
  return (
    <Link
      href={product.route}
      className="group block h-full min-w-0 rounded-lg border border-border bg-surface no-underline shadow-subtle transition-colors duration-200 hover:border-primary hover:bg-surface-primary-subtle"
    >
      <article className="flex h-full min-w-0 flex-col p-5 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="type-label text-text-muted">{product.sector}</p>
          {designation ? (
            <TrustBadge label={designation} tone="trust" />
          ) : null}
        </div>

        <Heading className="type-h3 mt-5 break-words text-text-primary transition-colors duration-200 group-hover:text-link-hover">
          {product.name}
        </Heading>
        <p className="type-body-large mt-2 break-words text-text-primary">
          {product.headline}
        </p>
        <p className="type-body mt-4 break-words">{product.summary}</p>

        <ul
          aria-label={`${product.name} status`}
          className="mt-6 flex list-none flex-wrap gap-2 !p-0"
        >
          {product.status.map((status) => (
            <li key={status} className="!mt-0 max-w-full">
              <TrustBadge label={status} tone={statusTone} />
            </li>
          ))}
        </ul>
      </article>
    </Link>
  );
}
