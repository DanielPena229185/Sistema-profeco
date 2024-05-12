import { ClientsModuleOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const ClientModules: ClientsModuleOptions = [
    {
        name: 'MARKET_PACKAGE',
        transport: Transport.GRPC,
        options: {
            package: 'market',
            protoPath: join(`proto/market.proto`),
            url: 'localhost:5240',
        }
    },
    {
        name: 'DEAL_SERVICE',
        transport: Transport.GRPC,
        options: {
            package: 'deal',
            protoPath: join(`proto/deal.proto`),
            url: 'localhost:5070',
        },
    }
];