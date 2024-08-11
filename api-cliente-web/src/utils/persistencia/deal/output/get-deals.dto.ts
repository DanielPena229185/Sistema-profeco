export interface GetDealsDTO {
    id: string;
    description: string;
    oldPrice: number;
    newPrice: number;
    date: string;
    market: Market;
    product: Product;
}

interface Market {
    id: string;
    name: string;
    img: string;
}

interface Product {
    id: string;
    name: string;
    img: string;
}