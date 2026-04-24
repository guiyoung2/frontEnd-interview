import type { Question } from "@/features/questions/model/types";
import type { QuizItem, QuizMode } from "./types";

// Fisher-Yates 알고리즘으로 배열 무작위 정렬
export function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// 퀴즈 아이템 생성 (객관식 4선지, 주관식 처리)
export function buildQuizItems(
  categoryQuestions: Question[],
  allQuestions: Question[],
  mode: QuizMode
): QuizItem[] {
  return categoryQuestions.map((question) => {
    const correctAnswer = question.summary;

    if (mode === "subjective") {
      return {
        question,
        options: [],
        correctAnswer,
      };
    }

    const questionsWithSummary = allQuestions.filter(
      (q) => q.id !== question.id && q.summary.trim()
    );

    if (questionsWithSummary.length < 3) {
      return {
        question,
        options: [],
        correctAnswer,
      };
    }

    const wrongAnswers = shuffleArray(questionsWithSummary)
      .slice(0, 3)
      .map((q) => q.summary);

    const allOptions = shuffleArray([correctAnswer, ...wrongAnswers]);

    return {
      question,
      options: allOptions,
      correctAnswer,
    };
  });
}
