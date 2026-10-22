import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles,
  Check,
  CheckCircle2,
  X,
  BookOpen,
  User,
  Compass,
  Mail,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  Clock,
  Layers,
  Flame,
  Star,
  Copy,
  Send,
} from "lucide-react";
import { btnPrimary, btnGhost } from "@/components/SiteChrome";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      {
        title:
          "Package Pricing — Fantasy Book Cover, Character Art & Concept Art | Ink Wink Studio",
      },
      {
        name: "description",
        content:
          "Explore our curated fantasy novel packages: Basic ($200), Standard ($300), and Premium ($500). Get custom cover art, character illustrations, scene concept art, and book launch emails.",
      },
      { property: "og:title", content: "Fantasy Novel Art Packages & Pricing — Ink Wink" },
      {
        property: "og:description",
        content:
          "Curated illustration & launch packages for indie fantasy authors. Front & back covers, up to 6 characters, concept art, and launch copy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

interface PackagePlan {
  id: "basic" | "standard" | "premium";
  name: string;
  price: string;
  priceNumber: number;
  badge: string;
  isPopular?: boolean;
  tagline: string;
  summary: string;
  charactersLimit: string;
  coverScope: string;
  conceptArtScope: string;
  copywritingScope: string;
  features: string[];
  inquirySubject: string;
  ctaText: string;
}

const packages: PackagePlan[] = [
  {
    id: "basic",
    name: "Basic Package",
    price: "$200",
    priceNumber: 200,
    badge: "Essential Worldbuilding",
    tagline: "Scene Concept Art & Key Character Visuals",
    summary:
      "Ideal for indie fantasy authors seeking vivid concept art of their world's most memorable scenes paired with custom character illustrations for social teasers.",
    charactersLimit: "Any 2 characters of your choice",
    coverScope: "Not included in Basic Package",
    conceptArtScope: "Concept art illustrations of your favorite scenes",
    copywritingScope: "Not included in Basic Package",
    features: [
      "Create concept art illustrations of the customer's favorite scenes from their fantasy novel",
      "Draw any 2 characters of the customer's choice from their book",
      "Atmospheric environmental lighting and worldbuilding mood mapping",
      "High-resolution master files (300 DPI print & web-ready)",
      "2 full revision rounds per illustration asset",
      "100% full commercial publishing & promotional rights",
    ],
    inquirySubject: "Basic Package Booking ($200)",
    ctaText: "Choose This Package",
  },
  {
    id: "standard",
    name: "Standard Package",
    price: "$300",
    priceNumber: 300,
    badge: "Digital & EBook Launch",
    tagline: "Front-Cover Art, Cast Visuals & Scene Concept Art",
    summary:
      "Engineered for authors ready to publish their novel digitally, featuring a scroll-stopping front cover, cast illustrations, and rich scene concept art.",
    charactersLimit: "Up to 4 characters of your choice",
    coverScope: "Beautiful front-cover art only",
    conceptArtScope: "Concept art illustrations of your favorite scenes",
    copywritingScope: "Not included in Standard Package",
    features: [
      "Create beautiful front-cover art only for the customer's book",
      "Draw up to 4 characters of the customer's choice from their book",
      "Create concept art illustrations of the customer's favorite scenes from their fantasy novel",
      "Tested for 100px mobile Amazon KDP thumbnail contrast & click-through",
      "Custom genre-true title typography and series branding layout",
      "High-resolution master files (300 DPI) for digital & marketing use",
      "2 full revision rounds per asset",
      "Full commercial publishing & eBook distribution rights",
    ],
    inquirySubject: "Standard Package Booking ($300)",
    ctaText: "Choose This Package",
  },
  {
    id: "premium",
    name: "Premium Package",
    price: "$500",
    priceNumber: 500,
    badge: "★ Recommended · Best Value",
    isPopular: true,
    tagline: "Full Front & Back Cover, 6 Characters, Concept Art & Launch Copy",
    summary:
      "The complete author debut suite: full paperback front & back wraparound, an ensemble cast of 6 characters, promotional scene concept art, and high-converting launch copy.",
    charactersLimit: "Up to 6 characters of your choice",
    coverScope: "Complete book cover art (both front and back covers)",
    conceptArtScope: "Depict favorite scenes as promotional concept art",
    copywritingScope: "Promotional email sequence for your book launch",
    features: [
      "Create complete book cover art, including both the front and back covers",
      "Draw up to 6 characters of the customer's choice from their novel",
      "Depict the customer's favorite scenes from the novel as concept art that can be used for promotional purposes",
      "Write a promotional email sequence for their upcoming book launch, designed to help generate more sales and achieve better conversions",
      "Engineered spine & back-cover blurb layout for KDP paperback & hardcover printing",
      "Viral 9:16 vertical character formats for BookTok, Instagram Reels & bookmarks",
      "High-resolution 300 DPI master files for all artwork & formatted email copy docs",
      "2 full revision rounds per asset + priority creative consultation",
      "Full 100% commercial ownership & royalty-free publishing rights",
    ],
    inquirySubject: "Premium Package Booking ($500)",
    ctaText: "Choose This Package",
  },
];

const comparisonRows = [
  {
    label: "Price",
    basic: "$200",
    standard: "$300",
    premium: "$500",
    highlight: true,
  },
  {
    label: "Characters Drawn",
    basic: "Any 2 characters",
    standard: "Up to 4 characters",
    premium: "Up to 6 characters",
  },
  {
    label: "Book Cover Art",
    basic: "—",
    standard: "Front-cover art only",
    premium: "Complete front & back covers",
  },
  {
    label: "Scene Concept Art",
    basic: "Favorite novel scenes",
    standard: "Favorite novel scenes",
    premium: "Promotional concept art of scenes",
  },
  {
    label: "Promotional Email Launch Sequence",
    basic: "—",
    standard: "—",
    premium: "Included (High-converting copy)",
    highlight: true,
  },
  {
    label: "Paperback / Hardcover Print Wrap",
    basic: "—",
    standard: "—",
    premium: "Included (Front + Back + Spine)",
  },
  {
    label: "Typography & Series Styling",
    basic: "—",
    standard: "Front cover typography",
    premium: "Front, spine & back blurb typography",
  },
  {
    label: "Revisions Included",
    basic: "2 rounds per asset",
    standard: "2 rounds per asset",
    premium: "2 rounds per asset + Priority",
  },
  {
    label: "Commercial Publishing Rights",
    basic: "100% Commercial Rights",
    standard: "100% Commercial Rights",
    premium: "100% Commercial Rights",
  },
];

const faqs = [
  {
    q: "Can I choose which characters and scenes are depicted?",
    a: "Absolutely! After booking your package, you will be invited to submit your favorite scene passages, character descriptions, hair/eye traits, clothing, weaponry, and preferred mood boards. Nothing begins until we align on your vision.",
  },
  {
    q: "What makes the Premium Package the best value?",
    a: "The Premium Package ($500) bundles complete front and back print covers, an ensemble cast of up to 6 characters, promotional concept art, and an entire book launch promotional email sequence. Sourced individually, these services would total substantially more. It provides everything an author needs for a runaway launch.",
  },
  {
    q: "What is included in the promotional email sequence in the Premium Package?",
    a: "You receive high-converting email copy tailored to your tropes and release date: an Advance Reader Copy (ARC) team recruitment letter, an urgency-driven launch day sales blast ($0.99 countdown), and a welcome/retention nurture sequence designed to maximize early Amazon reviews and rankings.",
  },
  {
    q: "What file formats and resolutions will I receive?",
    a: "You receive high-resolution, print-ready 300 DPI files formatted to Amazon KDP and IngramSpark specifications (CMYK/RGB as needed), along with web-optimized RGB files for social media, character art PNGs, and editable email copy documentation.",
  },
  {
    q: "How does the revision process work?",
    a: "Every asset in each package includes 2 comprehensive revision rounds. We share initial concept sketches and color studies first so you can redirect pose, lighting, and composition before final painting begins.",
  },
];

function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedPkg, setSelectedPkg] = useState<PackagePlan | null>(null);
  const [authorName, setAuthorName] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [subgenre, setSubgenre] = useState("");
  const [notes, setNotes] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyInquiry = () => {
    if (!selectedPkg) return;
    const body = `Hi Ink Wink Studio,

I would like to book the ${selectedPkg.name} (${selectedPkg.price}) for my upcoming fantasy book.

Author / Pen Name: ${authorName || "[Your Name]"}
Book Title: ${bookTitle || "[Your Novel Title]"}
Subgenre / Tropes: ${subgenre || "[e.g. Romantasy, Enemies to Lovers, Epic Fantasy]"}

Project Details & Notes:
${notes || "[Tell us about the scenes or characters you want drawn]"}

Included in this package:
- ${selectedPkg.charactersLimit}
- ${selectedPkg.coverScope}
- ${selectedPkg.conceptArtScope}
${selectedPkg.id === "premium" ? "- Promotional email launch sequence" : ""}

Looking forward to your reply and timeline!`;

    navigator.clipboard.writeText(body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const generateMailtoHref = (pkg: PackagePlan) => {
    const subject = `${pkg.name} Booking (${pkg.price}) — ${bookTitle || "Fantasy Novel"}`;
    const body = `Hi Ink Wink Studio,

I would like to book the ${pkg.name} (${pkg.price}) for my upcoming fantasy book.

Author / Pen Name: ${authorName || "[Your Pen Name]"}
Book Title: ${bookTitle || "[Your Novel Title]"}
Subgenre / Tropes: ${subgenre || "[Subgenre & Tropes]"}

Notes / Desired Scenes or Characters:
${notes || "[Describe your favorite scenes or characters to be illustrated]"}

Looking forward to bringing this story to life!`;

    return `mailto:inkwinkk.studio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero animate-sheen" />
        <div className="absolute -top-24 -left-10 w-[44rem] h-[44rem] bg-primary/15 blur-[120px] rounded-full" />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
          <p className="eyebrow text-primary animate-rise">
            Curated Author Suites · Transparent Pricing
          </p>
          <h1 className="font-display uppercase leading-[0.9] tracking-tight text-5xl md:text-8xl mt-5 max-w-[18ch] mx-auto animate-rise [animation-delay:80ms]">
            Choose the Perfect Package for <span className="text-primary">Your Story</span>
          </h1>
          <p className="max-w-[62ch] mx-auto text-muted-foreground text-base md:text-lg mt-6 text-pretty animate-rise [animation-delay:160ms] leading-relaxed">
            Select the all-in-one package that best fits your fantasy novel and promotional needs.
            Whether you need essential scene concept art and characters, front-cover art, or a
            complete wraparound cover paired with high-converting launch copy — we have you covered.
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-xs font-mono text-muted-foreground animate-rise [animation-delay:240ms]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-primary" />
              100% Commercial Rights Included
            </span>
            <span className="text-border">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary" />
              Transparent Turnaround & Revisions
            </span>
            <span className="text-border">•</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-primary" />
              Amazon KDP & Print Ready
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className={`rounded-2xl flex flex-col justify-between transition-all duration-300 relative group ${
                pkg.isPopular
                  ? "glass p-8 md:p-9 border-2 border-primary shadow-2xl shadow-primary/10 bg-card/75 lg:-translate-y-3"
                  : "glass p-8 border border-border shadow-xl hover:border-primary/40 bg-card/40"
              }`}
            >
              {/* Recommended Top Banner */}
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground font-mono text-xs font-bold uppercase tracking-wider shadow-lg">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Best Value Package</span>
                  </span>
                </div>
              )}

              <div className="space-y-6">
                {/* Header Meta */}
                <div className="flex items-center justify-between gap-2 pt-2">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold">
                    {pkg.badge}
                  </span>
                  {pkg.isPopular && (
                    <span className="text-[11px] font-mono text-primary flex items-center gap-1 font-semibold">
                      <Flame className="w-3.5 h-3.5" />
                      Recommended
                    </span>
                  )}
                </div>

                {/* Package Name & Price */}
                <div>
                  <h2 className="font-display uppercase text-3xl tracking-tight text-foreground">
                    {pkg.name}
                  </h2>
                  <p className="text-xs font-semibold text-primary mt-1">{pkg.tagline}</p>

                  <div className="mt-4 flex items-baseline gap-1.5 border-b border-border/70 pb-5">
                    <span className="font-display text-5xl md:text-6xl text-foreground tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">
                      / complete package
                    </span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed text-pretty">
                  {pkg.summary}
                </p>

                {/* Key Pillars Highlights */}
                <div className="p-3.5 rounded-xl bg-background/50 border border-border/80 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Characters Drawn:</span>
                    <span className="font-semibold text-foreground font-mono">
                      {pkg.charactersLimit}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Cover Scope:</span>
                    <span className="font-semibold text-foreground">{pkg.coverScope}</span>
                  </div>
                </div>

                {/* What is Included Checklist */}
                <div className="space-y-3 pt-2">
                  <p className="eyebrow text-xs text-foreground/90 font-semibold">
                    Package Deliverables:
                  </p>
                  <ul className="space-y-2.5 text-xs text-muted-foreground">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-border/60 space-y-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedPkg(pkg)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg font-semibold text-sm transition-all shadow-md cursor-pointer ${
                    pkg.isPopular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.01]"
                      : "border border-border text-foreground hover:bg-foreground/5 hover:border-primary/40"
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{pkg.ctaText}</span>
                </button>

                <div className="text-center">
                  <a
                    href={generateMailtoHref(pkg)}
                    className="text-[11px] text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <span>Or direct email inquiry</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Package Comparison Table Section */}
      <section className="border-t border-border bg-card/25 py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="eyebrow text-primary">At-A-Glance Overview</p>
            <h2 className="font-display uppercase text-4xl md:text-5xl tracking-tight">
              Package Comparison Matrix
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
              Compare features and deliverables side-by-side to find the right fit for your story.
            </p>
          </div>

          <div className="glass rounded-2xl border border-border overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-border bg-card/80">
                    <th className="p-4 md:p-5 font-semibold text-foreground w-1/3">
                      Package Features
                    </th>
                    <th className="p-4 md:p-5 font-semibold text-foreground text-center w-2/9">
                      Basic ($200)
                    </th>
                    <th className="p-4 md:p-5 font-semibold text-foreground text-center w-2/9">
                      Standard ($300)
                    </th>
                    <th className="p-4 md:p-5 font-semibold text-primary text-center w-2/9 bg-primary/5">
                      Premium ($500) ★
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={row.label}
                      className={`hover:bg-foreground/[0.02] transition-colors ${
                        row.highlight ? "bg-primary/[0.03]" : ""
                      }`}
                    >
                      <td className="p-4 md:p-5 font-medium text-foreground/90">{row.label}</td>
                      <td className="p-4 md:p-5 text-center text-xs md:text-sm text-muted-foreground">
                        {row.basic}
                      </td>
                      <td className="p-4 md:p-5 text-center text-xs md:text-sm text-muted-foreground">
                        {row.standard}
                      </td>
                      <td className="p-4 md:p-5 text-center text-xs md:text-sm font-semibold text-primary bg-primary/5">
                        {row.premium}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-10">
        <div className="text-center space-y-3">
          <p className="eyebrow text-primary">Have Questions?</p>
          <h2 className="font-display uppercase text-3xl md:text-5xl tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto text-pretty">
            Common questions regarding package scope, character submissions, and commercial rights.
          </p>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="py-5">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center text-left gap-4 font-semibold text-base hover:text-primary transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <span className="text-primary text-xl font-mono shrink-0">
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>
              {openFaq === i && (
                <p className="text-muted-foreground text-sm leading-relaxed mt-3 max-w-[68ch] animate-rise text-pretty">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Closing CTA */}
      <section className="relative overflow-hidden py-24 border-t border-border">
        <div className="absolute inset-0 bg-cta" />
        <div className="relative max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="font-display uppercase text-5xl md:text-7xl tracking-tight text-balance">
            Your Fantasy Novel Deserves
            <br />
            An Unforgettable Launch
          </h2>
          <p className="text-muted-foreground text-pretty max-w-[50ch] mx-auto text-base md:text-lg">
            Ready to book your package or have questions about custom add-ons? Reach out directly at{" "}
            <strong className="text-foreground">inkwinkk.studio@gmail.com</strong>.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:inkwinkk.studio@gmail.com?subject=Fantasy%20Package%20Inquiry"
              className={`${btnPrimary} px-8 py-3.5 text-base shadow-lg`}
            >
              Inquire via Email (inkwinkk.studio@gmail.com)
            </a>
            <Link to="/testimonials" className={`${btnGhost} px-7 py-3.5 text-base`}>
              Read Author Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Package Booking Consultation Modal */}
      {selectedPkg && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fade-in"
        >
          <div className="fixed inset-0" onClick={() => setSelectedPkg(null)} aria-hidden="true" />

          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto glass p-6 md:p-8 rounded-2xl border border-primary/40 bg-card/95 shadow-2xl space-y-6 z-10 animate-rise">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-border/70 pb-4">
              <div>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold">
                  {selectedPkg.badge}
                </span>
                <h3 className="font-display uppercase text-2xl md:text-3xl tracking-tight mt-2 text-foreground">
                  {selectedPkg.name} — <span className="text-primary">{selectedPkg.price}</span>
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Tell us a bit about your novel to start the custom consultation.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPkg(null)}
                className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Package Summary Highlights */}
            <div className="p-4 rounded-xl bg-background/60 border border-border/80 space-y-2 text-xs">
              <div className="flex justify-between items-center text-muted-foreground">
                <span>Characters Included:</span>
                <span className="font-semibold text-foreground font-mono">
                  {selectedPkg.charactersLimit}
                </span>
              </div>
              <div className="flex justify-between items-center text-muted-foreground">
                <span>Book Cover Art:</span>
                <span className="font-semibold text-foreground">{selectedPkg.coverScope}</span>
              </div>
              <div className="flex justify-between items-center text-muted-foreground">
                <span>Scene Concept Art:</span>
                <span className="font-semibold text-foreground">{selectedPkg.conceptArtScope}</span>
              </div>
              {selectedPkg.id === "premium" && (
                <div className="flex justify-between items-center text-primary font-medium">
                  <span>Launch Email Sequence:</span>
                  <span className="font-semibold">Included (High-Converting Copy)</span>
                </div>
              )}
            </div>

            {/* Custom Author Fields */}
            <div className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5">
                  Author Name / Pen Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. S. J. Thornton"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg glass border border-border focus:border-primary focus:outline-none text-sm text-foreground placeholder:text-muted-foreground/60"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Book Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. The Court of Ash & Embers"
                    value={bookTitle}
                    onChange={(e) => setBookTitle(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg glass border border-border focus:border-primary focus:outline-none text-sm text-foreground placeholder:text-muted-foreground/60"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Subgenre / Tropes
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dark Romantasy, Fae Courts"
                    value={subgenre}
                    onChange={(e) => setSubgenre(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg glass border border-border focus:border-primary focus:outline-none text-sm text-foreground placeholder:text-muted-foreground/60"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5">
                  Key Scenes & Characters Desired
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your favorite scenes to illustrate, characters traits (hair, eyes, weaponry, mood), or target release date."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg glass border border-border focus:border-primary focus:outline-none text-sm text-foreground placeholder:text-muted-foreground/60"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              <a
                href={generateMailtoHref(selectedPkg)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Launch Email Inquiry ({selectedPkg.price})</span>
              </a>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleCopyInquiry}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-border text-foreground hover:bg-foreground/5 hover:border-primary/40 text-xs font-medium transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-primary" />
                      <span className="text-primary font-semibold">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Inquiry Template</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedPkg(null)}
                  className="px-4 py-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground text-xs font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>

              <p className="text-[11px] text-muted-foreground text-center">
                Inquiries are sent directly to{" "}
                <strong className="text-foreground">inkwinkk.studio@gmail.com</strong> · Response
                within 24 hours.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
