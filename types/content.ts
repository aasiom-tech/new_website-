export type SiteRoute =
  | "/"
  | "/about"
  | "/product"
  | "/product/anvira"
  | "/strategic-review"
  | "/contact"
  | "/privacy-policy"
  | "/terms-of-use";

export type ContentAvailability =
  | "approved"
  | "partial"
  | "pending-approved-content"
  | "pending-legal-review";

export type RoutableContent = {
  readonly route: SiteRoute;
  readonly availability: ContentAvailability;
};

export type LinkItem = {
  readonly label: string;
  readonly href: SiteRoute | `/#${string}`;
};

export type CTAContent = LinkItem;

export type ContentItem = {
  readonly title: string;
  readonly description?: string;
};

export type NumberedContentItem = ContentItem & {
  readonly number: number;
};

export type CompanyContent = {
  readonly brandName: string;
  readonly legalName: string;
  readonly operatingFocus: string;
  readonly headquarters: string;
  readonly registeredOffice: string;
  readonly email: string;
  readonly phone: {
    readonly display: string;
    readonly href: `tel:${string}`;
  };
  readonly legalEntity: string;
  readonly siteDescription: string;
  readonly copyright: string;
  readonly rights: string;
  readonly origin: string;
  readonly pendingServicesStatement: string;
  readonly director: {
    readonly name: string;
    readonly role: string;
  };
};

export type DirectorMessage = {
  readonly quote: string;
  readonly attribution: {
    readonly name: string;
    readonly role: string;
  };
};

export type CorporateFact = {
  readonly label: string;
  readonly value: string;
};

export type ProductSummary = {
  readonly id: string;
  readonly slug: string;
  readonly name: string;
  readonly route: `/product/${string}`;
  readonly headline: string;
  readonly summary: string;
  readonly sector: string;
  readonly status: readonly string[];
};

export type ScopeBoundaryItem = {
  readonly label: string;
  readonly detail?: string;
};

export type ProductDetail = ProductSummary & {
  readonly availability: "approved";
  readonly tagline: string;
  readonly positioning: string;
  readonly problemSignal: string;
  readonly principles: readonly ContentItem[];
  readonly scopeBoundaries: {
    readonly does: readonly ScopeBoundaryItem[];
    readonly doesNot: readonly ScopeBoundaryItem[];
    readonly statement: string;
  };
  readonly ctas: readonly CTAContent[];
};

export type TeamMember = {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly description?: string;
};

export type ContactOption = {
  readonly id: string;
  readonly label: string;
  readonly value: string;
  readonly href: `mailto:${string}` | `tel:${string}`;
};

export type StakeholderCategory = ContentItem & {
  readonly id: string;
};

export type PendingContentSection = {
  readonly availability: "pending-approved-content";
  readonly items: readonly ContentItem[];
};

export type FormFieldOption = {
  readonly value: string;
  readonly label: string;
};

export type FormFieldDefinition = {
  readonly id: string;
  readonly name: string;
  readonly label: string;
  readonly type: "email" | "tel" | "text" | "textarea" | "select";
  readonly required: boolean;
  readonly placeholder?: string;
  readonly options?: readonly FormFieldOption[];
};

export type LegalPageContent = RoutableContent & {
  readonly title: string;
  readonly sections: readonly {
    readonly heading: string;
    readonly paragraphs: readonly string[];
  }[];
};
