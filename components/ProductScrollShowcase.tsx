"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const tabs = [
  {
    title: "Structured for real operations",
    description:
      "Designed around people, workflows, constraints, decisions, and accountability rather than generic software assumptions.",
    image: "/images/product/tab-structured.jpg",
    alt: "ANVIRA concept showing operational inputs flowing into a structured incident workspace",
  },
  {
    title: "AI-assisted, human-controlled",
    description:
      "AI can help organise, classify, summarise, and surface gaps while sensitive operational values and final outputs remain reviewable by people.",
    image: "/images/product/tab-ai-automation.jpg",
    alt: "AASIOM concept visual representing AI, automation, analytics, and enterprise workflows",
  },
  {
    title: "Built for clarity and accountability",
    description:
      "Actions, blockers, ownership, evidence, and progress stay visible so teams can work from a clearer shared operating picture.",
    image: "/images/product/tab-accountability.jpg",
    alt: "AASIOM security and control concept visual representing accountable system design",
  },
  {
    title: "Focused on scalable execution",
    description:
      "Products are shaped through structured requirements, modular engineering, and phased validation so the system can evolve without losing control.",
    image: "/images/product/tab-scalable.jpg",
    alt: "AASIOM software engineering concept visual with development, automation, cloud, and mobile capabilities",
  },
  {
    title: "Engineered for long-term value",
    description:
      "Product thinking, maintainable engineering, and operational learning remain connected as the product develops and real requirements become clearer.",
    image: "/images/product/tab-longterm.jpg",
    alt: "AASIOM engineering concept visual representing build, test, deploy, operate, and continuous improvement",
  },
] as const;

export function ProductScrollShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    tabs.forEach((tab) => {
      const preload = new window.Image();
      preload.src = tab.image;
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      section.style.setProperty("--product-backdrop-scale", "1");
      return;
    }

    let frame = 0;
    let sectionTop = 0;
    let startY = 0;
    let endY = 1;
    let lastScale = -1;
    let isNearViewport = true;

    const measure = () => {
      const rect = section.getBoundingClientRect();
      sectionTop = window.scrollY + rect.top;
      const viewport = Math.max(window.innerHeight, 1);

      // Begin while the framed section is approaching and finish shortly
      // before it settles into the sticky viewport.
      startY = sectionTop - viewport * 0.78;
      endY = sectionTop - viewport * 0.16;
    };

    const update = () => {
      frame = 0;
      if (!isNearViewport) return;

      const raw = (window.scrollY - startY) / Math.max(endY - startY, 1);
      const progress = Math.max(0, Math.min(1, raw));
      const scale = 0.86 + progress * 0.14;

      // Only one compositor-friendly transform value changes while scrolling.
      if (Math.abs(scale - lastScale) > 0.003) {
        section.style.setProperty(
          "--product-backdrop-scale",
          scale.toFixed(4),
        );
        lastScale = scale;
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const onResize = () => {
      measure();
      requestUpdate();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isNearViewport = entry.isIntersecting;
        if (isNearViewport) requestUpdate();
      },
      { rootMargin: "45% 0px 45% 0px" },
    );

    measure();
    update();
    observer.observe(section);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", onResize);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const active = tabs[activeTab];

  return (
    <section
      ref={sectionRef}
      aria-labelledby="product-experience-title"
      className="product-scroll-showcase"
    >
      <div className="product-scroll-showcase__sticky">
        <div className="product-showcase-frame">
          <div className="product-showcase-heading">
            <p className="product-showcase-eyebrow">AASIOM PRODUCT EXPERIENCE</p>
            <h2 id="product-experience-title">
              Designed for AI-assisted operational products.
            </h2>
            <p>
              Structured workflows, assistive intelligence, and human control—
              brought together for real operating environments.
            </p>
            <div className="product-showcase-actions">
              <a className="product-showcase-primary" href="/product/anvira">
                Explore ANVIRA
              </a>
              <a className="product-showcase-secondary" href="/contact">
                Discuss a Product Opportunity
              </a>
            </div>
          </div>

          <div className="product-showcase-shell">
            <div
              className="product-showcase-tabs"
              role="tablist"
              aria-label="AASIOM product principles"
            >
              {tabs.map((tab, index) => (
                <button
                  key={tab.title}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === index}
                  aria-controls="product-showcase-panel"
                  className={
                    activeTab === index
                      ? "product-showcase-tab is-active"
                      : "product-showcase-tab"
                  }
                  onClick={() => setActiveTab(index)}
                >
                  <span>{tab.title}</span>
                </button>
              ))}
            </div>

            <div
              id="product-showcase-panel"
              className="product-showcase-media"
              role="tabpanel"
              tabIndex={0}
            >
              <div className="product-showcase-glow" aria-hidden="true" />
              <div className="product-showcase-image-wrap">
                <Image
                  key={active.image}
                  src={active.image}
                  alt={active.alt}
                  fill
                  sizes="(min-width: 1024px) 34rem, 92vw"
                  priority={activeTab === 0}
                  className="product-showcase-image is-active"
                />
                <span className="product-concept-badge">Concept preview</span>
              </div>

              <div className="product-showcase-copy" aria-live="polite">
                <p className="product-showcase-copy__label">
                  {String(activeTab + 1).padStart(2, "0")} / 05
                </p>
                <h3>{active.title}</h3>
                <p>{active.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
