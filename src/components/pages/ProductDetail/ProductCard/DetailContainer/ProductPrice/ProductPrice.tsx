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
  return (
    <div className={classes.productPriceContainer}>
      <span className={classes.productPriceAmount}>
        {t(tkProductPrice.priceString, {
          localValue: product.price.amount,
          formatParams: {
            localValue: {
              currency: product.price.currency,
              locale: t(tkProductPrice.locale),
              maximumFractionDigits: 0
            }
          }
        })}
      </span>
      {product.price.decimals !== 0 && (
        <span className={classes.productPriceDecimals}>
          {product.price.decimals.toLocaleString(t(tkProductPrice.locale), {
            minimumIntegerDigits: 2
          })}
        </span>
      )}
    </div>
  );
};
