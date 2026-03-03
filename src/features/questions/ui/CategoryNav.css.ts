import { style } from "@vanilla-extract/css";

export const nav = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "6px",
});

export const link = style({
  display: "inline-block",
  padding: "7px 16px",
  borderRadius: "999px",
  border: "1px solid #e2e8f0",
  backgroundColor: "#ffffff",
  color: "#475569",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: 500,
  transition: "all 0.15s",
  selectors: {
    "&:hover": {
      borderColor: "#a5b4fc",
      color: "#6366f1",
      backgroundColor: "#eef2ff",
    },
  },
});

export const active = style({
  backgroundColor: "#6366f1",
  borderColor: "#6366f1",
  color: "#ffffff",
  selectors: {
    "&:hover": {
      backgroundColor: "#4f46e5",
      borderColor: "#4f46e5",
      color: "#ffffff",
    },
  },
});
