import { Category, Product } from "api/types";
import { RootState, sliceSelector } from "state/store";
import { Optional } from "types/utils";
import { searchResultSlice } from "./slice";

const slice = sliceSelector(searchResultSlice);

export const productListSelector = (state: RootState): Product[] =>
  slice(state).products ?? [];

export const categorySelector = (state: RootState): Optional<Category> =>
  slice(state).category;
