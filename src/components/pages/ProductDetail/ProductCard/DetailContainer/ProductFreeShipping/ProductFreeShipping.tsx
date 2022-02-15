import { useTranslation } from "react-i18next";
import { BsTruck as TruckIcon } from "react-icons/bs";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import classes from "./ProductFreeShipping.module.scss";

const tkDetailContainer = tk.page.productDetail.component.detailContainer;

export const ProductFreeShipping: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.freeShippingContainer}>
      <TruckIcon className={classes.freeShippingIcon} />
      <span className={classes.freeShippingText}>
        {t(tkDetailContainer.freeShipping)}
      </span>
    </div>
  );
};
