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
import { Optional } from "types/utils";
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
  const itemsResponse = await getItemsBySearch({
    q: context.query.q as Optional<string>,
    limit: context.query.limit ? Number(context.query.limit) : paginationLimit,
    category: context.query.category as Optional<string>,
    offset: context.query.offset ? Number(context.query.offset) : undefined
  });
  if (context.query.category) {
    const categoryResponse = await getCategoryById(
      context.query.category as string
    );
    return { props: { itemsResponse, categoryResponse } };
  }
  const props: SearchResultProps = {
    itemsResponse
  };
  return { props };
};
