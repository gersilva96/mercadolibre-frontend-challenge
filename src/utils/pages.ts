import { forEach } from "lodash-es";
import { SearchItemsQueryParams } from "api/types";
import { notUndefined } from "./types";

const baseItemsPath = "/items";

export const getItemUrl = (id: string): string => `${baseItemsPath}/${id}`;

export const getItemsUrl = (params?: SearchItemsQueryParams): string => {
  const queryStringArray: string[] = [];
  forEach(params, (value, key) => queryStringArray.push(`${key}=${value}`));
  const queryString = queryStringArray.filter(notUndefined).join("&");
  return `${baseItemsPath}?${queryString}`;
};
