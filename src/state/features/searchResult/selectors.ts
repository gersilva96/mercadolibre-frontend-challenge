import { RootState, sliceSelector } from "state/store";
import { searchResultSlice } from "./slice";

const slice = sliceSelector(searchResultSlice);

export const productListSelector = (state: RootState) =>
  slice(state).products ?? [];
