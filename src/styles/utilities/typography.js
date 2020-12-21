import { makeStyles } from "@material-ui/core/styles";

export const typographyStyles = makeStyles(({ palette, ...theme }) => ({
  "@global": {
    ".h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6": {
      margin: "0 0 0.5rem",
      lineHeight: "1.2",
      color: "inherit",
    },
    ".h1, h1": { fontSize: "2rem" },
    ".h2, h2": { fontSize: "1.75rem" },
    ".h3, h3": { fontSize: "1.5rem" },
    ".h4, h4": { fontSize: "1.25rem" },
    ".h5, h5": { fontSize: "1rem" },
    ".h6, h6": { fontSize: "0.875rem" },
    a: { textDecoration: "none", color: "inherit" },
    ".capitalize": { textTransform: "capitalize !important" },
    ".uppercase": { textTransform: "uppercase !important" },
    ".lowercase": { textTransform: "lowercase !important" },
    ".font-normal": { fontWeight: "normal !important" },
    ".font-light": { fontWeight: "300 !important" },
    ".font-medium": { fontWeight: "500 !important" },
    ".font-semibold": { fontWeight: "600 !important" },
    ".font-bold": { fontWeight: "700 !important" },
    ".text-small": { fontSize: "0.8125rem !important" },
    ".letter-spacing-6": { letterSpacing: 6 },
    ".whitespace-pre-wrap": { whiteSpace: "pre-wrap", wordBreak: "break-word" },
    ".whitespace-pre": { whiteSpace: "pre" },
    ".whitespace-no-wrap": { whiteSpace: "nowrap" },
    ...renderTextSize(),
  },
}));

const renderTextSize = (
  sizeList = [
    11,
    12,
    13,
    14,
    15,
    16,
    18,
    20,
    24,
    28,
    32,
    36,
    40,
    44,
    48,
    60,
    80,
  ],
  unit = "px"
) => {
  let classObject = {};

  sizeList.forEach((size) => {
    classObject[`.text-${size}`] = {
      fontSize: `${size}${unit} !important`,
    };
  });

  return classObject;
};
