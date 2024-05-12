import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { HydratedDocument} from "mongoose";

export type MultaDocument = HydratedDocument<Multa>;

interface Reports{
    id:string;
    reason:string;
    product:Product;        
}

interface Product{
    id:string;
    name:string;
    urlImg:string;
}
@Schema()
export class Multa{

    @Prop()
    

    @Prop()
    idMarket:string;

    @Prop([raw({
        id: { type: String },
        reason: { type: String },
        product: {
            id: { type: String },
            name: { type: String },
            urlImg: { type: String }
        }
    })])
    reports:Reports[];
}

export const MultaSchema = SchemaFactory.createForClass(Multa);