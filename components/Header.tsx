"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 18);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-header-divider bg-surface-dark transition-shadow duration-300 ${
        isScrolled ? "shadow-raised" : ""
      }`}
    >
      <div
        className={`container flex items-center justify-between gap-4 transition-[min-height] duration-300 ${
          isScrolled ? "min-h-16" : "min-h-18"
        }`}
      >
        <Link
          href="/"
          className="shrink-0 no-underline"
          aria-label="AASIOM Technologies home"
        >
          <Image
            src="/logos/aasiom-logo-light.png"
            alt="AASIOM Technologies Pvt Ltd"
            width={396}
            height={190}
            priority
            className={`h-auto object-contain transition-[width] duration-300 ${
              isScrolled
                ? "w-[8.8rem] sm:w-[9.8rem]"
                : "w-[9.6rem] sm:w-[11rem]"
            }`}
          />
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-5 lg:flex">
          <nav aria-label="Primary navigation">
            <ul className="flex list-none items-center gap-1 p-0 xl:gap-2">
              {primaryNavigation.map((item) => {
                const isActive = isNavigationItemActive(pathname, item);

                return (
                  <li key={item.href} className="m-0">
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`type-navigation flex min-h-11 items-center border-b-2 px-3 no-underline transition-all duration-200 ${
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
