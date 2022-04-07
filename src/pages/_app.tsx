import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme";
import { Provider } from "urql";
import { client, ssrCache } from "lib/urql";

export default function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <Provider value={client}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
