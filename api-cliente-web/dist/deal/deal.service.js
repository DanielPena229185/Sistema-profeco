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
exports.DealService = void 0;
const common_1 = require("@nestjs/common");
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
    __metadata("design:paramtypes", [Object])
], DealService);
//# sourceMappingURL=deal.service.js.map