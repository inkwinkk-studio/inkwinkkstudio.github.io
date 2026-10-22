import { useState, useRef, useEffect } from "react";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleWaPopup = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    (window as unknown as { toggleWaPopup?: () => void }).toggleWaPopup = toggleWaPopup;
  }, []);

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="wa-widget-container" ref={containerRef}>
      {/* Speech Bubble Pop-up Card */}
      <div
        className="wa-popup-box"
        id="waPopup"
        style={{ display: isOpen ? "block" : "none" }}
        role="dialog"
        aria-label="WhatsApp Chat Popup"
      >
        <div className="wa-popup-header">
          <strong>InkWink Studio</strong>
          <span
            onClick={toggleWaPopup}
            style={{ cursor: "pointer", fontWeight: "bold" }}
            role="button"
            tabIndex={0}
            aria-label="Close WhatsApp Chat Popup"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggleWaPopup();
            }}
          >
            ✕
          </span>
        </div>
        <div className="wa-popup-body">
          <p>
            👋 Hi there! Need Fantasy Cover Art or Email Sequences? Let&apos;s chat on WhatsApp!
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=15098815459&text=Hi%20InkWink%20Studio,%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="wa-start-chat-btn"
          >
            Start Chat
          </a>
        </div>
      </div>

      {/* Floating Toggle Button */}
      <button
        type="button"
        className="inkwink-whatsapp-btn"
        onClick={toggleWaPopup}
        aria-label="Open WhatsApp Chat"
        aria-expanded={isOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.099-.834-.308-1.588-.98-.588-.524-.987-1.17-1.103-1.368-.115-.198-.012-.304.087-.403.088-.088.197-.232.296-.348.1-.116.133-.197.198-.33.065-.133.033-.248-.017-.347-.05-.099-.445-1.073-.61-1.47-.16-.388-.323-.335-.445-.341-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.17-.478 1.338-.94.165-.463.165-.859.115-.942-.049-.082-.182-.132-.38-.23z" />
        </svg>
        <span>Chat on WhatsApp</span>
      </button>
    </div>
  );
}
