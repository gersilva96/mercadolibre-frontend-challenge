import Image from "next/image";
import { FC } from "types/react";
import { getClassName } from "utils/components";
import classes from "./PaymentItem.module.scss";

export interface PaymentItemProps {
  altText: string;
  className?: string;
  imgSrc: string;
  text: string;
}

export const PaymentItem: FC<PaymentItemProps> = ({
  altText,
  className,
  imgSrc,
  text
}) => (
  <div className={getClassName(classes.container, className)}>
    <Image
      className={classes.image}
      src={imgSrc}
      height={48}
      width={48}
      alt={altText}
    />
    <p className={classes.text}>{text}</p>
  </div>
);
