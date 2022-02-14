import { getKeyObj } from "utils/object";

export interface SearchBarFormValues {
  q: string;
}

export const searchBarFormInitialValues: SearchBarFormValues = {
  q: ""
};

export const searchBarFormKeys = getKeyObj(searchBarFormInitialValues);
