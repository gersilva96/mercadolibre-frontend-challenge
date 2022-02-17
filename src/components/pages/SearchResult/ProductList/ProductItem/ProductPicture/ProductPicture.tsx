/* eslint-disable @next/next/no-img-element */
import { head, isString } from "lodash-es";
import Link from "next/link";
import { Product } from "api/types";
import { FC } from "types/react";
import { getItemUrl } from "utils/pages";
import classes from "./ProductPicture.module.scss";

export interface ProducPictureProps {
  product: Product;
}

export const ProductPicture: FC<ProducPictureProps> = ({ product }) => {
  const { id, picture, title } = product;
  return (
    <Link href={getItemUrl(id)}>
      <a>
        <div className={classes.pictureContainer}>
          <img
            className={classes.picture}
            src={isString(picture) ? picture : head(picture) ?? ""}
            alt={title}
            title={title}
          />
        </div>
      </a>
    </Link>
  );
};
