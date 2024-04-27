"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketController = void 0;
const common_1 = require("@nestjs/common");
const market_service_1 = require("./market.service");
const get_markets_dto_1 = require("./decorators/get-markets.dto");
const get_markets_query_dto_1 = require("./input-dto/get-markets-query.dto");
let MarketController = class MarketController {
    constructor(marketService) {
        this.marketService = marketService;
    }
    getMarkets(query) {
        const getAllMarketsRequest = {
            query: {
                paginationParams: {
                    page: query.page,
                    count: query.count
                },
                fields: query.fields.join(','),
                relations: query.relations.join(','),
                marketName: query.name,
                address: query.address,
                exclusive: query.isExclusive
            }
        };
        return this.marketService.getAllMarkets(getAllMarketsRequest);
    }
};
exports.MarketController = MarketController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, get_markets_dto_1.GetMarketsQueryDTO)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_markets_query_dto_1.GetMarketsDTO]),
    __metadata("design:returntype", void 0)
], MarketController.prototype, "getMarkets", null);
exports.MarketController = MarketController = __decorate([
    (0, common_1.Controller)('market'),
    __metadata("design:paramtypes", [market_service_1.MarketService])
], MarketController);
//# sourceMappingURL=market.controller.js.map