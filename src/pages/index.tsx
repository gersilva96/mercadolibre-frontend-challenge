import { Fragment } from "react";
import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";
import { tk } from "translations/i18n";
import { FC } from "types/react";

const tkHome = tk.page.home;
const tkCommon = tk.common;

const HomeScreen: FC = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <NextSeo
        title={t(tkCommon.title)}
        description={t(tkCommon.description)}
      />
      <p>{t(tkHome.component.searchInput.placeholder)}</p>
    </Fragment>
  );
};

export default HomeScreen;
