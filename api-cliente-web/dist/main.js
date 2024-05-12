/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./libs/libs/src/business-rule.exception.ts":
/*!**************************************************!*\
  !*** ./libs/libs/src/business-rule.exception.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BusinessRuleException = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
class BusinessRuleException extends common_1.HttpException {
    constructor(message) {
        super(message, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.BusinessRuleException = BusinessRuleException;


/***/ }),

/***/ "./libs/libs/src/index.ts":
/*!********************************!*\
  !*** ./libs/libs/src/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./business-rule.exception */ "./libs/libs/src/business-rule.exception.ts"), exports);


/***/ }),

/***/ "./src/app.controller.ts":
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
const market_controller_1 = __webpack_require__(/*! ./market/market.controller */ "./src/market/market.controller.ts");
const market_service_1 = __webpack_require__(/*! ./market/market.service */ "./src/market/market.service.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const deal_controller_1 = __webpack_require__(/*! ./deal/deal.controller */ "./src/deal/deal.controller.ts");
const deal_service_1 = __webpack_require__(/*! ./deal/deal.service */ "./src/deal/deal.service.ts");
const reports_controller_1 = __webpack_require__(/*! ./reports/reports.controller */ "./src/reports/reports.controller.ts");
const reports_service_1 = __webpack_require__(/*! ./reports/reports.service */ "./src/reports/reports.service.ts");
const products_controller_1 = __webpack_require__(/*! ./products/products.controller */ "./src/products/products.controller.ts");
const products_service_1 = __webpack_require__(/*! ./products/products.service */ "./src/products/products.service.ts");
const microservices_2 = __webpack_require__(/*! ./microservices/microservices */ "./src/microservices/microservices.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [microservices_1.ClientsModule.register(microservices_2.ClientModules)],
        controllers: [app_controller_1.AppController, market_controller_1.MarketController, reports_controller_1.ReportsController, products_controller_1.ProductsController, deal_controller_1.DealController],
        providers: [app_service_1.AppService, market_service_1.MarketService, reports_service_1.ReportsService, products_service_1.ProductsService, deal_service_1.DealService],
    })
], AppModule);


/***/ }),

/***/ "./src/app.service.ts":
/*!****************************!*\
  !*** ./src/app.service.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),

/***/ "./src/deal/deal.controller.ts":
/*!*************************************!*\
  !*** ./src/deal/deal.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DealController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const deal_service_1 = __webpack_require__(/*! ./deal.service */ "./src/deal/deal.service.ts");
const deal_types_1 = __webpack_require__(/*! ./deal.types */ "./src/deal/deal.types.ts");
let DealController = class DealController {
    constructor(dealService) {
        this.dealService = dealService;
    }
    getDeals(params) {
        return this.dealService.getDeals(params);
    }
    getDealById(getDeal) {
        return this.dealService.getDealById(getDeal);
    }
};
exports.DealController = DealController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof deal_types_1.GetDealsRequest !== "undefined" && deal_types_1.GetDealsRequest) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], DealController.prototype, "getDeals", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof deal_types_1.GetDealByIdRequest !== "undefined" && deal_types_1.GetDealByIdRequest) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], DealController.prototype, "getDealById", null);
exports.DealController = DealController = __decorate([
    (0, common_1.Controller)('deal'),
    __metadata("design:paramtypes", [typeof (_a = typeof deal_service_1.DealService !== "undefined" && deal_service_1.DealService) === "function" ? _a : Object])
], DealController);


/***/ }),

/***/ "./src/deal/deal.service.ts":
/*!**********************************!*\
  !*** ./src/deal/deal.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DealService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let DealService = class DealService {
    constructor(client) {
        this.client = client;
    }
    onModuleInit() {
        this.dealService = this.client.getService('Deals');
    }
    async getDeals(getDealsRequest) {
        const respone = this.dealService.GetDeals(getDealsRequest);
        const dealResponse = await respone.toPromise();
        return dealResponse.deals;
    }
    async getDealById(getDealByIdRequest) {
        const response = this.dealService.GetDealById(getDealByIdRequest);
        const dealResponse = await response.toPromise();
        return dealResponse.deal;
    }
};
exports.DealService = DealService;
exports.DealService = DealService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DEAL_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object])
], DealService);


/***/ }),

/***/ "./src/deal/deal.types.ts":
/*!********************************!*\
  !*** ./src/deal/deal.types.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/market/decorators/get-market-by-id.ts":
/*!***************************************************!*\
  !*** ./src/market/decorators/get-market-by-id.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetMarketByIdQueryDTO = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const parse_query_fields_1 = __webpack_require__(/*! src/utils/requests/parse-query-fields */ "./src/utils/requests/parse-query-fields.ts");
const parse_query_relations_1 = __webpack_require__(/*! src/utils/requests/parse-query-relations */ "./src/utils/requests/parse-query-relations.ts");
const get_market_by_id_query_dto_1 = __webpack_require__(/*! ../input-dto/get-market-by-id-query.dto */ "./src/market/input-dto/get-market-by-id-query.dto.ts");
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


/***/ }),

/***/ "./src/market/decorators/get-markets.dto.ts":
/*!**************************************************!*\
  !*** ./src/market/decorators/get-markets.dto.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetMarketsQueryDTO = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const parse_count_1 = __webpack_require__(/*! src/utils/requests/parse-count */ "./src/utils/requests/parse-count.ts");
const parse_page_1 = __webpack_require__(/*! src/utils/requests/parse-page */ "./src/utils/requests/parse-page.ts");
const parse_query_fields_1 = __webpack_require__(/*! src/utils/requests/parse-query-fields */ "./src/utils/requests/parse-query-fields.ts");
const get_markets_query_dto_1 = __webpack_require__(/*! ../input-dto/get-markets-query.dto */ "./src/market/input-dto/get-markets-query.dto.ts");
const parse_query_relations_1 = __webpack_require__(/*! src/utils/requests/parse-query-relations */ "./src/utils/requests/parse-query-relations.ts");
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


/***/ }),

/***/ "./src/market/input-dto/get-market-by-id-query.dto.ts":
/*!************************************************************!*\
  !*** ./src/market/input-dto/get-market-by-id-query.dto.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetMarketByIdDTO = void 0;
class GetMarketByIdDTO {
    constructor(fields, relations) {
        this.fields = fields;
        this.relations = relations;
    }
}
exports.GetMarketByIdDTO = GetMarketByIdDTO;


/***/ }),

/***/ "./src/market/input-dto/get-markets-query.dto.ts":
/*!*******************************************************!*\
  !*** ./src/market/input-dto/get-markets-query.dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetMarketsDTO = void 0;
const abstract_query_1 = __webpack_require__(/*! src/utils/queries/abstract-query */ "./src/utils/queries/abstract-query.ts");
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


/***/ }),

/***/ "./src/market/market.controller.ts":
/*!*****************************************!*\
  !*** ./src/market/market.controller.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MarketController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const market_service_1 = __webpack_require__(/*! ./market.service */ "./src/market/market.service.ts");
const get_markets_dto_1 = __webpack_require__(/*! ./decorators/get-markets.dto */ "./src/market/decorators/get-markets.dto.ts");
const get_markets_query_dto_1 = __webpack_require__(/*! ./input-dto/get-markets-query.dto */ "./src/market/input-dto/get-markets-query.dto.ts");
const get_market_by_id_1 = __webpack_require__(/*! ./decorators/get-market-by-id */ "./src/market/decorators/get-market-by-id.ts");
const get_market_by_id_query_dto_1 = __webpack_require__(/*! ./input-dto/get-market-by-id-query.dto */ "./src/market/input-dto/get-market-by-id-query.dto.ts");
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
    getMarketById(query, id) {
        const getMarketByIdRequest = {
            query: {
                marketId: id,
                fields: query.fields.join(','),
                relations: query.relations.join(',')
            }
        };
        return this.marketService.getMarketById(getMarketByIdRequest);
    }
};
exports.MarketController = MarketController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, get_markets_dto_1.GetMarketsQueryDTO)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof get_markets_query_dto_1.GetMarketsDTO !== "undefined" && get_markets_query_dto_1.GetMarketsDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], MarketController.prototype, "getMarkets", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, get_market_by_id_1.GetMarketByIdQueryDTO)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof get_market_by_id_query_dto_1.GetMarketByIdDTO !== "undefined" && get_market_by_id_query_dto_1.GetMarketByIdDTO) === "function" ? _c : Object, String]),
    __metadata("design:returntype", void 0)
], MarketController.prototype, "getMarketById", null);
exports.MarketController = MarketController = __decorate([
    (0, common_1.Controller)('market'),
    __metadata("design:paramtypes", [typeof (_a = typeof market_service_1.MarketService !== "undefined" && market_service_1.MarketService) === "function" ? _a : Object])
], MarketController);


/***/ }),

