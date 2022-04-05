import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      "::-webkit-scrollbar": {
        width: "18px",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#7f7f7f",
        border: "6px solid rgba(0, 0, 0, 0)",
        WebkitBorderRadius: "100px",
        backgroundClip: "padding-box",
      },
    },
  },
});

export default theme;
