import { Product } from "api/types";
import { FC } from "types/react";
import { getClassName } from "utils/components";
import classes from "./SellerAddress.module.scss";

export interface SellerAddressProps {
  className?: string;
  product: Product;
}

export const SellerAddress: FC<SellerAddressProps> = ({
  className,
  product
}) => {
  const { seller_address } = product;
  return (
    <div className={getClassName(classes.sellerAddress, className)}>
      <span>{seller_address?.state}</span>
    </div>
  );
};
