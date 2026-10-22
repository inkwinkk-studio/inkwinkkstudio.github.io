import { createFileRoute, Link } from "@tanstack/react-router";
import { ClosingCta } from "@/components/SiteChrome";
import { Rocket, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/wordsmith-studio")({
  head: () => ({
    meta: [
      { title: "Book Launch & Promotional Emails — Ink Wink Wordsmith Studio" },
      {
        name: "description",
        content:
          "Read full sample ARC recruitment calls, release-day sales promos, and launch sequences written for Fantasy and Romantasy authors on Amazon KDP.",
      },
      { property: "og:title", content: "Book Launch & Promotional Emails — Ink Wink" },
      {
        property: "og:description",
        content:
          "Turn curious readers into day-one buyers with high-converting fantasy book launch email sequences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Wordsmith,
});

type LaunchCategory = "all" | "arc-recruitment" | "launch-day" | "cover-reveal";

type Sample = {
  id: string;
  category: "arc-recruitment" | "launch-day" | "cover-reveal";
  categoryLabel: string;
  tag: string;
  purpose: string;
  from: string;
  subject: string;
  preview: string;
  body: string[];
  cta: string;
  ps?: string;
};

const samples: Sample[] = [
  {
    id: "arc-recruitment",
    category: "arc-recruitment",
    categoryLabel: "ARC Team Recruitment · 6 Weeks Pre-Launch",
    tag: "Launch Sample 01 · Advance Reader Copy (ARC) Review Team Call",
    purpose:
      "Sent to readers 6–8 weeks before release. Creates exclusivity and urgency so loyal superfans race to join your review strike team, ensuring 50+ verified reviews on Day 1.",
    from: "Elara Vane <letters@elaravane.com>",
    subject: "I need 50 brave readers (by Friday)",
    preview: "The sequel is finished. You could read it before anyone else.",
    body: [
      "Friend,",
      "It's done. After fourteen months, three rewrites, and one very dramatic night where I almost threw the whole manuscript into the fire, A Crown of Cinders is finished.",
      "And I want you to read it first.",
      "I'm assembling my Ember Guard — a small circle of 50 readers who receive a free advance copy four weeks before the world does. In return, I ask for one thing: an honest review on Amazon during launch week.",
      "Here is what's waiting for you inside:\n• Enemies who are forced to share a single tent (yes, really)\n• A fae court where every smile hides a blade\n• The return of Kael — and the betrayal that changes everything\n• An ending I promise you won't see coming",
      "Ember Guard members also get their names in the acknowledgments, a private chat with me, and first access to every future ARC.",
      "Spots are limited to 50, and the gate closes Friday at midnight. If you love the Thornwood and want to help its story reach new readers, I would be honored to have you.",
      "Your fellow dreamer,\n\nElara",
    ],
    cta: "👉 Apply to the Ember Guard ARC Team",
    ps: "P.S. Last time, every spot was claimed in 36 hours. If your heart said yes while reading this, trust it.",
  },
  {
    id: "launch-day-promo",
    category: "launch-day",
    categoryLabel: "Day-One Launch Blast · 72-Hour $0.99 Window",
    tag: "Launch Sample 02 · Release Day Sales Spike & Trope Hook",
    purpose:
      "Sent the morning of release. Drives immediate Kindle purchases and rank momentum in the first 24 hours using trope highlights, forced proximity teasers, and limited launch pricing.",
    from: "Elara Vane <letters@elaravane.com>",
    subject: "🔥 It's here: enemies, one tent, and a crown on fire",
    preview: "A Crown of Cinders is live — and only $0.99 for 72 hours.",
    body: [
      "Today is the day.",
      "A Crown of Cinders is officially live on Amazon, and for the next 72 hours only, you can claim it for just $0.99 before it returns to full price.",
      "If you've been waiting for Kael and Seraphine to finally stop pretending they hate each other, your patience is about to be rewarded.",
      "Inside, you'll find:\n⚔️ Enemies to lovers with a slow burn that finally catches fire\n🏕️ Forced proximity — one storm, one tent, zero escape\n👑 A morally grey fae prince who would burn kingdoms for her\n🗡️ Court intrigue, deadly bargains, and a betrayal that cuts deep\n✨ Found family you'll want to protect with your life",
      'Early readers are already calling it "the book that ruined my sleep schedule" and "the sequel that outshines the first."',
      "Here's how you can help today: grab your copy in the first 24 hours. Early sales tell Amazon to show this book to new readers, and that single click carries the Thornwood further than any ad ever could.",
      "Thank you for walking this road with me. None of this magic exists without you.",
      "Now go — the crown is burning.\n\nElara",
    ],
    cta: "👉 Get It on Kindle for $0.99",
    ps: "P.S. Free to read with Kindle Unlimited. Already finished it? A quick review this week means the world to an indie author.",
  },
  {
    id: "cover-reveal-preorder",
    category: "cover-reveal",
    categoryLabel: "Cover Reveal & Pre-Order Announcement",
    tag: "Launch Sample 03 · Custom Cover Reveal & Pre-Order Rank Builder",
    purpose:
      "Sent 3–4 weeks prior to release when custom artwork is finalized. Teases the visual aesthetic of the fantasy world and secures early pre-orders that feed the Amazon algorithm.",
    from: "Rowan Ashwood <rowan@ashwoodfantasy.com>",
    subject: "The dagger has chosen its master... [Cover Reveal]",
    preview:
      "Three months in the artist's workshop. Here is the official cover of Shadow & Cinders.",
    body: [
      "Hi [Reader Name],",
      "I've been holding my breath for nearly three months waiting to share this.",
      "When I commissioned the artwork for **Shadow & Cinders**, I told the artist: *'I want a cover that looks like ancient velvet, obsidian daggers, and dangerous vows.'*",
      "Yesterday afternoon, the final print wrap file arrived in my inbox. My hands were shaking when I opened it.",
      "This is not just a digital illustration. It is the face of Lord Cassian's obsidian kingdom, illuminated by enchanted frost and crowned in blood gold foil.",
      "Because you're on my VIP reader list, you're seeing the high-resolution front & back wrap before I post it to Instagram and TikTok.",
      "**Pre-Orders Are Now Officially Open:**\nLock in the early-bird pre-order today for just **$0.99** (regular retail will be $4.99 on release day). Every pre-order placed this week guarantees our novel lands on the Amazon Fantasy Hot New Releases chart on day one.",
      "Happy reading,\n\nRowan Ashwood",
    ],
    cta: "👉 See the High-Res Full Cover Wrap & Pre-Order for $0.99",
    ps: "P.S. Want printable bookmarks featuring this artwork? Everyone who pre-orders this week gets a 3-piece digital printable art set sent straight to their inbox on launch morning!",
  },
  {
    id: "countdown-urgency",
    category: "launch-day",
    categoryLabel: "48-Hour Urgency & Price Warning",
    tag: "Launch Sample 04 · Final 48-Hour Countdown ($0.99 Expiring)",
    purpose:
      "Sent 48 hours before the promotional discount ends. Converts fence-sitters and procrastinators with undeniable social proof and an impending price jump.",
    from: "Elara Vane <letters@elaravane.com>",
    subject: "⏰ 48 hours left before the price goes up (and 74 reviews?!)",
    preview: "The $0.99 launch promotion ends Wednesday at midnight.",
    body: [
      "Hi [Reader Name],",
      "I just logged into my Amazon author dashboard and rubbed my eyes twice.",
      "In less than 72 hours since release, **A Crown of Cinders** already has **74 five-star ratings** and just hit **#1 in Dark Fantasy Romance Releases**.",
      'One reviewer wrote:\n*"I called in sick to work because I could not put down the chapter 22 carriage scene. Kael has officially ruined all other fantasy men for me forever."*',
      "If you've been waiting for the weekend to grab your copy, this is your heads-up: the **$0.99 launch discount officially expires Wednesday at midnight**, after which the price goes up to the standard $4.99.",
      "Grab it now, lock in the launch deal, and settle in for a morally grey journey you won't forget.",
      "With endless gratitude,\n\nElara",
    ],
    cta: "👉 Claim Your $0.99 Copy Before Midnight Wednesday",
    ps: "P.S. As always, the novel remains free to download for Kindle Unlimited subscribers!",
  },
];

function FormattedText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
          return (
            <strong key={index} className="font-semibold text-foreground">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("*") && part.endsWith("*") && part.length >= 2) {
          return (
            <em key={index} className="italic text-foreground/95">
              {part.slice(1, -1)}
            </em>
          );
        }
        return part;
      })}
    </>
  );
}

