import { Test, TestingModule } from '@nestjs/testing';
import { RecievedReportsController } from './recieved-reports.controller';

describe('RecievedReportsController', () => {
  let controller: RecievedReportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecievedReportsController],
    }).compile();

    controller = module.get<RecievedReportsController>(RecievedReportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
