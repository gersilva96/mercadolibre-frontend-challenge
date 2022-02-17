import { useEffect } from "react";
import { isEmpty } from "lodash-es";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { paginationLimit } from "api/constants/general";
import { Category, Items } from "api/types";
import { NoResultPlaceholder } from "components/pages/SearchResult/NoResultPlaceholder/NoResultPlaceholder";
import { SearchResult } from "components/pages/SearchResult/SearchResult";
import { getCategoryById } from "services/mercadoLibre/categories";
import { getItemsBySearch } from "services/mercadoLibre/products";
import {
  onCategoryDownload,
  onResultsDownloadSuccessful
} from "state/features/searchResult/events";
import { productListSelector } from "state/features/searchResult/selectors";
import { useAppDispatch } from "state/store";
import { FC } from "types/react";
import { AppResponse } from "types/request";
import { isResponseSuccess } from "utils/axiosHelper";

interface SearchResultScreenProps {
  itemsResponse: AppResponse<Items>;
  categoryResponse?: AppResponse<Category>;
}

const SearchResultScreen: FC<SearchResultScreenProps> = ({
  itemsResponse,
  categoryResponse
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const productList = useSelector(productListSelector);
  useEffect(() => {
    if (isResponseSuccess(itemsResponse)) {
      const { payload } = itemsResponse;
      dispatch(onResultsDownloadSuccessful(payload.items, payload.total_pages));
    }
    if (categoryResponse && isResponseSuccess(categoryResponse)) {
      dispatch(onCategoryDownload(categoryResponse.payload));
    }
  }, [dispatch, itemsResponse, categoryResponse, router.query]);
  return isEmpty(productList) ? <NoResultPlaceholder /> : <SearchResult />;
};

export default SearchResultScreen;

export const getServerSideProps: GetServerSideProps<
  SearchResultScreenProps
> = async (context) => {
  const { q, limit, category, offset } = context.query;
  const itemsResponse = await getItemsBySearch({
    q: q as string,
    limit: limit ? Number(limit) : paginationLimit,
    category: category as string,
    offset: offset ? Number(offset) : undefined
  });
  if (category) {
    const categoryResponse = await getCategoryById(category as string);
    return { props: { itemsResponse, categoryResponse } };
  }
  return { props: { itemsResponse } };
};
