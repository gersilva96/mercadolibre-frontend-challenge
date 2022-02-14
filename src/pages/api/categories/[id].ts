import { NextApiRequest, NextApiResponse } from "next";
import { GenericIdParam } from "api/types";
import { getCompleteCategoryUrl } from "api/utils/url";
import { request } from "services/common";
import { t, tk } from "translations/i18n";
import { HTTPMethods } from "types/request";
import { handleError, isResponseError } from "utils/axiosHelper";

const tkApiCommon = tk.page.api.common;

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
    url: getCompleteCategoryUrl(id)
  });
  if (isResponseError(response)) {
    res.send(handleError(response));
    return;
  }
  res.status(200).send(response.payload);
};

export default getProduct;
