import { Product } from "api/types";
import { FC } from "types/react";
import { getClassName } from "utils/components";
import { Buttons } from "./Buttons/Buttons";
import classes from "./DetailContainer.module.scss";
import { ProductFreeShipping } from "./ProductFreeShipping/ProductFreeShipping";
import { ProductPrice } from "./ProductPrice/ProductPrice";
import { ProductSubtitle } from "./ProductSubtitle/ProductSubtitle";
import { ProductTitle } from "./ProductTitle/ProductTitle";

export interface DetailContainerProps {
  className?: string;
  product: Product;
}

export const DetailContainer: FC<DetailContainerProps> = ({
  className,
  product
}) => (
  <div className={getClassName(classes.detailContainer, className)}>
    <ProductSubtitle product={product} />
    <ProductTitle product={product} />
    <ProductPrice product={product} />
    {product.free_shipping && <ProductFreeShipping />}
    <Buttons />
  </div>
);
