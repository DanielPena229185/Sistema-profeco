import { ClientsModuleOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const microservices: ClientsModuleOptions = [
    {
        name: 'MARKET_PACKAGE',
        transport: Transport.GRPC,
        options: {
            package: 'market',
            protoPath: join(`src/microservices/protos/market.proto`),
            url: 'localhost:5240',
        },
    },
    {
        name: 'REPORTS_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'report',
          protoPath: join(`proto/report.proto`),
          url: 'localhost:50052',
        },
      },
      {
        name: 'MARKET_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'market',
          protoPath: join(`proto/market.proto`),
          url: 'localhost:5240',
        },
      },
];