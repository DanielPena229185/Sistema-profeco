"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModules = void 0;
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
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
    }
];
//# sourceMappingURL=microservices.js.map