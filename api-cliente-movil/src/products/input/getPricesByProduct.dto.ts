import { IsNotEmpty, IsString } from "class-validator";

export class GetPricesByProductId {
    @IsString()
    @IsNotEmpty()
    productId: string;
}
