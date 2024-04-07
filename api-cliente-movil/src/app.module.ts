import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ProductsController } from './products/products.controller';

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
    ])
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
