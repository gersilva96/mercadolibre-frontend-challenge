import { useSelector } from "react-redux";
import { productSelector } from "state/features/productDetail/selectors";
import { FC } from "types/react";
import { getClassName } from "utils/components";
import { DescriptionContainer } from "./DescriptionContainer/DescriptionContainer";
import { DetailContainer } from "./DetailContainer/DetailContainer";
import { PictureContainer } from "./PictureContainer/PictureContainer";
import classes from "./ProductCard.module.scss";

export interface ProductCardProps {
  className?: string;
}

export const ProductCard: FC<ProductCardProps> = ({ className }) => {
  const product = useSelector(productSelector);
  if (!product) return null;
  return (
    <div className={getClassName(classes.container, className)}>
      <article className={classes.pictureDetailContainer}>
        <PictureContainer
          className={classes.pictureContainer}
          product={product}
        />
        <DetailContainer
          className={classes.detailContainer}
          product={product}
        />
      </article>
      <DescriptionContainer
        className={classes.descriptionContainer}
        product={product}
      />
    </div>
  );
};
