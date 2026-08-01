"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  isNavigationItemActive,
  primaryContactAction,
  primaryNavigation,
} from "@/content/navigation";

import { ButtonLink } from "./ButtonLink";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-header-divider bg-surface-dark">
      <div className="container flex min-h-18 items-center justify-between gap-4">
        <Link
          href="/"
          className="type-h4 shrink-0 !text-text-on-dark no-underline transition-colors duration-200 hover:!text-primary"
          aria-label="AASIOM home"
        >
          AASIOM
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-4 lg:flex">
          <nav aria-label="Primary navigation">
            <ul className="flex list-none items-center gap-2 p-0 xl:gap-3">
              {primaryNavigation.map((item) => {
                const isActive = isNavigationItemActive(pathname, item);

                return (
                  <li key={item.href} className="m-0">
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`type-navigation flex min-h-11 items-center border-b-2 px-2 no-underline transition-colors duration-200 ${
                        isActive
                          ? "border-primary font-semibold !text-primary"
                          : "border-transparent !text-text-on-dark-muted hover:border-primary hover:!text-text-on-dark"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <ButtonLink href={primaryContactAction.href}>
            {primaryContactAction.label}
          </ButtonLink>
        </div>

        <MobileNavigation pathname={pathname} />
      </div>
    </header>
  );
}
