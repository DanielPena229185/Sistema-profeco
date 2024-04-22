import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ReportsController } from './reports/reports.controller';
import { ReportsService } from './reports/reports.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name:'PRODUCTS_SERVICE',
        transport:Transport.GRPC,
        options: {
          package: 'proto',
          protoPath:join(`proto/product.proto`),
          url:'localhost:50051',
        }
      }
    ]),
    ClientsModule.register([
      {
        name:'REPORTS_SERVICE',
        transport:Transport.GRPC,
        options: {
          package: 'report',
          protoPath:join(`proto/report.proto`),
          url:'localhost:50052',
        }
      }
    ])
  ],
  controllers: [AppController, ProductsController, ReportsController],
  providers: [AppService, ProductsService, ReportsService],
})
export class AppModule {}
