import Link from "next/link";
import { Product } from "api/types";
import { FC } from "types/react";
import { getItemUrl } from "utils/pages";
import classes from "./ProductTitle.module.scss";

export interface ProductTitleProps {
  product: Product;
}

export const ProductTitle: FC<ProductTitleProps> = ({ product }) => {
  const { id, title } = product;
  return (
    <Link href={getItemUrl(id)}>
      <a>
        <h2 className={classes.productTitle}>{title}</h2>
      </a>
    </Link>
  );
};
