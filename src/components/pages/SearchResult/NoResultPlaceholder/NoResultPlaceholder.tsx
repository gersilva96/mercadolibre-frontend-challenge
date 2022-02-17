import { Fragment } from "react";
import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";
import { SearchIcon } from "components/icons";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import classes from "./NoResultPlaceholder.module.scss";

const tkNoResultPlaceholder =
  tk.page.searchResult.component.noResultPlaceholder;
const tkCommon = tk.common;

export const NoResultPlaceholder: FC = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <NextSeo
        title={t(tkCommon.title)}
        description={t(tkCommon.description)}
      />
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <SearchIcon className={classes.icon} />
          <div className={classes.rightContent}>
            <h3 className={classes.noResultTitle}>
              {t(tkNoResultPlaceholder.title)}
            </h3>
            <ul>
              {Array.from({ length: 3 }).map((_, index) => (
                <li key={index}>{t(tkNoResultPlaceholder.items[index])}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
