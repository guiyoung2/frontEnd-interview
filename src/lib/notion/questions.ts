import { unstable_cache } from "next/cache";
import { mockQuestions } from "@/features/questions/mock-data";
import type { Question } from "@/features/questions/model/types";
import { notionFetch, getDatabaseId, hasNotionConfig } from "./client";
import { fetchPageContent } from "./blocks";
import { mapPageToQuestion } from "./mapper";

interface NotionPage {
  id: string;
  object: string;
  properties: Record<string, unknown>;
}

interface DatabaseQueryResponse {
  results: NotionPage[];
}

async function fetchQuestionsFromNotion(): Promise<Question[]> {
  const databaseId = getDatabaseId();

  const data = await notionFetch<DatabaseQueryResponse>(
    `/databases/${databaseId}/query`,
    {
      method: "POST",
      body: JSON.stringify({
        filter: {
          property: "status",
          select: { equals: "published" },
        },
        sorts: [{ property: "updatedAt", direction: "descending" }],
      }),
    }
  );

  const questions = await Promise.all(
    data.results
      .filter((page) => page.object === "page")
      .map(async (page) => {
        const answer = await fetchPageContent(page.id);
        return mapPageToQuestion(page as Parameters<typeof mapPageToQuestion>[0], answer);
      })
  );

  return questions.filter((q): q is Question => q !== null);
}

const getCachedQuestions = unstable_cache(
  async (): Promise<Question[]> => {
    if (!hasNotionConfig()) return mockQuestions;

    try {
      return await fetchQuestionsFromNotion();
    } catch (error) {
      console.error("[Notion] 데이터 로드 실패, mock 데이터로 폴백합니다.", error);
      return mockQuestions;
    }
  },
  ["questions:all"],
  { revalidate: 300 }
);

export async function fetchQuestions(): Promise<Question[]> {
  return getCachedQuestions();
}
