import { ProductCondition } from "api/types";

export const detailContainer = {
  productSubtitle: {
    [ProductCondition.New]: "Nuevo",
    [ProductCondition.NotSpecified]: "Condición no especificada",
    [ProductCondition.Used]: "Usado",
    soldQuantity: "{{count}} vendido",
    soldQuantity_plural: "{{count}} vendidos"
  },
  freeShipping: "Envío gratis",
  buttons: {
    buy: "Comprar",
    addToCart: "Agregar al carrito"
  }
};
