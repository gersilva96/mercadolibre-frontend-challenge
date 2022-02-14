import { Category, Product } from "api/types";
import { RootState, sliceSelector } from "state/store";
import { Optional } from "types/utils";
import { productDetailSlice } from "./slice";

const slice = sliceSelector(productDetailSlice);

export const productSelector = (state: RootState): Optional<Product> =>
  slice(state).product;

export const categoryListSelector = (state: RootState): Category[] =>
  slice(state).categoryList;
