import type { Question } from "./model/types";

export const mockQuestions: Question[] = [
  {
    id: "q-nextjs-1",
    category: "nextjs",
    slug: "app-router-vs-pages-router",
    title: "App Router와 Pages Router의 차이를 설명해보세요.",
    summary: "Next.js 라우팅 구조의 변화와 장단점을 비교하는 질문",
    answer:
      "App Router는 레이아웃, 로딩, 에러 경계 같은 파일 기반 규칙을 통해 라우트 단위 UI 구성을 더 강하게 지원합니다. 서버 컴포넌트를 기본으로 사용해 데이터 패칭과 렌더링 전략을 세밀하게 가져갈 수 있습니다.",
    tags: ["next.js", "app-router", "rendering"],
    updatedAt: "2026-03-03",
  },
  {
    id: "q-nextjs-2",
    category: "nextjs",
    slug: "ssg-ssr-isr-difference",
    title: "SSG, SSR, ISR의 차이를 설명해보세요.",
    summary: "렌더링 시점과 캐시/재생성 전략을 묻는 핵심 질문",
    answer:
      "SSG는 빌드 시 정적 생성, SSR은 요청 시 서버 렌더링, ISR은 정적 페이지를 주기적으로 재생성합니다. 트래픽 패턴과 데이터 변경 주기에 따라 적절한 전략을 선택합니다.",
    tags: ["next.js", "ssr", "isr", "ssg"],
    updatedAt: "2026-03-03",
  },
  {
    id: "q-react-1",
    category: "react",
    slug: "state-vs-ref",
    title: "state와 ref의 차이는 무엇인가요?",
    summary: "렌더링 트리거 여부를 기준으로 설명하는 질문",
    answer:
      "state는 값이 변경되면 리렌더링을 유발하고, ref는 변경해도 리렌더링을 유발하지 않습니다. UI 반영이 필요한 값은 state, DOM 참조나 렌더링과 무관한 mutable 값은 ref를 사용합니다.",
    tags: ["react", "state", "ref"],
    updatedAt: "2026-03-03",
  },
  {
    id: "q-react-2",
    category: "react",
    slug: "why-key-in-list",
    title: "리스트 렌더링에서 key가 왜 필요한가요?",
    summary: "리콘실리에이션 최적화를 이해하는지 확인하는 질문",
    answer:
      "key는 React가 요소의 identity를 추적하게 해 재정렬/삽입/삭제 시 불필요한 DOM 변경을 줄입니다. index key는 순서 변경이 있는 리스트에서 버그를 유발할 수 있어 지양합니다.",
    tags: ["react", "reconciliation"],
    updatedAt: "2026-03-03",
  },
  {
    id: "q-js-1",
    category: "javascript",
    slug: "event-loop-microtask-macrotask",
    title: "Event Loop에서 microtask와 macrotask를 설명해보세요.",
    summary: "비동기 실행 순서를 이해하는지 확인하는 질문",
    answer:
      "콜 스택이 비면 macrotask 큐의 태스크를 실행하고, 각 태스크 직후 microtask 큐를 모두 비웁니다. Promise.then은 microtask, setTimeout은 macrotask로 처리됩니다.",
    tags: ["javascript", "event-loop", "async"],
    updatedAt: "2026-03-03",
  },
  {
    id: "q-js-2",
    category: "javascript",
    slug: "closure-practical-example",
    title: "클로저를 실무에서 어떻게 활용하나요?",
    summary: "스코프 캡슐화 관점의 활용 사례를 묻는 질문",
    answer:
      "외부 함수의 실행이 끝난 뒤에도 내부 함수가 외부 스코프를 참조할 수 있는 특성을 이용해 데이터 은닉, 커링, 팩토리 함수 구현 등에 사용합니다.",
    tags: ["javascript", "closure"],
    updatedAt: "2026-03-03",
  },
  {
    id: "q-misc-1",
    category: "misc",
    slug: "how-to-handle-legacy-code",
    title: "레거시 코드 개선을 시작할 때 가장 먼저 보는 것은?",
    summary: "기술 선택보다 접근 순서를 확인하는 질문",
    answer:
      "사용자 영향도가 높은 기능과 장애 이력, 테스트 커버리지를 먼저 확인합니다. 작은 단위의 안전한 리팩터링과 회귀 방지 테스트를 함께 설계합니다.",
    tags: ["legacy", "refactoring", "process"],
    updatedAt: "2026-03-03",
  },
];
