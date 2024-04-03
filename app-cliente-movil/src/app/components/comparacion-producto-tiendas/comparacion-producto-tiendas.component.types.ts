export interface ProductoDTO {
    id: string,
    nombre: string,
    imagen: string,
    detalles: string,
    tiendas: TiendaDTO[],
}

interface TiendaDTO {
    id: string,
    nombre: string,
    imagen: string,
    precioProducto: number
}   