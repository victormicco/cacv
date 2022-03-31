import { ColorModeScript, ThemeConfig } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import theme from "theme";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
