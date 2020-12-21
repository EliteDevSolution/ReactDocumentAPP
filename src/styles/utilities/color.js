import { makeStyles } from "@material-ui/core/styles";

export const colorStyles = makeStyles(({ palette, ...theme }) => ({
  "@global": {
    ".bg-primary": { background: "rgba(var(--primary), 1) !important" },
    ".bg-secondary": { background: "rgba(var(--secondary), 1) !important" },
    ".bg-error": {
      background: "rgba(var(--error), 1) !important",
      fallbacks: [{ background: "rgba(var(--error), 1) !important" }],
      color: "white !important",
    },
    ".bg-white": { background: "#fff !important", color: "inherit" },
    ".bg-light-white": {
      background: "rgba(255, 255, 255, 0.3) !important",
      color: "inherit",
    },
    ".bg-transparent": { background: "transparent !important" },
    ".bg-default": { background: "var(--bg-default) !important" },
    ".bg-paper": { background: "var(--bg-paper)" },
    ".bg-dark": { background: "#222833", color: "rgba(255, 255, 255, 0.87)" },
    ".bg-light-gray": { background: "#CED4DA !important" },
    ".bg-light-dark": { background: "#212121", color: "white" },
    ".bg-light-primary": { background: "rgba(var(--primary), 0.1) !important" },
    ".bg-light-secondary": {
      background: "rgba(var(--secondary), 0.1) !important",
    },
    ".bg-dark-secondary": {
      background: "rgba(var(--secondary-dark), 1) !important",
    },
    ".bg-light-error": { background: "rgba(var(--error), 0.1) !important" },
    ".bg-transperant": { background: "transparent !important" },
    ".text-white": { color: "rgba(255, 255, 255, 0.87) !important" },
    ".text-black": { color: "rgba(0, 0, 0, 0.87) !important" },
    ".text-inherit": { color: "inherit !important" },
    ".text-muted-white": { color: "rgba(255, 255, 255, 0.54) !important" },
    ".text-muted": { color: "var(--text-muted) !important" },
    ".text-hint": { color: "var(--text-hint) !important" },
    ".text-gray": { color: "rgba(0, 0, 0, 0.74) !important" },
    ".text-primary": { color: "rgba(var(--primary), 1) !important" },
    ".text-secondary": { color: "rgba(var(--secondary), 1) !important" },
    ".text-dark-secondary": {
      color: "rgba(var(--secondary-dark), 1) !important",
    },
    ".text-light-gray": { color: "#CED4DA !important" },
    ".text-error": { color: "rgba(var(--error), 1) !important" },
    ".border-color-white": { borderColor: "#ffffff !important" },
    ".border-color-default": { borderColor: "var(--bg-default) !important" },
    ".border-color-paper": { borderColor: "var(--bg-paper) !important" },
  },
}));
