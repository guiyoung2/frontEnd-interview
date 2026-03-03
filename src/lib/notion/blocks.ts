import { notionFetch } from "./client";

interface RichText {
  plain_text: string;
  annotations: { bold: boolean; italic: boolean; code: boolean };
}

interface Block {
  id: string;
  type: string;
  heading_1?: { rich_text: RichText[] };
  heading_2?: { rich_text: RichText[] };
  heading_3?: { rich_text: RichText[] };
  paragraph?: { rich_text: RichText[] };
  bulleted_list_item?: { rich_text: RichText[] };
  numbered_list_item?: { rich_text: RichText[] };
  code?: { rich_text: RichText[]; language: string };
  quote?: { rich_text: RichText[] };
  divider?: object;
}

interface BlocksResponse {
  results: Block[];
}

function extractRichText(richText: RichText[]): string {
  return richText
    .map((t) => {
      const text = t.plain_text;
      if (t.annotations.code) return `\`${text}\``;
      if (t.annotations.bold) return `**${text}**`;
      if (t.annotations.italic) return `_${text}_`;
      return text;
    })
    .join("");
}

function blockToText(block: Block): string {
  switch (block.type) {
    case "heading_1":
      return `# ${extractRichText(block.heading_1!.rich_text)}\n`;
    case "heading_2":
      return `## ${extractRichText(block.heading_2!.rich_text)}\n`;
    case "heading_3":
      return `### ${extractRichText(block.heading_3!.rich_text)}\n`;
    case "paragraph":
      return extractRichText(block.paragraph!.rich_text);
    case "bulleted_list_item":
      return `• ${extractRichText(block.bulleted_list_item!.rich_text)}`;
    case "numbered_list_item":
      return `- ${extractRichText(block.numbered_list_item!.rich_text)}`;
    case "code":
      return `\`\`\`${block.code!.language}\n${extractRichText(block.code!.rich_text)}\n\`\`\``;
    case "quote":
      return `> ${extractRichText(block.quote!.rich_text)}`;
    case "divider":
      return "---";
    default:
      return "";
  }
}

export async function fetchPageContent(pageId: string): Promise<string> {
  const data = await notionFetch<BlocksResponse>(
    `/blocks/${pageId}/children?page_size=100`
  );

  const lines = data.results.map(blockToText).filter(Boolean);
  return lines.join("\n\n");
}
