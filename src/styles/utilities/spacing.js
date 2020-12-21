import { makeStyles } from "@material-ui/core/styles";

export const spacingStyles = makeStyles(({ palette, ...theme }) => ({
  "@global": {
    ".m-auto": { margin: "auto !important" },
    ".mx-auto": {
      marginLeft: "auto !important",
      marginRight: "auto !important",
    },
    ".my-auto": {
      marginTop: "auto !important",
      marginBottom: "auto !important",
    },
    ".w-full": { width: "100%" },
    ".w-full-screen": { width: "100vw" },
    ".max-w-500": { maxWidth: 500 },
    ".max-w-600": { maxWidth: 600 },
    ".max-w-700": { maxWidth: 700 },
    ".max-w-800": { maxWidth: 800 },
    ".max-w-900": { maxWidth: 900 },
    ".max-w-1000": { maxWidth: 1000 },
    ".h-600": { height: 600 },
    ".h-full": { height: "100% !important" },
    ".h-full-screen": { height: "100vh" },
    ".min-h-full-screen": { minHeight: "100vh" },
    ...generateMarginPadding(0, 25, 0.25, "rem"),
    ...generateMarginPadding(1, 16, 1, "px"),
    ...generateMarginPadding(-25, -1, 0.25, "rem"),
    ...generateMarginPadding(-16, -1, 1, "px"),
    ...generateHeightWidh(),
  },
}));

const generateMarginPadding = (
  start = 0,
  end = 25,
  increament = 0.25,
  unit = "rem"
) => {
  let classObject = {};

  for (let i = start; i <= end; i++) {
    classObject[`.m-${i}${unit === "px" ? "px" : ""}`] = {
      margin: `${i * increament}${unit} !important`,
    };
    classObject[`.mt-${i}${unit === "px" ? "px" : ""}`] = {
      marginTop: `${i * increament}${unit} !important`,
    };
    classObject[`.mb-${i}${unit === "px" ? "px" : ""}`] = {
      marginBottom: `${i * increament}${unit} !important`,
    };
    classObject[`.mr-${i}${unit === "px" ? "px" : ""}`] = {
      marginRight: `${i * increament}${unit} !important`,
    };
    classObject[`.ml-${i}${unit === "px" ? "px" : ""}`] = {
      marginLeft: `${i * increament}${unit} !important`,
    };
    classObject[`.mx-${i}${unit === "px" ? "px" : ""}`] = {
      marginLeft: `${i * increament}${unit} !important`,
      marginRight: `${i * increament}${unit} !important`,
    };
    classObject[`.my-${i}${unit === "px" ? "px" : ""}`] = {
      marginTop: `${i * increament}${unit} !important`,
      marginBottom: `${i * increament}${unit} !important`,
    };

    classObject[`.p-${i}${unit === "px" ? "px" : ""}`] = {
      padding: `${i * increament}${unit} !important`,
    };
    classObject[`.pt-${i}${unit === "px" ? "px" : ""}`] = {
      paddingTop: `${i * increament}${unit} !important`,
    };
    classObject[`.pb-${i}${unit === "px" ? "px" : ""}`] = {
      paddingBottom: `${i * increament}${unit} !important`,
    };
    classObject[`.pr-${i}${unit === "px" ? "px" : ""}`] = {
      paddingRight: `${i * increament}${unit} !important`,
    };
    classObject[`.pl-${i}${unit === "px" ? "px" : ""}`] = {
      paddingLeft: `${i * increament}${unit} !important`,
    };
    classObject[`.px-${i}${unit === "px" ? "px" : ""}`] = {
      paddingLeft: `${i * increament}${unit} !important`,
      paddingRight: `${i * increament}${unit} !important`,
    };
    classObject[`.py-${i}${unit === "px" ? "px" : ""}`] = {
      paddingTop: `${i * increament}${unit} !important`,
      paddingBottom: `${i * increament}${unit} !important`,
    };
  }

  return classObject;
};

const generateHeightWidh = (
  start = 0,
  end = 400,
  increament = 4,
  unit = "px"
) => {
  let classObject = {};

  for (let i = start; i <= end; i += increament) {
    classObject[`.w-${i}`] = {
      width: `${i}${unit} !important`,
    };
    classObject[`.min-w-${i}`] = {
      minWidth: `${i}${unit} !important`,
    };
    classObject[`.max-w-${i}`] = {
      maxWidth: `${i}${unit} !important`,
    };
    classObject[`.h-${i}`] = {
      height: `${i}${unit} !important`,
    };
    classObject[`.min-h-${i}`] = {
      minHeight: `${i}${unit} !important`,
    };
    classObject[`.max-h-${i}`] = {
      maxHeight: `${i}${unit} !important`,
    };
  }

  return classObject;
};
