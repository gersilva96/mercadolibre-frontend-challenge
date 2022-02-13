import { NextApiRequest, NextApiResponse } from "next";
import { getCompleteProductUrl } from "api/constants/url";
import { Author, Category, Item, ItemParam, Product } from "api/types";
import { getProductFromMeliProduct } from "api/utils/items";
import { request } from "services/common";
import { t, tk } from "translations/i18n";
import { HTTPMethods } from "types/request";
import { handleError, isResponseError } from "utils/axiosHelper";

const tkApiCommon = tk.page.api.common;

export const meliApiResponsePayloadToItem = async (
  payload: any
): Promise<Item> => {
  const author: Author = {
    name: "Germán",
    lastName: "Silva"
  };
  const categories: Category[] = [];
  const meliItem: any = payload;
  const item: Product = await getProductFromMeliProduct(meliItem);
  return { author, categories, item };
};

const getProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== HTTPMethods.GET) {
    res.status(404).send({
      error: { code: 404, message: t(tkApiCommon.errors.methodNotFound) }
    });
    return;
  }
  const { id } = req.query as unknown as ItemParam;
  const response = await request({
    method: HTTPMethods.GET,
    url: getCompleteProductUrl(id)
  });
  if (isResponseError(response)) {
    res.send(handleError(response));
    return;
  }
  res.status(200).send(await meliApiResponsePayloadToItem(response.payload));
};

export default getProduct;
