import { useTranslation } from "react-i18next";
import { Product, ProductCondition } from "api/types";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import classes from "./ProductSubtitle.module.scss";

export interface ProductSubtitleProps {
  product: Product;
}

const tkDetailContainer = tk.page.productDetail.component.detailContainer;

export const ProductSubtitle: FC<ProductSubtitleProps> = ({ product }) => {
  const { t } = useTranslation();
  return (
    <p className={classes.productSubtitle}>
      <span>{t(tkDetailContainer.productSubtitle[product.condition])}</span>
      {product.sold_quantity !== undefined &&
        product.condition === ProductCondition.New && (
          <span>
            {` | ${t(tkDetailContainer.productSubtitle.soldQuantityText, {
              quantity: product.sold_quantity
            })}`}
          </span>
        )}
    </p>
  );
};
