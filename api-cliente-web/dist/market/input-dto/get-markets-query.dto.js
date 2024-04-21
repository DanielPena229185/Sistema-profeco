"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMarketsDTO = void 0;
const abstract_query_1 = require("../../utils/queries/abstract-query");
class GetMarketsDTO extends abstract_query_1.AbstractQuery {
    constructor(page, count, fields, relations, isExclusive, name, address) {
        super(page, count);
        this.fields = fields;
        this.relations = relations;
        this.isExclusive = isExclusive;
        this.name = name;
        this.address = address;
    }
}
exports.GetMarketsDTO = GetMarketsDTO;
//# sourceMappingURL=get-markets-query.dto.js.map