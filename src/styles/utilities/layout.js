import { makeStyles } from "@material-ui/core/styles";

export const layoutStyles = makeStyles(({ palette, ...theme }) => ({
  "@global": {
    ".section": {
      padding: "2.5rem 0px",
      [theme.breakpoints.down("xs")]: {
        // padding: "2rem 0px"
      },
    },
    ".container": {
      padding: "0px 1rem",
      maxWidth: "1170px",
      margin: "0 auto",
    },
  },
}));
