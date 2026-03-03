# frontEnd-interview AGENTS Guide

## 프로젝트 목표
- Notion API를 문서 저장소(CMS)로 사용해 프론트엔드 면접 질문을 관리한다.
- 사용자는 카테고리별 질문 목록을 보고, 개별 질문 상세를 확인한다.
- Next.js App Router 기반으로 페이지를 구성한다.

## 현재 프로젝트 상태
- 프레임워크: Next.js(App Router), React, TypeScript
- 초기 템플릿 코드가 남아 있으며 Tailwind 관련 의존성과 스타일이 포함되어 있다.
- 실제 구현은 아래 "스타일/아키텍처 규칙"을 우선한다.

## 라우팅 구조 원칙(App Router)
- 홈: `/`
- 카테고리 질문 목록:
  - `/questions/nextjs`
  - `/questions/react`
  - `/questions/javascript`
  - `/questions/tech` (데이터가 없을 수 있음)
  - `/questions/misc` (스택 분류가 애매한 개별 질문)
- 개별 질문 상세:
  - `/questions/[category]/[slug]`

## 데이터 모델(권장)
- `category`: `nextjs | react | javascript | tech | misc`
- `question`: id, slug, title, summary, answer, tags, updatedAt
- Notion DB 속성명은 코드 상수로 중앙 관리한다.

## Notion API 연동 규칙
- 서버 전용 코드에서만 Notion API를 호출한다.
- 클라이언트 컴포넌트에서 Notion 비밀키를 직접 사용하지 않는다.
- 환경 변수:
  - `NOTION_API_KEY`
  - `NOTION_DATABASE_ID`
- API 응답 매핑 계층을 분리한다:
  - Notion raw 응답 -> 앱 도메인 타입으로 변환
- 에러 처리:
  - 네트워크/권한/스키마 오류를 구분해 로깅한다.
  - 사용자 화면에는 안전한 에러 메시지를 노출한다.

## 스타일 규칙(필수)
- Zero-runtime CSS-in-JS인 Vanilla Extract를 사용한다.
- 모든 스타일 파일은 `.css.ts` 확장자를 사용한다.
- Emotion이나 Tailwind CSS는 프로젝트에서 제외한다.
- 스타일은 컴포넌트와 가까운 위치에 배치한다(기능 단위 co-location).

## 컴포넌트/코드 규칙
- 기본은 Server Component, 상호작용이 필요한 경우에만 Client Component를 사용한다.
- 라우트 단위로 `loading.tsx`, `error.tsx`를 고려한다.
- 타입 우선 개발:
  - `any` 사용을 지양하고 도메인 타입을 명시한다.
- 데이터 접근 계층 분리:
  - `src/lib/notion/*` (API 호출/매핑)
  - `src/features/questions/*` (도메인 로직)
  - `src/app/*` (라우팅/렌더링)

## 구현 우선순위
1. 기본 정보구조(홈 + 카테고리 목록 페이지)
2. Notion 연동 및 질문 목록 렌더링
3. 질문 상세 페이지
4. 빈 상태/에러 상태/로딩 상태 개선
5. 검색/태그/정렬 등 확장 기능

## 금지/주의 사항
- Tailwind 클래스 추가 금지
- Emotion 패키지 추가 금지
- Notion 응답 스키마를 페이지 컴포넌트에서 직접 파싱하지 말 것
- 비밀키/토큰을 코드에 하드코딩하지 말 것

## 완료 기준(Definition of Done)
- App Router 경로가 카테고리/상세 구조를 충족한다.
- Notion 데이터가 서버에서 안전하게 로드된다.
- 스타일이 Vanilla Extract `.css.ts` 기준으로만 작성된다.
- 빈 데이터(예: tech 카테고리 없음) 케이스가 UX적으로 처리된다.
