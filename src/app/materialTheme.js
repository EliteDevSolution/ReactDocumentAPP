import { createMuiTheme } from "@material-ui/core/styles";

const buttonOption = {
  root: {
    textTransform: "none",
    fontWeight: 500,
  },
};

export const materialTheme = createMuiTheme({
  palette: {
    type: "light",
    // primary: {
    //   main: "#4d34cd",
    //   dark: "#26189e",
    //   contrastText: "rgba(255,255,255,0.87)",
    // },
    // secondary: {
    //   main: "#99ffcc",
    //   // main: "#22dbbe",
    //   dark: "#22dbbe",
    // },
    contrastThreshold: 3,
    tonalOffset: 0.1,
  },
  typography: {
    fontSize: 14,
    htmlFontSize: 16,
    useNextVariants: true,
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 14,
    },
  },
  overrides: {
    MuiButton: buttonOption,
    MuiFab: buttonOption,
    MuiCard: {
      root: {
        borderRadius: 8,
      },
    },
    MuiMenuItem: {
      root: {
        fontSize: "0.875rem",
      },
    },
    MuiDialog: {
      root: {
        borderRadius: 8,
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: 12,
        padding: "8px 12px",
      },
    },
  },
});
