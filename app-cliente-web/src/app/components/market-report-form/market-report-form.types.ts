export interface MarketDTO {
  id: string;
  name: string;
  urlImage: string;
  address: string;
  products: ProductDTO[];
}

export interface ProductDTO{
  id: string;
  name: string;
  price: number;
  urlImage: string;
}
