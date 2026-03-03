export interface NotionConfig {
  apiKey?: string;
  databaseId?: string;
}

export function getNotionConfig(): NotionConfig {
  return {
    apiKey: process.env.NOTION_API_KEY,
    databaseId: process.env.NOTION_DATABASE_ID,
  };
}

export function hasNotionConfig(config = getNotionConfig()): boolean {
  return Boolean(config.apiKey && config.databaseId);
}
