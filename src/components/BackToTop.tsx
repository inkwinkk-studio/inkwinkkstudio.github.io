import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button once user scrolls down 320px
      if (window.scrollY > 320) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check in case page starts scrolled
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className={`fixed bottom-20 right-[18px] sm:bottom-[86px] sm:right-6 z-40 p-3 rounded-full border shadow-xl transition-all duration-300 cursor-pointer flex items-center justify-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      } bg-card/90 hover:bg-primary text-card-foreground hover:text-primary-foreground border-border hover:border-primary/60 backdrop-blur-md shadow-black/40 hover:shadow-primary/20 hover:scale-105 active:scale-95`}
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
      <span className="sr-only">Back to top</span>
    </button>
  );
}
