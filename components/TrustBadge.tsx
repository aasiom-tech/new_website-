export type TrustBadgeTone = "neutral" | "active" | "pending" | "trust";

export type TrustBadgeProps = {
  readonly label: string;
  readonly tone?: TrustBadgeTone;
};

const toneStyles = {
  neutral: "border-border bg-surface-secondary text-text-secondary",
  active: "border-success-border bg-success-surface text-success",
  pending: "border-warning-border bg-warning-surface text-warning",
  trust: "border-info-border bg-info-surface text-info",
} as const satisfies Record<TrustBadgeTone, string>;

export function TrustBadge({ label, tone = "neutral" }: TrustBadgeProps) {
  return (
    <span
      className={`type-body-small inline-flex max-w-full items-center rounded-full border px-3 py-1 font-medium ${toneStyles[tone]}`}
    >
      {label}
    </span>
  );
}
