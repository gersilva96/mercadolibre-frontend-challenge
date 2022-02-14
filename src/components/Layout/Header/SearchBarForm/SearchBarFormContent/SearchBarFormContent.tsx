import { IconButton } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaSearch as SearchIcon } from "react-icons/fa";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import { getClassName } from "utils/components";
import classes from "./SearchBarFormContent.module.scss";
import { SearchField } from "./SearchField/SearchField";

export interface SearchBarFormContent {
  className?: string;
}

const tkSearchInput = tk.page.home.component.searchInput;

export const SearchBarFormContent: FC<SearchBarFormContent> = ({
  className
}) => {
  const { t } = useTranslation();
  return (
    <div className={getClassName(classes.formContent, className)}>
      <SearchField />
      <IconButton
        className={classes.formButton}
        aria-label={t(tkSearchInput.ariaLabel)}
        title={t(tkSearchInput.ariaLabel)}
        type="submit"
        icon={<SearchIcon />}
      />
    </div>
  );
};
