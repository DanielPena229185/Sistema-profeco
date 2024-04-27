"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseQueryRelations = void 0;
function parseQueryRelations(paramRelations, queryRelations) {
    if (!paramRelations) {
        return [];
    }
    const relations = paramRelations
        .split(',')
        .map((relation) => relation.trim());
    let relationsResult = [];
    relations.forEach((relation) => {
        if (queryRelations.includes(relation)) {
            relationsResult.push(relation);
        }
    });
    return relationsResult;
}
exports.parseQueryRelations = parseQueryRelations;
//# sourceMappingURL=parse-query-relations.js.map