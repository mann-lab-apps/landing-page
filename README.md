# Mannlab Landing

만랩 회사 홈페이지와 실제로 함께 만들고 있는 앱/서비스를 보여주는 정적 웹 프로젝트입니다.

만랩의 핵심 가치는 혼자 만 가지 문제를 해결하는 것이 아니라, 만 가지 회사와 사람이 가진 가장 중요한 문제를 개발로 함께 해결하는 파트너가 되는 것입니다.

## Scripts

```bash
npm run dev
npm run build
npm run test
```

## Analytics

GA4 측정 ID를 `VITE_GA_MEASUREMENT_ID` 환경변수로 설정하면 Google Analytics가 활성화됩니다.
로컬에서는 `.env.example`을 참고해 `.env.local`을 만들면 됩니다.

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX npm run build
```

## Structure

- `src/main.ts`: 페이지 렌더링 진입점
- `src/style.css`: 전체 레이아웃과 반응형 스타일
- `src/features/landing_page/content.ts`: 회사 소개, 서비스, 공개 앱, Workmap 문구 데이터
- `public/assets/workmap-hero.png`: 홈페이지 히어로 이미지
