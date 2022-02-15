import { useTranslation } from "react-i18next";
import { Product } from "api/types";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import classes from "./ProductPrice.module.scss";

export interface ProductPriceProps {
  product: Product;
}

const tkDetailContainer = tk.page.productDetail.component.detailContainer;

export const ProductPrice: FC<ProductPriceProps> = ({ product }) => {
  const { t } = useTranslation();
  return (
    <div className={classes.productPriceContainer}>
      <span className={classes.productPriceAmount}>
        {t(tkDetailContainer.productPrice.priceString, {
          localValue: product.price.amount,
          formatParams: {
            localValue: {
              currency: product.price.currency,
              locale: t(tkDetailContainer.productPrice.locale),
              maximumFractionDigits: 0
            }
          }
        })}
      </span>
      {product.price.decimals !== 0 && (
        <span className={classes.productPriceDecimals}>
          {product.price.decimals.toLocaleString(
            t(tkDetailContainer.productPrice.locale),
            {
              minimumIntegerDigits: 2
            }
          )}
        </span>
      )}
    </div>
  );
};
