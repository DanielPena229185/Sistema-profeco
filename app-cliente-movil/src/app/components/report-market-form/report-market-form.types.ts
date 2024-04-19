export interface MarketOptionDTO{
    id: string;
    name: string;
}

export interface ProductOptionDTO{
    id: string;
    name: string;
}

export interface MarketDTO {
    id: string;
    name: string;
    address: string;
    urlImg: string;
}

export interface ProductDTO {
    id: string;
    name: string;
    urlImg: string;
    detail: string;
}