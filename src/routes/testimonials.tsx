import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import {
  Star,
  Quote,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  BookOpen,
  User,
  Rocket,
  ArrowRight,
  ShieldCheck,
  SlidersHorizontal,
  LayoutGrid,
} from "lucide-react";
import { btnPrimary, btnGhost } from "@/components/SiteChrome";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Author Testimonials & Results — Ink Wink Creative Studio" },
      {
        name: "description",
        content:
          "Read verified reviews from indie Fantasy and Romantasy authors on Amazon KDP. Discover how our cover art, character art, and promotional launch emails delivered top bestseller rankings.",
      },
      { property: "og:title", content: "Author Testimonials & Results — Ink Wink" },
      {
        property: "og:description",
        content:
          "See what indie authors say about our Fantasy Cover Art, Character Art, and Book Launch promotional emails.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TestimonialsPage,
});

type Category = "all" | "cover-art" | "character-art" | "book-launch";

interface Testimonial {
  id: string;
  author: string;
  penName?: string;
  genre: string;
  bookTitle: string;
  service: string;
  category: "cover-art" | "character-art" | "book-launch";
  categoryBadge: string;
  rating: number;
  quote: string;
  detailedReview: string;
  resultBadge: string;
  statsMetric: string;
  statsLabel: string;
  avatarBg: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: "cover-art-robert",
    author: "Robert Vance",
    genre: "High Fantasy / Epic Adventure",
    bookTitle: "The Ashen Blade: Chronicles of Eldoria",
    service: "Illustrated Fantasy Cover Art",
    category: "cover-art",
    categoryBadge: "Fantasy Cover Art",
    rating: 5,
    quote:
      "I got a cover art made for my fantasy novel from them, and it turned out to be a great book cover.",
    detailedReview:
      "The dynamic lighting and the heroine's silhouette made it instantly pop on Amazon KDP search results. Before the redesign, shoppers were simply scrolling past my thumbnail. Within 48 hours of uploading the new cover, my organic click-through rate more than doubled and kindle page reads surged. Working with their team felt like working with a traditional fantasy art director.",
    resultBadge: "2.4x KDP Click-Through Rate",
    statsMetric: "+140%",
    statsLabel: "Amazon Organic Impressions",
    avatarBg: "from-amber-500/20 to-orange-600/30 text-amber-300",
    initials: "RV",
  },
  {
    id: "character-art-althea",
    author: "Althea Thorne",
    genre: "Dark Romantasy & Court Intrigue",
    bookTitle: "A Crown of Thorn and Cinders",
    service: "Vertical Character Art for TikTok & Social",
    category: "character-art",
    categoryBadge: "Character Art",
    rating: 5,
    quote:
      "I commissioned character art for my morally grey fae hero, and it turned out to be an incredible illustration.",
    detailedReview:
      "They captured his dark feathered wings and smug, lethal smirk with uncanny precision. When I posted the first character teaser reel on BookTok, it went viral with over 180,000 views. Readers flooded my Amazon page to pre-order before chapter one had even been released publicly! Having high-fidelity character art gave my debut romantasy instant fandom status.",
    resultBadge: "180K+ BookTok Views & +340 Pre-orders",
    statsMetric: "+340",
    statsLabel: "Day-One Pre-Orders",
    avatarBg: "from-rose-500/20 to-pink-600/30 text-rose-300",
    initials: "AT",
  },
  {
    id: "launch-emails-marcus",
    author: "Marcus Sterling",
    genre: "Epic Fantasy & Grimdark",
    bookTitle: "The Shadow Regent (Book 1)",
    service: "Book Launch & Promotional Email Sequence",
    category: "book-launch",
    categoryBadge: "Book Launch / Promotional Email",
    rating: 5,
    quote:
      "The promotional emails written for my new book launch achieved great results beyond what I imagined.",
    detailedReview:
      "We deployed their 4-part ARC recruitment and launch week email sequence. The ARC team email filled all 60 reader spots in under 24 hours with enthusiastic reviewers. On release morning, the trope-heavy launch email drove over 400 Kindle purchases in the first day. We broke into the Top 50 in Epic Fantasy on Amazon and collected 58 verified reviews in week one!",
    resultBadge: "Top 50 Amazon Epic Fantasy & 400+ Day-One Sales",
    statsMetric: "Top 50",
    statsLabel: "Amazon Subgenre Rank",
    avatarBg: "from-emerald-500/20 to-teal-600/30 text-emerald-300",
    initials: "MS",
  },
  {
    id: "launch-promo-jennifer",
    author: "Jennifer Morales",
    genre: "Fantasy Romance & Enemies-to-Lovers",
    bookTitle: "Court of Whisper and Flame",
    service: "Promotional Launch Sequence & Urgency Blasts",
    category: "book-launch",
    categoryBadge: "Book Launch / Promotional Email",
    rating: 5,
    quote:
      "Their promotional emails for my new book launch produced extraordinary results and record open rates.",
    detailedReview:
      "I was terrified my release day would be met with crickets. The promotional sequence Ink Wink crafted hit a 52% open rate across my subscriber list. The forced-proximity teaser and the 72-hour countdown emails turned quiet subscribers into passionate day-one buyers. It generated over $4,200 in launch week royalties and kept my book sticky in the Kindle Unlimited charts for a month.",
    resultBadge: "52% Open Rate & $4,200+ Launch Week Royalties",
    statsMetric: "52%",
    statsLabel: "Average Email Open Rate",
    avatarBg: "from-sky-500/20 to-cyan-600/30 text-sky-300",
    initials: "JM",
  },
  {
    id: "full-studio-calder",
    author: "David H. Calder",
    genre: "Progression Fantasy & Cultivation",
    bookTitle: "Song of the Iron Weaver",
    service: "Full Studio Hybrid Package (Cover Art + Launch Copy)",
    category: "cover-art",
    categoryBadge: "Fantasy Cover Art & Copy",
    rating: 5,
    quote:
      "Having both our fantasy cover art and our promotional launch emails handled by the same studio was a game changer.",
    detailedReview:
      "The cover made the book look like a heavyweight from Tor or Orbit, and the email sequence matched that exact tone. Readers received the same spellbinding promise from the cover thumbnail all the way through to our release-day letters. We hit #1 New Release in Progression Fantasy on Amazon KDP within 14 hours of going live.",
    resultBadge: "#1 Amazon KDP New Release in Progression Fantasy",
    statsMetric: "#1",
    statsLabel: "New Release Category Bestseller",
    avatarBg: "from-purple-500/20 to-indigo-600/30 text-purple-300",
    initials: "DC",
  },
];

