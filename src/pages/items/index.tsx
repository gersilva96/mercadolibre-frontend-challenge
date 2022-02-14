import { useEffect } from "react";
import { startCase } from "lodash-es";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { paginationLimit } from "api/constants/general";
import { Category, Items } from "api/types";
import { getCategoryById } from "services/mercadoLibre/categories";
import { getItemsBySearch } from "services/mercadoLibre/products";
import {
  onCategoryDownload,
  onExitScreen,
  onResultsDownloadSuccessful
} from "state/features/searchResult/events";
import {
  categorySelector,
  productListSelector
} from "state/features/searchResult/selectors";
import { useAppDispatch } from "state/store";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import { AppResponse } from "types/request";
import { isResponseSuccess } from "utils/axiosHelper";
import { getItemUrl } from "utils/pages";

interface SearchResultProps {
  itemsResponse: AppResponse<Items>;
  categoryResponse?: AppResponse<Category>;
}

const tkItems = tk.page.items;

const SearchResult: FC<SearchResultProps> = ({
  itemsResponse,
  categoryResponse
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const productList = useSelector(productListSelector);
  useEffect(() => {
    if (isResponseSuccess(itemsResponse)) {
      dispatch(onResultsDownloadSuccessful(itemsResponse.payload.items));
    }
    if (categoryResponse && isResponseSuccess(categoryResponse)) {
      dispatch(onCategoryDownload(categoryResponse.payload));
    }
    return () => {
      dispatch(onExitScreen());
    };
  }, [dispatch, itemsResponse, categoryResponse, router.query]);
  const category = useSelector(categorySelector);
  const searchQuery =
    startCase(router.query.q as string) || startCase(category?.name);
  return (
    <>
      <NextSeo
        title={t(tkItems.title, { searchQuery })}
        description={t(tkItems.description, { searchQuery })}
      />
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <Link href={getItemUrl(product.id)}>
              <a>{product.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchResult;

export const getServerSideProps: GetServerSideProps = async (context) => {
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
