import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "grid",
  gap: "0",
});

export const heading1 = style({
  margin: "28px 0 12px",
  fontSize: "20px",
  fontWeight: 700,
  color: "#0f172a",
  letterSpacing: "-0.2px",
  selectors: {
    "&:first-child": { marginTop: 0 },
  },
});

export const heading2 = style({
  margin: "24px 0 10px",
  fontSize: "17px",
  fontWeight: 700,
  color: "#1e293b",
  selectors: {
    "&:first-child": { marginTop: 0 },
  },
});

export const heading3 = style({
  margin: "20px 0 8px",
  fontSize: "15px",
  fontWeight: 700,
  color: "#334155",
  selectors: {
    "&:first-child": { marginTop: 0 },
  },
});

export const paragraph = style({
  margin: "0 0 12px",
  fontSize: "15px",
  lineHeight: 1.8,
  color: "#334155",
  selectors: {
    "&:last-child": { marginBottom: 0 },
  },
});

export const bullet = style({
  display: "flex",
  gap: "10px",
  margin: "0 0 6px",
  fontSize: "15px",
  lineHeight: 1.7,
  color: "#334155",
});

export const bulletDot = style({
  flexShrink: 0,
  marginTop: "9px",
  width: "6px",
  height: "6px",
  borderRadius: "50%",
  backgroundColor: "#6366f1",
});

export const numbered = style({
  display: "flex",
  gap: "10px",
  margin: "0 0 6px",
  fontSize: "15px",
  lineHeight: 1.7,
  color: "#334155",
});

export const numberedIndex = style({
  flexShrink: 0,
  fontWeight: 600,
  color: "#6366f1",
  minWidth: "18px",
});

export const codeBlock = style({
  margin: "16px 0",
  borderRadius: "10px",
  overflow: "hidden",
  border: "1px solid #1e293b",
});

export const codeHeader = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "8px 16px",
  backgroundColor: "#1e293b",
  color: "#94a3b8",
  fontSize: "12px",
  fontFamily: "monospace",
});

export const codeDot = style({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
});

export const codeContent = style({
  padding: "16px 20px",
  backgroundColor: "#0f172a",
  color: "#e2e8f0",
  fontSize: "13px",
  lineHeight: 1.7,
  fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
  overflowX: "auto",
  whiteSpace: "pre",
  margin: 0,
});

export const quote = style({
  margin: "12px 0",
  padding: "12px 16px",
  borderLeft: "3px solid #6366f1",
  backgroundColor: "#f5f3ff",
  color: "#4c1d95",
  fontSize: "14px",
  lineHeight: 1.7,
  borderRadius: "0 8px 8px 0",
});

export const divider = style({
  border: "none",
  borderTop: "1px solid #e2e8f0",
  margin: "20px 0",
});

export const termCard = style({
  border: "1px solid #e0e7ff",
  borderRadius: "12px",
  padding: "16px 20px",
  backgroundColor: "#f5f3ff",
  margin: "8px 0",
  display: "grid",
  gap: "6px",
});

export const termName = style({
  fontWeight: 700,
  fontSize: "15px",
  color: "#4f46e5",
});

export const termDef = style({
  fontSize: "14px",
  color: "#374151",
  lineHeight: 1.7,
});

export const inlineCode = style({
  fontFamily: '"Fira Code", Consolas, monospace',
  fontSize: "13px",
  backgroundColor: "#f1f5f9",
  color: "#be185d",
  padding: "1px 6px",
  borderRadius: "4px",
});
