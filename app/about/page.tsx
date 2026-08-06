"use client";

import React from "react";
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

export default function AboutPage() {
  const boardMembers = [
    {
      name: "Siddhi Prashant Sapkale",
      role: "Director",
      description:
        "Focuses on strategic direction, organizational growth, and cross-functional operations across company initiatives.",
    },
    {
      name: "Aditya Prashant Sapkale",
      role: "Director",
      description:
        "Drives corporate technology strategy, system architecture, and product development alignment.",
    },
    {
      name: "Om Vinayak Muchandikar",
      role: "Director",
      description:
        "Leads product execution, operational research, and high-impact digital workflows for complex domain problems.",
    },
    {
      name: "Tejas Pawar",
      role: "Director",
      description:
        "Oversees engineering practices, technical infrastructure, and system reliability standards.",
    },
  ];

  const operatingPrinciples = [
    {
      number: "01",
      title: "Problem-First Innovation",
      description:
        "The company begins with operational reality and ground-level workflow problems, not fashionable technology trends.",
    },
    {
      number: "02",
      title: "Human-Controlled AI",
      description:
        "AI assists analysis, data synthesis, and organization while crucial decisions remain transparent and reviewable by people.",
    },
    {
      number: "03",
      title: "Structured Product Development",
      description:
        "Requirements, domain workflows, architecture, safety testing, and approvals are treated as non-negotiable core work.",
    },
    {
      number: "04",
      title: "Domain Depth",
      description:
        "We deeply study and map the exact physical or operational environments in which our software products are deployed.",
    },
    {
      number: "05",
      title: "Accountable Systems",
      description:
        "Every system action, evidence log, approval step, and structural modification is traceable and auditable.",
    },
    {
      number: "06",
      title: "Selective Ambition",
      description:
        "AASIOM pursues focused, high-value opportunities rather than attempting to build generic, one-size-fits-all platforms.",
    },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-[#f8fafc] text-[#0d2b45] antialiased selection:bg-[#21b0a6]/20 selection:text-[#0d2b45]">
      
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white py-16 sm:py-24 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(#21b0a6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative mx-auto max-w-6xl px-4 sm:px-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#21b0a6]/25 bg-[#21b0a6]/5 px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold tracking-wider text-[#21b0a6] uppercase mb-6 sm:mb-8 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#21b0a6]" />
            AASIOM Technologies Private Limited
          </div>
          <h1 className="max-w-4xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.18] tracking-tight text-[#0d2b45]">
            Building focused, human-controlled technology products for complex operational environments.
          </h1>
        </motion.div>
      </section>

      {/* Mission, Vision & Direction Section */}
      <section className="border-b border-slate-200/80 bg-[#f8fafc] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeInUp}
            className="mb-12 sm:mb-16 max-w-3xl"
          >
            <p className="mb-2 text-xs font-bold tracking-widest text-[#21b0a6] uppercase">
              About
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d2b45]">
              Mission, vision, and direction
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-slate-600">
              We are an emerging technology and product company focused on transforming fragmented, high-pressure, and information-heavy operations into clear digital workflows. We combine domain research, software engineering, responsible AI, and human judgment to build systems that improve visibility, coordination, and accountability.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2"
          >
            {/* Vision Card */}
            <motion.div
              variants={fadeInUp}
              className="group relative rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 md:p-10 shadow-sm transition-all duration-300 hover:border-[#21b0a6]/40 hover:shadow-lg hover:shadow-[#0d2b45]/[0.02]"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#21b0a6]/10 text-[#21b0a6]">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl sm:text-2xl font-bold text-[#0d2b45]">Vision</h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                To build trusted digital systems that help organizations operate with greater clarity, speed, coordination, and human control.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              variants={fadeInUp}
              className="group relative rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 md:p-10 shadow-sm transition-all duration-300 hover:border-[#21b0a6]/40 hover:shadow-lg hover:shadow-[#0d2b45]/[0.02]"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#21b0a6]/10 text-[#21b0a6]">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl sm:text-2xl font-bold text-[#0d2b45]">Mission</h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                To identify important operational problems, understand them deeply, and build focused software products that organize information, guide action, and create accountable outcomes.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Distinctive Operating Principles */}
      <section className="border-b border-slate-200/80 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeInUp}
            className="mb-12 sm:mb-16"
          >
            <p className="mb-2 text-xs font-bold tracking-widest text-[#21b0a6] uppercase">
              AI-First Technology and Product Company
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d2b45]">
              Distinctive Operating Principles
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {operatingPrinciples.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative rounded-2xl border border-slate-200/90 bg-[#f8fafc] p-6 sm:p-7 transition-all duration-300 hover:bg-white hover:border-[#21b0a6]/30 hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#21b0a6] tracking-widest uppercase">
                    {item.number}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-[#21b0a6] transition-colors" />
                </div>
                <h3 className="mb-2 text-base sm:text-lg font-bold text-[#0d2b45]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership / Board of Directors */}
      <section className="border-b border-slate-200/80 bg-[#f8fafc] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeInUp}
            className="mb-12 sm:mb-16"
          >
            <p className="mb-2 text-xs font-bold tracking-widest text-[#21b0a6] uppercase">
              Leadership
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d2b45]">
              Board of Directors
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {boardMembers.map((member, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#21b0a6]/40 hover:shadow-md"
              >
                <div>
                  <span className="mb-4 inline-block rounded-md bg-[#21b0a6]/10 px-2.5 py-1 text-[11px] font-bold text-[#21b0a6]">
                    {member.role}
                  </span>
                  <h3 className="mb-2 text-base sm:text-lg font-bold text-[#0d2b45]">
                    {member.name}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Director's Statement */}
      <section className="border-b border-slate-200/80 bg-white py-16 sm:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeInUp}
          className="mx-auto max-w-4xl px-4 sm:px-6 text-center"
        >
          <p className="mb-4 text-xs font-bold tracking-widest text-[#21b0a6] uppercase">
            Director&apos;s Message
          </p>
          <blockquote className="relative mb-8 text-base sm:text-xl font-normal leading-relaxed italic text-slate-700 md:text-2xl">
            &ldquo;AASIOM&apos;s work is focused on understanding where operational coordination breaks down inside complex transport and real-world workflows. We are not starting with a large platform promise. We are starting with one workflow, one industry, and one measurable problem. The goal is simple: help organizations convert scattered information into one clear, usable operating picture.&rdquo;
          </blockquote>
          <p className="text-sm sm:text-base font-bold text-[#0d2b45]">Om Vinayak Muchandikar</p>
          <p className="text-xs font-medium text-slate-500">Director</p>
        </motion.div>
      </section>

      {/* Corporate Facts */}
      <section className="border-b border-slate-200/80 bg-[#f8fafc] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeInUp}
            className="mb-12 sm:mb-16"
          >
            <p className="mb-2 text-xs font-bold tracking-widest text-[#21b0a6] uppercase">
              Corporate Facts
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d2b45]">
              Company Snapshot
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            <motion.div variants={fadeInUp} className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
              <p className="mb-2 text-[11px] font-bold tracking-wider text-[#21b0a6] uppercase">
                Incorporation Status
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#0d2b45]">
                Registered Private Limited Company
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
              <p className="mb-2 text-[11px] font-bold tracking-wider text-[#21b0a6] uppercase">
                Headquarters
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#0d2b45]">
                Dadar East, Mumbai, Maharashtra, India
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
              <p className="mb-2 text-[11px] font-bold tracking-wider text-[#21b0a6] uppercase">
                Focus Sector
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#0d2b45]">
                Transport &amp; Logistics Operations
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
              <p className="mb-2 text-[11px] font-bold tracking-wider text-[#21b0a6] uppercase">
                Long-Term Ambition
              </p>
              <p className="text-xs leading-relaxed text-slate-600">
                To build software products that solve difficult operational problems through proprietary initiatives.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Perfect Optical Alignment CTA Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeInUp}
            className="mx-auto flex flex-col items-center justify-center text-center rounded-3xl border border-slate-200/90 bg-slate-50/70 p-8 sm:p-14 md:p-16 shadow-sm"
          >
            <p className="mb-4 text-xs font-bold tracking-widest text-[#21b0a6] uppercase text-center">
              Let&apos;s Build Together
            </p>
            
            <h2 className="mb-5 max-w-xl text-2xl sm:text-4xl font-bold tracking-tight text-[#0d2b45] text-center text-balance leading-relaxed">
              Ready to solve complex operational challenges?
            </h2>
            
            <p className="mb-9 max-w-md text-xs sm:text-base text-slate-600 leading-loose text-center">
              Whether you need to streamline high-pressure operational workflows or evaluate custom system architectures, our team is ready to collaborate.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/product"
                className="w-full sm:w-44 rounded-xl border border-slate-300 bg-white py-3.5 text-xs sm:text-sm font-semibold text-[#0d2b45] shadow-sm transition-all hover:bg-slate-50 hover:border-slate-400 text-center"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-44 rounded-xl bg-[#21b0a6] py-3.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#1ca096] text-center"
              >
                Discuss a Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}