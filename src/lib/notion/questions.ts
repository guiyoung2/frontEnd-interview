import { mockQuestions } from "@/features/questions/mock-data";
import type { Question } from "@/features/questions/model/types";
import { unstable_cache } from "next/cache";
import { hasNotionConfig } from "./client";

const getCachedQuestions = unstable_cache(
  async (): Promise<Question[]> => {
    // NOTE:
    // Notion DB 스키마가 확정되기 전까지는 mock 데이터를 반환한다.
    // 스키마가 정해지면 이 함수를 Notion API 호출 + 매핑 로직으로 교체한다.
    if (hasNotionConfig()) {
      return mockQuestions;
    }

    return mockQuestions;
  },
  ["questions:all"],
  { revalidate: 300 }
);

export async function fetchQuestions(): Promise<Question[]> {
  // NOTE:
  // 데이터 읽기는 캐시 계층을 통과해 라우트 전환 시 중복 계산을 줄인다.
  return getCachedQuestions();
}
