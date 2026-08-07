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

        {/* Desktop Navigation Row */}
        <div className="hidden min-w-0 flex-1 items-center justify-end gap-5 lg:flex">
          <nav aria-label="Primary navigation">
            <ul className="flex list-none items-baseline gap-1 p-0 xl:gap-2">
              {primaryNavigation
                .filter((item) => item.href !== "/contact")
                .map((item) => {
                  const isActive = isNavigationItemActive(pathname, item);

                  return (
                    <li key={item.href} className="m-0 flex items-baseline">
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`group relative inline-block py-3 px-3.5 text-[15px] font-medium leading-normal no-underline transition-all duration-200 rounded-lg hover:bg-white/5 ${
                          isActive
                            ? "!text-primary after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-[2px] after:bg-primary"
                            : "!text-text-on-dark-muted hover:!text-text-on-dark after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-[2px] after:scale-x-0 after:bg-primary/60 after:transition-transform after:duration-200 hover:after:scale-x-100"
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

        {/* Mobile Navigation Menu Toggle & Drawer */}
        <MobileNavigation pathname={pathname} />
      </div>
    </header>
  );
}

export default Header;