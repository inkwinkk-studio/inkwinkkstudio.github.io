import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Facebook, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { ContactModal } from "./ContactModal";

export const btnPrimary =
  "inline-block bg-primary text-primary-foreground px-6 py-3 font-semibold rounded-md hover:bg-primary/90 transition-colors";
export const btnGhost =
  "inline-block border border-border px-6 py-3 rounded-md hover:border-foreground/40 hover:bg-foreground/5 transition-colors";

export interface SocialLinkItem {
  name: string;
  href: string;
  icon: typeof Instagram;
  ariaLabel: string;
  hoverColor: string;
}

/**
 * Configure your social media & contact links here.
 * Replace the href values with your own profile URLs.
 */
export const socialLinks: SocialLinkItem[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/inkwinkk.studio/",
    icon: Instagram,
    ariaLabel: "Follow Ink Wink on Instagram",
    hoverColor: "hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61578688896807",
    icon: Facebook,
    ariaLabel: "Follow Ink Wink on Facebook",
    hoverColor: "hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/ink-winkk/home/",
    icon: Linkedin,
    ariaLabel: "Connect with Ink Wink on LinkedIn",
    hoverColor: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10",
  },
  {
    name: "Email",
    href: "mailto:inkwinkk.studio@gmail.com",
    icon: Mail,
    ariaLabel: "Send an email to Ink Wink",
    hoverColor: "hover:text-primary hover:border-primary/40 hover:bg-primary/10",
  },
];

function Logo() {
  return (
    <Link to="/" className="font-display text-2xl tracking-wide flex items-center gap-1">
      <span>INK</span>
      <span className="text-primary">WINK</span>
    </Link>
  );
}

export function SiteHeader() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const linkBase =
    "hover:text-foreground transition-colors py-1 relative text-xs sm:text-sm tracking-normal whitespace-nowrap shrink-0";

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <Logo />

          {/* Navigation Links */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-7 text-xs sm:text-sm text-muted-foreground overflow-x-auto no-scrollbar py-1">
            <Link
              to="/"
              className={linkBase}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground font-semibold" }}
            >
              Home
            </Link>
            <Link
              to="/visual-art"
              className={linkBase}
              activeProps={{ className: "text-foreground font-semibold" }}
            >
              Fantasy Art
            </Link>
            <Link
              to="/wordsmith-studio"
              className={linkBase}
              activeProps={{ className: "text-foreground font-semibold" }}
            >
              Book Launch / Promotional Email
            </Link>
            <Link
              to="/pricing"
              className={linkBase}
              activeProps={{ className: "text-foreground font-semibold" }}
            >
              Package Pricing
            </Link>
            <Link
              to="/testimonials"
              className={linkBase}
              activeProps={{ className: "text-foreground font-semibold" }}
            >
              Testimonials
            </Link>
          </div>

          {/* Action Button */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => setContactModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm bg-primary text-primary-foreground px-3.5 sm:px-4 py-2 font-semibold rounded-md hover:bg-primary/90 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Lead Form Modal */}
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Studio Summary */}
          <div className="md:col-span-5 space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-sm text-pretty leading-relaxed">
              The hybrid creative studio crafting genre-true fantasy & romantasy book covers,
              promotional book launch sequences, and high-impact author suites for Amazon KDP.
            </p>

            {/* Social Icons with links */}
            <div className="pt-2">
              <p className="eyebrow text-muted-foreground mb-3">Connect With Us</p>
              <div className="flex flex-wrap items-center gap-3" aria-label="Social media links">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  const isExternal = item.href.startsWith("http");
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      aria-label={item.ariaLabel}
                      className={`group relative p-3 rounded-lg glass border border-border text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${item.hoverColor}`}
                      title={`${item.name}: ${item.href}`}
                    >
                      <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                      <span className="sr-only">{item.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <p className="eyebrow text-primary">Navigation</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  hash="about"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                >
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/visual-art"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Fantasy Art</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/wordsmith-studio"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Book Launch / Promotional Email</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-primary font-medium">Package Pricing ($200–$500)</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Author Testimonials</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Studio Details */}
          <div className="md:col-span-3 space-y-3">
            <p className="eyebrow text-primary">Inquiries</p>
            <p className="text-sm text-muted-foreground text-pretty">
              Booking custom covers, character art & launch copy for upcoming releases.
            </p>
            <div className="pt-1">
              <a
                href="mailto:inkwinkk.studio@gmail.com"
                className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors font-medium"
              >
                <span>inkwinkk.studio@gmail.com</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Average response time: under 24 hours (Mon–Fri).
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ink Wink Studio. All rights reserved.</p>
          <div className="eyebrow text-[10px] text-muted-foreground/80 text-center sm:text-right">
            Fantasy Art · Promotional Launch Emails · Package Pricing · Verified Results
          </div>
        </div>
      </div>
    </footer>
  );
}

export function ClosingCta({ title, body }: { title: React.ReactNode; body: string }) {
  return (
    <section id="cta" className="relative overflow-hidden py-28 border-t border-border">
      <div className="absolute inset-0 bg-cta" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display uppercase text-6xl md:text-7xl tracking-tight text-balance">
          {title}
        </h2>
        <p className="text-muted-foreground text-pretty max-w-[48ch] mx-auto mt-5">{body}</p>
        <Link to="/testimonials" className={`${btnPrimary} mt-8 px-8 py-4 text-lg`}>
          Read Author Testimonials
        </Link>
      </div>
    </section>
  );
}
