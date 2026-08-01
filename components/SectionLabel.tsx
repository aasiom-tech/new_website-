import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  as?: "p" | "span";
};

export function SectionLabel({
  children,
  as: Element = "p",
}: SectionLabelProps) {
  return <Element className="type-label text-text-muted">{children}</Element>;
}
