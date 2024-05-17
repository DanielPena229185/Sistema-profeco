export interface ProductCompareDTO {
    id: string;
    name: string;
    urlImg: string;
    details: string;
    markets: MarketDTO[];
}

export interface MarketDTO {
  id: string;
  name: string;
  urlImg: string;
  price: number;
}