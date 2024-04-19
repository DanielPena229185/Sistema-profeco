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
  details: string;
}

export interface ProductOptionDTO {
  id: string;
  name: string;
}

export interface MarketOptionDTO {
  id: string;
  name: string;
}

export interface MarketReportForm {
  marketSelected: MarketDTO;
  productSelected: ProductDTO;
  reportContent: string;
}