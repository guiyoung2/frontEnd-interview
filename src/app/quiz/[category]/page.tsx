import { notFound } from "next/navigation";
import { getAllQuestions } from "@/features/questions/service";
import { QuizClient } from "@/features/quiz/QuizClient";
import { QUIZ_CATEGORIES } from "@/features/quiz/types";
import type { QuizMode, QuizCategory } from "@/features/quiz/types";
import { buildQuizItems } from "@/features/quiz/utils";

interface QuizPageProps {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ mode?: string }>;
}

// 유효한 퀴즈 카테고리 타입 가드
function isValidQuizCategory(value: string): value is QuizCategory {
  return QUIZ_CATEGORIES.includes(value as QuizCategory);
}

// 카테고리별 퀴즈 진행 페이지
export default async function QuizPage({
  params,
  searchParams,
}: QuizPageProps) {
  const { category } = await params;
  const { mode: modeParam } = await searchParams;

  if (!isValidQuizCategory(category)) {
    notFound();
  }

  const mode: QuizMode =
    modeParam === "subjective" ? "subjective" : "multiple";

  const allQuestions = await getAllQuestions();
  const categoryQuestions = allQuestions.filter(
    (q) => q.category === category
  );

  if (categoryQuestions.length === 0) {
    notFound();
  }

  const quizItems = buildQuizItems(categoryQuestions, allQuestions, mode);

  return <QuizClient items={quizItems} mode={mode} />;
}
