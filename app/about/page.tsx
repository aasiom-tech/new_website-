import Image from "next/image";
import Link from "next/link";
import AboutStoryPanels from "./AboutStoryPanels";
import { aboutContent } from "@/content/about";
import styles from "./about-v5.module.css";

const researchIcons: Record<string, string> = {
  "Research & Strategy": "⌕",
  "UI/UX Design": "✦",
  "Frontend Development": "</>",
  "Product Research": "◇",
  "Backend Development": "▤",
};

export default function AboutPage() {
  return (
    <main id="main-content" className={styles.page}>
      <section className={styles.hero} aria-labelledby="about-title">
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>ABOUT AASIOM</p>
            <h1 id="about-title">
              Building technology solutions that create clarity, speed and real impact.
            </h1>
            <p className={styles.heroLead}>
              AASIOM is a technology and product engineering company delivering client projects
              while selectively building proprietary products for deeper research and engineering capability.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.primaryButton}>
                Start a Project <span aria-hidden="true">→</span>
              </Link>
              <Link href="/capabilities" className={styles.secondaryButton}>
                Explore Services
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <Image
              src="/images/about/about-hero-services.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 900px) 100vw, 52vw"
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      <AboutStoryPanels />

      <section className={styles.leadershipSection} aria-labelledby="leadership-title">
        <div className="container">
          <div className={styles.sectionHeading}>
            <p>LEADERSHIP</p>
            <h2 id="leadership-title">The people guiding AASIOM.</h2>
          </div>

          <div className={styles.leadershipGrid}>
            {aboutContent.leadership.map((member) => {
              const initials = member.name
                .split(" ")
                .map((part) => part[0])
                .slice(0, 2)
                .join("");

              return (
                <article className={styles.leadershipCard} key={member.id}>
                  <div className={styles.leadershipIdentity} aria-hidden="true">
                    <span>{initials}</span>
                  </div>
                  <div className={styles.leadershipBody}>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.researchSection} aria-labelledby="research-title">
        <div className="container">
          <div className={`${styles.sectionHeading} ${styles.sectionHeadingCenter}`}>
            <p>RESEARCH &amp; ENGINEERING TEAM</p>
            <h2 id="research-title">Research, design and development working together.</h2>
          </div>

          <div className={styles.researchGrid}>
            {aboutContent.researchTeam.map((member) => (
              <article className={styles.researchCard} key={member.id}>
                <div className={styles.researchIcon} aria-hidden="true">
                  {researchIcons[member.role] ?? "•"}
                </div>
                <h3>{member.name}</h3>
                <p className={styles.researchRole}>{member.role}</p>
                {member.description ? <p className={styles.researchDescription}>{member.description}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <p className={styles.ctaEyebrow}>WORK WITH AASIOM</p>
            <h2>Let&apos;s build something meaningful together.</h2>
          </div>
          <div className={styles.ctaRight}>
            <p>
              Have a website, web application, dashboard, automation or software requirement?
              Tell us what you want to build and where you need help.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.primaryButton}>
                Start a Project <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className={styles.ctaSecondary}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
