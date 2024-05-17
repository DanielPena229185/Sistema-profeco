export interface ProductName {
  product_name: string;
}
export interface ProductListRequest {
  product_name: string;
}
export interface Product {
  id: string;
  name: string;
  market: string;
  current_price: string;
}

interface MarketPrice {
  market_name: string;
  price: number;
  id: string;
}

export interface CompareProductList {
  product: Product;
  prices: Array<MarketPrice>;
}

export interface ProductList {
  product: Array<Product>;
}

export interface ProductByIdRequest {
  product_id: string;
}
