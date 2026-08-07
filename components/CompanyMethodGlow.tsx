"use client";

import { useEffect, useRef } from "react";

type MethodStep = {
  readonly number: number | string;
  readonly title: string;
  readonly description: string;
};

type CompanyMethodGlowProps = {
  readonly steps: readonly MethodStep[];
};

const stageMeta = [
  { kicker: "Research signals", status: "Operational context captured" },
  { kicker: "Requirements system", status: "Decision model defined" },
  { kicker: "System blueprint", status: "Boundaries and controls mapped" },
  { kicker: "Phased implementation", status: "Modules moving into delivery" },
  { kicker: "Quality gate", status: "Behaviour checked against specification" },
  { kicker: "Feedback loop", status: "Verified learning feeds the next cycle" },
] as const;

function DiscoverVisual() {
  return (
    <div className="method-canvas method-canvas--discover">
      <div className="method-canvas__grid" />
      <div className="discover-signals">
        <span>Users</span>
        <span>Pain points</span>
        <span>Evidence</span>
      </div>
      <div className="discover-streams" aria-hidden="true">
        <i /><i /><i />
      </div>
      <div className="discover-map">
        <div className="discover-map__header">
          <span>Operational map</span>
          <b>01</b>
        </div>
        <div className="discover-map__row"><span /> Information flow</div>
        <div className="discover-map__row"><span /> Decision points</div>
        <div className="discover-map__row"><span /> Constraints</div>
      </div>
    </div>
  );
}

function DefineVisual() {
  return (
    <div className="method-canvas method-canvas--define">
      <div className="method-canvas__grid" />
      <div className="define-question">Operational problem</div>
      <div className="define-lanes">
        <div><span>Roles</span><b>Who acts?</b></div>
        <div><span>Decisions</span><b>What must be clear?</b></div>
        <div><span>Criteria</span><b>What proves success?</b></div>
      </div>
      <div className="define-output">
        <span>Defined product brief</span>
        <i />
      </div>
    </div>
  );
}

function ArchitectVisual() {
  return (
    <div className="method-canvas method-canvas--architect">
      <div className="method-canvas__grid" />
      <div className="architecture-stack">
        <div className="architecture-layer architecture-layer--top">
          <span>Experience layer</span><b>Interfaces</b>
        </div>
        <div className="architecture-layer architecture-layer--middle">
          <span>Decision layer</span><b>Workflow + AI</b>
        </div>
        <div className="architecture-layer architecture-layer--bottom">
          <span>Foundation layer</span><b>Data + Controls</b>
        </div>
      </div>
      <div className="architecture-rail" aria-hidden="true">
        <span /><span /><span />
      </div>
      <div className="architecture-badge">Responsible system boundary</div>
    </div>
  );
}

function BuildVisual() {
  return (
    <div className="method-canvas method-canvas--build">
      <div className="method-canvas__grid" />
      <div className="build-modules">
        <div><span>01</span><b>Core workflow</b><i className="is-complete" /></div>
        <div><span>02</span><b>Data layer</b><i className="is-complete" /></div>
        <div><span>03</span><b>Interface</b><i className="is-active" /></div>
        <div><span>04</span><b>Integration</b><i /></div>
      </div>
      <div className="build-release">
        <span>Phased build</span>
        <div className="build-release__track"><i /></div>
        <small>Reusable modules · controlled expansion</small>
      </div>
    </div>
  );
}

function ValidateVisual() {
  return (
    <div className="method-canvas method-canvas--validate">
      <div className="method-canvas__grid" />
      <div className="validate-panel">
        <div className="validate-panel__title"><span>Validation matrix</span><b>Review</b></div>
        <div className="validate-row"><i>✓</i><span>Behaviour</span><b>Aligned</b></div>
        <div className="validate-row"><i>✓</i><span>Accessibility</span><b>Checked</b></div>
        <div className="validate-row"><i>✓</i><span>Reliability</span><b>Checked</b></div>
        <div className="validate-row validate-row--focus"><i>•</i><span>Security assumptions</span><b>Review</b></div>
      </div>
      <div className="validate-score">
        <span>Specification</span>
        <strong>↔</strong>
        <span>Observed behaviour</span>
      </div>
    </div>
  );
}

function ScaleVisual() {
  return (
    <div className="method-canvas method-canvas--scale">
      <div className="method-canvas__grid" />
      <div className="scale-loop" aria-hidden="true">
        <div className="scale-loop__ring scale-loop__ring--outer" />
        <div className="scale-loop__ring scale-loop__ring--inner" />
        <div className="scale-loop__core"><span>Verified</span><b>Feedback</b></div>
        <span className="scale-loop__node scale-loop__node--one">Observe</span>
        <span className="scale-loop__node scale-loop__node--two">Improve</span>
        <span className="scale-loop__node scale-loop__node--three">Govern</span>
      </div>
      <div className="scale-roadmap">
        <span>Next cycle</span>
        <div><i /><i /><i /><i /></div>
        <small>Improve without losing accountability</small>
      </div>
    </div>
  );
}

function StageVisual({ index }: { readonly index: number }) {
  switch (index) {
    case 0:
      return <DiscoverVisual />;
    case 1:
      return <DefineVisual />;
    case 2:
      return <ArchitectVisual />;
    case 3:
      return <BuildVisual />;
    case 4:
      return <ValidateVisual />;
    default:
      return <ScaleVisual />;
  }
}

export function CompanyMethodGlow({ steps }: CompanyMethodGlowProps) {
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list || typeof IntersectionObserver === "undefined") return;

    const cards = Array.from(
      list.querySelectorAll<HTMLElement>("[data-method-card]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-active", entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: "-28% 0px -28% 0px",
        threshold: 0.08,
      },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <ol ref={listRef} className="company-method-list list-none !p-0">
      {steps.map((step, index) => {
        const displayNumber =
          typeof step.number === "number"
            ? String(step.number).padStart(2, "0")
            : step.number;
        const meta = stageMeta[index] ?? stageMeta[stageMeta.length - 1];

        return (
          <li key={`${step.number}-${step.title}`} className="company-method-stage !mt-0">
            <article
              data-method-card
              className="company-method-card"
              aria-label={`${displayNumber}. ${step.title}`}
            >
              <div className="company-method-card__copy">
                <p className="company-method-card__number">{displayNumber}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              <div className="company-method-visual" aria-hidden="true">
                <div className="company-method-visual__topline">
                  <span>{meta.kicker}</span>
                  <span>{step.title}</span>
                </div>
                <StageVisual index={index} />
                <div className="company-method-visual__status">
                  <span className="company-method-visual__pulse" />
                  {meta.status}
                </div>
              </div>
            </article>

            {index < steps.length - 1 ? (
              <div className="company-method-connector" aria-hidden="true">
                <span>{String(index + 2).padStart(2, "0")}</span>
              </div>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
