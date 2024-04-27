"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMarketByIdQueryDTO = void 0;
const common_1 = require("@nestjs/common");
const parse_query_fields_1 = require("../../utils/requests/parse-query-fields");
const parse_query_relations_1 = require("../../utils/requests/parse-query-relations");
const get_market_by_id_query_dto_1 = require("../input-dto/get-market-by-id-query.dto");
const avaliableFields = [
    'id',
    'name',
    'urlImage',
    'address',
    'created_at',
    'updated_at',
    'company_id',
];
const avaliableRelations = ['company'];
exports.GetMarketByIdQueryDTO = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const fields = request.query['fields'];
    const queryFields = (0, parse_query_fields_1.parseQueryFields)(fields, avaliableFields);
    const relations = request.query['relations'];
    const queryRelations = (0, parse_query_relations_1.parseQueryRelations)(relations, avaliableRelations);
    return new get_market_by_id_query_dto_1.GetMarketByIdDTO(queryFields, queryRelations);
});
//# sourceMappingURL=get-market-by-id.js.map