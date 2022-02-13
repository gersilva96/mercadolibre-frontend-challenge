import { useEffect } from "react";
import { startCase } from "lodash-es";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Items } from "api/types";
import { getItemsBySearch } from "services/mercadoLibre/products";
import {
  onExitScreen,
  onResultsDownloadSuccessful
} from "state/features/searchResult/events";
import { productListSelector } from "state/features/searchResult/selectors";
import { useAppDispatch } from "state/store";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import { AppResponse } from "types/request";
import { isResponseSuccess } from "utils/axiosHelper";

interface SearchResultProps {
  response: AppResponse<Items>;
}

const tkItems = tk.page.items;

const SearchResult: FC<SearchResultProps> = ({ response }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const productList = useSelector(productListSelector);
  useEffect(() => {
    if (isResponseSuccess(response)) {
      dispatch(onResultsDownloadSuccessful(response.payload.items));
    }
    return () => {
      dispatch(onExitScreen());
    };
  }, []);
  const searchQuery = startCase(router.query.q as string);
  return (
    <>
      <NextSeo
        title={t(tkItems.title, { searchQuery })}
        description={t(tkItems.description, { searchQuery })}
      />
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <Link href={`/items/${product.id}`}>
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
  const response = await getItemsBySearch({
    q: (context.query.q as string) ?? "",
    limit: 4
  });
  return { props: { response } };
};
