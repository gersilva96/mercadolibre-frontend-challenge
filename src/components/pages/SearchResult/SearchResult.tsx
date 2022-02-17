import { Fragment } from "react";
import { isString, startCase } from "lodash-es";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { categorySelector } from "state/features/searchResult/selectors";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import { Pagination } from "./Pagination/Pagination";
import { ProductList } from "./ProductList/ProductList";
import classes from "./SearchResult.module.scss";

const tkSearchResult = tk.page.searchResult;

export const SearchResult: FC = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const category = useSelector(categorySelector);
  const getTitle = (): string => {
    if (isString(router.query.q)) return router.query.q;
    return category?.name ?? "";
  };
  const searchQuery =
    startCase(router.query.q as string) || startCase(category?.name);
  return (
    <Fragment>
      <NextSeo
        title={t(tkSearchResult.title, { searchQuery })}
        description={t(tkSearchResult.description, { searchQuery })}
      />
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>{startCase(getTitle())}</h1>
      </div>
      <section className={classes.productListContainer}>
        <ProductList />
      </section>
      <Pagination />
    </Fragment>
  );
};
