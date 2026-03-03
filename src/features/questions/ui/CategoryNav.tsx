import Link from "next/link";
import { CATEGORY_META, CATEGORY_ORDER } from "../service";
import type { QuestionCategory } from "../model/types";
import * as styles from "./CategoryNav.css";

interface CategoryNavProps {
  currentCategory?: QuestionCategory;
}

export function CategoryNav({ currentCategory }: CategoryNavProps) {
  return (
    <nav className={styles.nav} aria-label="질문 카테고리">
      {CATEGORY_ORDER.map((category) => {
        const isActive = currentCategory === category;

        return (
          <Link
            key={category}
            className={`${styles.link} ${isActive ? styles.active : ""}`}
            href={`/questions/${category}`}
          >
            {CATEGORY_META[category].label}
          </Link>
        );
      })}
    </nav>
  );
}
