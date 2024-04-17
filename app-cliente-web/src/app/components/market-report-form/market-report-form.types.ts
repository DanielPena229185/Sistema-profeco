export interface MarketDTO {
  id: string;
  name: string;
  urlImage: string;
  address: string;
}

export interface ProductDTO{
  id: string;
  name: string;
  price: number;
  urlImage: string;
}

export interface ProductOptionDTO {
  id: string;
  name: string;
}

export interface MarketOptionDTO {
  id: string;
  name: string;
}