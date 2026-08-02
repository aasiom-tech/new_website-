import type { ScopeBoundaryItem } from "@/types/content";

export type ScopeBoundaryCalloutProps = {
  readonly heading: string;
  readonly notice: string;
  readonly does?: readonly ScopeBoundaryItem[];
  readonly doesNot?: readonly ScopeBoundaryItem[];
  readonly doesLabel?: string;
  readonly doesNotLabel?: string;
  readonly headingLevel?: "h2" | "h3";
};

function BoundaryList({ items }: { readonly items: readonly ScopeBoundaryItem[] }) {
  return (
    <ul className="mt-4 list-disc space-y-3 pl-5 text-text-secondary">
      {items.map((item) => (
        <li key={`${item.label}-${item.detail ?? ""}`} className="break-words">
          <span className="type-body-small">{item.label}</span>
          {item.detail ? (
            <span className="type-body-small block text-text-muted">
              {item.detail}
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export function ScopeBoundaryCallout({
  heading,
  notice,
  does = [],
  doesNot = [],
  doesLabel = "Does",
  doesNotLabel = "Does Not",
  headingLevel: Heading = "h2",
}: ScopeBoundaryCalloutProps) {
  const Subheading = Heading === "h2" ? "h3" : "h4";

  return (
    <section className="min-w-0 rounded-lg border border-border bg-surface p-5 shadow-subtle md:p-6">
      <Heading className="type-h3 break-words">{heading}</Heading>
      <p className="type-body mt-5 border-l-4 border-primary bg-surface-primary-subtle p-4 font-medium text-text-primary">
        {notice}
      </p>

      {does.length > 0 || doesNot.length > 0 ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2 md:gap-6">
          {does.length > 0 ? (
            <div className="min-w-0 rounded-md border border-border-muted bg-surface-secondary p-4 md:p-5">
              <Subheading className="type-h4 break-words">
                {doesLabel}
              </Subheading>
              <BoundaryList items={does} />
            </div>
          ) : null}

          {doesNot.length > 0 ? (
            <div className="min-w-0 rounded-md border border-border bg-surface p-4 md:p-5">
              <Subheading className="type-h4 break-words">
                {doesNotLabel}
              </Subheading>
              <BoundaryList items={doesNot} />
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
