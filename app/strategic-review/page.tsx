"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// Framer Motion variants with explicit const assertions for easing
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
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    role: "",
    workEmail: "",
    interestType: "pilot_fleet",
    message: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;
    setSubmitted(true);
  };

  const engagementModels = [
    {
      title: "Pilot Fleet Partners",
      tag: "Operations & Logistics",
      description:
        "Commercial transport and logistics operators seeking structured, AI-assisted incident command and documentation workflows to reduce fleet downtime.",
      icon: (
        <svg className="h-5 w-5 text-[#21b0a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: "Domain Advisors",
      tag: "Industry Expertise",
      description:
        "Senior leaders across supply chain management, fleet safety compliance, enterprise SaaS scaling, and regulatory frameworks in logistics.",
      icon: (
        <svg className="h-5 w-5 text-[#21b0a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Technology & Systems",
      tag: "Integrations & Ecosystems",
      description:
        "Platforms offering IoT telemetry, telematics hardware, enterprise ERP systems, and secure cloud communication infrastructure.",
      icon: (
        <svg className="h-5 w-5 text-[#21b0a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a2 2 0 01-4 0V4zm-6 8a2 2 0 114 0v1a2 2 0 01-4 0v-1zm12 0a2 2 0 114 0v1a2 2 0 01-4 0v-1zM4 19a2 2 0 114 0v1a2 2 0 01-4 0v-1zm12 0a2 2 0 114 0v1a2 2 0 01-4 0v-1z" />
        </svg>
      ),
    },
    {
      title: "Strategic Investors",
      tag: "Growth & Capital",
      description:
        "Institutional and angel investors aligned with specification-led product development, human-governed AI, and scalable B2B systems.",
      icon: (
        <svg className="h-5 w-5 text-[#21b0a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  const pillars = [
    {
      number: "01",
      title: "Specification-Led Engineering",
      detail: "Every product workflow is thoroughly specified to ground-level operational realities before writing production code.",
    },
    {
      number: "02",
      title: "Human-Confirmed AI",
      detail: "AI assists with synthesis, extraction, and gap detection, while critical operational decisions remain human-verifiable.",
    },
    {
      number: "03",
      title: "Phased Governance",
      detail: "Milestones are structured into architected specifications, core backend validation, controlled pilots, and enterprise scale.",
    },
  ];

  const anviraCapabilities = [
    "WhatsApp-First Communication Interface",
    "Automated Evidence & Dossier Assembly",
    "Human-Confirmed Severity Classification",
    "Downtime & Blocker Tracking Workflows",
  ];

  return (
    <main id="main-content" className="min-h-screen bg-[#f8fafc] text-[#0d2b45] antialiased selection:bg-[#21b0a6]/20 selection:text-[#0d2b45]">
      
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white py-12 sm:py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(#21b0a6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative mx-auto max-w-6xl px-4 sm:px-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#21b0a6]/25 bg-[#21b0a6]/5 px-3 py-1 text-[11px] sm:text-xs font-bold tracking-wider text-[#21b0a6] uppercase mb-4 sm:mb-8 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#21b0a6] animate-pulse" />
            Strategic Review &amp; Partnerships
          </div>
          <h1 className="max-w-4xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.18] tracking-tight text-[#0d2b45]">
            Build, Partner or Invest in the Next Stage of AASIOM.
          </h1>
          <p className="mt-4 sm:mt-6 max-w-3xl text-xs sm:text-base md:text-lg leading-relaxed text-slate-600">
            AASIOM Technologies Private Limited is an AI-first technology and product company engineering focused digital systems for complex operational environments. We collaborate with select fleet operators, industry advisors, technology partners, and strategic investors.
          </p>
        </motion.div>
      </section>

      {/* Strategic Direction & Framework */}
      <section className="border-b border-slate-200/80 bg-[#f8fafc] py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeInUp}
            className="mb-10 sm:mb-16 max-w-3xl"
          >
            <p className="mb-2 text-xs font-bold tracking-widest text-[#21b0a6] uppercase">
              Opportunity Overview
            </p>
            <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-[#0d2b45]">
              Solving fragmented operational coordination at scale
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-base md:text-lg leading-relaxed text-slate-600">
              High-pressure operating environments—starting with logistics and fleet operations—frequently suffer from delayed decisions, unorganized evidence, and untracked downtime. AASIOM transforms chaotic, multi-channel communication into clear, actionable digital workflows.
            </p>
          </motion.div>

          {/* Development Discipline Pillars */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-3 mb-10 sm:mb-16"
          >
            {pillars.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-[#21b0a6]/40 hover:shadow-md"
              >
                <div>
                  <span className="text-xs font-bold text-[#21b0a6] tracking-widest uppercase">
                    {item.number}
                  </span>
                  <h3 className="mt-3 mb-2 text-base sm:text-xl font-bold text-[#0d2b45] leading-snug text-balance">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-pretty">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Collaboration Models Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {engagementModels.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-[#21b0a6]/40 hover:shadow-md"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <div className="rounded-xl bg-[#21b0a6]/10 p-2.5">
                      {item.icon}
                    </div>
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="mb-2 text-base sm:text-xl font-bold text-[#0d2b45] leading-snug text-balance">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 text-pretty">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Flagship Initiative Showcase */}
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeInUp}
            className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-10 md:p-14 shadow-sm"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              
              {/* Main Content Column */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#21b0a6]/30 bg-[#21b0a6]/10 px-3 py-1 text-[11px] sm:text-xs font-bold tracking-wider text-[#21b0a6] uppercase">
                  <span className="h-2 w-2 rounded-full bg-[#21b0a6]" />
                  Flagship Initiative
                </div>
                
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0d2b45] leading-snug text-balance">
                  ANVIRA: WhatsApp-First Incident Command Platform
                </h2>
                
                <p className="text-xs sm:text-base text-slate-600 leading-relaxed text-pretty">
                  Developed specifically for Indian commercial trucking fleets, ANVIRA consolidates scattered phone calls, chat messages, voice notes, and photos into a structured incident case with human-confirmed severity, evidence tracking, and audited dossier generation.
                </p>

                {/* Status Badges */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-semibold text-[#0d2b45]">
                  <span className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="h-2 w-2 rounded-full bg-[#21b0a6]" />
                    Active Development Status
                  </span>
                  <span className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="h-2 w-2 rounded-full bg-[#21b0a6]" />
                    Architected Specifications Complete
                  </span>
                </div>
              </div>

              {/* Clean Capability List */}
              <div className="lg:col-span-5 border-t border-slate-200/80 pt-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0 space-y-4">
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-[#21b0a6] uppercase">
                    Capabilities Overview
                  </span>
                  <h3 className="mt-1 text-base sm:text-lg font-bold text-[#0d2b45]">
                    Core Platform Features
                  </h3>
                </div>

                <div className="space-y-3.5 pt-1">
                  {anviraCapabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#21b0a6]/15 text-[#21b0a6]">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-[#0d2b45] leading-normal">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Review Request Form */}
      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeInUp}
            className="rounded-3xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-12 shadow-sm"
          >
            <div className="mb-6 sm:mb-8 text-left">
              <p className="mb-1.5 text-xs font-bold tracking-widest text-[#21b0a6] uppercase">
                Confidential Inquiry
              </p>
              <h2 className="text-xl sm:text-3xl font-bold text-[#0d2b45]">
                Request a Strategic Review
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Qualified inquiries are routed directly to the Founder for discussion. Private progress documentation, product roadmaps, and technical architecture specs are provided following qualification.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-[#21b0a6]/30 bg-[#21b0a6]/10 p-6 text-center">
                <h3 className="text-base sm:text-lg font-bold text-[#0d2b45]">Inquiry Received</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600">
                  Thank you for reaching out. The Founder will review your details and respond via work email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#0d2b45] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base sm:text-sm text-[#0d2b45] outline-none focus:border-[#21b0a6] focus:ring-1 focus:ring-[#21b0a6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0d2b45] mb-1.5">
                      Organization / Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Apex Logistics"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base sm:text-sm text-[#0d2b45] outline-none focus:border-[#21b0a6] focus:ring-1 focus:ring-[#21b0a6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#0d2b45] mb-1.5">
                      Your Role *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="e.g. Fleet Director / Managing Partner"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base sm:text-sm text-[#0d2b45] outline-none focus:border-[#21b0a6] focus:ring-1 focus:ring-[#21b0a6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0d2b45] mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base sm:text-sm text-[#0d2b45] outline-none focus:border-[#21b0a6] focus:ring-1 focus:ring-[#21b0a6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0d2b45] mb-1.5">
                    Primary Area of Interest *
                  </label>
                  <select
                    value={formData.interestType}
                    onChange={(e) => setFormData({ ...formData, interestType: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base sm:text-sm text-[#0d2b45] outline-none focus:border-[#21b0a6] focus:ring-1 focus:ring-[#21b0a6]"
                  >
                    <option value="pilot_fleet">ANVIRA Pilot Fleet Deployment</option>
                    <option value="domain_advisor">Domain Advisory / Industry Expertise</option>
                    <option value="tech_partner">Technology or Systems Partnership</option>
                    <option value="strategic_investor">Investment &amp; Growth Conversation</option>
                    <option value="other">General Strategic Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0d2b45] mb-1.5">
                    Message / Context
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly outline your background, operational needs, or discussion objectives..."
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base sm:text-sm text-[#0d2b45] outline-none focus:border-[#21b0a6] focus:ring-1 focus:ring-[#21b0a6]"
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-[#21b0a6] focus:ring-[#21b0a6]"
                  />
                  <label htmlFor="consent" className="text-xs text-slate-600 leading-normal">
                    I agree to allow AASIOM Technologies Private Limited to store and process these details to respond to this strategic inquiry in accordance with our{" "}
                    <Link href="/privacy-policy" className="text-[#21b0a6] underline hover:text-[#1ca096]">
                      Privacy Policy
                    </Link>.
                  </label>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    style={{ 
                      backgroundColor: "#21b0a6", 
                      color: "#ffffff",
                      padding: "14px 32px",
                      borderRadius: "12px",
                      lineHeight: "1.2",
                      display: "inline-block"
                    }}
                    className="w-full sm:w-auto text-xs sm:text-sm font-semibold shadow-sm transition-all hover:bg-[#1ca096] focus:ring-2 focus:ring-[#21b0a6] focus:outline-none text-center cursor-pointer border-0"
                  >
                    Speak with the Founder
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}