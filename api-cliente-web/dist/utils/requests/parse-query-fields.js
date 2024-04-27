"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseQueryFields = void 0;
function parseQueryFields(paramFields, queryFieldsValid) {
    if (!paramFields) {
        return [];
    }
    const fields = paramFields.split(',').map((field) => field.trim());
    let fieldsResult = [];
    fields.forEach((field) => {
        if (queryFieldsValid.includes(field)) {
            fieldsResult.push(field);
        }
    });
    return fieldsResult;
}
exports.parseQueryFields = parseQueryFields;
//# sourceMappingURL=parse-query-fields.js.map