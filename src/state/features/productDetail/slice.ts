import { createSlice } from "@reduxjs/toolkit";
import { Category, Product } from "api/types";
import { SliceNames } from "state/state";
import { GenericReducer } from "types/react";

export interface ProductDetailSlice {
  product?: Product;
  categoryList: Category[];
}

type Reducer<T = void> = GenericReducer<ProductDetailSlice, T>;

const initialState: ProductDetailSlice = {
  categoryList: []
};

const clean: Reducer = () => initialState;

const setProduct: Reducer<Product> = (draftState, { payload }) => {
  draftState.product = payload;
};

const setCategoryList: Reducer<Category[]> = (draftState, { payload }) => {
  draftState.categoryList = payload;
};

export const productDetailSlice = createSlice({
  name: SliceNames.ProductDetail,
  initialState,
  reducers: {
    clean,
    setProduct,
    setCategoryList
  }
});
