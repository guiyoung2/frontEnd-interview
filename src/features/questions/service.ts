import { fetchQuestions } from "@/lib/notion/questions";
import {
  CATEGORY_META,
  CATEGORY_ORDER,
  isQuestionCategory,
} from "./model/categories";
import type { Question, QuestionCategory } from "./model/types";

export async function getAllQuestions(): Promise<Question[]> {
  return fetchQuestions();
}

export async function getQuestionsByCategory(
  category: QuestionCategory
): Promise<Question[]> {
  const questions = await getAllQuestions();
  return questions.filter((question) => question.category === category);
}

export async function getQuestionBySlug(
  category: QuestionCategory,
  slug: string
): Promise<Question | null> {
  const questions = await getQuestionsByCategory(category);
  return questions.find((question) => question.slug === slug) ?? null;
}

export {
  CATEGORY_META,
  CATEGORY_ORDER,
  isQuestionCategory,
};
