import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const ClientModules = ClientsModule.register([
  {
    name: 'PRODUCTS_SERVICE',
    transport: Transport.GRPC,
    options: {
      package: 'proto',
      protoPath: join(`proto/product.proto`),
      url: 'localhost:50051',
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
  {
    name: 'DEALS_SERVICE',
    transport: Transport.GRPC,
    options: {
      package: 'deal',
      protoPath: join(`proto/deal.proto`),
      url: 'localhost:50053',
    },
  },
  {
    name: 'REVIEWS_SERVICE',
    transport: Transport.GRPC,
    options: {
      package: 'proto',
      protoPath: join(`proto/reviews.proto`),
      url: 'localhost:50060',
    },
  },
]);
