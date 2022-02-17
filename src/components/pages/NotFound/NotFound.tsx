import { Fragment } from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { NotFoundIcon } from "components/icons";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import classes from "./NotFound.module.scss";

const tkCommon = tk.common;

export const NotFound: FC = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <NextSeo
        title={t(tkCommon.title)}
        description={t(tkCommon.description)}
      />
      <div className={classes.container}>
        <NotFoundIcon />
        <p className={classes.title}>{t(tkCommon.component.notFound.title)}</p>
        <Link href="/">
          <a className={classes.subtitle}>
            {t(tkCommon.component.notFound.subtitle)}
          </a>
        </Link>
      </div>
    </Fragment>
  );
};
