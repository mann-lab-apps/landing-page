export type Highlight = {
  value: string;
  label: string;
};

export type Offering = {
  title: string;
  body: string;
};

export type PublishedApp = {
  title: string;
  status: string;
  summary: string;
  partner: string;
  href: string;
  linkLabel: string;
};

export type WorkmapPoint = {
  title: string;
  body: string;
};

export const company = {
  name: "Mannlab",
  koreanName: "만랩",
  tagline: "만 가지 회사의 가장 중요한 문제를 개발로 함께 해결하는 파트너",
  intro:
    "만랩은 혼자 만 가지 문제를 해결하려는 회사가 아닙니다. 엄마의 일, 동생의 일, 작은 팀과 회사의 중요한 문제를 같이 듣고 정리한 뒤 개발로 해결 가능한 형태까지 함께 만들어 갑니다.",
  contactEmail: "hello@mannlab.kr"
};

export const highlights: Highlight[] = [
  { value: "01", label: "문제 발견" },
  { value: "02", label: "함께 설계" },
  { value: "03", label: "개발로 해결" }
];

export const offerings: Offering[] = [
  {
    title: "Problem Partnering",
    body: "가까운 사람과 작은 회사가 매일 부딪히는 중요한 문제를 같이 듣고, 개발로 풀 수 있는 핵심을 찾아냅니다."
  },
  {
    title: "Service Prototyping",
    body: "문제 정의에서 멈추지 않고 실제로 써볼 수 있는 웹 앱, 운영 도구, 자동화 화면으로 빠르게 검증합니다."
  },
  {
    title: "Long-term Care",
    body: "한 번 만들고 끝내지 않고 쓰는 사람의 리듬을 보며 고치고, 줄이고, 더 중요한 일에 맞게 제품을 다듬습니다."
  }
];

export const publishedApps: PublishedApp[] = [
  {
    title: "in C",
    status: "작업 중인 앱",
    summary:
      "흩어진 생각과 실행을 하나의 구조로 정리해 다음 행동을 더 선명하게 만드는 실험적 작업 앱입니다.",
    partner: "작은 팀과 개인 창작자",
    href: "https://in-c.mannlab.app",
    linkLabel: "in C 열기"
  },
  {
    title: "명순",
    status: "파일럿 서비스",
    summary:
      "가까운 사람의 반복되는 실제 업무를 줄이기 위해 문제 정의부터 화면까지 함께 만들고 있는 생활형 업무 앱입니다.",
    partner: "가족과 작은 사업장",
    href: "#contact",
    linkLabel: "명순 함께 보기"
  }
];

export const workmapPoints: WorkmapPoint[] = [
  {
    title: "프로젝트가 어디에 있는지",
    body: "함께 해결하기로 한 문제가 지금 어디까지 왔고 무엇이 막혀 있는지 한 화면에서 보이게 정리합니다."
  },
  {
    title: "다음에 무엇을 해야 하는지",
    body: "기록이 쌓일수록 각 회사와 사람에게 지금 가장 중요한 다음 행동이 선명해지는 구조를 만듭니다."
  },
  {
    title: "나중에도 다시 찾을 수 있게",
    body: "문제를 함께 풀어온 맥락과 결과물을 남겨 해결 과정이 사람의 기억에만 묶이지 않게 합니다."
  }
];
