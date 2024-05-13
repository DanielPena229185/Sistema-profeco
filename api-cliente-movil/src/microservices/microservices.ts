import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const ClientModules = ClientsModule.register([
    {
        name: 'MARKET_PACKAGE',
        transport: Transport.GRPC,
        options: {
            package: 'market',
            protoPath: join(`proto/market.proto`),
            url: 'localhost:5240',
            // url: 'market-microservice:5240',
            // Todavia no hay imagen de docker para el microservicio de market
        },
    },
    {
        name: 'DEAL_SERVICE',
        transport: Transport.GRPC,
        options: {
            package: 'deal',
            protoPath: join(`proto/deal.proto`),
            url: 'localhost:5070',
            // url: 'deals-microservice:5070',
            // Todavia no hay imagen de docker para el microservicio de deal
        },
    },
    {
        name: 'REVIEW_SERVICE',
        transport: Transport.GRPC,
        options: {
            package: 'proto',
            protoPath: join(`proto/reviews.proto`),
            // usar env para la url
            url: 'reviews-microservice:5030',
            // url: 'localhost:5030',
        },
    },
    {
        name: 'PREFERENCE_SERVICE',
        transport: Transport.GRPC,
        options: {
            package: 'proto',
            protoPath: join(`proto/preferences.proto`),
            // usar env para la url
            url: 'customer-preferences-microservice:5010',
            //url: 'localhost:5010',
        },
    },
    {
        name: 'REPORTS_SERVICE',
        transport: Transport.GRPC,
        options: {
            package: 'report',
            protoPath: join(`proto/report.proto`),
            // usar env para la url
            url: 'reports-microservice:50052',
            // url: 'localhost:50052',
        },
    },
    {
        name: 'PRODUCTS_SERVICE',
        transport: Transport.GRPC,
        options: {
            package: 'proto',
            protoPath: join(`proto/product.proto`),
            // usar env para la url
            url: 'products-microservice:50051',
            // url: 'localhost:50051',
        },
    },
    {
        name: 'CUSTOMER_SERVICE',
        transport: Transport.GRPC,
        options: {
            package: 'proto',
            protoPath: join(`proto/customer.proto`),
            url: 'localhost:50050',
            // No hay microservicio de customer, 
            // Se cambio al url de auth0
        },
    }
]);
