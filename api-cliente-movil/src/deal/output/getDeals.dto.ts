export interface DealDTO {
  id: string;
  description: string;
  oldPrice: number;
  newPrice: number;
  date: string;
  market: Market;
  product: Product;
}

export interface Market {
  id: string;
  name: string;
  img: string;
}

export interface Product {
  id: string;
  name: string;
  img: string;
}
