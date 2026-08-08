"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function StrategicReviewPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const evaluationPillars = [
    {
      title: "Architecture & Infrastructure",
      desc: "Audit of system scalability, database schema resilience, cloud hosting protocols, and API endpoint throughput.",
      icon: (
        <svg className="h-6 w-6 text-[#21b0a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Human-Confirmed AI Workflows",
      desc: "Evaluation of autonomous telemetry agents, incident triage pipelines, and human-in-the-loop validation safety bounds.",
      icon: (
        <svg className="h-6 w-6 text-[#21b0a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h6l-.75-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "ANVIRA Fleet Incident Readiness",
      desc: "Operational assessment for deploying WhatsApp-first incident command workflows across commercial transport fleets.",
      icon: (
        <svg className="h-6 w-6 text-[#21b0a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: "Security & Governance Protocols",
      desc: "Comprehensive review of IP protection, data encryption standards, and non-disclosure compliance frameworks.",
      icon: (
        <svg className="h-6 w-6 text-[#21b0a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const reviewProcess = [
    {
      step: "01",
      title: "Technical Ingestion & NDA",
      desc: "Formalizing non-disclosure agreements, establishing secure communication lines, and reviewing current system blueprints or operational briefs.",
    },
    {
      step: "02",
      title: "Architecture & Bottleneck Audit",
      desc: "Deep-dive analysis into data schemas, dispatch workflows, driver escalation channels, or API integration bottlenecks.",
    },
    {
      step: "03",
      title: "Roadmap & Pilot Blueprinting",
      desc: "Defining phased milestones, engineering resource allocations, risk mitigation protocols, and pilot deployment parameters.",
    },
    {
      step: "04",
      title: "Executive Sign-Off & Alignment",
      desc: "Presenting the final Strategic Review Report, architecture recommendations, and operational deployment schedule.",
    },
  ];

  const faqs = [
    {
      question: "What is the primary objective of an AASIOM Strategic Review?",
      answer:
        "The Strategic Review establishes a technical audit, evaluates architectural feasibility, and defines a milestone-based deployment roadmap before engineering capacity is committed.",
    },
    {
      question: "How does the ANVIRA Pilot Fleet Partnership evaluation work?",
      answer:
        "For fleet operators, we assess current dispatcher-driver communication channels, evaluate WhatsApp-first incident command workflows, and structure a controlled pilot deployment.",
    },
    {
      question: "What deliverables are provided upon review completion?",
      answer:
        "You receive a comprehensive System Architecture Blueprint, Milestone Development Schedule, Technology Stack Decision Matrix, and an IP & Security Compliance Brief.",
    },
    {
      question: "How are intellectual property rights and data security handled?",
      answer:
        "All discussions and strategic audits are protected under strict Non-Disclosure Agreements (NDAs). Clients retain 100% ownership of their proprietary code, operational data, and assets.",
    },
    {
      question: "Can strategic review engagements transition directly into product development?",
      answer:
        "Yes. Once the architectural review and specification phase is complete, engineering timelines and dedicated developer capacity can be scheduled immediately.",
    },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-[#f8fafc] text-[#0d2b45] antialiased selection:bg-[#21b0a6]/20 selection:text-[#0d2b45]">
      
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(#21b0a6_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.04]" />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#21b0a6]/30 bg-[#21b0a6]/5 px-3.5 py-1.5 text-[11px] sm:text-xs font-bold tracking-wider text-[#21b0a6] uppercase mb-6">
            <span className="h-2 w-2 rounded-full bg-[#21b0a6] animate-pulse" />
            Technical Architecture &amp; Strategy
          </div>
          <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight text-[#0d2b45] text-balance">
            Strategic Review &amp; Architecture Audit.
          </h1>
          <p className="mt-5 max-w-3xl text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 text-pretty mb-8">
            Align your enterprise technical strategy, evaluate ANVIRA fleet pilot readiness, or audit system infrastructure with AASIOM&apos;s core engineering team.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact?type=strategic_review"
              style={{ backgroundColor: "#21b0a6", color: "#ffffff" }}
              className="rounded-xl px-7 py-3.5 text-xs sm:text-sm font-bold shadow-md hover:bg-[#1ca096] transition-all"
            >
              Request Strategic Review &rarr;
            </Link>
            <Link
              href="/contact?type=anvira_pilot"
              className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-[#0d2b45] hover:bg-slate-50 transition-all"
            >
              Apply for ANVIRA Fleet Pilot
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Core Review Domains */}
      <section className="py-16 border-b border-slate-200/80 bg-white/60">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="mb-10 text-center sm:text-left">
            <p className="text-xs font-bold tracking-widest text-[#21b0a6] uppercase mb-2">
              Evaluation Framework
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2b45]">
              Core Review Domains
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {evaluationPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:border-[#21b0a6]/40 transition-all duration-300"
              >
                <div className="mb-4 inline-block rounded-xl bg-[#21b0a6]/10 p-3">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-[#0d2b45] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4-Step Review Process Workflow */}
      <section className="py-16 border-b border-slate-200/80 bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="mb-12 text-center sm:text-left">
            <p className="text-xs font-bold tracking-widest text-[#21b0a6] uppercase mb-2">
              Structured Methodology
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d2b45]">
              The Review Process
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reviewProcess.map((proc, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs">
                <span className="text-2xl font-black text-[#21b0a6]/40 block mb-3">
                  {proc.step}
                </span>
                <h3 className="text-base font-bold text-[#0d2b45] mb-2">
                  {proc.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="rounded-3xl border border-[#21b0a6]/30 bg-gradient-to-br from-[#21b0a6]/10 via-white to-white p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold tracking-widest text-[#21b0a6] uppercase block mb-1">
                Initiate Scoping
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2b45]">
                Ready to review your technical architecture?
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Submit your operational brief through our unified project intake form. Our senior engineering leads will evaluate your requirements and reach out within 24–48 hours.
              </p>
            </div>
            <Link
              href="/contact?type=strategic_review"
              style={{ backgroundColor: "#21b0a6", color: "#ffffff" }}
              className="shrink-0 rounded-xl px-8 py-4 text-xs sm:text-sm font-bold shadow-md hover:bg-[#1ca096] transition-all"
            >
              Start Strategic Review &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-[#f8fafc]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeInUp}
            className="mb-10 text-center sm:text-left"
          >
            <p className="mb-2 text-xs font-bold tracking-widest text-[#21b0a6] uppercase">
              Frequently Asked Questions
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d2b45]">
              Strategic Review FAQ
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={staggerContainer}
            className="divide-y divide-slate-200 border-t border-b border-slate-200"
          >
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <motion.div key={idx} variants={fadeInUp} className="py-2">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left py-4 flex items-center justify-between gap-6 cursor-pointer group"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#0d2b45] leading-relaxed group-hover:text-[#21b0a6] transition-colors">
                      {faq.question}
                    </span>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "bg-[#21b0a6] text-white rotate-180" : "bg-slate-100 text-slate-500"}`}>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </main>
  );
}