import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ReportDocument = HydratedDocument<RecievedReport>;
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
export class RecievedReport{

    @Prop(raw({
        id: { type: String },
        reason: { type: String },
        product: {
            id: { type: String },
            name: { type: String },
            urlImg: { type: String }
        }
    }))
    report:Reports;

    @Prop()
    idMarket:string;

    @Prop({default:null})
    idMulta:string;

}

export const RecievedReportSchema = SchemaFactory.createForClass(RecievedReport);