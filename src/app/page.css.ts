import { style } from "@vanilla-extract/css";

export const main = style({
  maxWidth: "1024px",
  margin: "0 auto",
  padding: "0 24px 64px",
});

export const hero = style({
  padding: "64px 0 48px",
  borderBottom: "1px solid #e2e8f0",
  marginBottom: "40px",
});

export const badge = style({
  display: "inline-block",
  padding: "4px 12px",
  borderRadius: "999px",
  backgroundColor: "#ede9fe",
  color: "#6d28d9",
  fontSize: "13px",
  fontWeight: 600,
  marginBottom: "16px",
});

export const title = style({
  margin: "0 0 16px",
  fontSize: "42px",
  fontWeight: 800,
  color: "#0f172a",
  lineHeight: 1.2,
  letterSpacing: "-0.5px",
});

export const titleAccent = style({
  color: "#6366f1",
});

export const description = style({
  margin: 0,
  fontSize: "18px",
  color: "#475569",
  lineHeight: 1.6,
  maxWidth: "480px",
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "16px",
});

export const categoryCard = style({
  display: "block",
  padding: "24px",
  borderRadius: "16px",
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  textDecoration: "none",
  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
  transition: "transform 0.15s, box-shadow 0.15s, border-color 0.15s",
  selectors: {
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 24px rgba(99,102,241,0.12)",
      borderColor: "#a5b4fc",
    },
  },
});

export const categoryEmoji = style({
  fontSize: "28px",
  marginBottom: "12px",
  display: "block",
});

export const categoryLabel = style({
  display: "block",
  fontWeight: 700,
  fontSize: "17px",
  color: "#1e293b",
  marginBottom: "6px",
});

export const categoryDesc = style({
  display: "block",
  fontSize: "13px",
  color: "#64748b",
  lineHeight: 1.5,
});
