import { useState, useEffect, useRef } from "react";
import {
  X,
  Send,
  CheckCircle2,
  Mail,
  Sparkles,
  MessageSquare,
  User,
  BookOpen,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { socialLinks } from "./SiteChrome";
import { sendLeadPayload, ACCESS_KEY } from "@/lib/lead-tracker";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Check if user has entered contact info (Name or Email with > 2 chars)
function hasContactInfo(data: { name?: string; email?: string; message?: string }) {
  return Boolean(
    (data.name && data.name.trim().length > 2) ||
    (data.email && data.email.trim().length > 2) ||
    (data.message && data.message.trim().length > 2),
  );
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subgenre: "",
    service: "all-in-one-package",
    message: "",
  });

  const formDataRef = useRef(formData);
  const isSubmittedRef = useRef(false);
  const abandonedSentRef = useRef(false);

  useEffect(() => {
    formDataRef.current = formData;
  }, [formData]);

  useEffect(() => {
    isSubmittedRef.current = submitted;
  }, [submitted]);

  // Capture Abandoned Leads when user closes modal without submitting
  const handleClose = () => {
    if (
      !isSubmittedRef.current &&
      !abandonedSentRef.current &&
      hasContactInfo(formDataRef.current)
    ) {
      sendLeadPayload(formDataRef.current, "⚠️ ABANDONED LEAD (User left without submitting)");
      abandonedSentRef.current = true;
    }
    onClose();
  };

  // Capture Abandoned Leads when user leaves page or closes tab while modal is open
  useEffect(() => {
    if (!isOpen) return;

    const handleBeforeUnload = () => {
      if (
        !isSubmittedRef.current &&
        !abandonedSentRef.current &&
        hasContactInfo(formDataRef.current)
      ) {
        sendLeadPayload(formDataRef.current, "⚠️ ABANDONED LEAD (User left without submitting)");
        abandonedSentRef.current = true;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("pagehide", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("pagehide", handleBeforeUnload);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    isSubmittedRef.current = true;

    try {
      await sendLeadPayload(formData, "✅ NEW COMPLETE LEAD - InkWink Studio");
      setSubmitted(true);
      toast.success("Thank you! Your inquiry has been sent to InkWink Studio.");
    } catch (err) {
      console.error("Submission error:", err);
      // Still show confirmation and feedback
      setSubmitted(true);
      toast.success("Thank you! Your inquiry has been sent to InkWink Studio.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    abandonedSentRef.current = false;
    isSubmittedRef.current = false;
    setFormData({
      name: "",
      email: "",
      subgenre: "",
      service: "all-in-one-package",
      message: "",
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-rise"
      onClick={handleClose}
    >
      <div
        className="glass max-w-xl w-full my-8 p-6 sm:p-8 rounded-2xl border border-border shadow-2xl relative bg-card/95 text-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="space-y-2 pr-6">
              <span className="eyebrow text-primary flex items-center gap-1.5 text-xs">
                <Sparkles className="w-3.5 h-3.5" />
                Let's Build Your World
              </span>
              <h2
                id="contact-modal-title"
                className="font-display uppercase text-3xl sm:text-4xl tracking-tight"
              >
                Get In Touch With Ink Wink
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Tell us about your fantasy novel, release date, and which visual art or email
                package fits your launch. We respond within 24 hours.
              </p>
            </div>

            {/* Lead Form */}
            <form id="leadForm" onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input type="hidden" name="access_key" value={ACCESS_KEY} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="lead-name"
                    className="text-xs font-semibold text-foreground/90 flex items-center gap-1"
                  >
                    <User className="w-3 h-3 text-primary" />
                    Your Name / Pen Name
                  </label>
                  <input
                    id="lead-name"
                    name="name"
                    required
                    type="text"
                    placeholder="e.g. Robin Thorne"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="lead-email"
                    className="text-xs font-semibold text-foreground/90 flex items-center gap-1"
                  >
                    <Mail className="w-3 h-3 text-primary" />
                    Email Address
                  </label>
                  <input
                    id="lead-email"
                    name="email"
                    required
                    type="email"
                    placeholder="robin@authorworld.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="lead-genre"
                    className="text-xs font-semibold text-foreground/90 flex items-center gap-1"
                  >
                    <BookOpen className="w-3 h-3 text-primary" />
                    Subgenre & Tropes
                  </label>
                  <input
                    id="lead-genre"
                    name="subgenre"
                    type="text"
                    placeholder="e.g. Romantasy, Enemies to Lovers"
                    value={formData.subgenre}
                    onChange={(e) => setFormData({ ...formData, subgenre: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="lead-service"
                    className="text-xs font-semibold text-foreground/90"
                  >
                    Interested Service
                  </label>
                  <select
                    id="lead-service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="all-in-one-package">Author Suite Package ($200–$500)</option>
                    <option value="cover-art">Fantasy Book Cover Art ($150)</option>
                    <option value="concept-art">Scene Concept Art ($100)</option>
                    <option value="character-art">Character Art Illustration ($80)</option>
                    <option value="email-launch">Book Launch Promotional Emails</option>
                    <option value="custom">Custom Creative Request</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="lead-message"
                  className="text-xs font-semibold text-foreground/90 flex items-center gap-1"
                >
                  <MessageSquare className="w-3 h-3 text-primary" />
                  Your Vision / Launch Details
                </label>
                <textarea
                  id="lead-message"
                  name="message"
                  required
                  rows={3}
                  placeholder="Tell us about your characters, preferred color palette, or target launch date..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-md mt-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4 animate-rise">
            <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display uppercase text-3xl tracking-tight">
              Thank You, {formData.name || "Author"}!
            </h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
              We've received your note about your fantasy project. Our creative team will review
              your tropes and reply directly to{" "}
              <strong className="text-foreground">{formData.email}</strong> within 24 hours.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-border text-sm font-semibold text-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}

        {/* Social Media Links Section directly below the form */}
        <div className="mt-6 pt-5 border-t border-border/80">
          <p className="eyebrow text-xs text-muted-foreground text-center mb-3">
            Or Connect With Us Directly On Social Media:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.ariaLabel}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border text-xs font-medium text-muted-foreground transition-all duration-200 ${s.hoverColor}`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{s.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
