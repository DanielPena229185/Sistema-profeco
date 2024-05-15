export interface DealEntity {
  id: string;
  description: string;
  price: number;
  date: string;
  market: MarketEntity;
  product: ProductEntity;
}

export interface MarketEntity {
  id: string;
  name: string;
}

export interface ProductEntity {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface GetDealsByMarketRequest {
  marketId: string;
}

export interface GetDealsByMarketResponse {
  deals: DealEntity[];
}
