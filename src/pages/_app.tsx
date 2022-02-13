import type { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { store } from "state/store";
import i18n from "translations/i18n";
import { FC } from "types/react";
import "styles/globals.scss";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <div className="body">
        <div className="responsiveContainer">
          <Component {...pageProps} />
        </div>
      </div>
    </I18nextProvider>
  </Provider>
);

export default MyApp;
