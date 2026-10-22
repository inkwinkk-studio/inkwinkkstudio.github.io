import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Star,
  Quote,
  ShieldCheck,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Sparkles,
} from "lucide-react";

export interface TestimonialItem {
  id: string;
  author: string;
  genre: string;
  bookTitle: string;
  service: string;
  category: "cover-art" | "character-art" | "book-launch";
  rating: number;
  quote: string;
  detailedReview: string;
  resultBadge: string;
  avatarBg: string;
  initials: string;
}

export const defaultTestimonials: TestimonialItem[] = [
  {
    id: "cover-art-robert",
    author: "Robert Vance",
    genre: "High Fantasy / Epic Adventure",
    bookTitle: "The Ashen Blade: Chronicles of Eldoria",
    service: "Fantasy Cover Art ($150)",
    category: "cover-art",
    rating: 5,
    quote:
      "I got a cover art made for my fantasy novel from them, and it turned out to be a great book cover.",
    detailedReview:
      "The dynamic lighting and the heroine's silhouette made it instantly pop on Amazon KDP search results. Within 48 hours of uploading the new cover, my organic click-through rate more than doubled and kindle page reads surged. Working with their team felt like working with a traditional fantasy art director.",
    resultBadge: "2.4x KDP Click-Through Rate",
    avatarBg: "from-amber-500/20 to-orange-600/30 text-amber-300",
    initials: "RV",
  },
  {
    id: "character-art-althea",
    author: "Althea Thorne",
    genre: "Dark Romantasy & Court Intrigue",
    bookTitle: "A Crown of Thorn and Cinders",
    service: "Character Art ($80)",
    category: "character-art",
    rating: 5,
    quote:
      "I commissioned character art for my morally grey fae hero, and it turned out to be an incredible illustration.",
    detailedReview:
      "They captured his dark feathered wings and smug, lethal smirk with uncanny precision. When I posted the first character teaser reel on BookTok, it went viral with over 180,000 views. Readers flooded my Amazon page to pre-order before chapter one had even been released publicly!",
    resultBadge: "180K+ BookTok Views & +340 Pre-orders",
    avatarBg: "from-rose-500/20 to-pink-600/30 text-rose-300",
    initials: "AT",
  },
  {
    id: "launch-emails-marcus",
    author: "Marcus Sterling",
    genre: "Epic Fantasy & Grimdark",
    bookTitle: "The Shadow Regent (Book 1)",
    service: "Book Launch / Promotional Email",
    category: "book-launch",
    rating: 5,
    quote:
      "The promotional emails written for my new book launch achieved great results beyond what I imagined.",
    detailedReview:
      "We deployed their 4-part ARC recruitment and launch week email sequence. The ARC team email filled all 60 reader spots in under 24 hours with enthusiastic reviewers. On release morning, the launch email drove over 400 Kindle purchases in the first day. We broke into the Top 50 in Epic Fantasy on Amazon!",
    resultBadge: "Top 50 Amazon Epic Fantasy & 400+ Day-1 Sales",
    avatarBg: "from-emerald-500/20 to-teal-600/30 text-emerald-300",
    initials: "MS",
  },
  {
    id: "launch-promo-jennifer",
    author: "Jennifer Morales",
    genre: "Fantasy Romance & Enemies-to-Lovers",
    bookTitle: "Court of Whisper and Flame",
    service: "Promotional Launch Sequence",
    category: "book-launch",
    rating: 5,
    quote:
      "Their promotional emails for my new book launch produced extraordinary results and record open rates.",
    detailedReview:
      "The promotional sequence Ink Wink crafted hit a 52% open rate across my subscriber list. The forced-proximity teaser and the 72-hour countdown emails turned quiet subscribers into passionate day-one buyers, generating over $4,200 in launch week royalties.",
    resultBadge: "52% Open Rate & $4,200+ Launch Royalties",
    avatarBg: "from-sky-500/20 to-cyan-600/30 text-sky-300",
    initials: "JM",
  },
  {
    id: "full-studio-calder",
    author: "David H. Calder",
    genre: "Progression Fantasy & Cultivation",
    bookTitle: "Song of the Iron Weaver",
    service: "Full Studio Hybrid Package",
    category: "cover-art",
    rating: 5,
    quote:
      "Having both our fantasy cover art and our promotional launch emails handled by the same studio was a game changer.",
    detailedReview:
      "The cover made the book look like a heavyweight from Tor or Orbit, and the email sequence matched that exact tone. Readers received the same spellbinding promise from the cover thumbnail to our release letters. We hit #1 New Release in Progression Fantasy on Amazon KDP within 14 hours.",
    resultBadge: "#1 Amazon KDP New Release in Progression Fantasy",
    avatarBg: "from-purple-500/20 to-indigo-600/30 text-purple-300",
    initials: "DC",
  },
];

interface TestimonialCarouselProps {
  items?: TestimonialItem[];
  autoplayDelay?: number;
  className?: string;
  showAllLink?: boolean;
}

