import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryNav } from "@/features/questions/ui/CategoryNav";
import { AnswerRenderer } from "@/features/questions/ui/AnswerRenderer";
import {
  CATEGORY_META,
  getAllQuestions,
  getQuestionBySlug,
  isQuestionCategory,
} from "@/features/questions/service";
import * as styles from "../../questions.css";

interface QuestionDetailPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export default async function QuestionDetailPage({
  params,
}: QuestionDetailPageProps) {
  const { category, slug } = await params;

  if (!isQuestionCategory(category)) {
    notFound();
  }

  const question = await getQuestionBySlug(category, slug);

  if (!question) {
    notFound();
  }

  return (
    <main className={styles.container}>
      <CategoryNav currentCategory={category} />

      <div className={styles.header}>
        <h1 className={styles.title}>{question.title}</h1>
        <p className={styles.description}>{question.summary}</p>
        <p className={styles.meta}>
          <span>{CATEGORY_META[category].label}</span>
          <span className={styles.metaDot} />
          <span>업데이트: {question.updatedAt}</span>
        </p>
        {question.tags.length > 0 && (
          <div className={styles.tags}>
            {question.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <article className={styles.answerBox}>
        <AnswerRenderer content={question.answer} />
      </article>

      <Link className={styles.backLink} href={`/questions/${category}`}>
        ← 목록으로 돌아가기
      </Link>
    </main>
  );
}

export async function generateStaticParams() {
  const questions = await getAllQuestions();
  return questions.map((question) => ({
    category: question.category,
    slug: question.slug,
  }));
}
