import type { Question } from "@/features/questions/model/types";

// 퀴즈 모드: 객관식 또는 주관식
export type QuizMode = "multiple" | "subjective";

// 퀴즈 가능한 카테고리 (misc 제외)
export const QUIZ_CATEGORIES = ["nextjs", "react", "javascript", "tech"] as const;
export type QuizCategory = (typeof QUIZ_CATEGORIES)[number];

// 퀴즈 출제 아이템 구조
export interface QuizItem {
  question: Question;
  options: string[];
  correctAnswer: string;
}
