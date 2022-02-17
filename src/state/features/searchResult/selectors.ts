import { createSelector } from "@reduxjs/toolkit";
import { Category, Pagination, Product } from "api/types";
import { RootState, sliceSelector } from "state/store";
import { Optional } from "types/utils";
import { searchResultSlice } from "./slice";

const slice = sliceSelector(searchResultSlice);

const paginationSelector = (state: RootState): Pagination =>
  slice(state).pagination;

export const productListSelector = (state: RootState): Product[] =>
  slice(state).products ?? [];

export const categorySelector = (state: RootState): Optional<Category> =>
  slice(state).category;

export const currentPageSelector = createSelector(
  paginationSelector,
  (pagination) => pagination.currentPage
);

export const totalPagesSelector = createSelector(
  paginationSelector,
  (pagination) => pagination.totalPages
);