function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [viewMode, setViewMode] = useState<"slider" | "grid">("slider");

  const filteredTestimonials =
    activeCategory === "all"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  const coverCount = testimonials.filter(
    (t) => t.category === "cover-art" || t.categoryBadge.includes("Cover"),
  ).length;
  const characterCount = testimonials.filter((t) => t.category === "character-art").length;
  const launchCount = testimonials.filter((t) => t.category === "book-launch").length;

  return (
    <main>
      {/* Hero Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero animate-sheen" />
        <div className="absolute -top-24 -left-10 w-[42rem] h-[42rem] bg-primary/15 blur-[120px] rounded-full" />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
          <p className="eyebrow text-primary animate-rise">
            Author Testimonials & Verified Results
          </p>
          <h1 className="font-display uppercase leading-[0.9] tracking-tight text-5xl md:text-8xl mt-5 max-w-[15ch] animate-rise [animation-delay:80ms]">
            Proven Results <span className="text-primary">From Indie</span> Authors
          </h1>
          <p className="max-w-[56ch] text-muted-foreground text-lg mt-6 text-pretty animate-rise [animation-delay:160ms]">
            Read verified feedback from independent Fantasy and Romantasy authors on Amazon KDP. See
            how custom Fantasy Cover Art, viral Character Art, and promotional book launch email
            sequences transformed their book launches into enduring bestseller successes.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-10 flex flex-wrap gap-2.5 animate-rise [animation-delay:240ms]">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2.5 text-xs md:text-sm font-semibold rounded-lg border transition-all flex items-center gap-2 ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "glass text-muted-foreground border-border hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>All Testimonials ({testimonials.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("cover-art")}
              className={`px-4 py-2.5 text-xs md:text-sm font-semibold rounded-lg border transition-all flex items-center gap-2 ${
                activeCategory === "cover-art"
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "glass text-muted-foreground border-border hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Fantasy Cover Art ({coverCount})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("character-art")}
              className={`px-4 py-2.5 text-xs md:text-sm font-semibold rounded-lg border transition-all flex items-center gap-2 ${
                activeCategory === "character-art"
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "glass text-muted-foreground border-border hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Character Art ({characterCount})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("book-launch")}
              className={`px-4 py-2.5 text-xs md:text-sm font-semibold rounded-lg border transition-all flex items-center gap-2 ${
                activeCategory === "book-launch"
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "glass text-muted-foreground border-border hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>Book Launch / Promotional Emails ({launchCount})</span>
            </button>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="border-y border-border bg-card/25 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="font-display text-3xl md:text-5xl text-primary">5.0 ★</p>
            <p className="text-xs text-muted-foreground mt-1.5 uppercase tracking-wider font-mono">
              Indie Author Rating
            </p>
          </div>
          <div>
            <p className="font-display text-3xl md:text-5xl text-foreground">2.4x</p>
            <p className="text-xs text-muted-foreground mt-1.5 uppercase tracking-wider font-mono">
              Average KDP CTR Lift
            </p>
          </div>
          <div>
            <p className="font-display text-3xl md:text-5xl text-foreground">50%+</p>
            <p className="text-xs text-muted-foreground mt-1.5 uppercase tracking-wider font-mono">
              Launch Email Open Rates
            </p>
          </div>
          <div>
            <p className="font-display text-3xl md:text-5xl text-primary">100%</p>
            <p className="text-xs text-muted-foreground mt-1.5 uppercase tracking-wider font-mono">
              Amazon KDP Compliant
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Showcase Section with View Switcher */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
          <div className="space-y-1">
            <span className="eyebrow text-primary">Client Feedback & Results</span>
            <h2 className="font-display uppercase text-3xl sm:text-4xl tracking-tight">
              Verified Author Reviews
            </h2>
          </div>

          {/* View Mode Toggle: Interactive Slider vs All Reviews Grid */}
          <div className="inline-flex items-center p-1 rounded-xl bg-card border border-border self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setViewMode("slider")}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all cursor-pointer ${
                viewMode === "slider"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Auto-Play Slider</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>
          </div>
        </div>

        {viewMode === "slider" ? (
          <TestimonialCarousel items={filteredTestimonials} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTestimonials.map((t) => (
              <article
                key={t.id}
                className="glass p-8 md:p-9 rounded-2xl border border-border flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group hover:border-primary/40 transition-all duration-300"
              >
                {/* Top Meta Header */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 text-primary">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Badge */}
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {t.categoryBadge}
                    </span>
                  </div>

                  {/* Highlighted Core Quote */}
                  <blockquote className="relative">
                    <p className="font-display uppercase text-xl md:text-2xl text-foreground tracking-wide leading-snug text-balance">
                      "{t.quote}"
                    </p>
                  </blockquote>

                  {/* Detailed Narrative */}
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                    {t.detailedReview}
                  </p>
                </div>

                {/* Bottom Result & Author Info */}
                <div className="space-y-4 pt-4 border-t border-border/70">
                  {/* Result Tag */}
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-card/60 border border-border/80 text-xs">
                    <TrendingUp className="w-4 h-4 text-primary shrink-0" />
                    <span className="font-medium text-foreground">{t.resultBadge}</span>
                  </div>

                  {/* Author Card */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarBg} border border-border flex items-center justify-center font-bold text-sm`}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="font-semibold text-sm text-foreground">{t.author}</p>
                          <ShieldCheck
                            className="w-3.5 h-3.5 text-primary"
                            title="Verified Author"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">{t.genre}</p>
                      </div>
                    </div>

                    <div className="text-right hidden sm:block">
                      <p className="font-mono text-xs text-primary font-semibold">
                        {t.statsMetric}
                      </p>
                      <p className="text-[10px] text-muted-foreground uppercase">{t.statsLabel}</p>
                    </div>
                  </div>

                  <p className="text-[11px] text-muted-foreground/80 italic">
                    Book: <span className="text-foreground/90 font-medium">"{t.bookTitle}"</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Cross-Link Showcase */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="glass p-8 md:p-12 rounded-2xl border border-border grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="eyebrow text-primary">Experience The Same Results</p>
            <h2 className="font-display uppercase text-3xl md:text-4xl tracking-tight">
              Ready to Launch Your Book to Applause?
            </h2>
            <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
              Explore our portfolio of fantasy cover art, character portraits, and concept art, or
              browse full-length samples of high-converting book launch and promotional emails.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <Link
              to="/visual-art"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-md text-sm text-center"
            >
              <span>Explore Fantasy Art</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/wordsmith-studio"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-border text-sm text-foreground hover:bg-foreground/5 transition-colors text-center"
            >
              <span>Read Email Samples</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Closing CTA */}
      <section className="relative overflow-hidden py-24 border-t border-border">
        <div className="absolute inset-0 bg-cta" />
        <div className="relative max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="font-display uppercase text-5xl md:text-7xl tracking-tight text-balance">
            Your Story Deserves
            <br />
            To Be Celebrated
          </h2>
          <p className="text-muted-foreground text-pretty max-w-[48ch] mx-auto text-base md:text-lg">
            Join the indie authors who turned quiet releases into unforgettable launches. Inquire
            directly at <strong className="text-foreground">inkwinkk.studio@gmail.com</strong>.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link to="/visual-art" className={`${btnPrimary} px-8 py-3.5 text-base shadow-lg`}>
              Browse Fantasy Art
            </Link>
            <Link to="/wordsmith-studio" className={`${btnGhost} px-7 py-3.5 text-base`}>
              Browse Email Samples
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
