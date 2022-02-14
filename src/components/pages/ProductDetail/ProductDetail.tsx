import { BreadCrumb } from "components/common/BreadCrumb/BreadCrumb";
import { FC } from "types/react";
import { getClassName } from "utils/components";
import { ProductCard } from "./ProductCard/ProductCard";
import classes from "./ProductDetail.module.scss";

export interface ProductDetailProps {
  className?: string;
}

export const ProductDetail: FC<ProductDetailProps> = ({ className }) => (
  <div className={getClassName(classes.container, className)}>
    <BreadCrumb />
    <ProductCard />
  </div>
);
