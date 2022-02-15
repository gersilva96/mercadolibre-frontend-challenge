import { useTranslation } from "react-i18next";
import { Product } from "api/types";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import classes from "./ProductPrice.module.scss";

export interface ProductPriceProps {
  product: Product;
}

const tkDetailContainer = tk.page.productDetail.component.detailContainer;

const toThousand = (n: number) =>
  n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

export const ProductPrice: FC<ProductPriceProps> = ({ product }) => {
  const { t } = useTranslation();
  return (
    <div className={classes.productPriceContainer}>
      <span className={classes.productPriceAmount}>
        {t(tkDetailContainer.productPrice.priceString, {
          amount: toThousand(product.price.amount)
        })}
      </span>
      {product.price.decimals !== 0 && (
        <span className={classes.productPriceDecimals}>
          {product.price.decimals.toLocaleString("es-AR", {
            minimumIntegerDigits: 2
          })}
        </span>
      )}
    </div>
  );
};
