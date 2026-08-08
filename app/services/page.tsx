import type { Metadata } from "next";

import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Technology Services | AASIOM Technologies",
  description:
    "AASIOM designs and builds websites, web applications, dashboards, custom software, AI-enabled workflows and automation for businesses and growing teams.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
