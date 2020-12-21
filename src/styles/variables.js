import { makeStyles } from "@material-ui/core/styles";

export const useVaiables = makeStyles((theme) => ({
  "@global": {
    ":root": {
      ...{
        "--primary": convertHexToRGB(theme.palette.primary.main),
        "--secondary": convertHexToRGB(theme.palette.secondary.main),
        "--secondary-dark": convertHexToRGB(theme.palette.secondary.dark),
        "--error": convertHexToRGB(theme.palette.error.main),
        "--body": convertHexToRGB(theme.palette.text.primary),
        "--bg-default": theme.palette.background.default,
        "--bg-paper": theme.palette.background.paper,
        "--text-body": theme.palette.text.primary,
        "--text-muted": theme.palette.text.secondary,
        "--text-disabled": theme.palette.text.disabled,
        "--text-hint": theme.palette.text.hint,
        "--font-family": theme.typography.fontFamily,
        "--topbar-height": "64px",
        "--sidebar-width": "260px",
      },
    },
  },
}));

const convertHexToRGB = (hex) => {
  // check if it's a rgba
  if (hex.match("rgba")) return hex.slice(5, 12).replace(/ /g, "");

  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");

    return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",");
  }
};
