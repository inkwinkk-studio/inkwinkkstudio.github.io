import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import vampireSuit from "@/assets/images/vampire_suit_character_1791649669972.jpg";
import girlDirewolf from "@/assets/images/girl_direwolf_character_1791649687401.jpg";
import redDressCouple from "@/assets/images/red_dress_couple_1791649700787.jpg";
import splitEyesDuo from "@/assets/images/split_eyes_duo_1791649714958.jpg";
import royalPurpleDuo from "@/assets/images/royal_purple_duo_1791649727113.jpg";
import playfulHolidayCouple from "@/assets/images/playful_holiday_couple_1791649740432.jpg";
import sweetStrollCouple from "@/assets/images/sweet_stroll_couple_1791649756615.jpg";
import heroVampireTrio from "@/assets/images/hero_vampire_trio_1791564044598.jpg";
import heroCover from "@/assets/hero-cover.jpg";
import coverIfICouldKeepYou from "@/assets/cover-if-i-could-keep-you.jpg";
import coverBreakTheRules from "@/assets/cover-break-the-rules.jpg";
import coverLoveAndLederhosen from "@/assets/cover-love-and-lederhosen.jpg";
import coverSomethingWorthKeeping from "@/assets/cover-something-worth-keeping.jpg";
import coverSpecialAgentBridesmaid from "@/assets/cover-special-agent-bridesmaid.jpg";
import conceptGamerBedroom from "@/assets/concept-gamer-bedroom.jpg";
import conceptSunsetRodeo from "@/assets/concept-sunset-rodeo.jpg";
import { ClosingCta, btnPrimary, btnGhost } from "@/components/SiteChrome";
import {
  Sparkles,
  BookOpen,
  User,
  Compass,
  ArrowRight,
  CheckCircle2,
  ZoomIn,
  X,
  Mail,
  ShieldCheck,
  Tag,
} from "lucide-react";

