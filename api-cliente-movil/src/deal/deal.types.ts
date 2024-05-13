//Request types
export interface GetDealByIdRequest {
  id: string;
}

export interface GetDealsRequest {
  page: number;
  count: number;
}

//Response types
export interface GetDealByIdResponse {
  deal: Deal;
}

export interface GetDealsResponse {
  deals: Deal[];
}

export interface Product {
  id: string;
  name: string;
}

export interface Market {
  id: string;
  name: string;
}

export interface Deal {
  id: string;
  description: string;
  price: number;
  date: Date;
  product: Product;
  market: Market;
}
