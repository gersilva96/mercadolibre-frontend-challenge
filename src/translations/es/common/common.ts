import { footer } from "./component/footer";
import { header } from "./component/header";
import { notFound } from "./component/notFound";

export const common = {
  title: "Mercado Libre Argentina - Envíos Gratis en el día",
  description:
    "Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.",
  productPrice: {
    priceString: "{{localValue, currency}}",
    locale: "es-AR"
  },
  component: {
    footer,
    header,
    notFound
  }
};
