import { productDetailSlice } from "./features/productDetail/slice";
import { searchResultSlice } from "./features/searchResult/slice";
import { SliceNames } from "./state";

export const reducers = {
  [SliceNames.ProductDetail]: productDetailSlice.reducer,
  [SliceNames.SearchResult]: searchResultSlice.reducer
};
