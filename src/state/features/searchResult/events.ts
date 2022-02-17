import { round } from "lodash-es";
import Router from "next/router";
import { paginationLimit } from "api/constants/general";
import { Category, Product } from "api/types";
import { Event } from "state/store";
import { getItemsUrl } from "utils/pages";
import { currentPageSelector } from "./selectors";
import { searchResultSlice } from "./slice";

const { actions } = searchResultSlice;

export const onCategoryDownload =
  (category: Category): Event =>
  async (dispatch) => {
    dispatch(actions.setCategory(category));
  };

export const onResultsDownloadSuccessful =
  (productList: Product[], totalPages: number): Event =>
  async (dispatch) => {
    const { offset } = Router.query;
    if (offset === undefined || Number(offset) === 0) {
      dispatch(actions.cleanPagination());
    } else {
      const newCurrentPage = round(Number(offset) / paginationLimit + 1);
      dispatch(actions.setCurrentPage(newCurrentPage));
    }
    dispatch(actions.setProductList(productList));
    dispatch(actions.setTotalPages(totalPages));
  };

const onPageChange =
  (isPreviousPage: boolean): Event =>
  async (_dispatch, getState) => {
    const currentPage = currentPageSelector(getState());
    const limit = paginationLimit;
    const q = Router.query.q as string;
    const category = Router.query.category as string;
    const offset = isPreviousPage
      ? (currentPage - 2) * limit
      : currentPage * limit;
    if (q !== undefined) {
      Router.push(getItemsUrl({ q, offset }));
    } else if (category !== undefined) {
      Router.push(getItemsUrl({ category, offset }));
    }
  };

export const onNextPageButtonClick = (): Event => async (dispatch) => {
  dispatch(onPageChange(false));
};

export const onPreviousPageButtonClick = (): Event => async (dispatch) => {
  dispatch(onPageChange(true));
};

export const onExitScreen = (): Event => async (dispatch) => {
  dispatch(actions.clean());
};
