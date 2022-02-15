import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import classes from "./Buttons.module.scss";

const tkDetailContainer = tk.page.productDetail.component.detailContainer;

export const Buttons: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.buttonsContainer}>
      <Button className={classes.buyButton} colorScheme="blue" isFullWidth>
        {t(tkDetailContainer.buttons.buy)}
      </Button>
      <Button
        className={classes.cartButton}
        colorScheme="blue"
        isFullWidth
        variant="outline"
      >
        {t(tkDetailContainer.buttons.addToCart)}
      </Button>
    </div>
  );
};
