import { useTranslation } from "react-i18next";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import { getClassName } from "utils/components";
import classes from "./Footer.module.scss";

export interface FooterProps {
  className?: string;
}

const tkFooter = tk.common.component.footer;

export const Footer: FC<FooterProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={getClassName(classes.wrapper, className)}>
      <div className={classes.container}>
        <p className={classes.text}>{t(tkFooter.copyright)}</p>
        <p className={classes.text}>{t(tkFooter.address)}</p>
      </div>
    </div>
  );
};
