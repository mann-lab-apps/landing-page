const GOOGLE_ANALYTICS_SCRIPT_ID = "google-analytics-script";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFunction;
    mannlabGoogleAnalyticsId?: string;
  }
}

type GtagFunction = (...args: unknown[]) => void;

const getMeasurementId = () =>
  import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() ?? "";

export const initGoogleAnalytics = (measurementId = getMeasurementId()) => {
  const trackingId = measurementId.trim();

  if (
    !trackingId ||
    typeof window === "undefined" ||
    typeof document === "undefined" ||
    window.mannlabGoogleAnalyticsId === trackingId
  ) {
    return;
  }

  window.mannlabGoogleAnalyticsId = trackingId;
  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    function gtag() {
      window.dataLayer?.push(arguments);
    };

  if (!document.getElementById(GOOGLE_ANALYTICS_SCRIPT_ID)) {
    const script = document.createElement("script");
    script.id = GOOGLE_ANALYTICS_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
      trackingId
    )}`;
    document.head.append(script);
  }

  window.gtag("js", new Date());
  window.gtag("config", trackingId);
};
