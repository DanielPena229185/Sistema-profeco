export interface ProductInfoDTO {
  product: ProductDTO;
  prices: PriceDTO[];
}

export interface ProductDTO {
  id: string;
  name: string;
  imageUrl: string;
  details: string;
}

export interface PriceDTO {
  marketName: string;
  price: number;
  imageUrl?: string;
}
