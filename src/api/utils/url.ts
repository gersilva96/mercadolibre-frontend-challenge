import urlJoin from "url-join";
import { CONFIG } from "src/config";

export const baseUrl = CONFIG.SERVICES.MELI.URL as string;

export const searchUrl = urlJoin(baseUrl, "sites", "MLA", "search");

export const getCompleteProductUrl = (productId: string) =>
  urlJoin(baseUrl, "items", productId);

export const getCompleteProductDescriptionUrl = (productId: string) =>
  urlJoin(baseUrl, "items", productId, "description");

export const getCompleteCategoryUrl = (categoryId: string) =>
  urlJoin(baseUrl, "categories", categoryId);
