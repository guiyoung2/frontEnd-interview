import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Question, QuestionCategory } from "@/features/questions/model/types";
import { isQuestionCategory } from "@/features/questions/model/categories";

function getRichText(
  properties: PageObjectResponse["properties"],
  key: string
): string {
  const prop = properties[key];
  if (!prop || prop.type !== "rich_text") return "";
  return prop.rich_text.map((t) => t.plain_text).join("");
}

function getTitle(properties: PageObjectResponse["properties"]): string {
  const prop = properties["title"];
  if (!prop || prop.type !== "title") return "";
  return prop.title.map((t) => t.plain_text).join("");
}

function getSelect(
  properties: PageObjectResponse["properties"],
  key: string
): string {
  const prop = properties[key];
  if (!prop || prop.type !== "select" || !prop.select) return "";
  return prop.select.name;
}

function getMultiSelect(
  properties: PageObjectResponse["properties"],
  key: string
): string[] {
  const prop = properties[key];
  if (!prop || prop.type !== "multi_select") return [];
  return prop.multi_select.map((s) => s.name);
}

function getDate(
  properties: PageObjectResponse["properties"],
  key: string
): string {
  const prop = properties[key];
  if (!prop || prop.type !== "date" || !prop.date) return "";
  return prop.date.start;
}

export function mapPageToQuestion(
  page: PageObjectResponse,
  answer = ""
): Question | null {
  const { properties } = page;

  const category = getSelect(properties, "category");
  if (!isQuestionCategory(category)) return null;

  const slug = getRichText(properties, "slug");
  if (!slug) return null;

  return {
    id: page.id,
    category: category as QuestionCategory,
    slug,
    title: getTitle(properties),
    summary: getRichText(properties, "summary"),
    answer,
    tags: getMultiSelect(properties, "tags"),
    updatedAt: getDate(properties, "updatedAt"),
  };
}
