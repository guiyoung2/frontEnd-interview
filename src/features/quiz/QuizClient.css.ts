import { style, styleVariants } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  maxWidth: "48rem",
  margin: "0 auto",
  padding: "2rem",
});

export const progress = style({
  fontSize: "0.875rem",
  color: "#64748b",
  marginBottom: "0.5rem",
});

export const questionSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

export const questionTitle = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  lineHeight: "1.5",
  color: "#1e293b",
});

export const optionsContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
});

export const optionButtonBase = style({
  padding: "1rem",
  textAlign: "left",
  borderRadius: "0.5rem",
  border: "2px solid #e2e8f0",
  backgroundColor: "#ffffff",
  cursor: "pointer",
  fontSize: "0.95rem",
  lineHeight: "1.5",
  transition: "all 150ms ease-in-out",
  ":hover": {
    borderColor: "#cbd5e1",
    backgroundColor: "#f8fafc",
  },
});

export const optionButton = styleVariants({
  default: [optionButtonBase],
  correct: [
    optionButtonBase,
    {
      borderColor: "#22c55e",
      backgroundColor: "#dcfce7",
      color: "#15803d",
      cursor: "default",
      ":hover": {
        borderColor: "#22c55e",
        backgroundColor: "#dcfce7",
      },
    },
  ],
  wrong: [
    optionButtonBase,
    {
      borderColor: "#ef4444",
      backgroundColor: "#fee2e2",
      color: "#991b1b",
      cursor: "default",
      ":hover": {
        borderColor: "#ef4444",
        backgroundColor: "#fee2e2",
      },
    },
  ],
});

export const revealButton = style({
  padding: "0.875rem 1.5rem",
  borderRadius: "0.5rem",
  border: "none",
  backgroundColor: "#3b82f6",
  color: "#ffffff",
  cursor: "pointer",
  fontSize: "0.95rem",
  fontWeight: "500",
  transition: "background-color 150ms ease-in-out",
  ":hover": {
    backgroundColor: "#2563eb",
  },
});

export const answerSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "1.5rem",
  borderRadius: "0.5rem",
  backgroundColor: "#f0f9ff",
  borderLeft: "4px solid #0284c7",
});

export const answerLabel = style({
  fontSize: "0.875rem",
  fontWeight: "600",
  color: "#0369a1",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
});

export const nextButton = style({
  padding: "0.875rem 1.5rem",
  borderRadius: "0.5rem",
  border: "none",
  backgroundColor: "#0ea5e9",
  color: "#ffffff",
  cursor: "pointer",
  fontSize: "0.95rem",
  fontWeight: "500",
  transition: "background-color 150ms ease-in-out",
  ":hover": {
    backgroundColor: "#0284c7",
  },
  ":disabled": {
    backgroundColor: "#cbd5e1",
    cursor: "not-allowed",
  },
});

export const completedSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  textAlign: "center",
  padding: "3rem 1.5rem",
});

export const completedTitle = style({
  fontSize: "2rem",
  fontWeight: "700",
  color: "#1e293b",
});

export const completedMessage = style({
  fontSize: "1rem",
  color: "#64748b",
  lineHeight: "1.6",
});

export const restartButton = style({
  padding: "0.875rem 1.5rem",
  borderRadius: "0.5rem",
  border: "none",
  backgroundColor: "#10b981",
  color: "#ffffff",
  cursor: "pointer",
  fontSize: "0.95rem",
  fontWeight: "500",
  transition: "background-color 150ms ease-in-out",
  ":hover": {
    backgroundColor: "#059669",
  },
});

export const buttonGroup = style({
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  marginTop: "1rem",
});
