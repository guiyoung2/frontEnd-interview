import { style } from "@vanilla-extract/css";

export const body = style({
  margin: 0,
  backgroundColor: "#f1f5f9",
  color: "#111827",
  minHeight: "100vh",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
});

export const header = style({
  position: "sticky",
  top: 0,
  zIndex: 10,
  backgroundColor: "#0f172a",
  boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
});

export const headerInner = style({
  maxWidth: "1024px",
  margin: "0 auto",
  padding: "0 24px",
  height: "56px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

export const brand = style({
  fontWeight: 800,
  fontSize: "17px",
  color: "#ffffff",
  textDecoration: "none",
  letterSpacing: "-0.3px",
  marginRight: "12px",
  selectors: {
    "&:hover": {
      color: "#a5b4fc",
    },
  },
});

export const divider = style({
  width: "1px",
  height: "18px",
  backgroundColor: "#334155",
  flexShrink: 0,
});

export const nav = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  overflowX: "auto",
});

export const navLink = style({
  display: "inline-block",
  padding: "5px 12px",
  borderRadius: "6px",
  color: "#94a3b8",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: 500,
  whiteSpace: "nowrap",
  transition: "background 0.15s, color 0.15s",
  selectors: {
    "&:hover": {
      backgroundColor: "#1e293b",
      color: "#e2e8f0",
    },
  },
});

export const content = style({
  paddingBottom: "64px",
});

export const loadingFallback = style({
  maxWidth: "1024px",
  margin: "0 auto",
  padding: "24px",
  color: "#94a3b8",
  fontSize: "14px",
});
