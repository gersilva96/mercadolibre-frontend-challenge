import { noResultPlaceholder } from "./component/noResultPlaceholder";
import { pagination } from "./component/pagination";
import { productItem } from "./component/productItem";

export const searchResult = {
  title: "{{searchQuery}} | MercadoLibre 📦",
  description:
    "Envíos Gratis en el día ✓ Comprá {{searchQuery}} en cuotas sin interés! Conocé nuestras increíbles ofertas y promociones en millones de productos.",
  noSearchResult: "No hay publicaciones que coincidan con tu búsqueda.",
  component: {
    noResultPlaceholder,
    pagination,
    productItem
  }
};
