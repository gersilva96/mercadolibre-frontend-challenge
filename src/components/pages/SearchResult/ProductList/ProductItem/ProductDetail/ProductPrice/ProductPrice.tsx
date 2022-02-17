import { useTranslation } from "react-i18next";
import { Product } from "api/types";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import classes from "./ProductPrice.module.scss";

export interface ProductPriceProps {
  product: Product;
}

const tkProductPrice = tk.common.productPrice;

export const ProductPrice: FC<ProductPriceProps> = ({ product }) => {
  const { t } = useTranslation();
  const { price } = product;
  return (
    <span className={classes.productPrice}>
      {t(tkProductPrice.priceString, {
        localValue: price.amount,
        formatParams: {
          localValue: {
            currency: price.currency,
            locale: t(tkProductPrice.locale),
            maximumFractionDigits: 0
          }
        }
      })}
    </span>
  );
};
