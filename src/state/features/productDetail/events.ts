import { Item } from "api/types";
import { Event } from "state/store";
import { productDetailSlice } from "./slice";

const { actions } = productDetailSlice;

export const onItemDownloadSuccessful =
  (item: Item): Event =>
  async (dispatch) => {
    dispatch(actions.setProduct(item.item));
    dispatch(actions.setCategoryList(item.categories));
  };

export const onExitScreen = (): Event => async (dispatch) => {
  dispatch(actions.clean());
};
