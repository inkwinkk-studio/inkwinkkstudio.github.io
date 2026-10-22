import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader, SiteFooter } from "../components/SiteChrome";
import { BackToTop } from "../components/BackToTop";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { Toaster } from "../components/ui/sonner";
import { initLeadTracker } from "../lib/lead-tracker";

import { Compass, Sparkles, BookOpen, Home, ArrowRight, Tag } from "lucide-react";

function NotFoundComponent() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background px-4 py-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-2xl w-full text-center space-y-8 glass border border-border p-8 sm:p-12 rounded-3xl shadow-2xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-primary/40 text-xs font-mono text-primary">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
          <span>404 · REALM NOT FOUND</span>
        </div>

        {/* 404 Headline */}
        <div className="space-y-2">
          <h1 className="font-display uppercase text-7xl sm:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-foreground via-primary to-primary/40 tracking-tight leading-none">
            404
          </h1>
          <h2 className="font-display uppercase text-2xl sm:text-3xl text-foreground tracking-wide">
            Lost in the Shadow Realm
          </h2>
        </div>

        <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto leading-relaxed text-pretty">
          The character illustration, cover concept, or email sequence you seek has vanished into
          the ethereal mist. Choose a path below to continue your journey.
        </p>

        {/* Quick Route Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left pt-2">
          <Link
            to="/visual-art"
            className="p-4 rounded-xl glass border border-border/80 hover:border-primary/60 transition-all group block"
          >
            <div className="flex items-center gap-1.5 text-primary text-xs font-mono font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Art Studio</span>
            </div>
            <div className="font-display text-sm uppercase text-foreground">Covers & Art</div>
            <p className="text-xs text-muted-foreground mt-0.5">Explore 300 DPI designs</p>
          </Link>

          <Link
            to="/wordsmith-studio"
            className="p-4 rounded-xl glass border border-border/80 hover:border-primary/60 transition-all group block"
          >
            <div className="flex items-center gap-1.5 text-primary text-xs font-mono font-semibold mb-1">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Launch Copy</span>
            </div>
            <div className="font-display text-sm uppercase text-foreground">Launch Emails</div>
            <p className="text-xs text-muted-foreground mt-0.5">ARC & release promos</p>
          </Link>

          <Link
            to="/pricing"
            className="p-4 rounded-xl glass border border-border/80 hover:border-primary/60 transition-all group block"
          >
            <div className="flex items-center gap-1.5 text-primary text-xs font-mono font-semibold mb-1">
              <Tag className="w-3.5 h-3.5" />
              <span>Pricing</span>
            </div>
            <div className="font-display text-sm uppercase text-foreground">Packages</div>
            <p className="text-xs text-muted-foreground mt-0.5">Tiered rates from $200</p>
          </Link>
        </div>

        {/* Navigation Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3 border-t border-border/70">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 rounded-lg glass border border-border px-5 py-3 text-xs font-semibold uppercase tracking-wider text-foreground transition-all hover:border-primary/50"
          >
            <span>Author Testimonials</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Custom Fantasy & DnD Character Art | InkWink Studio" },
      {
        name: "description",
        content:
          "Get stunning custom fantasy character art, dnd character art, and concept designs for authors. Turn reader curiosity into Day-1 KDP revenue. Book today!",
      },
      { property: "og:site_name", content: "InkWink Studio" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Custom Fantasy & DnD Character Art | InkWink Studio" },
      {
        property: "og:description",
        content:
          "Get stunning custom fantasy character art, dnd character art, and concept designs for authors. Turn reader curiosity into Day-1 KDP revenue. Book today!",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#12161a" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    const cleanup = initLeadTracker();
    return cleanup;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <BackToTop />
      <WhatsAppButton />
      <Toaster position="bottom-left" richColors closeButton />
    </QueryClientProvider>
  );
}
