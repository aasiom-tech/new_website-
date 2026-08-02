import { ButtonLink } from "./ButtonLink";
import { TrustBadge } from "./TrustBadge";

type SpotlightCTA = {
  readonly label: string;
  readonly href: string;
};

export type ProductSpotlightProps = {
  readonly name: string;
  readonly descriptor: string;
  readonly teaser: string;
  readonly status: string;
  readonly supportingStatuses?: readonly string[];
  readonly cta: SpotlightCTA;
  readonly headingLevel?: "h2" | "h3";
  readonly headingId?: string;
};

export function ProductSpotlight({
  name,
  descriptor,
  teaser,
  status,
  supportingStatuses = [],
  cta,
  headingLevel: Heading = "h2",
  headingId,
}: ProductSpotlightProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-border-on-dark bg-surface-dark shadow-raised">
      <div className="grid min-w-0 gap-8 p-6 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.48fr)] lg:items-end lg:gap-12 lg:p-10">
        <div className="min-w-0">
          <div className="flex flex-wrap gap-2">
            <TrustBadge label={status} tone="active" />
            {supportingStatuses.map((supportingStatus) => (
              <TrustBadge
                key={supportingStatus}
                label={supportingStatus}
                tone="trust"
              />
            ))}
          </div>

          <Heading
            id={headingId}
            className="type-h2 mt-6 break-words !text-text-on-dark"
          >
            {name}
          </Heading>
          <p className="type-body-large mt-3 break-words !text-text-on-dark">
            {descriptor}
          </p>
          <p className="type-body mt-5 break-words !text-text-on-dark-muted">
            {teaser}
          </p>
        </div>

        <div className="min-w-0 lg:flex lg:justify-end">
          <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
        </div>
      </div>
    </article>
  );
}
