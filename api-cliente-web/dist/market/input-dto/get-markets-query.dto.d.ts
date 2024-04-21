import { AbstractQuery } from 'src/utils/queries/abstract-query';
export declare class GetMarketsDTO extends AbstractQuery {
    fields: string[];
    relations: string[];
    isExclusive: boolean;
    name: string;
    address: string;
    page: number;
    count: number;
    constructor(page: number, count: number, fields: string[], relations: string[], isExclusive: boolean, name: string, address: string);
}
