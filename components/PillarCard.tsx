type PillarCardMarker =
  | {
      readonly eyebrow?: string;
      readonly index?: never;
    }
  | {
      readonly eyebrow?: never;
      readonly index?: number | string;
    };

export type PillarCardProps = PillarCardMarker & {
  readonly title: string;
  readonly description: string;
  readonly headingLevel?: "h3" | "h4";
};

export function PillarCard({
  eyebrow,
  index,
  title,
  description,
  headingLevel: Heading = "h3",
}: PillarCardProps) {
  const marker = eyebrow ?? index;

  return (
    <article className="lift-card reveal-up flex h-full min-w-0 flex-col rounded-lg border border-border bg-surface p-5 shadow-subtle transition-all duration-300 hover:border-primary hover:shadow-raised md:p-6">
      {marker !== undefined ? (
        <p className="type-label text-link">{marker}</p>
      ) : null}
      <Heading className={`type-h4 ${marker !== undefined ? "mt-3" : ""}`}>
        {title}
      </Heading>
      <p className="type-body mt-3 break-words">{description}</p>
    </article>
  );
}
