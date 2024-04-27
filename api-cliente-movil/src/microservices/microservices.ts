import { ClientsModule, Transport } from "@nestjs/microservices";
import { join } from "path";

export const ClientModules = ClientsModule.register([
    {
      name:'PRODUCTS_SERVICE',
      transport:Transport.GRPC,
      options: {
        package: 'proto',
        protoPath:join(`proto/product.proto`),
        url:'localhost:50051',
      }
    },
    {
        name: 'REPORTS_SERVICE',
        transport:Transport.GRPC,
        options:{
          package: 'report',
          protoPath:join(`proto/report.proto`),
          url: 'localhost:50052'
        }
    }
  ]);