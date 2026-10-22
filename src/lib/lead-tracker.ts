// Contact Form Web3Forms + Abandoned Lead Tracking Automation
export const ACCESS_KEY = "ec208508-c6c5-4d14-ba69-9bcceb1c121b";
export const WEB3FORMS_URL = "https://api.web3forms.com/submit";
export const OFFICIAL_EMAIL = "inkwinkk.studio@gmail.com";

export function sendLeadPayload(
  data: Record<string, string>,
  subject: string,
): Promise<Response | void> {
  const payload = new FormData();
  payload.append("access_key", ACCESS_KEY);
  payload.append("subject", subject);
  if (data.name) {
    payload.append("from_name", data.name);
  }
  if (data.email) {
    payload.append("replyto", data.email);
  }

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      payload.append(key, data[key]);
    }
  }

  return fetch(WEB3FORMS_URL, {
    method: "POST",
    body: payload,
    keepalive: true,
  }).catch((err) => {
    console.log("Lead error:", err);
  });
}

// Global hook to attach listeners for beforeunload/blur and WhatsApp popup toggle
export function initLeadTracker(): () => void {
  if (typeof window === "undefined") return () => {};

  // Global WhatsApp popup toggle helper
  (window as unknown as { toggleWaPopup?: () => void }).toggleWaPopup = () => {
    const popup = document.getElementById("waPopup");
    if (popup) {
      popup.style.display = popup.style.display === "block" ? "none" : "block";
    }
  };

  let isSubmitted = false;
  let partialCaptured = false;

  function extractFormData(form: HTMLFormElement): Record<string, string> {
    const formData = new FormData(form);
    const dataObj: Record<string, string> = {};
    formData.forEach((value, key) => {
      dataObj[key] = String(value);
    });
    return dataObj;
  }

  const checkAndSendAbandonedLead = (reason: string) => {
    if (isSubmitted || partialCaptured) return;
    const form =
      (document.getElementById("leadForm") as HTMLFormElement | null) ||
      document.querySelector("form");
    if (!form) return;

    const data = extractFormData(form);
    const hasContactInfo = Object.values(data).some(
      (val) => typeof val === "string" && val.trim().length > 2,
    );

    if (hasContactInfo) {
      sendLeadPayload(data, `⚠️ ABANDONED LEAD (${reason})`);
      partialCaptured = true;
    }
  };

  const handleBeforeUnload = () => {
    checkAndSendAbandonedLead("User left without submitting");
  };

  const handlePageHide = () => {
    checkAndSendAbandonedLead("Page hidden / navigated away");
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      checkAndSendAbandonedLead("Tab backgrounded / user switched");
    }
  };

  const handleSubmit = () => {
    isSubmitted = true;
  };

  window.addEventListener("beforeunload", handleBeforeUnload);
  window.addEventListener("pagehide", handlePageHide);
  document.addEventListener("visibilitychange", handleVisibilityChange);
  window.addEventListener("submit", handleSubmit, true);

  // Return cleanup function
  return () => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
    window.removeEventListener("pagehide", handlePageHide);
    document.removeEventListener("visibilitychange", handleVisibilityChange);
    window.removeEventListener("submit", handleSubmit, true);
  };
}
