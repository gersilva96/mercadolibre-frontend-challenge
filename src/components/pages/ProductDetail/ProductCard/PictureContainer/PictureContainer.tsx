import { head, isString } from "lodash-es";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { productSelector } from "state/features/productDetail/selectors";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import { getClassName } from "utils/components";
import classes from "./PictureContainer.module.scss";

export interface PictureContainerProps {
  className?: string;
}

const tkPictureContainer = tk.page.productDetail.component.pictureContainer;

export const PictureContainer: FC<PictureContainerProps> = ({ className }) => {
  const { t } = useTranslation();
  const product = useSelector(productSelector);
  const pictureSrc = isString(product?.picture)
    ? product?.picture
    : head(product?.picture);
  if (!pictureSrc) return null;
  return (
    <div className={getClassName(classes.container, className)}>
      <figure className={classes.figure}>
        <Image
          src={pictureSrc}
          alt={t(tkPictureContainer.imageAltText, {
            productName: product?.title
          })}
          layout="fill"
          objectFit="contain"
          priority
        />
      </figure>
    </div>
  );
};
