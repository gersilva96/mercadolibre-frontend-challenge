import { useEffect } from "react";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Item } from "api/types";
import { ProductDetail } from "components/pages/ProductDetail/ProductDetail";
import { getItemById } from "services/mercadoLibre/products";
import {
  onExitScreen,
  onItemDownloadSuccessful
} from "state/features/productDetail/events";
import { productSelector } from "state/features/productDetail/selectors";
import { useAppDispatch } from "state/store";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import { AppResponse } from "types/request";
import { isResponseSuccess } from "utils/axiosHelper";

interface ProductDetailScreenProps {
  response: AppResponse<Item>;
}

const tkProductDetail = tk.page.productDetail;

const ProductDetailScreen: FC<ProductDetailScreenProps> = ({ response }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const product = useSelector(productSelector);
  useEffect(() => {
    if (isResponseSuccess(response)) {
      dispatch(onItemDownloadSuccessful(response.payload));
    }
    return () => {
      dispatch(onExitScreen());
    };
  }, [dispatch, response]);
  return (
    <>
      <NextSeo
        title={t(tkProductDetail.title, { productName: product?.title })}
        description={t(tkProductDetail.description, {
          productName: product?.title
        })}
      />
      <ProductDetail />
    </>
  );
};

export default ProductDetailScreen;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await getItemById(context.query.id as string);
  return { props: { response } };
};