export function TestimonialCarousel({
  items = defaultTestimonials,
  autoplayDelay = 4500,
  className = "",
}: TestimonialCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [progress, setProgress] = React.useState(0);

  // Initialize Autoplay plugin
  const autoplayPlugin = React.useRef(
    Autoplay({
      delay: autoplayDelay,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  // Synchronize Embla API events
  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
      setProgress(0); // Reset progress on manual or auto transition
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Visual smooth progress bar timer for autoplay
  React.useEffect(() => {
    if (!isPlaying) return;

    const intervalStep = 50; // update every 50ms
    const stepIncrement = (intervalStep / autoplayDelay) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [isPlaying, autoplayDelay, current]);

  const toggleAutoplay = () => {
    const plugin = autoplayPlugin.current;
    if (!plugin) return;

    if (isPlaying) {
      plugin.stop();
      setIsPlaying(false);
    } else {
      plugin.play();
      setIsPlaying(true);
      setProgress(0);
    }
  };

  const handlePrev = () => {
    api?.scrollPrev();
  };

  const handleNext = () => {
    api?.scrollNext();
  };

  const handleSelectDot = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Top Carousel Navigation Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-2">
        {/* Status indicator & counter */}
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 border border-border text-xs font-mono">
            <span
              className={`w-2 h-2 rounded-full transition-colors ${
                isPlaying ? "bg-primary animate-pulse" : "bg-muted-foreground"
              }`}
              aria-hidden="true"
            />
            <span className="text-muted-foreground">
              {isPlaying ? "Auto-playing slider" : "Slider paused"}
            </span>
          </div>

          <span className="text-xs font-mono text-muted-foreground hidden sm:inline-block">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(count || items.length).padStart(2, "0")}
          </span>
        </div>

        {/* Carousel Controls: Pause/Play, Prev, Next */}
        <div className="flex items-center gap-2">
          {/* Pause / Play Button */}
          <button
            type="button"
            onClick={toggleAutoplay}
            aria-label={isPlaying ? "Pause auto-playing slider" : "Resume auto-playing slider"}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card/60 hover:bg-card hover:border-primary/40 text-xs font-mono text-muted-foreground hover:text-foreground transition-all cursor-pointer"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-primary" />
                <span className="hidden sm:inline">Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-primary fill-primary" />
                <span className="hidden sm:inline">Play</span>
              </>
            )}
          </button>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="p-2 rounded-lg border border-border bg-card/60 hover:bg-card hover:border-primary/40 text-foreground transition-all cursor-pointer disabled:opacity-40"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="p-2 rounded-lg border border-border bg-card/60 hover:bg-card hover:border-primary/40 text-foreground transition-all cursor-pointer disabled:opacity-40"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Embla Carousel */}
      <Carousel
        setApi={setApi}
        plugins={[autoplayPlugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        onMouseEnter={() => {
          if (isPlaying) {
            autoplayPlugin.current.stop();
          }
        }}
        onMouseLeave={() => {
          if (isPlaying) {
            autoplayPlugin.current.reset();
          }
        }}
      >
        <CarouselContent className="-ml-4 md:-ml-6">
          {items.map((item, idx) => (
            <CarouselItem
              key={item.id || idx}
              className="pl-4 md:pl-6 basis-full md:basis-1/2 select-none"
            >
              <article className="glass p-7 sm:p-8 rounded-2xl border border-border flex flex-col justify-between h-full space-y-6 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 relative group overflow-hidden bg-card/50">
                {/* Background decorative watermark */}
                <Quote
                  className="absolute -right-3 -top-3 w-28 h-28 text-foreground/5 pointer-events-none rotate-12 transition-transform group-hover:scale-110 duration-500"
                  aria-hidden="true"
                />

                <div className="space-y-4 relative z-10">
                  {/* Top Row: 5 Stars + Service Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-primary">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>

                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold">
                      {item.service}
                    </span>
                  </div>

                  {/* Highlighted Quote Header */}
                  <blockquote className="space-y-2">
                    <p className="font-display uppercase text-lg sm:text-xl text-foreground tracking-wide leading-snug group-hover:text-primary transition-colors">
                      “{item.quote}”
                    </p>
                  </blockquote>

                  {/* Full detailed author feedback narrative */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-4">
                    {item.detailedReview}
                  </p>
                </div>

                {/* Bottom Row: Verified Author Info & Result Badge */}
                <div className="space-y-4 pt-4 border-t border-border/70 relative z-10">
                  {/* Result metric pill */}
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-card/80 border border-border/80 text-xs">
                    <TrendingUp className="w-4 h-4 text-primary shrink-0" />
                    <span className="font-medium text-foreground tracking-tight">
                      {item.resultBadge}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.avatarBg} flex items-center justify-center font-bold text-xs border border-white/10 shrink-0`}
                      >
                        {item.initials}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="text-sm font-semibold text-foreground">{item.author}</p>
                          <ShieldCheck
                            className="w-3.5 h-3.5 text-primary shrink-0"
                            title="Verified Author"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground truncate max-w-[180px] sm:max-w-[240px]">
                          {item.bookTitle}
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono text-muted-foreground hidden sm:inline-block">
                      {item.genre.split("/")[0].trim()}
                    </span>
                  </div>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Bottom Progress Bar & Dot Indicators */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelectDot(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                current === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
            />
          ))}
        </div>

        {/* Dynamic Autoplay Timer Bar */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
            <Sparkles className="w-3 h-3 text-primary" />
            <span>Hover card to pause reading</span>
          </div>
          <div
            className="w-24 h-1.5 bg-card rounded-full overflow-hidden border border-border hidden sm:block"
            title="Auto-slide countdown"
          >
            <div
              className="h-full bg-primary transition-all duration-75 rounded-full"
              style={{
                width: isPlaying ? `${progress}%` : "0%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
