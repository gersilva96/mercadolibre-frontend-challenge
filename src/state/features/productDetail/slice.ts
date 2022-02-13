import { createSlice } from "@reduxjs/toolkit";
import { Product } from "api/types";
import { SliceNames } from "state/state";
import { GenericReducer } from "types/react";

export interface ProductDetailSlice {
  product?: Product;
}

type Reducer<T = void> = GenericReducer<ProductDetailSlice, T>;

const initialState: ProductDetailSlice = {};

const clean: Reducer = () => initialState;

const setProduct: Reducer<Product> = (draftState, { payload }) => {
  draftState.product = payload;
};

export const productDetailSlice = createSlice({
  name: SliceNames.ProductDetail,
  initialState,
  reducers: {
    clean,
    setProduct
  }
});
