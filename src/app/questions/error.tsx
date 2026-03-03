"use client";

import * as styles from "./questions.css";

interface QuestionsErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function QuestionsError({ error, reset }: QuestionsErrorProps) {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>질문 페이지 오류</h1>
      <p className={styles.description}>
        데이터를 불러오는 중 오류가 발생했습니다.
      </p>
      <p className={styles.meta}>{error.message}</p>
      <button type="button" onClick={reset}>
        다시 시도
      </button>
    </main>
  );
}