export const Route = createFileRoute("/visual-art")({
  head: () => ({
    meta: [
      {
        title:
          "Fantasy Art Portfolio & Pricing — Covers ($150), Concept Art ($100), Characters ($80) | Ink Wink",
      },
      {
        name: "description",
        content:
          "Explore our Fantasy Art portfolio with transparent pricing: $150 for Fantasy Book Cover Art, $100 for Scene Concept Art, and $80 for Character Art Illustrations for indie authors.",
      },
      { property: "og:title", content: "Fantasy Art Portfolio & Pricing — Ink Wink" },
      {
        property: "og:description",
        content:
          "Fantasy Book Cover Art ($150), Scene Concept Art ($100), and Character Art ($80) for Amazon KDP authors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FantasyArtPage,
});

type ArtSubcategory = "all" | "cover-art" | "concept-art" | "character-art";

interface GalleryPiece {
  id: string;
  category: "cover-art" | "concept-art" | "character-art";
  categoryLabel: string;
  price: string;
  priceNumber: number;
  tag: string;
  title: string;
  subgenre: string;
  img: string;
  aspect: string;
  alt: string;
  caption: string;
  highlights: string[];
}

const pricingTiers = [
  {
    category: "cover-art" as const,
    name: "Fantasy Book Cover Art",
    price: "$150",
    badge: "Most Popular for KDP",
    icon: BookOpen,
    inquirySubject: "Fantasy Book Cover Art Commission ($150)",
  },
  {
    category: "concept-art" as const,
    name: "Scene Concept Art",
    price: "$100",
    badge: "Worldbuilding & Lore",
    icon: Compass,
    inquirySubject: "Scene Concept Art Commission ($100)",
  },
  {
    category: "character-art" as const,
    name: "Character Art Illustrations",
    price: "$80",
    badge: "BookTok & Social Virality",
    icon: User,
    inquirySubject: "Character Art Commission ($80)",
  },
];

const galleryPieces: GalleryPiece[] = [
  {
    id: "something-worth-keeping-cover",
    category: "cover-art",
    categoryLabel: "Romance Book Cover Art",
    price: "$150",
    priceNumber: 150,
    tag: "Full Wraparound · Paperback Cover",
    title: "Something Worth Keeping",
    subgenre: "Contemporary Romance",
    img: coverSomethingWorthKeeping,
    aspect: "aspect-[4/3]",
    alt: "Full paperback book cover of Something Worth Keeping by Cori Wamsley with sidewalk couple in front of Lyon's Coffee",
    caption:
      "Full wraparound paperback book cover design featuring a chic couple strolling down a Parisian-inspired street in front of Lyon's Coffee, complete with custom spine and formatted back-cover blurb.",
    highlights: [
      "Full wraparound layout engineered for KDP print with spine width calculations",
      "Sophisticated urban palette and warm autumn café backdrop",
      "Genre-true hand-lettered title script with tagline and author branding",
    ],
  },
  {
    id: "special-agent-bridesmaid-cover",
    category: "cover-art",
    categoryLabel: "Romantic Comedy & Spy Fiction",
    price: "$150",
    priceNumber: 150,
    tag: "Full Wraparound · Paperback Cover",
    title: "Special Agent Bridesmaid",
    subgenre: "Romantic Action Comedy",
    img: coverSpecialAgentBridesmaid,
    aspect: "aspect-[4/3]",
    alt: "Full paperback book cover of Special Agent Bridesmaid featuring secret agent bridesmaid in red dress and blonde handler in tuxedo",
    caption:
      "High-energy romantic spy comedy full wraparound cover. Shows the undercover agent in a striking high-slit red gown with concealed weapon alongside her tuxedo handler outside a wedding cathedral.",
    highlights: [
      "Dynamic character illustration with bold contrasting red and tuxedo black",
      "Front, spine, and back cover blurb spread with spot character illustrations",
      "Eye-catching title typography styled for Amazon Kindle bestsellers and paperback shelves",
    ],
  },
  {
    id: "dark-witchcraft-cover",
    category: "cover-art",
    categoryLabel: "Fantasy Book Cover Art",
    price: "$150",
    priceNumber: 150,
    tag: "Atmospheric Mood · Book Cover",
    title: "Ember Moon Witchcraft",
    subgenre: "Gothic Witchcraft & Urban Fantasy",
    img: heroCover,
    aspect: "aspect-[2/3]",
    alt: "Fantasy book cover of a sorceress beneath a blood-red ember moon",
    caption:
      "Atmospheric color saturation and dramatic backlighting immediately trigger emotional resonance. Readers who crave dark magic, morally grey heroines, and lunar covenants stop dead in their tracks.",
    highlights: [
      "Atmospheric volumetric lighting and particle spellwork",
      "Color grading calibrated specifically for dark mode KDP browsing",
      "Seamless wraparound readiness for paperback and hardcover jacket printing",
    ],
  },
  {
    id: "if-i-could-keep-you-cover",
    category: "cover-art",
    categoryLabel: "Fantasy & Romance Book Cover Art",
    price: "$150",
    priceNumber: 150,
    tag: "Full Wraparound · Paperback Cover",
    title: "If I Could Keep You",
    subgenre: "Contemporary Romance / Second Chance",
    img: coverIfICouldKeepYou,
    aspect: "aspect-[4/3]",
    alt: "Full paperback book cover of If I Could Keep You by Ella Marlowe with front, spine and back cover",
    caption:
      "Complete full-wraparound paperback and hardcover book cover engineered for KDP print on demand. Features custom illustrated couple, cohesive spine typography, and back-cover blurb formatting.",
    highlights: [
      "Front cover, spine (custom thickness calculated), and back blurb layout",
      "300 DPI print-ready CMYK calibrated master files for Amazon KDP & IngramSpark",
      "Engaging illustrated couple art matching contemporary bestseller aesthetics",
    ],
  },
  {
    id: "break-the-rules-cover",
    category: "cover-art",
    categoryLabel: "Sports Romance Book Cover Art",
    price: "$150",
    priceNumber: 150,
    tag: "Full Wraparound · Paperback Cover",
    title: "Break The Rules",
    subgenre: "Sports Romance & Fake Dating",
    img: coverBreakTheRules,
    aspect: "aspect-[4/3]",
    alt: "Full paperback book cover of Break The Rules by Isabelle Rose Hastings featuring hockey goalie and coach's daughter",
    caption:
      "Full paperback cover design featuring hockey player and heroine with custom jersey crest, ice arena backdrop, barcode placement, and back-cover copy designed to drive impulse buys.",
    highlights: [
      "Complete front, back, and spine print spread with exact bleed & trim margins",
      "Trope-coded athletic vector character art with high emotional chemistry",
      "High-contrast title typography optimized for digital thumbnails and physical shelves",
    ],
  },
  {
    id: "love-and-lederhosen-cover",
    category: "cover-art",
    categoryLabel: "Romance Book Cover Art",
    price: "$150",
    priceNumber: 150,
    tag: "Full Wraparound · Illustrated Cover",
    title: "Love and Lederhosen",
    subgenre: "Small-Town Romance & Oktoberfest",
    img: coverLoveAndLederhosen,
    aspect: "aspect-[4/3]",
    alt: "Full paperback book cover of Love and Lederhosen by Katie Ashley featuring Bavarian autumn setting, couple, and golden retriever",
    caption:
      "Vibrant autumn Bavarian village illustrated cover complete with charming alpine architecture, golden retriever companion, and dual-POV back cover blurb layout.",
    highlights: [
      "Rich seasonal palette with autumn foliage and atmospheric town square details",
      "Full wraparound layout engineered for 5x8 paperback with calculated spine width",
      "Eye-catching title script designed to stand out on Amazon romance bestsellers",
    ],
  },
  {
    id: "gamer-bedroom-concept",
    category: "concept-art",
    categoryLabel: "Scene Concept Art",
    price: "$100",
    priceNumber: 100,
    tag: "Semi-Realistic Scene · Concept Art",
    title: "Late Night Co-Op Session",
    subgenre: "Contemporary Romance / College Sports",
    img: conceptGamerBedroom,
    aspect: "aspect-[4/3]",
    alt: "Semi-realistic scene concept art of an injured athlete and blonde gamer girl leaning together intimately in a bedroom with fairy lights and handheld consoles",
    caption:
      "Tender, character-driven scene concept art capturing forced-proximity emotional intimacy. Depicts a college athlete recovering from a knee injury and his partner gaming together beneath warm fairy lights, perfect for teaser chapter reveals and reader immersion.",
    highlights: [
      "Rich ambient interior lighting (fairy lights, warm bedside glow, street view)",
      "Detailed character cues (knee brace, gamer tees, handheld console screens)",
      "High-converting visual asset for BookTok chapter teasers and reader newsletters",
    ],
  },
  {
    id: "sunset-rodeo-concept",
    category: "concept-art",
    categoryLabel: "Scene Concept Art",
    price: "$100",
    priceNumber: 100,
    tag: "Atmospheric Scene · Concept Art",
    title: "Sunset Over the Rodeo Valley",
    subgenre: "Western Romance & Mountain Vistas",
    img: conceptSunsetRodeo,
    aspect: "aspect-[16/9]",
    alt: "Semi-realistic scene concept art of a cowboy and redhead woman embracing on a mountain hill overlooking a lit rodeo arena at vibrant sunset",
    caption:
      "Breathtaking panoramic sunset scene concept art. Illustrates a cowboy and red-haired heroine in an intimate embrace on a wildflower hillside overlooking an illuminated rodeo arena beneath vibrant magenta and orange skies.",
    highlights: [
      "Vibrant cinematic sunset lighting and layered mountain depth",
      "Stunning panoramic aspect ratio ideal for website banners, book trailers, and endpapers",
      "Authentic western environmental details (lighted dirt arena, pine forest, wildflowers)",
    ],
  },
  {
    id: "vampire-suit-character",
    category: "character-art",
    categoryLabel: "Character Art Illustrations",
    price: "$80",
    priceNumber: 80,
    tag: "Vampire Lord · Character Art",
    title: "Dorian, The Velvet Fang",
    subgenre: "Paranormal Romance & Vampire Bad Boy",
    img: vampireSuit,
    aspect: "aspect-[9/16]",
    alt: "Seductive modern fantasy vampire character illustration in tailored black suit with unbuttoned crimson silk shirt and gold pendant",
    caption:
      "Unapologetically seductive morally grey vampire character art. Styled with unbuttoned crimson silk, sharp suit, visible fangs, and piercing amber gaze tailored for BookTok romance teasers and reader obsession.",
    highlights: [
      "Native vertical 9:16 format engineered for BookTok & Reels virality",
      "Sharp character styling with custom vampire fangs and tailored wardrobe",
      "Print-ready 300 DPI master resolution for promotional bookmarks and art prints",
    ],
  },
  {
    id: "girl-direwolf-character",
    category: "character-art",
    categoryLabel: "Character Art Illustrations",
    price: "$80",
    priceNumber: 80,
    tag: "Bonded Familiar · Character Art",
    title: "Aria & The Shadow Direwolf",
    subgenre: "Shifter Romance & Dark Forest Fantasy",
    img: girlDirewolf,
    aspect: "aspect-[3/4]",
    alt: "Semi-realistic fantasy romance character art of a blonde woman gently resting her hand on a massive black direwolf in an enchanted pine forest",
    caption:
      "The quintessential fantasy bonded-familiar companion piece. Illustrates emotional trust and wild strength along an ancient misty forest path, capturing the spirit of paranormal shifter fiction.",
    highlights: [
      "Atmospheric forest background with ambient moss and bioluminescent details",
      "Dynamic size contrast between heroine and massive direwolf",
      "Ideal for chapter header graphics, teasers, and dust jacket endpapers",
    ],
  },
  {
    id: "red-dress-couple-character",
    category: "character-art",
    categoryLabel: "Character Art Illustrations",
    price: "$80",
    priceNumber: 80,
    tag: "Billionaire Romance · Character Art",
    title: "Stolen Glances at the Gala",
    subgenre: "Billionaire & High-Society Romance",
    img: redDressCouple,
    aspect: "aspect-[3/4]",
    alt: "Romantic couple illustration of an elegant woman in a scarlet backless evening gown looking up at a handsome man in a tailored black suit",
    caption:
      "High-stakes chemistry in luxury evening attire. Backless scarlet satin and sharp tuxedo lines evoke high-society intrigue, forced proximity, and simmering romantic tension.",
    highlights: [
      "Intricate fabric folds and realistic silk sheen on evening gown",
      "Subtle facial micro-expressions conveying electric romantic tension",
      "Clean background composition adaptable for social teasers and special edition foil prints",
    ],
  },
  {
    id: "split-eyes-duo-character",
    category: "character-art",
    categoryLabel: "Character Art Illustrations",
    price: "$80",
    priceNumber: 80,
    tag: "Dual POV · Character Art",
    title: "Frost & Ember: Dual Perspectives",
    subgenre: "Enemies-to-Lovers & Dual-POV Epic Fantasy",
    img: splitEyesDuo,
    aspect: "aspect-[3/4]",
    alt: "Dramatic split close-up portrait of silver-haired icy-blue eyed male warrior and dark-haired amber-gold eyed heroine divided by glowing light",
    caption:
      "Dynamic split-face dual protagonist portrait designed for dual-POV fantasy novels. Contrasts cold winter steel against warm golden fire to visualize rival lovers bound by fate.",
    highlights: [
      "Dramatic split composition showcasing both main protagonists in a single frame",
      "Opposing color palettes (cyan frost vs. golden amber) reflecting rival factions",
      "Perfect hero asset for pre-order teaser countdowns and character cards",
    ],
  },
  {
    id: "royal-purple-duo-character",
    category: "character-art",
    categoryLabel: "Character Art Illustrations",
    price: "$80",
    priceNumber: 80,
    tag: "Court Intrigue · Character Art",
    title: "Whispers in the Imperial Ballroom",
    subgenre: "Royal Court Intrigue & Romantasy",
    img: royalPurpleDuo,
    aspect: "aspect-[3/4]",
    alt: "Two-tier fantasy court romance illustration with dark blue haired noble lord in embroidered doublet and freckled noble lady in lavender gown",
    caption:
      "Dual-tier royal court illustration capturing social distance and unspoken longing across a grand ballroom lit with glowing crystal chandeliers and purple bokeh.",
    highlights: [
      "High-detail royal regalia with silver-embroidered doublet and delicate floral lace",
      "Atmospheric grand ballroom lighting with bokeh depth",
      "Print-ready for special edition tip-in art inserts and character prints",
    ],
  },
  {
    id: "hero-vampire-trio-character",
    category: "character-art",
    categoryLabel: "Character Art Illustrations",
    price: "$80",
    priceNumber: 80,
    tag: "Dark Romantasy Trio · Character Art",
    title: "Blood, Moon & Chains: The Trio",
    subgenre: "Why Choose / Dark Romantasy",
    img: heroVampireTrio,
    aspect: "aspect-[2/3]",
    alt: "Heroine with heterochromia flanked by a vampire and dark fae lord beneath a full moon holding her collar chain",
    caption:
      "Iconic dark romantasy study featuring a heterochromia heroine flanked by a blond vampire and dark-haired rival beneath a full moon, embodying high-stakes dark romance tropes.",
    highlights: [
      "Iconic trio composition built for BookTok romance virality",
      "Atmospheric full-moon wilderness lighting with mist and dark pines",
      "Print-ready 300 DPI master resolution for merchandise and special edition swag",
    ],
  },
  {
    id: "playful-holiday-couple-character",
    category: "character-art",
    categoryLabel: "Character Art Illustrations",
    price: "$80",
    priceNumber: 80,
    tag: "Romantic Comedy · Character Art",
    title: "Handcuffs & Holiday Sweaters",
    subgenre: "Contemporary Romance & Romantic Comedy",
    img: playfulHolidayCouple,
    aspect: "aspect-[3/4]",
    alt: "Playful romantic comedy character illustration of a blonde woman in ghost holiday sweater beside a muscular handsome man playfully handcuffed",
    caption:
      "Playful, trope-driven contemporary rom-com character art. Balances cozy humor and flirty romantic tension with custom holiday sweater details and handcuffed forced proximity.",
    highlights: [
      "Expressive comic timing and character body language",
      "Detailed sweater illustration and crisp character rendering",
      "Clean cutout styling ideal for newsletter headers and social graphics",
    ],
  },
  {
    id: "sweet-stroll-couple-character",
    category: "character-art",
    categoryLabel: "Character Art Illustrations",
    price: "$80",
    priceNumber: 80,
    tag: "Contemporary Couple · Character Art",
    title: "Golden Hour Stroll",
    subgenre: "Small Town Romance & Friends-to-Lovers",
    img: sweetStrollCouple,
    aspect: "aspect-[3/4]",
    alt: "Sweet modern romance couple illustration of a smiling blonde woman and dark-haired handsome boyfriend walking arm-in-arm together",
    caption:
      "Warm, heartwarming friends-to-lovers character art. Captures casual domestic intimacy, genuine smiles, and golden hour tenderness for cozy contemporary romance authors.",
    highlights: [
      "Authentic emotional warmth and natural relaxed chemistry",
      "Crisp casual denim and layers styling",
      "High versatility for social media countdowns, bonus epilogue teasers, and swag",
    ],
  },
];

function FantasyArtPage() {
  const [activeCategory, setActiveCategory] = useState<ArtSubcategory>("all");
  const [selectedPiece, setSelectedPiece] = useState<GalleryPiece | null>(null);

  const filteredPieces =
    activeCategory === "all"
      ? galleryPieces
      : galleryPieces.filter((p) => p.category === activeCategory);

  const coverPieces = galleryPieces.filter((p) => p.category === "cover-art");
  const conceptPieces = galleryPieces.filter((p) => p.category === "concept-art");
  const characterPieces = galleryPieces.filter((p) => p.category === "character-art");

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero animate-sheen" />
        <div className="absolute -top-24 -left-10 w-[42rem] h-[42rem] bg-primary/15 blur-[120px] rounded-full" />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
          <p className="eyebrow text-primary animate-rise">01 · Fantasy Art Portfolio & Pricing</p>
          <h1 className="font-display uppercase leading-[0.9] tracking-tight text-5xl md:text-8xl mt-5 max-w-[16ch] animate-rise [animation-delay:80ms]">
            Fantasy Art <span className="text-primary">Portfolio</span> & Pricing
          </h1>
          <p className="max-w-[58ch] text-muted-foreground text-lg mt-6 text-pretty animate-rise [animation-delay:160ms]">
            From scroll-stopping <strong>Fantasy Book Cover Art ($150)</strong> to immersive{" "}
            <strong>Scene Concept Art ($100)</strong> and viral{" "}
            <strong>Character Art Illustrations ($80)</strong> — explore our dedicated fantasy
            portfolio and transparent commission rates.
          </p>

          {/* Quick Jump Buttons */}
          <div className="mt-8 flex flex-wrap gap-3 animate-rise [animation-delay:240ms]">
            <a
              href="#character-art"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-sm text-sm"
            >
              <User className="w-4 h-4" />
              <span>Fantasy Character Illustration ($80)</span>
            </a>
            <a
              href="#cover-art"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-foreground hover:bg-foreground/5 transition-colors text-sm font-medium"
            >
              <BookOpen className="w-4 h-4" />
              <span>Fantasy Cover Art ($150)</span>
            </a>
            <a
              href="#concept-art"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-foreground hover:bg-foreground/5 transition-colors text-sm font-medium"
            >
              <Compass className="w-4 h-4" />
              <span>Fantasy Concept Art ($100)</span>
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-foreground hover:bg-foreground/5 transition-colors text-sm font-medium"
            >
              <span>View Commission Pricing</span>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="max-w-6xl mx-auto px-6 py-20 space-y-16 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
          <div>
            <p className="eyebrow text-primary">Portfolio Showcase</p>
            <h2 className="font-display uppercase text-4xl md:text-5xl tracking-tight mt-1">
              Fantasy Art Portfolio
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-xl text-pretty">
              Explore our dedicated sections for Character Illustrations, Book Covers, and Scene
              Concept Art. Click any piece to examine full-resolution master artwork.
            </p>
          </div>

          {/* Subcategory Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold border transition-all flex items-center gap-1.5 ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "glass text-muted-foreground border-border hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>All ({galleryPieces.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("character-art")}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold border transition-all flex items-center gap-1.5 ${
                activeCategory === "character-art"
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "glass text-muted-foreground border-border hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Character Art ($80)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("cover-art")}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold border transition-all flex items-center gap-1.5 ${
                activeCategory === "cover-art"
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "glass text-muted-foreground border-border hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Cover Art ($150)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("concept-art")}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold border transition-all flex items-center gap-1.5 ${
                activeCategory === "concept-art"
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "glass text-muted-foreground border-border hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Concept Art ($100)</span>
            </button>
          </div>
        </div>

        {/* 1. DEDICATED SECTION: FANTASY CHARACTER ILLUSTRATION ($80) */}
        {(activeCategory === "all" || activeCategory === "character-art") && (
          <section id="character-art" className="space-y-8 scroll-mt-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/80 pb-5">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="eyebrow text-primary">01 · Character Art Portfolio</span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30 font-semibold">
                    $80 Flat Rate
                  </span>
                </div>
                <h3 className="font-display uppercase text-3xl sm:text-4xl tracking-tight text-foreground">
                  Fantasy Character Illustration
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed text-pretty">
                  Ultra-high-definition character portraits and couple illustrations crafted for
                  BookTok, Instagram Reels, Pinterest virality, and pre-order swag art prints.
                  Readers fall for characters before plots.
                </p>
              </div>

              <a
                href={`mailto:inkwinkk.studio@gmail.com?subject=${encodeURIComponent(
                  "Character Art Commission Inquiry ($80)",
                )}`}
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-xs hover:bg-primary/90 transition-all shadow-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Commission Character Art ($80)</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
              {characterPieces.map((piece) => (
                <article
                  key={piece.id}
                  className="glass rounded-2xl border border-primary/30 overflow-hidden flex flex-col justify-between group hover:border-primary hover:shadow-2xl transition-all duration-300"
                >
                  {/* High Quality Image Preview with Zoom */}
                  <div
                    onClick={() => setSelectedPiece(piece)}
                    className="relative overflow-hidden cursor-pointer bg-black/60"
                  >
                    <img
                      src={piece.img}
                      alt={piece.alt}
                      referrerPolicy="no-referrer"
                      loading="eager"
                      decoding="async"
                      style={{ imageRendering: "-webkit-optimize-contrast" }}
                      className={`w-full ${piece.aspect} object-cover transition-transform duration-500 group-hover:scale-105 contrast-[1.04] saturate-[1.04] brightness-[1.01]`}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30 opacity-80 group-hover:opacity-95 transition-opacity" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-foreground border border-white/20">
                        {piece.tag}
                      </span>
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        <span>{piece.price}</span>
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-primary font-semibold border border-primary/30">
                        ✨ 300 DPI Ultra Sharp Master
                      </span>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-white/20">
                        <ZoomIn className="w-3.5 h-3.5 text-primary" />
                        <span>Inspect Full 4K</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="font-semibold text-primary">{piece.categoryLabel}</span>
                        <span className="font-mono">{piece.subgenre}</span>
                      </div>

                      <h4 className="font-display uppercase text-2xl tracking-tight text-foreground group-hover:text-primary transition-colors">
                        {piece.title}
                      </h4>

                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                        {piece.caption}
                      </p>
                    </div>

                    {/* Action Row */}
                    <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedPiece(piece)}
                        className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                      >
                        <span>View Rationale</span>
                        <ArrowRight className="w-3.5 h-3.5 text-primary" />
                      </button>

                      <a
                        href={`mailto:inkwinkk.studio@gmail.com?subject=${encodeURIComponent(
                          `Commission in style of "${piece.title}" (${piece.price})`,
                        )}`}
                        className="px-3.5 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-primary text-xs font-semibold hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1"
                      >
                        <span>Commission ({piece.price})</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* 2. DEDICATED SECTION: FANTASY COVER ART ($150) */}
        {(activeCategory === "all" || activeCategory === "cover-art") && (
          <section id="cover-art" className="space-y-8 scroll-mt-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/80 pb-5">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="eyebrow text-primary">02 · Book Cover Portfolio</span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30 font-semibold">
                    $150 Flat Rate
                  </span>
                </div>
                <h3 className="font-display uppercase text-3xl sm:text-4xl tracking-tight text-foreground">
                  Fantasy Cover Art
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed text-pretty">
                  Scroll-stopping full wraparound paperback and eBook covers engineered for Amazon
                  KDP bestsellers, calibrated for thumbnail click-through.
                </p>
              </div>

              <a
                href={`mailto:inkwinkk.studio@gmail.com?subject=${encodeURIComponent(
                  "Fantasy Book Cover Art Commission Inquiry ($150)",
                )}`}
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-xs hover:bg-primary/90 transition-all shadow-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Book Cover Commission ($150)</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {coverPieces.map((piece) => (
                <article
                  key={piece.id}
                  className="glass rounded-2xl border border-border overflow-hidden flex flex-col justify-between group hover:border-primary/50 hover:shadow-2xl transition-all duration-300"
                >
                  <div
                    onClick={() => setSelectedPiece(piece)}
                    className="relative overflow-hidden cursor-pointer bg-black/40"
                  >
                    <img
                      src={piece.img}
                      alt={piece.alt}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className={`w-full ${piece.aspect} object-cover transition-transform duration-500 group-hover:scale-105`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-80 group-hover:opacity-95 transition-opacity" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-foreground border border-white/10">
                        {piece.tag}
                      </span>
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        <span>{piece.price}</span>
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-white/20">
                      <ZoomIn className="w-3.5 h-3.5 text-primary" />
                      <span>Inspect Details</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="font-semibold text-primary">{piece.categoryLabel}</span>
                        <span className="font-mono">{piece.subgenre}</span>
                      </div>

                      <h4 className="font-display uppercase text-2xl tracking-tight text-foreground group-hover:text-primary transition-colors">
                        {piece.title}
                      </h4>

                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                        {piece.caption}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedPiece(piece)}
                        className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                      >
                        <span>View Rationale</span>
                        <ArrowRight className="w-3.5 h-3.5 text-primary" />
                      </button>

                      <a
                        href={`mailto:inkwinkk.studio@gmail.com?subject=${encodeURIComponent(
                          `Commission in style of "${piece.title}" (${piece.price})`,
                        )}`}
                        className="px-3.5 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-primary text-xs font-semibold hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1"
                      >
                        <span>Commission ({piece.price})</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* 3. DEDICATED SECTION: FANTASY CONCEPT ART ($100) */}
        {(activeCategory === "all" || activeCategory === "concept-art") && (
          <section id="concept-art" className="space-y-8 scroll-mt-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/80 pb-5">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="eyebrow text-primary">03 · Worldbuilding & Lore</span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30 font-semibold">
                    $100 Flat Rate
                  </span>
                </div>
                <h3 className="font-display uppercase text-3xl sm:text-4xl tracking-tight text-foreground">
                  Fantasy Concept Art
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed text-pretty">
                  Atmospheric scene concept art capturing pivotal narrative moments, worldbuilding
                  locales, and emotional character chemistry.
                </p>
              </div>

              <a
                href={`mailto:inkwinkk.studio@gmail.com?subject=${encodeURIComponent(
                  "Scene Concept Art Commission Inquiry ($100)",
                )}`}
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-xs hover:bg-primary/90 transition-all shadow-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Concept Art Commission ($100)</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {conceptPieces.map((piece) => (
                <article
                  key={piece.id}
                  className="glass rounded-2xl border border-border overflow-hidden flex flex-col justify-between group hover:border-primary/50 hover:shadow-2xl transition-all duration-300"
                >
                  <div
                    onClick={() => setSelectedPiece(piece)}
                    className="relative overflow-hidden cursor-pointer bg-black/40"
                  >
                    <img
                      src={piece.img}
                      alt={piece.alt}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className={`w-full ${piece.aspect} object-cover transition-transform duration-500 group-hover:scale-105`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-80 group-hover:opacity-95 transition-opacity" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-foreground border border-white/10">
                        {piece.tag}
                      </span>
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        <span>{piece.price}</span>
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-white/20">
                      <ZoomIn className="w-3.5 h-3.5 text-primary" />
                      <span>Inspect Details</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="font-semibold text-primary">{piece.categoryLabel}</span>
                        <span className="font-mono">{piece.subgenre}</span>
                      </div>

                      <h4 className="font-display uppercase text-2xl tracking-tight text-foreground group-hover:text-primary transition-colors">
                        {piece.title}
                      </h4>

                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                        {piece.caption}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedPiece(piece)}
                        className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                      >
                        <span>View Rationale</span>
                        <ArrowRight className="w-3.5 h-3.5 text-primary" />
                      </button>

                      <a
                        href={`mailto:inkwinkk.studio@gmail.com?subject=${encodeURIComponent(
                          `Commission in style of "${piece.title}" (${piece.price})`,
                        )}`}
                        className="px-3.5 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-primary text-xs font-semibold hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1"
                      >
                        <span>Commission ({piece.price})</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </section>

      {/* Pricing Tiers Section - Placed after Gallery to showcase artwork value first */}
      <section id="pricing" className="border-y border-border bg-card/30 py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="eyebrow text-primary">Transparent Commission Pricing</p>
            <h2 className="font-display uppercase text-4xl md:text-5xl tracking-tight">
              Honest, Flat-Rate Art Rates
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
              Clear, transparent pricing for indie authors. Flat rates with full commercial rights
              for Amazon KDP, eBooks, and print.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pricingTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.name}
                  className={`glass p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 relative group hover:border-primary/50 hover:shadow-2xl ${
                    tier.category === "cover-art"
                      ? "border-primary/40 bg-card/60 shadow-xl"
                      : "border-border"
                  }`}
                >
                  <div className="space-y-6">
                    {/* Header with Badge & Icon */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
                        {tier.badge}
                      </span>
                    </div>

                    {/* Name & Big Price */}
                    <div>
                      <h3 className="font-display uppercase text-2xl tracking-tight">
                        {tier.name}
                      </h3>
                      <div className="mt-3 flex items-baseline gap-1.5">
                        <span className="font-display text-5xl text-foreground tracking-tight">
                          {tier.price}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono">
                          / commission
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Commission Button */}
                  <div className="pt-8 mt-6 border-t border-border/60">
                    <a
                      href={`mailto:inkwinkk.studio@gmail.com?subject=${encodeURIComponent(tier.inquirySubject)}`}
                      className={`w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg text-sm font-semibold transition-all shadow-sm ${
                        tier.category === "cover-art"
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "border border-border text-foreground hover:bg-foreground/5"
                      }`}
                    >
                      <Mail className="w-4 h-4" />
                      <span>
                        Book {tier.name} ({tier.price})
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>
                All commissions include 2 rounds of revisions & 100% commercial ownership rights.
              </span>
            </p>
          </div>

          {/* All-in-One Package Callout Banner */}
          <div className="mt-8 p-6 md:p-8 rounded-2xl glass border border-primary/30 bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-primary font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                Bundle & Save with All-In-One Author Suites
              </span>
              <h3 className="text-xl font-semibold text-foreground">
                Need multiple characters, scene art & full covers bundled together?
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground max-w-2xl leading-relaxed">
                Explore our curated Basic ($200), Standard ($300), and Premium ($500) packages
                including front/back covers, up to 6 characters, concept art scenes, and launch
                copy.
              </p>
            </div>
            <Link
              to="/pricing"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-md"
            >
              <span>Explore Package Pricing ($200–$500)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox / Modal for Artwork Detail Inspection */}
      {selectedPiece && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-rise"
          onClick={() => setSelectedPiece(null)}
        >
          <div
            className="glass max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-border/80 shadow-2xl p-6 md:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedPiece(null)}
              className="absolute top-4 right-4 p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-colors z-10"
              aria-label="Close artwork detail dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Image Preview */}
              <div className="md:col-span-6 flex justify-center bg-black/60 rounded-xl p-2 border border-border/60">
                <img
                  src={selectedPiece.img}
                  alt={selectedPiece.alt}
                  referrerPolicy="no-referrer"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                  className="w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Detailed Breakdown */}
              <div className="md:col-span-6 space-y-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="eyebrow text-primary">{selectedPiece.tag}</span>
                  <span className="font-display text-2xl text-foreground font-bold px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                    {selectedPiece.price}
                  </span>
                </div>

                <div>
                  <h3 className="font-display uppercase text-3xl tracking-tight">
                    {selectedPiece.title}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground mt-1">
                    Subgenre: {selectedPiece.subgenre}
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-4 py-1">
                  <p className="eyebrow text-muted-foreground mb-1 text-[11px]">
                    Genre Hook & Strategy
                  </p>
                  <p className="text-sm text-foreground/90 leading-relaxed text-pretty">
                    {selectedPiece.caption}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <p className="eyebrow text-xs text-muted-foreground">Deliverable Specs:</p>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {selectedPiece.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action Button */}
                <div className="pt-4 border-t border-border flex flex-wrap gap-3">
                  <a
                    href={`mailto:inkwinkk.studio@gmail.com?subject=${encodeURIComponent(
                      `Commission Booking: ${selectedPiece.title} (${selectedPiece.price})`,
                    )}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors shadow-md"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Order Artwork in This Style ({selectedPiece.price})</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedPiece(null)}
                    className="px-4 py-3 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cross-Link Showcase */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="glass p-8 md:p-12 rounded-2xl border border-border grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="eyebrow text-primary">Wordsmith Studio Pairing</p>
            <h2 className="font-display uppercase text-3xl md:text-4xl tracking-tight">
              Pair Your Cover With Spellbinding Emails
            </h2>
            <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
              A cover earns the first look on Amazon. Words turn that click into a lifelong
              superfan. Explore our ARC recruitment calls, cover reveals, and launch day promotional
              sequences.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <Link
              to="/wordsmith-studio"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-md text-sm text-center"
            >
              <span>Explore Wordsmith Studio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/testimonials"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-border text-sm text-foreground hover:bg-foreground/5 transition-colors text-center"
            >
              <span>Read Author Testimonials</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-24 border-t border-border">
        <div className="absolute inset-0 bg-cta" />
        <div className="relative max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="font-display uppercase text-5xl md:text-7xl tracking-tight text-balance">
            Let's Paint Your Kingdom
          </h2>
          <p className="text-muted-foreground text-pretty max-w-[50ch] mx-auto text-base md:text-lg">
            Ready to bring your fantasy book cover ($150), scene concept art ($100), or character
            portraits ($80) to life? Send us your subgenre, tropes, and launch date.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:inkwinkk.studio@gmail.com?subject=Fantasy%20Art%20Commission%20Inquiry"
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
    </main>
  );
}