function EmailCard({ s }: { s: Sample }) {
  return (
    <div className="glass overflow-hidden shadow-2xl rounded-xl border border-border">
      <div className="border-b border-border/80 px-6 py-4 space-y-1.5 text-sm bg-card/40">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="flex items-center gap-2">
            <span className="eyebrow text-muted-foreground">From</span>
            <span className="font-mono text-xs text-foreground/90">{s.from}</span>
          </p>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
            Book Launch / Promo
          </span>
        </div>
        <p className="flex items-baseline gap-2">
          <span className="eyebrow text-muted-foreground">Subject</span>
          <span className="font-semibold text-foreground">{s.subject}</span>
        </p>
        <p className="flex items-baseline gap-2 text-xs">
          <span className="eyebrow text-muted-foreground">Preview</span>
          <span className="text-muted-foreground">{s.preview}</span>
        </p>
      </div>

      <div className="px-6 md:px-10 py-8 space-y-4 text-pretty leading-relaxed">
        {s.body.map((p, i) => (
          <p key={i} className="whitespace-pre-line text-foreground/90 text-sm md:text-base">
            <FormattedText text={p} />
          </p>
        ))}

        <div className="pt-4 pb-2">
          <span className="inline-block bg-primary text-primary-foreground px-6 py-3 font-semibold rounded-md shadow-md text-sm hover:bg-primary/90 transition-colors">
            {s.cta}
          </span>
        </div>

        {s.ps && (
          <div className="border-t border-border/60 pt-4 mt-6">
            <p className="text-muted-foreground text-sm italic">
              <FormattedText text={s.ps} />
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function Wordsmith() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero animate-sheen" />
        <div className="absolute -top-24 -right-10 w-[40rem] h-[40rem] bg-primary/15 blur-[120px] rounded-full" />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20">
          <p className="eyebrow text-primary animate-rise">02 · The Wordsmith Studio</p>
          <h1 className="font-display uppercase leading-[0.9] tracking-tight text-5xl md:text-8xl mt-5 max-w-[16ch] animate-rise [animation-delay:80ms]">
            Book Launch & <span className="text-primary">Promotional</span> Emails
          </h1>
          <p className="max-w-[56ch] text-muted-foreground text-lg mt-6 text-pretty animate-rise [animation-delay:160ms]">
            A cover commands the first glance. High-converting launch emails turn curious readers
            into day-one buyers. Explore real, full-length samples of ARC recruitment calls, cover
            reveals, and release-day promotions crafted specifically for Fantasy and Romantasy
            authors.
          </p>

          {/* All Launch Samples Heading */}
          <div className="mt-10 animate-rise [animation-delay:240ms]">
            <h2 className="font-display uppercase text-2xl md:text-3xl tracking-tight flex items-center gap-2.5 text-foreground">
              <Sparkles className="w-5 h-5 text-primary" />
              <span>All Launch Samples ({samples.length})</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Target Content Sections */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        <div className="border-b border-border pb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <p className="eyebrow text-primary">Conversion Sequence & Launch Day</p>
              <h2 className="font-display uppercase text-3xl md:text-4xl tracking-tight">
                All Launch Samples ({samples.length})
              </h2>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl text-pretty mt-3">
            Engineered to drive Day-1 sales spikes and climb Amazon KDP charts. Includes ARC review
            team recruitment calls, high-res cover reveal pre-order blasts, and trope-fueled $0.99
            urgency emails that convert subscribers into reviews and royalties.
          </p>
        </div>

        <div className="space-y-16">
          {samples.map((s) => (
            <article key={s.id} className="space-y-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="eyebrow text-primary">{s.tag}</p>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  KDP Launch Optimized
                </span>
              </div>
              <p className="text-muted-foreground text-sm max-w-[65ch] text-pretty">{s.purpose}</p>
              <EmailCard s={s} />
            </article>
          ))}
        </div>

        {/* Pricing Cross Link */}
        <div className="p-6 md:p-8 rounded-xl border border-primary/30 bg-primary/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-primary font-semibold text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Need this written for your upcoming launch?</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xl">
              Our <strong>Premium Package ($500)</strong> includes front & back cover art, 6
              character illustrations, concept scenes, and a complete high-converting promotional
              email launch sequence.
            </p>
          </div>
          <Link
            to="/pricing"
            className="shrink-0 px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-md hover:bg-primary/90 transition-colors shadow-sm"
          >
            View Premium Package →
          </Link>
        </div>
      </section>

      <ClosingCta
        title={
          <>
            Let Your Words
            <br />
            Work While You Write
          </>
        }
        body="Get a free copy audit of your upcoming launch email sequence with three high-impact fixes to boost Day-1 conversions."
      />
    </main>
  );
}
