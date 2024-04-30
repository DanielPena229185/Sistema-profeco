export interface MarketDTO {
    id: string;
    name: string;
    address: string;
    urlImage: string;
} 
export interface searchParamsDTO{
    page: number;
    count: number;
    fields: string;
    relations: string;
    exclusive: boolean;
    name: string;
    address: string;
}