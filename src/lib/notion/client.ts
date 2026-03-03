const PLACEHOLDER = "여기에_노션_API_키를_붙여넣으세요";

export function getApiKey(): string {
  const key = process.env.NOTION_API_KEY;
  if (!key || key === PLACEHOLDER) {
    throw new Error("NOTION_API_KEY 환경변수가 설정되지 않았습니다.");
  }
  return key;
}

export function getDatabaseId(): string {
  const id = process.env.NOTION_DATABASE_ID;
  if (!id) {
    throw new Error("NOTION_DATABASE_ID 환경변수가 설정되지 않았습니다.");
  }
  return id;
}

export function hasNotionConfig(): boolean {
  const key = process.env.NOTION_API_KEY;
  return Boolean(key && key !== PLACEHOLDER && process.env.NOTION_DATABASE_ID);
}

export async function notionFetch<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const apiKey = getApiKey();
  const res = await fetch(`https://api.notion.com/v1${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Notion API 오류 [${res.status}]: ${body}`);
  }

  return res.json() as Promise<T>;
}
