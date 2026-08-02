import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

const baseStyles =
  "type-button inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2.5 text-center no-underline transition-colors duration-200";

const variantStyles = {
  primary:
    "bg-primary !text-primary-foreground hover:bg-primary-hover hover:!text-primary-foreground",
  secondary:
    "border border-border bg-surface !text-text-primary hover:border-primary hover:bg-surface-primary-subtle hover:!text-link",
} as const;

export function ButtonLink({
  children,
  href,
  variant = "primary",
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
