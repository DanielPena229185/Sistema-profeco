export interface PaginationParams {
  page: number;
  count: number;
}

//   // GetMarketsByIds()
// message GetMarketsByIdsRequest {
// 	GetMarketsByIdsQuery query = 1;
// }

// //Response to get markets by ids
// message GetMarketsByIdsResponse {
// 	repeated MarketEntity markets = 1;
// }

// //Query to get markets by ids
// message GetMarketsByIdsQuery {
// 	string ids = 1;
// 	string fields = 2;
// 	string relations = 3;
// }

export interface GetMarketsByIdsRequest {
  query: GetMarketsByIdsQuery;
}

export interface GetMarketsByIdsResponse {
  markets: MarketEntity[];
}

export interface GetMarketsByIdsQuery {
  ids: string;
  fields: string;
  relations: string;
}

export interface GetAllMarketsRequest {
  query: GetAllMarketsQuery;
}

export interface GetMarketByIdRequest {
  query: GetMarketByIdQuery;
}

export interface GetMarketByIdQuery {
  marketId: string;
  fields: string;
  relations: string;
}

export interface GetMarketByIdResponse {
  market: MarketEntity;
}

export interface GetAllMarketsResponse {
  markets: MarketEntity[];
}

export interface GetAllMarketsQuery {
  paginationParams: PaginationParams;
  fields: string;
  relations: string;
  marketName: string;
  address: string;
  exclusive: boolean;
}

export interface CompanyEntity {
  id: string;
  name: string;
  urlImg: string;
}

export interface MarketEntity {
  id: string;
  name: string;
  urlImg: string;
  address: string;
  company: CompanyEntity;
  createdAt: string;
  updatedAt: string;
}
