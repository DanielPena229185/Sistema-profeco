export interface ProductoDTO {
  id: string;
  nombre: string;
  imagen: string;
  detalles: string;
  tiendas: TiendaDTO[];
}

interface TiendaDTO {
  id: string;
  nombre: string;
  imagen: string;
  precioProducto: number;
}

export interface ProductInfoDTO {
    product: ProductDTO,
    prices: PriceDTO[]
}

export interface ProductDTO {
  id: string;
  name: string;
  imageUrl: string;
  details: string;
}

export interface PriceDTO{
    marketName: string,
    price: number,
    imageUrl?: string
}