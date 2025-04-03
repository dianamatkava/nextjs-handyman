"use client";
import { useState, useEffect } from "react";
import { APP_DEBUG } from "@/app/constants";
import { APP_PHONE_NUMBER, GOOGLETAG_ANALYTICS_ID } from "@/app/constants";
import { APP_SERVICE_EMAIL } from "@/app/constants";

export function useEnv() {
  const [env, setEnv] = useState({
    serviceEmail: "",
    phoneNumber: "",
    googleTagAnalyticsId: "",
    debug: true,
  });

  useEffect(() => {
    const values = {
      serviceEmail: APP_SERVICE_EMAIL || "",
      phoneNumber: APP_PHONE_NUMBER || "",
      googleTagAnalyticsId: GOOGLETAG_ANALYTICS_ID || "",
      debug: APP_DEBUG,
    };
    setEnv(values);
  }, []);

  return env;
}
