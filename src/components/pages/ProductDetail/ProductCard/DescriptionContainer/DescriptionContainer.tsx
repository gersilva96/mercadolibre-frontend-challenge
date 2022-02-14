import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { productSelector } from "state/features/productDetail/selectors";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import classes from "./DescriptionContainer.module.scss";

export interface DescriptionContainerProps {
  className?: string;
}

const tkDescriptionContainer =
  tk.page.productDetail.component.descriptionContainer;

export const DescriptionContainer: FC<DescriptionContainerProps> = ({
  className
}) => {
  const { t } = useTranslation();
  const product = useSelector(productSelector);
  return (
    <div className={className}>
      <h2 className={classes.title}>{t(tkDescriptionContainer.title)}</h2>
      <pre className={classes.description}>{product?.description}</pre>
    </div>
  );
};
