export type QuestionCategory =
  | "nextjs"
  | "react"
  | "javascript"
  | "tech"
  | "misc";

export interface Question {
  id: string;
  category: QuestionCategory;
  slug: string;
  title: string;
  summary: string;
  answer: string;
  tags: string[];
  updatedAt: string;
}

export interface CategoryMeta {
  label: string;
  description: string;
}
