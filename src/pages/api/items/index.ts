import { NextApiRequest, NextApiResponse } from "next";
import { searchUrl } from "api/constants/url";
import {
  Author,
  Category,
  Items,
  Product,
  SearchItemsQueryParams
} from "api/types";
import { getProductFromMeliProduct } from "api/utils/items";
import { request } from "services/common";
import { t, tk } from "translations/i18n";
import { HTTPMethods } from "types/request";
import { handleError, isResponseError } from "utils/axiosHelper";

const tkApiCommon = tk.page.api.common;

const meliApiResponsePayloadToItems = async (payload: any): Promise<Items> => {
  const author: Author = {
    name: "Germán",
    lastName: "Silva"
  };
  const categories: Category[] = [];
  const meliItems: any[] = payload.results;
  const items: Product[] = await Promise.all(
    meliItems.map(async (item) => getProductFromMeliProduct(item))
  );
  return { author, categories, items };
};

const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== HTTPMethods.GET) {
    res.status(404).send({
      error: { code: 404, message: t(tkApiCommon.errors.methodNotFound) }
    });
    return;
  }
  const params = req.query as unknown as SearchItemsQueryParams;
  const response = await request({
    method: HTTPMethods.GET,
    url: searchUrl,
    params
  });
  if (isResponseError(response)) {
    res.status(response.error.code ?? 502).send(handleError(response));
    return;
  }
  res.status(200).send(await meliApiResponsePayloadToItems(response.payload));
};

export default getProducts;
