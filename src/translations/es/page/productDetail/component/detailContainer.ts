import { ProductCondition } from "api/types";

export const detailContainer = {
  productSubtitle: {
    [ProductCondition.New]: "Nuevo",
    [ProductCondition.NotSpecified]: "Condición no especificada",
    [ProductCondition.Used]: "Usado",
    soldQuantityText: "{{quantity}} vendidos"
  },
  productPrice: {
    priceString: "$ {{amount}}"
  },
  freeShipping: "Envío gratis",
  buttons: {
    buy: "Comprar",
    addToCart: "Agregar al carrito"
  }
};
