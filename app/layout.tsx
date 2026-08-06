import type { Metadata } from "next";
import type { ReactNode } from "react";

import { PageShell } from "@/components/PageShell";
import { siteMetadata } from "@/content/site";
import { inter } from "@/styles/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: siteMetadata.name,
  description: siteMetadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
