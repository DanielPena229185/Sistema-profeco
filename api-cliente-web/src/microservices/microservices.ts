import { ClientsModuleOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const ClientModules: ClientsModuleOptions = [
  {
    name: 'MARKET_PACKAGE',
    transport: Transport.GRPC,
    options: {
      package: 'market',
      protoPath: join(`proto/market.proto`),
      url: 'market-microservice:5240',
    },
  },
  {
    name: 'DEAL_SERVICE',
    transport: Transport.GRPC,
    options: {
      package: 'deal',
      protoPath: join(`proto/deal.proto`),
      url: 'deals-microservice:5070',
    },
  },
  {
    name: 'REVIEW_SERVICE',
    transport: Transport.GRPC,
    options: {
      package: 'proto',
      protoPath: join(`proto/reviews.proto`),
      url: 'reviews-microservice:5030',
    },
  },
  {
    name: 'PREFERENCE_SERVICE',
    transport: Transport.GRPC,
    options: {
      package: 'proto',
      protoPath: join(`proto/preferences.proto`),
      url: 'customer-preferences-microservice:5010',
    },
  },
  {
    name: 'REPORTS_SERVICE',
    transport: Transport.GRPC,
    options: {
      package: 'report',
      protoPath: join(`proto/report.proto`),
      url: 'reports-microservice:50052',
    },
  },
  {
    name: 'PRODUCTS_SERVICE',
    transport: Transport.GRPC,
    options: {
      package: 'proto',
      protoPath: join(`proto/product.proto`),
      url: 'products-microservice:50051',
    },
  },
  {
    name: 'CUSTOMER_SERVICE',
    transport: Transport.GRPC,
    options: {
      package: 'proto',
      protoPath: join(`proto/customer.proto`),
      url: 'localhost:50050',
    },
  },
];
