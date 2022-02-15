import { useTranslation } from "react-i18next";
import { Product } from "api/types";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import classes from "./DescriptionContainer.module.scss";

export interface DescriptionContainerProps {
  className?: string;
  product: Product;
}

const tkDescriptionContainer =
  tk.page.productDetail.component.descriptionContainer;

export const DescriptionContainer: FC<DescriptionContainerProps> = ({
  className,
  product
}) => {
  const { t } = useTranslation();
  return (
    <div className={className}>
      <h2 className={classes.title}>{t(tkDescriptionContainer.title)}</h2>
      <pre className={classes.description}>{product.description}</pre>
    </div>
  );
};
