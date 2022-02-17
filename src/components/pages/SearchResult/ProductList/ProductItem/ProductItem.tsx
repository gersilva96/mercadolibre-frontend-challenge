import { Product } from "api/types";
import { FC } from "types/react";
import { getClassName } from "utils/components";
import { ProductDetail } from "./ProductDetail/ProductDetail";
import classes from "./ProductItem.module.scss";
import { ProductPicture } from "./ProductPicture/ProductPicture";
import { SellerAddress } from "./SellerAddress/SellerAddress";

export interface ProductItemProps {
  className?: string;
  product: Product;
}

export const ProductItem: FC<ProductItemProps> = ({ className, product }) => {
  const { seller_address } = product;
  return (
    <li className={getClassName(classes.productItem, className)}>
      <ProductPicture product={product} />
      <ProductDetail product={product} />
      {seller_address?.state && <SellerAddress product={product} />}
    </li>
  );
};
