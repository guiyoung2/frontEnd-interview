import type { CategoryMeta, QuestionCategory } from "./types";

export const CATEGORY_ORDER: QuestionCategory[] = [
  "nextjs",
  "react",
  "javascript",
  "tech",
  "misc",
];

export const CATEGORY_META: Record<QuestionCategory, CategoryMeta> = {
  nextjs: {
    label: "Next.js 질문",
    description: "App Router, 렌더링 전략, 데이터 패칭 관련 질문",
  },
  react: {
    label: "React 질문",
    description: "컴포넌트 구조, 상태관리, 렌더링 최적화 관련 질문",
  },
  javascript: {
    label: "JavaScript 질문",
    description: "언어 기초, 실행 컨텍스트, 비동기 처리 관련 질문",
  },
  tech: {
    label: "기술질문",
    description: "CS/아키텍처/네트워크 등 확장 기술 질문",
  },
  misc: {
    label: "개별 면접질문",
    description: "스택 분류가 애매한 실무형 질문",
  },
};

export function isQuestionCategory(value: string): value is QuestionCategory {
  return CATEGORY_ORDER.includes(value as QuestionCategory);
}

export function getCategoryHref(category: QuestionCategory): string {
  return `/questions/${category}`;
}
