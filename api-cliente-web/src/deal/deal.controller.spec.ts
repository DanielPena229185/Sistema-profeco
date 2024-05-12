import { Test, TestingModule } from '@nestjs/testing';
import { DealController } from './deal.controller';

describe('DealController', () => {
  let controller: DealController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DealController],
    }).compile();

    controller = module.get<DealController>(DealController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
