import type { ReactNode } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollEffects } from "./ScrollEffects";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main-content"
        className="type-button sr-only no-underline focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <Header />
      <ScrollEffects />
      <main id="main-content" tabIndex={-1} className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
