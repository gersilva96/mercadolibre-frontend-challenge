import { Product } from "api/types";
import { Event } from "state/store";
import { productDetailSlice } from "./slice";

const { actions } = productDetailSlice;

export const onProductDownloadSuccessful =
  (product: Product): Event =>
  async (dispatch) => {
    dispatch(actions.setProduct(product));
  };

export const onExitScreen = (): Event => async (dispatch) => {
  dispatch(actions.clean());
};
