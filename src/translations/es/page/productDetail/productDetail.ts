import { descriptionContainer } from "./component/descriptionContainer";
import { detailContainer } from "./component/detailContainer";
import { pictureContainer } from "./component/pictureContainer";

export const productDetail = {
  title: "{{productName}} | MercadoLibre",
  description:
    "Envíos gratis en el día ✓ Comprá en cuotas sin interés y recibí tu ☞ {{productName}} ❤",
  component: {
    descriptionContainer,
    detailContainer,
    pictureContainer
  }
};
