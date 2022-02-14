import { Author, Category } from "./common";
import { Product } from "./products";

export interface BaseItemOrItemsResult {
  author: Author;
  categories: Category[];
}

export interface Item extends BaseItemOrItemsResult {
  item: Product; // With sold_quantity and description fields
}

export interface Items extends BaseItemOrItemsResult {
  items: Product[];
}

export interface SearchItemsQueryParams {
  q?: string;
  limit?: number;
  category?: string;
  offset?: number;
}

export interface GenericIdParam {
  id: string;
}
