import { IsNotEmpty, IsString } from "class-validator";


export class ProductListRequest {
    @IsString()
    @IsNotEmpty()
    product_name:string;
}

export class ProductByIdRequest{
    product_id:string;
}

export class GetPricesByProductId {
    @IsString()
    @IsNotEmpty()
    productId: string;
}



