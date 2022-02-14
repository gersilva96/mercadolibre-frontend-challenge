import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { Layout } from "components/Layout/Layout";
import { store } from "state/store";
import i18n from "translations/i18n";
import { FC } from "types/react";
import "styles/globals.scss";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </I18nextProvider>
  </Provider>
);

export default MyApp;
