import { describe, expect, it } from "vitest";
import {
  company,
  highlights,
  offerings,
  publishedApps,
  workmapPoints
} from "../features/landing_page/content";

describe("landing page content", () => {
  it("introduces Mannlab as a partner for many companies", () => {
    expect(company.name).toBe("Mannlab");
    expect(company.koreanName).toBe("만랩");
    expect(company.tagline).toContain("만 가지 회사");
    expect(company.tagline).toContain("함께 해결");
    expect(company.intro).toContain("혼자 만 가지 문제");
    expect(company.intro).toContain("개발로 해결");
    expect(workmapPoints).toHaveLength(3);
  });

  it("keeps the homepage sections populated", () => {
    expect(highlights.every((item) => item.value && item.label)).toBe(true);
    expect(offerings.every((item) => item.title && item.body)).toBe(true);
    expect(publishedApps.map((item) => item.title)).toEqual(["in C", "명순"]);
    expect(
      publishedApps.every(
        (item) =>
          item.status && item.summary && item.partner && item.href && item.linkLabel
      )
    ).toBe(true);
  });
});
