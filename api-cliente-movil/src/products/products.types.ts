//entities
export interface ProductDTO{
    id: string;
    name: string;
    image_url: string;
    details: string;
}

export interface MarketPriceDTO{
    market_name: string;
    price: number;
    id: string;
}
//requests
export interface ProductByIdRequest{
    product_id: string;
}

export interface ProductListRequest{
    product_name: string;
}

export interface UpdateProductPriceRequest{ 
    market_id: string;
    product: ProductDTO;
    new_price: number;
}

export interface Empty{}

export interface ProductList{
    products: ProductDTO[];
}

export interface CompareProductList{
    product: ProductDTO;
    prices: MarketPriceDTO[];
}