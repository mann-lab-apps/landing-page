import "../style.css";
import { games, testerProgram } from "../features/landing_page/content";
import { initGoogleAnalytics } from "../features/analytics/googleAnalytics";

const app = document.querySelector<HTMLDivElement>("#app");
const game = games.find((item) => item.title === "10000");

if (!app || !game) {
  throw new Error("10000 game page could not be initialized");
}

initGoogleAnalytics();

app.innerHTML = `
  <main class="game-share-page">
    <section class="game-share-hero" aria-labelledby="game-title">
      <a class="share-brand" href="/">Mannlab</a>
      <div class="target-strip" aria-hidden="true">
        <span>1</span>
        <span>0</span>
        <span>0</span>
        <span>0</span>
        <span>0</span>
      </div>
      <p class="eyebrow">Mann Lab Games</p>
      <h1 id="game-title">${game.title}</h1>
      <p>${game.summary}</p>
      <div class="game-actions share-actions">
        <a class="primary-action" href="${game.downloadHref}" download>APK 다운로드</a>
      </div>
    </section>

    <section class="share-info-grid" aria-label="빌드 정보">
      <article>
        <span>Platform</span>
        <strong>${game.platform}</strong>
      </article>
      <article>
        <span>Version</span>
        <strong>${game.version}</strong>
      </article>
      <article>
        <span>Status</span>
        <strong>${game.status}</strong>
      </article>
    </section>

    <section class="share-steps" aria-labelledby="install-title">
      <div>
        <p class="eyebrow">Install</p>
        <h2 id="install-title">Android에서 직접 설치하기</h2>
      </div>
      <ol>
        <li>APK 파일을 다운로드합니다.</li>
        <li>Android에서 알 수 없는 앱 설치 허용 안내가 나오면 브라우저 설치를 허용합니다.</li>
        <li>설치 후 60초 동안 숫자판에서 1 0 0 0 0을 찾아 플레이합니다.</li>
      </ol>
    </section>

    <section class="share-steps tester-panel" aria-labelledby="tester-title">
      <div>
        <p class="eyebrow">Google Play Test</p>
        <h2 id="tester-title">테스터 구독</h2>
      </div>
      <p>
        ${testerProgram.description}
        Google Play closed testing이 열리면 구독자에게 참여 링크를 보냅니다.
        Play 테스트는 Google 계정 이메일이 필요하며, 프로덕션 출시 전 12명 이상이
        14일 동안 opt-in 상태를 유지해야 합니다.
      </p>
    </section>
  </main>

  <a
    class="tester-fab"
    href="${testerProgram.href}"
    aria-label="${testerProgram.description}"
    title="${testerProgram.description}"
  >
    <span>${testerProgram.label}</span>
    <strong>${testerProgram.shortLabel}</strong>
  </a>
`;
