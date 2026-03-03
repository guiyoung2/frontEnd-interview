import { style } from "@vanilla-extract/css";

export const card = style({
  border: "1px solid #e2e8f0",
  borderRadius: "14px",
  padding: "20px 24px",
  display: "grid",
  gap: "10px",
  backgroundColor: "#ffffff",
  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  transition: "transform 0.15s, box-shadow 0.15s, border-color 0.15s",
  selectors: {
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 20px rgba(99,102,241,0.1)",
      borderColor: "#c7d2fe",
    },
  },
});

export const titleLink = style({
  color: "#1e293b",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: "17px",
  lineHeight: 1.4,
  selectors: {
    "&:hover": {
      color: "#6366f1",
    },
  },
});

export const summary = style({
  margin: 0,
  color: "#64748b",
  fontSize: "14px",
  lineHeight: 1.6,
});

export const tags = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "6px",
});

export const tag = style({
  display: "inline-block",
  padding: "3px 10px",
  borderRadius: "999px",
  backgroundColor: "#f1f5f9",
  color: "#6366f1",
  fontSize: "12px",
  fontWeight: 500,
});
