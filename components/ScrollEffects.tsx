"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-up, .reveal-zoom"),
    );

    root.classList.add("reveal-ready");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.94) {
        requestAnimationFrame(() => element.classList.add("is-visible"));
      } else {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
