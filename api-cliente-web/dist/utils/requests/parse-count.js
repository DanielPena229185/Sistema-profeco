"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCount = void 0;
function parseCount(countParam) {
    if (countParam === undefined) {
        return 20;
    }
    let count = parseInt(countParam) || 20;
    if (count < 1) {
        count = 1;
    }
    if (count > 50) {
        count = 50;
    }
    return count;
}
exports.parseCount = parseCount;
//# sourceMappingURL=parse-count.js.map