"use client";

import { useState } from "react";
import styles from "./about-v5.module.css";

const panels = [
  {
    id: "who",
    number: "01",
    label: "Who We Are",
    eyebrow: "WHO WE ARE",
    title: "Technology services for real business needs.",
    description:
      "AASIOM Technologies Private Limited is a Mumbai-based technology and product engineering company. We work with businesses, founders and teams to design and build websites, web applications, dashboards, automation, AI-enabled tools and custom software.",
    image: "/images/about/story-who-v11.jpg",
    highlights: [
      ["Client Focused", "Your goals drive our solutions."],
      ["End to End", "From idea to deployment."],
      ["Quality First", "Clean, secure and maintainable."],
      ["Measurable Impact", "Useful outcomes over buzzwords."],
    ],
  },
  {
    id: "mission",
    number: "02",
    label: "Our Mission",
    eyebrow: "OUR MISSION",
    title: "Turn ideas and manual workflows into useful digital systems.",
    description:
      "We help clients move from a requirement, workflow problem or early-stage idea to a clear solution through structured discovery, design, engineering, automation, deployment and support.",
    image: "/images/about/story-mission-clean.jpg",
    highlights: [
      ["Discover", "Understand the business need."],
      ["Define", "Clarify scope and outcomes."],
      ["Build", "Engineer the agreed solution."],
      ["Support", "Improve after launch."],
    ],
  },
  {
    id: "vision",
    number: "03",
    label: "Our Vision",
    eyebrow: "OUR VISION",
    title: "A trusted technology partner with deeper product capability.",
    description:
      "Our direction is to grow a dependable cross-industry client-services practice while continuing to strengthen the research, architecture and engineering discipline required to create selected proprietary products.",
    image: "/images/about/story-vision-clean.jpg",
    highlights: [
      ["Services", "Commercially useful today."],
      ["Research", "Understand before building."],
      ["Engineering", "Build for reliability."],
      ["Products", "Develop selectively."],
    ],
  },
  {
    id: "principles",
    number: "04",
    label: "Our Principles",
    eyebrow: "OUR PRINCIPLES",
    title: "Clear scope. Practical engineering. Responsible delivery.",
    description:
      "We start with the problem and intended outcome, keep decisions visible, select technology for a reason and treat usability, security, testing and maintainability as part of the build from the start.",
    image: "/images/about/story-principles-clean.jpg",
    highlights: [
      ["Problem First", "Technology follows the need."],
      ["Transparent", "Decisions stay visible."],
      ["Responsible", "Human control where it matters."],
      ["Maintainable", "Built to evolve."],
    ],
  },
  {
    id: "direction",
    number: "05",
    label: "Our Direction",
    eyebrow: "OUR DIRECTION",
    title: "Client delivery now. Product ambition alongside it.",
    description:
      "Client technology services are AASIOM's immediate commercial focus. Alongside delivery work, selected proprietary initiatives such as ANVIRA deepen the company's product, research and engineering capability.",
    image: "/images/about/story-direction-v11.jpg",
    highlights: [
      ["Web", "Sites, apps and dashboards."],
      ["Automation", "Smarter workflows."],
      ["AI", "Practical assistive features."],
      ["Product R&D", "Selective proprietary work."],
    ],
  },
] as const;

function HighlightIcon({ index }: { index: number }) {
  if (index === 0) {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M5 20c.8-4 3-6 7-6s6.2 2 7 6"/></svg>;
  }
  if (index === 1) {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>;
  }
  if (index === 2) {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-5"/></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V9M10 19V5M16 19v-7M22 19V3"/></svg>;
}

export default function AboutStoryPanels() {
  const [activeId, setActiveId] = useState<(typeof panels)[number]["id"]>("who");

  return (
    <section className={styles.storySection} aria-label="AASIOM company story">
      <div className="container">
        <div className={styles.storyFrame}>
          {panels.map((panel) => {
            const active = panel.id === activeId;
            return (
              <article
                key={panel.id}
                className={`${styles.storyPanel} ${active ? styles.storyPanelActive : ""}`}
                style={{ backgroundImage: `url(${panel.image})` }}
              >
                <button
                  type="button"
                  className={styles.storyTab}
                  aria-expanded={active}
                  onClick={() => setActiveId(panel.id)}
                >
                  <span className={styles.storyNumber}>{panel.number}</span>
                  <span className={styles.storyTabLabel}>{panel.label}</span>
                </button>

                <div className={styles.storyContent} aria-hidden={!active}>
                  <div className={styles.storyActiveNumber} aria-hidden="true">
                    <span>{panel.number}</span><i />
                  </div>
                  <div className={styles.storyCopy}>
                    <p className={styles.storyEyebrow}>{panel.eyebrow}</p>
                    <h2>{panel.title}</h2>
                    <p className={styles.storyDescription}>{panel.description}</p>
                  </div>
                  <div className={styles.storyHighlights}>
                    {panel.highlights.map(([title, description], index) => (
                      <div className={styles.storyHighlight} key={title}>
                        <div className={styles.storyHighlightIcon}><HighlightIcon index={index} /></div>
                        <strong>{title}</strong>
                        <span>{description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
