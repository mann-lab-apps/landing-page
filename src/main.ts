import "./style.css";
import {
  company,
  highlights,
  offerings,
  publishedApps,
  workmapPoints
} from "./features/landing_page/content";
import { initGoogleAnalytics } from "./features/analytics/googleAnalytics";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root not found");
}

initGoogleAnalytics();

const renderList = <T>(
  items: T[],
  className: string,
  renderItem: (item: T) => string
) => `<div class="${className}">${items.map(renderItem).join("")}</div>`;

app.innerHTML = `
  <header class="site-header" aria-label="주요 탐색">
    <a class="brand" href="#top" aria-label="${company.name} 홈">
      <span class="brand-mark">M</span>
      <span>${company.name}</span>
    </a>
    <nav class="nav-links" aria-label="페이지 섹션">
      <a href="#studio">Studio</a>
      <a href="#apps">Apps</a>
      <a href="#workmap">Workmap</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero" aria-labelledby="hero-title">
      <img class="hero-image" src="/assets/workmap-hero.png" alt="" />
      <div class="hero-shade" aria-hidden="true"></div>
      <div class="hero-content">
        <p class="eyebrow">${company.koreanName}</p>
        <h1 id="hero-title">${company.name}</h1>
        <p class="hero-copy">${company.tagline}</p>
        <div class="hero-actions">
          <a class="primary-action" href="#apps">앱 보기</a>
          <a class="secondary-action" href="#contact">문의하기</a>
        </div>
      </div>
    </section>

    <section class="intro-band" id="studio" aria-labelledby="studio-title">
      <div class="section-inner intro-grid">
        <div>
          <p class="eyebrow">Studio</p>
          <h2 id="studio-title">만 가지 회사의 중요한 문제를 함께 해결합니다.</h2>
        </div>
        <p>${company.intro}</p>
      </div>
    </section>

    <section class="section-inner metrics" aria-label="만랩이 집중하는 영역">
      ${highlights
        .map(
          (item) => `
            <div class="metric">
              <span>${item.value}</span>
              <strong>${item.label}</strong>
            </div>
          `
        )
        .join("")}
    </section>

    <section class="section-inner" aria-labelledby="offerings-title">
      <div class="section-heading">
        <p class="eyebrow">What We Build</p>
        <h2 id="offerings-title">문제를 같이 듣고, 개발 가능한 답으로 바꿉니다.</h2>
      </div>
      ${renderList(
        offerings,
        "offering-grid",
        (item) => `
          <article class="offering-card">
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </article>
        `
      )}
    </section>

    <section class="apps-band" id="apps" aria-labelledby="apps-title">
      <div class="section-inner">
        <div class="section-heading compact">
          <p class="eyebrow">Partner Apps</p>
          <h2 id="apps-title">지금 실제로 함께 만들고 있는 앱들</h2>
        </div>
        ${renderList(
          publishedApps,
          "app-grid",
          (item) => `
            <article class="app-card">
              <div class="app-card-top">
                <span class="app-status">${item.status}</span>
                <span>${item.partner}</span>
              </div>
              <h3>${item.title}</h3>
              <p>${item.summary}</p>
              <a class="inline-action" href="${item.href}">${item.linkLabel}</a>
            </article>
          `
        )}
      </div>
    </section>

    <section class="workmap-band" id="workmap" aria-labelledby="workmap-title">
      <div class="section-inner workmap-layout">
        <div class="workmap-copy">
          <p class="eyebrow">Featured Project</p>
          <h2 id="workmap-title">Mannlab Workmap</h2>
          <p>
            Workmap은 함께 해결하는 문제의 흐름을 잃지 않기 위한 업무 지도입니다.
            프로젝트, 원칙, 피드백, 실행 기록을 연결해 지금 가장 중요한 일이
            무엇인지 함께 확인합니다.
          </p>
          <a class="inline-action" href="#contact">공개 데모 문의하기</a>
        </div>
        ${renderList(
          workmapPoints,
          "workmap-points",
          (item) => `
            <article>
              <h3>${item.title}</h3>
              <p>${item.body}</p>
            </article>
          `
        )}
      </div>
    </section>

    <section class="section-inner contact" id="contact" aria-labelledby="contact-title">
      <div>
        <p class="eyebrow">Contact</p>
        <h2 id="contact-title">정리하고 싶은 일이 있다면, 만랩과 이야기해요.</h2>
      </div>
      <a class="primary-action dark" href="mailto:${company.contactEmail}">
        ${company.contactEmail}
      </a>
    </section>
  </main>
`;
