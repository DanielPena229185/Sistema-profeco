import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
export const GrpcReport:MicroserviceOptions ={
  transport: Transport.GRPC,
  options: {
    protoPath: join(`./proto/report.proto`),
    package: 'report',
    url: 'localhost:50052',
  }
}