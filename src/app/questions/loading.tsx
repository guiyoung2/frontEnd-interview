import * as styles from "./questions.css";

export default function QuestionsLoading() {
  return (
    <main className={styles.container}>
      <p className={styles.description}>질문 데이터를 불러오는 중입니다...</p>
    </main>
  );
}
