import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { CATEGORY_META, CATEGORY_ORDER } from "@/features/questions/model/categories";
import * as styles from "./layout.css";

export const metadata: Metadata = {
  title: "Frontend Interview Questions",
  description: "Notion API 기반 프론트엔드 면접질문 정리 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={styles.body}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link className={styles.brand} href="/">
              FE Interview
            </Link>
            <span className={styles.divider} />
            <nav className={styles.nav} aria-label="메인 메뉴">
              <Link className={styles.navLink} href="/">
                홈
              </Link>
              {CATEGORY_ORDER.map((category) => (
                <Link
                  key={category}
                  className={styles.navLink}
                  href={`/questions/${category}`}
                >
                  {CATEGORY_META[category].label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <Suspense
          fallback={<div className={styles.loadingFallback}>불러오는 중...</div>}
        >
          <div className={styles.content}>{children}</div>
        </Suspense>
      </body>
    </html>
  );
}
