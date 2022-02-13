import { RootState, sliceSelector } from "state/store";
import { productDetailSlice } from "./slice";

const slice = sliceSelector(productDetailSlice);

export const productSelector = (state: RootState) => slice(state).product;
