import Image, { type ImageProps } from "next/image";

type TeamCardMedia =
  | {
      readonly imageSrc: ImageProps["src"];
      readonly imageAlt: string;
      readonly initials?: string;
    }
  | {
      readonly imageSrc?: undefined;
      readonly imageAlt?: never;
      readonly initials?: string;
    };

export type TeamCardProps = TeamCardMedia & {
  readonly name: string;
  readonly role: string;
  readonly description?: string;
  readonly headingLevel?: "h3" | "h4";
};

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => Array.from(part)[0] ?? "")
    .join("")
    .toUpperCase();
}

export function TeamCard({
  name,
  role,
  description,
  imageSrc,
  imageAlt,
  initials,
  headingLevel: Heading = "h3",
}: TeamCardProps) {
  const fallbackInitials = initials?.trim() || getInitials(name);

  return (
    <article className="flex h-full min-w-0 items-start gap-4 rounded-lg border border-border bg-surface p-5 shadow-subtle md:gap-6 md:p-6">
      <div className="relative flex aspect-square w-20 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border-muted bg-surface-secondary">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="80px"
            className="object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="type-label text-center text-text-secondary"
          >
            {fallbackInitials}
          </span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <Heading className="type-h4 break-words">{name}</Heading>
        <p className="type-label mt-2 break-words text-link">{role}</p>
        {description ? (
          <p className="type-body-small mt-3 break-words">{description}</p>
        ) : null}
      </div>
    </article>
  );
}
