import { Test, TestingModule } from '@nestjs/testing';
import { MultaController } from './multa.controller';

describe('MultaController', () => {
  let controller: MultaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MultaController],
    }).compile();

    controller = module.get<MultaController>(MultaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
