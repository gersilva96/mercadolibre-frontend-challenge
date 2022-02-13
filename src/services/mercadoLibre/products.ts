import urlJoin from "url-join";
import { Item, Items, SearchItemsQueryParams } from "api/types";
import { request } from "services/common";
import { HTTPMethods, RequestResponse } from "types/request";
import { apiBaseUrl } from "./common";

const itemsBasePath = "items";

export const getItemsBySearch = (
  params: SearchItemsQueryParams
): RequestResponse<Items> => {
  const url = urlJoin(apiBaseUrl, itemsBasePath);
  return request({
    method: HTTPMethods.GET,
    url,
    params
  });
};

export const getItemById = (id: string): RequestResponse<Item> => {
  const url = urlJoin(apiBaseUrl, itemsBasePath, id);
  return request({
    method: HTTPMethods.GET,
    url
  });
};
