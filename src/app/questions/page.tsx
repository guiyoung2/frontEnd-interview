import { CategoryNav } from "@/features/questions/ui/CategoryNav";
import * as styles from "./questions.css";

export default function QuestionsHomePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>질문 카테고리</h1>
      <p className={styles.description}>
        아래 카테고리를 선택해 면접 질문을 확인하세요.
      </p>
      <CategoryNav />
    </main>
  );
}
