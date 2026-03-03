import Link from "next/link";
import type { Question } from "../model/types";
import * as styles from "./QuestionCard.css";

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <article className={styles.card}>
      <Link
        className={styles.titleLink}
        href={`/questions/${question.category}/${question.slug}`}
      >
        {question.title}
      </Link>
      <p className={styles.summary}>{question.summary}</p>
      <div className={styles.tags}>
        {question.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}
