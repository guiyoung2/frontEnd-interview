import * as styles from "./AnswerRenderer.css";

interface AnswerRendererProps {
  content: string;
}

type Block =
  | { type: "h1"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "bullet"; text: string }
  | { type: "numbered"; index: number; text: string }
  | { type: "code"; lang: string; lines: string[] }
  | { type: "quote"; text: string }
  | { type: "divider" }
  | { type: "term"; name: string; def: string }
  | { type: "paragraph"; text: string };

// **굵은 텍스트**로 시작하는 단락을 용어 블록으로 파싱
function parseTerm(line: string): { name: string; def: string } | null {
  const match = line.match(/^\*\*(.+?)\*\*[:：]?\s*(.*)/);
  if (!match) return null;
  return { name: match[1].trim(), def: match[2].trim() };
}

// **...** inline bold → <strong>, `...` → inline code
function renderInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={i} className={styles.inlineCode}>{part.slice(1, -1)}</code>;
    }
    return part;
  });
}

function parse(content: string): Block[] {
  const lines = content.split("\n");
  const blocks: Block[] = [];
  let i = 0;
  let numberedIndex = 1;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("# ")) {
      blocks.push({ type: "h1", text: line.slice(2) });
      numberedIndex = 1;
    } else if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.slice(3) });
      numberedIndex = 1;
    } else if (line.startsWith("### ")) {
      blocks.push({ type: "h3", text: line.slice(4) });
      numberedIndex = 1;
    } else if (line.startsWith("• ")) {
      blocks.push({ type: "bullet", text: line.slice(2) });
    } else if (line.startsWith("- ")) {
      blocks.push({ type: "numbered", index: numberedIndex++, text: line.slice(2) });
    } else if (line.startsWith("```")) {
      const lang = line.slice(3).trim() || "code";
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      blocks.push({ type: "code", lang, lines: codeLines });
    } else if (line.startsWith("> ")) {
      blocks.push({ type: "quote", text: line.slice(2) });
    } else if (line === "---") {
      blocks.push({ type: "divider" });
    } else if (line.trim() !== "") {
      // **용어**: 정의 패턴 감지
      const term = parseTerm(line);
      if (term) {
        // 다음 줄이 정의 본문이면 병합
        if (!term.def && i + 1 < lines.length && !lines[i + 1].startsWith("**") && lines[i + 1].trim()) {
          i++;
          blocks.push({ type: "term", name: term.name, def: lines[i].trim() });
        } else {
          blocks.push({ type: "term", name: term.name, def: term.def });
        }
      } else {
        blocks.push({ type: "paragraph", text: line });
      }
    }

    i++;
  }

  return blocks;
}

const LANG_COLORS: Record<string, string> = {
  js: "#f7df1e",
  javascript: "#f7df1e",
  ts: "#3178c6",
  typescript: "#3178c6",
  jsx: "#61dafb",
  tsx: "#61dafb",
  css: "#1572b6",
  html: "#e34f26",
  code: "#94a3b8",
};

export function AnswerRenderer({ content }: AnswerRendererProps) {
  const blocks = parse(content);

  return (
    <div className={styles.wrapper}>
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "h1":
            return <h2 key={idx} className={styles.heading1}>{block.text}</h2>;
          case "h2":
            return <h3 key={idx} className={styles.heading2}>{block.text}</h3>;
          case "h3":
            return <h4 key={idx} className={styles.heading3}>{block.text}</h4>;
          case "bullet":
            return (
              <div key={idx} className={styles.bullet}>
                <span className={styles.bulletDot} />
                <span>{renderInline(block.text)}</span>
              </div>
            );
          case "numbered":
            return (
              <div key={idx} className={styles.numbered}>
                <span className={styles.numberedIndex}>{block.index}.</span>
                <span>{renderInline(block.text)}</span>
              </div>
            );
          case "code":
            return (
              <div key={idx} className={styles.codeBlock}>
                <div className={styles.codeHeader}>
                  <span
                    className={styles.codeDot}
                    style={{ backgroundColor: LANG_COLORS[block.lang] ?? "#94a3b8" }}
                  />
                  <span>{block.lang}</span>
                </div>
                <pre className={styles.codeContent}>
                  {block.lines.join("\n")}
                </pre>
              </div>
            );
          case "quote":
            return <blockquote key={idx} className={styles.quote}>{block.text}</blockquote>;
          case "divider":
            return <hr key={idx} className={styles.divider} />;
          case "term":
            return (
              <div key={idx} className={styles.termCard}>
                <span className={styles.termName}>📌 {block.name}</span>
                {block.def && (
                  <span className={styles.termDef}>{renderInline(block.def)}</span>
                )}
              </div>
            );
          default:
            return <p key={idx} className={styles.paragraph}>{renderInline(block.text)}</p>;
        }
      })}
    </div>
  );
}
