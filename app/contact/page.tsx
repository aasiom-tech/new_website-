"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    workEmail: "",
    organization: "",
    category: "pilot_fleet",
    message: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;
    setSubmitted(true);
  };

  const categories = [
    { id: "pilot_fleet", label: "Pilot Fleet Deployment (ANVIRA)" },
    { id: "domain_advisory", label: "Domain Advisory & Partnerships" },
    { id: "tech_integration", label: "Technology & API Integration" },
    { id: "strategic_investor", label: "Strategic Capital & Growth" },
    { id: "general_inquiry", label: "General Operational Inquiry" },
  ];

  const faqs = [
    {
      question: "What happens after I submit a pilot fleet inquiry?",
      answer:
        "Commercial fleet inquiries are routed directly to our operations and product team. We initiate an initial discovery review within 24–48 business hours to assess fleet size, communication workflows, and deployment suitability for ANVIRA.",
    },
    {
      question: "How are confidential company and fleet data handled?",
      answer:
        "All details shared via our contact channels are bound by strict enterprise confidentiality protocols. Data is processed solely to evaluate operational compatibility and respond to your specific inquiry.",
    },
    {
      question: "Are you accepting domain advisors or technology integration partners?",
      answer:
        "Yes. We actively collaborate with industry veterans across logistics safety, supply chain compliance, telematics providers, and enterprise SaaS systems to expand our ecosystem.",
    },
    {
      question: "Where is AASIOM Technologies registered?",
      answer:
        "AASIOM Technologies Private Limited is a legally incorporated company based in Mumbai, Maharashtra, India, engineering software solutions built for complex operational environments.",
    },
  ];

  const routingChannels = [
    {
      title: "Commercial Fleets & Pilots",
      description: "Priority routing for fleet managers, transport directors, and safety heads seeking structured incident command workflows.",
      badge: "Priority Queue",
      icon: (
        <svg className="h-5 w-5 text-[#21b0a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: "Domain & Industry Advisory",
      description: "Direct line for senior leaders in logistics compliance, supply chain execution, and enterprise SaaS expansion.",
      badge: "Executive Review",
      icon: (
        <svg className="h-5 w-5 text-[#21b0a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Integrations & Ecosystems",
      description: "Technical evaluations for telematics hardware vendors, IoT telemetry platforms, and cloud infrastructure partners.",
      badge: "Technical Review",
      icon: (
        <svg className="h-5 w-5 text-[#21b0a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a2 2 0 01-4 0V4zm-6 8a2 2 0 114 0v1a2 2 0 01-4 0v-1zm12 0a2 2 0 114 0v1a2 2 0 01-4 0v-1zM4 19a2 2 0 114 0v1a2 2 0 01-4 0v-1zm12 0a2 2 0 114 0v1a2 2 0 01-4 0v-1z" />
        </svg>
      ),
    },
    {
      title: "Strategic Capital & Growth",
      description: "Conversations for institutional partners aligned with specification-led engineering and human-governed AI systems.",
      badge: "Founder Review",
      icon: (
        <svg className="h-5 w-5 text-[#21b0a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-[#f8fafc] text-[#0d2b45] antialiased selection:bg-[#21b0a6]/20 selection:text-[#0d2b45]">
      
      {/* Hero Header - Golden Section Scale */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white py-16 sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(#21b0a6_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.03]" />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#21b0a6]/25 bg-[#21b0a6]/5 px-3.5 py-1.5 text-[11px] sm:text-xs font-bold tracking-wider text-[#21b0a6] uppercase mb-6 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#21b0a6] animate-pulse" />
            Operations &amp; Corporate Contact
          </div>
          <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-[#0d2b45] text-balance">
            Direct Access for Strategic Operations, Pilot Inquiries &amp; Partnerships
          </h1>
          <p className="mt-6 max-w-3xl text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 text-pretty">
            Standard inquiries are processed within 24–48 business hours. Priority routing is enabled for active commercial fleet operators and strategic deployment partners.
          </p>
        </motion.div>
      </section>

      {/* Main Content: Form & Direct Contact Info (61.8% / 38.2% Split) */}
      <section className="py-16 sm:py-24 border-b border-slate-200/80">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            
            {/* Left Column: Interactive Contact Form (Golden Major Column) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeInUp}
              className="lg:col-span-7 rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-10 lg:p-12 shadow-xs"
            >
              <h2 className="text-xl sm:text-3xl font-bold text-[#0d2b45] mb-2">
                Submit an Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-8 leading-relaxed">
                Please provide your organization details and operational context to ensure accurate routing.
              </p>

              {submitted ? (
                <div className="rounded-2xl border border-[#21b0a6]/30 bg-[#21b0a6]/10 p-8 sm:p-10 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#21b0a6]/20 text-[#21b0a6]">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0d2b45]">Inquiry Received</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                    Thank you for contacting AASIOM Technologies. Our operations team will review your message and respond via work email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Category Pills */}
                  <div>
                    <label className="block text-xs font-semibold text-[#0d2b45] mb-2.5">
                      Inquiry Category *
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, category: cat.id })}
                          className={`rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 border text-left cursor-pointer ${
                            formData.category === cat.id
                              ? "bg-[#21b0a6] border-[#21b0a6] text-white shadow-xs"
                              : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-[#0d2b45] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-base sm:text-sm text-[#0d2b45] outline-none focus:border-[#21b0a6] focus:ring-2 focus:ring-[#21b0a6]/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0d2b45] mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-base sm:text-sm text-[#0d2b45] outline-none focus:border-[#21b0a6] focus:ring-2 focus:ring-[#21b0a6]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0d2b45] mb-2">
                      Organization / Fleet Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Apex Logistics Solutions"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-base sm:text-sm text-[#0d2b45] outline-none focus:border-[#21b0a6] focus:ring-2 focus:ring-[#21b0a6]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0d2b45] mb-2">
                      Message / Fleet Context *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your fleet size, current operational challenges, or partnership objectives..."
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-base sm:text-sm text-[#0d2b45] outline-none focus:border-[#21b0a6] focus:ring-2 focus:ring-[#21b0a6]/20 transition-all"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-[#21b0a6] focus:ring-[#21b0a6]"
                    />
                    <label htmlFor="consent" className="text-xs text-slate-600 leading-normal">
                      I agree to allow AASIOM Technologies Private Limited to process these details to respond to this inquiry in accordance with our{" "}
                      <Link href="/privacy-policy" className="text-[#21b0a6] underline hover:text-[#1ca096]">
                        Privacy Policy
                      </Link>.
                    </label>
                  </div>

                  <div className="pt-2">
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
                      className="w-full sm:w-auto text-xs sm:text-sm font-semibold shadow-xs transition-all hover:bg-[#1ca096] focus:ring-2 focus:ring-[#21b0a6] focus:outline-none text-center cursor-pointer border-0"
                    >
                      Connect with Operations
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Right Column: Direct Communication Channels (Golden Minor Column) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeInUp}
              className="lg:col-span-5 space-y-6"
            >
              {/* Official Corporate Channel */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <span className="text-[11px] font-bold tracking-widest text-[#21b0a6] uppercase">
                  Direct Channel
                </span>
                <h3 className="mt-1 text-base sm:text-lg font-bold text-[#0d2b45]">
                  Corporate Email
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For official documentation, enterprise proposals, or compliance inquiries:
                </p>
                <a
                  href="mailto:contact@aasiom.com"
                  className="mt-4 inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#21b0a6] hover:underline"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@aasiom.com
                </a>
              </div>

              {/* Registered Entity Info */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <span className="text-[11px] font-bold tracking-widest text-[#21b0a6] uppercase">
                  Registered Entity
                </span>
                <h3 className="mt-1 text-base sm:text-lg font-bold text-[#0d2b45]">
                  AASIOM Technologies Private Limited
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Mumbai, Maharashtra, India
                </p>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-[#21b0a6]" />
                  Incorporated Entity (India)
                </div>
              </div>

              {/* Response SLA Commitment */}
              <div className="rounded-2xl border border-[#21b0a6]/25 bg-[#21b0a6]/5 p-7 sm:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2 w-2 rounded-full bg-[#21b0a6]" />
                  <h4 className="text-xs sm:text-sm font-bold text-[#0d2b45]">
                    Operational Response Commitment
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Active pilot fleet requests and critical integration inquiries are assigned a dedicated operational point of contact upon receipt.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Inquiry Routing Protocols */}
      <section className="py-16 sm:py-24 border-b border-slate-200/80 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeInUp}
            className="mb-12 max-w-3xl"
          >
            <p className="mb-2 text-xs font-bold tracking-widest text-[#21b0a6] uppercase">
              Operational Routing
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0d2b45]">
              How Inquiries Are Processed
            </h2>
            <p className="mt-3 text-xs sm:text-base text-slate-600 leading-relaxed">
              We structure incoming communication by domain expertise to ensure your message reaches the appropriate team immediately.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {routingChannels.map((channel, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-slate-50/70 p-7 shadow-xs hover:bg-white hover:border-[#21b0a6]/30 hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="rounded-xl bg-[#21b0a6]/10 p-2.5 text-[#21b0a6]">
                      {channel.icon}
                    </div>
                    <span className="rounded-md bg-white border border-slate-200/80 px-2.5 py-1 text-[10px] font-bold text-[#21b0a6] uppercase tracking-wider">
                      {channel.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#0d2b45] mb-2.5">
                    {channel.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {channel.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Frequently Asked Operational Questions */}
      <section className="py-16 sm:py-24 bg-[#f8fafc]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeInUp}
            className="mb-12 text-center sm:text-left"
          >
            <p className="mb-2 text-xs font-bold tracking-widest text-[#21b0a6] uppercase">
              Frequently Asked Questions
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0d2b45]">
              Inquiry &amp; Deployment FAQ
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={staggerContainer}
            className="space-y-5"
          >
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-xs hover:border-[#21b0a6]/30 transition-all"
              >
                <h3 className="text-base sm:text-lg font-bold text-[#0d2b45] mb-2.5">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}