"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

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
  const currentPathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback((restoreFocus = true) => {
    setIsOpen(false);

    if (restoreFocus) {
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [currentPathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const focusFrame = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

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
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu, isOpen]);

  const mobileMenu = isOpen ? (
    <div
      ref={menuRef}
      id="mobile-site-navigation"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className="fixed inset-0 min-h-[100svh] w-screen overflow-y-auto bg-surface-dark lg:hidden"
      style={{ zIndex: 2147483647 }}
    >
      <div className="container flex min-h-[100svh] flex-col py-4">
        <div className="flex min-h-14 items-center justify-between gap-4 border-b border-header-divider pb-4">
          <Link
            href="/"
            aria-label="AASIOM Technologies home"
            onClick={() => closeMenu(false)}
          >
            <Image
              src="/logos/aasiom-logo-light.png"
              alt="AASIOM Technologies Pvt Ltd"
              width={340}
              height={164}
              className="h-auto w-[9.5rem] object-contain"
            />
          </Link>

          <button
            ref={closeButtonRef}
            type="button"
            className="type-button inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-md border border-border-on-dark bg-surface-dark !px-4 !py-2.5 !text-text-on-dark transition-colors duration-200 hover:border-primary hover:bg-surface-dark-hover"
            aria-label="Close navigation menu"
            onClick={() => closeMenu()}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
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
                    className={`type-navigation flex min-h-12 items-center rounded-sm border-l-2 px-4 py-3 no-underline transition-colors duration-200 ${
                      isActive
                        ? "border-primary bg-surface-dark-hover font-semibold !text-primary"
                        : "border-transparent !text-text-on-dark-muted hover:border-primary hover:bg-surface-dark-hover hover:!text-text-on-dark"
                    }`}
                    onClick={() => closeMenu(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto border-t border-header-divider pt-6">
          <ButtonLink
            href={primaryContactAction.href}
            onClick={() => closeMenu(false)}
          >
            {primaryContactAction.label}
          </ButtonLink>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div className="relative z-[110] flex shrink-0 lg:hidden">
      <button
        ref={menuButtonRef}
        type="button"
        className="type-button inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-2 rounded-md border border-border-on-dark bg-surface-dark !px-3.5 !py-2.5 !text-text-on-dark transition-colors duration-200 hover:border-primary hover:bg-surface-dark-hover active:bg-surface-dark-hover"
        aria-expanded={isOpen}
        aria-controls="mobile-site-navigation"
        aria-label="Open navigation menu"
        onClick={() => setIsOpen(true)}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <span>Menu</span>
      </button>

      {isMounted && mobileMenu ? createPortal(mobileMenu, document.body) : null}
    </div>
  );
}
