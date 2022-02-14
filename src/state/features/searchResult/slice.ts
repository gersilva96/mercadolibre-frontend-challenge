import { createSlice } from "@reduxjs/toolkit";
import { paginationLimit } from "api/constants/general";
import { Category, Pagination, Product } from "api/types";
import { SliceNames } from "state/state";
import { GenericReducer } from "types/react";

export interface SearchResultSlice {
  category?: Category;
  pagination: Pagination;
  products?: Product[];
}

type Reducer<T = void> = GenericReducer<SearchResultSlice, T>;

const initialState: SearchResultSlice = {
  pagination: {
    currentPage: 1,
    limit: paginationLimit,
    totalPages: 1
  }
};

const clean: Reducer = () => initialState;

const setCategory: Reducer<Category> = (draftState, { payload }) => {
  draftState.category = payload;
};

const setProductList: Reducer<Product[]> = (draftState, { payload }) => {
  draftState.products = payload;
};

export const searchResultSlice = createSlice({
  name: SliceNames.SearchResult,
  initialState,
  reducers: {
    clean,
    setCategory,
    setProductList
  }
});
