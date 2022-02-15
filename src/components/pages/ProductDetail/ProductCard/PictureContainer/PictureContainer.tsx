import { head, isString } from "lodash-es";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Product } from "api/types";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import { getClassName } from "utils/components";
import classes from "./PictureContainer.module.scss";

export interface PictureContainerProps {
  className?: string;
  product: Product;
}

const tkPictureContainer = tk.page.productDetail.component.pictureContainer;

export const PictureContainer: FC<PictureContainerProps> = ({
  className,
  product
}) => {
  const { t } = useTranslation();
  const pictureSrc = isString(product.picture)
    ? product.picture
    : head(product.picture);
  if (!pictureSrc) return null;
  return (
    <div className={getClassName(classes.container, className)}>
      <figure className={classes.figure}>
        <Image
          src={pictureSrc}
          alt={t(tkPictureContainer.imageAltText, {
            productName: product.title
          })}
          layout="fill"
          objectFit="contain"
          priority
        />
      </figure>
    </div>
  );
};
