export type MetricStatProps = {
  readonly value: number | string;
  readonly label: string;
  readonly supportingText?: string;
};

export function MetricStat({
  value,
  label,
  supportingText,
}: MetricStatProps) {
  return (
    <dl className="h-full min-w-0 border-l-2 border-primary pl-4 md:pl-6">
      <div>
        <dt className="type-label break-words text-text-muted">{label}</dt>
        <dd className="type-h4 mt-2 break-words text-text-primary">{value}</dd>
        {supportingText ? (
          <dd className="type-body-small mt-2 break-words text-text-secondary">
            {supportingText}
          </dd>
        ) : null}
      </div>
    </dl>
  );
}
