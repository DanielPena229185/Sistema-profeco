export interface ProductInfoDTO {
  name: string;
  urlImg: string;
  details: string;
  markets: MarketDTO[];
}

export interface MarketDTO{
  id: string;
  name: string;
  price: number;
  urlImg: string;
}
