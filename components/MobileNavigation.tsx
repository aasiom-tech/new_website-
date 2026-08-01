"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import {
  isNavigationItemActive,
  primaryContactAction,
  primaryNavigation,
} from "@/content/navigation";

import { ButtonLink } from "./ButtonLink";

type MobileNavigationProps = {
  pathname: string;
};

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileNavigation({ pathname }: MobileNavigationProps) {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const isOpen = openPath === pathname;

  const closeMenu = useCallback((restoreFocus = true) => {
    setOpenPath(null);

    if (restoreFocus) {
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? [],
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu, isOpen]);

  return (
    <div className="lg:hidden">
      <button
        ref={menuButtonRef}
        type="button"
        className="type-button min-h-11 rounded-md border border-border-on-dark bg-surface-dark px-4 !text-text-on-dark transition-colors duration-200 hover:border-primary hover:bg-surface-dark-hover"
        aria-expanded={isOpen}
        aria-controls="mobile-site-navigation"
        onClick={() => setOpenPath(isOpen ? null : pathname)}
      >
        Menu
      </button>

      <div
        ref={menuRef}
        id="mobile-site-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className="fixed inset-0 z-50 overflow-y-auto bg-surface-dark"
        hidden={!isOpen}
      >
        <div className="container flex min-h-dvh flex-col py-4">
          <div className="flex min-h-11 items-center justify-between gap-4 border-b border-header-divider pb-4">
            <span className="type-h4 !text-text-on-dark">AASIOM</span>
            <button
              ref={closeButtonRef}
              type="button"
              className="type-button min-h-11 rounded-md border border-border-on-dark bg-surface-dark px-4 !text-text-on-dark transition-colors duration-200 hover:border-primary hover:bg-surface-dark-hover"
              onClick={() => closeMenu()}
            >
              Close
            </button>
          </div>

          <nav aria-label="Mobile primary navigation" className="py-8">
            <ul className="grid list-none gap-2 p-0">
              {primaryNavigation.map((item) => {
                const isActive = isNavigationItemActive(pathname, item);

                return (
                  <li key={item.href} className="m-0">
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`type-navigation flex min-h-11 items-center border-l-2 px-4 py-3 no-underline transition-colors duration-200 ${
                        isActive
                          ? "border-primary bg-surface-dark-hover font-semibold !text-primary"
                          : "border-transparent !text-text-on-dark-muted hover:border-primary hover:bg-surface-dark-hover hover:!text-text-on-dark"
                      }`}
                      onNavigate={() => closeMenu(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-auto border-t border-header-divider pt-6">
            <ButtonLink href={primaryContactAction.href}>
              {primaryContactAction.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
