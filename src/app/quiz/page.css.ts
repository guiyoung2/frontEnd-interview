import { style } from "@vanilla-extract/css";

export const main = style({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
  padding: "3rem 1rem",
  maxWidth: "72rem",
  margin: "0 auto",
});

export const hero = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  textAlign: "center",
});

export const badge = style({
  display: "inline-block",
  width: "fit-content",
  margin: "0 auto",
  padding: "0.5rem 1rem",
  borderRadius: "9999px",
  backgroundColor: "#e0f2fe",
  color: "#0369a1",
  fontSize: "0.875rem",
  fontWeight: "600",
});

export const title = style({
  fontSize: "2.5rem",
  fontWeight: "700",
  lineHeight: "1.2",
  color: "#1e293b",
  margin: "0",
});

export const titleAccent = style({
  color: "#0ea5e9",
});

export const description = style({
  fontSize: "1.125rem",
  color: "#64748b",
  lineHeight: "1.6",
  margin: "0",
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
  gap: "1.5rem",
});

export const categoryCard = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "1.5rem",
  borderRadius: "0.75rem",
  border: "1px solid #e2e8f0",
  backgroundColor: "#ffffff",
  transition: "all 200ms ease-in-out",
  ":hover": {
    borderColor: "#cbd5e1",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    transform: "translateY(-2px)",
  },
});

export const categoryEmoji = style({
  fontSize: "2.5rem",
  lineHeight: "1",
});

export const categoryLabel = style({
  fontSize: "1.125rem",
  fontWeight: "600",
  color: "#1e293b",
});

export const categoryDesc = style({
  fontSize: "0.875rem",
  color: "#64748b",
  lineHeight: "1.5",
  flexGrow: 1,
});

export const buttonGroup = style({
  display: "flex",
  gap: "0.75rem",
  marginTop: "0.5rem",
});

export const button = style({
  flex: 1,
  padding: "0.625rem 1rem",
  borderRadius: "0.5rem",
  border: "none",
  backgroundColor: "#0ea5e9",
  color: "#ffffff",
  fontSize: "0.875rem",
  fontWeight: "600",
  cursor: "pointer",
  textDecoration: "none",
  textAlign: "center",
  transition: "background-color 150ms ease-in-out",
  ":hover": {
    backgroundColor: "#0284c7",
  },
});
