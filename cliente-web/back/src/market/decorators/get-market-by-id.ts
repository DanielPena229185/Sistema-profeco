import {
  ExecutionContext,
  createParamDecorator,
} from '@nestjs/common';
import { parseQueryFields } from 'src/utils/requests/parse-query-fields';
import { parseQueryRelations } from 'src/utils/requests/parse-query-relations';
import { GetMarketByIdDTO } from '../input-dto/get-market-by-id-query.dto';

const avaliableFields: string[] = [
  'id',
  'name',
  'urlImage',
  'address',
  'created_at',
  'updated_at',
  'company_id',
];

const avaliableRelations = ['company'];
export const GetMarketByIdQueryDTO = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const fields: string = request.query['fields'] as string;
    const queryFields: string[] = parseQueryFields(fields, avaliableFields);
    const relations: string = request.query['relations'] as string;
    const queryRelations: string[] = parseQueryRelations(relations, avaliableRelations);
    return  new GetMarketByIdDTO(queryFields, queryRelations);
  }
);
