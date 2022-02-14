import { useEffect } from "react";
import { Input } from "@chakra-ui/react";
import { isString } from "lodash-es";
import { useRouter } from "next/router";
import { useController, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  searchBarFormKeys,
  SearchBarFormValues
} from "components/Layout/Header/SearchBarForm/searchBarFormConfig";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import { getClassName } from "utils/components";
import classes from "./SearchField.module.scss";

export interface SearchFieldProps {
  className?: string;
}

const tkSearchInput = tk.page.home.component.searchInput;

export const SearchField: FC<SearchFieldProps> = ({ className }) => {
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
    <Input
      className={getClassName(classes.input, className)}
      type="text"
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      ref={ref}
      value={value}
      placeholder={t(tkSearchInput.placeholder)}
    />
  );
};
