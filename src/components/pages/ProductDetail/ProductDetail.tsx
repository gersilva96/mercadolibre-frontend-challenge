import { Fragment } from "react";
import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { BreadCrumb } from "components/common/BreadCrumb/BreadCrumb";
import { productSelector } from "state/features/productDetail/selectors";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import { ProductCard } from "./ProductCard/ProductCard";
import classes from "./ProductDetail.module.scss";

const tkProductDetail = tk.page.productDetail;

export const ProductDetail: FC = () => {
  const { t } = useTranslation();
  const product = useSelector(productSelector);
  return (
    <Fragment>
      <NextSeo
        title={t(tkProductDetail.title, { productName: product?.title })}
        description={t(tkProductDetail.description, {
          productName: product?.title
        })}
      />
      <div className={classes.container}>
        <BreadCrumb />
        <ProductCard />
      </div>
    </Fragment>
  );
};
