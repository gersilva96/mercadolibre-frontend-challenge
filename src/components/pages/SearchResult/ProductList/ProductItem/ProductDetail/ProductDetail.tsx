import { Product } from "api/types";
import { FC } from "types/react";
import { getClassName } from "utils/components";
import { FreeShipping } from "./FreeShipping/FreeShipping";
import classes from "./ProductDetail.module.scss";
import { ProductPrice } from "./ProductPrice/ProductPrice";
import { ProductTitle } from "./ProductTitle/ProductTitle";

export interface ProductDetailProps {
  className?: string;
  product: Product;
}

export const ProductDetail: FC<ProductDetailProps> = ({
  className,
  product
}) => {
  const { free_shipping } = product;
  return (
    <div className={getClassName(classes.detailContainer, className)}>
      <ProductTitle product={product} />
      <ProductPrice product={product} />
      {free_shipping && <FreeShipping />}
    </div>
  );
};
