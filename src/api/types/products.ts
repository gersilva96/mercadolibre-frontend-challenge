export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

export enum ProductCondition {
  New = "new",
  NotSpecified = "not_specified",
  Used = "used"
}

export interface Product {
  id: string;
  title: string;
  price: Price;
  picture: string | string[];
  condition: ProductCondition;
  free_shipping: boolean;
  sold_quantity?: number;
  description?: string;
}
