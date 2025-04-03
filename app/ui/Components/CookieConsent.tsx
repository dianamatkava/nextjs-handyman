"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [consentType, setConsentType] = useState<"all" | "essential" | null>(
    null
  );

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setConsentType("all");
    setShowConsent(false);
    window.dispatchEvent(
      new CustomEvent("cookieConsentChanged", { detail: "all" })
    );
  };

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    setConsentType("essential");
    setShowConsent(false);
    window.dispatchEvent(
      new CustomEvent("cookieConsentChanged", { detail: "essential" })
    );
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 text-white p-12 z-50 shadow-lg">
      <div className="container mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col gap-6 font-['Plus Jakarta Sans']">
          <h3 className="text-lg font-semibold">Cookie Settings</h3>
          <p className="text-sm leading-relaxed max-w-3xl">
            We use cookies to enhance your browsing experience, serve
            personalized content, and analyze our traffic. By clicking "Accept
            All", you consent to our use of cookies.
          </p>
          <div className="text-sm">
            Read our{" "}
            <Link
              href="/privacypolicy"
              className="underline hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/termsofuse"
              className="underline hover:text-gray-300 transition-colors"
            >
              Terms of Use
            </Link>{" "}
            for more information.
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-end pt-2">
          <button
            onClick={acceptEssential}
            className="px-6 py-2 border border-white/30 text-white rounded-lg 
                     hover:bg-white/10 transition-colors text-sm font-medium"
          >
            Essential Only
          </button>
          <button
            onClick={acceptAll}
            className="px-6 py-2 bg-white text-black rounded-lg 
                     hover:bg-gray-200 transition-colors text-sm font-medium"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
