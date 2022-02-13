import { createSlice } from "@reduxjs/toolkit";
import { Product } from "api/types";
import { SliceNames } from "state/state";
import { GenericReducer } from "types/react";

export interface SearchResultSlice {
  products?: Product[];
}

type Reducer<T = void> = GenericReducer<SearchResultSlice, T>;

const initialState: SearchResultSlice = {};

const clean: Reducer = () => initialState;

const setProductList: Reducer<Product[]> = (draftState, { payload }) => {
  draftState.products = payload;
};

export const searchResultSlice = createSlice({
  name: SliceNames.SearchResult,
  initialState,
  reducers: {
    clean,
    setProductList
  }
});
