import { notFound } from "next/navigation";
import { CategoryNav } from "@/features/questions/ui/CategoryNav";
import { QuestionCard } from "@/features/questions/ui/QuestionCard";
import {
  CATEGORY_META,
  CATEGORY_ORDER,
  getQuestionsByCategory,
  isQuestionCategory,
} from "@/features/questions/service";
import * as styles from "../questions.css";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  if (!isQuestionCategory(category)) {
    notFound();
  }

  const meta = CATEGORY_META[category];
  const questions = await getQuestionsByCategory(category);

  return (
    <main className={styles.container}>
      <CategoryNav currentCategory={category} />

      <div className={styles.header}>
        <h1 className={styles.title}>{meta.label}</h1>
        <p className={styles.description}>{meta.description}</p>
      </div>

      {questions.length === 0 ? (
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>📭</span>
          아직 등록된 질문이 없습니다.
          <br />
          Notion 연동 후 자동으로 표시됩니다.
        </div>
      ) : (
        <section className={styles.list}>
          {questions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </section>
      )}
    </main>
  );
}

export function generateStaticParams() {
  return CATEGORY_ORDER.map((category) => ({ category }));
}
