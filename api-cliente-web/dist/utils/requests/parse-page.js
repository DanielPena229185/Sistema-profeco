"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePage = void 0;
function parsePage(pageParam) {
    if (pageParam === undefined) {
        return 1;
    }
    let page = parseInt(pageParam) || 0;
    if (page < 0) {
        page = 1;
    }
    if (page > 1000000) {
        page = 1000000;
    }
    return page;
}
exports.parsePage = parsePage;
//# sourceMappingURL=parse-page.js.map