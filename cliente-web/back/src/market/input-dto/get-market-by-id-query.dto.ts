export class GetMarketByIdDTO {
    fields: string[];
    relations: string[];

    constructor(fields: string[], relations: string[]) {
        this.fields = fields;
        this.relations = relations;
    }
}