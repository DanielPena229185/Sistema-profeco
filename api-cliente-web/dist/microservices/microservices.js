"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.microservices = void 0;
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
exports.microservices = [
    {
        name: 'MARKET_PACKAGE',
        transport: microservices_1.Transport.GRPC,
        options: {
            package: 'market',
            protoPath: (0, path_1.join)(`src/microservices/protos/market.proto`),
            url: 'localhost:5240',
        },
    }
];
//# sourceMappingURL=microservices.js.map