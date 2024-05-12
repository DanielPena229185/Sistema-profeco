//Entities
export interface Market {
  market_id: string;
  market_name: string;
}

export interface Product {
  product_id: string;
  product_name: string;
}

//Requests
export interface AddProductRequest {
  product_id: string;
}

export interface PreferencesDefaultRequest {
  user_id: string;
}

export interface FavoriteMarketRequest {
  user_id: string;
  market: Market;
}

export interface PreferencesDefaultRequest {
  user_id: string;
}

export interface AddProductRequest {
  user_id: string;
  product: Product;
}

export interface PreferencesDefaultRequest {
  user_id: string;
}

//responses
export interface VisitedProductsList {
  products: Product[];
}

export interface FavoriteMarketsList {
  markets: Market[];
}

export interface ShoppingCart {
  products: Product[];
}
