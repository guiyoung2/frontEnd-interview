import Link from "next/link";
import { CATEGORY_META, CATEGORY_ORDER } from "@/features/questions/service";
import * as styles from "./page.css";

const CATEGORY_EMOJI: Record<string, string> = {
  nextjs: "▲",
  react: "⚛️",
  javascript: "📜",
  tech: "🛠️",
  misc: "💡",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <span className={styles.badge}>프론트엔드 면접 준비</span>
        <h1 className={styles.title}>
          면접 질문을
          <br />
          <span className={styles.titleAccent}>카테고리별</span>로 정리했어요
        </h1>
        <p className={styles.description}>
          Next.js · React · JavaScript 핵심 질문과 개념을 빠르게 복습하세요.
        </p>
      </section>

      <div className={styles.grid}>
        {CATEGORY_ORDER.map((category) => (
          <Link
            key={category}
            className={styles.categoryCard}
            href={`/questions/${category}`}
          >
            <span className={styles.categoryEmoji}>
              {CATEGORY_EMOJI[category]}
            </span>
            <span className={styles.categoryLabel}>
              {CATEGORY_META[category].label}
            </span>
            <span className={styles.categoryDesc}>
              {CATEGORY_META[category].description}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
