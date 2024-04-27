"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMarketsQueryDTO = void 0;
const common_1 = require("@nestjs/common");
const parse_count_1 = require("../../utils/requests/parse-count");
const parse_page_1 = require("../../utils/requests/parse-page");
const parse_query_fields_1 = require("../../utils/requests/parse-query-fields");
const get_markets_query_dto_1 = require("../input-dto/get-markets-query.dto");
const parse_query_relations_1 = require("../../utils/requests/parse-query-relations");
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
exports.GetMarketsQueryDTO = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const page = (0, parse_page_1.parsePage)(request.query['page']);
    const count = (0, parse_count_1.parseCount)(request.query['count']);
    const fields = request.query['fields'];
    if (!fields) {
        throw new common_1.BadRequestException('Fields query parameter is required');
    }
    const queryFields = (0, parse_query_fields_1.parseQueryFields)(fields, avaliableFields);
    const relations = request.query['relations'];
    const queryRelations = (0, parse_query_relations_1.parseQueryRelations)(relations, avaliableRelations);
    const isExlusive = request.query['exclusive'] === 'true';
    const name = request.query['name'];
    const address = request.query['address'];
    return new get_markets_query_dto_1.GetMarketsDTO(page, count, queryFields, queryRelations, isExlusive, name, address);
});
//# sourceMappingURL=get-markets.dto.js.map