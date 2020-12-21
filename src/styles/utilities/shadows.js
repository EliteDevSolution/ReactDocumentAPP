import { makeStyles } from "@material-ui/core/styles";

export const shadowStyles = makeStyles(({ palette, ...theme }) => ({
  "@global": {
    ".box-shadow-none": { boxShadow: "none !important" },
    ...generateShadows(theme),
  },
}));

const generateShadows = (theme) => {
  let classList = {};

  theme.shadows.forEach((shadow, ind) => {
    classList[`.elevation-z${ind}`] = {
      boxShadow: `${shadow} !important`,
    };
  });

  return classList;
};
