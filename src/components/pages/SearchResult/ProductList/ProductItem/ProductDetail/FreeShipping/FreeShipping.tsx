import { useTranslation } from "react-i18next";
import { BsTruck as TruckIcon } from "react-icons/bs";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import classes from "./FreeShipping.module.scss";

const tkProductItem = tk.page.searchResult.component.productItem;

export const FreeShipping: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.freeShippingContainer}>
      <TruckIcon className={classes.freeShippingIcon} />
      <span className={classes.freeShippingText}>
        {t(tkProductItem.freeShipping)}
      </span>
    </div>
  );
};
