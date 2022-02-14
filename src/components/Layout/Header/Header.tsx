/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { MercadoLibreLogoWithText } from "components/logos/MercadoLibreLogoWithText";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import { getClassName } from "utils/components";
import classes from "./Header.module.scss";
import { SearchBarForm } from "./SearchBarForm/SearchBarForm";

export interface HeaderProps {
  className?: string;
}

const tkheader = tk.page.home.component.header;

export const Header: FC<HeaderProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <header className={getClassName(classes.header, className)}>
      <div className={classes.headerContent}>
        <Link href={"/"}>
          <a aria-label={t(tkheader.mainLogo.ariaLabel)}>
            <MercadoLibreLogoWithText className={classes.mercadoLibreLogo} />
          </a>
        </Link>
        <SearchBarForm className={classes.searchBar} />
        <img
          className={classes.exhibitorImage}
          src="https://http2.mlstatic.com/D_NQ_877425-MLA47306668299_082021-OO.webp"
          alt={t(tkheader.exhibitorImage.altText)}
          title={t(tkheader.exhibitorImage.altText)}
        />
      </div>
    </header>
  );
};
