export interface ProductDTO {
    id: string;
    name: string;
    imageUrl: string;
    details: string;
  }
  
  export interface ProductsDTO {
    product: ProductDTO[];
  }