/***/ "./src/market/market.service.ts":
/*!**************************************!*\
  !*** ./src/market/market.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MarketService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let MarketService = class MarketService {
    constructor(client) {
        this.client = client;
    }
    onModuleInit() {
        this.marketService = this.client.getService('Market');
    }
    async getAllMarkets(getAllMarketsRequest) {
        const response = this.marketService.GetAllMarkets(getAllMarketsRequest);
        const merketResponse = await response.toPromise();
        return merketResponse.markets;
    }
    async getMarketById(getMarketByIdRequest) {
        const response = this.marketService.GetMarketById(getMarketByIdRequest);
        const marketResponse = await response.toPromise();
        return marketResponse.market;
    }
};
exports.MarketService = MarketService;
exports.MarketService = MarketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('MARKET_PACKAGE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object])
], MarketService);


/***/ }),

/***/ "./src/microservices/microservices.ts":
/*!********************************************!*\
  !*** ./src/microservices/microservices.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientModules = void 0;
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const path_1 = __webpack_require__(/*! path */ "path");
exports.ClientModules = [
    {
        name: 'MARKET_PACKAGE',
        transport: microservices_1.Transport.GRPC,
        options: {
            package: 'market',
            protoPath: (0, path_1.join)(`proto/market.proto`),
            url: 'localhost:5240',
        }
    },
    {
        name: 'DEAL_SERVICE',
        transport: microservices_1.Transport.GRPC,
        options: {
            package: 'deal',
            protoPath: (0, path_1.join)(`proto/deal.proto`),
            url: 'localhost:5070',
        },
    },
    {
        name: 'REPORTS_SERVICE',
        transport: microservices_1.Transport.GRPC,
        options: {
            package: 'report',
            protoPath: (0, path_1.join)(`proto/report.proto`),
            url: 'localhost:50052',
        },
    },
    {
        name: 'PRODUCTS_SERVICE',
        transport: microservices_1.Transport.GRPC,
        options: {
            package: 'proto',
            protoPath: (0, path_1.join)(`proto/product.proto`),
            url: 'localhost:50051',
        },
    },
];


/***/ }),

/***/ "./src/products/products.controller.ts":
/*!*********************************************!*\
  !*** ./src/products/products.controller.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const products_service_1 = __webpack_require__(/*! ./products.service */ "./src/products/products.service.ts");
const products_types_1 = __webpack_require__(/*! ./products.types */ "./src/products/products.types.ts");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async getProducts() {
        const products = await this.productsService.getProducts();
        return products;
    }
    async getProductsByPrice(params) {
        const products = await this.productsService.getProductsByPrice(params);
        return products;
    }
    async getProductById(data) {
        const product = await this.productsService.getProductById(data);
        return product;
    }
    async getCompareProductListById(data) {
        const product = await this.productsService.getCompareProductListById(data);
        return product;
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Get)('names'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ProductsController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)('prices/:productName'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof products_types_1.ProductListRequest !== "undefined" && products_types_1.ProductListRequest) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ProductsController.prototype, "getProductsByPrice", null);
__decorate([
    (0, common_1.Get)(':productId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof products_types_1.ProductByIdRequest !== "undefined" && products_types_1.ProductByIdRequest) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], ProductsController.prototype, "getProductById", null);
__decorate([
    (0, common_1.Get)('compare/:productId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof products_types_1.ProductByIdRequest !== "undefined" && products_types_1.ProductByIdRequest) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], ProductsController.prototype, "getCompareProductListById", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [typeof (_a = typeof products_service_1.ProductsService !== "undefined" && products_service_1.ProductsService) === "function" ? _a : Object])
], ProductsController);


/***/ }),

/***/ "./src/products/products.service.ts":
/*!******************************************!*\
  !*** ./src/products/products.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const libs_1 = __webpack_require__(/*! @app/libs */ "./libs/libs/src/index.ts");
let ProductsService = class ProductsService {
    constructor(client) {
        this.client = client;
    }
    onModuleInit() {
        this.productsService = this.client.getService('Products');
    }
    async getProducts() {
        const $products = this.productsService.GetProducts({});
        const products = await $products.toPromise();
        return products;
    }
    async getProductsByPrice(productListRequest) {
        if (!productListRequest) {
            throw new libs_1.BusinessRuleException('Product name empty');
        }
        const $products = this.productsService.GetProductsByPrice(productListRequest);
        const products = await $products.toPromise();
        return products;
    }
    async getProductById(data) {
        if (!data) {
            throw new libs_1.BusinessRuleException('Product id empty');
        }
        const $product = this.productsService.GetProductById(data);
        const product = await $product.toPromise();
        return product;
    }
    async getCompareProductListById(data) {
        if (!data) {
            throw new libs_1.BusinessRuleException('Product id empty');
        }
        const $products = this.productsService.GetCompareProductListById(data);
        const products = await $products.toPromise();
        return products;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PRODUCTS_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object])
], ProductsService);


/***/ }),

/***/ "./src/products/products.types.ts":
/*!****************************************!*\
  !*** ./src/products/products.types.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/reports/reports.controller.ts":
/*!*******************************************!*\
  !*** ./src/reports/reports.controller.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const reports_service_1 = __webpack_require__(/*! ./reports.service */ "./src/reports/reports.service.ts");
const reports_type_1 = __webpack_require__(/*! ./reports.type */ "./src/reports/reports.type.ts");
const nestjs_grpc_exceptions_1 = __webpack_require__(/*! nestjs-grpc-exceptions */ "nestjs-grpc-exceptions");
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    async createReport(data) {
        return this.reportsService.createReport(data);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)(nestjs_grpc_exceptions_1.GrpcToHttpInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof reports_type_1.CreateReportDto !== "undefined" && reports_type_1.CreateReportDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ReportsController.prototype, "createReport", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    __metadata("design:paramtypes", [typeof (_a = typeof reports_service_1.ReportsService !== "undefined" && reports_service_1.ReportsService) === "function" ? _a : Object])
], ReportsController);


/***/ }),

/***/ "./src/reports/reports.service.ts":
/*!****************************************!*\
  !*** ./src/reports/reports.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let ReportsService = class ReportsService {
    constructor(client) {
        this.client = client;
    }
    onModuleInit() {
        this.reportsService = this.client.getService('ReportService');
    }
    async createReport(data) {
        const $report = this.reportsService.CreateReport(data);
        const reportCreated = await $report.toPromise();
        return reportCreated;
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('REPORTS_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object])
], ReportsService);


/***/ }),

/***/ "./src/reports/reports.type.ts":
/*!*************************************!*\
  !*** ./src/reports/reports.type.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Status = void 0;
var Status;
(function (Status) {
    Status[Status["ATTENDED"] = 0] = "ATTENDED";
    Status[Status["UNATTENDED"] = 1] = "UNATTENDED";
})(Status || (exports.Status = Status = {}));


/***/ }),

/***/ "./src/utils/queries/abstract-query.ts":
/*!*********************************************!*\
  !*** ./src/utils/queries/abstract-query.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractQuery = void 0;
class AbstractQuery {
    constructor(page, count) {
        this.page = page;
        this.count = count;
    }
}
exports.AbstractQuery = AbstractQuery;


/***/ }),

/***/ "./src/utils/requests/parse-count.ts":
/*!*******************************************!*\
  !*** ./src/utils/requests/parse-count.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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


/***/ }),

/***/ "./src/utils/requests/parse-page.ts":
/*!******************************************!*\
  !*** ./src/utils/requests/parse-page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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


/***/ }),

/***/ "./src/utils/requests/parse-query-fields.ts":
/*!**************************************************!*\
  !*** ./src/utils/requests/parse-query-fields.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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


/***/ }),

