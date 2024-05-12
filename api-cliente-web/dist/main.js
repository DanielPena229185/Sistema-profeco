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
const microservices_2 = __webpack_require__(/*! ./microservices/microservices */ "./src/microservices/microservices.ts");
const reports_controller_1 = __webpack_require__(/*! ./reports/reports.controller */ "./src/reports/reports.controller.ts");
const reports_service_1 = __webpack_require__(/*! ./reports/reports.service */ "./src/reports/reports.service.ts");
const products_controller_1 = __webpack_require__(/*! ./products/products.controller */ "./src/products/products.controller.ts");
const products_service_1 = __webpack_require__(/*! ./products/products.service */ "./src/products/products.service.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [microservices_1.ClientsModule.register(microservices_2.microservices)],
        controllers: [app_controller_1.AppController, market_controller_1.MarketController, reports_controller_1.ReportsController, products_controller_1.ProductsController],
        providers: [app_service_1.AppService, market_service_1.MarketService, reports_service_1.ReportsService, products_service_1.ProductsService],
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
exports.microservices = void 0;
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const path_1 = __webpack_require__(/*! path */ "path");
exports.microservices = [
    {
        name: 'MARKET_PACKAGE',
        transport: microservices_1.Transport.GRPC,
        options: {
            package: 'market',
            protoPath: (0, path_1.join)(`src/microservices/protos/market.proto`),
            url: 'localhost:5240',
        },
    },
    {
        name: 'REPORTS_SERVICE',
        transport: microservices_1.Transport.GRPC,
        options: {
            package: 'report',
            protoPath: (0, path_1.join)(`src/microservices/protos/report.proto`),
            url: 'localhost:50052',
        },
    },
    {
        name: 'PRODUCTS_SERVICE',
        transport: microservices_1.Transport.GRPC,
        options: {
            package: 'proto',
            protoPath: (0, path_1.join)(`src/microservices/protos/product.proto`),
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ReportsController = class ReportsController {
};
exports.ReportsController = ReportsController;
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports')
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ReportsService = class ReportsService {
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)()
], ReportsService);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM7SUFDdEIsTUFBTSxHQUFHLEdBQUcsTUFBTSxrQkFBVyxDQUFDLE1BQU0sQ0FBQyxzQkFBUyxDQUFDLENBQUM7SUFDaEQsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBQ0QsU0FBUyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcGktY2xpZW50ZS13ZWIvLi9saWJzL2xpYnMvc3JjL2J1c2luZXNzLXJ1bGUuZXhjZXB0aW9uLnRzIiwid2VicGFjazovL2FwaS1jbGllbnRlLXdlYi8uL2xpYnMvbGlicy9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYXBpLWNsaWVudGUtd2ViLy4vc3JjL2FwcC5jb250cm9sbGVyLnRzIiwid2VicGFjazovL2FwaS1jbGllbnRlLXdlYi8uL3NyYy9hcHAubW9kdWxlLnRzIiwid2VicGFjazovL2FwaS1jbGllbnRlLXdlYi8uL3NyYy9hcHAuc2VydmljZS50cyIsIndlYnBhY2s6Ly9hcGktY2xpZW50ZS13ZWIvLi9zcmMvbWFya2V0L2RlY29yYXRvcnMvZ2V0LW1hcmtldC1ieS1pZC50cyIsIndlYnBhY2s6Ly9hcGktY2xpZW50ZS13ZWIvLi9zcmMvbWFya2V0L2RlY29yYXRvcnMvZ2V0LW1hcmtldHMuZHRvLnRzIiwid2VicGFjazovL2FwaS1jbGllbnRlLXdlYi8uL3NyYy9tYXJrZXQvaW5wdXQtZHRvL2dldC1tYXJrZXQtYnktaWQtcXVlcnkuZHRvLnRzIiwid2VicGFjazovL2FwaS1jbGllbnRlLXdlYi8uL3NyYy9tYXJrZXQvaW5wdXQtZHRvL2dldC1tYXJrZXRzLXF1ZXJ5LmR0by50cyIsIndlYnBhY2s6Ly9hcGktY2xpZW50ZS13ZWIvLi9zcmMvbWFya2V0L21hcmtldC5jb250cm9sbGVyLnRzIiwid2VicGFjazovL2FwaS1jbGllbnRlLXdlYi8uL3NyYy9tYXJrZXQvbWFya2V0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vYXBpLWNsaWVudGUtd2ViLy4vc3JjL21pY3Jvc2VydmljZXMvbWljcm9zZXJ2aWNlcy50cyIsIndlYnBhY2s6Ly9hcGktY2xpZW50ZS13ZWIvLi9zcmMvcHJvZHVjdHMvcHJvZHVjdHMuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9hcGktY2xpZW50ZS13ZWIvLi9zcmMvcHJvZHVjdHMvcHJvZHVjdHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly9hcGktY2xpZW50ZS13ZWIvLi9zcmMvcHJvZHVjdHMvcHJvZHVjdHMudHlwZXMudHMiLCJ3ZWJwYWNrOi8vYXBpLWNsaWVudGUtd2ViLy4vc3JjL3JlcG9ydHMvcmVwb3J0cy5jb250cm9sbGVyLnRzIiwid2VicGFjazovL2FwaS1jbGllbnRlLXdlYi8uL3NyYy9yZXBvcnRzL3JlcG9ydHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly9hcGktY2xpZW50ZS13ZWIvLi9zcmMvdXRpbHMvcXVlcmllcy9hYnN0cmFjdC1xdWVyeS50cyIsIndlYnBhY2s6Ly9hcGktY2xpZW50ZS13ZWIvLi9zcmMvdXRpbHMvcmVxdWVzdHMvcGFyc2UtY291bnQudHMiLCJ3ZWJwYWNrOi8vYXBpLWNsaWVudGUtd2ViLy4vc3JjL3V0aWxzL3JlcXVlc3RzL3BhcnNlLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vYXBpLWNsaWVudGUtd2ViLy4vc3JjL3V0aWxzL3JlcXVlc3RzL3BhcnNlLXF1ZXJ5LWZpZWxkcy50cyIsIndlYnBhY2s6Ly9hcGktY2xpZW50ZS13ZWIvLi9zcmMvdXRpbHMvcmVxdWVzdHMvcGFyc2UtcXVlcnktcmVsYXRpb25zLnRzIiwid2VicGFjazovL2FwaS1jbGllbnRlLXdlYi9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vYXBpLWNsaWVudGUtd2ViL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9jb3JlXCIiLCJ3ZWJwYWNrOi8vYXBpLWNsaWVudGUtd2ViL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9taWNyb3NlcnZpY2VzXCIiLCJ3ZWJwYWNrOi8vYXBpLWNsaWVudGUtd2ViL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vYXBpLWNsaWVudGUtd2ViL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FwaS1jbGllbnRlLXdlYi8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFeGNlcHRpb24sIEh0dHBTdGF0dXMgfSBmcm9tIFwiQG5lc3Rqcy9jb21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXNpbmVzc1J1bGVFeGNlcHRpb24gZXh0ZW5kcyBIdHRwRXhjZXB0aW9ue1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTpzdHJpbmcpe1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsSHR0cFN0YXR1cy5CQURfUkVRVUVTVCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2J1c2luZXNzLXJ1bGUuZXhjZXB0aW9uJztcclxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciwgR2V0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi9hcHAuc2VydmljZSc7XHJcblxyXG5AQ29udHJvbGxlcigpXHJcbmV4cG9ydCBjbGFzcyBBcHBDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGFwcFNlcnZpY2U6IEFwcFNlcnZpY2UpIHt9XHJcblxyXG4gIEBHZXQoKVxyXG4gIGdldEhlbGxvKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5hcHBTZXJ2aWNlLmdldEhlbGxvKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuaW1wb3J0IHsgQXBwQ29udHJvbGxlciB9IGZyb20gJy4vYXBwLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi9hcHAuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcmtldENvbnRyb2xsZXIgfSBmcm9tICcuL21hcmtldC9tYXJrZXQuY29udHJvbGxlcic7XHJcbmltcG9ydCB7IE1hcmtldFNlcnZpY2UgfSBmcm9tICcuL21hcmtldC9tYXJrZXQuc2VydmljZSc7XHJcbmltcG9ydCB7IENsaWVudHNNb2R1bGUgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xyXG5pbXBvcnQgeyBtaWNyb3NlcnZpY2VzIH0gZnJvbSAnLi9taWNyb3NlcnZpY2VzL21pY3Jvc2VydmljZXMnO1xyXG5pbXBvcnQgeyBSZXBvcnRzQ29udHJvbGxlciB9IGZyb20gJy4vcmVwb3J0cy9yZXBvcnRzLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgUmVwb3J0c1NlcnZpY2UgfSBmcm9tICcuL3JlcG9ydHMvcmVwb3J0cy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RzQ29udHJvbGxlciB9IGZyb20gJy4vcHJvZHVjdHMvcHJvZHVjdHMuY29udHJvbGxlcic7XG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuL3Byb2R1Y3RzL3Byb2R1Y3RzLnNlcnZpY2UnO1xuXHJcbkBNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDbGllbnRzTW9kdWxlLnJlZ2lzdGVyKG1pY3Jvc2VydmljZXMpXSxcclxuICBjb250cm9sbGVyczogW0FwcENvbnRyb2xsZXIsIE1hcmtldENvbnRyb2xsZXIsIFJlcG9ydHNDb250cm9sbGVyLCBQcm9kdWN0c0NvbnRyb2xsZXJdLFxyXG4gIHByb3ZpZGVyczogW0FwcFNlcnZpY2UsIE1hcmtldFNlcnZpY2UsIFJlcG9ydHNTZXJ2aWNlLCBQcm9kdWN0c1NlcnZpY2VdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlIHtcclxuICBnZXRIZWxsbygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdIZWxsbyBXb3JsZCEnO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEV4ZWN1dGlvbkNvbnRleHQsXHJcbiAgY3JlYXRlUGFyYW1EZWNvcmF0b3IsXHJcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5pbXBvcnQgeyBwYXJzZVF1ZXJ5RmllbGRzIH0gZnJvbSAnc3JjL3V0aWxzL3JlcXVlc3RzL3BhcnNlLXF1ZXJ5LWZpZWxkcyc7XHJcbmltcG9ydCB7IHBhcnNlUXVlcnlSZWxhdGlvbnMgfSBmcm9tICdzcmMvdXRpbHMvcmVxdWVzdHMvcGFyc2UtcXVlcnktcmVsYXRpb25zJztcclxuaW1wb3J0IHsgR2V0TWFya2V0QnlJZERUTyB9IGZyb20gJy4uL2lucHV0LWR0by9nZXQtbWFya2V0LWJ5LWlkLXF1ZXJ5LmR0byc7XHJcblxyXG5jb25zdCBhdmFsaWFibGVGaWVsZHM6IHN0cmluZ1tdID0gW1xyXG4gICdpZCcsXHJcbiAgJ25hbWUnLFxyXG4gICd1cmxJbWFnZScsXHJcbiAgJ2FkZHJlc3MnLFxyXG4gICdjcmVhdGVkX2F0JyxcclxuICAndXBkYXRlZF9hdCcsXHJcbiAgJ2NvbXBhbnlfaWQnLFxyXG5dO1xyXG5cclxuY29uc3QgYXZhbGlhYmxlUmVsYXRpb25zID0gWydjb21wYW55J107XHJcbmV4cG9ydCBjb25zdCBHZXRNYXJrZXRCeUlkUXVlcnlEVE8gPSBjcmVhdGVQYXJhbURlY29yYXRvcihcclxuICAoZGF0YSwgY3R4OiBFeGVjdXRpb25Db250ZXh0KSA9PiB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gY3R4LnN3aXRjaFRvSHR0cCgpLmdldFJlcXVlc3QoKTtcclxuICAgIGNvbnN0IGZpZWxkczogc3RyaW5nID0gcmVxdWVzdC5xdWVyeVsnZmllbGRzJ10gYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcXVlcnlGaWVsZHM6IHN0cmluZ1tdID0gcGFyc2VRdWVyeUZpZWxkcyhmaWVsZHMsIGF2YWxpYWJsZUZpZWxkcyk7XHJcbiAgICBjb25zdCByZWxhdGlvbnM6IHN0cmluZyA9IHJlcXVlc3QucXVlcnlbJ3JlbGF0aW9ucyddIGFzIHN0cmluZztcclxuICAgIGNvbnN0IHF1ZXJ5UmVsYXRpb25zOiBzdHJpbmdbXSA9IHBhcnNlUXVlcnlSZWxhdGlvbnMocmVsYXRpb25zLCBhdmFsaWFibGVSZWxhdGlvbnMpO1xyXG4gICAgcmV0dXJuICBuZXcgR2V0TWFya2V0QnlJZERUTyhxdWVyeUZpZWxkcywgcXVlcnlSZWxhdGlvbnMpO1xyXG4gIH1cclxuKTtcclxuIiwiaW1wb3J0IHtcclxuICBCYWRSZXF1ZXN0RXhjZXB0aW9uLFxyXG4gIEV4ZWN1dGlvbkNvbnRleHQsXHJcbiAgY3JlYXRlUGFyYW1EZWNvcmF0b3IsXHJcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5pbXBvcnQgeyBwYXJzZUNvdW50IH0gZnJvbSAnc3JjL3V0aWxzL3JlcXVlc3RzL3BhcnNlLWNvdW50JztcclxuaW1wb3J0IHsgcGFyc2VQYWdlIH0gZnJvbSAnc3JjL3V0aWxzL3JlcXVlc3RzL3BhcnNlLXBhZ2UnO1xyXG5pbXBvcnQgeyBwYXJzZVF1ZXJ5RmllbGRzIH0gZnJvbSAnc3JjL3V0aWxzL3JlcXVlc3RzL3BhcnNlLXF1ZXJ5LWZpZWxkcyc7XHJcbmltcG9ydCB7IEdldE1hcmtldHNEVE8gfSBmcm9tICcuLi9pbnB1dC1kdG8vZ2V0LW1hcmtldHMtcXVlcnkuZHRvJztcclxuaW1wb3J0IHsgcGFyc2VRdWVyeVJlbGF0aW9ucyB9IGZyb20gJ3NyYy91dGlscy9yZXF1ZXN0cy9wYXJzZS1xdWVyeS1yZWxhdGlvbnMnO1xyXG5cclxuY29uc3QgYXZhbGlhYmxlRmllbGRzOiBzdHJpbmdbXSA9IFtcclxuICAnaWQnLFxyXG4gICduYW1lJyxcclxuICAndXJsSW1hZ2UnLFxyXG4gICdhZGRyZXNzJyxcclxuICAnY3JlYXRlZF9hdCcsXHJcbiAgJ3VwZGF0ZWRfYXQnLFxyXG4gICdjb21wYW55X2lkJyxcclxuXTtcclxuXHJcbmNvbnN0IGF2YWxpYWJsZVJlbGF0aW9ucyA9IFsnY29tcGFueSddO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdldE1hcmtldHNRdWVyeURUTyA9IGNyZWF0ZVBhcmFtRGVjb3JhdG9yKFxyXG4gIChkYXRhLCBjdHg6IEV4ZWN1dGlvbkNvbnRleHQpID0+IHsgICAgXHJcbiAgICBjb25zdCByZXF1ZXN0ID0gY3R4LnN3aXRjaFRvSHR0cCgpLmdldFJlcXVlc3QoKTtcclxuICAgIGNvbnN0IHBhZ2U6IG51bWJlciA9IHBhcnNlUGFnZShyZXF1ZXN0LnF1ZXJ5WydwYWdlJ10gYXMgc3RyaW5nKTtcclxuICAgIGNvbnN0IGNvdW50OiBudW1iZXIgPSBwYXJzZUNvdW50KHJlcXVlc3QucXVlcnlbJ2NvdW50J10gYXMgc3RyaW5nKTtcclxuICAgIGNvbnN0IGZpZWxkczogc3RyaW5nID0gcmVxdWVzdC5xdWVyeVsnZmllbGRzJ10gYXMgc3RyaW5nO1xyXG4gICAgaWYgKCFmaWVsZHMpIHtcclxuICAgICAgdGhyb3cgbmV3IEJhZFJlcXVlc3RFeGNlcHRpb24oJ0ZpZWxkcyBxdWVyeSBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHF1ZXJ5RmllbGRzOiBzdHJpbmdbXSA9IHBhcnNlUXVlcnlGaWVsZHMoZmllbGRzLCBhdmFsaWFibGVGaWVsZHMpO1xyXG4gICAgY29uc3QgcmVsYXRpb25zOiBzdHJpbmcgPSByZXF1ZXN0LnF1ZXJ5WydyZWxhdGlvbnMnXSBhcyBzdHJpbmc7XHJcbiAgICBjb25zdCBxdWVyeVJlbGF0aW9uczogc3RyaW5nW10gPSBwYXJzZVF1ZXJ5UmVsYXRpb25zKHJlbGF0aW9ucywgYXZhbGlhYmxlUmVsYXRpb25zKTtcclxuICAgIGNvbnN0IGlzRXhsdXNpdmU6IGJvb2xlYW4gPSByZXF1ZXN0LnF1ZXJ5WydleGNsdXNpdmUnXSA9PT0gJ3RydWUnO1xyXG4gICAgY29uc3QgbmFtZTogc3RyaW5nID0gcmVxdWVzdC5xdWVyeVsnbmFtZSddIGFzIHN0cmluZztcclxuICAgIGNvbnN0IGFkZHJlc3M6IHN0cmluZyA9IHJlcXVlc3QucXVlcnlbJ2FkZHJlc3MnXSBhcyBzdHJpbmc7XHJcbiAgICByZXR1cm4gbmV3IEdldE1hcmtldHNEVE8ocGFnZSwgY291bnQsIHF1ZXJ5RmllbGRzLCBxdWVyeVJlbGF0aW9ucywgaXNFeGx1c2l2ZSwgbmFtZSwgYWRkcmVzcyk7XHJcbiAgfSxcclxuKTtcclxuIiwiZXhwb3J0IGNsYXNzIEdldE1hcmtldEJ5SWREVE8ge1xyXG4gICAgZmllbGRzOiBzdHJpbmdbXTtcclxuICAgIHJlbGF0aW9uczogc3RyaW5nW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoZmllbGRzOiBzdHJpbmdbXSwgcmVsYXRpb25zOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHRoaXMuZmllbGRzID0gZmllbGRzO1xyXG4gICAgICAgIHRoaXMucmVsYXRpb25zID0gcmVsYXRpb25zO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQWJzdHJhY3RRdWVyeSB9IGZyb20gJ3NyYy91dGlscy9xdWVyaWVzL2Fic3RyYWN0LXF1ZXJ5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRNYXJrZXRzRFRPIGV4dGVuZHMgQWJzdHJhY3RRdWVyeSB7XHJcbiAgZmllbGRzOiBzdHJpbmdbXTtcclxuICByZWxhdGlvbnM6IHN0cmluZ1tdO1xyXG4gIGlzRXhjbHVzaXZlOiBib29sZWFuO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgb3ZlcnJpZGUgcGFnZTogbnVtYmVyO1xyXG4gIG92ZXJyaWRlIGNvdW50OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcGFnZTogbnVtYmVyLFxyXG4gICAgY291bnQ6IG51bWJlcixcclxuICAgIGZpZWxkczogc3RyaW5nW10sXHJcbiAgICByZWxhdGlvbnM6IHN0cmluZ1tdLFxyXG4gICAgaXNFeGNsdXNpdmU6IGJvb2xlYW4sXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBhZGRyZXNzOiBzdHJpbmcsXHJcbiAgKSB7XHJcbiAgICBzdXBlcihwYWdlLCBjb3VudCk7XHJcbiAgICB0aGlzLmZpZWxkcyA9IGZpZWxkcztcclxuICAgIHRoaXMucmVsYXRpb25zID0gcmVsYXRpb25zO1xyXG4gICAgdGhpcy5pc0V4Y2x1c2l2ZSA9IGlzRXhjbHVzaXZlO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuYWRkcmVzcyA9IGFkZHJlc3M7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIsIEdldCwgUGFyYW0gfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcbmltcG9ydCB7IE1hcmtldFNlcnZpY2UgfSBmcm9tICcuL21hcmtldC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR2V0TWFya2V0c1F1ZXJ5RFRPIH0gZnJvbSAnLi9kZWNvcmF0b3JzL2dldC1tYXJrZXRzLmR0byc7XHJcbmltcG9ydCB7IEdldE1hcmtldHNEVE8gfSBmcm9tICcuL2lucHV0LWR0by9nZXQtbWFya2V0cy1xdWVyeS5kdG8nO1xyXG5pbXBvcnQgeyBHZXRBbGxNYXJrZXRzUmVxdWVzdCwgR2V0TWFya2V0QnlJZFJlcXVlc3QgfSBmcm9tICdzcmMvbWljcm9zZXJ2aWNlcy9tYXJrZXQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgR2V0TWFya2V0QnlJZFF1ZXJ5RFRPIH0gZnJvbSAnLi9kZWNvcmF0b3JzL2dldC1tYXJrZXQtYnktaWQnO1xyXG5pbXBvcnQgeyBHZXRNYXJrZXRCeUlkRFRPIH0gZnJvbSAnLi9pbnB1dC1kdG8vZ2V0LW1hcmtldC1ieS1pZC1xdWVyeS5kdG8nO1xyXG5cclxuQENvbnRyb2xsZXIoJ21hcmtldCcpXHJcbmV4cG9ydCBjbGFzcyBNYXJrZXRDb250cm9sbGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBtYXJrZXRTZXJ2aWNlOiBNYXJrZXRTZXJ2aWNlKSB7fVxyXG5cclxuICBAR2V0KClcclxuICBnZXRNYXJrZXRzKEBHZXRNYXJrZXRzUXVlcnlEVE8oKSBxdWVyeTogR2V0TWFya2V0c0RUTyl7XHJcbiAgICBjb25zdCBnZXRBbGxNYXJrZXRzUmVxdWVzdCA6IEdldEFsbE1hcmtldHNSZXF1ZXN0ID0ge1xyXG4gICAgICBxdWVyeToge1xyXG4gICAgICAgIHBhZ2luYXRpb25QYXJhbXM6IHtcclxuICAgICAgICAgIHBhZ2U6IHF1ZXJ5LnBhZ2UsXHJcbiAgICAgICAgICBjb3VudDogcXVlcnkuY291bnRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpZWxkczogcXVlcnkuZmllbGRzLmpvaW4oJywnKSxcclxuICAgICAgICByZWxhdGlvbnM6IHF1ZXJ5LnJlbGF0aW9ucy5qb2luKCcsJyksXHJcbiAgICAgICAgbWFya2V0TmFtZTogcXVlcnkubmFtZSxcclxuICAgICAgICBhZGRyZXNzOiBxdWVyeS5hZGRyZXNzLFxyXG4gICAgICAgIGV4Y2x1c2l2ZTogcXVlcnkuaXNFeGNsdXNpdmVcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLm1hcmtldFNlcnZpY2UuZ2V0QWxsTWFya2V0cyhnZXRBbGxNYXJrZXRzUmVxdWVzdCk7XHJcbiAgfVxyXG5cclxuICBAR2V0KCc6aWQnKVxyXG4gIGdldE1hcmtldEJ5SWQoQEdldE1hcmtldEJ5SWRRdWVyeURUTygpIHF1ZXJ5OiBHZXRNYXJrZXRCeUlkRFRPLCBAUGFyYW0oJ2lkJykgaWQ6IHN0cmluZyl7XHJcbiAgICBjb25zdCBnZXRNYXJrZXRCeUlkUmVxdWVzdDogR2V0TWFya2V0QnlJZFJlcXVlc3QgPSB7XHJcbiAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgbWFya2V0SWQ6IGlkLFxyXG4gICAgICAgIGZpZWxkczogcXVlcnkuZmllbGRzLmpvaW4oJywnKSxcclxuICAgICAgICByZWxhdGlvbnM6IHF1ZXJ5LnJlbGF0aW9ucy5qb2luKCcsJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMubWFya2V0U2VydmljZS5nZXRNYXJrZXRCeUlkKGdldE1hcmtldEJ5SWRSZXF1ZXN0KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPbk1vZHVsZUluaXQgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcbmltcG9ydCB7IENsaWVudEdycGMgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEdldEFsbE1hcmtldHNSZXF1ZXN0LCBHZXRBbGxNYXJrZXRzUmVzcG9uc2UsIEdldE1hcmtldEJ5SWRSZXF1ZXN0LCBHZXRNYXJrZXRCeUlkUmVzcG9uc2UsIE1hcmtldEVudGl0eSB9IGZyb20gJ3NyYy9taWNyb3NlcnZpY2VzL21hcmtldC5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWFya2V0U2VydmljZSBpbXBsZW1lbnRzIE9uTW9kdWxlSW5pdCB7XHJcbiAgXHJcbiAgcHJpdmF0ZSBtYXJrZXRTZXJ2aWNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdNQVJLRVRfUEFDS0FHRScpIHByaXZhdGUgY2xpZW50OiBDbGllbnRHcnBjKSB7fVxyXG5cclxuICBvbk1vZHVsZUluaXQoKSB7XHJcbiAgICB0aGlzLm1hcmtldFNlcnZpY2UgPSB0aGlzLmNsaWVudC5nZXRTZXJ2aWNlKCdNYXJrZXQnKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldEFsbE1hcmtldHMoZ2V0QWxsTWFya2V0c1JlcXVlc3Q6IEdldEFsbE1hcmtldHNSZXF1ZXN0KSA6IFByb21pc2U8TWFya2V0RW50aXR5W10+e1xyXG4gICAgY29uc3QgcmVzcG9uc2UgOiBPYnNlcnZhYmxlPEdldEFsbE1hcmtldHNSZXNwb25zZT4gPSB0aGlzLm1hcmtldFNlcnZpY2UuR2V0QWxsTWFya2V0cyhnZXRBbGxNYXJrZXRzUmVxdWVzdCk7XHJcbiAgICBjb25zdCBtZXJrZXRSZXNwb25zZSA6IEdldEFsbE1hcmtldHNSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLnRvUHJvbWlzZSgpO1xyXG4gICAgcmV0dXJuIG1lcmtldFJlc3BvbnNlLm1hcmtldHM7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRNYXJrZXRCeUlkKGdldE1hcmtldEJ5SWRSZXF1ZXN0OiBHZXRNYXJrZXRCeUlkUmVxdWVzdCkgOiBQcm9taXNlPE1hcmtldEVudGl0eT57XHJcbiAgICBjb25zdCByZXNwb25zZSA6IE9ic2VydmFibGU8R2V0TWFya2V0QnlJZFJlc3BvbnNlPiA9IHRoaXMubWFya2V0U2VydmljZS5HZXRNYXJrZXRCeUlkKGdldE1hcmtldEJ5SWRSZXF1ZXN0KTtcclxuICAgIGNvbnN0IG1hcmtldFJlc3BvbnNlIDogR2V0TWFya2V0QnlJZFJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UudG9Qcm9taXNlKCk7XHJcbiAgICByZXR1cm4gbWFya2V0UmVzcG9uc2UubWFya2V0OyAgICBcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2xpZW50c01vZHVsZU9wdGlvbnMsIFRyYW5zcG9ydCB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcclxuXHJcbmV4cG9ydCBjb25zdCBtaWNyb3NlcnZpY2VzOiBDbGllbnRzTW9kdWxlT3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnTUFSS0VUX1BBQ0tBR0UnLFxyXG4gICAgICAgIHRyYW5zcG9ydDogVHJhbnNwb3J0LkdSUEMsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBwYWNrYWdlOiAnbWFya2V0JyxcclxuICAgICAgICAgICAgcHJvdG9QYXRoOiBqb2luKGBzcmMvbWljcm9zZXJ2aWNlcy9wcm90b3MvbWFya2V0LnByb3RvYCksXHJcbiAgICAgICAgICAgIHVybDogJ2xvY2FsaG9zdDo1MjQwJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnUkVQT1JUU19TRVJWSUNFJyxcclxuICAgICAgICB0cmFuc3BvcnQ6IFRyYW5zcG9ydC5HUlBDLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIHBhY2thZ2U6ICdyZXBvcnQnLFxyXG4gICAgICAgICAgcHJvdG9QYXRoOiBqb2luKGBzcmMvbWljcm9zZXJ2aWNlcy9wcm90b3MvcmVwb3J0LnByb3RvYCksXHJcbiAgICAgICAgICB1cmw6ICdsb2NhbGhvc3Q6NTAwNTInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnUFJPRFVDVFNfU0VSVklDRScsXHJcbiAgICAgICAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuR1JQQyxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBwYWNrYWdlOiAncHJvdG8nLFxyXG4gICAgICAgICAgcHJvdG9QYXRoOiBqb2luKGBzcmMvbWljcm9zZXJ2aWNlcy9wcm90b3MvcHJvZHVjdC5wcm90b2ApLFxyXG4gICAgICAgICAgdXJsOiAnbG9jYWxob3N0OjUwMDUxJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG5dOyIsImltcG9ydCB7IENvbnRyb2xsZXIsIEdldCwgUGFyYW0gfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJy4vcHJvZHVjdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbXBhcmVQcm9kdWN0TGlzdCwgUHJvZHVjdCwgUHJvZHVjdEJ5SWRSZXF1ZXN0LCBQcm9kdWN0TGlzdCwgUHJvZHVjdExpc3RSZXF1ZXN0IH0gZnJvbSAnLi9wcm9kdWN0cy50eXBlcyc7XHJcblxyXG5AQ29udHJvbGxlcigncHJvZHVjdHMnKVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNDb250cm9sbGVyIHtcclxuICAgIFxyXG4gIFxyXG5jb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJvZHVjdHNTZXJ2aWNlOlByb2R1Y3RzU2VydmljZSxcclxuICApe31cclxuICAgIEBHZXQoJ25hbWVzJylcclxuICAgIGFzeW5jIGdldFByb2R1Y3RzKCk6UHJvbWlzZTxQcm9kdWN0TGlzdD57XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzOlByb2R1Y3RMaXN0ID0gYXdhaXQgdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0UHJvZHVjdHMoKTtcclxuICAgICAgcmV0dXJuIHByb2R1Y3RzO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgQEdldCgncHJpY2VzLzpwcm9kdWN0TmFtZScpXHJcbiAgICBhc3luYyBnZXRQcm9kdWN0c0J5UHJpY2UoXHJcbiAgICAgIEBQYXJhbSgpIHBhcmFtczogUHJvZHVjdExpc3RSZXF1ZXN0LFxyXG4gICAgKTogUHJvbWlzZTxDb21wYXJlUHJvZHVjdExpc3Q+IHtcclxuICAgICAgY29uc3QgcHJvZHVjdHM6IENvbXBhcmVQcm9kdWN0TGlzdCA9IGF3YWl0IHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldFByb2R1Y3RzQnlQcmljZShwYXJhbXMpO1xyXG4gICAgICByZXR1cm4gcHJvZHVjdHM7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBAR2V0KCc6cHJvZHVjdElkJylcclxuICAgIGFzeW5jIGdldFByb2R1Y3RCeUlkKFxyXG4gICAgICBAUGFyYW0oKSBkYXRhOlByb2R1Y3RCeUlkUmVxdWVzdFxyXG4gICAgKTpQcm9taXNlPFByb2R1Y3Q+e1xyXG4gICAgICBjb25zdCBwcm9kdWN0OlByb2R1Y3QgPSBhd2FpdCB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRQcm9kdWN0QnlJZChkYXRhKTtcclxuICAgICAgcmV0dXJuIHByb2R1Y3Q7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBAR2V0KCdjb21wYXJlLzpwcm9kdWN0SWQnKVxyXG4gICAgYXN5bmMgZ2V0Q29tcGFyZVByb2R1Y3RMaXN0QnlJZChcclxuICAgICAgQFBhcmFtKCkgZGF0YTpQcm9kdWN0QnlJZFJlcXVlc3RcclxuICAgICk6UHJvbWlzZTxDb21wYXJlUHJvZHVjdExpc3Q+e1xyXG4gICAgICBjb25zdCBwcm9kdWN0OkNvbXBhcmVQcm9kdWN0TGlzdCA9IGF3YWl0IHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldENvbXBhcmVQcm9kdWN0TGlzdEJ5SWQoZGF0YSk7XHJcbiAgICAgIHJldHVybiBwcm9kdWN0O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25Nb2R1bGVJbml0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5pbXBvcnQgeyBDbGllbnRHcnBjIH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcclxuaW1wb3J0IHsgQ29tcGFyZVByb2R1Y3RMaXN0LCBQcm9kdWN0LCBQcm9kdWN0QnlJZFJlcXVlc3QsIFByb2R1Y3RMaXN0LCBQcm9kdWN0TGlzdFJlcXVlc3QgfSBmcm9tICcuL3Byb2R1Y3RzLnR5cGVzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBCdXNpbmVzc1J1bGVFeGNlcHRpb24gfSBmcm9tICdAYXBwL2xpYnMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNTZXJ2aWNlIGltcGxlbWVudHMgT25Nb2R1bGVJbml0e1xyXG4gICAgcHJpdmF0ZSBwcm9kdWN0c1NlcnZpY2U7XHJcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KCdQUk9EVUNUU19TRVJWSUNFJykgcHJpdmF0ZSBjbGllbnQ6IENsaWVudEdycGMpIHt9XHJcbiAgXHJcbiAgICBvbk1vZHVsZUluaXQoKSB7XHJcbiAgICAgIHRoaXMucHJvZHVjdHNTZXJ2aWNlID0gdGhpcy5jbGllbnQuZ2V0U2VydmljZSgnUHJvZHVjdHMnKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRQcm9kdWN0cygpOlByb21pc2U8UHJvZHVjdExpc3Q+e1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0czpPYnNlcnZhYmxlPFByb2R1Y3RMaXN0PiA9IHRoaXMucHJvZHVjdHNTZXJ2aWNlLkdldFByb2R1Y3RzKHt9KTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0czpQcm9kdWN0TGlzdCA9IGF3YWl0ICRwcm9kdWN0cy50b1Byb21pc2UoKTtcclxuICAgICAgICByZXR1cm4gcHJvZHVjdHM7IFxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldFByb2R1Y3RzQnlQcmljZShwcm9kdWN0TGlzdFJlcXVlc3Q6UHJvZHVjdExpc3RSZXF1ZXN0KTpQcm9taXNlPENvbXBhcmVQcm9kdWN0TGlzdD57XHJcbiAgICAgIGlmKCFwcm9kdWN0TGlzdFJlcXVlc3Qpe1xyXG4gICAgICAgIHRocm93IG5ldyBCdXNpbmVzc1J1bGVFeGNlcHRpb24oJ1Byb2R1Y3QgbmFtZSBlbXB0eScpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0ICRwcm9kdWN0czpPYnNlcnZhYmxlPENvbXBhcmVQcm9kdWN0TGlzdD4gPSB0aGlzLnByb2R1Y3RzU2VydmljZS5HZXRQcm9kdWN0c0J5UHJpY2UocHJvZHVjdExpc3RSZXF1ZXN0KTtcclxuICAgICAgY29uc3QgcHJvZHVjdHM6Q29tcGFyZVByb2R1Y3RMaXN0ID0gYXdhaXQgJHByb2R1Y3RzLnRvUHJvbWlzZSgpO1xyXG4gICAgICByZXR1cm4gcHJvZHVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0UHJvZHVjdEJ5SWQoZGF0YTpQcm9kdWN0QnlJZFJlcXVlc3QpOlByb21pc2U8UHJvZHVjdD57XHJcbiAgICAgIGlmKCFkYXRhKXtcclxuICAgICAgICB0aHJvdyBuZXcgQnVzaW5lc3NSdWxlRXhjZXB0aW9uKCdQcm9kdWN0IGlkIGVtcHR5Jyk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgJHByb2R1Y3Q6T2JzZXJ2YWJsZTxQcm9kdWN0PiA9IHRoaXMucHJvZHVjdHNTZXJ2aWNlLkdldFByb2R1Y3RCeUlkKGRhdGEpO1xyXG4gICAgICBjb25zdCBwcm9kdWN0OlByb2R1Y3QgPSBhd2FpdCAkcHJvZHVjdC50b1Byb21pc2UoKTtcclxuICAgICAgcmV0dXJuIHByb2R1Y3Q7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0Q29tcGFyZVByb2R1Y3RMaXN0QnlJZChkYXRhOlByb2R1Y3RCeUlkUmVxdWVzdCk6UHJvbWlzZTxDb21wYXJlUHJvZHVjdExpc3Q+e1xyXG4gICAgICBpZighZGF0YSl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEJ1c2luZXNzUnVsZUV4Y2VwdGlvbignUHJvZHVjdCBpZCBlbXB0eScpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0ICRwcm9kdWN0czpPYnNlcnZhYmxlPENvbXBhcmVQcm9kdWN0TGlzdD4gPSB0aGlzLnByb2R1Y3RzU2VydmljZS5HZXRDb21wYXJlUHJvZHVjdExpc3RCeUlkKGRhdGEpO1xyXG4gICAgICBjb25zdCBwcm9kdWN0czpDb21wYXJlUHJvZHVjdExpc3QgPSBhd2FpdCAkcHJvZHVjdHMudG9Qcm9taXNlKCk7XHJcbiAgICAgIHJldHVybiBwcm9kdWN0cztcclxuICAgIH1cclxufSIsImV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdE5hbWV7XHJcbiAgICBwcm9kdWN0X25hbWU6c3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdExpc3RSZXF1ZXN0IHtcclxuICAgIHByb2R1Y3RfbmFtZTpzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0IHtcclxuICAgIGlkOnN0cmluZztcclxuICAgIG5hbWU6c3RyaW5nO1xyXG4gICAgbWFya2V0OnN0cmluZztcclxuICAgIGN1cnJlbnRfcHJpY2U6c3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTWFya2V0UHJpY2V7XHJcbiAgICBtYXJrZXRfbmFtZTpzdHJpbmc7XHJcbiAgICBwcmljZTpudW1iZXI7XHJcbiAgICBpZDpzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tcGFyZVByb2R1Y3RMaXN0e1xyXG4gICAgcHJvZHVjdDpQcm9kdWN0O1xyXG4gICAgcHJpY2VzOkFycmF5PE1hcmtldFByaWNlPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0TGlzdHtcclxuICAgIHByb2R1Y3Q6QXJyYXk8UHJvZHVjdD47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEJ5SWRSZXF1ZXN0e1xyXG4gICAgcHJvZHVjdF9pZDpzdHJpbmc7XHJcbn0iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5cclxuQENvbnRyb2xsZXIoJ3JlcG9ydHMnKVxyXG5leHBvcnQgY2xhc3MgUmVwb3J0c0NvbnRyb2xsZXIge31cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlcG9ydHNTZXJ2aWNlIHt9XHJcbiIsImV4cG9ydCBjbGFzcyBBYnN0cmFjdFF1ZXJ5IHtcclxuICBwYWdlOiBudW1iZXI7XHJcbiAgY291bnQ6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocGFnZTogbnVtYmVyLCBjb3VudDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnBhZ2UgPSBwYWdlO1xyXG4gICAgdGhpcy5jb3VudCA9IGNvdW50O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSBcImV4cHJlc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvdW50KGNvdW50UGFyYW06IHN0cmluZykge1xyXG4gICAgaWYoY291bnRQYXJhbSA9PT0gdW5kZWZpbmVkKXsgcmV0dXJuIDIwOyB9XHJcbiAgICBsZXQgY291bnQ6IG51bWJlciA9IHBhcnNlSW50KGNvdW50UGFyYW0pIHx8IDIwO1xyXG4gICAgaWYoY291bnQgPCAxKXsgY291bnQgPSAxOyB9XHJcbiAgICBpZihjb3VudCA+IDUwKXsgY291bnQgPSA1MDsgfVxyXG4gICAgcmV0dXJuIGNvdW50O1xyXG59IiwiaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gXCJleHByZXNzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYWdlKHBhZ2VQYXJhbTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIGlmKHBhZ2VQYXJhbSA9PT0gdW5kZWZpbmVkKXsgcmV0dXJuIDE7IH1cclxuICAgIGxldCBwYWdlOiBudW1iZXIgPSBwYXJzZUludChwYWdlUGFyYW0pIHx8IDA7XHJcbiAgICBpZihwYWdlIDwgMCl7IHBhZ2UgPSAxOyB9XHJcbiAgICBpZihwYWdlID4gMTAwMDAwMCl7IHBhZ2UgPSAxMDAwMDAwOyB9XHJcbiAgICByZXR1cm4gcGFnZTtcclxufSIsImltcG9ydCB7IEJhZFJlcXVlc3RFeGNlcHRpb24gfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VRdWVyeUZpZWxkcyhcclxuICBwYXJhbUZpZWxkczogc3RyaW5nLFxyXG4gIHF1ZXJ5RmllbGRzVmFsaWQ6IHN0cmluZ1tdLFxyXG4pOiBzdHJpbmdbXSB7XHJcbiAgaWYgKCFwYXJhbUZpZWxkcykge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuICBjb25zdCBmaWVsZHM6IHN0cmluZ1tdID0gcGFyYW1GaWVsZHMuc3BsaXQoJywnKS5tYXAoKGZpZWxkKSA9PiBmaWVsZC50cmltKCkpO1xyXG4gIGxldCBmaWVsZHNSZXN1bHQ6IHN0cmluZ1tdID0gW107XHJcbiAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XHJcbiAgICBpZiAocXVlcnlGaWVsZHNWYWxpZC5pbmNsdWRlcyhmaWVsZCkpIHtcclxuICAgICAgZmllbGRzUmVzdWx0LnB1c2goZmllbGQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBmaWVsZHNSZXN1bHQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFkUmVxdWVzdEV4Y2VwdGlvbiB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVF1ZXJ5UmVsYXRpb25zKFxyXG4gIHBhcmFtUmVsYXRpb25zOiBzdHJpbmcsXHJcbiAgcXVlcnlSZWxhdGlvbnM6IHN0cmluZ1tdLFxyXG4pOiBzdHJpbmdbXSB7XHJcbiAgaWYgKCFwYXJhbVJlbGF0aW9ucykge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuICBjb25zdCByZWxhdGlvbnM6IHN0cmluZ1tdID0gcGFyYW1SZWxhdGlvbnNcclxuICAgIC5zcGxpdCgnLCcpXHJcbiAgICAubWFwKChyZWxhdGlvbikgPT4gcmVsYXRpb24udHJpbSgpKTtcclxuICBsZXQgcmVsYXRpb25zUmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xyXG4gIHJlbGF0aW9ucy5mb3JFYWNoKChyZWxhdGlvbikgPT4ge1xyXG4gICAgaWYgKHF1ZXJ5UmVsYXRpb25zLmluY2x1ZGVzKHJlbGF0aW9uKSkge1xyXG4gICAgICByZWxhdGlvbnNSZXN1bHQucHVzaChyZWxhdGlvbik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlbGF0aW9uc1Jlc3VsdDtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvbW1vblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9taWNyb3NlcnZpY2VzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IE5lc3RGYWN0b3J5IH0gZnJvbSAnQG5lc3Rqcy9jb3JlJztcclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGJvb3RzdHJhcCgpIHtcclxuICBjb25zdCBhcHAgPSBhd2FpdCBOZXN0RmFjdG9yeS5jcmVhdGUoQXBwTW9kdWxlKTtcclxuICBhcHAuZW5hYmxlQ29ycygpO1xyXG4gIGF3YWl0IGFwcC5saXN0ZW4oMzAwMSk7XHJcbn1cclxuYm9vdHN0cmFwKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==