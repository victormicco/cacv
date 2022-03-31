import { theme, Theme } from "@chakra-ui/react";

const newTheme: Theme = {
  ...theme,
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
};

export default newTheme;