/***/ "./src/utils/requests/parse-query-relations.ts":
/*!*****************************************************!*\
  !*** ./src/utils/requests/parse-query-relations.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "nestjs-grpc-exceptions":
/*!*****************************************!*\
  !*** external "nestjs-grpc-exceptions" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("nestjs-grpc-exceptions");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    await app.listen(3001);
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztRQUNwQixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDRCxNQUFNLFNBQVMsR0FBYSxjQUFjO1NBQ3ZDLEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDVixHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLElBQUksZUFBZSxHQUFhLEVBQUUsQ0FBQztJQUNuQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFDN0IsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDdEMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLGVBQWUsQ0FBQztBQUN6QixDQUFDO0FBakJELGtEQWlCQzs7Ozs7Ozs7Ozs7QUNuQkQ7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBLHVFQUEyQztBQUMzQyxvRkFBeUM7QUFFekMsS0FBSyxVQUFVLFNBQVM7SUFDdEIsTUFBTSxHQUFHLEdBQUcsTUFBTSxrQkFBVyxDQUFDLE1BQU0sQ0FBQyxzQkFBUyxDQUFDLENBQUM7SUFDaEQsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBQ0QsU0FBUyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcGktY2xpZW50ZS13ZWIvLi9saWJzL2xpYnMvc3JjL2J1c2luZXNzLXJ1bGUuZXhjZXB0aW9uLnRzIiwid2VicGFjazovL2FwaS1jbGllbnRlLXdlYi8uL2xpYnMvbGlicy9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYXBpLWNsaWVudGUtd2ViLy4vc3JjL2FwcC5jb250cm9sbGVyLnRzIiwid2VicGFjazovL2FwaS1jbGllbnRlLXdlYi8uL3NyYy9hcHAubW9kdWxlLnRzIiwid2VicGFjazovL2FwaS1jbGllbnRlLXdlYi8uL3NyYy9hcHAuc2VydmljZS50cyIsIndlYnBhY2s6Ly9hcGktY2xpZW50ZS13ZWIvLi9zcmMvZGVhbC9kZWFsLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vYXBpLWNsaWVudGUtd2ViLy4vc3JjL2RlYWwvZGVhbC5zZXJ2aWNlLnRzIiwid2VicGFjazovL2FwaS1jbGllbnRlLXdlYi8uL3NyYy9kZWFsL2RlYWwudHlwZXMudHMiLCJ3ZWJwYWNrOi8vYXBpLWNsaWVudGUtd2ViLy4vc3JjL21hcmtldC9kZWNvcmF0b3JzL2dldC1tYXJrZXQtYnktaWQudHMiLCJ3ZWJwYWNrOi8vYXBpLWNsaWVudGUtd2ViLy4vc3JjL21hcmtldC9kZWNvcmF0b3JzL2dldC1tYXJrZXRzLmR0by50cyIsIndlYnBhY2s6Ly9hcGktY2xpZW50ZS13ZWIvLi9zcmMvbWFya2V0L2lucHV0LWR0by9nZXQtbWFya2V0LWJ5LWlkLXF1ZXJ5LmR0by50cyIsIndlYnBhY2s6Ly9hcGktY2xpZW50ZS13ZWIvLi9zcmMvbWFya2V0L2lucHV0LWR0by9nZXQtbWFya2V0cy1xdWVyeS5kdG8udHMiLCJ3ZWJwYWNrOi8vYXBpLWNsaWVudGUtd2ViLy4vc3JjL21hcmtldC9tYXJrZXQuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9hcGktY2xpZW50ZS13ZWIvLi9zcmMvbWFya2V0L21hcmtldC5zZXJ2aWNlLnRzIiwid2VicGFjazovL2FwaS1jbGllbnRlLXdlYi8uL3NyYy9taWNyb3NlcnZpY2VzL21pY3Jvc2VydmljZXMudHMiLCJ3ZWJwYWNrOi8vYXBpLWNsaWVudGUtd2ViLy4vc3JjL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vYXBpLWNsaWVudGUtd2ViLy4vc3JjL3Byb2R1Y3RzL3Byb2R1Y3RzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vYXBpLWNsaWVudGUtd2ViLy4vc3JjL3Byb2R1Y3RzL3Byb2R1Y3RzLnR5cGVzLnRzIiwid2VicGFjazovL2FwaS1jbGllbnRlLXdlYi8uL3NyYy9yZXBvcnRzL3JlcG9ydHMuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9hcGktY2xpZW50ZS13ZWIvLi9zcmMvcmVwb3J0cy9yZXBvcnRzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vYXBpLWNsaWVudGUtd2ViLy4vc3JjL3JlcG9ydHMvcmVwb3J0cy50eXBlLnRzIiwid2VicGFjazovL2FwaS1jbGllbnRlLXdlYi8uL3NyYy91dGlscy9xdWVyaWVzL2Fic3RyYWN0LXF1ZXJ5LnRzIiwid2VicGFjazovL2FwaS1jbGllbnRlLXdlYi8uL3NyYy91dGlscy9yZXF1ZXN0cy9wYXJzZS1jb3VudC50cyIsIndlYnBhY2s6Ly9hcGktY2xpZW50ZS13ZWIvLi9zcmMvdXRpbHMvcmVxdWVzdHMvcGFyc2UtcGFnZS50cyIsIndlYnBhY2s6Ly9hcGktY2xpZW50ZS13ZWIvLi9zcmMvdXRpbHMvcmVxdWVzdHMvcGFyc2UtcXVlcnktZmllbGRzLnRzIiwid2VicGFjazovL2FwaS1jbGllbnRlLXdlYi8uL3NyYy91dGlscy9yZXF1ZXN0cy9wYXJzZS1xdWVyeS1yZWxhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vYXBpLWNsaWVudGUtd2ViL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9jb21tb25cIiIsIndlYnBhY2s6Ly9hcGktY2xpZW50ZS13ZWIvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvcmVcIiIsIndlYnBhY2s6Ly9hcGktY2xpZW50ZS13ZWIvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIiIsIndlYnBhY2s6Ly9hcGktY2xpZW50ZS13ZWIvZXh0ZXJuYWwgY29tbW9uanMgXCJuZXN0anMtZ3JwYy1leGNlcHRpb25zXCIiLCJ3ZWJwYWNrOi8vYXBpLWNsaWVudGUtd2ViL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vYXBpLWNsaWVudGUtd2ViL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FwaS1jbGllbnRlLXdlYi8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFeGNlcHRpb24sIEh0dHBTdGF0dXMgfSBmcm9tIFwiQG5lc3Rqcy9jb21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXNpbmVzc1J1bGVFeGNlcHRpb24gZXh0ZW5kcyBIdHRwRXhjZXB0aW9ue1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTpzdHJpbmcpe1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsSHR0cFN0YXR1cy5CQURfUkVRVUVTVCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2J1c2luZXNzLXJ1bGUuZXhjZXB0aW9uJztcclxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciwgR2V0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi9hcHAuc2VydmljZSc7XHJcblxyXG5AQ29udHJvbGxlcigpXHJcbmV4cG9ydCBjbGFzcyBBcHBDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGFwcFNlcnZpY2U6IEFwcFNlcnZpY2UpIHt9XHJcblxyXG4gIEBHZXQoKVxyXG4gIGdldEhlbGxvKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5hcHBTZXJ2aWNlLmdldEhlbGxvKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuaW1wb3J0IHsgQXBwQ29udHJvbGxlciB9IGZyb20gJy4vYXBwLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi9hcHAuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcmtldENvbnRyb2xsZXIgfSBmcm9tICcuL21hcmtldC9tYXJrZXQuY29udHJvbGxlcic7XHJcbmltcG9ydCB7IE1hcmtldFNlcnZpY2UgfSBmcm9tICcuL21hcmtldC9tYXJrZXQuc2VydmljZSc7XHJcbmltcG9ydCB7IENsaWVudHNNb2R1bGUgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xyXG5pbXBvcnQgeyBEZWFsQ29udHJvbGxlciB9IGZyb20gJy4vZGVhbC9kZWFsLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBEZWFsU2VydmljZSB9IGZyb20gJy4vZGVhbC9kZWFsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSZXBvcnRzQ29udHJvbGxlciB9IGZyb20gJy4vcmVwb3J0cy9yZXBvcnRzLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBSZXBvcnRzU2VydmljZSB9IGZyb20gJy4vcmVwb3J0cy9yZXBvcnRzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQcm9kdWN0c0NvbnRyb2xsZXIgfSBmcm9tICcuL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuL3Byb2R1Y3RzL3Byb2R1Y3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDbGllbnRNb2R1bGVzIH0gZnJvbSAnLi9taWNyb3NlcnZpY2VzL21pY3Jvc2VydmljZXMnO1xyXG5cclxuQE1vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NsaWVudHNNb2R1bGUucmVnaXN0ZXIoQ2xpZW50TW9kdWxlcyldLFxyXG4gIGNvbnRyb2xsZXJzOiBbQXBwQ29udHJvbGxlciwgTWFya2V0Q29udHJvbGxlciwgUmVwb3J0c0NvbnRyb2xsZXIsIFByb2R1Y3RzQ29udHJvbGxlcixEZWFsQ29udHJvbGxlcl0sXHJcbiAgcHJvdmlkZXJzOiBbQXBwU2VydmljZSwgTWFya2V0U2VydmljZSwgUmVwb3J0c1NlcnZpY2UsIFByb2R1Y3RzU2VydmljZSxEZWFsU2VydmljZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwcFNlcnZpY2Uge1xyXG4gIGdldEhlbGxvKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ0hlbGxvIFdvcmxkISc7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIsIEdldCwgUGFyYW0sIFF1ZXJ5IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5pbXBvcnQgeyBEZWFsU2VydmljZSB9IGZyb20gJy4vZGVhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGVhbCwgR2V0RGVhbEJ5SWRSZXF1ZXN0LCBHZXREZWFsc1JlcXVlc3QgfSBmcm9tICcuL2RlYWwudHlwZXMnO1xyXG5cclxuQENvbnRyb2xsZXIoJ2RlYWwnKVxyXG5leHBvcnQgY2xhc3MgRGVhbENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZGVhbFNlcnZpY2U6IERlYWxTZXJ2aWNlKSB7fVxyXG5cclxuICBAR2V0KClcclxuICBnZXREZWFscyhAUXVlcnkoKSBwYXJhbXM6IEdldERlYWxzUmVxdWVzdCk6IFByb21pc2U8RGVhbFtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5kZWFsU2VydmljZS5nZXREZWFscyhwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgQEdldCgnOmlkJylcclxuICBnZXREZWFsQnlJZChAUGFyYW0oKSBnZXREZWFsOiBHZXREZWFsQnlJZFJlcXVlc3QpOiBQcm9taXNlPERlYWw+IHtcclxuICAgIHJldHVybiB0aGlzLmRlYWxTZXJ2aWNlLmdldERlYWxCeUlkKGdldERlYWwpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9uTW9kdWxlSW5pdCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuaW1wb3J0IHsgQ2xpZW50R3JwYyB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IG9uIH0gZnJvbSAnZXZlbnRzJztcclxuaW1wb3J0IHtcclxuICBEZWFsLFxyXG4gIEdldERlYWxCeUlkUmVxdWVzdCxcclxuICBHZXREZWFsQnlJZFJlc3BvbnNlLFxyXG4gIEdldERlYWxzUmVxdWVzdCxcclxuICBHZXREZWFsc1Jlc3BvbnNlLFxyXG59IGZyb20gJy4vZGVhbC50eXBlcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERlYWxTZXJ2aWNlIGltcGxlbWVudHMgT25Nb2R1bGVJbml0IHtcclxuICBwcml2YXRlIGRlYWxTZXJ2aWNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdERUFMX1NFUlZJQ0UnKSBwcml2YXRlIGNsaWVudDogQ2xpZW50R3JwYykge31cclxuXHJcbiAgb25Nb2R1bGVJbml0KCkge1xyXG4gICAgdGhpcy5kZWFsU2VydmljZSA9IHRoaXMuY2xpZW50LmdldFNlcnZpY2UoJ0RlYWxzJyk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXREZWFscyhnZXREZWFsc1JlcXVlc3Q6IEdldERlYWxzUmVxdWVzdCk6IFByb21pc2U8RGVhbFtdPiB7XHJcbiAgICBjb25zdCByZXNwb25lOiBPYnNlcnZhYmxlPEdldERlYWxzUmVzcG9uc2U+ID1cclxuICAgICAgdGhpcy5kZWFsU2VydmljZS5HZXREZWFscyhnZXREZWFsc1JlcXVlc3QpO1xyXG4gICAgY29uc3QgZGVhbFJlc3BvbnNlOiBHZXREZWFsc1Jlc3BvbnNlID0gYXdhaXQgcmVzcG9uZS50b1Byb21pc2UoKTtcclxuICAgIHJldHVybiBkZWFsUmVzcG9uc2UuZGVhbHM7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXREZWFsQnlJZChnZXREZWFsQnlJZFJlcXVlc3Q6IEdldERlYWxCeUlkUmVxdWVzdCk6IFByb21pc2U8RGVhbD4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2U6IE9ic2VydmFibGU8R2V0RGVhbEJ5SWRSZXNwb25zZT4gPVxyXG4gICAgICB0aGlzLmRlYWxTZXJ2aWNlLkdldERlYWxCeUlkKGdldERlYWxCeUlkUmVxdWVzdCk7XHJcbiAgICBjb25zdCBkZWFsUmVzcG9uc2U6IEdldERlYWxCeUlkUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS50b1Byb21pc2UoKTtcclxuICAgIHJldHVybiBkZWFsUmVzcG9uc2UuZGVhbDtcclxuICB9XHJcbn1cclxuIiwiLy9SZXF1ZXN0IHR5cGVzXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2V0RGVhbEJ5SWRSZXF1ZXN0IHtcclxuICBpZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdldERlYWxzUmVxdWVzdCB7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbi8vUmVzcG9uc2UgdHlwZXNcclxuZXhwb3J0IGludGVyZmFjZSBHZXREZWFsQnlJZFJlc3BvbnNlIHtcclxuICBkZWFsOiBEZWFsO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdldERlYWxzUmVzcG9uc2Uge1xyXG4gIGRlYWxzOiBEZWFsW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdCB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFya2V0IHtcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZWFsIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgcHJpY2U6IG51bWJlcjtcclxuICBkYXRlOiBEYXRlO1xyXG4gIHByb2R1Y3Q6IFByb2R1Y3Q7XHJcbiAgbWFya2V0OiBNYXJrZXQ7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBFeGVjdXRpb25Db250ZXh0LFxyXG4gIGNyZWF0ZVBhcmFtRGVjb3JhdG9yLFxyXG59IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuaW1wb3J0IHsgcGFyc2VRdWVyeUZpZWxkcyB9IGZyb20gJ3NyYy91dGlscy9yZXF1ZXN0cy9wYXJzZS1xdWVyeS1maWVsZHMnO1xyXG5pbXBvcnQgeyBwYXJzZVF1ZXJ5UmVsYXRpb25zIH0gZnJvbSAnc3JjL3V0aWxzL3JlcXVlc3RzL3BhcnNlLXF1ZXJ5LXJlbGF0aW9ucyc7XHJcbmltcG9ydCB7IEdldE1hcmtldEJ5SWREVE8gfSBmcm9tICcuLi9pbnB1dC1kdG8vZ2V0LW1hcmtldC1ieS1pZC1xdWVyeS5kdG8nO1xyXG5cclxuY29uc3QgYXZhbGlhYmxlRmllbGRzOiBzdHJpbmdbXSA9IFtcclxuICAnaWQnLFxyXG4gICduYW1lJyxcclxuICAndXJsSW1hZ2UnLFxyXG4gICdhZGRyZXNzJyxcclxuICAnY3JlYXRlZF9hdCcsXHJcbiAgJ3VwZGF0ZWRfYXQnLFxyXG4gICdjb21wYW55X2lkJyxcclxuXTtcclxuXHJcbmNvbnN0IGF2YWxpYWJsZVJlbGF0aW9ucyA9IFsnY29tcGFueSddO1xyXG5leHBvcnQgY29uc3QgR2V0TWFya2V0QnlJZFF1ZXJ5RFRPID0gY3JlYXRlUGFyYW1EZWNvcmF0b3IoXHJcbiAgKGRhdGEsIGN0eDogRXhlY3V0aW9uQ29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGN0eC5zd2l0Y2hUb0h0dHAoKS5nZXRSZXF1ZXN0KCk7XHJcbiAgICBjb25zdCBmaWVsZHM6IHN0cmluZyA9IHJlcXVlc3QucXVlcnlbJ2ZpZWxkcyddIGFzIHN0cmluZztcclxuICAgIGNvbnN0IHF1ZXJ5RmllbGRzOiBzdHJpbmdbXSA9IHBhcnNlUXVlcnlGaWVsZHMoZmllbGRzLCBhdmFsaWFibGVGaWVsZHMpO1xyXG4gICAgY29uc3QgcmVsYXRpb25zOiBzdHJpbmcgPSByZXF1ZXN0LnF1ZXJ5WydyZWxhdGlvbnMnXSBhcyBzdHJpbmc7XHJcbiAgICBjb25zdCBxdWVyeVJlbGF0aW9uczogc3RyaW5nW10gPSBwYXJzZVF1ZXJ5UmVsYXRpb25zKHJlbGF0aW9ucywgYXZhbGlhYmxlUmVsYXRpb25zKTtcclxuICAgIHJldHVybiAgbmV3IEdldE1hcmtldEJ5SWREVE8ocXVlcnlGaWVsZHMsIHF1ZXJ5UmVsYXRpb25zKTtcclxuICB9XHJcbik7XHJcbiIsImltcG9ydCB7XHJcbiAgQmFkUmVxdWVzdEV4Y2VwdGlvbixcclxuICBFeGVjdXRpb25Db250ZXh0LFxyXG4gIGNyZWF0ZVBhcmFtRGVjb3JhdG9yLFxyXG59IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuaW1wb3J0IHsgcGFyc2VDb3VudCB9IGZyb20gJ3NyYy91dGlscy9yZXF1ZXN0cy9wYXJzZS1jb3VudCc7XHJcbmltcG9ydCB7IHBhcnNlUGFnZSB9IGZyb20gJ3NyYy91dGlscy9yZXF1ZXN0cy9wYXJzZS1wYWdlJztcclxuaW1wb3J0IHsgcGFyc2VRdWVyeUZpZWxkcyB9IGZyb20gJ3NyYy91dGlscy9yZXF1ZXN0cy9wYXJzZS1xdWVyeS1maWVsZHMnO1xyXG5pbXBvcnQgeyBHZXRNYXJrZXRzRFRPIH0gZnJvbSAnLi4vaW5wdXQtZHRvL2dldC1tYXJrZXRzLXF1ZXJ5LmR0byc7XHJcbmltcG9ydCB7IHBhcnNlUXVlcnlSZWxhdGlvbnMgfSBmcm9tICdzcmMvdXRpbHMvcmVxdWVzdHMvcGFyc2UtcXVlcnktcmVsYXRpb25zJztcclxuXHJcbmNvbnN0IGF2YWxpYWJsZUZpZWxkczogc3RyaW5nW10gPSBbXHJcbiAgJ2lkJyxcclxuICAnbmFtZScsXHJcbiAgJ3VybEltYWdlJyxcclxuICAnYWRkcmVzcycsXHJcbiAgJ2NyZWF0ZWRfYXQnLFxyXG4gICd1cGRhdGVkX2F0JyxcclxuICAnY29tcGFueV9pZCcsXHJcbl07XHJcblxyXG5jb25zdCBhdmFsaWFibGVSZWxhdGlvbnMgPSBbJ2NvbXBhbnknXTtcclxuXHJcbmV4cG9ydCBjb25zdCBHZXRNYXJrZXRzUXVlcnlEVE8gPSBjcmVhdGVQYXJhbURlY29yYXRvcihcclxuICAoZGF0YSwgY3R4OiBFeGVjdXRpb25Db250ZXh0KSA9PiB7ICAgIFxyXG4gICAgY29uc3QgcmVxdWVzdCA9IGN0eC5zd2l0Y2hUb0h0dHAoKS5nZXRSZXF1ZXN0KCk7XHJcbiAgICBjb25zdCBwYWdlOiBudW1iZXIgPSBwYXJzZVBhZ2UocmVxdWVzdC5xdWVyeVsncGFnZSddIGFzIHN0cmluZyk7XHJcbiAgICBjb25zdCBjb3VudDogbnVtYmVyID0gcGFyc2VDb3VudChyZXF1ZXN0LnF1ZXJ5Wydjb3VudCddIGFzIHN0cmluZyk7XHJcbiAgICBjb25zdCBmaWVsZHM6IHN0cmluZyA9IHJlcXVlc3QucXVlcnlbJ2ZpZWxkcyddIGFzIHN0cmluZztcclxuICAgIGlmICghZmllbGRzKSB7XHJcbiAgICAgIHRocm93IG5ldyBCYWRSZXF1ZXN0RXhjZXB0aW9uKCdGaWVsZHMgcXVlcnkgcGFyYW1ldGVyIGlzIHJlcXVpcmVkJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBxdWVyeUZpZWxkczogc3RyaW5nW10gPSBwYXJzZVF1ZXJ5RmllbGRzKGZpZWxkcywgYXZhbGlhYmxlRmllbGRzKTtcclxuICAgIGNvbnN0IHJlbGF0aW9uczogc3RyaW5nID0gcmVxdWVzdC5xdWVyeVsncmVsYXRpb25zJ10gYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcXVlcnlSZWxhdGlvbnM6IHN0cmluZ1tdID0gcGFyc2VRdWVyeVJlbGF0aW9ucyhyZWxhdGlvbnMsIGF2YWxpYWJsZVJlbGF0aW9ucyk7XHJcbiAgICBjb25zdCBpc0V4bHVzaXZlOiBib29sZWFuID0gcmVxdWVzdC5xdWVyeVsnZXhjbHVzaXZlJ10gPT09ICd0cnVlJztcclxuICAgIGNvbnN0IG5hbWU6IHN0cmluZyA9IHJlcXVlc3QucXVlcnlbJ25hbWUnXSBhcyBzdHJpbmc7XHJcbiAgICBjb25zdCBhZGRyZXNzOiBzdHJpbmcgPSByZXF1ZXN0LnF1ZXJ5WydhZGRyZXNzJ10gYXMgc3RyaW5nO1xyXG4gICAgcmV0dXJuIG5ldyBHZXRNYXJrZXRzRFRPKHBhZ2UsIGNvdW50LCBxdWVyeUZpZWxkcywgcXVlcnlSZWxhdGlvbnMsIGlzRXhsdXNpdmUsIG5hbWUsIGFkZHJlc3MpO1xyXG4gIH0sXHJcbik7XHJcbiIsImV4cG9ydCBjbGFzcyBHZXRNYXJrZXRCeUlkRFRPIHtcclxuICAgIGZpZWxkczogc3RyaW5nW107XHJcbiAgICByZWxhdGlvbnM6IHN0cmluZ1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZpZWxkczogc3RyaW5nW10sIHJlbGF0aW9uczogc3RyaW5nW10pIHtcclxuICAgICAgICB0aGlzLmZpZWxkcyA9IGZpZWxkcztcclxuICAgICAgICB0aGlzLnJlbGF0aW9ucyA9IHJlbGF0aW9ucztcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFic3RyYWN0UXVlcnkgfSBmcm9tICdzcmMvdXRpbHMvcXVlcmllcy9hYnN0cmFjdC1xdWVyeSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0TWFya2V0c0RUTyBleHRlbmRzIEFic3RyYWN0UXVlcnkge1xyXG4gIGZpZWxkczogc3RyaW5nW107XHJcbiAgcmVsYXRpb25zOiBzdHJpbmdbXTtcclxuICBpc0V4Y2x1c2l2ZTogYm9vbGVhbjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIG92ZXJyaWRlIHBhZ2U6IG51bWJlcjtcclxuICBvdmVycmlkZSBjb3VudDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHBhZ2U6IG51bWJlcixcclxuICAgIGNvdW50OiBudW1iZXIsXHJcbiAgICBmaWVsZHM6IHN0cmluZ1tdLFxyXG4gICAgcmVsYXRpb25zOiBzdHJpbmdbXSxcclxuICAgIGlzRXhjbHVzaXZlOiBib29sZWFuLFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgYWRkcmVzczogc3RyaW5nLFxyXG4gICkge1xyXG4gICAgc3VwZXIocGFnZSwgY291bnQpO1xyXG4gICAgdGhpcy5maWVsZHMgPSBmaWVsZHM7XHJcbiAgICB0aGlzLnJlbGF0aW9ucyA9IHJlbGF0aW9ucztcclxuICAgIHRoaXMuaXNFeGNsdXNpdmUgPSBpc0V4Y2x1c2l2ZTtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmFkZHJlc3MgPSBhZGRyZXNzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyLCBHZXQsIFBhcmFtIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5pbXBvcnQgeyBNYXJrZXRTZXJ2aWNlIH0gZnJvbSAnLi9tYXJrZXQuc2VydmljZSc7XHJcbmltcG9ydCB7IEdldE1hcmtldHNRdWVyeURUTyB9IGZyb20gJy4vZGVjb3JhdG9ycy9nZXQtbWFya2V0cy5kdG8nO1xyXG5pbXBvcnQgeyBHZXRNYXJrZXRzRFRPIH0gZnJvbSAnLi9pbnB1dC1kdG8vZ2V0LW1hcmtldHMtcXVlcnkuZHRvJztcclxuaW1wb3J0IHsgR2V0TWFya2V0QnlJZFF1ZXJ5RFRPIH0gZnJvbSAnLi9kZWNvcmF0b3JzL2dldC1tYXJrZXQtYnktaWQnO1xyXG5pbXBvcnQgeyBHZXRNYXJrZXRCeUlkRFRPIH0gZnJvbSAnLi9pbnB1dC1kdG8vZ2V0LW1hcmtldC1ieS1pZC1xdWVyeS5kdG8nO1xyXG5pbXBvcnQgeyBHZXRBbGxNYXJrZXRzUmVxdWVzdCwgR2V0TWFya2V0QnlJZFJlcXVlc3QgfSBmcm9tICcuL21hcmtldC50eXBlcyc7XHJcblxyXG5AQ29udHJvbGxlcignbWFya2V0JylcclxuZXhwb3J0IGNsYXNzIE1hcmtldENvbnRyb2xsZXIge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG1hcmtldFNlcnZpY2U6IE1hcmtldFNlcnZpY2UpIHt9XHJcblxyXG4gIEBHZXQoKVxyXG4gIGdldE1hcmtldHMoQEdldE1hcmtldHNRdWVyeURUTygpIHF1ZXJ5OiBHZXRNYXJrZXRzRFRPKXtcclxuICAgIGNvbnN0IGdldEFsbE1hcmtldHNSZXF1ZXN0IDogR2V0QWxsTWFya2V0c1JlcXVlc3QgPSB7XHJcbiAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgcGFnaW5hdGlvblBhcmFtczoge1xyXG4gICAgICAgICAgcGFnZTogcXVlcnkucGFnZSxcclxuICAgICAgICAgIGNvdW50OiBxdWVyeS5jb3VudFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmllbGRzOiBxdWVyeS5maWVsZHMuam9pbignLCcpLFxyXG4gICAgICAgIHJlbGF0aW9uczogcXVlcnkucmVsYXRpb25zLmpvaW4oJywnKSxcclxuICAgICAgICBtYXJrZXROYW1lOiBxdWVyeS5uYW1lLFxyXG4gICAgICAgIGFkZHJlc3M6IHF1ZXJ5LmFkZHJlc3MsXHJcbiAgICAgICAgZXhjbHVzaXZlOiBxdWVyeS5pc0V4Y2x1c2l2ZVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMubWFya2V0U2VydmljZS5nZXRBbGxNYXJrZXRzKGdldEFsbE1hcmtldHNSZXF1ZXN0KTtcclxuICB9XHJcblxyXG4gIEBHZXQoJzppZCcpXHJcbiAgZ2V0TWFya2V0QnlJZChAR2V0TWFya2V0QnlJZFF1ZXJ5RFRPKCkgcXVlcnk6IEdldE1hcmtldEJ5SWREVE8sIEBQYXJhbSgnaWQnKSBpZDogc3RyaW5nKXtcclxuICAgIGNvbnN0IGdldE1hcmtldEJ5SWRSZXF1ZXN0OiBHZXRNYXJrZXRCeUlkUmVxdWVzdCA9IHtcclxuICAgICAgcXVlcnk6IHtcclxuICAgICAgICBtYXJrZXRJZDogaWQsXHJcbiAgICAgICAgZmllbGRzOiBxdWVyeS5maWVsZHMuam9pbignLCcpLFxyXG4gICAgICAgIHJlbGF0aW9uczogcXVlcnkucmVsYXRpb25zLmpvaW4oJywnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5tYXJrZXRTZXJ2aWNlLmdldE1hcmtldEJ5SWQoZ2V0TWFya2V0QnlJZFJlcXVlc3QpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9uTW9kdWxlSW5pdCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuaW1wb3J0IHsgQ2xpZW50R3JwYyB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgR2V0QWxsTWFya2V0c1JlcXVlc3QsIEdldEFsbE1hcmtldHNSZXNwb25zZSwgR2V0TWFya2V0QnlJZFJlcXVlc3QsIEdldE1hcmtldEJ5SWRSZXNwb25zZSwgTWFya2V0RW50aXR5IH0gZnJvbSAnLi9tYXJrZXQudHlwZXMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWFya2V0U2VydmljZSBpbXBsZW1lbnRzIE9uTW9kdWxlSW5pdCB7XHJcbiAgXHJcbiAgcHJpdmF0ZSBtYXJrZXRTZXJ2aWNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdNQVJLRVRfUEFDS0FHRScpIHByaXZhdGUgY2xpZW50OiBDbGllbnRHcnBjKSB7fVxyXG5cclxuICBvbk1vZHVsZUluaXQoKSB7XHJcbiAgICB0aGlzLm1hcmtldFNlcnZpY2UgPSB0aGlzLmNsaWVudC5nZXRTZXJ2aWNlKCdNYXJrZXQnKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldEFsbE1hcmtldHMoZ2V0QWxsTWFya2V0c1JlcXVlc3Q6IEdldEFsbE1hcmtldHNSZXF1ZXN0KSA6IFByb21pc2U8TWFya2V0RW50aXR5W10+e1xyXG4gICAgY29uc3QgcmVzcG9uc2UgOiBPYnNlcnZhYmxlPEdldEFsbE1hcmtldHNSZXNwb25zZT4gPSB0aGlzLm1hcmtldFNlcnZpY2UuR2V0QWxsTWFya2V0cyhnZXRBbGxNYXJrZXRzUmVxdWVzdCk7XHJcbiAgICBjb25zdCBtZXJrZXRSZXNwb25zZSA6IEdldEFsbE1hcmtldHNSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLnRvUHJvbWlzZSgpO1xyXG4gICAgcmV0dXJuIG1lcmtldFJlc3BvbnNlLm1hcmtldHM7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRNYXJrZXRCeUlkKGdldE1hcmtldEJ5SWRSZXF1ZXN0OiBHZXRNYXJrZXRCeUlkUmVxdWVzdCkgOiBQcm9taXNlPE1hcmtldEVudGl0eT57XHJcbiAgICBjb25zdCByZXNwb25zZSA6IE9ic2VydmFibGU8R2V0TWFya2V0QnlJZFJlc3BvbnNlPiA9IHRoaXMubWFya2V0U2VydmljZS5HZXRNYXJrZXRCeUlkKGdldE1hcmtldEJ5SWRSZXF1ZXN0KTtcclxuICAgIGNvbnN0IG1hcmtldFJlc3BvbnNlIDogR2V0TWFya2V0QnlJZFJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UudG9Qcm9taXNlKCk7XHJcbiAgICByZXR1cm4gbWFya2V0UmVzcG9uc2UubWFya2V0OyAgICBcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2xpZW50c01vZHVsZU9wdGlvbnMsIFRyYW5zcG9ydCB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcclxuXHJcbmV4cG9ydCBjb25zdCBDbGllbnRNb2R1bGVzOiBDbGllbnRzTW9kdWxlT3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnTUFSS0VUX1BBQ0tBR0UnLFxyXG4gICAgICAgIHRyYW5zcG9ydDogVHJhbnNwb3J0LkdSUEMsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBwYWNrYWdlOiAnbWFya2V0JyxcclxuICAgICAgICAgICAgcHJvdG9QYXRoOiBqb2luKGBwcm90by9tYXJrZXQucHJvdG9gKSxcclxuICAgICAgICAgICAgdXJsOiAnbG9jYWxob3N0OjUyNDAnLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0RFQUxfU0VSVklDRScsXHJcbiAgICAgICAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuR1JQQyxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIHBhY2thZ2U6ICdkZWFsJyxcclxuICAgICAgICAgICAgcHJvdG9QYXRoOiBqb2luKGBwcm90by9kZWFsLnByb3RvYCksXHJcbiAgICAgICAgICAgIHVybDogJ2xvY2FsaG9zdDo1MDcwJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnUkVQT1JUU19TRVJWSUNFJyxcclxuICAgICAgICB0cmFuc3BvcnQ6IFRyYW5zcG9ydC5HUlBDLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIHBhY2thZ2U6ICdyZXBvcnQnLFxyXG4gICAgICAgICAgcHJvdG9QYXRoOiBqb2luKGBwcm90by9yZXBvcnQucHJvdG9gKSxcclxuICAgICAgICAgIHVybDogJ2xvY2FsaG9zdDo1MDA1MicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdQUk9EVUNUU19TRVJWSUNFJyxcclxuICAgICAgICB0cmFuc3BvcnQ6IFRyYW5zcG9ydC5HUlBDLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIHBhY2thZ2U6ICdwcm90bycsXHJcbiAgICAgICAgICBwcm90b1BhdGg6IGpvaW4oYHByb3RvL3Byb2R1Y3QucHJvdG9gKSxcclxuICAgICAgICAgIHVybDogJ2xvY2FsaG9zdDo1MDA1MScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuXTsiLCJpbXBvcnQgeyBDb250cm9sbGVyLCBHZXQsIFBhcmFtIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuL3Byb2R1Y3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21wYXJlUHJvZHVjdExpc3QsIFByb2R1Y3QsIFByb2R1Y3RCeUlkUmVxdWVzdCwgUHJvZHVjdExpc3QsIFByb2R1Y3RMaXN0UmVxdWVzdCB9IGZyb20gJy4vcHJvZHVjdHMudHlwZXMnO1xyXG5cclxuQENvbnRyb2xsZXIoJ3Byb2R1Y3RzJylcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzQ29udHJvbGxlciB7XHJcbiAgICBcclxuICBcclxuY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByb2R1Y3RzU2VydmljZTpQcm9kdWN0c1NlcnZpY2UsXHJcbiAgKXt9XHJcbiAgICBAR2V0KCduYW1lcycpXHJcbiAgICBhc3luYyBnZXRQcm9kdWN0cygpOlByb21pc2U8UHJvZHVjdExpc3Q+e1xyXG4gICAgICBjb25zdCBwcm9kdWN0czpQcm9kdWN0TGlzdCA9IGF3YWl0IHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldFByb2R1Y3RzKCk7XHJcbiAgICAgIHJldHVybiBwcm9kdWN0cztcclxuICAgIH1cclxuICBcclxuICAgIEBHZXQoJ3ByaWNlcy86cHJvZHVjdE5hbWUnKVxyXG4gICAgYXN5bmMgZ2V0UHJvZHVjdHNCeVByaWNlKFxyXG4gICAgICBAUGFyYW0oKSBwYXJhbXM6IFByb2R1Y3RMaXN0UmVxdWVzdCxcclxuICAgICk6IFByb21pc2U8Q29tcGFyZVByb2R1Y3RMaXN0PiB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzOiBDb21wYXJlUHJvZHVjdExpc3QgPSBhd2FpdCB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRQcm9kdWN0c0J5UHJpY2UocGFyYW1zKTtcclxuICAgICAgcmV0dXJuIHByb2R1Y3RzO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgQEdldCgnOnByb2R1Y3RJZCcpXHJcbiAgICBhc3luYyBnZXRQcm9kdWN0QnlJZChcclxuICAgICAgQFBhcmFtKCkgZGF0YTpQcm9kdWN0QnlJZFJlcXVlc3RcclxuICAgICk6UHJvbWlzZTxQcm9kdWN0PntcclxuICAgICAgY29uc3QgcHJvZHVjdDpQcm9kdWN0ID0gYXdhaXQgdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0UHJvZHVjdEJ5SWQoZGF0YSk7XHJcbiAgICAgIHJldHVybiBwcm9kdWN0O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgQEdldCgnY29tcGFyZS86cHJvZHVjdElkJylcclxuICAgIGFzeW5jIGdldENvbXBhcmVQcm9kdWN0TGlzdEJ5SWQoXHJcbiAgICAgIEBQYXJhbSgpIGRhdGE6UHJvZHVjdEJ5SWRSZXF1ZXN0XHJcbiAgICApOlByb21pc2U8Q29tcGFyZVByb2R1Y3RMaXN0PntcclxuICAgICAgY29uc3QgcHJvZHVjdDpDb21wYXJlUHJvZHVjdExpc3QgPSBhd2FpdCB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRDb21wYXJlUHJvZHVjdExpc3RCeUlkKGRhdGEpO1xyXG4gICAgICByZXR1cm4gcHJvZHVjdDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9uTW9kdWxlSW5pdCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuaW1wb3J0IHsgQ2xpZW50R3JwYyB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IENvbXBhcmVQcm9kdWN0TGlzdCwgUHJvZHVjdCwgUHJvZHVjdEJ5SWRSZXF1ZXN0LCBQcm9kdWN0TGlzdCwgUHJvZHVjdExpc3RSZXF1ZXN0IH0gZnJvbSAnLi9wcm9kdWN0cy50eXBlcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQnVzaW5lc3NSdWxlRXhjZXB0aW9uIH0gZnJvbSAnQGFwcC9saWJzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzU2VydmljZSBpbXBsZW1lbnRzIE9uTW9kdWxlSW5pdHtcclxuICAgIHByaXZhdGUgcHJvZHVjdHNTZXJ2aWNlO1xyXG4gICAgY29uc3RydWN0b3IoQEluamVjdCgnUFJPRFVDVFNfU0VSVklDRScpIHByaXZhdGUgY2xpZW50OiBDbGllbnRHcnBjKSB7fVxyXG4gIFxyXG4gICAgb25Nb2R1bGVJbml0KCkge1xyXG4gICAgICB0aGlzLnByb2R1Y3RzU2VydmljZSA9IHRoaXMuY2xpZW50LmdldFNlcnZpY2UoJ1Byb2R1Y3RzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0UHJvZHVjdHMoKTpQcm9taXNlPFByb2R1Y3RMaXN0PntcclxuICAgICAgICBjb25zdCAkcHJvZHVjdHM6T2JzZXJ2YWJsZTxQcm9kdWN0TGlzdD4gPSB0aGlzLnByb2R1Y3RzU2VydmljZS5HZXRQcm9kdWN0cyh7fSk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHM6UHJvZHVjdExpc3QgPSBhd2FpdCAkcHJvZHVjdHMudG9Qcm9taXNlKCk7XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RzOyBcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRQcm9kdWN0c0J5UHJpY2UocHJvZHVjdExpc3RSZXF1ZXN0OlByb2R1Y3RMaXN0UmVxdWVzdCk6UHJvbWlzZTxDb21wYXJlUHJvZHVjdExpc3Q+e1xyXG4gICAgICBpZighcHJvZHVjdExpc3RSZXF1ZXN0KXtcclxuICAgICAgICB0aHJvdyBuZXcgQnVzaW5lc3NSdWxlRXhjZXB0aW9uKCdQcm9kdWN0IG5hbWUgZW1wdHknKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCAkcHJvZHVjdHM6T2JzZXJ2YWJsZTxDb21wYXJlUHJvZHVjdExpc3Q+ID0gdGhpcy5wcm9kdWN0c1NlcnZpY2UuR2V0UHJvZHVjdHNCeVByaWNlKHByb2R1Y3RMaXN0UmVxdWVzdCk7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzOkNvbXBhcmVQcm9kdWN0TGlzdCA9IGF3YWl0ICRwcm9kdWN0cy50b1Byb21pc2UoKTtcclxuICAgICAgcmV0dXJuIHByb2R1Y3RzO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldFByb2R1Y3RCeUlkKGRhdGE6UHJvZHVjdEJ5SWRSZXF1ZXN0KTpQcm9taXNlPFByb2R1Y3Q+e1xyXG4gICAgICBpZighZGF0YSl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEJ1c2luZXNzUnVsZUV4Y2VwdGlvbignUHJvZHVjdCBpZCBlbXB0eScpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0ICRwcm9kdWN0Ok9ic2VydmFibGU8UHJvZHVjdD4gPSB0aGlzLnByb2R1Y3RzU2VydmljZS5HZXRQcm9kdWN0QnlJZChkYXRhKTtcclxuICAgICAgY29uc3QgcHJvZHVjdDpQcm9kdWN0ID0gYXdhaXQgJHByb2R1Y3QudG9Qcm9taXNlKCk7XHJcbiAgICAgIHJldHVybiBwcm9kdWN0O1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldENvbXBhcmVQcm9kdWN0TGlzdEJ5SWQoZGF0YTpQcm9kdWN0QnlJZFJlcXVlc3QpOlByb21pc2U8Q29tcGFyZVByb2R1Y3RMaXN0PntcclxuICAgICAgaWYoIWRhdGEpe1xyXG4gICAgICAgIHRocm93IG5ldyBCdXNpbmVzc1J1bGVFeGNlcHRpb24oJ1Byb2R1Y3QgaWQgZW1wdHknKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCAkcHJvZHVjdHM6T2JzZXJ2YWJsZTxDb21wYXJlUHJvZHVjdExpc3Q+ID0gdGhpcy5wcm9kdWN0c1NlcnZpY2UuR2V0Q29tcGFyZVByb2R1Y3RMaXN0QnlJZChkYXRhKTtcclxuICAgICAgY29uc3QgcHJvZHVjdHM6Q29tcGFyZVByb2R1Y3RMaXN0ID0gYXdhaXQgJHByb2R1Y3RzLnRvUHJvbWlzZSgpO1xyXG4gICAgICByZXR1cm4gcHJvZHVjdHM7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3ROYW1le1xyXG4gICAgcHJvZHVjdF9uYW1lOnN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RMaXN0UmVxdWVzdCB7XHJcbiAgICBwcm9kdWN0X25hbWU6c3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdCB7XHJcbiAgICBpZDpzdHJpbmc7XHJcbiAgICBuYW1lOnN0cmluZztcclxuICAgIG1hcmtldDpzdHJpbmc7XHJcbiAgICBjdXJyZW50X3ByaWNlOnN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIE1hcmtldFByaWNle1xyXG4gICAgbWFya2V0X25hbWU6c3RyaW5nO1xyXG4gICAgcHJpY2U6bnVtYmVyO1xyXG4gICAgaWQ6c3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbXBhcmVQcm9kdWN0TGlzdHtcclxuICAgIHByb2R1Y3Q6UHJvZHVjdDtcclxuICAgIHByaWNlczpBcnJheTxNYXJrZXRQcmljZT47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdExpc3R7XHJcbiAgICBwcm9kdWN0OkFycmF5PFByb2R1Y3Q+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RCeUlkUmVxdWVzdHtcclxuICAgIHByb2R1Y3RfaWQ6c3RyaW5nO1xyXG59IiwiaW1wb3J0IHsgQm9keSwgQ29udHJvbGxlciwgR2V0LCBQb3N0LCBVc2VJbnRlcmNlcHRvcnMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcbmltcG9ydCB7IFJlcG9ydHNTZXJ2aWNlIH0gZnJvbSAnLi9yZXBvcnRzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDcmVhdGVSZXBvcnREdG8sIFJlcG9ydCB9IGZyb20gJy4vcmVwb3J0cy50eXBlJztcclxuaW1wb3J0IHsgR3JwY1RvSHR0cEludGVyY2VwdG9yIH0gZnJvbSAnbmVzdGpzLWdycGMtZXhjZXB0aW9ucyc7XHJcblxyXG5AQ29udHJvbGxlcigncmVwb3J0cycpXHJcbmV4cG9ydCBjbGFzcyBSZXBvcnRzQ29udHJvbGxlciB7XHJcblxyXG5jb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVwb3J0c1NlcnZpY2U6UmVwb3J0c1NlcnZpY2UsXHJcbil7fVxyXG5cclxuQFBvc3QoKVxyXG5AVXNlSW50ZXJjZXB0b3JzKEdycGNUb0h0dHBJbnRlcmNlcHRvcilcclxuYXN5bmMgY3JlYXRlUmVwb3J0KEBCb2R5KCkgZGF0YTpDcmVhdGVSZXBvcnREdG8pOlByb21pc2U8UmVwb3J0PntcclxuICAgIHJldHVybiB0aGlzLnJlcG9ydHNTZXJ2aWNlLmNyZWF0ZVJlcG9ydChkYXRhKTtcclxufVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25Nb2R1bGVJbml0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5pbXBvcnQgeyBDbGllbnRHcnBjIH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcclxuaW1wb3J0IHsgQ3JlYXRlUmVwb3J0RHRvLCBSZXBvcnQgfSBmcm9tICcuL3JlcG9ydHMudHlwZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlcG9ydHNTZXJ2aWNlIGltcGxlbWVudHMgT25Nb2R1bGVJbml0IHtcclxuICAgIHByaXZhdGUgcmVwb3J0c1NlcnZpY2U7XHJcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KCdSRVBPUlRTX1NFUlZJQ0UnKSBwcml2YXRlIGNsaWVudDpDbGllbnRHcnBjKXt9XHJcblxyXG4gICAgb25Nb2R1bGVJbml0KCkge1xyXG4gICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2UgPSB0aGlzLmNsaWVudC5nZXRTZXJ2aWNlKCdSZXBvcnRTZXJ2aWNlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY3JlYXRlUmVwb3J0KGRhdGE6Q3JlYXRlUmVwb3J0RHRvKXtcclxuICAgICAgICBjb25zdCAkcmVwb3J0Ok9ic2VydmFibGU8UmVwb3J0PiA9IHRoaXMucmVwb3J0c1NlcnZpY2UuQ3JlYXRlUmVwb3J0KGRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHJlcG9ydENyZWF0ZWQgPSBhd2FpdCAkcmVwb3J0LnRvUHJvbWlzZSgpO1xyXG4gICAgICAgIHJldHVybiByZXBvcnRDcmVhdGVkO1xyXG4gICAgfVxyXG59IiwiXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlUmVwb3J0RHRve1xyXG4gICAgcmVhc29uOnN0cmluZztcclxuICAgIHVzZXI6VXNlcjtcclxuICAgIG1hcmtldDpNYXJrZXQ7XHJcbiAgICBwcm9kdWN0OlByb2R1Y3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVwb3J0e1xyXG4gICAgaWQ6c3RyaW5nO1xyXG4gICAgcmVhc29uOnN0cmluZztcclxuICAgIHN0YXR1czpTdGF0dXM7XHJcbiAgICBkYXRlQXR0ZW5kZWQ6c3RyaW5nO1xyXG4gICAgdXNlcjpVc2VyO1xyXG4gICAgbWFya2V0Ok1hcmtldDtcclxuICAgIHByb2R1Y3Q6UHJvZHVjdFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBTdGF0dXN7XHJcbiAgICBBVFRFTkRFRCxcclxuICAgIFVOQVRURU5ERURcclxufVxyXG5cclxuaW50ZXJmYWNlIFVzZXJ7XHJcbiAgICBpZDpzdHJpbmc7XHJcbiAgICBuYW1lOnN0cmluZztcclxuICAgIGxhc3RuYW1lOnN0cmluZztcclxuICAgIGVtYWlsOnN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIE1hcmtldHtcclxuICAgIGlkOnN0cmluZztcclxuICAgIG5hbWU6c3RyaW5nO1xyXG4gICAgdXJsSW1nOnN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3R7XHJcbiAgICBpZDpzdHJpbmc7XHJcbiAgICBuYW1lOnN0cmluZztcclxuICAgIHVybEltZzpzdHJpbmc7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEFic3RyYWN0UXVlcnkge1xyXG4gIHBhZ2U6IG51bWJlcjtcclxuICBjb3VudDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwYWdlOiBudW1iZXIsIGNvdW50OiBudW1iZXIpIHtcclxuICAgIHRoaXMucGFnZSA9IHBhZ2U7XHJcbiAgICB0aGlzLmNvdW50ID0gY291bnQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJlcXVlc3QgfSBmcm9tIFwiZXhwcmVzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ291bnQoY291bnRQYXJhbTogc3RyaW5nKSB7XHJcbiAgICBpZihjb3VudFBhcmFtID09PSB1bmRlZmluZWQpeyByZXR1cm4gMjA7IH1cclxuICAgIGxldCBjb3VudDogbnVtYmVyID0gcGFyc2VJbnQoY291bnRQYXJhbSkgfHwgMjA7XHJcbiAgICBpZihjb3VudCA8IDEpeyBjb3VudCA9IDE7IH1cclxuICAgIGlmKGNvdW50ID4gNTApeyBjb3VudCA9IDUwOyB9XHJcbiAgICByZXR1cm4gY291bnQ7XHJcbn0iLCJpbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSBcImV4cHJlc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhZ2UocGFnZVBhcmFtOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgaWYocGFnZVBhcmFtID09PSB1bmRlZmluZWQpeyByZXR1cm4gMTsgfVxyXG4gICAgbGV0IHBhZ2U6IG51bWJlciA9IHBhcnNlSW50KHBhZ2VQYXJhbSkgfHwgMDtcclxuICAgIGlmKHBhZ2UgPCAwKXsgcGFnZSA9IDE7IH1cclxuICAgIGlmKHBhZ2UgPiAxMDAwMDAwKXsgcGFnZSA9IDEwMDAwMDA7IH1cclxuICAgIHJldHVybiBwYWdlO1xyXG59IiwiaW1wb3J0IHsgQmFkUmVxdWVzdEV4Y2VwdGlvbiB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVF1ZXJ5RmllbGRzKFxyXG4gIHBhcmFtRmllbGRzOiBzdHJpbmcsXHJcbiAgcXVlcnlGaWVsZHNWYWxpZDogc3RyaW5nW10sXHJcbik6IHN0cmluZ1tdIHtcclxuICBpZiAoIXBhcmFtRmllbGRzKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIGNvbnN0IGZpZWxkczogc3RyaW5nW10gPSBwYXJhbUZpZWxkcy5zcGxpdCgnLCcpLm1hcCgoZmllbGQpID0+IGZpZWxkLnRyaW0oKSk7XHJcbiAgbGV0IGZpZWxkc1Jlc3VsdDogc3RyaW5nW10gPSBbXTtcclxuICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcclxuICAgIGlmIChxdWVyeUZpZWxkc1ZhbGlkLmluY2x1ZGVzKGZpZWxkKSkge1xyXG4gICAgICBmaWVsZHNSZXN1bHQucHVzaChmaWVsZCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGZpZWxkc1Jlc3VsdDtcclxufVxyXG4iLCJpbXBvcnQgeyBCYWRSZXF1ZXN0RXhjZXB0aW9uIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUXVlcnlSZWxhdGlvbnMoXHJcbiAgcGFyYW1SZWxhdGlvbnM6IHN0cmluZyxcclxuICBxdWVyeVJlbGF0aW9uczogc3RyaW5nW10sXHJcbik6IHN0cmluZ1tdIHtcclxuICBpZiAoIXBhcmFtUmVsYXRpb25zKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIGNvbnN0IHJlbGF0aW9uczogc3RyaW5nW10gPSBwYXJhbVJlbGF0aW9uc1xyXG4gICAgLnNwbGl0KCcsJylcclxuICAgIC5tYXAoKHJlbGF0aW9uKSA9PiByZWxhdGlvbi50cmltKCkpO1xyXG4gIGxldCByZWxhdGlvbnNSZXN1bHQ6IHN0cmluZ1tdID0gW107XHJcbiAgcmVsYXRpb25zLmZvckVhY2goKHJlbGF0aW9uKSA9PiB7XHJcbiAgICBpZiAocXVlcnlSZWxhdGlvbnMuaW5jbHVkZXMocmVsYXRpb24pKSB7XHJcbiAgICAgIHJlbGF0aW9uc1Jlc3VsdC5wdXNoKHJlbGF0aW9uKTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gcmVsYXRpb25zUmVzdWx0O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29tbW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmVzdGpzLWdycGMtZXhjZXB0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBOZXN0RmFjdG9yeSB9IGZyb20gJ0BuZXN0anMvY29yZSc7XHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBib290c3RyYXAoKSB7XHJcbiAgY29uc3QgYXBwID0gYXdhaXQgTmVzdEZhY3RvcnkuY3JlYXRlKEFwcE1vZHVsZSk7XHJcbiAgYXBwLmVuYWJsZUNvcnMoKTtcclxuICBhd2FpdCBhcHAubGlzdGVuKDMwMDEpO1xyXG59XHJcbmJvb3RzdHJhcCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=