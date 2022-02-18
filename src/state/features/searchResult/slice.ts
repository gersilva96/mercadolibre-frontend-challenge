import { createSlice } from "@reduxjs/toolkit";
import { paginationLimit } from "api/constants/general";
import { Category, Product } from "api/types";
import { SliceNames } from "state/state";
import { Pagination } from "types/pagination";
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

const cleanPagination: Reducer = (draftState) => {
  draftState.pagination = initialState.pagination;
};

const setCategory: Reducer<Category> = (draftState, { payload }) => {
  draftState.category = payload;
};

const setCurrentPage: Reducer<number> = (draftState, { payload }) => {
  draftState.pagination.currentPage = payload;
};

const setTotalPages: Reducer<number> = (draftState, { payload }) => {
  draftState.pagination.totalPages = payload;
};

const setProductList: Reducer<Product[]> = (draftState, { payload }) => {
  draftState.products = payload;
};

export const searchResultSlice = createSlice({
  name: SliceNames.SearchResult,
  initialState,
  reducers: {
    clean,
    cleanPagination,
    setCategory,
    setCurrentPage,
    setTotalPages,
    setProductList
  }
});
