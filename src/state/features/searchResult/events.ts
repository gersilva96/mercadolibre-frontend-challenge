import { Category, Product } from "api/types";
import { Event } from "state/store";
import { searchResultSlice } from "./slice";

const { actions } = searchResultSlice;

export const onCategoryDownload =
  (category: Category): Event =>
  async (dispatch) => {
    dispatch(actions.setCategory(category));
  };

export const onResultsDownloadSuccessful =
  (productList: Product[]): Event =>
  async (dispatch) => {
    dispatch(actions.setProductList(productList));
  };

export const onExitScreen = (): Event => async (dispatch) => {
  dispatch(actions.clean());
};
