import Image from "next/image";
import { FC } from "types/react";
import { getClassName } from "utils/components";
import classes from "./Benefit.module.scss";

export interface BenefitProps {
  altText: string;
  className?: string;
  imgSrc: string;
  text: string;
}

export const Benefit: FC<BenefitProps> = ({
  altText,
  className,
  imgSrc,
  text
}) => (
  <div className={getClassName(classes.container, className)}>
    <div className={classes.imageContainer}>
      <Image
        className={classes.image}
        src={imgSrc}
        height={72}
        width={72}
        alt={altText}
      />
    </div>
    <p className={classes.text}>{text}</p>
  </div>
);
