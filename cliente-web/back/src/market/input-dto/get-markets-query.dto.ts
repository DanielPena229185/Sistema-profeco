import { AbstractQuery } from 'src/utils/queries/abstract-query';

export class GetMarketsDTO extends AbstractQuery {
  fields: string[];
  relations: string[];
  isExclusive: boolean;
  name: string;
  address: string;
  override page: number;
  override count: number;

  constructor(
    page: number,
    count: number,
    fields: string[],
    relations: string[],
    isExclusive: boolean,
    name: string,
    address: string,
  ) {
    super(page, count);
    this.fields = fields;
    this.relations = relations;
    this.isExclusive = isExclusive;
    this.name = name;
    this.address = address;
  }
}
