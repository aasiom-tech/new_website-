"use client";

import React, { useState, useRef } from "react";
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
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    engagementType: "pilot_partnership",
    currentBottleneck: "communication_silos",
    targetTimeline: "1_month",
    description: "",
    referenceUrl: "",
    consent: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const validateStep = (step: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.engagementType) newErrors.engagementType = "Please select an engagement track.";
      if (!formData.currentBottleneck) newErrors.currentBottleneck = "Please select your primary operational focus.";
    }

    if (step === 2) {
      if (!formData.description.trim()) {
        newErrors.description = "Operational brief is required before proceeding to contact details.";
        setTimeout(() => descriptionRef.current?.focus(), 100);
      }
    }

    if (step === 3) {
      if (!formData.name.trim()) {
        newErrors.name = "Full name is required.";
        setTimeout(() => nameRef.current?.focus(), 100);
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email address is required.";
        if (!newErrors.name) setTimeout(() => emailRef.current?.focus(), 100);
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
        if (!newErrors.name) setTimeout(() => emailRef.current?.focus(), 100);
      }
      if (!formData.consent) {
        newErrors.consent = "Please accept the privacy policy to submit your inquiry.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setErrors({});
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;
    setSubmitted(true);
  };

  const engagementTypes = [
    { value: "pilot_partnership", label: "ANVIRA Fleet Pilot Partnership" },
    { value: "strategic_investment", label: "Strategic Investment / Capital Alignment" },
    { value: "technical_audit", label: "System Architecture & Security Audit" },
    { value: "telematics_integration", label: "Telematics & IoT Hardware Integration" },
    { value: "custom_enterprise_build", label: "Enterprise Software & Workflow Automation" },
  ];

  const bottlenecks = [
    { value: "communication_silos", label: "Fragmented Driver / Dispatcher Communication" },
    { value: "incident_delay", label: "Delayed Escalation during Fleet Incidents" },
    { value: "legacy_stack", label: "Outdated Tech Stack / Manual Workflows" },
    { value: "data_visibility", label: "Lack of Real-time Fleet Operational Telemetry" },
  ];

  const timelines = [
    { value: "urgent", label: "Immediate (< 1 month)" },
    { value: "1_month", label: "1–2 months" },
    { value: "3_months", label: "Quarterly Planning (2–3 months)" },
    { value: "flexible", label: "Strategic Exploration" },
  ];

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

  const stepLabels = [
    { num: 1, title: "Alignment" },
    { num: 2, title: "Context" },
    { num: 3, title: "Review" },
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
          <p className="mt-5 max-w-3xl text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 text-pretty">
            Align your enterprise technical strategy, evaluate ANVIRA fleet pilot readiness, or audit system infrastructure with AASIOM&apos;s core engineering team.
          </p>
        </motion.div>
      </section>

      {/* Evaluation Pillars Grid */}
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

      {/* Main Intake Form & Corporate Credentials */}
      <section className="py-12 sm:py-20 border-b border-slate-200/80">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
            
            {/* Left Column: Multi-Step Review Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeInUp}
              className="lg:col-span-7 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xs"
            >
              {/* Form Header */}
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2b45] tracking-tight">
                  Request Strategic Review
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-[#21b0a6] mt-1.5">
                  {currentStep === 1 && "Select your engagement track and focus area."}
                  {currentStep === 2 && "Detail your current architecture or operational goals."}
                  {currentStep === 3 && "Where should we deliver the preliminary evaluation?"}
                </p>
              </div>

              {/* Stepper Bar */}
              {!submitted && (
                <div className="mb-8 border-b border-slate-100 pb-8 pt-2">
                  <div className="flex items-center justify-between">
                    {stepLabels.map((s, idx) => {
                      const isDone = currentStep > s.num;
                      const isCurrent = currentStep === s.num;

                      return (
                        <React.Fragment key={s.num}>
                          <div className="flex flex-col items-center">
                            <button
                              type="button"
                              onClick={() => {
                                if (s.num < currentStep) {
                                  setErrors({});
                                  setCurrentStep(s.num);
                                }
                              }}
                              className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                                isDone
                                  ? "bg-[#21b0a6] text-white shadow-xs"
                                  : isCurrent
                                  ? "bg-[#0d2b45] text-white ring-4 ring-[#21b0a6]/20 shadow-xs"
                                  : "bg-slate-100 text-slate-400 border border-slate-200"
                              }`}
                            >
                              {isDone ? (
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                s.num
                              )}
                            </button>
                            <span
                              className={`mt-2 text-[11px] font-bold tracking-tight ${
                                isCurrent || isDone ? "text-[#0d2b45]" : "text-slate-400"
                              }`}
                            >
                              {s.title}
                            </span>
                          </div>

                          {idx < stepLabels.length - 1 && (
                            <div
                              className={`h-[2px] flex-1 mx-3 sm:mx-6 transition-colors duration-300 ${
                                currentStep > s.num ? "bg-[#21b0a6]" : "bg-slate-200"
                              }`}
                            />
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Alert Banner for Errors */}
              {Object.keys(errors).length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 flex items-center gap-3 rounded-xl bg-rose-50 border border-rose-200/80 px-4 py-3 text-xs text-rose-900"
                >
                  <svg className="h-4 w-4 text-rose-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-semibold leading-tight">
                    Please fix the highlighted fields below to continue.
                  </p>
                </motion.div>
              )}

              {submitted ? (
                <div className="rounded-2xl border border-[#21b0a6]/30 bg-[#21b0a6]/10 p-8 sm:p-10 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#21b0a6]/20 text-[#21b0a6]">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0d2b45]">Strategic Review Request Received</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out to AASIOM Technologies. Our engineering lead will review your request and reach out within 24–48 hours to confirm review parameters.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* STEP 1: ALIGNMENT & TRACK */}
                  {currentStep === 1 && (
                    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                      
                      <div>
                        <label className="block text-xs font-bold text-[#0d2b45] mb-2">
                          Engagement Track *
                        </label>
                        <div className="relative">
                          <select
                            value={formData.engagementType}
                            onChange={(e) => {
                              setFormData({ ...formData, engagementType: e.target.value });
                              if (errors.engagementType) setErrors({ ...errors, engagementType: "" });
                            }}
                            className={`w-full appearance-none rounded-xl border px-4 py-3.5 pr-10 text-xs sm:text-sm font-medium text-[#0d2b45] outline-none transition-all duration-200 cursor-pointer ${
                              errors.engagementType
                                ? "border-rose-400 bg-rose-50/30 focus:ring-4 focus:ring-rose-500/10"
                                : "border-slate-300 bg-white focus:border-[#21b0a6] focus:ring-4 focus:ring-[#21b0a6]/15"
                            }`}
                          >
                            {engagementTypes.map((et) => (
                              <option key={et.value} value={et.value}>
                                {et.label}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                        {errors.engagementType && (
                          <p className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold text-rose-600">
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {errors.engagementType}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-bold text-[#0d2b45] mb-2">
                            Primary Bottleneck / Focus Area *
                          </label>
                          <div className="relative">
                            <select
                              value={formData.currentBottleneck}
                              onChange={(e) => {
                                setFormData({ ...formData, currentBottleneck: e.target.value });
                                if (errors.currentBottleneck) setErrors({ ...errors, currentBottleneck: "" });
                              }}
                              className={`w-full appearance-none rounded-xl border px-4 py-3.5 pr-10 text-xs sm:text-sm font-medium text-[#0d2b45] outline-none transition-all duration-200 cursor-pointer ${
                                errors.currentBottleneck
                                  ? "border-rose-400 bg-rose-50/30 focus:ring-4 focus:ring-rose-500/10"
                                  : "border-slate-300 bg-white focus:border-[#21b0a6] focus:ring-4 focus:ring-[#21b0a6]/15"
                              }`}
                            >
                              {bottlenecks.map((bn) => (
                                <option key={bn.value} value={bn.value}>
                                  {bn.label}
                                </option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                          {errors.currentBottleneck && (
                            <p className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold text-rose-600">
                              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {errors.currentBottleneck}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#0d2b45] mb-2">
                            Target Engagement Horizon
                          </label>
                          <div className="relative">
                            <select
                              value={formData.targetTimeline}
                              onChange={(e) => setFormData({ ...formData, targetTimeline: e.target.value })}
                              className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-3.5 pr-10 text-xs sm:text-sm font-medium text-[#0d2b45] outline-none focus:border-[#21b0a6] focus:ring-4 focus:ring-[#21b0a6]/15 transition-all duration-200 cursor-pointer"
                            >
                              {timelines.map((tl) => (
                                <option key={tl.value} value={tl.value}>
                                  {tl.label}
                                </option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-slate-100 flex justify-end">
                        <button
                          type="button"
                          onClick={nextStep}
                          style={{ 
                            backgroundColor: "#21b0a6", 
                            color: "#ffffff",
                            padding: "12px 28px",
                            borderRadius: "10px",
                            lineHeight: "1.2"
                          }}
                          className="text-xs sm:text-sm font-bold shadow-xs hover:bg-[#1ca096] transition-all cursor-pointer border-0"
                        >
                          Continue to Context &rarr;
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: CONTEXT & BRIEF */}
                  {currentStep === 2 && (
                    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                      
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="block text-xs font-bold text-[#0d2b45]">
                            Operational Context / Review Brief *
                          </label>
                          <span className={`text-[11px] font-medium ${formData.description.length > 500 ? "text-amber-600 font-bold" : "text-slate-400"}`}>
                            {formData.description.length} / 500 characters
                          </span>
                        </div>
                        <textarea
                          ref={descriptionRef}
                          rows={5}
                          value={formData.description}
                          onChange={(e) => {
                            setFormData({ ...formData, description: e.target.value });
                            if (errors.description) setErrors({ ...errors, description: "" });
                          }}
                          placeholder="Describe your current tech stack, fleet operational scale, critical security requirements, or pilot goals..."
                          className={`w-full rounded-xl border px-4 py-3.5 text-xs sm:text-sm text-[#0d2b45] outline-none transition-all duration-200 resize-none ${
                            errors.description
                              ? "border-rose-400 bg-rose-50/30 focus:ring-4 focus:ring-rose-500/10"
                              : "border-slate-300 bg-white focus:border-[#21b0a6] focus:ring-4 focus:ring-[#21b0a6]/15"
                          }`}
                        />
                        {errors.description && (
                          <p className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold text-rose-600">
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {errors.description}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0d2b45] mb-2">
                          Documentation Link / Existing Blueprint <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="url"
                          value={formData.referenceUrl}
                          onChange={(e) => setFormData({ ...formData, referenceUrl: e.target.value })}
                          placeholder="https://notion.site/blueprint or Architecture document"
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-xs sm:text-sm text-[#0d2b45] outline-none focus:border-[#21b0a6] focus:ring-4 focus:ring-[#21b0a6]/15 transition-all duration-200"
                        />
                      </div>

                      <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-all cursor-pointer"
                        >
                          &larr; Back
                        </button>
                        <button
                          type="button"
                          onClick={nextStep}
                          style={{ 
                            backgroundColor: "#21b0a6", 
                            color: "#ffffff",
                            padding: "12px 28px",
                            borderRadius: "10px",
                            lineHeight: "1.2"
                          }}
                          className="text-xs sm:text-sm font-bold shadow-xs hover:bg-[#1ca096] transition-all cursor-pointer border-0"
                        >
                          Continue to Review Details &rarr;
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: CONTACT & SUBMIT */}
                  {currentStep === 3 && (
                    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-bold text-[#0d2b45] mb-2">
                            Full Name *
                          </label>
                          <input
                            ref={nameRef}
                            type="text"
                            value={formData.name}
                            onChange={(e) => {
                              setFormData({ ...formData, name: e.target.value });
                              if (errors.name) setErrors({ ...errors, name: "" });
                            }}
                            placeholder="e.g. Rahul Sharma"
                            className={`w-full rounded-xl border px-4 py-3.5 text-xs sm:text-sm text-[#0d2b45] outline-none transition-all duration-200 ${
                              errors.name
                                ? "border-rose-400 bg-rose-50/30 focus:ring-4 focus:ring-rose-500/10"
                                : "border-slate-300 bg-white focus:border-[#21b0a6] focus:ring-4 focus:ring-[#21b0a6]/15"
                            }`}
                          />
                          {errors.name && (
                            <p className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold text-rose-600">
                              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#0d2b45] mb-2">
                            Corporate Email *
                          </label>
                          <input
                            ref={emailRef}
                            type="email"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value });
                              if (errors.email) setErrors({ ...errors, email: "" });
                            }}
                            placeholder="name@company.com"
                            className={`w-full rounded-xl border px-4 py-3.5 text-xs sm:text-sm text-[#0d2b45] outline-none transition-all duration-200 ${
                              errors.email
                                ? "border-rose-400 bg-rose-50/30 focus:ring-4 focus:ring-rose-500/10"
                                : "border-slate-300 bg-white focus:border-[#21b0a6] focus:ring-4 focus:ring-[#21b0a6]/15"
                            }`}
                          />
                          {errors.email && (
                            <p className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold text-rose-600">
                              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-bold text-[#0d2b45] mb-2">
                            Phone / WhatsApp <span className="text-slate-400 font-normal">(Optional)</span>
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-xs sm:text-sm text-[#0d2b45] outline-none focus:border-[#21b0a6] focus:ring-4 focus:ring-[#21b0a6]/15 transition-all duration-200"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#0d2b45] mb-2">
                            Company / Entity Name <span className="text-slate-400 font-normal">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="e.g. Acme Logistics"
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-xs sm:text-sm text-[#0d2b45] outline-none focus:border-[#21b0a6] focus:ring-4 focus:ring-[#21b0a6]/15 transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-start gap-3 pt-2">
                          <input
                            type="checkbox"
                            id="consent"
                            checked={formData.consent}
                            onChange={(e) => {
                              setFormData({ ...formData, consent: e.target.checked });
                              if (errors.consent) setErrors({ ...errors, consent: "" });
                            }}
                            className={`mt-0.5 h-4 w-4 shrink-0 rounded text-[#21b0a6] focus:ring-[#21b0a6] ${
                              errors.consent ? "border-rose-500 ring-2 ring-rose-500/20" : "border-slate-300"
                            }`}
                          />
                          <label htmlFor="consent" className="text-xs text-slate-600 leading-normal">
                            I agree to allow AASIOM Technologies Private Limited to evaluate these strategic details in accordance with our{" "}
                            <Link href="/privacy-policy" className="text-[#21b0a6] font-semibold underline hover:text-[#1ca096]">
                              Privacy Policy
                            </Link>.
                          </label>
                        </div>
                        {errors.consent && (
                          <p className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold text-rose-600">
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {errors.consent}
                          </p>
                        )}
                      </div>

                      <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-all cursor-pointer"
                        >
                          &larr; Back
                        </button>
                        <button
                          type="submit"
                          style={{ 
                            backgroundColor: "#21b0a6", 
                            color: "#ffffff",
                            padding: "14px 32px",
                            borderRadius: "12px",
                            lineHeight: "1.2"
                          }}
                          className="text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all hover:bg-[#1ca096] focus:ring-4 focus:ring-[#21b0a6]/20 focus:outline-none cursor-pointer border-0"
                        >
                          Submit Strategic Review Request &rarr;
                        </button>
                      </div>
                    </motion.div>
                  )}

                </form>
              )}
            </motion.div>

            {/* Right Column: Strategic Deliverables & Direct Contacts */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeInUp}
              className="lg:col-span-5 space-y-6"
            >
              <div className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-xs hover:border-[#21b0a6]/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="rounded-xl bg-[#21b0a6]/10 p-2.5 text-[#21b0a6]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-[#21b0a6] uppercase block">
                      Direct Channel
                    </span>
                    <h3 className="text-base font-bold text-[#0d2b45]">
                      Corporate Email
                    </h3>
                  </div>
                </div>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For formal proposals, NDA requests, or ANVIRA strategic partnerships:
                </p>
                <a
                  href="mailto:contact@aasiom.com"
                  className="mt-4 inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#21b0a6] hover:underline"
                >
                  contact@aasiom.com
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-xs hover:border-[#21b0a6]/40 transition-all duration-300">
                <span className="text-[10px] font-bold tracking-widest text-[#21b0a6] uppercase block mb-1">
                  Audit Deliverables
                </span>
                <h3 className="text-base font-bold text-[#0d2b45] mb-3">
                  What You Receive
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#21b0a6] font-bold">✓</span>
                    <span>System Architecture Blueprint &amp; Schema Audit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#21b0a6] font-bold">✓</span>
                    <span>Technology Stack &amp; Infrastructure Cost Matrix</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#21b0a6] font-bold">✓</span>
                    <span>ANVIRA WhatsApp Integration Feasibility Study</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#21b0a6] font-bold">✓</span>
                    <span>Phased Engineering &amp; Security Compliance Brief</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#21b0a6]/25 bg-gradient-to-br from-[#21b0a6]/10 to-[#21b0a6]/5 p-7 sm:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#21b0a6] animate-pulse" />
                  <h4 className="text-xs sm:text-sm font-bold text-[#0d2b45]">
                    Confidentiality &amp; NDA Protocol
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every technical review is bound by strict NDA agreements. All proprietary data, codebase assets, and telemetry specs remain 100% confidential.
                </p>
              </div>
            </motion.div>

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