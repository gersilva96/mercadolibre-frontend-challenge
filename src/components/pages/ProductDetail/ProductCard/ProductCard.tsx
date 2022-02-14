import { FC } from "types/react";
import { getClassName } from "utils/components";
import { DescriptionContainer } from "./DescriptionContainer/DescriptionContainer";
import { DetailContainer } from "./DetailContainer/DetailContainer";
import { PictureContainer } from "./PictureContainer/PictureContainer";
import classes from "./ProductCard.module.scss";

export interface ProductCardProps {
  className?: string;
}

export const ProductCard: FC<ProductCardProps> = ({ className }) => (
  <div className={getClassName(classes.container, className)}>
    <article className={classes.pictureDetailContainer}>
      <PictureContainer className={classes.pictureContainer} />
      <DetailContainer className={classes.detailContainer} />
    </article>
    <DescriptionContainer className={classes.descriptionContainer} />
  </div>
);
