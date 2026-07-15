# Mannlab Landing Page Specification

---

## 1. 서비스 개요 및 목적 (Service Overview & Target)
*   **서비스 이름**:
    *   Mannlab Landing
*   **운영 도메인**:
    *   `https://mannlab.app`
*   **서비스 핵심 비즈니스 목적**:
    *   만랩이 만 가지 회사의 중요한 문제를 개발로 함께 해결하는 파트너라는 점을 명확히 알린다.
    *   `in C`, `명순`처럼 실제로 함께 만들고 있는 앱을 공개해 추상적인 소개에서 벗어난다.
*   **서비스 타겟 방문자 (Target Audience)**: 
    *   개발로 해결할 수 있는 문제를 갖고 있는 가족 사업, 개인 창작자, 작은 팀, 작은 회사

## 2. 전환 목표 및 핵심 행동 유도 (CTA & Conversion)
*   **핵심 행동 유도 (CTA - Call To Action)**:
    *   공개 앱을 확인한 뒤 이메일로 문제 상담 또는 협업 문의를 보낸다.
*   **전환 성공 기준 (Success Criteria)**:
    *   방문자가 만랩의 핵심 가치, 실제 앱 목록, 연락 경로를 첫 방문에서 이해할 수 있다.
*   **전환 실패/예외 처리 기준**:
    *   앱 링크가 아직 별도 서비스 URL을 갖지 않는 경우에도 연락 CTA로 이어져야 한다.
    *   `in C`는 `https://in-c.mannlab.app`로 직접 이동해야 한다.

## 3. 플랫폼 특화 및 비기능 요구사항 (Non-Functional & Platform Requirements)
*   **검색 노출 및 공유 요건 (SEO & Metadata)**:
    *   만랩의 핵심 가치를 메타 설명과 OG 설명에 반영한다.
*   **웹 최적화 및 로딩 성능 기준**:
    *   정적 Vite 페이지로 빠르게 로드되고 모바일에서 앱 카드 텍스트가 겹치지 않아야 한다.
*   **접근성 및 크로스 브라우징 요건**:
    *   주요 섹션은 heading과 aria label을 통해 탐색 가능해야 한다.

## 4. 콘텐츠 구조 및 기능 아웃라인 (Content Layout & Features)
*   **핵심 페이지/섹션 구성 목록**:
    *   Hero: 만랩의 핵심 가치
    *   Studio: 함께 문제를 푸는 방식
    *   What We Build: 문제 발견, 프로토타입, 장기 개선
    *   Partner Apps: `in C`, `명순`
    *   Workmap: 함께 해결하는 문제의 흐름을 관리하는 내부 도구
    *   Contact: 협업 문의
*   **인터랙티브/마이크로 인터랙션 요건**:
    *   상단 탐색과 CTA는 페이지 내부 섹션으로 부드럽게 이동한다.
