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
const customer_service_1 = __webpack_require__(/*! ./customer/customer.service */ "./src/customer/customer.service.ts");
const customer_controller_1 = __webpack_require__(/*! ./customer/customer.controller */ "./src/customer/customer.controller.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [microservices_1.ClientsModule.register(microservices_2.ClientModules)],
        controllers: [app_controller_1.AppController, market_controller_1.MarketController, reports_controller_1.ReportsController, products_controller_1.ProductsController, deal_controller_1.DealController, customer_controller_1.CustomerController],
        providers: [app_service_1.AppService, market_service_1.MarketService, reports_service_1.ReportsService, products_service_1.ProductsService, deal_service_1.DealService, customer_service_1.CustomerService],
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

/***/ "./src/customer/customer.controller.ts":
/*!*********************************************!*\
  !*** ./src/customer/customer.controller.ts ***!
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomerController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const customer_service_1 = __webpack_require__(/*! ./customer.service */ "./src/customer/customer.service.ts");
const customer_types_1 = __webpack_require__(/*! ./customer.types */ "./src/customer/customer.types.ts");
let CustomerController = class CustomerController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    async createCustomer(customer) {
        return this.customerService.createCustomer(customer);
    }
    async getCustomerById(customerByIdRequest) {
        return this.customerService.getCustomerById(customerByIdRequest);
    }
};
exports.CustomerController = CustomerController;
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof customer_types_1.Customer !== "undefined" && customer_types_1.Customer) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], CustomerController.prototype, "createCustomer", null);
__decorate([
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof customer_types_1.CustomerByIdRequest !== "undefined" && customer_types_1.CustomerByIdRequest) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], CustomerController.prototype, "getCustomerById", null);
exports.CustomerController = CustomerController = __decorate([
    (0, common_1.Controller)('customer'),
    __metadata("design:paramtypes", [typeof (_a = typeof customer_service_1.CustomerService !== "undefined" && customer_service_1.CustomerService) === "function" ? _a : Object])
], CustomerController);


/***/ }),

/***/ "./src/customer/customer.service.ts":
/*!******************************************!*\
  !*** ./src/customer/customer.service.ts ***!
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
exports.CustomerService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let CustomerService = class CustomerService {
    constructor(client) {
        this.client = client;
    }
    onModuleInit() {
        this.customerService = this.client.getService('Customers');
    }
    async createCustomer(customer) {
        const $response = this.customerService.CreateCustomer(customer);
        return $response.toPromise();
    }
    async getCustomerById(customerByIdRequest) {
        const $response = this.customerService.GetCustomerById(customerByIdRequest);
        return $response.toPromise();
    }
};
exports.CustomerService = CustomerService;
exports.CustomerService = CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('CUSTOMER_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object])
], CustomerService);


/***/ }),

/***/ "./src/customer/customer.types.ts":
/*!****************************************!*\
  !*** ./src/customer/customer.types.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


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
    async getDeals(params) {
        return this.dealService.getDeals(params);
    }
    async getDealById(getDeal) {
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
    async getMarkets(query) {
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
    async getMarketById(query, id) {
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
    __metadata("design:returntype", Promise)
], MarketController.prototype, "getMarkets", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, get_market_by_id_1.GetMarketByIdQueryDTO)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof get_market_by_id_query_dto_1.GetMarketByIdDTO !== "undefined" && get_market_by_id_query_dto_1.GetMarketByIdDTO) === "function" ? _c : Object, String]),
    __metadata("design:returntype", Promise)
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
        },
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
        name: 'REVIEW_SERVICE',
        transport: microservices_1.Transport.GRPC,
        options: {
            package: 'proto',
            protoPath: (0, path_1.join)(`proto/reviews.proto`),
            url: 'localhost:5030',
        },
    },
    {
        name: 'PREFERENCE_SERVICE',
        transport: microservices_1.Transport.GRPC,
        options: {
            package: 'proto',
            protoPath: (0, path_1.join)(`proto/preferences.proto`),
            url: 'localhost:5010',
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
    {
        name: 'CUSTOMER_SERVICE',
        transport: microservices_1.Transport.GRPC,
        options: {
            package: 'proto',
            protoPath: (0, path_1.join)(`proto/customer.proto`),
            url: 'localhost:50050',
        },
    }
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