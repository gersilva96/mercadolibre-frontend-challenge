import { find, isString } from "lodash-es";
import { Category, Price, Product } from "api/types";
import {
  getCompleteCategoryUrl,
  getCompleteProductDescriptionUrl
} from "api/utils/url";
import { request } from "services/common";
import { HTTPMethods } from "types/request";
import { isResponseError } from "utils/axiosHelper";

export const getProductFromMeliProduct = async (
  meliProduct: any,
  withDescription: boolean,
  itemPictureList?: any[]
): Promise<Product> => {
  let description = "";
  if (withDescription) {
    const descriptionResponse = await request({
      method: HTTPMethods.GET,
      url: getCompleteProductDescriptionUrl(meliProduct.id)
    });
    description = isResponseError(descriptionResponse)
      ? ""
      : (descriptionResponse.payload.plain_text as string);
  }
  const getPrice = (): Price => {
    const price = (meliProduct.price as number).toString();
    const [amount, decimals] = price.split(".").map((number) => Number(number));
    return {
      currency: meliProduct.currency_id,
      amount,
      decimals: decimals || 0
    };
  };
  type Picture = string | string[];
  const getPicture = (): Picture => {
    const { picture } = find(
      itemPictureList,
      (itemPicture) => itemPicture.id === meliProduct.id
    );
    if (isString(picture)) return picture;
    return picture.map((pic: any) => pic.secure_url);
  };
  return {
    id: meliProduct.id,
    title: meliProduct.title,
    price: getPrice(),
    picture: getPicture(),
    condition: meliProduct.condition,
    seller_address: {
      city: meliProduct.seller_address.city.name,
      state: meliProduct.seller_address.state.name,
      country: meliProduct.seller_address.country.name
    },
    free_shipping: meliProduct.shipping.free_shipping,
    sold_quantity: meliProduct.sold_quantity,
    description
  };
};

export const getCategoryListFromProduct = async (
  meliProduct: any
): Promise<Category[]> => {
  const categoryId = meliProduct.category_id as string;
  const categoryResponse = await request({
    method: HTTPMethods.GET,
    url: getCompleteCategoryUrl(categoryId)
  });
  const categoryArray: Category[] = isResponseError(categoryResponse)
    ? []
    : categoryResponse.payload.path_from_root.map(
        (category: Category) => category
      );
  return categoryArray;
};
