import Link from "next/link";
import { QUIZ_CATEGORIES } from "@/features/quiz/types";
import { CATEGORY_META } from "@/features/questions/service";
import * as styles from "./page.css";

const CATEGORY_EMOJI: Record<string, string> = {
  nextjs: "▲",
  react: "⚛️",
  javascript: "📜",
  tech: "🛠️",
};

// 퀴즈 카테고리 및 모드 선택 페이지
export default function QuizPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <span className={styles.badge}>퀴즈 모드</span>
        <h1 className={styles.title}>
          문제를 풀며
          <br />
          <span className={styles.titleAccent}>실력을 확인</span>해보세요
        </h1>
        <p className={styles.description}>
          카테고리를 선택하고 객관식 또는 주관식으로 퀴즈를 시작하세요.
        </p>
      </section>

      <div className={styles.grid}>
        {QUIZ_CATEGORIES.map((category) => (
          <div key={category} className={styles.categoryCard}>
            <span className={styles.categoryEmoji}>
              {CATEGORY_EMOJI[category]}
            </span>
            <span className={styles.categoryLabel}>
              {CATEGORY_META[category].label}
            </span>
            <span className={styles.categoryDesc}>
              {CATEGORY_META[category].description}
            </span>
            <div className={styles.buttonGroup}>
              <Link
                className={styles.button}
                href={`/quiz/${category}?mode=multiple`}
              >
                객관식
              </Link>
              <Link
                className={styles.button}
                href={`/quiz/${category}?mode=subjective`}
              >
                주관식
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
