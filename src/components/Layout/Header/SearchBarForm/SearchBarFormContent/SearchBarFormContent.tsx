import { useEffect } from "react";
import { isString } from "lodash-es";
import { useRouter } from "next/router";
import { useController, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IoSearchOutline as SearchIcon } from "react-icons/io5";
import {
  searchBarFormKeys,
  SearchBarFormValues
} from "components/Layout/Header/SearchBarForm/searchBarFormConfig";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import { getClassName } from "utils/components";
import classes from "./SearchBarFormContent.module.scss";

export interface SearchBarFormContent {
  className?: string;
}

const tkSearchInput = tk.page.home.component.searchInput;

export const SearchBarFormContent: FC<SearchBarFormContent> = ({
  className
}) => {
  const router = useRouter();
  const { t } = useTranslation();
  const { setValue } = useFormContext<SearchBarFormValues>();
  const {
    field: { name, onBlur, onChange, ref, value }
  } = useController({ name: searchBarFormKeys.q });
  useEffect(() => {
    setValue("q", isString(router.query.q) ? router.query.q : "");
  }, [setValue, router.query.q]);
  return (
    <div className={getClassName(classes.formContent, className)}>
      <input
        className={getClassName(classes.input, className)}
        type="text"
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
        value={value}
        placeholder={t(tkSearchInput.placeholder)}
      />
      <button
        className={classes.formButton}
        aria-label={t(tkSearchInput.ariaLabel)}
        title={t(tkSearchInput.ariaLabel)}
        type="submit"
      >
        <SearchIcon className={classes.formButtonIcon} />
      </button>
    </div>
  );
};
