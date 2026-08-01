import Link from "next/link";

import { companyDetails, footerNavigation } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="border-t border-footer-divider bg-surface-dark">
      <div className="container py-10 lg:py-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:gap-x-10 lg:grid-cols-4">
          {footerNavigation.map((group) => (
            <section
              key={group.title}
              aria-labelledby={`footer-${group.title.toLowerCase()}`}
            >
              <h2
                id={`footer-${group.title.toLowerCase()}`}
                className="type-label !text-text-on-dark"
              >
                {group.title}
              </h2>
              {group.title === "Company" ? (
                <p className="type-body-small mt-3 !text-text-on-dark-muted">
                  {companyDetails.name}
                </p>
              ) : null}
              <ul className="mt-3 grid list-none gap-1 p-0">
                {group.links.map((link) => (
                  <li key={link.href} className="m-0">
                    <Link
                      href={link.href}
                      className="type-body-small inline-flex min-h-11 items-center !text-text-on-dark-muted underline underline-offset-4 transition-colors duration-200 hover:!text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="type-label !text-text-on-dark">
              Contact
            </h2>
            <address className="mt-3 grid not-italic">
              <a
                href={`mailto:${companyDetails.email}`}
                className="type-body-small inline-flex min-h-11 items-center break-all !text-text-on-dark-muted underline underline-offset-4 transition-colors duration-200 hover:!text-primary"
              >
                {companyDetails.email}
              </a>
              <a
                href={`tel:${companyDetails.phoneHref}`}
                className="type-body-small inline-flex min-h-11 items-center !text-text-on-dark-muted underline underline-offset-4 transition-colors duration-200 hover:!text-primary"
                aria-label={`Call AASIOM at ${companyDetails.phoneDisplay}`}
              >
                {companyDetails.phoneDisplay}
              </a>
              <p className="type-body-small pt-2 !text-text-on-dark-muted">
                {companyDetails.headquarters}
              </p>
            </address>
          </section>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-footer-divider pt-5 md:flex-row md:flex-wrap md:items-center md:gap-x-4">
          <p className="type-caption !text-text-on-dark-muted">{companyDetails.copyright}</p>
          <p className="type-caption !text-text-on-dark-muted">{companyDetails.rights}</p>
          <p className="type-caption !text-text-on-dark-muted">{companyDetails.origin}</p>
        </div>
      </div>
    </footer>
  );
}
