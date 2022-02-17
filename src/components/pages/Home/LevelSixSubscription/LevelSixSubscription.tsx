import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import { getClassName } from "utils/components";
import { Benefit } from "./Benefit/Benefit";
import classes from "./LevelSixSubscription.module.scss";

export interface LevelSixSubscriptionProps {
  className?: string;
}

const tkLevelSixSubscription = tk.page.home.component.levelSixSubscription;

export const LevelSixSubscription: FC<LevelSixSubscriptionProps> = ({
  className
}) => {
  const { t } = useTranslation();
  return (
    <div className={getClassName(classes.container, className)}>
      <div className={classes.title}>{t(tkLevelSixSubscription.title)}</div>
      <div className={classes.subtitle}>
        {t(tkLevelSixSubscription.subtitle)}
      </div>
      <div className={classes.benefitsContainer}>
        <Benefit
          altText={t(tkLevelSixSubscription.benefits.disney)}
          imgSrc="/benefits/d+.svg"
          text={t(tkLevelSixSubscription.benefits.disney)}
        />
        <Benefit
          altText={t(tkLevelSixSubscription.benefits.starPlus)}
          imgSrc="/benefits/star+.svg"
          text={t(tkLevelSixSubscription.benefits.starPlus)}
        />
        <Benefit
          altText={t(tkLevelSixSubscription.benefits.freeShipping)}
          imgSrc="/benefits/truck.png"
          text={t(tkLevelSixSubscription.benefits.freeShipping)}
        />
      </div>
      <div className={classes.subscribeButton}>
        <Button colorScheme="blue">
          {t(tkLevelSixSubscription.subscribeButton)}
        </Button>
      </div>
    </div>
  );
};
