"use client";
import { useEffect, useState } from "react";
import { useEnv } from "@/app/hooks/useEnv";

export default function GoogleAnalytics() {
  const env = useEnv();
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem("cookie-consent");
    if (storedConsent) {
      setConsent(storedConsent);
    }

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "cookie-consent") {
        setConsent(event.newValue);
      }
    };

    const handleCustomConsentChange = (event: CustomEvent) => {
      setConsent(event.detail);
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener(
      "cookieConsentChanged",
      handleCustomConsentChange as EventListener
    );

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener(
        "cookieConsentChanged",
        handleCustomConsentChange as EventListener
      );
    };
  }, []);

  if (
    consent !== null &&
    ["all", "essential"].includes(consent) &&
    !env.debug
  ) {
    console.log("render GoogleAnalytics");
    return (
      <>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${env.googleTagAnalyticsId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${env.googleTagAnalyticsId}');
        `,
          }}
        />
      </>
    );
  } else {
    return null;
  }
}
