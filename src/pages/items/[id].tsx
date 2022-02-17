import { useEffect } from "react";
import { GetServerSideProps } from "next";
import { Item } from "api/types";
import { ProductDetail } from "components/pages/ProductDetail/ProductDetail";
import { getItemById } from "services/mercadoLibre/products";
import {
  onExitScreen,
  onItemDownloadSuccessful
} from "state/features/productDetail/events";
import { useAppDispatch } from "state/store";
import { FC } from "types/react";
import { AppResponse } from "types/request";
import { isResponseSuccess } from "utils/axiosHelper";

interface ProductDetailScreenProps {
  response: AppResponse<Item>;
}

const ProductDetailScreen: FC<ProductDetailScreenProps> = ({ response }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isResponseSuccess(response)) {
      dispatch(onItemDownloadSuccessful(response.payload));
    }
    return () => {
      dispatch(onExitScreen());
    };
  }, [dispatch, response]);
  return <ProductDetail />;
};

export default ProductDetailScreen;

export const getServerSideProps: GetServerSideProps<
  ProductDetailScreenProps
> = async (context) => {
  const response = await getItemById(context.query.id as string);
  return { props: { response } };
};
