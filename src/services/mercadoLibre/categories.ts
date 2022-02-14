import urlJoin from "url-join";
import { Category } from "api/types";
import { request } from "services/common";
import { HTTPMethods, RequestResponse } from "types/request";
import { apiBaseUrl } from "./common";

const categoriesBasePath = "categories";

export const getCategoryById = (id: string): RequestResponse<Category> => {
  const url = urlJoin(apiBaseUrl, categoriesBasePath, id);
  return request({
    method: HTTPMethods.GET,
    url
  });
};
