import { NextApiRequest, NextApiResponse } from "next";
import { Author, Category, Item, GenericIdParam, Product } from "api/types";
import {
  getCategoryListFromProduct,
  getProductFromMeliProduct
} from "api/utils/items";
import { getCompleteProductUrl } from "api/utils/url";
import { request } from "services/common";
import { t, tk } from "translations/i18n";
import { HTTPMethods } from "types/request";
import { handleError, isResponseError } from "utils/axiosHelper";

const tkApiCommon = tk.page.api.common;

export const meliApiResponsePayloadToItem = async (
  payload: any
): Promise<Item> => {
  const meliItem: any = payload;
  const author: Author = {
    name: "Germán",
    lastName: "Silva"
  };
  const item: Product = await getProductFromMeliProduct(meliItem, true);
  const categories: Category[] = await getCategoryListFromProduct(meliItem);
  return { author, categories, item };
};

const getProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== HTTPMethods.GET) {
    res.status(404).send({
      error: { code: 404, message: t(tkApiCommon.errors.methodNotFound) }
    });
    return;
  }
  const { id } = req.query as unknown as GenericIdParam;
  const response = await request({
    method: HTTPMethods.GET,
    url: getCompleteProductUrl(id)
  });
  if (isResponseError(response)) {
    res.send(handleError(response));
    return;
  }
  const product = await meliApiResponsePayloadToItem(response.payload);
  res.status(200).send(product);
};

export default getProduct;
