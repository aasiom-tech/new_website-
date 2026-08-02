import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { PillarCard } from "@/components/PillarCard";
import { SectionLabel } from "@/components/SectionLabel";
import { company } from "@/content/company";
import { contactContent } from "@/content/contact";

export const metadata: Metadata = {
  title: `${contactContent.title} | ${company.brandName}`,
  description: contactContent.guidance,
};

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="contact-page-title">
        <div className="container py-12 md:py-16 lg:py-20">
          <div className="text-measure">
            <SectionLabel>{company.legalName}</SectionLabel>
            <h1 id="contact-page-title" className="mt-5">
              {contactContent.headline}
            </h1>
            <p className="type-body-large mt-6 font-medium text-text-primary">
              {contactContent.targetAudience}
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="engagement-guidance-title"
        className="section-spacing border-y border-border-muted bg-surface-secondary"
      >
        <div className="container">
          <div className="text-measure">
            <SectionLabel>{contactContent.title}</SectionLabel>
            <h2 id="engagement-guidance-title" className="mt-4">
              Engagement Guidance
            </h2>
            <p className="type-body-large mt-5">{contactContent.guidance}</p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {contactContent.stakeholderCategories.map((category) => (
              <PillarCard
                key={category.id}
                title={category.title}
                description={category.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-form-title"
        className="section-spacing"
      >
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:gap-12">
          <div className="min-w-0">
            <SectionLabel>Structured Inquiry</SectionLabel>
            <h2 id="contact-form-title" className="mt-4">
              Contact Form
            </h2>
            <p
              id="contact-form-status"
              className="type-body-small mt-5 border-l-4 border-warning bg-warning-surface p-4 text-text-primary"
            >
              {contactContent.form.statusNotice}
            </p>
            <div className="mt-8">
              <ContactForm
                fields={contactContent.form.fields}
                submitLabel={contactContent.form.submitLabel}
                formLabel="AASIOM contact inquiry demonstration"
              />
            </div>
          </div>

          <aside
            aria-labelledby="direct-contact-title"
            className="min-w-0 rounded-lg border border-border bg-surface p-5 shadow-subtle md:p-6"
          >
            <SectionLabel>{company.brandName}</SectionLabel>
            <h2 id="direct-contact-title" className="mt-4">
              Direct Contact
            </h2>

            <address className="mt-6 grid gap-5 not-italic">
              {contactContent.directContact.map((option) => (
                <div key={option.id} className="min-w-0">
                  <p className="type-label text-text-muted">{option.label}</p>
                  <a
                    href={option.href}
                    className="type-body mt-2 inline-flex min-h-11 max-w-full items-center break-words font-semibold text-link"
                  >
                    {option.value}
                  </a>
                </div>
              ))}

              <div>
                <p className="type-label text-text-muted">Headquarters</p>
                <p className="type-body mt-2 text-text-primary">
                  {contactContent.headquarters}
                </p>
              </div>

              <div className="border-t border-border-muted pt-5">
                <p className="type-label text-text-muted">
                  Registered Office
                </p>
                <p className="type-body mt-2 whitespace-pre-line text-text-primary">
                  {contactContent.registeredOffice}
                </p>
              </div>
            </address>
          </aside>
        </div>
      </section>
    </>
  );
}
