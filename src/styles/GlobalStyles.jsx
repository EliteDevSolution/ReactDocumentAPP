import { useVaiables } from "./variables";
import { colorStyles } from "./utilities/color";
import { spacingStyles } from "./utilities/spacing";
import { shadowStyles } from "./utilities/shadows";
import { borderStyles } from "./utilities/border";
import { typographyStyles } from "./utilities/typography";
import { positioningStyles } from "./utilities/positionings";
import { commonStyles } from "./utilities/common";
import { animationStyles } from "./utilities/animations";
import { layoutStyles } from "./utilities/layout";

const GlobalStyles = ({ children }) => {
  useVaiables();
  colorStyles();
  spacingStyles();
  shadowStyles();
  borderStyles();
  typographyStyles();
  positioningStyles();
  commonStyles();
  animationStyles();
  layoutStyles();

  return children;
};

export default GlobalStyles;
