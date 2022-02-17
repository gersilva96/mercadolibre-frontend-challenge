import { useSelector } from "react-redux";
import { productListSelector } from "state/features/searchResult/selectors";
import { FC } from "types/react";
import { getClassName } from "utils/components";
import { ProductItem } from "./ProductItem/ProductItem";
import classes from "./ProductList.module.scss";

export interface ProductListProps {
  className?: string;
}

export const ProductList: FC<ProductListProps> = ({ className }) => {
  const productList = useSelector(productListSelector);
  return (
    <ul className={getClassName(classes.productList, className)}>
      {productList.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};
