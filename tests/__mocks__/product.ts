import { Product, ProductCondition } from "../../src/api/types";

export const mockedProduct: Product = {
  id: "MLA1113731432",
  title: "Motorola Edge 20 Lite 128 Gb Verde 6 Gb Ram",
  price: {
    currency: "ARS",
    amount: 69999,
    decimals: 0
  },
  picture: "http://http2.mlstatic.com/D_861433-MLA48233896240_112021-O.jpg",
  condition: ProductCondition.New,
  free_shipping: true,
  sold_quantity: 500,
  description:
    "Fotografía profesional en tu bolsillo Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados. Además, el dispositivo cuenta con cámara frontal de 32 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Capacidad y eficiencia Con su potente procesador y memoria RAM de 6 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras. Desbloqueo facial y dactilar Máxima seguridad para que solo vos puedas acceder al equipo. Podrás elegir entre el sensor de huella dactilar para habilitar el teléfono en un toque, o el reconocimiento facial que permite un desbloqueo hasta un 30% más rápido. Batería de duración superior ¡Desenchufate! Con la súper batería de 5000 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de realizar recargas."
};
