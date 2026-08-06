"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { ButtonLink } from "./ButtonLink";
import { SectionLabel } from "./SectionLabel";

type HeroCTA = {
  readonly label: string;
  readonly href: string;
};

type InteractiveHeroProps = {
  readonly eyebrow: string;
  readonly headline: string;
  readonly valueProposition: string;
  readonly trustLine: string;
  readonly primaryCta: HeroCTA;
  readonly secondaryCta: HeroCTA;
};

export function InteractiveHero({
  eyebrow,
  headline,
  valueProposition,
  trustLine,
  primaryCta,
  secondaryCta,
}: InteractiveHeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      return;
    }

    let frame = 0;

    const updateScrollPosition = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const viewportHeight = Math.max(window.innerHeight, 1);
        const progress = Math.max(
          -1,
          Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height)),
        );

        hero.style.setProperty(
          "--hero-scroll-y",
          `${(progress - 0.5) * 22}px`,
        );
      });
    };

    updateScrollPosition();
    window.addEventListener("scroll", updateScrollPosition, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  const handlePointerMove = (
    event: React.PointerEvent<HTMLElement>,
  ) => {
    const hero = heroRef.current;

    if (!hero || event.pointerType === "touch") {
      return;
    }

    const bounds = hero.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    hero.style.setProperty("--hero-pointer-x", `${x * 18}px`);
    hero.style.setProperty("--hero-pointer-y", `${y * 12}px`);
  };

  const resetPointerPosition = () => {
    const hero = heroRef.current;

    if (!hero) {
      return;
    }

    hero.style.setProperty("--hero-pointer-x", "0px");
    hero.style.setProperty("--hero-pointer-y", "0px");
  };

  return (
    <section
      ref={heroRef}
      aria-labelledby="home-hero-title"
      className="interactive-hero"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointerPosition}
    >
      <div className="interactive-hero-media" aria-hidden="true">
        <Image
          src="/images/aasiom-hero-collage.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="interactive-hero-image"
        />
      </div>

      <div className="interactive-hero-overlay" aria-hidden="true" />

      <div className="container interactive-hero-layout">
        <div className="interactive-hero-copy reveal-up">
          <SectionLabel>{eyebrow}</SectionLabel>

          <h1
            id="home-hero-title"
            className="interactive-hero-heading mt-4"
          >
            {headline}
          </h1>

          <p className="interactive-hero-description type-body-large mt-5">
            {valueProposition}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <ButtonLink href={primaryCta.href}>
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </ButtonLink>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 shrink-0 rounded-full bg-primary shadow-[0_0_0_5px_rgb(24_183_165_/_14%)]"
            />
            <p className="type-body-small font-medium text-text-primary">
              {trustLine}
            </p>
          </div>
        </div>
      </div>

      <div className="interactive-hero-scroll-cue" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
