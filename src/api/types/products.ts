export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

export interface Product {
  id: string;
  title: string;
  price: Price;
  picture: string | string[];
  condition: string;
  free_shipping: boolean;
  sold_quantity?: number;
  description?: string;
}
