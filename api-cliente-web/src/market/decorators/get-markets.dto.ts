import {
  BadRequestException,
  ExecutionContext,
  createParamDecorator,
} from '@nestjs/common';
import { parseCount } from 'src/utils/requests/parse-count';
import { parsePage } from 'src/utils/requests/parse-page';
import { parseQueryFields } from 'src/utils/requests/parse-query-fields';
import { GetMarketsDTO } from '../input-dto/get-markets-query.dto';
import { parseQueryRelations } from 'src/utils/requests/parse-query-relations';

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

export const GetMarketsQueryDTO = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const page: number = parsePage(request.query['page'] as string);
    const count: number = parseCount(request.query['count'] as string);
    const fields: string = request.query['fields'] as string;
    if (!fields) {
      throw new BadRequestException('Fields query parameter is required');
    }
    const queryFields: string[] = parseQueryFields(fields, avaliableFields);
    const relations: string = request.query['relations'] as string;
    const queryRelations: string[] = parseQueryRelations(
      relations,
      avaliableRelations,
    );
    const isExlusive: boolean = request.query['exclusive'] === 'true';
    const name: string = request.query['name'] as string;
    const address: string = request.query['address'] as string;
    return new GetMarketsDTO(
      page,
      count,
      queryFields,
      queryRelations,
      isExlusive,
      name,
      address,
    );
  },
);
