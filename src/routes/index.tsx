import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroCover from "@/assets/hero-cover.jpg";
import vampireSuit from "@/assets/images/vampire_suit_character_1791649669972.jpg";
import girlDirewolf from "@/assets/images/girl_direwolf_character_1791649687401.jpg";
import coverIfICouldKeepYou from "@/assets/cover-if-i-could-keep-you.jpg";
import coverBreakTheRules from "@/assets/cover-break-the-rules.jpg";
import coverLoveAndLederhosen from "@/assets/cover-love-and-lederhosen.jpg";
import coverSomethingWorthKeeping from "@/assets/cover-something-worth-keeping.jpg";
import coverSpecialAgentBridesmaid from "@/assets/cover-special-agent-bridesmaid.jpg";
import conceptGamerBedroom from "@/assets/concept-gamer-bedroom.jpg";
import conceptSunsetRodeo from "@/assets/concept-sunset-rodeo.jpg";
import { btnGhost, btnPrimary, ClosingCta } from "@/components/SiteChrome";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import {
  Sparkles,
  BookOpen,
  User,
  Compass,
  ArrowRight,
  Mail,
  CheckCircle2,
  Tag,
  Star,
  Quote,
  TrendingUp,
  ShieldCheck,
  Rocket,
  Flame,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Custom Fantasy & DnD Character Art | InkWink Studio" },
      {
        name: "description",
        content:
          "Get stunning custom fantasy character art, dnd character art, and concept designs for authors. Turn reader curiosity into Day-1 KDP revenue. Book today!",
      },
      { property: "og:title", content: "Custom Fantasy & DnD Character Art | InkWink Studio" },
      {
        property: "og:description",
        content:
          "Get stunning custom fantasy character art, dnd character art, and concept designs for authors. Turn reader curiosity into Day-1 KDP revenue. Book today!",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const featuredArt = [
  {
    title: "Something Worth Keeping",
    category: "Full Wraparound Cover Art",
    price: "$150",
    subgenre: "Contemporary Romance / KDP",
    img: coverSomethingWorthKeeping,
    aspect: "aspect-[4/3]",
    tag: "Paperback Cover ($150)",
  },
  {
    title: "Special Agent Bridesmaid",
    category: "Full Wraparound Cover Art",
    price: "$150",
    subgenre: "Romantic Action Comedy / KDP",
    img: coverSpecialAgentBridesmaid,
    aspect: "aspect-[4/3]",
    tag: "Paperback Cover ($150)",
  },
  {
    title: "If I Could Keep You",
    category: "Full Wraparound Cover Art",
    price: "$150",
    subgenre: "Contemporary Romance / KDP",
    img: coverIfICouldKeepYou,
    aspect: "aspect-[4/3]",
    tag: "Paperback Cover ($150)",
  },
  {
    title: "Break The Rules",
    category: "Full Wraparound Cover Art",
    price: "$150",
    subgenre: "Sports Romance / KDP",
    img: coverBreakTheRules,
    aspect: "aspect-[4/3]",
    tag: "Paperback Cover ($150)",
  },
  {
    title: "Love and Lederhosen",
    category: "Full Wraparound Cover Art",
    price: "$150",
    subgenre: "Illustrated Romance / KDP",
    img: coverLoveAndLederhosen,
    aspect: "aspect-[4/3]",
    tag: "Paperback Cover ($150)",
  },
  {
    title: "Dorian, The Velvet Fang",
    category: "Fantasy Character Illustration",
    price: "$80",
    subgenre: "Paranormal Romance & Vampire Bad Boy",
    img: vampireSuit,
    aspect: "aspect-[9/16]",
    tag: "Character Art ($80)",
  },
  {
    title: "Late Night Co-Op Session",
    category: "Scene Concept Art",
    price: "$100",
    subgenre: "Contemporary Romance / College Sports",
    img: conceptGamerBedroom,
    aspect: "aspect-[4/3]",
    tag: "Concept Art ($100)",
  },
  {
    title: "Sunset Over the Rodeo Valley",
    category: "Scene Concept Art",
    price: "$100",
    subgenre: "Western Romance & Mountain Vistas",
    img: conceptSunsetRodeo,
    aspect: "aspect-[16/9]",
    tag: "Concept Art ($100)",
  },
  {
    title: "Aria & The Shadow Direwolf",
    category: "Fantasy Character Illustration",
    price: "$80",
    subgenre: "Shifter Romance & Dark Forest Fantasy",
    img: girlDirewolf,
    aspect: "aspect-[3/4]",
    tag: "Character Art ($80)",
  },
];

const emailSamplesPreview = [
  {
    category: "ARC Team Recruitment",
    timing: "6 Weeks Pre-Launch",
    subject: "I need 50 brave readers (by Friday)",
    highlight:
      "Enemies forced into a single tent · Fae courts with hidden blades · 50 verified Day-1 reviews",
    resultBadge: "ARC spots claimed in < 24 hrs",
  },
  {
    category: "Release Day Sales Promo",
    timing: "Launch Morning Blast",
    subject: "It’s here. (And everything is burning)",
    highlight:
      "Deep immersion prose · Direct Amazon 1-Click Buy button · High-momentum Kindle rank climbing",
    resultBadge: "400+ Day-One purchases",
  },
  {
    category: "Trope-Driven Cover Reveal",
    timing: "3 Weeks Pre-Launch",
    subject: "Look at his smirk. Tell me he isn't dangerous.",
    highlight:
      "Morally grey fae prince teaser · Vertical TikTok graphic · Pre-order conversion surge",
    resultBadge: "52% average open rate",
  },
];

const homePackages = [
  {
    id: "basic",
    name: "Basic Package",
    price: "$200",
    badge: "Essential Worldbuilding",
    popular: false,
    summary:
      "Scene Concept Art & Key Character Visuals for indie authors seeking social teasers and scene concept illustrations.",
    deliverables: [
      "Concept art illustrations of customer's favorite scenes",
      "Draw any 2 characters of customer's choice",
      "Atmospheric worldbuilding lighting & mood mapping",
      "300 DPI print-ready master files",
      "2 revision rounds + full commercial rights",
    ],
  },
  {
    id: "standard",
    name: "Standard Package",
    price: "$300",
    badge: "Digital & EBook Launch",
    popular: false,
    summary:
      "Complete digital publication package: front cover art, cast illustrations, and rich scene concept art.",
    deliverables: [
      "Beautiful front-cover art only",
      "Draw up to 4 characters of customer's choice",
      "Concept art illustrations of customer's favorite scenes",
      "Amazon KDP mobile 100px thumbnail optimization",
      "2 revision rounds + full commercial rights",
    ],
  },
  {
    id: "premium",
    name: "Premium Package",
    price: "$500",
    badge: "★ Recommended · Full Suite",
    popular: true,
    summary:
      "The ultimate author debut package: full wraparound front & back cover, 6 characters, concept scene art, and high-converting launch emails.",
    deliverables: [
      "Complete book cover art (both front & back covers)",
      "Draw up to 6 characters of customer's choice",
      "Promotional scene concept art for marketing",
      "High-converting promotional email sequence for launch",
      "300 DPI master files + 2 revision rounds + 100% commercial ownership",
    ],
  },
];

const faqs = [
  [
    "I'm on a tight indie budget. Is this worth it?",
    "A cover and launch sequence are the two assets that keep selling for the entire life of your book. We offer packages sized for debut authors, starting at flat rates with transparent pricing.",
  ],
  [
    "Will the cover and concept art actually fit my genre?",
    "Yes. Before we sketch, we study the current top 100 in your exact subgenre. Your art will feel at home beside genre bestsellers while commanding instant click-through on Amazon KDP.",
  ],
  [
    "What do the Book Launch emails include?",
    "Our promotional emails cover Advance Reader Copy (ARC) recruitment calls, trope-coded cover reveals, countdown teasers, and launch-day 1-Click Buy sequences written in your voice.",
  ],
  [
    "What if I don't love the first concept?",
    "Every art piece and package includes two full concept rounds and revisions. We refine the visual hierarchy until you are completely thrilled with the final deliverable.",
  ],
  [
    "How long does it take?",
    "Most individual art commissions and email sequences are completed in 10–14 days. Tell us your launch date and we will work backward from it.",
  ],
];

function Index() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero animate-sheen" />
        <div className="absolute -top-24 -right-10 w-[46rem] h-[46rem] bg-primary/15 blur-[120px] rounded-full" />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-24 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <p className="eyebrow text-primary animate-rise">Fantasy & Romantasy · Amazon KDP</p>
            <h1 className="font-display uppercase leading-[0.9] tracking-tight text-6xl md:text-8xl mt-5 animate-rise [animation-delay:80ms]">
              Launch a Book Readers Crave
              <br />
              <span className="text-primary">Without</span> the Silence
            </h1>
            <p className="max-w-[48ch] text-pretty text-muted-foreground text-lg mt-6 animate-rise [animation-delay:160ms]">
              You wrote the world. We make sure readers find it. Ink Wink crafts covers that stop
              the scroll and promotional emails that turn quiet downloads into loyal superfans.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-rise [animation-delay:240ms]">
              <a href="#about" className={btnPrimary}>
                About Us ↓
              </a>
              <a href="#fantasy-art-studio" className={btnGhost}>
                Fantasy Art Studio
              </a>
              <a href="#book-launch-emails" className={btnGhost}>
                Promotional Emails
              </a>
              <a href="#package-pricing" className={btnGhost}>
                Package Pricing
              </a>
              <a href="#testimonials" className={btnGhost}>
                Testimonials
              </a>
            </div>
          </div>
          <div className="md:col-span-4 animate-cut [animation-delay:320ms]">
            <div className="-rotate-[8deg] glass p-5 shadow-2xl">
              <p className="eyebrow text-muted-foreground">
                Character & Cover Study · Blood & Moon
              </p>
              <img
                src={heroCover}
                alt="Romantasy book cover featuring a heroine with heterochromia eyes flanked by a vampire and dark fae lord beneath a full moon"
                width={768}
                height={1152}
                className="mt-3 w-full aspect-[2/3] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 1. ABOUT US SECTION (FIRST AS REQUESTED) */}
      <section id="about" className="relative border-t border-border py-24 bg-card/40 scroll-mt-20">
        <div className="absolute inset-0 bg-hero opacity-30 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow text-primary">About Ink Wink · Who We Are</span>
              <h2 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl tracking-tight text-balance leading-[0.95]">
                Crafting Worlds That Readers
                <br />
                <span className="text-primary">Can't Look Away</span> From
              </h2>
              <p className="text-muted-foreground text-pretty text-lg leading-relaxed">
                We are a dedicated creative partner for indie Fantasy, Romantasy, and Sci-Fi
                authors. We bridge the gap between imagination and the reader's hands by unifying
                two vital crafts under one roof:{" "}
                <strong className="text-foreground">custom fantasy art</strong> and{" "}
                <strong className="text-foreground">launch email copywriting</strong>.
              </p>
              <div className="p-5 glass rounded-xl border border-primary/20 space-y-3">
                <p className="text-xs uppercase tracking-wider text-primary font-bold">
                  Our Philosophy
                </p>
                <p className="text-sm text-foreground/90 leading-relaxed italic">
                  “A book isn’t just text on a screen—it’s an entire realm. The cover creates the
                  first breath of wonder, the characters forge an emotional attachment, and the
                  launch emails turn casual browsers into loyal, day-one superfans.”
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#fantasy-art-studio" className={btnPrimary}>
                  Explore Fantasy Art Studio
                </a>
                <a href="#package-pricing" className={btnGhost}>
                  View Packages ($200–$500)
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="glass p-6 rounded-xl border border-border/80 hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mb-3">
                    01
                  </div>
                  <h3 className="font-display uppercase text-2xl tracking-tight text-foreground">
                    What We Do For Authors
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    We eliminate the exhausting guesswork of self-publishing. Instead of juggling
                    fragmented freelancers across multiple platforms, authors get full visual
                    worldbuilding (illustrated book covers, character portraits, scene concept art)
                    paired with ready-to-send launch email campaigns tailored to indie tropes.
                  </p>
                </div>

                <div className="glass p-6 rounded-xl border border-border/80 hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mb-3">
                    02
                  </div>
                  <h3 className="font-display uppercase text-2xl tracking-tight text-foreground">
                    What We Do For Readers
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    Fantasy readers crave atmosphere and visual immersion. We give them art that
                    honors the lore—capturing the exact mood of ancient citadels, high-stakes magic,
                    and magnetic protagonists so readers instantly recognize and trust your book on
                    Amazon KDP.
                  </p>
                </div>

                <div className="glass p-6 rounded-xl border border-border/80 hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mb-3">
                    03
                  </div>
                  <h3 className="font-display uppercase text-2xl tracking-tight text-foreground">
                    Transparent, Flat Rates
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    No hidden fees or bloated agency markups. Individual commissions start at $80
                    for Character Art, $100 for Concept Art, and $150 for Book Covers. Or choose our
                    all-in-one bundled packages from $200 (Basic) to $500 (Premium) designed
                    specifically for indie budgets.
                  </p>
                </div>

                <div className="glass p-6 rounded-xl border border-border/80 hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mb-3">
                    04
                  </div>
                  <h3 className="font-display uppercase text-2xl tracking-tight text-foreground">
                    Author-First Collaboration
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    You spent months or years writing this book; your vision matters most. Every
                    project includes multiple concept drafts, structured revision rounds, and direct
                    creative communication so nothing goes to print without your absolute
                    excitement.
                  </p>
                </div>
              </div>

              {/* Three Pillars Summary */}
              <div className="glass p-6 rounded-xl border border-border flex flex-col md:flex-row items-center justify-between gap-6 bg-secondary/20">
                <div className="space-y-1 text-center md:text-left">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Studio Focus
                  </p>
                  <p className="text-base font-semibold text-foreground">
                    Fantasy Covers · Character Art · Concept Landscapes · Book Launch Copy
                  </p>
                </div>
                <div className="flex items-center gap-6 text-center divide-x divide-border">
                  <div className="px-3">
                    <span className="block font-display text-2xl text-primary font-bold">100%</span>
                    <span className="text-xs text-muted-foreground">Indie-Focused</span>
                  </div>
                  <div className="px-3">
                    <span className="block font-display text-2xl text-primary font-bold">
                      300 DPI
                    </span>
                    <span className="text-xs text-muted-foreground">KDP Print-Ready</span>
                  </div>
                  <div className="px-3">
                    <span className="block font-display text-2xl text-primary font-bold">
                      5-Star
                    </span>
                    <span className="text-xs text-muted-foreground">Author Rated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FANTASY ART STUDIO (SECOND AS REQUESTED) */}
      <section
        id="fantasy-art-studio"
        className="relative border-t border-border py-24 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="eyebrow text-primary">01 · Visual Worldbuilding</span>
              <h2 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                Fantasy Art Studio
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-pretty">
                Every piece is crafted to capture the nuance of your subgenre. Flat rates with full
                commercial rights for Amazon KDP, paperbacks, and digital promotions.
              </p>
            </div>
            <Link
              to="/visual-art"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-md"
            >
              <span>Explore Full Art Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Rate Highlights Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glass p-5 rounded-xl border border-primary/30 flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Fantasy Book Cover Art</p>
                <p className="font-display text-3xl text-foreground font-bold">$150</p>
              </div>
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <BookOpen className="w-5 h-5" />
              </div>
            </div>

            <div className="glass p-5 rounded-xl border border-border flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Scene Concept Art</p>
                <p className="font-display text-3xl text-foreground font-bold">$100</p>
              </div>
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Compass className="w-5 h-5" />
              </div>
            </div>

            <Link
              to="/visual-art"
              hash="character-art"
              className="glass p-5 rounded-xl border border-border hover:border-primary/50 transition-colors flex items-center justify-between group cursor-pointer"
            >
              <div>
                <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  Character Art Illustration
                </p>
                <p className="font-display text-3xl text-foreground font-bold">$80</p>
              </div>
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <User className="w-5 h-5" />
              </div>
            </Link>
          </div>

          {/* Featured Artwork Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArt.map((piece, idx) => (
              <div
                key={idx}
                className="glass rounded-xl border border-border overflow-hidden flex flex-col justify-between group hover:border-primary/50 transition-all"
              >
                <div className="relative overflow-hidden bg-black/40">
                  <img
                    src={piece.img}
                    alt={piece.title}
                    referrerPolicy="no-referrer"
                    className={`w-full ${piece.aspect} object-cover group-hover:scale-105 transition-transform duration-500`}
                  />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-foreground border border-white/10">
                      {piece.subgenre}
                    </span>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-primary text-primary-foreground shadow-md">
                      {piece.price}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between gap-3 border-t border-border/70">
                  <div>
                    <h3 className="font-display uppercase text-lg text-foreground group-hover:text-primary transition-colors">
                      {piece.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{piece.category}</p>
                  </div>
                  <Link
                    to="/visual-art"
                    className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors shrink-0"
                    aria-label={`View ${piece.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BOOK LAUNCH / PROMOTIONAL EMAIL (THIRD AS REQUESTED) */}
      <section
        id="book-launch-emails"
        className="relative border-t border-border py-24 bg-card/30 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="eyebrow text-primary">02 · Wordsmith Studio</span>
              <h2 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                Book Launch / Promotional Email
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-pretty">
                A scroll-stopping cover wins the first impression. Spellbinding promotional emails
                turn that momentum into verified 5-star reviews, Day-1 Kindle purchases, and
                long-term superfans.
              </p>
            </div>
            <Link
              to="/wordsmith-studio"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-md"
            >
              <span>Read Full Email Samples</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emailSamplesPreview.map((item, idx) => (
              <div
                key={idx}
                className="glass p-7 rounded-2xl border border-border flex flex-col justify-between space-y-6 hover:border-primary/40 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold">
                      {item.timing}
                    </span>
                    <Flame className="w-4 h-4 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-display uppercase text-2xl tracking-tight text-foreground">
                      {item.category}
                    </h3>
                    <p className="text-xs text-primary font-medium mt-1">
                      Subject: “{item.subject}”
                    </p>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">{item.highlight}</p>
                </div>

                <div className="pt-4 border-t border-border/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-foreground/80 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    {item.resultBadge}
                  </span>
                  <Link
                    to="/wordsmith-studio"
                    className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Email Proof Metric Banner */}
          <div className="glass p-6 md:p-8 rounded-2xl border border-primary/30 bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-primary font-semibold">
                <Rocket className="w-3.5 h-3.5" />
                Proven Conversion Architecture
              </span>
              <h3 className="text-xl font-semibold text-foreground">
                Engineered for High-Conversion Amazon Launch Momentum
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground max-w-2xl leading-relaxed">
                Written specifically to trigger reader reply signals, bypass spam filters, and
                deploy high-urgency forced-proximity and trope hooks that move readers to click Buy
                Now.
              </p>
            </div>
            <Link
              to="/wordsmith-studio"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-md"
            >
              <span>Explore Wordsmith Studio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. PACKAGE PRICING (FOURTH AS REQUESTED) */}
      <section id="package-pricing" className="relative border-t border-border py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="eyebrow text-primary">03 · All-In-One Suites</span>
              <h2 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                Package Pricing
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-pretty">
                Curated bundles combining front/back covers, character casts, scene concept art, and
                launch promotional emails at discounted flat rates.
              </p>
            </div>
            <Link
              to="/pricing"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-md"
            >
              <span>View Full Pricing Matrix</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {homePackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`glass p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 relative group hover:border-primary/50 hover:shadow-2xl ${
                  pkg.popular ? "border-primary/50 bg-card/60 shadow-xl" : "border-border"
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30 font-semibold">
                      {pkg.badge}
                    </span>
                    {pkg.popular && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-primary text-primary-foreground font-bold">
                        Most Chosen
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-display uppercase text-3xl tracking-tight text-foreground">
                      {pkg.name}
                    </h3>
                    <div className="mt-3 flex items-baseline gap-1.5">
                      <span className="font-display text-5xl text-foreground tracking-tight font-bold">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">
                        / complete package
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">{pkg.summary}</p>

                  <div className="border-t border-border/80 pt-5 space-y-3">
                    <p className="eyebrow text-xs text-foreground/90 font-semibold">
                      What's Included:
                    </p>
                    <ul className="space-y-2 text-xs text-muted-foreground">
                      {pkg.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-border/60">
                  <Link
                    to="/pricing"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg text-sm font-semibold transition-all shadow-sm ${
                      pkg.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-border text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    <span>
                      Choose {pkg.name} ({pkg.price})
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>
                All packages include 2 rounds of revisions & 100% full commercial publishing rights.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS (FIFTH AS REQUESTED) */}
      <section
        id="testimonials"
        className="relative border-t border-border py-24 bg-card/40 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="eyebrow text-primary">04 · Verified Reviews</span>
              <h2 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                Author Testimonials
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-pretty">
                See what indie Fantasy and Romantasy authors say about our book covers, character
                art, and promotional launch emails on Amazon KDP.
              </p>
            </div>
            <Link
              to="/testimonials"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-md"
            >
              <span>Read All Verified Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Questions Section */}
      <section className="max-w-3xl mx-auto px-6 py-24 border-t border-border">
        <h2 className="font-display uppercase text-5xl tracking-tight text-center">Questions</h2>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {faqs.map(([q, a], i) => (
            <details key={q} className="group py-5" open={i === 0}>
              <summary className="flex justify-between items-center gap-4 cursor-pointer font-semibold list-none">
                {q}
                <span className="text-primary text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-muted-foreground text-pretty mt-3 max-w-[56ch] text-sm leading-relaxed">
                {a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <ClosingCta
        title={
          <>
            Your Story Deserves
            <br />
            to Be Seen
          </>
        }
        body="Book a free launch call this week and receive a complimentary cover critique of your current or planned design. Bring your draft — leave with a plan to fill your launch with readers."
      />
    </main>
  );
}
