import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import { getClassName } from "utils/components";
import classes from "./Header.module.scss";
import { SearchBarForm } from "./SearchBarForm/SearchBarForm";

export interface HeaderProps {
  className?: string;
}

const tkheader = tk.common.component.header;

export const Header: FC<HeaderProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <header className={getClassName(classes.header, className)}>
      <div className={classes.headerContent}>
        <Link href={"/"}>
          <a
            aria-label={t(tkheader.mainLogo.navText)}
            className={classes.navLogo}
          >
            {t(tkheader.mainLogo.navText)}
          </a>
        </Link>
        <SearchBarForm className={classes.searchBar} />
        <div className={classes.exhibitorImage}>
          <Image
            src="/exhibitor.webp"
            height={39}
            width={340}
            unoptimized
            alt={t(tkheader.exhibitorImage.altText)}
            title={t(tkheader.exhibitorImage.altText)}
          />
        </div>
      </div>
    </header>
  );
};
