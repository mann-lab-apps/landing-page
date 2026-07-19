// @vitest-environment happy-dom

import { afterEach, describe, expect, it, vi } from "vitest";
import { initGoogleAnalytics } from "../features/analytics/googleAnalytics";

describe("google analytics", () => {
  afterEach(() => {
    document.head.innerHTML = "";
    vi.restoreAllMocks();
    delete window.dataLayer;
    delete window.gtag;
    delete window.mannlabGoogleAnalyticsId;
  });

  it("does not load analytics without a measurement id", () => {
    initGoogleAnalytics("");

    expect(document.querySelector("script")).toBeNull();
    expect(window.dataLayer).toBeUndefined();
  });

  it("loads gtag once and queues the initial page config", () => {
    const appendedScripts: Element[] = [];
    vi.spyOn(document.head, "append").mockImplementation((...nodes) => {
      appendedScripts.push(...nodes.filter((node): node is Element => node instanceof Element));
    });

    initGoogleAnalytics("G-MANNLAB123");
    initGoogleAnalytics("G-MANNLAB123");

    expect(appendedScripts).toHaveLength(1);
    expect(appendedScripts[0].id).toBe("google-analytics-script");
    expect(appendedScripts[0].getAttribute("src")).toBe(
      "https://www.googletagmanager.com/gtag/js?id=G-MANNLAB123"
    );
    expect(window.dataLayer).toHaveLength(2);
    expect(Array.from(window.dataLayer?.[0] as IArguments)).toEqual([
      "js",
      expect.any(Date)
    ]);
    expect(Array.from(window.dataLayer?.[1] as IArguments)).toEqual([
      "config",
      "G-MANNLAB123"
    ]);
  });
});
