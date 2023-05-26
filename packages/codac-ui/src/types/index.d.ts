export interface Product {
  id: string;
  stock: number;
  rating: number;
  name: string;
  description: string;
  price: Price;
  isBestSeller: boolean;
  leadTime: number;
  image?: string;
  imageBlur?: string;
  discount?: Discount;
  usedPrice?: UsedPrice;
}

interface Price {
  amount: number;
  currency: Currency;
  scale: number;
}

interface Currency {
  code: string;
  base: number;
  exponent: number;
}

interface Discount {
  percent: number;
  expires?: number;
}

interface UsedPrice {
  amount: number;
  currency: Currency;
  scale: number;
}
