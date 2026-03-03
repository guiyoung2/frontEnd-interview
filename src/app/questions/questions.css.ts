import { style } from "@vanilla-extract/css";

export const container = style({
  maxWidth: "840px",
  margin: "0 auto",
  padding: "40px 24px 64px",
  display: "grid",
  gap: "24px",
});

export const header = style({
  display: "grid",
  gap: "8px",
  paddingBottom: "24px",
  borderBottom: "1px solid #e2e8f0",
});

export const title = style({
  margin: 0,
  fontSize: "30px",
  fontWeight: 800,
  color: "#0f172a",
  letterSpacing: "-0.3px",
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
  padding: "28px 32px",
  backgroundColor: "#ffffff",
  color: "#1e293b",
  whiteSpace: "pre-wrap",
  lineHeight: 1.8,
  fontSize: "15px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
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

export const backLink = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  padding: "8px 16px",
  borderRadius: "8px",
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
