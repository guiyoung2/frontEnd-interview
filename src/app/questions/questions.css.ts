import { style } from "@vanilla-extract/css";

export const container = style({
  maxWidth: "840px",
  margin: "0 auto",
  padding: "40px 24px 64px",
  display: "grid",
  gap: "28px",
});

export const header = style({
  display: "grid",
  gap: "10px",
  paddingBottom: "24px",
  borderBottom: "1px solid #e2e8f0",
});

export const title = style({
  margin: 0,
  fontSize: "28px",
  fontWeight: 800,
  color: "#0f172a",
  letterSpacing: "-0.3px",
  lineHeight: 1.3,
});

export const description = style({
  margin: 0,
  color: "#64748b",
  fontSize: "15px",
  lineHeight: 1.6,
});

export const list = style({
  display: "grid",
  gap: "12px",
});

export const empty = style({
  border: "2px dashed #e2e8f0",
  borderRadius: "16px",
  padding: "48px 24px",
  textAlign: "center",
  color: "#94a3b8",
  fontSize: "15px",
  backgroundColor: "#f8fafc",
});

export const emptyIcon = style({
  fontSize: "36px",
  display: "block",
  marginBottom: "12px",
});

export const answerBox = style({
  border: "1px solid #e2e8f0",
  borderRadius: "16px",
  padding: "32px",
  backgroundColor: "#ffffff",
  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
});

export const meta = style({
  display: "flex",
  gap: "8px",
  alignItems: "center",
  flexWrap: "wrap",
  margin: 0,
  color: "#94a3b8",
  fontSize: "13px",
});

export const metaDot = style({
  width: "3px",
  height: "3px",
  borderRadius: "50%",
  backgroundColor: "#cbd5e1",
  display: "inline-block",
});

export const tags = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "6px",
});

export const tag = style({
  display: "inline-block",
  padding: "4px 12px",
  borderRadius: "999px",
  backgroundColor: "#ede9fe",
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 500,
});

export const backLink = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  padding: "10px 20px",
  borderRadius: "10px",
  backgroundColor: "#f1f5f9",
  color: "#475569",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 500,
  width: "fit-content",
  transition: "background 0.15s, color 0.15s",
  selectors: {
    "&:hover": {
      backgroundColor: "#e2e8f0",
      color: "#1e293b",
    },
  },
});
