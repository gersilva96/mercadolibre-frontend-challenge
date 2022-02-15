import { Product } from "api/types";
import { FC } from "types/react";
import classes from "./ProductTitle.module.scss";

export interface ProductTitleProps {
  product: Product;
}

export const ProductTitle: FC<ProductTitleProps> = ({ product }) => (
  <h1 className={classes.productTitle}>{product.title}</h1>
);
