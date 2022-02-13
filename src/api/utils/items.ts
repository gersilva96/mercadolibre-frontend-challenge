import { getProductDescriptionUrl } from "api/constants/url";
import { Price, Product } from "api/types";
import { request } from "services/common";
import { HTTPMethods } from "types/request";
import { isResponseError } from "utils/axiosHelper";

export const getProductFromMeliProduct = async (
  meliProduct: any
): Promise<Product> => {
  const descriptionResponse = await request({
    method: HTTPMethods.GET,
    url: getProductDescriptionUrl(meliProduct.id)
  });
  const description = isResponseError(descriptionResponse)
    ? undefined
    : (descriptionResponse.payload.plain_text as string);
  const getPrice = (): Price => {
    const price = (meliProduct.price as number).toString();
    const [amount, decimals] = price.split(".").map((number) => Number(number));
    return {
      currency: meliProduct.currency_id,
      amount,
      decimals: decimals || 0
    };
  };
  return {
    id: meliProduct.id,
    title: meliProduct.title,
    price: getPrice(),
    picture: meliProduct.pictures
      ? meliProduct.pictures.map((picture: any) => picture.url)
      : meliProduct.thumbnail
      ? meliProduct.thumbnail
      : [],
    condition: meliProduct.condition,
    free_shipping: meliProduct.shipping.free_shipping,
    sold_quantity: meliProduct.sold_quantity,
    description
  };
};
