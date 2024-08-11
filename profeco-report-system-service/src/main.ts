import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions} from '@nestjs/microservices';
import { GrpcReport } from './configs/microservice.options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const microservicesGrpcReport = app.connectMicroservice<MicroserviceOptions>(GrpcReport);
  
  await app.startAllMicroservices();
  
  //await app.init();
  await app.listen(3002);
}
bootstrap();