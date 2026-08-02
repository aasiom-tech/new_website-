export type WorkflowStep = {
  readonly number: number | string;
  readonly title: string;
  readonly description: string;
};

export type WorkflowStepperProps = {
  readonly steps: readonly WorkflowStep[];
  readonly headingLevel?: "h3" | "h4";
};

export function WorkflowStepper({
  steps,
  headingLevel: Heading = "h3",
}: WorkflowStepperProps) {
  return (
    <ol className="grid list-none gap-px overflow-hidden rounded-lg border border-border bg-border !p-0 md:grid-cols-2 md:[&>li:last-child:nth-child(odd)]:col-span-2 lg:grid-cols-3 xl:flex xl:[&>li:last-child]:col-span-1">
      {steps.map((step) => {
        const displayNumber =
          typeof step.number === "number"
            ? String(step.number).padStart(2, "0")
            : step.number;

        return (
          <li
            key={`${step.number}-${step.title}`}
            className="!mt-0 min-w-0 bg-surface p-5 xl:flex-1 xl:p-6"
          >
            <p className="type-label break-words text-link">{displayNumber}</p>
            <Heading className="type-h4 mt-3 break-words">{step.title}</Heading>
            <p className="type-body-small mt-3 break-words">
              {step.description}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
